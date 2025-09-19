import AnimatedSection from "@/components/AnimatedSection";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ClientsSection from "@/components/interno/ClientsSection";
import CTASection from "@/components/interno/CTASection";
import HeroSection from "@/components/interno/HeroSection";
const passos = [
  {
    titulo: "EFICIÊNCIA PRODUTIVA",
    descricao: "Ciclo curto de produção em escala, desenvolvida com excelência na operação e administração dos recursos existentes."
  },
  {
    titulo: "FLUXO DE CAIXA",
    descricao: "Gestão de fluxo de caixa eficiente garantida pela alta liquidez dos ativos, mercado com baixas oscilações nos valores de venda e utilização de ferramentas comerciais de segurança."
  },
  {
    titulo: "OPERAÇÃO",
    descricao: "Operação e gestão de processos realizada por empresa e profissionais com experiência e tempo de mercado. Conhecimento profundo do negócio em toda cadeia produtiva."
  },
  {
    titulo: "TRANSPARÊNCIA",
    descricao: "Rotinas gerenciais que garantam uma prestação de contas constante e confiável, levando transparência e aproveitando o conhecimento dos gestores para o melhor desempenho."
  },
];


export default function Prg() {
  return (
    <div className="bg-white overflow-x-hidden">
      <main>
        <Header />
        {/* Hero Section */}
        <AnimatedSection variant="fade">
        <section className="relative w-full h-[80vh] text-white">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('/images/bg-prg.png')` }}
          aria-hidden="true"
        />
        <div className="relative h-full flex flex-col items-center pt-20 md:pt-32 xl:pt-32 text-center p-4 ">
          <img src="/images/PRG.svg" alt="PRG LOGO" className="w-72 h-auto mb-6" />
          <p 
            className="text-terra-navy text-md md:text-2xl max-w-4xl px-5 font-light"
          >
            O Programa de Recuperação (ou intervenção) Gerencial tem por missão gerar lucro para seus acionistas e investidores através da transformação de áreas, valorização de ativos e desenvolvimento da atividade agropecuária.
          </p>
        </div>
      </section>
      </AnimatedSection>

        {/* --- Seção de Introdução --- */}
        <section className="py-0 md:py-24 z-20">
          <AnimatedSection>
          <div className="container mx-auto pt-14 max-w-7xl shadow-[0px_-40px_40px_-20px_rgba(0,0,0,0.3)] text-center bg-white relative mt-[-20px] md:-mt-40">
            <div className="flex flex-col md:flex-row items-center gap-8 px-0 md:px-0 lg:px-5 xl:px-8">
              <div className="flex-shrink-0 ">
                <img
                  src="/images/terra logo.png"
                  alt="Descrição da imagem"
                  className="w-28 h-28 md:w-20 md:h-20 lg:w-32 lg:h-32 mx-auto"
                />
              </div>
              <div className=" space-y-2 md:space-y-0 lg:space-y-2 xl:space-y-3 ">
                <h2 className="text-2xl sm:text-3xl md:text-xl lg:text-2xl xl:text-4xl md:text-left font-light font-lexend text-white">
                  <span className="bg-terra-navy text-white px-2">
                   Após decisão e aquisição da propriedade, coordenamos
                  </span>
                </h2>
                <h2 className="text-2xl sm:text-3xl md:text-xl lg:text-2xl xl:text-4xl md:text-left font-light font-lexend text-white">
                  <span className="bg-terra-navy text-white px-2">
                   projeto de exploração agropecuária para atender as 
                  </span>
                </h2>
                <h2 className="text-2xl sm:text-3xl md:text-xl lg:text-2xl xl:text-4xl md:text-left font-light font-lexend text-white">
                  <span className="bg-terra-navy text-white px-2">
                   expectativas financeiras e gerenciais dos investidores.
                  </span>
                </h2>
              </div>
            </div>
            <p className="text-2xl sm:text-3xl md:text-4xl px-4 lg:px-[5%] xl:px-[5%] font-bold font-lexend text-terra-navy mt-24 mb-10 sm:mb-[-35px]">
              Afinal, uma avaliação prévia criteriosa do investimento garante a certeza ao investidor da melhor relação benefício custo no uso do seu recurso.
            </p>
            <p className="text-2xl sm:text-3xl md:text-4xl px-4 lg:px-[10%] xl:px-[0%] font-bold font-lexend text-terra-navy mt-24 mb-20 sm:mb-[-35px]">
                Executamos a Análise e Plano de Negócio em 05 etapas:
            </p>
          </div>
          </AnimatedSection>
        </section>

        <section className="px-4 py-16">
        <AnimatedSection>
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col items-center space-y-8">
            {passos.map((passo) => (
              // A CAIXA PRINCIPAL COM A BORDA
              <div key={passo.titulo} className="border rounded-2xl border-terra-navy p-6 md:p-8 w-full">
                {/* GRID INTERNO PARA AS DUAS COLUNAS DE TEXTO */}
                <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-6 md:gap-8 items-center">
                  
                  {/* Coluna 1: Título */}
                  <h3 className="text-xl md:text-3xl font-bold font-lexend text-terra-navy text-center">
                    {passo.titulo}
                  </h3>

                  {/* Coluna 2: Descrição */}
                  <p className="text-base md:text-lg text-terra-gray text-center md:text-left">
                    {passo.descricao}
                  </p>

                </div>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>
      </section>
        {/* --- Textos e Divisor --- */}
        <AnimatedSection>
        <div className="max-w-6xl px-3 flex flex-col gap-6 mt-20 sm:mt-40 mx-auto items-center">
          <h2 className="text-[#162946] text-2xl sm:text-4xl md:text-3xl lg:text-4xl xl:text-5xl text-center font-semibold leading-relaxed">
              Com uma gestão orientada para resultados, garantimos a recuperação da performance e a valorização dos ativos da fazenda.
          </h2>

          <p className="text-[#162946] text-lg sm:text-xl lg:text-3xl font-light text-center leading-relaxed max-w-3xl">
            Nossa experiência mostra que, com transparência e inovação, é possível transformar desafios em crescimento sólido e lucrativo.
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