import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ClientsSection from "@/components/interno/ClientsSection";
import CTASection from "@/components/interno/CTASection";
import HeroSection from "@/components/interno/HeroSection";
import ServiceCard from "@/components/interno/ServiceCard";

export default function ImplementacaoDeControle() {
  return (
    <div className="bg-white overflow-x-hidden">
      <main>
        <Header />
        
        {/* Hero Section */}
         <HeroSection
          backgroundImage="/images/bg-implantacao.png"
          title="Implantação de Controle"
          subtitle="Acesso pelos gestores e equipe dos dados e informações essenciais, com rapidez e confiabilidade, através da otimização dos controles existentes na fazenda, implantação de sistemas e outros métodos que se façam necessários para ter “a fazenda em suas mãos”."
        />

        {/* --- Seção de Introdução --- */}
        <section className="py-0 md:py-24 z-20">
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
        </section>

        {/* --- Seção de Indicadores --- */}
        <section className="px-6 py-0">
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
              <ServiceCard 
                label="h." 
                icon="/images/montagem.svg"  
                text="Montagem de painéis para que as equipes visualizem as realizações e metas." 
              />
              
            </div>
            {/* Tipografia mais fluida */}
            <p className="text-2xl sm:text-3xl md:text-4xl px-4 lg:px-[19%] xl:px-[20%] justify-center text-center font-bold font-lexend text-terra-navy mt-24 mb-10 sm:mb-[-35px]">
              Desenvolvimento Gerencial:
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-32 gap-8">
              <ServiceCard 
                label="a." 
                icon="/images/capacitacao.svg" 
                text="Capacitação dos gestores para utilização das ferramentas de gestão implantadas;" 
              />
              <ServiceCard 
                label="b." 
                icon="/images/aplicacao.svg"  
                text="Aplicação e desenvolvimento de técnicas de meta gerenciamento;" 
              />
              <ServiceCard 
                label="c." 
                icon="/images/rotinas.svg"  
                text="Implementação de rotinas gerenciais eficazes para o alcance da metas estabelecidas;" 
              />
              <ServiceCard 
                label="d." 
                icon="/images/meritocracia.svg"  
                text="Meritocracia e monitoramento da execução das tarefas determinadas;" 
              />
              <ServiceCard 
                label="e." 
                icon="/images/gestaoTempo.svg"  
                text="Gestão baseada em informação no tempo e forma adequada, garantindo a execução dos processos com excelência." 
              />
              
            </div>
            


          </div>
        </section>
        {/* --- Textos e Divisor --- */}
      <div className="max-w-6xl px-4 flex flex-col gap-6 mt-40 mx-auto items-center">
        <h2 className="text-[#162946] text-2xl sm:text-4xl md:text-3xl lg:text-4xl xl:text-5xl text-center font-semibold leading-tight">
          Com controles bem estruturados,
          sua fazenda alcança maior organização,
          transparência e segurança nas informações.
        </h2>

        <p className="text-[#162946] text-lg sm:text-xl lg:text-2xl font-light text-center leading-relaxed max-w-3xl">
          Isso significa decisões mais rápidas, gestão profissional
          e resultados que fortalecem o futuro do seu negócio.
        </p>
      </div>
        <ClientsSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}