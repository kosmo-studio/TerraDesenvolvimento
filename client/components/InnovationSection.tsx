import React from "react";
import { Link } from "react-router-dom";

// 1. Adicionada a propriedade 'href' para cada card.
const innovationCards = [
  {
    imgSrc: "https://api.builder.io/api/v1/image/assets/TEMP/f21655c2f91616d8262a8ad0e815d99752e5409a?width=1112",
    alt: "Gestão estratégica",
    title: ["Gestão", "estratégica", "com dados"],
    href: "/servicos/PlanejamentoEstrategico", // Exemplo de link
  },
  {
    imgSrc: "https://api.builder.io/api/v1/image/assets/TEMP/a6100926d96bc3f3cad361a2814524dc1a37b991?width=3110",
    alt: "Resultados mensuráveis",
    title: ["Resultados", "mensuráveis", "em produtividade", "e lucro"],
    href: "", // Exemplo de link
  },
  {
    imgSrc: "/images/EquipeTecnica.png",
    alt: "Equipe técnica",
    title: ["Equipe", "técnica", "especializada"],
    href: "", // Exemplo de link
  },
  {
    imgSrc: "https://api.builder.io/api/v1/image/assets/TEMP/9089e08c231ce6623565496d8afe658391eb6208?width=1440",
    alt: "Presença regional",
    title: ["Presença", "em diversas", "regiões do", "Brasil"],
    href: "/contato", // Exemplo de link
  },
];

export default function InnovationSection() {
  return (
    <>
      <section className="py-16 px-4 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl lg:text-6xl font-lexend text-terra-navy mb-8">
            <span className="font-bold">Inovação </span>
            <span className="font-normal">para transformar</span>
            <br />
            <span className="font-normal">sua fazenda em</span>
            <span className="font-bold"> resultado!</span>
          </h2>
        </div>
      </section>

      <section className="py-8 px-4 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {innovationCards.map((card) => (
              // 2. O card inteiro agora é um componente <Link>.
              <Link to={card.href} key={card.alt} className="text-left group block transition-transform duration-300 hover:scale-105">
                <div className="relative h-[550px] mb-6 rounded-3xl overflow-hidden">
                  {/* 3. Efeito de zoom na imagem ao passar o mouse no card. */}
                  <img src={card.imgSrc} alt={card.alt} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" />
                </div>
                <h3 className="text-2xl font-lexend text-terra-navy leading-tight">
                  {card.title.map((line, index) => (
                    <React.Fragment key={index}>
                      {line}
                      <br />
                    </React.Fragment>
                  ))}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
