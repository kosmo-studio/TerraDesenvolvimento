import React from "react";
import { useNavigate } from "react-router-dom"; // se estiver usando React Router

const clientsData = [
  { imgSrc: "/images/carmem.jpeg", name: ["Carmem", "Perez"], link: "/resultados#carmem-perez" },
  { imgSrc: "/images/thiago.jpeg", name: ["Thiago", "Carminati"], link: "/resultados#thiago-carminati" },
  { imgSrc: "/images/gustavoArfux.jpeg", name: ["Gustavo", "Arfux"], link: "/resultados#gustavo-arfux" },
  { imgSrc: "/images/elton.jpeg", name: ["Elton", "Silveira"], link: "/resultados#elton-silveira" },
];

export default function TestimonialsSection() {
  const videoLink = "https://www.youtube.com/embed/Z0nEGV2h8ng?si=hDpB0haB_oCDpNXA";
  const navigate = useNavigate(); // para navegação programática

  // Função para lidar com click nos clientes
  const handleClientClick = (link) => {
    if (link.startsWith("/resultados#")) {
      const [path, hash] = link.split("#");
      navigate(path); // navega para a página resultados
      setTimeout(() => {
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 100); 
    } else {
      
      window.location.href = link;
    }
  };

  return (
    <section className="py-16 px-4 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-6xl font-lexend text-terra-navy mb-8">
            <span className="font-light">Com a Terra, passamos a</span><br />
            <span className="font-bold">ter controle real da fazenda.</span>
          </h2>
        </div>

        {/* --- SEÇÃO DO VÍDEO --- */}
        <div className="mb-16">
          <div className="relative w-full max-w-4xl mx-auto overflow-hidden rounded-3xl shadow-lg aspect-video">
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

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 px-32 gap-4">
          {clientsData.map((client) => (
            <button
              key={client.name.join(' ')}
              onClick={() => handleClientClick(client.link)}
              className="text-center hover:opacity-80 transition"
            >
              <div className="bg-terra-darker-blue rounded-3xl overflow-hidden mb-4">
                <img
                  src={client.imgSrc}
                  alt={client.name.join(' ')}
                  className="w-full h-80 object-cover"
                />
              </div>
              <h4 className="text-lg font-lexend text-terra-navy">
                {client.name.map((line, i) => <React.Fragment key={i}>{line}<br /></React.Fragment>)}
              </h4>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
