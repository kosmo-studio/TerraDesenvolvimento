import { RequestHandler } from "express";
import {
  ExternalNewsMetadata,
  ExternalNewsMetadataResponse,
} from "@shared/api";

const MAX_URLS_PER_REQUEST = 12;

const decodeHtml = (value: string): string =>
  value
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&apos;/g, "'")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">");

const getMetaContent = (html: string, attribute: string, value: string): string => {
  const escapedValue = value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const pattern = new RegExp(
    `<meta\\s+(?=[^>]*\\b${attribute}=["']${escapedValue}["'])(?=[^>]*\\bcontent=["']([^"']+)["'])[^>]*>`,
    "i",
  );
  return decodeHtml(pattern.exec(html)?.[1]?.trim() ?? "");
};

const getMetaContents = (html: string, selectors: Array<[string, string]>): string =>
  selectors.reduce((publishedAt, [attribute, value]) => {
    if (publishedAt) return publishedAt;
    return getMetaContent(html, attribute, value);
  }, "");

const getTitle = (html: string): string =>
  decodeHtml(/<title[^>]*>([^<]+)<\/title>/i.exec(html)?.[1]?.trim() ?? "");

const normalizePublishedAt = (value: string): string => {
  if (!value) return "";

  const timestamp = Date.parse(value);
  return Number.isNaN(timestamp) ? "" : new Date(timestamp).toISOString();
};

const getPublishedAt = (html: string): string => {
  const metadataDate = getMetaContents(html, [
    ["property", "article:published_time"],
    ["property", "og:published_time"],
    ["name", "article:published_time"],
    ["name", "pubdate"],
    ["name", "publishdate"],
    ["name", "date"],
    ["name", "datePublished"],
    ["itemprop", "datePublished"],
  ]);
  const timeDate = /<time[^>]+datetime=["']([^"']+)["'][^>]*>/i.exec(html)?.[1]?.trim() ?? "";

  return normalizePublishedAt(metadataDate || timeDate);
};

const normalizeImageUrl = (image: string, pageUrl: string): string => {
  if (!image) return "";

  try {
    return new URL(image, pageUrl).toString();
  } catch {
    return "";
  }
};

const getHostnameSource = (pageUrl: string): string => {
  try {
    return new URL(pageUrl).hostname.replace(/^www\./, "");
  } catch {
    return "Fonte externa";
  }
};

const fetchMetadata = async (url: string): Promise<ExternalNewsMetadata> => {
  const response = await fetch(url, {
    headers: {
      "User-Agent": "TerraDesenvolvimentoBot/1.0 (+https://www.terradesenvolvimento.com.br)",
      Accept: "text/html,application/xhtml+xml",
    },
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch ${url}: ${response.status}`);
  }

  const html = await response.text();
  const title =
    getMetaContent(html, "property", "og:title") ||
    getMetaContent(html, "name", "twitter:title") ||
    getTitle(html) ||
    url;
  const image = normalizeImageUrl(
    getMetaContent(html, "property", "og:image") ||
      getMetaContent(html, "name", "twitter:image"),
    url,
  );
  const source =
    getMetaContent(html, "property", "og:site_name") || getHostnameSource(url);
  const publishedAt = getPublishedAt(html);

  return {
    url,
    title,
    image,
    source,
    ...(publishedAt ? { publishedAt } : {}),
  };
};

export const handleExternalNewsMetadata: RequestHandler = async (req, res) => {
  const urls = Array.isArray(req.body?.urls) ? req.body.urls : [];
  const validUrls = urls
    .filter((url): url is string => typeof url === "string")
    .slice(0, MAX_URLS_PER_REQUEST)
    .filter((url) => {
      try {
        const parsed = new URL(url);
        return parsed.protocol === "https:" || parsed.protocol === "http:";
      } catch {
        return false;
      }
    });

  const articles = await Promise.all(
    validUrls.map(async (url) => {
      try {
        return await fetchMetadata(url);
      } catch {
        return {
          url,
          title: url,
          image: "",
          source: getHostnameSource(url),
        };
      }
    }),
  );

  const response: ExternalNewsMetadataResponse = { articles };
  res.json(response);
};
