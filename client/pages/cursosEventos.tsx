import Header from "../components/Header";
import Footer from "../components/Footer";
import { Button } from "@/components/ui/button";
import HeroSection from "@/components/interno/HeroSection";
import DivisorTerra from '@/components/interno/DivisorTerra';
import { Link } from "react-router-dom";
import AnimatedSection from "@/components/AnimatedSection"; 

// --- DADOS E CONSTANTES GLOBAIS ---
const beneficiosEncontro = [
  "Palestras com profissionais de destaque no agronegócio.",
  "Discussões sobre tendências e desafios do setor.",
  "Espaços para fortalecer conexões e parcerias estratégicas.",
];

// Unificado: Agora aponta para uma rota geral de cursos ou para a landing page principal do curso
const cursoGestaoUnificado = {
    title: "Curso de Gestão da Empresa Pecuária",
    imageSrc: "/images/BANNERCURSOGESTAO.webp", // Sugestão: usar a imagem mais genérica ou a de Cuiabá que estava mais atualizada
    description1: `Um dos cursos com maior sucesso em gestão pecuária do Brasil! <br /> Com mais de <strong>10.000 participantes</strong> formados em <strong>215 edições</strong>, já se consolidou como referência nacional, alcançando média de satisfação acima de <strong>9,0 pontos</strong>.`,
    description2: `Agora em um <strong>formato prático e dinâmico</strong>, você será o protagonista: aplicará os conceitos diretamente no seu próprio Excel, levando imediatamente as ferramentas de gestão para a realidade da sua fazenda.`,
    targetAudience: "Produtores rurais, gestores, técnicos e estudantes que desejam aprofundar seus conhecimentos em gestão agropecuária.",
    differential: "Metodologias e métricas comprovadas em fazendas de sucesso no Brasil, Paraguai e Bolívia.",
    linkTo: "/EmpresaPecuaria", // Rota unificada
    containerClass: 'text-center bg-white relative mt-[-20px] md:-mt-64', 
    sectionPaddingClass: 'py-0 pt-44' 
};

const cursoPersonalizadoData = {
    title: "Curso Personalizado em<br /> Gestão Agropecuária",
    imageSrc: "/images/PalestraCurso.webp",
    description1: `Sabemos que cada fazenda é única. Por isso, desenvolvemos um formato flexível, feito sob medida para você e sua equipe.`,
    description2: `No <strong>Curso Personalizado,</strong> os temas e objetivos são definidos junto com nossos especialistas, garantindo que o treinamento seja totalmente adaptado à sua realidade.`,
    targetAudience: "Produtores e equipes que buscam soluções práticas e específicas.",
    differential: "Conteúdo exclusivo, construído lado a lado, com foco nos resultados estratégicos da sua fazenda.",
    linkTo: null,
    containerClass: 'text-center bg-white relative mt-[-20px] md:-mt-40', 
    sectionPaddingClass: 'py-0 md:pt-24'
};

// --- COMPONENTE LOCAL REUTILIZÁVEL ---
function CourseSection({ title, imageSrc, description1, description2, targetAudience, differential, linkTo, containerClass, sectionPaddingClass }) {
    return (
        <section className={`${sectionPaddingClass} z-20`}>
            <div className={`container mx-auto pt-14 max-w-7xl ${containerClass}`}>
                <AnimatedSection>
                    <div className="md:mt-6 space-y-2 md:space-y-0 lg:space-y-2 xl:space-y-3 mb-10">
                        <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-3xl xl:text-5xl md:text-center font-bold font-lexend text-white">
                            <span className="text-terra-navy px-2" dangerouslySetInnerHTML={{ __html: title }} />
                        </h2>
                    </div>
                    
                    {linkTo ? (
                        <Link to={linkTo} className="flex justify-center mb-10">
                            <img src={imageSrc} alt={title.replace(/<br\s*\/?>/gi, ' ')} className="rounded-3xl shadow-lg w-full max-w-4xl hover:opacity-95 transition-opacity" />
                        </Link>
                    ) : (
                        <div className="flex justify-center mb-10">
                            <img src={imageSrc} alt={title} className="rounded-3xl shadow-lg w-full max-w-4xl" />
                        </div>
                    )}
                    
                    <div className="max-w-4xl mx-auto text-left px-4">
                        <p className="text-lg sm:text-xl text-terra-navy font-light leading-relaxed mb-6" dangerouslySetInnerHTML={{ __html: description1 }} />
                        <p className="text-lg sm:text-xl text-terra-navy font-light leading-relaxed mb-12" dangerouslySetInnerHTML={{ __html: description2 }} />
                    </div>
                </AnimatedSection>
                
                <AnimatedSection>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-10 px-4">
                        <div className="flex flex-col">
                            <h3 className="text-4xl font-black mb-2 text-terra-navy">Para quem é:</h3>
                            <div className="border border-terra-navy rounded-xl p-8 text-terra-navy flex-1 flex flex-col justify-center text-center min-h-[200px]">
                                <p className="text-2xl font-semibold">{targetAudience}</p>
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <h3 className="text-4xl font-black mb-2 text-terra-navy">Diferencial:</h3>
                            <div className="border border-terra-navy rounded-xl p-8 text-terra-navy flex-1 flex flex-col justify-center text-center min-h-[200px]">
                                <p className="text-2xl font-semibold">{differential}</p>
                            </div>
                        </div>
                    </div>
                </AnimatedSection>
                
                <AnimatedSection>
                    {linkTo && (
                        <Link to={linkTo}>
                            <button className="mb-12 px-8 py-3 bg-terra-navy text-white font-semibold rounded-xl hover:bg-[#0f1d39] transition">
                                SAIBA MAIS
                            </button>
                        </Link>
                    )}
                </AnimatedSection>
            </div>
        </section>
    );
}

// --- COMPONENTE PRINCIPAL ---
export default function CursoseEventos() {
    return (
        <div className="bg-white overflow-x-hidden">
            <main>
                <Header />
                <HeroSection
                    backgroundImage="/images/HeroCursoEvento.webp"
                    title="Cursos e Eventos"
                    subtitle="Na Terra Desenvolvimento, acreditamos que conhecimento e relacionamento são pilares fundamentais para o crescimento sustentável do agronegócio. Por isso, oferecemos cursos e eventos que unem prática, inovação e networking, sempre com foco em resultados reais para o seu negócio."
                />

                {/* Agora apenas uma seção para o Curso de Gestão */}
                <CourseSection {...cursoGestaoUnificado} />
                <DivisorTerra />

                {/* Seção Curso Personalizado */}
                <CourseSection {...cursoPersonalizadoData} />
                <DivisorTerra />

                {/* Encontro de gestores */}
                <section className="bg-white py-24 px-6 md:px-12">
                    <div className="max-w-4xl mx-auto text-center">
                        <AnimatedSection>
                            <h2 className="text-3xl md:text-5xl sm:text-4xl font-extrabold text-terra-navy mb-10">
                                Encontro de Gestores
                            </h2>
                            <a href="https://www.encontrogestores.agr.br/" target="_blank" rel="noopener noreferrer" className="flex justify-center mb-10">
                                <img
                                    src="/images/InfoEncontroGestores.webp"
                                    alt="Encontro de Gestores"
                                    className="rounded-3xl shadow-lg w-full max-w-4xl"
                                />
                            </a>
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
                            <a href="https://www.encontrogestores.agr.br/" target="_blank" rel="noopener noreferrer">
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
