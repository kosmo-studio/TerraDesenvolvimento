import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HeroSection from "@/components/interno/HeroSection";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  noticiasExternas,
  noticiasInternasOrdenadas,
} from "@/components/data/noticias";
import AnimatedSection from "@/components/AnimatedSection"; 
import { ExternalLink } from "lucide-react";
import type { ExternalNewsMetadataResponse } from "@shared/api";

// --- COMPONENTE ARTICLECARD ---
const ArticleCard = ({ image, title, date, link }) => {
  return (
    <Link 
      to={link} 
      className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col h-full group transition-transform duration-300 hover:scale-105 hover:shadow-xl"
    >
      <div className="overflow-hidden">
        <img src={image} alt={title} className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110" />
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-semibold text-terra-navy flex-grow">{title}</h3>
        <p className="text-sm text-gray-500 mt-2">{date}</p>
        <span className="text-terra-blue mt-4 block font-semibold">
          Leia mais
        </span>
      </div>
    </Link>
  );
};

const ExternalArticleCard = ({ image, title, source, link }) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col h-full group transition-transform duration-300 hover:scale-105 hover:shadow-xl"
    >
      <div className="overflow-hidden">
        <img src={image || "/images/noticiaHeader.png"} alt={title} className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110" />
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <span className="text-xs font-semibold uppercase tracking-[0.12em] text-terra-blue mb-3">
          {source}
        </span>
        <h3 className="text-xl font-semibold text-terra-navy flex-grow">{title}</h3>
        <span className="text-terra-blue mt-4 inline-flex items-center gap-2 font-semibold">
          Ler na fonte
          <ExternalLink className="h-4 w-4" aria-hidden="true" />
        </span>
      </div>
    </a>
  );
};

const ExternalArticleSection = () => {
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
        if (!response.ok) throw new Error("Falha ao carregar notícias externas");
        const data: ExternalNewsMetadataResponse = await response.json();
        setExternalArticles(
          noticiasExternas.map((noticia) => {
            const metadata = data.articles.find((article) => article.url === noticia.url);

            return {
              url: noticia.url,
              title: noticia.titulo,
              image: metadata?.image ?? "",
              source: metadata?.source ?? new URL(noticia.url).hostname.replace(/^www\./, ""),
            };
          }),
        );
      } catch (error) {
        if (!controller.signal.aborted) {
          setExternalArticles(
            noticiasExternas.map((noticia) => ({
              url: noticia.url,
              title: noticia.titulo,
              image: "",
              source: new URL(noticia.url).hostname.replace(/^www\./, ""),
            })),
          );
        }
      }
    };

    loadExternalArticles();

    return () => controller.abort();
  }, []);

  if (!noticiasExternas.length) return null;

  return (
    <section className="px-4 pb-12">
      <div className="mx-auto max-w-7xl text-left">
        <div className="mb-8 text-center">
          <h3 className="font-lexend text-2xl md:text-3xl font-bold text-terra-navy">
            Notícias externas
          </h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {externalArticles.map((noticia, index) => (
            <AnimatedSection key={noticia.url} delay={index * 100}>
              <ExternalArticleCard
                image={noticia.image}
                title={noticia.title}
                source={noticia.source}
                link={noticia.url}
              />
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- COMPONENTE ARTICLESECTION ---
const ArticleSection = () => {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* 2. Cada card agora é envolvido pelo AnimatedSection com um atraso */}
          {noticiasInternasOrdenadas.map((noticia, index) => (
            <AnimatedSection key={noticia.id} delay={index * 100}>
              <ArticleCard
                image={noticia.imagemDestaque}
                title={noticia.titulo}
                date={noticia.dataPublicacao}
                link={`/noticias/${noticia.slug}`}
              />
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- PÁGINA PRINCIPAL ---
export default function Noticias() {
  return (
    <div className="bg-white overflow-x-hidden">
      <main>
        <Header />
        <AnimatedSection variant="fade">
          <HeroSection
            backgroundImage="/images/bg-noticias.jpg"
            title=""
            subtitle=""
          />
        </AnimatedSection>
        <AnimatedSection>
        <section className="z-20">
          <div className="container mx-auto pt-14 max-w-7xl shadow-[0px_-30px_15px_-10px_rgba(0,0,0,0.3)] text-center bg-white relative -mt-24 md:-mt-36">
              <div className="py-10">
                <h2 className="text-3xl md:text-4xl lg:text-5xl md:text-center font-bold font-lexend text-terra-navy">
                  Notícias
                </h2>
              </div>
            <div className="px-4 pb-8 text-center">
              <h3 className="font-lexend text-2xl md:text-3xl font-bold text-terra-navy">
                Notícias Terra
              </h3>
            </div>
            <ArticleSection />
            <ExternalArticleSection />
          </div>
        </section>
      </AnimatedSection>
      </main>
      <Footer />
    </div>
  );
}

