import React from "react";

interface CtaModalContentProps {
  onClose: () => void;
}

const BF_ACCENT_ORANGE = "#CC6633";
const FOOTER_IMAGE_SRC = "/images/IMAGEM_EG_PALESTRANTES.png";
// Defina a data aqui para facilitar a manutenção
const EVENT_DATE = "14 e 15 de Abril de 2026"; 

export const CtaModalStackedSpeakers: React.FC<CtaModalContentProps> = ({
  onClose,
}) => {
  return (
    <div className="flex flex-col items-center justify-center text-white text-center w-full">
      
      {/* 0. LOGO DO EVENTO */}
      <div className="mb-4 mt-5 flex justify-center">
        <img
          src="/images/encontroGestores.svg"
          alt="Logo do Evento"
          className="w-40 sm:w-72 object-contain drop-shadow-lg opacity-95 transition-all hover:scale-105"
        />
      </div>

      {/* 1. DESCRIÇÃO */}
      <p style={{ color: BF_ACCENT_ORANGE }} className="text-base sm:text-xl opacity-90 mb-2 leading-relaxed font-bold max-w-lg">
        Vem aí um dos maiores e mais renomados eventos do setor agropecuário.
      </p>

      {/* 2. DATA DO EVENTO (NOVO) */}
      <div className="mb-6">
        <span className="block text-xl sm:text-2xl font-black tracking-tight uppercase">
          {EVENT_DATE}
        </span>
        
      </div>

      {/* 3. CTA */}
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

      {/* 4. AVISO */}
      <p className="text-sm mt-5 opacity-75 italic">
        *Ingressos Limitados.
      </p>

      {/* 5. IMAGEM FIXA ABAIXO DO BOTÃO */}
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