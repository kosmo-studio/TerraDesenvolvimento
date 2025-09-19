import Header from "../components/Header";
import Footer from "../components/Footer";
import HeroSection from "@/components/interno/HeroSection";
import AnimatedSection from "@/components/AnimatedSection"; 
import CTASection from "@/components/interno/CTASection";
import React from "react";

// --- DADOS DOS DEPOIMENTOS ---
const depoimentos = [
  {
    id: "carmem-perez",
    imgSrc: "/images/carmem.jpeg",
    nome: "Carmem Perez",
    fazenda: "Fazenda Orvalho das Flores",
    texto: "\"Eu digo que é uma relação mútua, né? Uma relação de troca com a Terra, porque ela sempre esteve presente e me ajudando. Eu não consigo pensar no negócio da pecuária sem essa assessoria. Para mim, essa assessoria é muito importante, porque consigo enxergar o negócio a médio e longo prazo. Consigo ter uma radiografia de tudo o que estamos fazendo. Os números que a Terra sempre nos traz sobre produtividade, questões econômicas e valorização ou não do rebanho são fundamentais. A última reunião que tive agora com a equipe foi desafiadora, porque eles vão mostrar o resultado. Estar nesse momento é desafiador, mas é importante entender onde estamos no negócio. E a Terra, por se especializar em pecuária, traz essas informações de uma forma muito prática e simples.\""
  },
  {
    id: "thiago-carminati",
    imgSrc: "/images/thiago.jpeg",
    nome: "Thiago Carminati",
    fazenda: "Grupo Marajó",
    texto: "\"O ano de 2024 para o grupo Marajó, com a Terra, foi excepcional. Foi o ano em que tivemos uma mudança de chave, então a Terra para mim foi fundamental. Nós melhoramos e intensificamos a propriedade. Sem a ajuda da Terra, isso ia ser impossível.\""
  },
  {
    id: "gustavo-arfux",
    imgSrc: "/images/gustavoArfux.jpeg",
    nome: "Gustavo Arfux",
    fazenda: "Ouro 67",
    texto: "\"Eu sou pecuarista, mas não tenho conhecimento na área. Na verdade, minha formação é de engenheiro eletricista e trabalho no mercado de energia. Entrei nesse desafio da pecuária por conta da confiança que tenho na Terra. O auxílio, a gestão e a forma empresarial com que eles conduzem a administração das fazendas me ajudaram muito a ter segurança para investir e entrar nesse mercado, porque a linguagem que eles adotam é extremamente gerencial e de alto nível. Isso tornou muito mais fácil compreender as nuances da pecuária e alcançar um bom desempenho na fazenda. Sou muito grato, tenho extrema confiança e indico sempre que posso: venha para a Terra você também!\""
  },
  {
    id: "elton-silveira",
    imgSrc: "/images/elton.jpeg",
    nome: "Elton Silveira",
    fazenda: "Fazenda 3 Minas",
    texto: "\"A Terra desenvolvimento me atende há 13 safras e a considero como parceira da nossa propriedade familiar. Fez com que tivéssemos muita evolução! Um crescimento imenso! Quase dobramos nossa produtividade e nosso orçamento passou a ser positivo. Temos projeto de continuar com a Terra por muitos anos; muitas safras.\""
  },
];

// --- COMPONENTE DO CARTÃO DE DEPOIMENTO ---
const TestimonialCard = ({ data }) => {
  return (
    <div
      id={data.id} // ← ID único para links
      className="rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center gap-6 md:gap-8"
    >
      <div className="flex-shrink-0 w-56 h-72 md:w-60 md:h-80">
        <img 
          src={data.imgSrc} 
          alt={data.nome} 
          className="w-full h-full object-cover rounded-2xl" 
        />
      </div>
      <div className="text-center md:text-left">
        <h3 className="text-3xl font-bold text-terra-navy">{data.nome}</h3>
        <p className="font-semibold text-terra-navy mb-4">{data.fazenda}</p>
        <p className="text-terra-navy leading-relaxed text-left">{data.texto}</p>
      </div>
    </div>
  );
};

export default function Resultados() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <AnimatedSection variant="fade">
          <HeroSection
            backgroundImage="/images/bg-resultados.png"
            title="Clientes Terra Desenvolvimento Agropecuário"
            subtitle=""
          />
        </AnimatedSection>
        
        <div className="container mx-auto pt-14 max-w-7xl py-10 shadow-[0px_-15px_20px_-20px_rgba(0,0,0,0.3)] bg-white relative -mt-20 md:-mt-32">
          <AnimatedSection>
            <div className="max-w-4xl mx-auto px-4 text-left">
              <div className="py-8">
                <p className="font-lexend text-2xl text-terra-navy leading-normal text-left">
                  <strong>Na Terra Desenvolvimento Agropecuário,</strong> acreditamos que os melhores indicadores do nosso trabalho são os resultados alcançados por quem confia em nós.
                </p>
                <p className="mt-6 font-lexend text-2xl text-terra-navy mx-auto leading-normal text-left">
                  Cada depoimento reflete experiências reais de produtores que transformaram suas fazendas, otimizaram processos e conquistaram maior lucratividade com o apoio da nossa equipe. Aqui, você encontra histórias de sucesso que comprovam nosso compromisso em entregar gestão profissional, inovação e resultados consistentes. Inspire-se com quem já fez parte dessa trajetória e descubra como podemos apoiar o crescimento da sua fazenda.
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>

        {/* SEÇÃO DINÂMICA DE DEPOIMENTOS */}
        <div className="max-w-5xl mx-auto space-y-12 py-10">
          {depoimentos.map((depoimento, index) => (
            <AnimatedSection key={depoimento.id} delay={index * 150}>
              <TestimonialCard data={depoimento} />
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection>
          <h3 className="text-[#162946] py-10 mb-8 text-xl sm:text-2xl lg:text-3xl font-semibold leading-tight mx-auto text-center lg:max-w-5xl px-4 text-balance">
            Esses são apenas alguns dos clientes que já confiaram na Terra Desenvolvimento Agropecuário para transformar suas fazendas. Agora, convidamos você a se juntar a essa rede de produtores e vivenciar resultados reais com gestão profissional, inovação e estratégias que fazem a diferença.
          </h3>
          <div className="flex items-center mx-auto justify-center w-full max-w-4xl px-4 gap-6">
            <div className="flex-grow h-px bg-[#162946]" />
            <img
              src="/images/terra logo.png"
              alt="Ícone Terra"
              className="w-10 h-10 object-contain"
            />
            <div className="flex-grow h-px bg-[#162946]" />
          </div>
        </AnimatedSection>
        
        <AnimatedSection>
          <CTASection />
        </AnimatedSection>
      </main>
      <Footer />
    </div>
  );
}
