import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HeroSection from "@/components/interno/HeroSection";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  noticiasExternas,
  noticiasInternasOrdenadas,
  parseDataPublicacao,
} from "@/components/data/noticias";
import AnimatedSection from "@/components/AnimatedSection";
import { ExternalLink } from "lucide-react";
import type { ExternalNewsMetadata, ExternalNewsMetadataResponse } from "@shared/api";

type NewsItem =
  | {
      type: "internal";
      id: number;
      title: string;
      image: string;
      date: string;
      timestamp: number;
      link: string;
    }
  | {
      type: "external";
      id: string;
      title: string;
      image: string;
      date: string;
      timestamp: number;
      link: string;
      source: string;
    };

const formatExternalDate = (publishedAt?: string) => {
  if (!publishedAt) return "";

  return new Intl.DateTimeFormat("pt-BR", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  }).format(new Date(publishedAt));
};

const getExternalTimestamp = (publishedAt?: string) => {
  if (!publishedAt) return 0;

  const timestamp = Date.parse(publishedAt);
  return Number.isNaN(timestamp) ? 0 : timestamp;
};

const getSourceFromUrl = (url: string) => new URL(url).hostname.replace(/^www\./, "");

const buildInternalItems = (): NewsItem[] =>
  noticiasInternasOrdenadas.map((noticia) => ({
    type: "internal",
    id: noticia.id,
    title: noticia.titulo,
    image: noticia.imagemDestaque,
    date: noticia.dataPublicacao,
    timestamp: parseDataPublicacao(noticia.dataPublicacao),
    link: `/noticias/${noticia.slug}`,
  }));

const buildExternalItems = (externalArticles: ExternalNewsMetadata[]): NewsItem[] =>
  noticiasExternas.map((noticia) => {
    const metadata = externalArticles.find((article) => article.url === noticia.url);
    const publishedAt = metadata?.publishedAt;

    return {
      type: "external",
      id: noticia.url,
      title: noticia.titulo,
      image: noticia.imagem || metadata?.image || "/images/noticiaHeader.png",
      date: formatExternalDate(publishedAt),
      timestamp: getExternalTimestamp(publishedAt),
      link: noticia.url,
      source: metadata?.source ?? getSourceFromUrl(noticia.url),
    };
  });

const ArticleCard = ({ item }: { item: NewsItem }) => {
  const content = (
    <>
      <div className="overflow-hidden">
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
        />
      </div>
      <div className="p-6 flex flex-col flex-grow">
        {item.type === "external" && (
          <span className="text-xs font-semibold uppercase tracking-[0.12em] text-terra-blue mb-3">
            {item.source}
          </span>
        )}
        <h3 className="text-xl font-semibold text-terra-navy flex-grow">{item.title}</h3>
        {item.date && <p className="text-sm text-gray-500 mt-2">{item.date}</p>}
        <span className="text-terra-blue mt-4 inline-flex items-center gap-2 font-semibold">
          {item.type === "external" ? "Ler na fonte" : "Leia mais"}
          {item.type === "external" && <ExternalLink className="h-4 w-4" aria-hidden="true" />}
        </span>
      </div>
    </>
  );

  if (item.type === "external") {
    return (
      <a
        href={item.link}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col h-full group transition-transform duration-300 hover:scale-105 hover:shadow-xl"
      >
        {content}
      </a>
    );
  }

  return (
    <Link
      to={item.link}
      className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col h-full group transition-transform duration-300 hover:scale-105 hover:shadow-xl"
    >
      {content}
    </Link>
  );
};

const ArticleSection = () => {
  const [externalArticles, setExternalArticles] = useState<
    ExternalNewsMetadataResponse["articles"]
  >([]);

  useEffect(() => {
    if (!noticiasExternas.length) return;

    const controller = new AbortController();
    const externalUrls = noticiasExternas.map((noticia) => noticia.url);

    const loadExternalArticles = async () => {
      try {
        const response = await fetch("/api/external-news-metadata", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ urls: externalUrls }),
          signal: controller.signal,
        });
        if (!response.ok) throw new Error("Falha ao carregar noticias externas");
        const data: ExternalNewsMetadataResponse = await response.json();
        setExternalArticles(data.articles);
      } catch (error) {
        if (!controller.signal.aborted) {
          setExternalArticles([]);
        }
      }
    };

    loadExternalArticles();

    return () => controller.abort();
  }, []);

  const newsItems = [...buildInternalItems(), ...buildExternalItems(externalArticles)].sort(
    (a, b) => b.timestamp - a.timestamp,
  );

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsItems.map((item, index) => (
            <AnimatedSection key={`${item.type}-${item.id}`} delay={index * 100}>
              <ArticleCard item={item} />
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default function Noticias() {
  return (
    <div className="bg-white overflow-x-hidden">
      <main>
        <Header />
        <AnimatedSection variant="fade">
          <HeroSection backgroundImage="/images/bg-noticias.jpg" title="" subtitle="" />
        </AnimatedSection>
        <AnimatedSection>
          <section className="z-20">
            <div className="container mx-auto pt-14 max-w-7xl shadow-[0px_-30px_15px_-10px_rgba(0,0,0,0.3)] text-center bg-white relative -mt-24 md:-mt-36">
              <div className="py-10">
                <h2 className="text-3xl md:text-4xl lg:text-5xl md:text-center font-bold font-lexend text-terra-navy">
                  Notícias
                </h2>
              </div>
              <ArticleSection />
            </div>
          </section>
        </AnimatedSection>
      </main>
      <Footer />
    </div>
  );
}
