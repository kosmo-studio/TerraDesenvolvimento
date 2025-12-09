import React, { FC, ReactNode } from 'react';

// Tipagem básica para o Modal
interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

export const Modal: FC<ModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    // Fundo escuro (Overlay)
    <div 
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black bg-opacity-75 backdrop-blur-sm transition-opacity duration-300"
      onClick={onClose} // Fecha ao clicar fora
    >
      {/* Container do Modal - Previne fechamento ao clicar no conteúdo */}
      <div 
        className="relative bg-[#181820] rounded-xl shadow-2xl max-w-3xl w-11/12 max-h-[90vh] overflow-y-auto transform transition-all duration-300 scale-100 "
        onClick={(e) => e.stopPropagation()} 
      >
        {/* Botão de Fechar (X) */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-white text-2xl font-bold bg-primary hover:bg-opacity-80 rounded-full w-8 h-8 flex items-center justify-center transition-colors z-10"
          aria-label="Fechar"
        >
          &times;
        </button>
        
        {/* Conteúdo do Modal (Seu PricingCards irá aqui) */}
        {children}
      </div>
    </div>
  );
};