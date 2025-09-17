import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ClientsSection from "@/components/interno/ClientsSection";
import CTASection from "@/components/interno/CTASection";
import HeroSection from "@/components/interno/HeroSection";
import ServiceCard from "@/components/interno/ServiceCard";
import DivisorTerra from '@/components/interno/DivisorTerra';
import { Link } from "react-router-dom";

const ArticleCard = ({ image, title, date, link }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden w-full max-w-xs">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
        <p className="text-sm text-gray-500 mt-2">{date}</p>
        <a href={link} className="text-blue-500 hover:text-blue-700 mt-4 block">
          Leia mais
        </a>
      </div>
    </div>
  );
};

// Componente ArticleSection
const ArticleSection = () => {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ArticleCard
            image="https://api.builder.io/api/v1/image/assets/TEMP/4afcf9b3e3244ee38a3c8a36490ca3801377faa2?width=1130"
            title="5 Anos da Covid-19 no Brasil: Lições de Resiliência e Inovação no Agronegócio"
            date="27 de fevereiro de 2025"
            link="#"
          />
          <ArticleCard
            image="https://api.builder.io/api/v1/image/assets/TEMP/b0f43d8df013d60e4ead90c956d34aa52002d4aa?width=1650"
            title="Passos para uma gestão eficiente"
            date="27 de fevereiro de 2025"
            link="#"
          />
          <ArticleCard
            image="https://api.builder.io/api/v1/image/assets/TEMP/3d1aa2e8f24ed563d6d90dc53929a40cc40cdd60?width=1600"
            title="Gestão baseada em números: um alicerce fundamental para novos gestores"
            date="27 de fevereiro de 2025"
            link="#"
          />
        </div>
      </div>
    </section>
  );
};

export default function noticias() {
  return (
    <div className="bg-white overflow-x-hidden">
      <main>
        <Header />
        {/* Hero Section */}
         <HeroSection
          backgroundImage="/images/noticiaHeader.png"
          title=""
          subtitle=""
        />
        {/* --- Seção de Introdução --- */}
            <section className="py-0 md:pt-24 z-20">
              <div className="container mx-auto pt-14 max-w-7xl shadow-[0px_-40px_40px_-20px_rgba(0,0,0,0.3)] text-center bg-white relative mt-[-20px] md:-mt-48">
                  <div className="md:mt-6 space-y-2 md:space-y-0 lg:space-y-2 xl:space-y-3 mb-10">
                    <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-3xl xl:text-5xl md:text-center font-bold font-lexend text-white">
                      <span className="text-terra-navy px-2">
                        Notícias
                      </span>
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
