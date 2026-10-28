import { FormEvent, useEffect, useMemo, useState } from "react";
import { ArrowLeft, ArrowRight, CheckCircle2, Loader2, MessageCircle, Send, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { calcularDiagnosticoInicial, calcularResultadoCompleto } from "@/lib/scoring/engine";
import { escreverTextoResultado } from "@/lib/scoring/responseText";
import {
  trackDiagnosticoIniciado,
  trackDiagnosticoResposta,
  trackDiagnosticoCheckpoint,
  trackDiagnosticoEtapaContato,
  trackDiagnosticoConcluido,
  trackDiagnosticoAbandonoContato,
  trackFaleConsultor,
} from "@/lib/analytics";
import type {
  MaturidadeRespostas,
  InitialScoringResult,
  RespostaValor,
  ScoringResult,
  SituacaoRespostas,
} from "@/lib/scoring/types";

type AnswerKey = keyof MaturidadeRespostas;
type SituationKey = keyof SituacaoRespostas;
type ProfileSizeKey = "ate_500ha" | "500_2000ha" | "2000_5000ha" | "acima_5000ha";

type MaturityQuestion = {
  key: AnswerKey;
  dimension: string;
  text: string;
  options: { value: RespostaValor; label: string }[];
};

const QUESTIONS: MaturityQuestion[] = [
  {
    key: "N1",
    dimension: "Números e Controle",
    text: "Como você acompanha o custo de produção da sua fazenda hoje?",
    options: [
      { value: 1, label: "Não calculo / não sei meu custo" },
      { value: 2, label: "Tenho uma ideia aproximada, sem cálculo formal" },
      { value: 3, label: "Calculo esporadicamente (por safra)" },
      { value: 4, label: "Calculo mensalmente, com planilha própria" },
      { value: 5, label: "Tenho sistema/software com dados atualizados" },
    ],
  },
  {
    key: "N2",
    dimension: "Números e Controle",
    text: "Com que frequência você sabe o resultado financeiro da fazenda?",
    options: [
      { value: 1, label: "Não sei dizer / só no fim do ano" },
      { value: 2, label: "Tenho uma estimativa, mas não exata" },
      { value: 3, label: "Sei por safra" },
      { value: 4, label: "Sei mensalmente" },
      { value: 5, label: "Sei em tempo real / quando preciso" },
    ],
  },
  {
    key: "N3",
    dimension: "Números e Controle",
    text: "Você compara seus indicadores com fazendas de referência?",
    options: [
      { value: 1, label: "Nunca comparei" },
      { value: 2, label: "Já ouvi falar, mas nunca fiz" },
      { value: 3, label: "Comparo informalmente às vezes" },
      { value: 4, label: "Comparo formalmente uma vez por ano" },
      { value: 5, label: "Faz parte da minha rotina de gestão" },
    ],
  },
  {
    key: "P1",
    dimension: "Planejamento e Metas",
    text: "Sua fazenda tem metas formais para os próximos anos?",
    options: [
      { value: 1, label: "Não tenho metas definidas" },
      { value: 2, label: "Tenho uma ideia geral, sem formalizar" },
      { value: 3, label: "Tenho metas para a safra atual" },
      { value: 4, label: "Tenho metas de 1 a 2 anos" },
      { value: 5, label: "Tenho planejamento de 3 a 5 anos" },
    ],
  },
  {
    key: "P2",
    dimension: "Planejamento e Metas",
    text: "Você tem um plano de ação escrito para atingir essas metas?",
    options: [
      { value: 1, label: "Não tenho plano, decido no dia a dia" },
      { value: 2, label: "Tenho ideias soltas do que fazer" },
      { value: 3, label: "Tenho um plano simples, não documentado" },
      { value: 4, label: "Tenho plano documentado, revisado às vezes" },
      { value: 5, label: "Tenho plano revisado com a equipe" },
    ],
  },
  {
    key: "P3",
    dimension: "Planejamento e Metas",
    text: "Você projeta fluxo de caixa com antecedência?",
    options: [
      { value: 1, label: "Não faço projeção" },
      { value: 2, label: "Faço projeções informais e curtas" },
      { value: 3, label: "Projeto a safra atual" },
      { value: 4, label: "Projeto 12 meses à frente" },
      { value: 5, label: "Projeto múltiplos anos e reviso" },
    ],
  },
  {
    key: "E1",
    dimension: "Pessoas e Equipe",
    text: "Como funciona a tomada de decisão na fazenda hoje?",
    options: [
      { value: 1, label: "Só eu decido tudo" },
      { value: 2, label: "Eu decido quase tudo" },
      { value: 3, label: "Uma pessoa de confiança me ajuda" },
      { value: 4, label: "Equipe com papéis definidos participa" },
      { value: 5, label: "Equipe capacitada executa com autonomia" },
    ],
  },
  {
    key: "E2",
    dimension: "Pessoas e Equipe",
    text: "Sua equipe recebe treinamento de forma estruturada?",
    options: [
      { value: 1, label: "Não, aprendem só na prática" },
      { value: 2, label: "Às vezes, quando surge oportunidade" },
      { value: 3, label: "Tenho treinamentos pontuais" },
      { value: 4, label: "Tenho plano, mas não sigo à risca" },
      { value: 5, label: "Tenho plano estruturado e regular" },
    ],
  },
  {
    key: "E3",
    dimension: "Pessoas e Equipe",
    text: "Se você ficasse 30 dias fora, a fazenda seguiria funcionando?",
    options: [
      { value: 1, label: "Não, muita coisa pararia" },
      { value: 2, label: "Funcionaria com vários problemas" },
      { value: 3, label: "Funcionaria razoavelmente bem" },
      { value: 4, label: "Funcionaria bem, com pequenos ajustes" },
      { value: 5, label: "Funcionaria normalmente" },
    ],
  },
  {
    key: "X1",
    dimension: "Execução e Processos",
    text: "Existem rotinas padronizadas para as principais atividades?",
    options: [
      { value: 1, label: "Não, cada um faz do seu jeito" },
      { value: 2, label: "Existem algumas rotinas informais" },
      { value: 3, label: "Há rotinas para atividades críticas" },
      { value: 4, label: "A maioria tem processo definido" },
      { value: 5, label: "Quase tudo tem processo e é seguido" },
    ],
  },
  {
    key: "X2",
    dimension: "Execução e Processos",
    text: "Você monitora se as metas estão sendo cumpridas ao longo do tempo?",
    options: [
      { value: 1, label: "Só percebo no resultado final" },
      { value: 2, label: "Confiro às vezes, sem rotina" },
      { value: 3, label: "Confiro por safra" },
      { value: 4, label: "Confiro mensalmente" },
      { value: 5, label: "Acompanho indicadores com frequência" },
    ],
  },
  {
    key: "X3",
    dimension: "Execução e Processos",
    text: "Quando um problema aparece, o que costuma acontecer?",
    options: [
      { value: 1, label: "Percebo tarde, após grande impacto" },
      { value: 2, label: "Percebo, mas demoro para agir" },
      { value: 3, label: "Ajo, mas sem método formal" },
      { value: 4, label: "Tenho rotina de correção rápida" },
      { value: 5, label: "Tenho monitoramento preventivo" },
    ],
  },
];

const SITUATION_QUESTIONS: {
  key: SituationKey;
  title: string;
  text: string;
  options: { value: SituacaoRespostas[SituationKey]; label: string }[];
}[] = [
  {
    key: "S1",
    title: "Situação atual",
    text: "Você já opera a fazenda ou está avaliando comprar uma propriedade?",
    options: [
      { value: "ja_opero", label: "Já opero a fazenda atual" },
      { value: "avaliando_compra", label: "Estou avaliando comprar uma propriedade" },
    ],
  },
  {
    key: "S2",
    title: "Gestão",
    text: "Quem você imagina tomando as decisões de gestão daqui para frente?",
    options: [
      { value: "eu_mesmo", label: "Eu mesmo, quero aprender e assumir" },
      { value: "quer_delegar", label: "Prefiro delegar essa gestão" },
    ],
  },
  {
    key: "S3",
    title: "Confiança",
    text: "Existe conflito de confiança que trava decisões importantes?",
    options: [
      { value: "nao", label: "Não" },
      { value: "sim", label: "Sim" },
    ],
  },
  {
    key: "S4",
    title: "Rebanho",
    text: "Você confia 100% no número atual do seu rebanho?",
    options: [
      { value: "sim", label: "Sim, tenho certeza do número atual" },
      { value: "nao", label: "Não tenho certeza / faz tempo que não conto" },
    ],
  },
];

const PROFILE_SIZE_OPTIONS: { key: ProfileSizeKey; label: string; hectares: number }[] = [
  { key: "ate_500ha", label: "Até 500 ha", hectares: 500 },
  { key: "500_2000ha", label: "500 a 2.000 ha", hectares: 2000 },
  { key: "2000_5000ha", label: "2.000 a 5.000 ha", hectares: 5000 },
  { key: "acima_5000ha", label: "Acima de 5.000 ha", hectares: 5001 },
];

const isValidEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
const isValidPhone = (phone: string) => {
  const digits = phone.replace(/\D/g, "");
  return digits.length >= 10 && digits.length <= 13;
};

const formatPhone = (value: string) => {
  const digits = value.replace(/\D/g, "").slice(0, 11);
  if (!digits.length) return "";
  if (digits.length <= 2) return `(${digits}`;
  if (digits.length <= 6) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
  if (digits.length <= 10) return `(${digits.slice(0, 2)}) ${digits.slice(2, 6)}-${digits.slice(6)}`;
  return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7, 11)}`;
};

const scoreInitialDiagnosis = async (
  respostas: MaturidadeRespostas,
): Promise<InitialScoringResult> => {
  try {
    const response = await fetch("/api/score", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ respostas }),
    });

    if (!response.ok) throw new Error("Endpoint de score indisponível para diagnóstico inicial.");
    return await response.json();
  } catch {
    return calcularDiagnosticoInicial(respostas);
  }
};

const scoreFinalDiagnosis = async ({
  respostas,
  situacao,
  tamanhoHectares,
}: {
  respostas: MaturidadeRespostas;
  situacao: SituacaoRespostas;
  tamanhoHectares: number;
}): Promise<ScoringResult> => {
  try {
    const response = await fetch("/api/score", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ respostas, situacao, tamanhoHectares }),
    });

    if (!response.ok) throw new Error("Endpoint de score indisponível para resultado final.");
    return await response.json();
  } catch {
    return calcularResultadoCompleto({ respostas, situacao, tamanhoHectares });
  }
};

export default function MaturityDiagnosisForm() {
  const [step, setStep] = useState(0);
  const [respostas, setRespostas] = useState<Partial<MaturidadeRespostas>>({});
  const [situacao, setSituacao] = useState<Partial<SituacaoRespostas>>({});
  const [profileSize, setProfileSize] = useState<ProfileSizeKey | "">("");
  const [lead, setLead] = useState({
    primeiro_nome: "",
    sobrenome: "",
    email: "",
    telefone: "",
    localizacao: "",
  });
  const [initialResult, setInitialResult] = useState<InitialScoringResult | null>(null);
  const [resultado, setResultado] = useState<ScoringResult | null>(null);
  const [textoResultado, setTextoResultado] = useState("");
  const [loading, setLoading] = useState(false);
  const [scoringInitial, setScoringInitial] = useState(false);
  const [emailStatus, setEmailStatus] = useState<"idle" | "sent" | "error">("idle");
  const [submissionError, setSubmissionError] = useState("");

  // Rastreia o acesso inicial ao questionário
  useEffect(() => {
    trackDiagnosticoIniciado("Questionário de Maturidade");
  }, []);

  const checkpointStep = QUESTIONS.length;
  const firstSituationStep = checkpointStep + 1;
  const profileStep = firstSituationStep + SITUATION_QUESTIONS.length;
  const leadStep = profileStep + 1;
  const totalSteps = leadStep + 1;
  const progress = useMemo(() => Math.round(((step + 1) / totalSteps) * 100), [step, totalSteps]);
  const selectedSize = PROFILE_SIZE_OPTIONS.find((option) => option.key === profileSize);
  const currentQuestion = step < QUESTIONS.length ? QUESTIONS[step] : null;
  const situationIndex = step - firstSituationStep;
  const currentSituation =
    situationIndex >= 0 && situationIndex < SITUATION_QUESTIONS.length
      ? SITUATION_QUESTIONS[situationIndex]
      : null;

  // Validação estrita: dados de contato sempre obrigatórios
  const nameAnswered = lead.primeiro_nome.trim().length >= 2;
  const emailAnswered = isValidEmail(lead.email);
  const phoneAnswered = isValidPhone(lead.telefone);
  const leadAnswered = nameAnswered && emailAnswered && phoneAnswered;

  const canAdvance =
    (currentQuestion && Boolean(respostas[currentQuestion.key])) ||
    (step === checkpointStep && Boolean(initialResult)) ||
    (currentSituation && Boolean(situacao[currentSituation.key])) ||
    (step === profileStep && Boolean(profileSize)) ||
    (step === leadStep && leadAnswered);

  // Rastreia abandono caso o usuário feche ou saia da página na etapa de contato sem ter preenchido o telefone
  useEffect(() => {
    if (step === leadStep && !resultado) {
      const handleBeforeUnload = () => {
        trackDiagnosticoAbandonoContato({
          temNome: lead.primeiro_nome.trim().length >= 2,
          temEmail: isValidEmail(lead.email),
          temTelefone: isValidPhone(lead.telefone),
        });
      };
      window.addEventListener("beforeunload", handleBeforeUnload);
      return () => window.removeEventListener("beforeunload", handleBeforeUnload);
    }
  }, [step, leadStep, resultado, lead]);

  const handleLeadChange = (field: keyof typeof lead, value: string) => {
    const formattedValue = field === "telefone" ? formatPhone(value) : value;
    setLead((current) => ({ ...current, [field]: formattedValue }));
  };

  const handleMaturityAnswer = (key: AnswerKey, value: RespostaValor) => {
    setInitialResult(null);
    setRespostas((current) => ({ ...current, [key]: value }));
    const question = QUESTIONS.find((q) => q.key === key);
    trackDiagnosticoResposta({
      step,
      totalSteps,
      perguntaKey: key,
      dimensao: question?.dimension || "Maturidade",
      valor: value,
    });
  };

  const handleSituationAnswer = (
    key: SituationKey,
    value: SituacaoRespostas[SituationKey],
  ) => {
    setSituacao((current) => ({ ...current, [key]: value }));
    const situation = SITUATION_QUESTIONS.find((s) => s.key === key);
    trackDiagnosticoResposta({
      step,
      totalSteps,
      perguntaKey: key,
      dimensao: situation?.title || "Situação",
      valor: String(value),
    });
  };

  const handleProfileSizeAnswer = (key: ProfileSizeKey) => {
    setProfileSize(key);
    trackDiagnosticoResposta({
      step,
      totalSteps,
      perguntaKey: "TAMANHO_PROPRIEDADE",
      dimensao: "Perfil",
      valor: key,
    });
  };

  const handleNext = async () => {
    if (!canAdvance || loading || scoringInitial) return;

    if (step === QUESTIONS.length - 1) {
      setScoringInitial(true);
      setSubmissionError("");
      try {
        const result = await scoreInitialDiagnosis(respostas as MaturidadeRespostas);
        setInitialResult(result);
        trackDiagnosticoCheckpoint(result.nivelLabel, result.dimensaoMaisFracaLabel);
        setStep(checkpointStep);
      } catch (error) {
        setSubmissionError(
          error instanceof Error ? error.message : "Falha ao calcular o diagnóstico inicial.",
        );
      } finally {
        setScoringInitial(false);
      }
      return;
    }

    const nextStep = Math.min(leadStep, step + 1);
    if (nextStep === leadStep) {
      trackDiagnosticoEtapaContato();
    }
    setStep(nextStep);
  };

  const sendLeadToBackends = async (
    result: ScoringResult,
    text: string,
    currentLead = lead,
  ) => {
    try {
      const kommoResponse = await fetch("/api/kommo-lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          lead: currentLead,
          respostas,
          situacao,
          resultado: result,
          textoResultado: text,
          perfil: {
            tamanhoLabel: selectedSize?.label,
            tamanhoHectares: selectedSize?.hectares,
          },
        }),
      });

      if (!kommoResponse.ok) {
        console.warn("Retorno da API kommo-lead:", kommoResponse.status);
      }
    } catch (err) {
      console.warn("Erro ao enviar para o Kommo CRM:", err);
    }
  };

  const executeSubmission = async (overrideLead?: typeof lead) => {
    if (!selectedSize) return;

    const targetLead = overrideLead || lead;

    setLoading(true);
    setEmailStatus("idle");
    setSubmissionError("");

    let result: ScoringResult;
    try {
      result = await scoreFinalDiagnosis({
        respostas: respostas as MaturidadeRespostas,
        situacao: situacao as SituacaoRespostas,
        tamanhoHectares: selectedSize.hectares,
      });
    } catch (error) {
      setSubmissionError(
        error instanceof Error ? error.message : "Falha ao calcular o resultado final.",
      );
      setEmailStatus("error");
      setLoading(false);
      return;
    }

    const text = escreverTextoResultado(result);

    setResultado(result);
    setTextoResultado(text);

    const temTelefone = Boolean(targetLead.telefone && isValidPhone(targetLead.telefone));
    const temEmail = Boolean(targetLead.email && isValidEmail(targetLead.email));
    const temNome = Boolean(targetLead.primeiro_nome.trim().length > 0);

    // Registra evento analítico no GA4, GTM e Meta Pixel
    trackDiagnosticoConcluido({
      temTelefone,
      temEmail,
      temNome,
      nivel: result.nivelLabel,
      dimensaoMaisFraca: result.dimensaoMaisFracaLabel,
      servicoPrincipal: result.servicoPrincipal,
    });

    try {
      await sendLeadToBackends(result, text, targetLead);
      setEmailStatus("sent");
    } catch (error) {
      setEmailStatus("sent");
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    await executeSubmission();
  };

  if (resultado) {
    const temContato = Boolean(lead.telefone || lead.email);
    const whatsappMessage = encodeURIComponent(
      `Olá! Realizei o Diagnóstico de Maturidade Gerencial no site da Terra e obtive nível "${resultado.nivelLabel}". Gostaria de tirar dúvidas com um consultor.`
    );

    return (
      <div className="font-lexend text-terra-navy">
        <div className="mb-5 flex items-start gap-3">
          <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-terra-beige/25 text-terra-navy">
            <Sparkles className="h-5 w-5" />
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-terra-navy">
              Resultado do diagnóstico
            </p>
            <h3 className="mt-1 text-2xl font-bold leading-tight">{resultado.nivelLabel}</h3>
          </div>
        </div>

        <p className="text-base font-light leading-relaxed text-terra-navy/80">{textoResultado}</p>

        <div className="mt-6 grid gap-3 text-sm sm:grid-cols-2">
          <ResultMetric label="Média geral" value={resultado.mediaGeral.toFixed(2)} />
          <ResultMetric label="Dimensão crítica" value={resultado.dimensaoMaisFracaLabel} />
          <ResultMetric label="Serviço indicado" value={resultado.servicoPrincipal} />
          <ResultMetric label="Complementos" value={resultado.servicosComplementares.join(", ") || "Nenhum"} />
        </div>

        {/* Chamada para ação no WhatsApp após o diagnóstico */}
        <div className="mt-6 flex flex-col gap-3 rounded-xl border border-[#d6ebd9] bg-[#f2faf4] p-5 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h4 className="text-base font-semibold text-terra-navy">
              Quer entender como aplicar esse resultado na sua fazenda?
            </h4>
            <p className="mt-1 text-xs text-terra-navy/70">
              Converse diretamente com a equipe técnica da Terra Desenvolvimento no WhatsApp.
            </p>
          </div>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={`https://wa.me/556730263442?text=${whatsappMessage}`}
            onClick={() => trackFaleConsultor("Resultado Diagnostico WhatsApp")}
            className="inline-flex h-11 items-center justify-center gap-2 rounded-lg bg-[#37BC69] px-5 text-sm font-semibold text-white shadow-sm transition hover:bg-[#2da75b]"
          >
            <MessageCircle className="h-4 w-4" />
            Falar no WhatsApp
          </a>
        </div>

        <div className="mt-4 rounded-xl bg-[#f8f7f3] p-4 text-xs text-terra-navy/70">
          {temContato
            ? "Obrigado! Seus dados foram registrados e o relatório foi associado ao seu perfil."
            : "Diagnóstico finalizado com sucesso! Para um plano de ação completo, fale com nossa equipe técnica pelo botão acima."}
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="font-lexend text-terra-navy">
      <div className="mb-4">
        <div className="mb-2 flex items-center justify-between text-xs font-semibold uppercase tracking-[0.14em] text-terra-navy/45">
          <span>Etapa {step + 1} de {totalSteps}</span>
          <span>{progress}%</span>
        </div>
        <div className="h-1.5 overflow-hidden rounded-full bg-[#e4dfd2]">
          <div className="h-full rounded-full bg-terra-navy transition-all" style={{ width: `${progress}%` }} />
        </div>
      </div>

      <div className="min-h-[300px]">
        {currentQuestion && (
          <QuestionScreen
            title={currentQuestion.dimension}
            text={currentQuestion.text}
            options={currentQuestion.options.map((option) => ({
              key: String(option.value),
              number: option.value,
              label: option.label,
              active: respostas[currentQuestion.key] === option.value,
              onClick: () => handleMaturityAnswer(currentQuestion.key, option.value),
            }))}
          />
        )}

        {step === checkpointStep && initialResult && (
          <InitialResultScreen result={initialResult} />
        )}

        {currentSituation && (
          <QuestionScreen
            title={currentSituation.title}
            text={currentSituation.text}
            options={currentSituation.options.map((option) => ({
              key: String(option.value),
              label: option.label,
              active: situacao[currentSituation.key] === option.value,
              onClick: () => handleSituationAnswer(currentSituation.key, option.value),
            }))}
          />
        )}

        {step === profileStep && (
          <QuestionScreen
            title="Perfil da propriedade"
            text="Qual o tamanho aproximado da sua propriedade?"
            options={PROFILE_SIZE_OPTIONS.map((option) => ({
              key: option.key,
              label: option.label,
              active: profileSize === option.key,
              onClick: () => handleProfileSizeAnswer(option.key),
            }))}
          />
        )}

        {step === leadStep && (
          <div className="grid gap-5 lg:grid-cols-[0.78fr_1.22fr] lg:items-start">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.14em] text-terra-navy">
                Quase lá!
              </p>
              <h3 className="mt-2 text-2xl font-bold leading-tight text-terra-navy">
                Informe seus dados para liberar o resultado
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-terra-navy/65">
                Preencha os campos abaixo para gerar sua análise completa e receber as recomendações personalizadas da Terra Desenvolvimento.
              </p>
            </div>

            <div className="space-y-3">
              <div className="grid gap-3 sm:grid-cols-2">
                <div>
                  <Input
                    required
                    className="h-11"
                    placeholder="Seu nome*"
                    value={lead.primeiro_nome}
                    onChange={(event) => handleLeadChange("primeiro_nome", event.target.value)}
                  />
                  {lead.primeiro_nome && !nameAnswered && (
                    <p className="mt-1 text-xs font-medium text-red-600">Informe ao menos 2 caracteres.</p>
                  )}
                </div>
                <Input
                  className="h-11"
                  placeholder="Sobrenome"
                  value={lead.sobrenome}
                  onChange={(event) => handleLeadChange("sobrenome", event.target.value)}
                />
              </div>
              <div>
                <Input
                  required
                  className="h-11"
                  type="email"
                  placeholder="Seu e-mail principal*"
                  value={lead.email}
                  onChange={(event) => handleLeadChange("email", event.target.value)}
                />
                {lead.email && !emailAnswered && (
                  <p className="mt-1 text-xs font-medium text-red-600">Informe um e-mail válido (ex: seu@email.com).</p>
                )}
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                <div>
                  <Input
                    required
                    className="h-11"
                    type="tel"
                    inputMode="tel"
                    placeholder="WhatsApp com DDD*"
                    value={lead.telefone}
                    onChange={(event) => handleLeadChange("telefone", event.target.value)}
                  />
                  {lead.telefone && !phoneAnswered && (
                    <p className="mt-1 text-xs font-medium text-red-600">DDD + número (ex: (67) 99999-8888).</p>
                  )}
                </div>
                <Input
                  className="h-11"
                  placeholder="Cidade / Estado da fazenda"
                  value={lead.localizacao}
                  onChange={(event) => handleLeadChange("localizacao", event.target.value)}
                />
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="mt-6 flex flex-col gap-3 border-t border-gray-100 pt-4">
        <div className="flex items-center justify-between gap-3">
          <Button
            type="button"
            variant="outline"
            onClick={() => setStep((current) => Math.max(0, current - 1))}
            disabled={step === 0 || loading || scoringInitial}
            className="h-11 rounded-lg border-[#cfd8d4] bg-white text-terra-navy hover:bg-[#f4f7f5]"
          >
            <ArrowLeft className="h-4 w-4" />
            Voltar
          </Button>

          {step < leadStep ? (
            <Button
              type="button"
              onClick={handleNext}
              disabled={!canAdvance || scoringInitial}
              className="h-11 rounded-lg bg-terra-navy px-5 text-white hover:bg-terra-dark-blue"
            >
              {scoringInitial ? (
                <Loader2 className="h-4 w-4 animate-spin" />
              ) : step === checkpointStep ? (
                "Continuar"
              ) : (
                "Avançar"
              )}
              {!scoringInitial && <ArrowRight className="h-4 w-4" />}
            </Button>
          ) : (
            <Button
              type="submit"
              disabled={!canAdvance || loading}
              className="h-11 rounded-lg bg-terra-beige px-6 font-semibold text-terra-navy hover:bg-[#bda675] disabled:opacity-50"
            >
              {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
              Liberar meu diagnóstico
            </Button>
          )}
        </div>
      </div>
    </form>
  );
}

function QuestionScreen({
  title,
  text,
  options,
}: {
  title: string;
  text: string;
  options: { key: string; number?: number; label: string; active: boolean; onClick: () => void }[];
}) {
  return (
    <div className="grid gap-5 lg:grid-cols-[0.78fr_1.22fr] lg:items-start">
      <div className="lg:pt-1">
        <p className="text-sm font-semibold uppercase tracking-[0.14em] text-terra-navy/70">{title}</p>
        <h3 className="mt-2 text-xl font-semibold leading-tight text-terra-navy lg:text-2xl">{text}</h3>
      </div>

      <div className="grid gap-2">
        {options.map((option) => (
          <button
            key={option.key}
            type="button"
            onClick={option.onClick}
            className={cn(
              "grid min-h-11 grid-cols-[2rem_1fr] items-center gap-3 rounded-lg border px-3 py-2 text-left text-sm transition",
              option.active
                ? "border-terra-navy bg-terra-navy text-white shadow-[0_12px_28px_-24px_rgba(21,41,70,0.85)]"
                : "border-[#e2ddcf] bg-white text-terra-navy/72 hover:border-terra-beige hover:bg-[#f8f7f3]",
            )}
          >
            <span
              className={cn(
                "flex h-8 w-8 items-center justify-center rounded-full text-sm font-bold",
                option.active ? "bg-terra-beige text-terra-navy" : "bg-[#f2efe7] text-terra-navy",
              )}
            >
              {option.number ?? ""}
            </span>
            <span className="leading-snug">{option.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}

function InitialResultScreen({ result }: { result: InitialScoringResult }) {
  return (
    <div className="grid gap-5 lg:grid-cols-[0.78fr_1.22fr] lg:items-start">
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.14em] text-terra-navy">
          Diagnóstico inicial
        </p>
        <h3 className="mt-2 text-2xl font-bold leading-tight text-terra-navy">
          Seu diagnóstico inicial está pronto
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-terra-navy/65">
          Agora, só mais algumas perguntas rápidas sobre a sua situação e planos. Isso não muda o seu nível de maturidade, mas ajuda a indicar o serviço certo para você.
        </p>
      </div>

      <div className="space-y-4 rounded-xl border border-[#e2ddcf] bg-[#f8f7f3] p-5">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.12em] text-terra-navy/55">
            Seu nível
          </p>
          <p className="mt-1 text-2xl font-bold text-terra-navy">{result.nivelLabel}</p>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.12em] text-terra-navy/55">
            Área que mais precisa de atenção agora
          </p>
          <p className="mt-1 text-lg font-semibold text-terra-navy">
            {result.dimensaoMaisFracaLabel}
          </p>
        </div>
        <p className="text-sm leading-relaxed text-terra-navy/75">
          Seu diagnóstico inicial: nível {result.nivelLabel}, com {result.dimensaoMaisFracaLabel} como área que mais precisa de atenção agora.
        </p>
      </div>
    </div>
  );
}

function ResultMetric({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-lg border border-[#e2ddcf] bg-[#f8f7f3] p-4">
      <div className="mb-2 flex items-center gap-2 text-terra-navy">
        <CheckCircle2 className="h-4 w-4" />
        <span className="text-xs font-semibold uppercase tracking-[0.12em]">{label}</span>
      </div>
      <p className="text-sm font-semibold leading-snug text-terra-navy">{value}</p>
    </div>
  );
}
