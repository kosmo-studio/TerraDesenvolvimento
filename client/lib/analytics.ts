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

/**
 * Disparado quando o usuário abre ou inicia o questionário de Diagnóstico de Maturidade Gerencial.
 */
export const trackDiagnosticoIniciado = (origem = "Pagina Diagnostico") => {
  if (typeof window === "undefined") return;

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: "diagnostico_iniciado",
    quiz_name: "Diagnostico de Maturidade Gerencial",
    origem,
  });

  if (typeof window.gtag === "function") {
    try {
      window.gtag("event", "quiz_start", {
        event_category: "diagnostico",
        event_label: origem,
      });
    } catch (e) {
      console.warn("Erro ao disparar gtag (quiz_start):", e);
    }
  }

  if (typeof window.fbq === "function") {
    try {
      window.fbq("trackCustom", "DiagnosticoIniciado", { origem });
    } catch (e) {
      console.warn("Erro ao disparar fbq (DiagnosticoIniciado):", e);
    }
  }
};

/**
 * Disparado a cada resposta respondida no questionário para acompanhar o funil passo a passo.
 */
export const trackDiagnosticoResposta = ({
  step,
  totalSteps,
  perguntaKey,
  dimensao,
  valor,
}: {
  step: number;
  totalSteps: number;
  perguntaKey: string;
  dimensao: string;
  valor: string | number;
}) => {
  if (typeof window === "undefined") return;

  const progressPct = Math.round(((step + 1) / totalSteps) * 100);

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: "diagnostico_resposta",
    quiz_step: step + 1,
    quiz_total_steps: totalSteps,
    quiz_progress: progressPct,
    pergunta_key: perguntaKey,
    dimensao,
    valor,
  });

  if (typeof window.gtag === "function") {
    try {
      window.gtag("event", "quiz_progress", {
        event_category: "diagnostico",
        event_label: `Passo ${step + 1}: ${perguntaKey}`,
        value: progressPct,
      });
    } catch (e) {
      console.warn("Erro ao disparar gtag (quiz_progress):", e);
    }
  }
};

/**
 * Disparado quando o usuário atinge o Checkpoint Intermediário (após as 12 perguntas).
 */
export const trackDiagnosticoCheckpoint = (nivel: string, areaCritica: string) => {
  if (typeof window === "undefined") return;

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: "diagnostico_checkpoint",
    nivel_preliminar: nivel,
    area_critica: areaCritica,
  });

  if (typeof window.gtag === "function") {
    try {
      window.gtag("event", "quiz_checkpoint", {
        event_category: "diagnostico",
        event_label: nivel,
      });
    } catch (e) {
      console.warn("Erro ao disparar gtag (quiz_checkpoint):", e);
    }
  }
};

/**
 * Disparado quando o usuário chega na etapa do formulário de contato.
 * Métrica crucial para saber quem respondeu o quiz e chegou na tela de contato.
 */
export const trackDiagnosticoEtapaContato = () => {
  if (typeof window === "undefined") return;

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: "diagnostico_etapa_contato",
    description: "Usuario visualizou a tela de preenchimento de contato",
  });

  if (typeof window.gtag === "function") {
    try {
      window.gtag("event", "quiz_lead_form_view", {
        event_category: "diagnostico",
        event_label: "Tela Contato Exibida",
      });
    } catch (e) {
      console.warn("Erro ao disparar gtag (quiz_lead_form_view):", e);
    }
  }

  if (typeof window.fbq === "function") {
    try {
      window.fbq("trackCustom", "DiagnosticoEtapaContato");
    } catch (e) {
      console.warn("Erro ao disparar fbq (DiagnosticoEtapaContato):", e);
    }
  }
};

/**
 * Disparado quando o diagnóstico é finalizado e o resultado é entregue ao produtor.
 * Segmenta claramente:
 * - Lead completo (com telefone)
 * - Lead sem telefone (só e-mail/nome)
 * - Diagnóstico anônimo (sem contato)
 */
export const trackDiagnosticoConcluido = ({
  temTelefone,
  temEmail,
  temNome,
  nivel,
  dimensaoMaisFraca,
  servicoPrincipal,
}: {
  temTelefone: boolean;
  temEmail: boolean;
  temNome: boolean;
  nivel?: string;
  dimensaoMaisFraca?: string;
  servicoPrincipal?: string;
}) => {
  if (typeof window === "undefined") return;

  const tipoConversao = temTelefone
    ? "com_telefone"
    : temEmail
    ? "sem_telefone_com_email"
    : "anonimo";

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: "diagnostico_concluido",
    conversao_tipo: tipoConversao,
    tem_telefone: temTelefone,
    tem_email: temEmail,
    tem_nome: temNome,
    nivel_maturidade: nivel,
    dimensao_critica: dimensaoMaisFraca,
    servico_recomendado: servicoPrincipal,
  });

  if (typeof window.gtag === "function") {
    try {
      window.gtag("event", "generate_lead", {
        event_category: "diagnostico",
        event_label: tipoConversao,
        nivel,
        tem_telefone: temTelefone,
      });

      // Evento específico para contabilidade exata
      if (!temTelefone) {
        window.gtag("event", "diagnostico_sem_telefone", {
          event_category: "diagnostico",
          tem_email: temEmail,
        });
      }
    } catch (e) {
      console.warn("Erro ao disparar gtag (diagnostico_concluido):", e);
    }
  }

  if (typeof window.fbq === "function") {
    try {
      if (temTelefone || temEmail) {
        window.fbq("track", "Lead", {
          content_name: `Diagnostico Maturidade (${tipoConversao})`,
        });
      }
      window.fbq("trackCustom", "DiagnosticoFinalizado", {
        tipo_conversao: tipoConversao,
        tem_telefone: temTelefone,
      });
    } catch (e) {
      console.warn("Erro ao disparar fbq (DiagnosticoFinalizado):", e);
    }
  }
};

/**
 * Disparado quando o usuário respondeu as perguntas do questionário,
 * chegou na tela de contato, mas abandonou antes de enviar ou sem preencher o telefone.
 */
export const trackDiagnosticoAbandonoContato = ({
  temNome,
  temEmail,
  temTelefone,
}: {
  temNome: boolean;
  temEmail: boolean;
  temTelefone: boolean;
}) => {
  if (typeof window === "undefined") return;

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: "diagnostico_abandono_contato",
    tem_nome: temNome,
    tem_email: temEmail,
    tem_telefone: temTelefone,
  });

  if (typeof window.gtag === "function") {
    try {
      window.gtag("event", "quiz_abandonment_contact", {
        event_category: "diagnostico",
        event_label: !temTelefone ? "Sem Telefone" : "Incompleto",
      });
    } catch (e) {
      console.warn("Erro ao disparar gtag (quiz_abandonment_contact):", e);
    }
  }

  if (typeof window.fbq === "function") {
    try {
      window.fbq("trackCustom", "DiagnosticoAbandonoContato", {
        tem_telefone: temTelefone,
      });
    } catch (e) {
      console.warn("Erro ao disparar fbq:", e);
    }
  }
};
