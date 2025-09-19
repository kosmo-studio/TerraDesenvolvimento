import { useParams } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ArtigoTemplate from "@/components/interno/Artigo";
import { todasAsNoticias } from "@/components/data/noticias";
import AnimatedSection from "@/components/AnimatedSection";

export default function DetalheNoticia() {
  const { slug } = useParams();
  const artigo = todasAsNoticias.find((noticia) => noticia.slug === slug);

  if (!artigo) {
    return (
      <div>
        <Header />
        <main className="pt-32 text-center">
          <AnimatedSection>
            <h1 className="text-2xl font-bold text-terra-navy">
              Notícia não encontrada!
            </h1>
          </AnimatedSection>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="bg-white">
      <Header />
      <main className="pt-20">
        <AnimatedSection>
          <ArtigoTemplate artigo={artigo} />
        </AnimatedSection>
      </main>
      <Footer />
    </div>
  );
}
