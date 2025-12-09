import React from "react";

interface CtaModalContentProps {
  onClose: () => void;
}

// Imagens (Manter a cor, mas ignorar a lista de palestrantes)
const BF_ACCENT_ORANGE = "#CC6633";

// Defina o caminho para a nova imagem fixa que ficará abaixo do botão
const FOOTER_IMAGE_SRC = "/images/IMAGEM_EG_PALESTRANTES.png"; // Exemplo: Imagem com data, local, etc.

export const CtaModalStackedSpeakers: React.FC<CtaModalContentProps> = ({
  onClose,
}) => {
  return (
    <div className="flex flex-col items-center justify-center text-white text-center w-full">
      
      {/* 0. LOGO DO EVENTO */}
      <div className="mb-4 mt-5 flex justify-center">
        <img
          src="/images/encontroGestores.svg" // <-- Seu logo do evento
          alt="Logo do Evento"
          className="
            w-40 sm:w-72 
            object-contain 
            drop-shadow-lg 
            opacity-95 
            transition-all 
            hover:scale-105
          "
        />
      </div>

      {/* 1. STACK DE PALESTRANTES (REMOVIDO!) */}
      {/* O bloco de código que renderizava fixedSpeakers.map(...) foi removido. */}


      {/* 3. DESCRIÇÃO */}
      <p style={{ color: BF_ACCENT_ORANGE }} className="text-base sm:text-xl opacity-90 mb-6 leading-relaxed font-bold max-w-lg">
        Vem aí um dos maiores e mais renomados eventos do setor agropecuário.
      </p>

      {/* 4. CTA */}
      <a
        href="https://www.encontrogestores.agr.br/"
        target="_blank"
        rel="noopener noreferrer"
        className="w-full max-w-xs px-3"
        onClick={onClose}
      >
        <button
          className="
            bg-white text-black 
            text-xs md:text-md
            font-black 
            uppercase tracking-wide 
            py-4 w-full 
            rounded-xl 
            shadow-lg shadow-black/40
            transition-all 
            hover:scale-105 
            hover:shadow-2xl
          "
        >
          GARANTA SEU INGRESSO AGORA
        </button>
      </a>
      {/* 6. AVISO (Opcional, se a imagem de rodapé não contiver essa info) */}
      <p className="text-sm mt-5 opacity-75 italic">
        *Ingressos Limitados.
      </p>

      {/* 5. NOVA IMAGEM FIXA ABAIXO DO BOTÃO */}
      <div className="mt-2 w-full flex justify-center">
        <img
          src={FOOTER_IMAGE_SRC} 
          alt="Informações Adicionais do Evento"
          className="w-full object-contain drop-shadow-md"
        />
      </div>

      
    </div>
  );
};