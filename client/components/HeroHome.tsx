import { useState, useEffect } from 'react';

const animatedTexts = [
  '/images/texto1.png',
  '/images/texto2.png',
  '/images/texto3.png',
];

export default function HeroHome() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const [isFading, setIsFading] = useState(false);


  useEffect(() => {
    
    const interval = setInterval(() => {
      setIsFading(true);

      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % animatedTexts.length);
        setIsFading(false); 
      }, 500); 

    }, 4000); 

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative pt-28">
      <div className="mx-4 lg:mx-8 overflow-hidden rounded-3xl">
        <div className="relative h-[200px] md:h-[500px] lg:h-[560px] xl:h-[830px]">
          {/* IMAGEM DE FUNDO PRINCIPAL */}
          <img
            src="/images/fundoBanner.png"
            alt="Terra - Homem com equipamento agrícola"
            className="absolute inset-0 w-full h-full object-cover"
          />

          
          <div className="absolute inset-0 flex items-center justify-end p-8 lg:p-16">
            {/* IMAGEM DA FRASE ANIMADA */}
            <img
              src={animatedTexts[currentIndex]}
              alt="O futuro está plantado"
              className={`
                w-auto hidden md:flex md:w-[220px] lg:w-[320px] xl:w-[380px] 2xl:w-[500px] md:mb-44 lg:mb-20 xl:mb-0 transition-opacity duration-1000
                ${isFading ? 'opacity-0' : 'opacity-100'}
              `}
            />
          </div>
        </div>
      </div>
    </section>
  );
}