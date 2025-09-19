import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HeroSection from "@/components/interno/HeroSection";
import { Link } from "react-router-dom";
import { todasAsNoticias } from "@/components/data/noticias";
import AnimatedSection from "@/components/AnimatedSection"; 

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

// --- COMPONENTE ARTICLESECTION ---
const ArticleSection = () => {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* 2. Cada card agora é envolvido pelo AnimatedSection com um atraso */}
          {todasAsNoticias.map((noticia, index) => (
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
            <ArticleSection />
          </div>
        </section>
      </AnimatedSection>
      </main>
      <Footer />
    </div>
  );
}

