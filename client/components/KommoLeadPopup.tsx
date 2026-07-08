import { useCallback, useEffect, useState } from "react";

const STORAGE_KEY = "terra_leadpop_v1";
const DISPLAY_DELAY = 15_000;

export default function KommoLeadPopup() {
  const [isOpen, setIsOpen] = useState(false);

  const closePopup = () => setIsOpen(false);

  const openPopup = useCallback(() => {
    try {
      if (sessionStorage.getItem(STORAGE_KEY)) return;
      sessionStorage.setItem(STORAGE_KEY, "1");
    } catch {
      // Mantém o pop-up funcionando caso o armazenamento esteja bloqueado.
    }

    setIsOpen(true);
  }, []);

  useEffect(() => {
    const timer = window.setTimeout(openPopup, DISPLAY_DELAY);

    const handleExitIntent = (event: MouseEvent) => {
      if (event.clientY <= 0) openPopup();
    };

    document.addEventListener("mouseout", handleExitIntent);

    return () => {
      window.clearTimeout(timer);
      document.removeEventListener("mouseout", handleExitIntent);
    };
  }, [openPopup]);

  useEffect(() => {
    if (!isOpen) return;

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") closePopup();
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[9990] flex items-center justify-center bg-[rgba(2,8,23,.66)] p-[18px] font-lexend"
      role="dialog"
      aria-modal="true"
      aria-labelledby="kommo-popup-title"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) closePopup();
      }}
    >
      <div className="relative w-full max-w-[560px] animate-in fade-in slide-in-from-bottom-5 duration-300 overflow-hidden rounded-2xl bg-white shadow-[0_30px_80px_-20px_rgba(0,0,0,.55)]">
        <button
          type="button"
          onClick={closePopup}
          aria-label="Fechar"
          className="absolute right-3.5 top-2.5 z-[3] h-8 w-8 cursor-pointer rounded-full border-0 bg-white/90 text-[1.3rem] leading-none text-[#152946] transition hover:bg-white focus:outline-none focus:ring-2 focus:ring-[#37BC69]"
        >
          ×
        </button>

        <div className="bg-[#152946] px-7 pb-[22px] pt-[26px] text-white">
          <span className="text-[.72rem] font-semibold uppercase tracking-[.18em] text-[#37BC69]">
            Oferta para produtores
          </span>
          <h3 id="kommo-popup-title" className="my-2 pr-8 text-2xl font-bold leading-tight">
            Diagnóstico gratuito da sua operação
          </h3>
          <p className="text-[.92rem] font-light leading-relaxed text-white/80">
            Deixe seu contato e um consultor da Terra faz uma análise inicial da sua
            propriedade, sem compromisso.
          </p>
        </div>

        <div className="h-[300px] overflow-hidden bg-white">
          <iframe
            src="https://forms.kommo.com/rzrczmt"
            className="mt-[-300px] block h-[620px] w-full border-0 bg-white max-[560px]:mt-[-330px] max-[560px]:h-[680px]"
            title="Diagnóstico gratuito da sua operação"
          />
        </div>
      </div>
    </div>
  );
}
