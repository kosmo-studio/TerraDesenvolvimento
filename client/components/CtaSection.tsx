import { CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";

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
            Responda ao formulário de maturidade gerencial e receba uma leitura inicial
            com o nível da sua gestão, a dimensão que mais pede atenção e o caminho
            recomendado pela Terra.
          </p>

          <div className="space-y-4 text-base text-terra-navy/85">
            {[
              "Resultado gerado na hora",
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

        <div className="overflow-hidden rounded-3xl bg-white shadow-[0_24px_70px_-35px_rgba(21,41,70,0.55)]">
          <img
            src="/images/bg-planejamento.webp"
            alt="Gestão rural com planejamento"
            className="h-56 w-full object-cover"
          />
          <div className="p-6 sm:p-8">
            <h3 className="text-2xl font-bold text-terra-navy">
              Diagnóstico de Maturidade Gerencial
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-terra-navy/70">
              Acesse a página dedicada, responda ao formulário e veja o diagnóstico
              personalizado ao final.
            </p>
            <Link
              to="/diagnostico-maturidade"
              className="mt-6 inline-flex h-12 items-center justify-center rounded-md bg-[#37BC69] px-6 text-sm font-semibold text-white transition hover:bg-[#2da75b]"
            >
              Iniciar diagnóstico
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
