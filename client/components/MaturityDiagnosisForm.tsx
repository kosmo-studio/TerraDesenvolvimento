import { FormEvent, useMemo, useState } from "react";
import { ArrowLeft, ArrowRight, CheckCircle2, Loader2, Send, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { calcularDiagnosticoInicial, calcularResultadoCompleto } from "@/lib/scoring/engine";
import { escreverTextoResultado } from "@/lib/scoring/responseText";
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

const scoreInitialDiagnosis = async (
  respostas: MaturidadeRespostas,
): Promise<InitialScoringResult> => {
  try {
    const response = await fetch("/api/score", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ respostas }),
    });

    if (!response.ok) throw new Error("Endpoint de score indisponivel para diagnostico inicial.");
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

    if (!response.ok) throw new Error("Endpoint de score indisponivel para resultado final.");
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

  const nameAnswered = lead.primeiro_nome.trim().length > 1;
  const emailAnswered = isValidEmail(lead.email);
  const phoneAnswered = isValidPhone(lead.telefone);
  const leadAnswered = nameAnswered && emailAnswered && phoneAnswered;
  const canAdvance =
    (currentQuestion && Boolean(respostas[currentQuestion.key])) ||
    (step === checkpointStep && Boolean(initialResult)) ||
    (currentSituation && Boolean(situacao[currentSituation.key])) ||
    (step === profileStep && Boolean(profileSize)) ||
    (step === leadStep && leadAnswered);

  const handleLeadChange = (field: keyof typeof lead, value: string) => {
    setLead((current) => ({ ...current, [field]: value }));
  };

  const handleMaturityAnswer = (key: AnswerKey, value: RespostaValor) => {
    setInitialResult(null);
    setRespostas((current) => ({ ...current, [key]: value }));
  };

  const handleNext = async () => {
    if (!canAdvance || loading || scoringInitial) return;

    if (step === QUESTIONS.length - 1) {
      setScoringInitial(true);
      setSubmissionError("");
      try {
        const result = await scoreInitialDiagnosis(respostas as MaturidadeRespostas);
        setInitialResult(result);
        setStep(checkpointStep);
      } catch (error) {
        setSubmissionError(
          error instanceof Error ? error.message : "Falha ao calcular o diagnostico inicial.",
        );
      } finally {
        setScoringInitial(false);
      }
      return;
    }

    setStep((current) => Math.min(leadStep, current + 1));
  };

  const sendLeadToBackends = async (result: ScoringResult, text: string) => {
    const observacao = [
      "Diagnóstico de Maturidade Gerencial",
      `Nível: ${result.nivelLabel}`,
      `Média geral: ${result.mediaGeral.toFixed(2)}`,
      `Dimensão mais fraca: ${result.dimensaoMaisFracaLabel}`,
      `Serviço recomendado: ${result.servicoPrincipal}`,
      `Complementos: ${result.servicosComplementares.join(", ") || "Nenhum"}`,
      `Situações especiais: ${result.situacaoEspecial.join(", ") || "Nenhuma"}`,
      `Tamanho da propriedade: ${selectedSize?.label || "Não informado"}`,
      `Localização: ${lead.localizacao}`,
      `Texto entregue ao usuário: ${text}`,
    ].join("\n");

    const kommoRequest = fetch("/api/kommo-lead", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        lead,
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

    const kommoResponse = await kommoRequest;

    if (!kommoResponse.ok) {
      let message = "Falha ao enviar o diagnóstico para a equipe.";
      try {
        const data = await kommoResponse.json();
        if (data?.error) message = data.error;
      } catch {
        // Mantem a mensagem padrão quando a resposta não vier em JSON.
      }
      throw new Error(message);
    }
  };

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    if (!selectedSize || !leadAnswered) return;

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
      setSubmissionError(error instanceof Error ? error.message : "Falha ao calcular o resultado final.");
      setEmailStatus("error");
      setLoading(false);
      return;
    }

    const text = escreverTextoResultado(result);

    setResultado(result);
    setTextoResultado(text);

    try {
      await sendLeadToBackends(result, text);
      setEmailStatus("sent");
    } catch (error) {
      setSubmissionError(error instanceof Error ? error.message : "Falha ao enviar o diagnóstico para a equipe.");
      setEmailStatus("error");
    } finally {
      setLoading(false);
    }
  };

  if (resultado) {
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
          <ResultMetric label="Complementos" value={resultado.servicosComplementares.join(", ")} />
        </div>

        <div className="mt-5 rounded-xl bg-[#f8f7f3] p-4 text-sm text-terra-navy/70">
          {emailStatus === "sent" && "Recebemos seus dados. A equipe da Terra pode usar esse resultado para conduzir o próximo contato."}
          {emailStatus === "error" && (
            <span>
              O resultado foi gerado, mas houve uma falha ao enviar os dados para a equipe.
              {submissionError ? ` Detalhe: ${submissionError}` : ""}
            </span>
          )}
          {emailStatus === "idle" && "Finalizando envio do diagnóstico..."}
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
              onClick: () => setSituacao((current) => ({ ...current, [currentSituation.key]: option.value })),
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
              onClick: () => setProfileSize(option.key),
            }))}
          />
        )}

        {step === leadStep && (
          <div className="grid gap-5 lg:grid-cols-[0.78fr_1.22fr] lg:items-start">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.14em] text-terra-navy">
                Seus dados
              </p>
              <h3 className="mt-2 text-2xl font-bold leading-tight text-terra-navy">
                Para onde a equipe Terra pode retornar?
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-terra-navy/65">
                Esses dados acompanham o diagnóstico gerado.
              </p>
            </div>

            <div className="space-y-3">
              <div className="grid gap-3 sm:grid-cols-2">
                <Input required className="h-11" placeholder="Nome*" value={lead.primeiro_nome} onChange={(event) => handleLeadChange("primeiro_nome", event.target.value)} />
                <Input className="h-11" placeholder="Sobrenome" value={lead.sobrenome} onChange={(event) => handleLeadChange("sobrenome", event.target.value)} />
              </div>
              <Input required className="h-11" type="email" placeholder="E-mail*" value={lead.email} onChange={(event) => handleLeadChange("email", event.target.value)} />
              {lead.email && !emailAnswered && (
                <p className="text-xs font-medium text-red-700">Informe um e-mail valido.</p>
              )}
              <div className="grid gap-3 sm:grid-cols-2">
                <Input required className="h-11" type="tel" inputMode="tel" placeholder="WhatsApp com DDD*" value={lead.telefone} onChange={(event) => handleLeadChange("telefone", event.target.value)} />
                <Input className="h-11" placeholder="Estado ou país" value={lead.localizacao} onChange={(event) => handleLeadChange("localizacao", event.target.value)} />
              </div>
              {lead.telefone && !phoneAnswered && (
                <p className="text-xs font-medium text-red-700">Informe um WhatsApp valido com DDD.</p>
              )}
            </div>
          </div>
        )}
      </div>

      <div className="mt-4 flex items-center justify-between gap-3 border-t border-gray-100 pt-4">
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
            className="h-11 rounded-lg bg-terra-beige px-5 text-terra-navy hover:bg-[#bda675]"
          >
            {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
            Ver resultado
          </Button>
        )}
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
          Diagnostico inicial
        </p>
        <h3 className="mt-2 text-2xl font-bold leading-tight text-terra-navy">
          Seu diagnostico inicial esta pronto
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-terra-navy/65">
          Agora, so mais algumas perguntas rapidas sobre a sua situacao e planos. Isso nao muda o seu nivel de maturidade, mas ajuda a indicar o servico certo para voce.
        </p>
      </div>

      <div className="space-y-4 rounded-xl border border-[#e2ddcf] bg-[#f8f7f3] p-5">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.12em] text-terra-navy/55">
            Seu nivel
          </p>
          <p className="mt-1 text-2xl font-bold text-terra-navy">{result.nivelLabel}</p>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.12em] text-terra-navy/55">
            Area que mais precisa de atencao agora
          </p>
          <p className="mt-1 text-lg font-semibold text-terra-navy">
            {result.dimensaoMaisFracaLabel}
          </p>
        </div>
        <p className="text-sm leading-relaxed text-terra-navy/75">
          Seu diagnostico inicial: nivel {result.nivelLabel}, com {result.dimensaoMaisFracaLabel} como area que mais precisa de atencao agora.
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
