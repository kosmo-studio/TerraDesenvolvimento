import AnimatedSection from "@/components/AnimatedSection";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ClientsSection from "@/components/interno/ClientsSection";
import CTASection from "@/components/interno/CTASection";
import HeroSection from "@/components/interno/HeroSection";
import ServiceCard from "@/components/interno/ServiceCard";

export default function DiagnosticoGlobal() {
  return (
    <div className="bg-white overflow-x-hidden">
      <main>
        <Header />

        {/* Hero Section */}
        <AnimatedSection variant="fade">
          <HeroSection
            backgroundImage="/images/desempenho.png"
            title="Diagnóstico de Desempenho Global"
            subtitle="Apresentar e discutir onde sua fazenda está, o 'Ponto A' e onde poderá chegar, mostrando com clareza a atual situação financeira, produtiva e gerencial da empresa através de indicadores parametrizados."
          />
        </AnimatedSection>

        {/* --- Seção de Introdução --- */}
        <section className="py-0 md:py-24 z-20">
          <AnimatedSection>
            <div className="container mx-auto pt-14 max-w-7xl shadow-[0px_-40px_40px_-20px_rgba(0,0,0,0.3)] text-center bg-white relative  mt-[-20px] md:-mt-40">
              <div className="flex flex-col md:flex-row items-center md:items-start gap-8 px-0 md:px-0 lg:px-5 xl:px-8">
                <div className="flex-shrink-0">
                  <img
                    src="/images/terra logo.png"
                    alt="Descrição da imagem"
                    className="w-28 h-28 md:w-20 md:h-20 lg:w-32 lg:h-32 mx-auto"
                  />
                </div>
                <div className=" space-y-2 md:space-y-0 lg:space-y-2 xl:space-y-3 ">
                  <h2 className="text-2xl sm:text-3xl md:text-2xl lg:text-3xl xl:text-4xl text-left font-light font-lexend text-white">
                    <span className="bg-terra-navy text-white px-2">
                      A partir das conclusões do diagnóstico e desafios
                    </span>
                  </h2>
                  <h2 className="text-2xl sm:text-3xl md:text-2xl lg:text-3xl xl:text-4xl text-left font-light font-lexend text-white">
                    <span className="bg-terra-navy text-white px-2">
                      definidos no planejamento estratégico,
                    </span>
                  </h2>
                  <h2 className="text-2xl sm:text-3xl md:text-2xl lg:text-3xl xl:text-4xl text-left font-bold font-lexend text-white">
                    <span className="bg-terra-navy text-white px-2">
                      a Terra Desenvolvimento coordenará:
                    </span>
                  </h2>
                </div>
              </div>
              {/* Tipografia mais fluida */}
              <p className="text-2xl sm:text-3xl md:text-4xl px-4 lg:px-[19%] xl:px-[25%] font-bold font-lexend text-terra-navy mt-24 mb-10 sm:mb-[-35px]">
                Definição dos indicadores que serão monitorados referentes a:
              </p>
            </div>
          </AnimatedSection>
        </section>

        {/* --- Seção de Indicadores --- */}
        <section className="px-6 py-0">
          <AnimatedSection>
            <div className="max-w-5xl mx-auto">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                <ServiceCard
                  label="a."
                  icon="/images/movimentacao.svg"
                  text="Movimentação e estoque pecuário;"
                />
                <ServiceCard
                  label="b."
                  icon="/images/insumos.svg"
                  text="Utilização de insumos agrícolas, pecuários e controle de estoques em geral;"
                />
                <ServiceCard
                  label="c."
                  icon="/images/clima.svg"
                  text="Fatores climáticos;"
                />
                <ServiceCard
                  label="d."
                  icon="/images/maquina.svg"
                  text="Parque de máquinas (operações, consumo e manutenções);"
                />
                <ServiceCard
                  label="e."
                  icon="/images/equipe.svg"
                  text="Equipe;"
                />
                <ServiceCard
                  label="f."
                  icon="/images/indicadores.svg"
                  text="Fluxo de Caixa e indicadores financeiros;"
                />
                <ServiceCard
                  label="g."
                  icon="/images/treinamento.svg"
                  text="Treinamento da equipe de campo na coleta de dados por função, setor e hierarquia."
                />
              </div>
            </div>
          </AnimatedSection>
        </section>
        {/* --- Textos e Divisor --- */}
        <AnimatedSection>
          <div className="max-w-6xl px-4 flex flex-col gap-6 mt-40 mx-auto items-center">
            <h2 className="text-[#162946] text-3xl sm:text-4xl md:text-3xl lg:text-4xl xl:text-5xl text-center font-semibold leading-tight">
              Com um diagnóstico preciso e estratégias bem definidas, sua
              fazenda ganha clareza de rumo e solidez nas decisões.
            </h2>

            <p className="text-[#162946] text-lg sm:text-xl lg:text-2xl font-light text-center leading-relaxed max-w-3xl">
              Mais do que números, entregamos caminhos para transformar
              potencial em resultado real, garantindo evolução constante e
              sustentabilidade do negócio.
            </p>
          </div>
        </AnimatedSection>
        <AnimatedSection>
          <ClientsSection />
        </AnimatedSection>
        <AnimatedSection>
          <CTASection />
        </AnimatedSection>
      </main>
      <Footer />
    </div>
  );
}
