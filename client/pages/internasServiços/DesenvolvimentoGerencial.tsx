import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ClientsSection from "@/components/interno/ClientsSection";
import CTASection from "@/components/interno/CTASection";
import HeroSection from "@/components/interno/HeroSection";
import ServiceCard from "@/components/interno/ServiceCard";

export default function DesenvolvimentoGerencial() {
  return (
    <div className="bg-white overflow-x-hidden">
      <main>
        <Header />
        {/* Hero Section */}
         <HeroSection
          backgroundImage="/images/bg-desenvolvimentogerencial.png"
          title="Desenvolvimento Gerencial"
          subtitle="Construir equipe realizadora capaz de assumir e bater as metas estabelecidas. Tomar ações eficientes no propósito de “forjar” uma cultura gerencial objetiva,  duradoura e que respeite seus valores na conquista de seus objetivos."
        />

        {/* --- Seção de Introdução --- */}
        <section className="py-0 md:py-24 z-20">
          <div className="container mx-auto pt-14 max-w-7xl shadow-[0px_-40px_40px_-20px_rgba(0,0,0,0.3)] text-center bg-white relative mt-[-20px] md:-mt-40">
            <div className="flex flex-col md:flex-row items-center gap-8 px-0 md:px-0 lg:px-5 xl:px-8">
              <div className="flex-shrink-0">
                <img
                  src="/images/terra logo.png"
                  alt="Descrição da imagem"
                  className="w-28 h-28 md:w-20 md:h-20 lg:w-32 lg:h-32 mx-auto"
                />
              </div>
              <div className=" space-y-2 md:space-y-0 lg:space-y-2 xl:space-y-3 ">
                <h2 className="text-2xl sm:text-3xl md:text-2xl lg:text-4xl md:text-left font-light font-lexend text-white">
                  <span className="bg-terra-navy text-white px-2">
                   Aumente a gerenciabilidade e o lucro de empresa.
                  </span>
                </h2>
              </div>
            </div>
            <p className="text-2xl sm:text-3xl md:text-4xl px-4 lg:px-[19%] xl:px-[30%] font-bold font-lexend text-terra-navy mt-24 mb-10 sm:mb-[-35px]">
              Rotinas mensais focadas na gestão operacional:
            </p>
          </div>
        </section>

        {/* --- Seção de Indicadores (para a troca de icones o icone deve ser totalmente preto) --- */}
        <section className="px-6 py-0">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              <ServiceCard 
                label="a." 
                icon="/images/rotinas.svg" 
                text="Coleta de dados  a campo, estoques e fluxo de caixa;" 
              />
              <ServiceCard 
                label="b." 
                icon="/images/planejamento.svg"  
                text="Planejamento: Financeiro; Pecuário; Máquinas; Agrícola; Estoques; Climáticas." 
              />
              <ServiceCard 
                label="c." 
                icon="/images/balança.svg"  
                text="Detecção de inconsistências dos dados lançados. Correções e ajustes;" 
              />
              <ServiceCard 
                label="d." 
                icon="/images/internet.svg"  
                text="Exportação dos dados pela internet;" 
              />
              <ServiceCard 
                label="e." 
                icon="/images/boletim.svg"  
                text="Envio de Boletim Mensal comparando o Realizado versus Meta prevista;" 
              />
              <ServiceCard 
                label="f." 
                icon="/images/livro.svg"  
                text="Envio e atualização do Plano de Ação e Cronogramas;" 
              />
              <ServiceCard 
                label="g." 
                icon="/images/montagem.svg"  
                text="Atualização dos Quadros de Gestão à Vista." 
              />
            </div>
          </div>
            <div className="max-w-5xl mx-auto"> 
              <p className="text-2xl sm:text-3xl md:text-4xl px-4 lg:px-[19%] xl:px-[20%] justify-center text-center font-bold font-lexend text-terra-navy mt-24 mb-10 sm:mb-[-35px]">
                 Rotinas trimestrais focadas na gestão tática:
              </p>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-32 gap-8">
                    <ServiceCard 
                      label="a." 
                      icon="/images/desdobramento.svg" 
                      text="Avaliação dos resultados acumulado da safra;" 
                    />
                    <ServiceCard 
                      label="b." 
                      icon="/images/lucro.svg"  
                      text="Análise das projeções em relação às metas e ao projeto nas frentes: Mercado Finanças / Fluxo de Caixa; Processos / Operações; RH / Aprendizado - Gestão" 
                    />
                    <ServiceCard 
                      label="c." 
                      icon="/images/equipe.svg"  
                      text="Alinhamento tático com gestores e gerência;" 
                    />
                    <ServiceCard 
                      label="d." 
                      icon="/images/meritocracia.svg"  
                      text="Novos planos de ação e cronogramas para os próximos meses." 
                    />
                </div>
            </div>
            <div className="max-w-5xl mx-auto"> 
              <p className="text-2xl sm:text-3xl md:text-4xl px-4 lg:px-[19%] xl:px-[20%] justify-center text-center font-bold font-lexend text-terra-navy mt-24 mb-10 sm:mb-[-35px]">
                 Rotinas anuais focadas na gestão estratégica:
              </p>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-32 gap-8">
                    <ServiceCard 
                        label="a." 
                        icon="/images/balança.svg" 
                        text="Balanço produtivo financeira anual ou safra." 
                    />
                    <ServiceCard 
                        label="b." 
                        icon="/images/capacitacao.svg"  
                        text="Desenvolver a equipe a ponto de através de indicadores tomar as ações necessárias de correção ou ajuste do projeto." 
                    />
                    <ServiceCard 
                        label="c." 
                        icon="/images/rotinas.svg"  
                        text="Estabelecer plano de desenvolvimento técnico e pessoal." 
                    />
                    <ServiceCard 
                        label="d." 
                        icon="/images/equipe.svg"  
                        text="Estar lado a lado com a equipe e gestores na implementação da cultura gerencial desenhada." 
                    />
                    <ServiceCard 
                        label="e." 
                        icon="/images/missão.svg"  
                        text="Análises, conclusões e aprendizados." 
                    />
                    <ServiceCard 
                        label="f." 
                        icon="/images/livro.svg"  
                        text="Reiniciamos o ciclo PDCA, através de novo Planejamento Estratégico Global" 
                    />
                </div>
            </div>
        </section>
        {/* --- Textos e Divisor --- */}
      <div className="max-w-6xl px-3 flex flex-col gap-6 mt-40 mx-auto items-center">
        <h2 className="text-[#162946] text-2xl sm:text-4xl md:text-3xl lg:text-4xl xl:text-5xl text-center font-semibold leading-relaxed">
            Ao desenvolver equipes realizadoras,
            sua fazenda ganha mais do que
            resultados: constrói uma cultura sólida,
            capaz de sustentar o crescimento
            a longo prazo.
        </h2>

        <p className="text-[#162946] text-lg sm:text-xl lg:text-3xl font-light text-center leading-relaxed max-w-3xl">
            A experiência de nossos clientes mostra que pessoas
            engajadas, com metas claras, são a chave para maior
            gerenciabilidade e lucratividade.
        </p>
      </div>
        <ClientsSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}