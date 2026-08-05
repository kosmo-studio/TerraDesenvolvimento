import Header from "@/components/Header";
import MaturityDiagnosisForm from "@/components/MaturityDiagnosisForm";
import { CheckCircle2 } from "lucide-react";

export default function DiagnosticoMaturidade() {
  return (
    <div className="min-h-screen overflow-hidden bg-[#f4f2ec]">
      <Header />

      <main className="font-lexend">
        <section className="relative flex min-h-screen items-center overflow-hidden px-4 pb-6 pt-24 lg:px-8">
          <div className="absolute inset-0 bg-[#f8f7f3]" />
          <div className="absolute inset-x-0 top-0 h-[52%] bg-white" />
          <div className="absolute inset-x-0 bottom-0 h-[42%] bg-[#ebe6d8]" />
          <div className="absolute left-0 top-0 hidden h-full w-2 bg-terra-navy lg:block" />
          <div className="absolute right-0 top-0 hidden h-full w-[31vw] bg-[#f0eadc] lg:block" />
          <div className="absolute bottom-0 right-0 hidden h-[46vh] w-[46vw] bg-[#ded5bf] lg:block" />

          <div className="relative mx-auto grid w-full max-w-7xl items-center gap-6 lg:grid-cols-[0.72fr_1.28fr]">
            <div className="text-terra-navy lg:pr-6">
              <span className="mb-5 inline-flex rounded-lg bg-terra-beige/25 px-4 py-2 text-sm font-semibold uppercase tracking-[0.16em] text-terra-navy">
                Diagnóstico gratuito
              </span>

              <h1 className="max-w-xl text-4xl font-bold leading-tight sm:text-5xl">
                Diagnóstico de Maturidade Gerencial
              </h1>

              <p className="mt-5 max-w-lg text-base font-light leading-relaxed text-terra-navy/72">
                Responda ao formulário e receba uma leitura inicial sobre o nível de gestão
                da sua fazenda, com indicação do próximo passo recomendado pela Terra.
              </p>

              <div className="mt-7 grid gap-3 text-sm text-terra-navy/78">
                {[
                  "Resultado gerado na hora pelo motor de pontuação",
                  "Avaliação por números, planejamento, equipe e execução",
                  "Recomendação conforme o cenário da propriedade",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 rounded-lg border border-[#e2ddcf] bg-white px-3 py-3 shadow-[0_16px_40px_-34px_rgba(21,41,70,0.55)]"
                  >
                    <CheckCircle2 className="mt-0.5 h-5 w-5 flex-none text-terra-navy" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="mt-7 hidden max-w-lg border-l-4 border-terra-beige bg-white px-5 py-4 text-sm leading-relaxed text-terra-navy/68 shadow-[0_18px_50px_-38px_rgba(21,41,70,0.65)] sm:block">
                Uma leitura rápida para entender o estágio da gestão e conduzir o
                próximo contato comercial com mais contexto.
              </div>
            </div>

            <div className="rounded-xl border border-[#e2ddcf] bg-white p-4 text-terra-navy shadow-[0_28px_80px_-46px_rgba(21,41,70,0.78)] sm:p-5 lg:p-6">
              <div className="mb-4 overflow-hidden rounded-lg bg-terra-navy text-white">
                <div className="h-1 bg-terra-beige" />
                <div className="px-5 py-4">
                  <h2 className="text-xl font-semibold">Formulário de diagnóstico</h2>
                  <p className="mt-1 text-sm font-light text-white/72">
                    Uma pergunta por vez, com resultado ao final.
                  </p>
                </div>
              </div>
              <MaturityDiagnosisForm />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
