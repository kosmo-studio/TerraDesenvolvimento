import AnimatedSection from "@/components/AnimatedSection";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ClientsSection from "@/components/interno/ClientsSection";
import CTASection from "@/components/interno/CTASection";
import HeroSection from "@/components/interno/HeroSection";
import ServiceCard from "@/components/interno/ServiceCard";


export default function PlanejamentoEstrategico() {
  return (
    <div className="bg-white overflow-x-hidden">
      <main>
        <AnimatedSection variant="fade">
        <Header />
        {/* Hero Section */}
         <HeroSection
          backgroundImage="/images/bg-planejamento.png"
          title="Planejamento Estratégico"
          subtitle="O PROJETO é o elemento determinante para o sucesso da atividade em questão. Foco e clareza nos objetivos, “Ponto B”, determinando o caminho para o crescimento sustentável da lucratividade e gerenciabilidade da fazenda."
        />
        </AnimatedSection>

        {/* --- Seção de Introdução --- */}
        <section className="py-0 md:py-24 z-20">
        <AnimatedSection>
          <div className="container mx-auto pt-14 max-w-7xl shadow-[0px_-40px_40px_-20px_rgba(0,0,0,0.3)] text-center bg-white relative mt-[-20px] md:-mt-40">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-8 px-0 md:px-0 lg:px-5 xl:px-8">
              <div className="flex-shrink-0">
                <img
                  src="/images/terra logo.png"
                  alt="Descrição da imagem"
                  className="w-28 h-28 md:w-20 md:h-20 lg:w-32 lg:h-32 mx-auto"
                />
              </div>
              <div className=" space-y-2 md:space-y-0 lg:space-y-2 xl:space-y-3 ">
                <h2 className="text-2xl sm:text-3xl md:text-2xl lg:text-4xl text-left font-light font-lexend text-white">
                  <span className="bg-terra-navy text-white px-2">
                   Coordenação, método, confecção e apoio aos
                  </span>
                </h2>
                <h2 className="text-2xl sm:text-3xl md:text-2xl lg:text-4xl text-left font-light font-lexend text-white">
                  <span className="bg-terra-navy text-white px-2">
                   gestores para definir o projeto da fazenda pronta,
                  </span>
                </h2>
                <h2 className="text-2xl sm:text-3xl md:text-2xl lg:text-4xl text-left font-light font-lexend text-white">
                  <span className="bg-terra-navy text-white px-2">
                    onde ela chegará no curto, médio e longo prazo.
                  </span>
                </h2>
                <h2 className="text-2xl sm:text-3xl md:text-2xl lg:text-4xl text-left font-light font-lexend text-white">
                  <span className="bg-terra-navy text-white px-2">
                    Determinar as metas produtivas, financeiras e
                  </span>
                </h2>
                <h2 className="text-2xl sm:text-3xl md:text-2xl lg:text-4xl text-left font-light font-lexend text-white">
                  <span className="bg-terra-navy text-white px-2">
                    gerenciais bem como o plano de ação.
                  </span>
                </h2>
                <h2 className="text-2xl sm:text-3xl md:text-2xl lg:text-4xl text-left font-light font-lexend text-white">
                  <span className="bg-terra-navy text-white px-2">
                    para alcançá-las.
                  </span>
                </h2>
              </div>
            </div>
            <p className="text-2xl sm:text-3xl md:text-4xl px-4 lg:px-[19%] xl:px-[30%] font-bold font-lexend text-terra-navy mt-24 mb-10 sm:mb-[-35px]">
              Reuniões com os gestores para definirmos:
            </p>
          </div>
        </AnimatedSection>
        </section>

        {/* --- Seção de Indicadores (para a troca de icones o icone deve ser totalmente preto) --- */}
        <section className="px-6 py-0">
          <AnimatedSection>
          <div className="max-w-3xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
              <ServiceCard 
                label="a." 
                icon="/images/missão.svg" 
                text="Apresentamos e auxiliamos na Visão, missão, objetivo e metas estratégicas plurianuais da fazenda;" 
              />
              <ServiceCard 
                label="b." 
                icon="/images/lucro.svg"  
                text=" Lucro por hectare, resultado de caixa, resultado operacional e produtivo;" 
              />
              <ServiceCard 
                label="c." 
                icon="/images/desdobramento.svg"  
                text="Desdobramento, modelagens e exemplos de casos reais de outras fazendas." 
              />
            </div>
          </div>
            <div className="max-w-5xl mx-auto"> 
              <p className="text-2xl sm:text-3xl md:text-4xl px-4 lg:px-[19%] xl:px-[20%] justify-center text-center font-bold font-lexend text-terra-navy mt-24 mb-10 sm:mb-[-35px]">
                 Com a equipe gerencial e técnica da fazenda, elaboramos:
              </p>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-32 gap-8">
                    <ServiceCard 
                      label="a." 
                      icon="/images/metas.svg" 
                      text="Metas táticas e Projeto produtivo;" 
                    />
                    <ServiceCard 
                      label="b." 
                      icon="/images/rotinas.svg"  
                      text="Plano de ação de médio prazo;" 
                    />
                    <ServiceCard 
                      label="c." 
                      icon="/images/orcamento.svg"  
                      text="Orçamento e fluxo de caixa previsto para os 12 meses subsequentes;" 
                    />
                    <ServiceCard 
                      label="d." 
                      icon="/images/producao.svg"  
                      text="sProdução e balanço previsto para 24 e 36 meses, com a validação dos gestores." 
                    />
                </div>
            </div>
            <div className="max-w-3xl mx-auto"> 
              <p className="text-2xl sm:text-3xl md:text-4xl px-4 lg:px-[19%] xl:px-[20%] justify-center text-center font-bold font-lexend text-terra-navy mt-24 mb-10 sm:mb-[-35px]">
                 Definimos e auxiliamos na decisão:
              </p>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 mt-32 gap-8">
                    <ServiceCard 
                      label="a." 
                      icon="/images/capacitacao.svg" 
                      text="Habilidades gerenciais a serem desenvolvidas nas pessoas chaves da fazenda;" 
                    />
                    <ServiceCard 
                      label="b." 
                      icon="/images/formatoGestao.svg"  
                      text="Formatos de gestão" 
                    />
                    <ServiceCard 
                      label="c." 
                      icon="/images/metas.svg"  
                      text="Plano de capacitação permanente da equipe e desdobramento das metas individuais." 
                    />
                </div>
            </div>
            </AnimatedSection>
        </section>
        {/* --- Textos e Divisor --- */}
        <AnimatedSection>
        <div className="max-w-6xl px-3 flex flex-col gap-6 mt-40 mx-auto items-center">
          <h2 className="text-[#162946] text-2xl sm:text-4xl md:text-3xl lg:text-4xl xl:text-5xl text-center font-semibold leading-relaxed">
            Com um planejamento estratégico
            estruturado,sua fazenda ganha direção,
            foco e segurança para alcançar cada objetivo.
          </h2>

          <p className="text-[#162946] text-lg sm:text-xl lg:text-3xl font-light text-center leading-relaxed max-w-3xl">
            Transformamos metas em planos concretos, guiando
            gestores rumo ao crescimento sustentável e à
            lucratividade contínua. Conheça os clientes
            que já avançaramconosco nessa jornada.
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