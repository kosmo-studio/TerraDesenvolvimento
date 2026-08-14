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
    title: "Terra Desenvolvimento Agropecuário | Gestão para fazendas",
    description:
      "Consultoria em gestão agropecuária para fazendas, com planejamento estratégico, controle, diagnóstico de desempenho e desenvolvimento gerencial.",
  },
  "/servicos": {
    title: "Serviços de gestão agropecuária | Terra Desenvolvimento",
    description:
      "Conheça soluções para melhorar a produtividade, eficiência, controles, planejamento e resultados da sua fazenda.",
    image: `${SITE_URL}/images/Diagnostico-desempenho.webp`,
  },
  "/resultados": {
    title: "Resultados e clientes | Terra Desenvolvimento",
    description:
      "Veja depoimentos de produtores e empresas rurais que melhoraram a gestão e os resultados com a Terra Desenvolvimento.",
    image: `${SITE_URL}/images/bg-resultados.webp`,
  },
  "/Resultados": {
    title: "Resultados e clientes | Terra Desenvolvimento",
    description:
      "Veja depoimentos de produtores e empresas rurais que melhoraram a gestão e os resultados com a Terra Desenvolvimento.",
    image: `${SITE_URL}/images/bg-resultados.webp`,
  },
  "/cursosEventos": {
    title: "Cursos e eventos de gestão agropecuária | Terra Desenvolvimento",
    description:
      "Cursos e eventos para produtores, gestores, técnicos e estudantes que buscam evoluir na gestão da empresa agropecuária.",
    image: `${SITE_URL}/images/HeroCursoEvento.webp`,
  },
  "/noticias": {
    title: "Notícias do agronegócio | Terra Desenvolvimento",
    description:
      "Conteúdos, entrevistas e notícias sobre gestão, produtividade, mercado e desenvolvimento do agronegócio.",
    image: `${SITE_URL}/images/bg-noticias.webp`,
  },
  "/trabalhe-conosco": {
    title: "Trabalhe conosco | Terra Desenvolvimento",
    description:
      "Envie seu currículo e conheça oportunidades para desenvolver sua carreira junto a uma equipe especializada no agronegócio.",
    image: `${SITE_URL}/images/bg-nossahistoria.webp`,
  },
  "/contato": {
    title: "Contato e unidades | Terra Desenvolvimento",
    description:
      "Fale com um consultor Terra Desenvolvimento e encontre nossas unidades no Brasil, Paraguai e Bolívia.",
    image: `${SITE_URL}/images/bg-contato-jpeg.webp`,
  },
  "/diagnostico-maturidade": {
    title: "Diagnóstico de maturidade da fazenda | Terra Desenvolvimento",
    description:
      "Avalie a maturidade da gestão da sua fazenda e identifique oportunidades de evolução com a Terra Desenvolvimento.",
  },
  "/nossaHistoria": {
    title: "Nossa história | Terra Desenvolvimento Agropecuário",
    description:
      "Conheça a trajetória da Terra Desenvolvimento Agropecuário e sua atuação em gestão profissional de fazendas.",
    image: `${SITE_URL}/images/bg-nossahistoria.webp`,
  },
  "/servicos/MapeamentodeOportunidades": {
    title: "Mapeamento de oportunidades para fazendas | Terra Desenvolvimento",
    description:
      "Diagnóstico de desempenho para entender a situação financeira, produtiva e gerencial da fazenda e mapear oportunidades.",
    image: `${SITE_URL}/images/bg-analise.webp`,
  },
  "/servicos/ImplementacaoDeControle": {
    title: "Implantação de controle agropecuário | Terra Desenvolvimento",
    description:
      "Metodologia para organizar dados, controles e informações essenciais da fazenda com mais rapidez e confiabilidade.",
    image: `${SITE_URL}/images/bg-implantacao.webp`,
  },
  "/servicos/PlanejamentoEstrategico": {
    title: "Planejamento estratégico agropecuário | Terra Desenvolvimento",
    description:
      "Projeto para orientar o crescimento sustentável da lucratividade e gerenciabilidade da empresa rural.",
    image: `${SITE_URL}/images/bg-planejamento.webp`,
  },
  "/servicos/ProgramaRecuperaçãoGerencial": {
    title: "Programa de Recuperação Gerencial | Terra Desenvolvimento",
    description:
      "Programa para recuperar performance, valorizar ativos e desenvolver a atividade agropecuária com gestão orientada a resultados.",
    image: `${SITE_URL}/images/bg-prg.webp`,
  },
  "/servicos/AnalisePlanoDeNegocio": {
    title: "Análise e plano de negócios para fazendas | Terra Desenvolvimento",
    description:
      "Suporte para analisar investimentos, compra de propriedade rural, rentabilidade e viabilidade econômica.",
    image: `${SITE_URL}/images/bg-empresapecuaria.webp`,
  },
  "/servicos/DesenvolvimentoGerencial": {
    title: "Desenvolvimento gerencial no agro | Terra Desenvolvimento",
    description:
      "Apoio para formar equipes realizadoras, fortalecer cultura gerencial e melhorar a execução nas fazendas.",
    image: `${SITE_URL}/images/bg-desenvolvimentogerencial.webp`,
  },
  "/servicos/PerformaTerra": {
    title: "Performa Terra | Consultoria sob medida para fazendas",
    description:
      "Solução de curto prazo e sob medida para melhorar desempenho, indicadores e resultados da fazenda.",
    image: `${SITE_URL}/images/bg-performa.webp`,
  },
  "/EmpresaPecuaria": {
    title: "Curso de Gestão da Empresa Pecuária | Terra Desenvolvimento",
    description:
      "Curso prático para produtores, gestores, técnicos e estudantes aplicarem ferramentas de gestão na realidade da fazenda.",
    image: `${SITE_URL}/images/BANNERCURSOGESTAO.webp`,
  },
  "/EmpresaPecuariaGO": {
    title: "Curso de Gestão da Empresa Pecuária em Goiânia | Terra",
    description:
      "Detalhes, módulos e inscrições do Curso de Gestão da Empresa Pecuária em Goiânia.",
    image: `${SITE_URL}/images/GESTAOGOIANIA-png.webp`,
  },
  "/EmpresaPecuariaXG": {
    title: "Curso de Gestão da Empresa Pecuária em Xinguara | Terra",
    description:
      "Detalhes, módulos e inscrições do Curso de Gestão da Empresa Pecuária em Xinguara.",
    image: `${SITE_URL}/images/GESTAOXINGUARA-png.webp`,
  },
  "/EmpresaPecuariaMT": {
    title: "Curso de Gestão da Empresa Pecuária em Cuiabá | Terra",
    description:
      "Detalhes, módulos e inscrições do Curso de Gestão da Empresa Pecuária em Cuiabá.",
    image: `${SITE_URL}/images/BANNERcuiaba-png.webp`,
  },
  "/EmpresaPecuariaPP": {
    title: "Curso de Gestão da Empresa Pecuária em Presidente Prudente | Terra",
    description:
      "Detalhes, módulos e inscrições do Curso de Gestão da Empresa Pecuária em Presidente Prudente.",
    image: `${SITE_URL}/images/bannerPP-png.webp`,
  },
  "/EmpresaPecuariaLD": {
    title: "Curso de Gestão da Empresa Pecuária em Londrina | Terra",
    description:
      "Detalhes, módulos e inscrições do Curso de Gestão da Empresa Pecuária em Londrina.",
    image: `${SITE_URL}/images/banner-londrina-gestao.png`,
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
  name: "Terra Desenvolvimento Agropecuário",
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
      name: "Início",
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
          title: "Página não encontrada | Terra Desenvolvimento",
          description:
            "A página solicitada não foi encontrada. Acesse as principais soluções da Terra Desenvolvimento Agropecuário.",
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
