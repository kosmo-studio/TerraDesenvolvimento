import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HeroSection from "@/components/interno/HeroSection";
import { Link } from "react-router-dom";

const noticiasData = [
  {
    slug: "5-anos-covid-agro",
    image: "https://api.builder.io/api/v1/image/assets/TEMP/4afcf9b3e3244ee38a3c8a36490ca3801377faa2?width=1130",
    title: "5 Anos da Covid-19 no Brasil: Lições de Resiliência e Inovação no Agronegócio",
    date: "08 de dezembro de 2021",
  },
  {
    slug: "passos-para-uma-gestao-eficiente",
    image: "https://api.builder.io/api/v1/image/assets/TEMP/b0f43d8df013d60e4ead90c956d34aa52002d4aa?width=1650",
    title: "Passos para uma gestão eficiente",
    date: "27 de fevereiro de 2025",
  },
  {
    slug: "gestao-baseada-em-numeros",
    image: "https://api.builder.io/api/v1/image/assets/TEMP/3d1aa2e8f24ed563d6d90dc53929a40cc40cdd60?width=1600",
    title: "Gestão baseada em números: um alicerce fundamental para novos gestores",
    date: "14 de junho de 2021",
  },
];

// --- COMPONENTE ARTICLECARD ATUALIZADO ---
// O card inteiro agora é um componente <Link>
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

const ArticleSection = () => {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {noticiasData.map((noticia) => (
            <ArticleCard
              key={noticia.slug}
              image={noticia.image}
              title={noticia.title}
              date={noticia.date}
              link={`/noticias/${noticia.slug}`}
            />
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
            <ArticleSection />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}