import React from 'react';

// Card individual para cada cliente
const ClientCard = ({ client }: { client: { name: string; image: string } }) => (
  <div className="relative aspect-square flex items-center justify-center p-4">
    {/* Fundo do card */}
    <svg viewBox="0 0 251 252" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute inset-0 w-full h-full text-[#F4F4F4] fill-current">
      <path fillRule="evenodd" clipRule="evenodd" d="M33.0001 0.501953H217.997C236.222 0.501953 250.997 15.2766 250.997 33.502V218.499C250.997 236.724 236.222 251.499 217.997 251.499H33.0001C14.7747 251.499 0 236.724 0 218.499V33.502C0 15.2766 14.7747 0.501953 33.0001 0.501953Z" />
    </svg>
    {/* Logo do cliente */}
    <img
      src={client.image}
      alt={client.name}
      className="relative w-full h-full object-contain mix-blend-multiply"
    />
  </div>
);

export default function ClientsSection() {
  // Para um bom efeito, é ideal ter pelo menos 6-8 itens
  const clients = [
    { id: 1, name: "QUAGLIATO-R", image: "https://api.builder.io/api/v1/image/assets/TEMP/e9d654fef1eee76c0cf41bb928f639b3722fc408?width=494" },
    { id: 2, name: "NOMA-AGROPECUARIA", image: "https://api.builder.io/api/v1/image/assets/TEMP/4e2e0dd9c8c5e85fa080dd3997c2b1329877807a?width=508" },
    { id: 3, name: "CACTUS-AGROPECUARIA", image: "https://api.builder.io/api/v1/image/assets/TEMP/6a85268ed1162bfbf997b9287979194a422be38e?width=448" },
    { id: 4, name: "GRUPO-CAMPO-VITORIA", image: "https://api.builder.io/api/v1/image/assets/TEMP/31a947d6130558292ec0a58e857b12c5c1c23025?width=424" },
    { id: 5, name: "CLIENTE 5", image: "https://api.builder.io/api/v1/image/assets/TEMP/e9d654fef1eee76c0cf41bb928f639b3722fc408?width=494" },
    { id: 6, name: "CLIENTE 6", image: "https://api.builder.io/api/v1/image/assets/TEMP/4e2e0dd9c8c5e85fa080dd3997c2b1329877807a?width=508" },
    { id: 7, name: "CLIENTE 7", image: "https://api.builder.io/api/v1/image/assets/TEMP/6a85268ed1162bfbf997b9287979194a422be38e?width=448" },
    { id: 8, name: "CLIENTE 8", image: "https://api.builder.io/api/v1/image/assets/TEMP/31a947d6130558292ec0a58e857b12c5c1c23025?width=424" },
  ];
  
  return (
    <section className="bg-white py-16 md:py-24 flex flex-col items-center text-center gap-10 md:gap-12 w-full">
      
      {/* --- Textos e Divisor --- */}
      <div className="max-w-6xl px-4 flex flex-col gap-6 items-center">
        <h2 className="text-[#162946] text-3xl sm:text-4xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold leading-tight">
          Com um diagnóstico preciso e estratégias
          <br className='hidden md:flex' />
          bem definidas, sua fazenda ganha clareza
          <br className='hidden md:flex' />
          de rumo e solidez nas decisões.
        </h2>

        <p className="text-[#162946] text-lg sm:text-xl lg:text-2xl font-light leading-relaxed max-w-3xl">
          Mais do que números, entregamos caminhos
          <br className='hidden md:flex' />
          para transformar potencial em resultado real,
          <br className='hidden md:flex' />
          garantindo evolução constante e
          <br className='hidden md:flex' />
          sustentabilidade do negócio.
        </p>
      </div>

      <div className="flex items-center justify-center gap-6 w-full max-w-4xl px-4">
        <div className="flex-grow h-px bg-[#162946]" />
        <img src="/images/terra logo.png" alt="Ícone Terra" className="w-10 h-10 object-contain" />
        <div className="flex-grow h-px bg-[#162946]" />
      </div>

      <h3 className="text-[#162946] text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-semibold leading-tight max-w-xl lg:max-w-2xl px-4">
        "Quem já transformou resultados conosco"
      </h3>
      
      {/* --- Carrossel Marquee CSS --- */}
      <div className="w-full max-w-md md:max-w-3xl lg:max-w-5xl xl:max-w-6xl mx-auto overflow-hidden mt-8">
        <div className="flex group">
          <div className="flex animate-marquee">
            {/* Renderiza a lista de clientes duas vezes para criar o loop contínuo */}
            {[...clients, ...clients].map((client, index) => (
              // Cada item ocupa 1/4 da tela em telas médias e maiores, mostrando 4 logos
              <div key={index} className="flex-shrink-0 w-1/4 sm:w-1/3 md:w-1/4 p-2">
                <ClientCard client={client} />
              </div>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
};