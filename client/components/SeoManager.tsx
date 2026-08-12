import { useEffect, useMemo } from "react";
import { useLocation } from "react-router-dom";
import { todasAsNoticias } from "@/components/data/noticias";

const SITE_URL = "https://terradesenvolvimento.com.br";
const SITE_NAME = "Terra Desenvolvimento";
const DEFAULT_IMAGE = `${SITE_URL}/images/fundoBanner.webp`;

type SeoData = {
  title: string;
  description: string;
  image?: string;
  type?: "website" | "article";
};

const staticSeo: Record<string, SeoData> = {
  "/": {
    title: "Terra Desenvolvimento Agropecuario | Gestao para fazendas",
    description:
      "Consultoria em gestao agropecuaria para fazendas, com planejamento estrategico, controle, diagnostico de desempenho e desenvolvimento gerencial.",
  },
  "/servicos": {
    title: "Servicos de gestao agropecuaria | Terra Desenvolvimento",
    description:
      "Conheca solucoes para melhorar a produtividade, eficiencia, controles, planejamento e resultados da sua fazenda.",
    image: `${SITE_URL}/images/Diagnostico-desempenho.webp`,
  },
  "/resultados": {
    title: "Resultados e clientes | Terra Desenvolvimento",
    description:
      "Veja depoimentos de produtores e empresas rurais que melhoraram a gestao e os resultados com a Terra Desenvolvimento.",
    image: `${SITE_URL}/images/bg-resultados.webp`,
  },
  "/Resultados": {
    title: "Resultados e clientes | Terra Desenvolvimento",
    description:
      "Veja depoimentos de produtores e empresas rurais que melhoraram a gestao e os resultados com a Terra Desenvolvimento.",
    image: `${SITE_URL}/images/bg-resultados.webp`,
  },
  "/cursosEventos": {
    title: "Cursos e eventos de gestao agropecuaria | Terra Desenvolvimento",
    description:
      "Cursos e eventos para produtores, gestores, tecnicos e estudantes que buscam evoluir na gestao da empresa agropecuaria.",
    image: `${SITE_URL}/images/HeroCursoEvento.webp`,
  },
  "/noticias": {
    title: "Noticias do agronegocio | Terra Desenvolvimento",
    description:
      "Conteudos, entrevistas e noticias sobre gestao, produtividade, mercado e desenvolvimento do agronegocio.",
    image: `${SITE_URL}/images/bg-noticias.webp`,
  },
  "/trabalhe-conosco": {
    title: "Trabalhe conosco | Terra Desenvolvimento",
    description:
      "Envie seu curriculo e conheca oportunidades para desenvolver sua carreira junto a uma equipe especializada no agronegocio.",
    image: `${SITE_URL}/images/bg-nossahistoria.webp`,
  },
  "/contato": {
    title: "Contato e unidades | Terra Desenvolvimento",
    description:
      "Fale com um consultor Terra Desenvolvimento e encontre nossas unidades no Brasil, Paraguai e Bolivia.",
    image: `${SITE_URL}/images/bg-contato-jpeg.webp`,
  },
  "/diagnostico-maturidade": {
    title: "Diagnostico de maturidade da fazenda | Terra Desenvolvimento",
    description:
      "Avalie a maturidade da gestao da sua fazenda e identifique oportunidades de evolucao com a Terra Desenvolvimento.",
  },
  "/nossaHistoria": {
    title: "Nossa historia | Terra Desenvolvimento Agropecuario",
    description:
      "Conheca a trajetoria da Terra Desenvolvimento Agropecuario e sua atuacao em gestao profissional de fazendas.",
    image: `${SITE_URL}/images/bg-nossahistoria.webp`,
  },
  "/servicos/MapeamentodeOportunidades": {
    title: "Mapeamento de oportunidades para fazendas | Terra Desenvolvimento",
    description:
      "Diagnostico de desempenho para entender a situacao financeira, produtiva e gerencial da fazenda e mapear oportunidades.",
    image: `${SITE_URL}/images/bg-analise.webp`,
  },
  "/servicos/ImplementacaoDeControle": {
    title: "Implantacao de controle agropecuario | Terra Desenvolvimento",
    description:
      "Metodologia para organizar dados, controles e informacoes essenciais da fazenda com mais rapidez e confiabilidade.",
    image: `${SITE_URL}/images/bg-implantacao.webp`,
  },
  "/servicos/PlanejamentoEstrategico": {
    title: "Planejamento estrategico agropecuario | Terra Desenvolvimento",
    description:
      "Projeto para orientar o crescimento sustentavel da lucratividade e gerenciabilidade da empresa rural.",
    image: `${SITE_URL}/images/bg-planejamento.webp`,
  },
  "/servicos/ProgramaRecuperaçãoGerencial": {
    title: "Programa de Recuperacao Gerencial | Terra Desenvolvimento",
    description:
      "Programa para recuperar performance, valorizar ativos e desenvolver a atividade agropecuaria com gestao orientada a resultados.",
    image: `${SITE_URL}/images/bg-prg.webp`,
  },
  "/servicos/AnalisePlanoDeNegocio": {
    title: "Analise e plano de negocios para fazendas | Terra Desenvolvimento",
    description:
      "Suporte para analisar investimentos, compra de propriedade rural, rentabilidade e viabilidade economica.",
    image: `${SITE_URL}/images/bg-empresapecuaria.webp`,
  },
  "/servicos/DesenvolvimentoGerencial": {
    title: "Desenvolvimento gerencial no agro | Terra Desenvolvimento",
    description:
      "Apoio para formar equipes realizadoras, fortalecer cultura gerencial e melhorar a execucao nas fazendas.",
    image: `${SITE_URL}/images/bg-desenvolvimentogerencial.webp`,
  },
  "/servicos/PerformaTerra": {
    title: "Performa Terra | Consultoria sob medida para fazendas",
    description:
      "Solucao de curto prazo e sob medida para melhorar desempenho, indicadores e resultados da fazenda.",
    image: `${SITE_URL}/images/bg-performa.webp`,
  },
  "/EmpresaPecuaria": {
    title: "Curso de Gestao da Empresa Pecuaria | Terra Desenvolvimento",
    description:
      "Curso pratico para produtores, gestores, tecnicos e estudantes aplicarem ferramentas de gestao na realidade da fazenda.",
    image: `${SITE_URL}/images/BANNERCURSOGESTAO.webp`,
  },
  "/EmpresaPecuariaGO": {
    title: "Curso de Gestao da Empresa Pecuaria em Goiania | Terra",
    description:
      "Detalhes, modulos e inscricoes do Curso de Gestao da Empresa Pecuaria em Goiania.",
    image: `${SITE_URL}/images/GESTAOGOIANIA-png.webp`,
  },
  "/EmpresaPecuariaXG": {
    title: "Curso de Gestao da Empresa Pecuaria em Xinguara | Terra",
    description:
      "Detalhes, modulos e inscricoes do Curso de Gestao da Empresa Pecuaria em Xinguara.",
    image: `${SITE_URL}/images/GESTAOXINGUARA-png.webp`,
  },
  "/EmpresaPecuariaMT": {
    title: "Curso de Gestao da Empresa Pecuaria em Cuiaba | Terra",
    description:
      "Detalhes, modulos e inscricoes do Curso de Gestao da Empresa Pecuaria em Cuiaba.",
    image: `${SITE_URL}/images/BANNERcuiaba-png.webp`,
  },
  "/EmpresaPecuariaPP": {
    title: "Curso de Gestao da Empresa Pecuaria em Presidente Prudente | Terra",
    description:
      "Detalhes, modulos e inscricoes do Curso de Gestao da Empresa Pecuaria em Presidente Prudente.",
    image: `${SITE_URL}/images/bannerPP-png.webp`,
  },
};

const ensureMeta = (selector: string, create: () => HTMLMetaElement) => {
  const current = document.head.querySelector<HTMLMetaElement>(selector);
  if (current) return current;

  const element = create();
  document.head.appendChild(element);
  return element;
};

const setMeta = (attribute: "name" | "property", key: string, content: string) => {
  const meta = ensureMeta(`meta[${attribute}="${key}"]`, () => {
    const element = document.createElement("meta");
    element.setAttribute(attribute, key);
    return element;
  });

  meta.setAttribute("content", content);
};

const setCanonical = (url: string) => {
  let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (!canonical) {
    canonical = document.createElement("link");
    canonical.rel = "canonical";
    document.head.appendChild(canonical);
  }

  canonical.href = url;
};

const toAbsoluteImage = (image?: string) => {
  if (!image) return DEFAULT_IMAGE;
  return image.startsWith("http") ? image : `${SITE_URL}${image}`;
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Terra Desenvolvimento Agropecuario",
  url: SITE_URL,
  logo: `${SITE_URL}/images/terra%20logo.webp`,
  sameAs: [
    "https://www.instagram.com/terradesenvolvimento/",
    "https://www.linkedin.com/company/terra-desenvolvimento-agropecuario/",
  ],
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: "+55-67-3026-3442",
      contactType: "customer service",
      areaServed: ["BR", "PY", "BO"],
      availableLanguage: "Portuguese",
    },
  ],
};

const buildBreadcrumbSchema = (pathname: string, title: string) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Inicio",
      item: `${SITE_URL}/`,
    },
    {
      "@type": "ListItem",
      position: 2,
      name: title.replace(/\s\|.*$/, ""),
      item: `${SITE_URL}${pathname}`,
    },
  ],
});

export default function SeoManager() {
  const location = useLocation();

  const seo = useMemo(() => {
    const pathname = decodeURI(location.pathname);
    const article = pathname.startsWith("/noticias/")
      ? todasAsNoticias.find((noticia) => `/noticias/${noticia.slug}` === pathname)
      : undefined;

    if (article) {
      return {
        pathname,
        data: {
          title: `${article.titulo} | Terra Desenvolvimento`,
          description: article.resumo,
          image: toAbsoluteImage(article.imagemDestaque),
          type: "article" as const,
        },
      };
    }

    return {
      pathname,
      data:
        staticSeo[pathname] ??
        ({
          title: "Pagina nao encontrada | Terra Desenvolvimento",
          description:
            "A pagina solicitada nao foi encontrada. Acesse as principais solucoes da Terra Desenvolvimento Agropecuario.",
        } satisfies SeoData),
    };
  }, [location.pathname]);

  useEffect(() => {
    const url = `${SITE_URL}${seo.pathname}`;
    const image = toAbsoluteImage(seo.data.image);

    document.documentElement.lang = "pt-BR";
    document.title = seo.data.title;

    setMeta("name", "description", seo.data.description);
    setMeta("name", "robots", "index, follow");
    setMeta("property", "og:type", seo.data.type ?? "website");
    setMeta("property", "og:locale", "pt_BR");
    setMeta("property", "og:site_name", SITE_NAME);
    setMeta("property", "og:title", seo.data.title);
    setMeta("property", "og:description", seo.data.description);
    setMeta("property", "og:image", image);
    setMeta("property", "og:url", url);
    setMeta("name", "twitter:card", "summary_large_image");
    setMeta("name", "twitter:title", seo.data.title);
    setMeta("name", "twitter:description", seo.data.description);
    setMeta("name", "twitter:image", image);
    setCanonical(url);

    const existingSchema = document.getElementById("terra-json-ld");
    existingSchema?.remove();

    const schema = document.createElement("script");
    schema.id = "terra-json-ld";
    schema.type = "application/ld+json";
    schema.text = JSON.stringify([
      organizationSchema,
      buildBreadcrumbSchema(seo.pathname, seo.data.title),
    ]);
    document.head.appendChild(schema);
  }, [seo]);

  return null;
}
