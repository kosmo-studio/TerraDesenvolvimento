import { FormEvent, useMemo, useState } from "react";
import { ArrowLeft, ArrowRight, CheckCircle2, Loader2, Send, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { calcularResultado } from "@/lib/scoring/engine";
import { escreverTextoResultado } from "@/lib/scoring/responseText";
import type {
  MaturidadeRespostas,
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
  const [resultado, setResultado] = useState<ScoringResult | null>(null);
  const [textoResultado, setTextoResultado] = useState("");
  const [loading, setLoading] = useState(false);
  const [emailStatus, setEmailStatus] = useState<"idle" | "sent" | "error">("idle");

  const profileStep = QUESTIONS.length + SITUATION_QUESTIONS.length;
  const leadStep = profileStep + 1;
  const totalSteps = leadStep + 1;
  const progress = useMemo(() => Math.round(((step + 1) / totalSteps) * 100), [step, totalSteps]);
  const selectedSize = PROFILE_SIZE_OPTIONS.find((option) => option.key === profileSize);
  const currentQuestion = step < QUESTIONS.length ? QUESTIONS[step] : null;
  const situationIndex = step - QUESTIONS.length;
  const currentSituation =
    situationIndex >= 0 && situationIndex < SITUATION_QUESTIONS.length
      ? SITUATION_QUESTIONS[situationIndex]
      : null;

  const leadAnswered = Object.values(lead).every(Boolean);
  const canAdvance =
    (currentQuestion && Boolean(respostas[currentQuestion.key])) ||
    (currentSituation && Boolean(situacao[currentSituation.key])) ||
    (step === profileStep && Boolean(profileSize)) ||
    (step === leadStep && leadAnswered);

  const handleLeadChange = (field: keyof typeof lead, value: string) => {
    setLead((current) => ({ ...current, [field]: value }));
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
      throw new Error("Falha ao enviar o diagnóstico para a equipe.");
    }
  };

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    if (!selectedSize || !leadAnswered) return;

    setLoading(true);
    setEmailStatus("idle");

    const result = calcularResultado({
      respostas: respostas as MaturidadeRespostas,
      situacao: situacao as SituacaoRespostas,
      tamanhoHectares: selectedSize.hectares,
    });
    const text = escreverTextoResultado(result);

    setResultado(result);
    setTextoResultado(text);

    try {
      await sendLeadToBackends(result, text);
      setEmailStatus("sent");
    } catch {
      setEmailStatus("error");
    } finally {
      setLoading(false);
    }
  };

  if (resultado) {
    return (
      <div className="font-lexend text-terra-navy">
        <div className="mb-5 flex items-start gap-3">
          <div className="flex h-11 w-11 flex-none items-center justify-center rounded-full bg-[#37BC69]/12 text-[#238b4b]">
            <Sparkles className="h-5 w-5" />
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[#238b4b]">
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

        <div className="mt-5 rounded-xl bg-[#f7fbf8] p-4 text-sm text-terra-navy/70">
          {emailStatus === "sent" && "Recebemos seus dados. A equipe da Terra pode usar esse resultado para conduzir o próximo contato."}
          {emailStatus === "error" && "O resultado foi gerado, mas houve uma falha ao enviar os dados para a equipe."}
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
        <div className="h-2 overflow-hidden rounded-full bg-[#e7ece9]">
          <div className="h-full rounded-full bg-[#37BC69] transition-all" style={{ width: `${progress}%` }} />
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
              onClick: () => setRespostas((current) => ({ ...current, [currentQuestion.key]: option.value })),
            }))}
          />
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
              <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[#238b4b]">
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
                <Input required className="h-11" placeholder="Nome" value={lead.primeiro_nome} onChange={(event) => handleLeadChange("primeiro_nome", event.target.value)} />
                <Input required className="h-11" placeholder="Sobrenome" value={lead.sobrenome} onChange={(event) => handleLeadChange("sobrenome", event.target.value)} />
              </div>
              <Input required className="h-11" type="email" placeholder="E-mail" value={lead.email} onChange={(event) => handleLeadChange("email", event.target.value)} />
              <div className="grid gap-3 sm:grid-cols-2">
                <Input required className="h-11" type="tel" placeholder="WhatsApp" value={lead.telefone} onChange={(event) => handleLeadChange("telefone", event.target.value)} />
                <Input required className="h-11" placeholder="Estado ou país" value={lead.localizacao} onChange={(event) => handleLeadChange("localizacao", event.target.value)} />
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="mt-4 flex items-center justify-between gap-3 border-t border-gray-100 pt-4">
        <Button
          type="button"
          variant="outline"
          onClick={() => setStep((current) => Math.max(0, current - 1))}
          disabled={step === 0 || loading}
          className="h-11 border-[#d8dedb]"
        >
          <ArrowLeft className="h-4 w-4" />
          Voltar
        </Button>

        {step < leadStep ? (
          <Button
            type="button"
            onClick={() => setStep((current) => Math.min(leadStep, current + 1))}
            disabled={!canAdvance}
            className="h-11 bg-[#152946] px-5 text-white hover:bg-[#1f385d]"
          >
            Avançar
            <ArrowRight className="h-4 w-4" />
          </Button>
        ) : (
          <Button
            type="submit"
            disabled={!canAdvance || loading}
            className="h-11 bg-[#37BC69] px-5 text-white hover:bg-[#2da75b]"
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
        <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[#238b4b]">{title}</p>
        <h3 className="mt-2 text-xl font-bold leading-tight text-terra-navy lg:text-2xl">{text}</h3>
      </div>

      <div className="grid gap-2">
        {options.map((option) => (
          <button
            key={option.key}
            type="button"
            onClick={option.onClick}
            className={cn(
              "grid min-h-11 grid-cols-[2rem_1fr] items-center gap-3 rounded-xl border px-3 py-2 text-left text-sm transition",
              option.active
                ? "border-[#37BC69] bg-[#37BC69]/10 text-terra-navy shadow-[0_10px_30px_-24px_rgba(55,188,105,0.9)]"
                : "border-gray-200 bg-white text-terra-navy/70 hover:border-[#37BC69]/60",
            )}
          >
            <span
              className={cn(
                "flex h-8 w-8 items-center justify-center rounded-full text-sm font-bold",
                option.active ? "bg-[#37BC69] text-white" : "bg-[#f1f5f3] text-[#238b4b]",
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

function ResultMetric({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl bg-[#f7fbf8] p-4">
      <div className="mb-2 flex items-center gap-2 text-[#238b4b]">
        <CheckCircle2 className="h-4 w-4" />
        <span className="text-xs font-semibold uppercase tracking-[0.12em]">{label}</span>
      </div>
      <p className="text-sm font-semibold leading-snug text-terra-navy">{value}</p>
    </div>
  );
}
