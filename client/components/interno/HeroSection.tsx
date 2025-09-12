import React from 'react';

const HeroSection: React.FC = () => {
  return (

    <section className="relative w-[1920px] h-[80vh] text-white">
      
      <div
        className="absolute w-[1920px] inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('https://api.builder.io/api/v1/image/assets/TEMP/818e128346cf42096e292aada00dd79b09fd7bb2?width=1920')" }}
        aria-hidden="true"
      />

      <div className="relative h-full flex flex-col items-center justify-center text-center p-4 md:p-8">

        <h1 
          className="text-terra-navy text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight mb-4"
        >
          Diagnóstico de desempenho global
        </h1>
        <p 
          className="text-terra-navy text-lg md:text-xl max-w-4xl font-light"
        >
          Apresentar e discutir onde sua fazenda está, o "Ponto A" e onde poderá chegar, mostrando com clareza a atual situação financeira, produtiva e gerencial da empresa através de indicadores parametrizados.
        </p>

      </div>
    </section>
  );
};

export default HeroSection;