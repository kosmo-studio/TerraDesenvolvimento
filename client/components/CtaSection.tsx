import { CheckCircle2 } from "lucide-react";
import KommoDiagnosisForm from "@/components/KommoDiagnosisForm";

export default function CtaSection() {
  return (
    <section
      id="diagnostico-gratuito"
      className="bg-[#f4f7f5] px-4 py-16 lg:px-8 lg:py-24"
    >
      <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="font-lexend text-terra-navy">
          <span className="mb-4 inline-flex rounded-full bg-[#37BC69]/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.16em] text-[#238b4b]">
            Diagnóstico gratuito
          </span>

          <h2 className="mb-5 text-4xl font-bold leading-tight lg:text-5xl">
            Descubra onde sua operação pode ganhar mais eficiência.
          </h2>

          <p className="mb-7 text-lg font-light leading-relaxed text-terra-navy/75">
            Preencha o formulário e a equipe da Terra avalia o melhor caminho
            para entender sua fazenda, seus indicadores e as oportunidades de
            melhoria na gestão.
          </p>

          <div className="space-y-4 text-base text-terra-navy/85">
            {[
              "Análise inicial sem compromisso",
              "Atendimento consultivo para produtores e gestores",
              "Direcionamento para a solução mais adequada da Terra",
            ].map((item) => (
              <div key={item} className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 h-5 w-5 flex-none text-[#37BC69]" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="overflow-hidden rounded-3xl bg-white p-4 shadow-[0_24px_70px_-35px_rgba(21,41,70,0.55)] sm:p-6">
          <div className="mb-4 rounded-2xl bg-[#152946] px-5 py-4 text-white">
            <h3 className="text-xl font-bold">Solicite seu diagnóstico</h3>
            <p className="mt-1 text-sm text-white/75">
              Informe seus dados para a equipe comercial retornar.
            </p>
          </div>

          <KommoDiagnosisForm />
        </div>
      </div>
    </section>
  );
}
