declare global {
  interface Window {
    dataLayer?: Array<Record<string, any>>;
    gtag?: (...args: any[]) => void;
    fbq?: ((...args: any[]) => void) & { q?: any[]; loaded?: boolean; version?: string };
  }
}

/**
 * Dispara o evento de rastreamento de lead para cliques em "Fale com um consultor" e botões de WhatsApp.
 *
 * 1. Google Tag Manager / GA4:
 *    - dataLayer.push({ event: 'click_fale_consultor', ... })
 *    - gtag('event', 'click_fale_consultor', ...)
 *
 * 2. Meta Pixel (Facebook Pixel):
 *    - fbq('trackCustom', 'click_fale_consultor', ...)
 *    - fbq('track', 'Contact', ...)
 *    - fbq('track', 'Lead', ...)
 *
 * @param buttonName Identificador do botão clicado (ex: "WhatsApp Flutuante", "Header Desktop", etc.)
 */
export const trackFaleConsultor = (buttonName = "Fale com um consultor") => {
  if (typeof window === "undefined") return;

  // 1. Google Tag Manager (GTM-55Z3L4SR) / GA4
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: "click_fale_consultor",
    button_name: buttonName,
    conversion_type: "whatsapp_consultor",
  });

  if (typeof window.gtag === "function") {
    try {
      window.gtag("event", "click_fale_consultor", {
        event_category: "lead",
        event_label: buttonName,
      });
    } catch (e) {
      console.warn("Erro ao disparar gtag:", e);
    }
  }

  // 2. Meta Pixel
  if (typeof window.fbq === "function") {
    try {
      window.fbq("trackCustom", "click_fale_consultor", {
        button_name: buttonName,
      });
      window.fbq("track", "Contact", {
        content_name: buttonName,
      });
      window.fbq("track", "Lead", {
        content_name: buttonName,
      });
    } catch (e) {
      console.warn("Erro ao disparar fbq:", e);
    }
  }
};
