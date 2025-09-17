import React from "react";

const clientsData = [
  { imgSrc: "https://api.builder.io/api/v1/image/assets/TEMP/167d9d5be0b7a32e8a957e91ad9b3ddc29a5bc43?width=976", name: ["João Flavio", "Ribeiro"] },
  { imgSrc: "/images/elton.jpeg", name: ["Elton", "Silveira"] },
  { imgSrc: "/images/thiago.jpeg", name: ["Thiago", "Carminati"] },
  { imgSrc: "https://api.builder.io/api/v1/image/assets/TEMP/d6a113fdacb6ab6a2e890810ea54dee9a55fc46d?width=1336", name: ["Fernando", "Pinheiro", "Carneiro"] },
  { imgSrc: "https://api.builder.io/api/v1/image/assets/TEMP/ec671130f158f4501e49d9aa387e004ef26316ce?width=1450", name: ["Duarte de", "Castro", "Cunha"] },
];

export default function TestimonialsSection() {

  const videoLink = "https://www.youtube.com/embed/Z0nEGV2h8ng?si=hDpB0haB_oCDpNXA";

  return (
    <section className="py-16 px-4 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-6xl font-lexend text-terra-navy mb-8">
            <span className="font-light">Com a Terra, passamos a</span><br />
            <span className="font-bold">ter controle real da fazenda.</span>
          </h2>
        </div>

        {/* --- SEÇÃO DO VÍDEO ATUALIZADA --- */}
        <div className="mb-16">
          {/* 1. Wrapper responsivo que mantém a proporção 16:9 */}
          <div className="relative w-full max-w-4xl mx-auto overflow-hidden rounded-3xl shadow-lg aspect-video">
            {/* 2. O iframe do YouTube que preenche o wrapper */}
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src={videoLink}
              title="Depoimento de clientes Terra"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        <div className="text-center mb-12">
          <h3 className="text-4xl lg:text-5xl font-lexend text-terra-navy">
            <span className="font-normal">Clientes </span><span className="font-bold">Terra</span>
          </h3>
          <p className="text-xl font-lexend text-terra-navy mt-4">Veja os depoimentos sobre nossas parcerias</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {clientsData.map((client) => (
            <div key={client.name.join(' ')} className="text-center">
              <div className="bg-terra-darker-blue rounded-3xl overflow-hidden mb-4">
                <img src={client.imgSrc} alt={client.name.join(' ')} className="w-full h-80 object-cover" />
              </div>
              <h4 className="text-lg font-lexend text-terra-navy">
                {client.name.map((line, i) => <React.Fragment key={i}>{line}<br /></React.Fragment>)}
              </h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}