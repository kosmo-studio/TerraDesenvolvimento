import React from 'react';

const ClientsSection: React.FC = () => {
  const clients = [
    {
      id: 1,
      name: "QUAGLIATO-R",
      image: "https://api.builder.io/api/v1/image/assets/TEMP/e9d654fef1eee76c0cf41bb928f639b3722fc408?width=494"
    },
    {
      id: 2,
      name: "NOMA-AGROPECUARIA",
      image: "https://api.builder.io/api/v1/image/assets/TEMP/4e2e0dd9c8c5e85fa080dd3997c2b1329877807a?width=508"
    },
    {
      id: 3,
      name: "CACTUS-AGROPECUARIA",
      image: "https://api.builder.io/api/v1/image/assets/TEMP/6a85268ed1162bfbf997b9287979194a422be38e?width=448"
    },
    {
      id: 4,
      name: "GRUPO-CAMPO-VITORIA",
      image: "https://api.builder.io/api/v1/image/assets/TEMP/31a947d6130558292ec0a58e857b12c5c1c23025?width=424"
    }
  ];

  return (
    <section className="w-[1076px] h-[1078px] shrink-0 absolute left-[409px] top-[2003px] max-md:w-[90%] max-md:h-auto max-md:relative max-md:left-[5%] max-md:top-[1200px] max-sm:w-[95%] max-sm:left-[2.5%] max-sm:top-[800px]">
      <h2 className="text-[#162946] text-center text-[51px] font-semibold leading-[57px] tracking-[-0.96px] absolute w-[1076px] h-[171px] left-0 top-0 max-md:w-full max-md:text-[40px] max-md:leading-[48px] max-md:h-auto max-sm:text-[28px] max-sm:leading-[34px]">
        Com um diagnóstico preciso e estratégias bem definidas, sua fazenda ganha clareza de rumo e solidez nas decisões.
      </h2>
      
      <p className="text-[#162946] text-center text-4xl font-light leading-[47px] tracking-[-0.551px] absolute w-[750px] h-[189px] left-[158px] top-[202px] max-md:w-full max-md:text-[28px] max-md:leading-9 max-md:h-auto max-md:left-0 max-md:top-[120px] max-sm:text-xl max-sm:leading-7 max-sm:top-[100px]">
        Mais do que números, entregamos caminhos para transformar potencial em resultado real, garantindo evolução constante e sustentabilidade do negócio.
      </p>
      
      <div>
        <div
          dangerouslySetInnerHTML={{
            __html:
              "<svg id=\"239:392\" width=\"1053\" height=\"71\" viewBox=\"0 0 1053 71\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" class=\"decoration\" style=\"width: 1053px; height: 71px; flex-shrink: 0; position: absolute; left: 14px; top: 465px\"> <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M0 35H446V38H0V35Z\" fill=\"#152A43\"></path> <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M607 35H1053V38H607V35Z\" fill=\"#152A43\"></path> <path d=\"M488 0H563.5V71H488V0Z\" fill=\"url(#pattern0_239_392)\"></path> <defs> <pattern id=\"pattern0_239_392\" patternContentUnits=\"objectBoundingBox\" width=\"1\" height=\"1\"> <use xlink:href=\"#image0_239_392\" transform=\"matrix(0.000949668 0 0 0.0140845 0.466287 0)\"></use> </pattern>  </defs> </svg>",
          }}
        />
      </div>
      
      <h3 className="text-[#162946] text-center text-[51px] font-semibold leading-[57px] tracking-[-0.96px] absolute w-[574px] h-[114px] left-[250px] top-[625px] max-md:w-full max-md:text-[40px] max-md:leading-[48px] max-md:h-auto max-md:left-0 max-md:top-80 max-sm:text-[28px] max-sm:leading-[34px] max-sm:top-[620px]">
        "Quem já transformou resultados conosco"
      </h3>
      
      <div className="grid grid-cols-4 gap-4 absolute top-[824px] left-[13px] max-md:grid-cols-2 max-md:gap-6 max-md:top-[400px] max-md:left-0 max-sm:grid-cols-2 max-sm:gap-4 max-sm:top-[300px]">
        {clients.map((client, index) => (
          <div key={client.id} className={`w-[251px] h-[251px] shrink-0 max-md:w-[200px] max-md:h-[200px] max-sm:w-[150px] max-sm:h-[150px] ${index === 1 ? 'max-sm:top-[160px] max-sm:relative' : ''} ${index === 3 ? 'max-sm:top-[160px] max-sm:relative' : ''}`}>
            <div>
              <div
                dangerouslySetInnerHTML={{
                  __html:
                    "<svg width=\"251\" height=\"252\" viewBox=\"0 0 251 252\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" style=\"width: 251px; height: 251px; flex-shrink: 0; fill: #F4F4F4; position: absolute; left: 0px; top: 0px\"> <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M33.0001 0.501953H217.997C236.222 0.501953 250.997 15.2766 250.997 33.502V218.499C250.997 236.724 236.222 251.499 217.997 251.499H33.0001C14.7747 251.499 0 236.724 0 218.499V33.502C0 15.2766 14.7747 0.501953 33.0001 0.501953Z\" fill=\"#F4F4F4\"></path> </svg>",
                }}
              />
            </div>
            <img
              src={client.image}
              alt={client.name}
              className="w-[212px] h-[212px] shrink-0 mix-blend-multiply absolute left-[18px] top-[22px] max-md:w-[180px] max-md:h-[180px] max-md:left-2.5 max-md:top-2.5 max-sm:w-[130px] max-sm:h-[130px] max-sm:left-2.5 max-sm:top-2.5"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ClientsSection;
