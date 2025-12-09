import React from 'react';

// Tipagem para aceitar a função de fechar do Modal
interface PricingCardsContentProps {
    onClose: () => void;
}

export const PricingCardsContent: React.FC<PricingCardsContentProps> = ({ onClose }) => {
    // Definindo as cores internamente ou importando
    const BF_ACCENT_ORANGE = '#CC6633';
    
    return (
        <div className="flex flex-col items-center justify-center p-4 sm:p-0 text-white text-center">
            
            <div className={`flex w-[80%] h-auto mb-2 mt-4`}>
                <img src="/images/encontroGestores.svg" alt="Encontro com gestores" />
            </div>

            {/* 4. PREÇOS */}
            <div className="mt-4">
                <p className="text-xl sm:text-xl font-bold " style={{ color: BF_ACCENT_ORANGE }}>DE:</p>
                <h3 className="text-3xl sm:text-5xl font-black line-through mb-4" style={{ color: BF_ACCENT_ORANGE }}>
                    R$ 1.150
                </h3>

                <p className="text-2xl sm:text-xl font-bold ">POR:</p>
                <h2 className="text-4xl sm:text-6xl font-black mb-2">
                    R$ 690
                </h2>
                <p className="text-sm sm:text-base opacity-80">EM ATÉ 12X</p>
            </div>

            {/* 5. BOTÃO */}
            <a
                href="https://www.sympla.com.br/evento/encontro-de-gestores-2026/3108572" 
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 w-full max-w-xs transition-transform hover:scale-105"
                onClick={onClose} // Fecha o modal ao clicar no link de compra
            >
                <button className="bg-white text-black text-xl sm:text-2xl font-black uppercase tracking-wider py-4 w-full rounded shadow-lg">
                    COMPRE AQUI
                </button>
            </a>
            
            {/* 6. AVISO DE LIMITE */}
            <p className="text-sm mt-4 opacity-80">DESCONTO VÁLIDO ATÉ 31/12</p>

        </div>
    );
}