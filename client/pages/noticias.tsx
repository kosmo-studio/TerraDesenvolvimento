import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HeroSection from "@/components/interno/HeroSection";
import { Link } from "react-router-dom";
// 1. Importamos os dados do nosso arquivo central
import { todasAsNoticias } from "@/components/data/noticias";

// --- COMPONENTE ARTICLECARD ---
// Este componente é o "molde" para cada card de notícia.
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
// Esta seção agora lê a lista de notícias e cria um card para cada uma.
const ArticleSection = () => {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* 2. Usamos .map() para criar os cards a partir dos dados importados */}
          {todasAsNoticias.map((noticia) => (
            <ArticleCard
              key={noticia.id}
              image={noticia.imagemDestaque}
              title={noticia.titulo}
              date={noticia.dataPublicacao}
              link={`/noticias/${noticia.slug}`} // O link é criado dinamicamente
            />
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
        <HeroSection
          backgroundImage="/images/bg-noticias.jpg"
          title=""
          subtitle=""
        />
        <section className="z-20">
          <div className="container mx-auto pt-14 max-w-7xl shadow-[0px_-30px_15px_-10px_rgba(0,0,0,0.3)] text-center bg-white relative -mt-24 md:-mt-48">
            <div className="py-10">
              <h2 className="text-3xl md:text-4xl lg:text-5xl md:text-center font-bold font-lexend text-terra-navy">
                Notícias
              </h2>
            </div>
            {/* 3. A seção de artigos agora é preenchida dinamicamente */}
            <ArticleSection />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
