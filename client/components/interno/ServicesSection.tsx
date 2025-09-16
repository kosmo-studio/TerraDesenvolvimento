import React from 'react';

const ServicesSection: React.FC = () => {
  return (
    <section className="relative z-10 -mt-40 px-4">
      <div className="container mx-auto"> 
        {/* Banner Superior */}
        <div className="bg-cover bg-center rounded-lg p-8 flex items-center justify-center min-h-[350px]">
          
          <div className="bg-white flex flex-col shadow-[0_-30px_35px_-15px_rgba(0,0,0,0.5)] sm:flex-row items-center gap-6 p-8 w-full max-w-5xl">
            
            {/* Logo */}
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/5c8f0f7b14c6bff6a273f0f8de9a8c6f2d78e648?width=272"
              alt="Logo da Terra Desenvolvimento"
              className="w-24 h-24 sm:w-28 sm:h-28 shrink-0"
            />

            {/* Bloco de Texto */}
            <div className="text-xl md:text-2xl lg:text-3xl font-normal text-white">
              <p className="mb-2">
                <span className="bg-[#152A43] px-3 py-1 box-decoration-clone">
                  A partir das conclusões do diagnóstico e desafios definidos no planejamento estratégico, a
                </span>
              </p>
              <p>
                <span className="bg-[#152A43] px-3 py-1 box-decoration-clone font-bold">
                  Terra Desenvolvimento coordenará:
                </span>
              </p>
            </div>
          </div>
        </div>

        {/* Seção dos Indicadores (Cards) */}
        <div className="mt-20 text-center">
          <h2 className="text-[#162946] text-3xl md:text-4xl font-bold leading-tight tracking-tight mb-12 max-w-2xl mx-auto">
            Definição dos indicadores que serão monitorados referentes a:
          </h2>
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/35630b16cc3c7341959573c9292e3ed57e3a0f5f?width=2127"
            alt="Blocos de serviços"
            className="w-full max-w-5xl mx-auto h-auto"
          />
        </div>
        
      </div>
    </section>
  );
};

export default ServicesSection;