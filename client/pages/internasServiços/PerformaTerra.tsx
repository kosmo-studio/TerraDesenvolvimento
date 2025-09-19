import AnimatedSection from "@/components/AnimatedSection";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ClientsSection from "@/components/interno/ClientsSection";
import CTASection from "@/components/interno/CTASection";
import HeroSection from "@/components/interno/HeroSection";


export default function PerformaTerra() {
  return (
    <div className="bg-white overflow-x-hidden">
      <main>
        <Header />
        <AnimatedSection variant="fade">
        {/* Hero Section */}
        <HeroSection
          backgroundImage="/images/bg-performa.png"
          title="Performa Terra"
          subtitle="O Performa Terra é a nossa mais nova modalidade de produto, sob medida para sua fazenda e foi criada a partir do pedido de diversos produtores que buscavam uma solução de curto prazo."
        />
        </AnimatedSection>
        {/* --- Seção de Introdução --- */}
        <section className="py-0 md:py-24 z-20">
          <AnimatedSection>
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
                <h2 className="text-xl sm:text-3xl md:text-xl lg:text-2xl xl:text-3xl text-left font-light font-lexend text-white">
                  <span className="bg-terra-navy text-white px-2">
                   Buscando atender um gestor que possui conhecimento 
                  </span>
                </h2>
                <h2 className="text-xl sm:text-3xl md:text-xl lg:text-2xl xl:text-3xl text-left font-light font-lexend text-white">
                  <span className="bg-terra-navy text-white px-2">
                   e está envolvido com a atividade, serão delineados fluxos
                  </span>
                </h2>
                <h2 className="text-xl sm:text-3xl md:text-xl lg:text-2xl xl:text-3xl text-left font-light font-lexend text-white">
                  <span className="bg-terra-navy text-white px-2">
                   de caixa, rebanho e pasto, baseado em um prévio balanço 
                  </span>
                </h2>
                <h2 className="text-xl sm:text-3xl md:text-xl lg:text-2xl xl:text-3xl text-left font-light font-lexend text-white">
                  <span className="bg-terra-navy text-white px-2">
                   produtivo e financeiro do seu negócio.
                  </span>
                </h2>
              </div>
            </div>
            <p className="text-2xl sm:text-3xl md:text-4xl px-0 lg:px-[5%] xl:px-[17%] text-justify font-bold font-lexend text-terra-navy mt-24 mb-10 sm:mb-[-35px]">
              Com essa ferramenta poderosa em mãos, o gestor orientará suas ações em prol da conquista de suas metas, garantindo assim, o resultado financeiro determinado.
            </p>
          </div>
          </AnimatedSection>
        </section>

        <section className="px-5 md:py-12">
          <AnimatedSection>
        <div className="max-w-5xl mx-auto">
          <div className=" border border-terra-navy p-5 lg:p-12 xl:p-16 rounded-xl">
            <p className="text-terra-navy text-xl lg:text-xl xl:text-2xl text-justify">Através de um estudo técnico da propriedade, com base nas informações produtivas e financeiras das últimas safras, podemos avaliar o desempenho produtivo, econômico, parâmetros de equipe e parametrizar os resultados, comparando-os aos atuais índices-referências, determinando um modelo produtivo ideal, de acordo com a realidade da propriedade. Com planejamento executivo plurianual para os próximos 3 anos.</p>
          </div>
          
        </div>
        </AnimatedSection>
      </section>
        {/* --- Textos e Divisor --- */}
        <AnimatedSection>
        <div className="max-w-6xl px-3 flex flex-col gap-6 mt-20 mx-auto items-center">
          <h2 className="text-[#162946] text-2xl sm:text-4xl md:text-3xl lg:text-4xl xl:text-5xl text-center font-semibold leading-relaxed">
              O Performa Terra é mais do que um produto: é um projeto personalizado para acelerar resultados e orientar decisões com clareza.
          </h2>

          <p className="text-[#162946] text-lg sm:text-xl lg:text-3xl font-light text-center leading-relaxed max-w-3xl">
            Com ele, sua fazenda ganha planejamento, eficiência e rentabilidade em cada etapa. Confira os produtores que já confiaram nessa solução inovadora.
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