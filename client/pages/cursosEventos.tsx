import Header from "../components/Header";
import Footer from "../components/Footer";
import { Button } from "@/components/ui/button";
import HeroSection from "@/components/interno/HeroSection";
import DivisorTerra from '@/components/interno/DivisorTerra';
import { Link } from "react-router-dom";
import AnimatedSection from "@/components/AnimatedSection"; 


const beneficiosEncontro = [
  "Palestras com profissionais de destaque no agro.",
  "Discussões sobre tendências e desafios do setor.",
  "Espaços para fortalecer conexões e parcerias estratégicas.",
];

export default function CursoseEventos() {
  return (
    <div className="bg-white overflow-x-hidden">
      <main>
        <Header />
        <AnimatedSection>
          <HeroSection
            backgroundImage="/images/HeroCursoEvento.png"
            title="Cursos e Eventos"
            subtitle="Na Terra Desenvolvimento, acreditamos que conhecimento e relacionamento são pilares fundamentais para o crescimento sustentável do agronegócio. Por isso, oferecemos cursos e eventos que unem prática, inovação e networking, sempre com foco em resultados reais para o seu negócio."
          />
        </AnimatedSection>

        {/* --- Seção Curso de Gestão --- */}
        <section className="py-0 md:pt-24 z-20">
          <div className="container mx-auto pt-14 max-w-7xl shadow-[0px_-40px_40px_-20px_rgba(0,0,0,0.3)] text-center bg-white relative mt-[-20px] md:-mt-64">
            <AnimatedSection>
              <div className="md:mt-6 space-y-2 md:space-y-0 lg:space-y-2 xl:space-y-3 mb-10">
                <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-3xl xl:text-5xl md:text-center font-bold font-lexend text-white">
                  <span className="text-terra-navy px-2">
                    Curso de Gestão da Empresa Pecuária
                  </span>
                </h2>
              </div>
              <div className="flex justify-center mb-10">
                <img
                  src="/images/CursoDeGestao.png"
                  alt="Curso de Gestão da Empresa Pecuária"
                  className="rounded-3xl shadow-lg w-full max-w-4xl"
                />
              </div>
              <div className="max-w-4xl mx-auto text-left px-4">
                <p className="text-lg sm:text-xl text-terra-navy font-light leading-relaxed mb-6">
                  Um dos cursos com maior sucesso em gestão pecuária do Brasil! <br />
                  Com mais de <strong>10.000 participantes</strong> formados em <strong>215 edições</strong>, já se consolidou como referência nacional,
                  alcançando média de satisfação acima de <strong>9,0 pontos</strong>.
                </p>
                <p className="text-lg sm:text-xl text-terra-navy font-light leading-relaxed mb-12">
                  Agora em um <strong>formato prático e dinâmico</strong>, você será o protagonista: aplicará os conceitos diretamente no seu próprio Excel,
                  levando imediatamente as ferramentas de gestão para a realidade da sua fazenda.
                </p>
              </div>
            </AnimatedSection>
            
            <AnimatedSection>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-10 px-4">
                {/* Bloco 1 - Para quem é */}
                <div className="flex flex-col">
                  <h3 className="text-4xl font-black mb-2 text-terra-navy">Para quem é:</h3>
                  <div className="border border-terra-navy rounded-xl p-8 text-terra-navy flex-1 flex flex-col justify-center text-center min-h-[200px]">
                    <p className="text-2xl font-semibold">
                      Produtores rurais, gestores, técnicos e estudantes que desejam aprofundar seus conhecimentos em gestão agropecuária.
                    </p>
                  </div>
                </div>
                {/* Bloco 2 - Diferencial */}
                <div className="flex flex-col">
                  <h3 className="text-4xl font-black mb-2 text-terra-navy">Diferencial:</h3>
                  <div className="border border-terra-navy rounded-xl p-8 text-terra-navy flex-1 flex flex-col justify-center text-center min-h-[200px]">
                    <p className="text-2xl font-semibold">
                      Metodologias e métricas comprovadas em fazendas de sucesso no Brasil, Paraguai e Bolívia.
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
            
            <AnimatedSection>
              <Link to="/EmpresaPecuaria">
                <button className="mb-12 px-8 py-3 bg-terra-navy text-white font-semibold rounded-xl hover:bg-[#0f1d39] transition">
                  SAIBA MAIS
                </button>
              </Link>
            </AnimatedSection>
          </div>
        </section>

        <DivisorTerra />

        {/* --- Seção Curso Personalizado --- */}
        <section className="py-0 md:pt-24 z-20">
          <div className="container mx-auto pt-14 max-w-7xl text-center bg-white relative mt-[-20px] md:-mt-40">
            <AnimatedSection>
              <div className="space-y-2 md:space-y-0 lg:space-y-2 xl:space-y-3 mb-10">
                <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-3xl xl:text-5xl md:text-center font-bold font-lexend text-white">
                  <span className="text-terra-navy px-2">
                    Curso Personalizado em<br /> Gestão Agropecuária
                  </span>
                </h2>
              </div>
              <div className="flex justify-center mb-10">
                <img
                  src="/images/PalestraCurso.png"
                  alt="Curso de Gestão da Empresa Pecuária"
                  className="rounded-3xl shadow-lg w-full max-w-4xl"
                />
              </div>
              <div className="max-w-4xl mx-auto text-left px-4">
                <p className="text-lg sm:text-xl text-terra-navy font-light leading-relaxed mb-6">
                  Sabemos que cada fazenda é única. Por isso, desenvolvemos um formato flexível, feito sob medida para você e sua equipe.
                </p>
                <p className="text-lg sm:text-xl text-terra-navy font-light leading-relaxed mb-12">
                  No <strong>Curso Personalizado,</strong> os temas e objetivos são definidos junto com nossos especialistas,
                  garantindo que o treinamento seja totalmente adaptado à sua realidade.
                </p>
              </div>
            </AnimatedSection>
            
            <AnimatedSection>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-10 px-4">
                {/* Bloco 1 - Para quem é */}
                <div className="flex flex-col">
                  <h3 className="text-4xl font-black mb-2 text-terra-navy">Para quem é:</h3>
                  <div className="border border-terra-navy rounded-xl p-8 text-terra-navy flex-1 flex flex-col justify-center text-center min-h-[200px]">
                    <p className="text-2xl font-semibold">
                      Produtores e equipes que buscam soluções práticas e específicas.
                    </p>
                  </div>
                </div>
                {/* Bloco 2 - Diferencial */}
                <div className="flex flex-col">
                  <h3 className="text-4xl font-black mb-2 text-terra-navy">Diferencial:</h3>
                  <div className="border border-terra-navy rounded-xl p-8 text-terra-navy flex-1 flex flex-col justify-center text-center min-h-[200px]">
                    <p className="text-2xl font-semibold">
                      Conteúdo exclusivo, construído lado a lado, com foco nos resultados estratégicos da sua fazenda.
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
            
            <AnimatedSection>
              <button className="mb-12 px-8 py-3 bg-terra-navy text-white font-semibold rounded-xl hover:bg-[#0f1d39] transition">
                SAIBA MAIS
              </button>
            </AnimatedSection>
          </div>
        </section>

        <DivisorTerra />

        {/* --- Encontro de gestores --- */}
        <section className="bg-white py-24 px-6 md:px-12">
          <div className="max-w-4xl mx-auto text-center">
            <AnimatedSection>
              <h1 className="text-3xl md:text-5xl sm:text-4xl font-extrabold text-terra-navy mb-10">
                Encontro de Gestores
              </h1>
              <div className="flex justify-center mb-10">
                <img
                  src="/images/InfoEncontroGestores.png"
                  alt="Curso de Gestão da Empresa Pecuária"
                  className="rounded-3xl shadow-lg w-full max-w-4xl"
                />
              </div>
              <p className="text-terra-navy text-lg sm:text-xl font-light leading-relaxed mb-12 text-left">
                Um dos eventos mais aguardados do setor! Realizado a cada dois anos, o <strong>Encontro de Gestores</strong> reúne <strong>grandes produtores, clientes e especialistas</strong> em um ambiente de troca de experiências, aprendizado e networking de alto nível.
              </p>
              <h3 className="text-2xl sm:text-3xl font-bold text-terra-navy mb-6">
                O que você encontra:
              </h3>
            </AnimatedSection>

            <div className="space-y-4 mb-12">
              {beneficiosEncontro.map((beneficio, index) => (
                <AnimatedSection key={index} delay={index * 150}>
                  <div className="border border-terra-navy rounded-lg py-3 px-6 text-terra-navy text-base sm:text-lg font-medium text-left">
                    • {beneficio}
                  </div>
                </AnimatedSection>
              ))}
            </div>

            <AnimatedSection>
              <p className="text-terra-navy text-base sm:text-lg font-light leading-relaxed mb-6 text-left">
                Mais do que um evento, o Encontro de Gestores é uma oportunidade para se atualizar e ampliar sua rede de relacionamentos.
              </p>
              <p className="text-terra-navy text-base sm:text-lg font-light leading-relaxed mb-10 text-left">
                <strong>Participe das próximas edições!</strong><br />
                Entre em contato com nossa equipe para saber mais sobre datas, inscrições e como garantir sua vaga nos cursos e eventos da Terra Desenvolvimento.
              </p>
              <a href="https://" target="_blank" rel="noopener noreferrer">
                <button className="px-8 py-3 bg-terra-navy text-white font-semibold rounded-xl hover:bg-[#0f1d39] transition">
                  SAIBA MAIS
                </button>
              </a>
            </AnimatedSection>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
