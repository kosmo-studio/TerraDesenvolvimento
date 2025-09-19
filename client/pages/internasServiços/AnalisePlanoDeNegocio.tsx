import AnimatedSection from "@/components/AnimatedSection";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ClientsSection from "@/components/interno/ClientsSection";
import CTASection from "@/components/interno/CTASection";
import HeroSection from "@/components/interno/HeroSection";

const passos = [
  {
    imagem: "/images/01.png",
    alt: "Passo 01",
    texto: "Prospecção de propriedades que tenham o perfil do investidor, através de uma equipe parceira de corretores credenciados, garantindo assim objetividade e discrição."
  },
  {
    imagem: "/images/02.png",
    alt: "Passo 02",
    texto: "Aprovação e autorização por parte do investidor, da vistoria técnica à propriedade."
  },
  {
    imagem: "/images/03.png",
    alt: "Passo 03",
    texto: "Visita às propriedades para coleta de dados e reconhecimento."
  },
  {
    imagem: "/images/04.png",
    alt: "Passo 04",
    texto: "Tabulação dos dados, análises de viabilidade e projeção  de resultados."
  },
  {
    imagem: "/images/05.png",
    alt: "Passo 05",
    texto: "Apresentação do Plano de Negócio com modelagens produtivas desenhadas. Após escolha, decisão e aprovação do modelo produtivo e plano de negócio, enviamos o material escrito impresso e encadernado."
  },
];

export default function AnalisePlanoDeNegocio() {
  return (
    <div className="bg-white overflow-x-hidden">
      <main>
        <AnimatedSection variant="fade">
        <Header />
        {/* Hero Section */}
         <HeroSection
          backgroundImage="/images/bg-analise.png"
          title="Análise e Plano de Negócios: Aquisição de fazendas"
          subtitle="Suporte na análise e decisão de investimento e compra de propriedade rural, baseado nas principais variáveis envolvidas na produção, projeção de resultados, rentabilidade e viabilidade econômica."
        />
        </AnimatedSection>
        {/* --- Seção de Introdução --- */}
        <section className="py-0 md:py-24 z-20">
        <AnimatedSection>
          
          <div className="container mx-auto pt-14 max-w-7xl shadow-[0px_-40px_40px_-20px_rgba(0,0,0,0.3)] text-center bg-white relative  mt-[-20px] md:-mt-40">
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

        <section className="px-6 py-0">
        <AnimatedSection>
          <div className="max-w-5xl mx-auto">           
                <div className="flex flex-col items-center space-y-8">
                {passos.map((passo) => (
                    <div key={passo.alt} className="flex flex-col md:flex-row items-center gap-8 w-full max-w-4xl">
                    {/* Coluna 1: Imagem */}
                    <img src={passo.imagem} alt={passo.alt} className="w-auto md:h-20 lg:h-28 flex-shrink-0" />

                    {/* Coluna 2: Parágrafo com tamanho controlado */}
                    <p className="md:text-lg lg:text-xl font-medium border text-center md:text-start rounded-2xl md:rounded-3xl border-terra-navy p-4 md:px-2 lg:px-8 w-full md:h-36 lg:h-40 flex items-center">
                        {passo.texto}
                    </p>
                    </div>
                ))}
            </div>
          </div>
        </AnimatedSection>
        </section>
        <AnimatedSection>
        {/* --- Textos e Divisor --- */}
        <div className="max-w-6xl px-3 flex flex-col gap-6 mt-20 sm:mt-40 mx-auto items-center">
          <h2 className="text-[#162946] text-2xl sm:text-4xl md:text-3xl lg:text-4xl xl:text-5xl text-center font-semibold leading-relaxed">
              Com uma análise criteriosa e um plano de negócios sólido, garantimos que cada decisão de aquisição seja segura, estratégica e rentável.
          </h2>

          <p className="text-[#162946] text-lg sm:text-xl lg:text-3xl font-light text-center leading-relaxed max-w-3xl">
              Nossa experiência mostra que, com dados consistentes e gestão estruturada, é possível transformar investimentos em patrimônios de alto desempenho.
          </p>
        </div>
        </ AnimatedSection>
        <AnimatedSection>
        <ClientsSection />
        </AnimatedSection>
        <AnimatedSection>
        <CTASection />
        </ AnimatedSection>
      </main>
      <Footer />
    </div>
  );
}