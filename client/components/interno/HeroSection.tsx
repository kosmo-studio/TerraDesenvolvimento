import React from 'react';

const HeroSection: React.FC = () => {
  return (
    // CORREÇÃO: Trocado w-[1920px] por w-full para ser responsivo.
    <section className="relative w-full h-[80vh] text-white">
      
      {/* O container da imagem de fundo também precisa ser responsivo */}
      <div
        // CORREÇÃO: Removido o w-[1920px] daqui também.
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('https://api.builder.io/api/v1/image/assets/TEMP/818e128346cf42096e292aada00dd79b09fd7bb2?width=1920')" }}
        aria-hidden="true"
      />

      {/* O conteúdo interno já estava correto e se ajustará ao tamanho do pai */}
      <div className="relative h-full flex flex-col items-center justify-center text-center p-4 md:p-8">
        <h1 
          className="text-terra-navy text-4xl md:text-4xl xl:text-6xl font-bold xl:font-semibold leading-tight mb-4"
        >
          Diagnóstico de desempenho global
        </h1>
        <p 
          className="text-terra-navy text-md md:text-2xl max-w-4xl font-light"
        >
          Apresentar e discutir onde sua fazenda está, o "Ponto A" e onde poderá chegar, mostrando com clareza a atual situação financeira, produtiva e gerencial da empresa através de indicadores parametrizados.
        </p>
      </div>
    </section>
  );
};

export default HeroSection;