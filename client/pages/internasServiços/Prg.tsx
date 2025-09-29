import AnimatedSection from "@/components/AnimatedSection";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ClientsSection from "@/components/interno/ClientsSection";
import CTASection from "@/components/interno/CTASection";
import HeroSection from "@/components/interno/HeroSection";
import { Button } from "@/components/ui/button";
const passos = [
  {
    titulo: "EFICIÊNCIA PRODUTIVA",
    descricao:
      "Ciclo curto de produção em escala, desenvolvida com excelência na operação e administração dos recursos existentes.",
  },
  {
    titulo: "FLUXO DE CAIXA",
    descricao:
      "Gestão de fluxo de caixa eficiente garantida pela alta liquidez dos ativos, mercado com baixas oscilações nos valores de venda e utilização de ferramentas comerciais de segurança.",
  },
  {
    titulo: "OPERAÇÃO",
    descricao:
      "Operação e gestão de processos realizada por empresa e profissionais com experiência e tempo de mercado. Conhecimento profundo do negócio em toda cadeia produtiva.",
  },
  {
    titulo: "TRANSPARÊNCIA",
    descricao:
      "Rotinas gerenciais que garantam uma prestação de contas constante e confiável, levando transparência e aproveitando o conhecimento dos gestores para o melhor desempenho.",
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
              <img
                src="/images/PRG.svg"
                alt="PRG LOGO"
                className="w-72 h-auto mb-6"
              />
              <p className="text-terra-navy text-md md:text-2xl max-w-4xl px-5 font-light">
                O Programa de Recuperação (ou intervenção) Gerencial tem por
                missão gerar lucro para seus acionistas e investidores através
                da transformação de áreas, valorização de ativos e
                desenvolvimento da atividade agropecuária.
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
                  <h2 className="text-xl sm:text-3xl md:text-xl lg:text-2xl xl:text-4xl text-left font-light font-lexend text-white">
                    <span className="bg-terra-navy text-white px-2">
                      Após decisão e aquisição da propriedade, coordenamos
                    </span>
                  </h2>
                  <h2 className="text-xl sm:text-3xl md:text-xl lg:text-2xl xl:text-4xl text-left font-light font-lexend text-white">
                    <span className="bg-terra-navy text-white px-2">
                      projeto de exploração agropecuária para atender as
                    </span>
                  </h2>
                  <h2 className="text-xl sm:text-3xl md:text-xl lg:text-2xl xl:text-4xl text-left font-light font-lexend text-white">
                    <span className="bg-terra-navy text-white px-2">
                      expectativas financeiras e gerenciais dos investidores.
                    </span>
                  </h2>
                </div>
              </div>
              <p className="text-2xl sm:text-3xl md:text-4xl px-4 lg:px-[5%] xl:px-[5%] font-bold font-lexend text-terra-navy mt-24 mb-10 sm:mb-[-35px]">
                Afinal, uma avaliação prévia criteriosa do investimento garante
                a certeza ao investidor da melhor relação benefício custo no uso
                do seu recurso.
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
                  <div
                    key={passo.titulo}
                    className="border rounded-2xl border-terra-navy p-6 md:p-8 w-full"
                  >
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
              Com uma gestão orientada para resultados, garantimos a recuperação
              da performance e a valorização dos ativos da fazenda.
            </h2>

            <p className="text-[#162946] text-lg sm:text-xl lg:text-3xl font-light text-center leading-relaxed max-w-3xl">
              Nossa experiência mostra que, com transparência e inovação, é
              possível transformar desafios em crescimento sólido e lucrativo.
            </p>
          </div>
        </AnimatedSection>
        <AnimatedSection>
          <ClientsSection />
        </AnimatedSection>
        <section className="py-16 px-4 lg:px-8 bg-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl lg:text-5xl font-lexend text-terra-navy mb-8">
              <span className="font-normal">Seja você também um cliente </span>
              <span className="font-bold">Terra!</span>
            </h2>
            <a target="_blank" href="https://wa.me/556730263442?text=Quero%20saber%20sobre%20programa%20de%20recuperação%20gerencial%20">
              <Button className="bg-terra-dark-blue hover:bg-terra-navy text-white px-8 py-4 md:text-lg font-lexend rounded-lg flex items-center gap-3 mx-auto">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413" />
                </svg>
                TRANSFORME SUA PRODUÇÃO
              </Button>
              </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
