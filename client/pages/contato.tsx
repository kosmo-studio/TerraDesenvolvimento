import Header from "../components/Header";
import Footer from "../components/Footer";
import { Button } from "@/components/ui/button";
import React from "react";
import HeroSection from "@/components/interno/HeroSection";

// --- DADOS DAS UNIDADES ---
const unidades = [
  {
    cidade: "Campo Grande - MS",
    imagem: "/images/CG.png",
    endereco: "Rua São Paulo, 1568 - Vila Gomes, CEP 79022-140 / Campo Grande - MS",
    telefone: ["55 (67) 3026-3442"],
  },
  {
    cidade: "Maringá - PR",
    imagem: "/images/maringa.png",
    endereco: "Rua Bernardino de Campo, 619, Zona 07 - Cep: 87030-160 / Maringá - PR",
    telefone: ["55 (44) 3031-8844"],
  },
  {
    cidade: "Goiânia - GO",
    imagem: "/images/goiania.png",
    endereco: "Av. Olinda, 960, Ed. Lozandes Tower Business Sala 1812 B - Cep: 74884-120 / Goiânia - GO",
    telefone: ["55 (62) 99688-1105"],
  },
  {
    cidade: "Ribeirão Preto - SP",
    imagem: "/images/ribeirao.png",
    endereco: "Rua do Professor, 370 sala 51 Jardim Irajá - Cep: 14020-280 / Ribeirão Preto - SP",
    telefone: ["55 (16) 99630-1209"],
  },
  {
    cidade: "Cuiabá - MT",
    imagem: "/images/cuiaba.png",
    endereco: "Av. República do Líbano, 1620 - Sala 5 Jardim Monte Líbano - Cep: 78048-970 / Cuiabá - MT",
    telefone: ["55 (65) 99692-1046"],
  },
  {
    cidade: "Uruguaiana - RS",
    imagem: "/images/uruguaiana.png",
    endereco: "Domingo de Almeida, 3134 Bairro São Miguel - Cep: 97502-768 / Uruguaiana - RS",
    telefone: ["55 (55) 99669-2703"],
  },
  {
    cidade: "Assunção - Paraguai",
    imagem: "/images/assuncion.png",
    endereco: "Rua Francis Morices 470/2, casi Victor Heyn, Asunción.",
    telefone: ["+595 986 923995", "+595 9851-92143"],
  },
  {
    cidade: "Santa Cruz de la Sierra - Bolívia",
    imagem: "/images/santa.png",
    endereco: "Rua Francis Morices 470/2, casi Victor Heyn, Asunción. / Santa Cruz de la Sierra - Bolívia",
    telefone: ["+591 76685231", "+591 77694853"],
  },
];

// --- COMPONENTE UNIDADECARD ATUALIZADO ---
const UnidadeCard = ({ unidade }) => (
  <div>
    {/* Título da cidade centralizado */}
    <h3 className="text-2xl font-bold text-terra-navy mb-4 text-center">{unidade.cidade}</h3>
    <div className="rounded-2xl shadow-lg overflow-hidden">
      <img src={unidade.imagem} alt={`Foto de ${unidade.cidade}`} className="w-full h-auto" />
    </div>
    <div className="text-center mt-4 text-terra-gray text-lg leading-relaxed">
      
      <a
        href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(unidade.endereco)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="text-terra-navy px-4"
      >
        📍 {unidade.endereco}
      </a>
      
      <div className="font-bold text-terra-navy mt-1">
      {unidade.telefone.map((num, index) => (
        <React.Fragment key={num}>
          <span className="inline-flex items-center gap-2">
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413" />
            </svg>

            <a href={`tel:${num.replace(/[^0-9+]/g, '')}`} className="text-lg">
              {num}
            </a>
          </span>
          {index < unidade.telefone.length - 1 && ' / '}
        </React.Fragment>
      ))}
    </div>
    </div>
  </div>
);

export default function Contato() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      {/* Hero Section */}
      <HeroSection
        backgroundImage="/images/bg-contato.png"
        title=""
        subtitle=""
      />
      <main className="pt-32 pb-16">
        <div className="container mx-auto pt-14 max-w-7xl shadow-[0px_-15px_40px_-20px_rgba(0,0,0,0.3)] text-center bg-white relative mt-[-20px] md:-mt-52">
        <div className="max-w-4xl mx-auto px-4 lg:px-0 text-left">
          {/* Seção Introdutória */}
          <section className="mb-16">
            <h1 className="text-4xl lg:text-5xl font-bold text-terra-navy mb-6 text-center lg:text-left">
              Conectando produtores e resultados
            </h1>
            {/* Texto justificado */}
            <p className="text-md md:text-[23px] text-terra-navys leading-relaxed text-left">
              Estamos presentes em <strong>8 sedes no Brasil</strong>, além de unidades no <strong>Paraguai e na Bolívia,</strong> sempre próximos dos produtores que confiam em nosso trabalho. Nossa rede de filiais garante atendimento ágil e personalizado, onde quer que você esteja.
            </p>
          </section>

          {/* Seção de Contato Geral */}
          <section className="mb-16">
            {/* Texto justificado */}
            <p className="text-md md:text-[23px] text-terra-navy leading-relaxed text-left mb-12">
              <strong>Para informações gerais e primeiro contato, fale diretamente com um consultor.</strong> Nossa equipe está pronta para entender suas necessidades e direcionar você ao atendimento mais próximo.
            </p>
            <div className="text-center">
              <a
                href="https://wa.me/556730263442?text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20os%20servi%C3%A7os%20da%20Terra"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block"
              >
                <Button className="bg-terra-navy hover:bg-terra-navy/90 text-white font-bold py-8 px-6 md:px-20 text-xs md:text-md xl:text-xl rounded-lg">
                  <svg className="w-12 h-12" viewBox="10 0 4 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413" />
                  </svg>
                  FALE COM UM CONSULTOR
                </Button>
              </a>
            </div>
          </section>

          {/* Seção da Lista de Unidades */}
          <section>
             {/* Texto justificado */}
            <p className="text-md md:text-[23px] text-terra-navy leading-relaxed  text-left mb-12">
              Confira abaixo os contatos de todas as nossas unidades e escolha a que melhor atende à sua região.
            </p>
            
            <div className="space-y-12">
              {unidades.map((unidade) => (
                <UnidadeCard key={unidade.cidade} unidade={unidade} />
              ))}
            </div>
          </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

