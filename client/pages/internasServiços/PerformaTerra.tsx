import AnimatedSection from "@/components/AnimatedSection";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ClientsSection from "@/components/interno/ClientsSection";
import CTASection from "@/components/interno/CTASection";
import HeroSection from "@/components/interno/HeroSection";
import { Button } from "@/components/ui/button";

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
                Com essa ferramenta poderosa em mãos, o gestor orientará suas
                ações em prol da conquista de suas metas, garantindo assim, o
                resultado financeiro determinado.
              </p>
            </div>
          </AnimatedSection>
        </section>

        <section className="px-5 md:py-12">
          <AnimatedSection>
            <div className="max-w-5xl mx-auto">
              <div className=" border border-terra-navy p-5 lg:p-12 xl:p-16 rounded-xl">
                <p className="text-terra-navy text-xl lg:text-xl xl:text-2xl text-justify">
                  Através de um estudo técnico da propriedade, com base nas
                  informações produtivas e financeiras das últimas safras,
                  podemos avaliar o desempenho produtivo, econômico, parâmetros
                  de equipe e parametrizar os resultados, comparando-os aos
                  atuais índices-referências, determinando um modelo produtivo
                  ideal, de acordo com a realidade da propriedade. Com
                  planejamento executivo plurianual para os próximos 3 anos.
                </p>
              </div>
            </div>
          </AnimatedSection>
        </section>
        {/* --- Textos e Divisor --- */}
        <AnimatedSection>
          <div className="max-w-6xl px-3 flex flex-col gap-6 mt-20 mx-auto items-center">
            <h2 className="text-[#162946] text-2xl sm:text-4xl md:text-3xl lg:text-4xl xl:text-5xl text-center font-semibold leading-relaxed">
              O Performa Terra é mais do que um produto: é um projeto
              personalizado para acelerar resultados e orientar decisões com
              clareza.
            </h2>

            <p className="text-[#162946] text-lg sm:text-xl lg:text-3xl font-light text-center leading-relaxed max-w-3xl">
              Com ele, sua fazenda ganha planejamento, eficiência e
              rentabilidade em cada etapa. Confira os produtores que já
              confiaram nessa solução inovadora.
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
              <a target="_blank" href="https://wa.me/556730263442?text=Quero%20saber%20sobre%20performa%20Terra%20">
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
