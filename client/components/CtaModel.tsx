import React from "react";

interface CtaModalContentProps {
  onClose: () => void;
}

// Cores Identidade Terra
const TERRA_NAVY = "#003366"; 
const YOUTUBE_VIDEO_ID = "XAu-H2pTkbU"; // Substitua pelo ID real

export const CtaModalTerraVideo: React.FC<CtaModalContentProps> = ({
  onClose,
}) => {
  return (
    // Removi shadows pesadas e usei shadow-xl para ser mais sutil e neutra.
    <div className="relative flex flex-col items-center justify-center bg-white text-gray-800 text-center w-full max-w-2xl mx-auto p-6 md:p-8 rounded-2xl shadow-xl">
      
      {/* Botão Fechar no Canto */}
      <button 
        onClick={onClose}
        className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 transition-colors"
        aria-label="Fechar"
      >
        ×
      </button>

      {/* 0. LOGO TERRA */}
      <div className="mb-6 mt-4 flex justify-center">
        <img
          src="/images/terra.svg" 
          alt="Terra"
          className="w-[250px] sm:w-[400px] object-contain"
        />
      </div>


      {/* 2. CONTAINER DO VÍDEO (Removido bordas) */}
      <div className="w-full mb-8 rounded-lg overflow-hidden shadow-md bg-black">
        <div className="aspect-video w-full">
          <iframe
            className="w-full h-full"
            src={`https://www.youtube.com/embed/${YOUTUBE_VIDEO_ID}?rel=0&showinfo=0`}
            title="Vídeo Terra"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>

      {/* 3. CTA PRINCIPAL */}
      <div className="w-full flex flex-col items-center">
        <a
          href="https://www.youtube.com/@terradesenvolvimentoagrope6551"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full max-w-xs"
          onClick={onClose}
        >
          <button
            className="
              text-white 
              text-sm md:text-base
              font-bold 
              uppercase tracking-widest 
              py-4 w-full 
              rounded-full 
              bg-primary
              shadow-sm
              transition-all 
              hover:shadow-md 
              hover:scale-[1.03]
            "
          >
            Ver mais no Terra
          </button>
        </a>
      </div>
      
    </div>
  );
};