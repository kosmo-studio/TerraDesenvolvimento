import Header from "../components/Header";
import Footer from "../components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import AnimatedSection from "@/components/AnimatedSection";

const servicos = [
  {
    titulo: "Mapeamento de Oportunidades",
    descricao:
      "Apresentar e discutir onde sua fazenda está, o 'Ponto A' e onde poderá chegar, mostrando com clareza a atual situação financeira, produtiva e gerencial da empresa através de indicadores parametrizados.",
    imagem: "/images/Diagnostico-desempenho.png",
    link: "/servicos/MapeamentodeOportunidades",
  },
  {
    titulo: "Implantação de Controle",
    descricao:
      "Metodologia de controle de dados e informações essenciais, com rapidez e confiabilidade, através da otimização dos controles existentes na fazenda, implantação de sistemas e outros métodos que se façam necessários para ter “a fazenda em suas mãos”.",
    imagem: "/images/Controle.png",
    link: "/servicos/ImplementacaoDeControle",
  },
  {
    titulo: "Planejamento Estratégico",
    descricao:
      "O PROJETO é o elemento determinante para o sucesso da atividade em questão. Foco e clareza nos objetivos, “Ponto B”, determinando o caminho para o crescimento sustentável da lucratividade e gerenciabilidade da fazenda.",
    imagem: "/images/planejamentoEstrategico.jpeg",
    link: "/servicos/PlanejamentoEstrategico",
  },
  {
    titulo: "PRG: Programa de Recuperação Gerencial",
    descricao:
      "O Programa de Recuperação (ou intervenção) Gerencial tem por missão gerar lucro para seus acionistas e investidores através da transformação de áreas, valorização de ativos e desenvolvimento da atividade agropecuária.",
    imagem: "/images/Prg.jpeg",
    link: "/servicos/ProgramaRecuperaçãoGerencial",
  },
  {
    titulo: "Desenvolvimento Gerencial",
    descricao:
      "Construir equipe realizadora capaz de assumir e bater as metas estabelecidas. Tomar ações eficientes no propósito de “forjar” uma cultura gerencial objetiva, duradoura e que respeite seus valores na conquista de seus objetivos.",
    imagem: "/images/desenvolvimentoGen.png",
    link: "/servicos/DesenvolvimentoGerencial",
  },
  {
    titulo: "Performa Terra",
    descricao: "O Performa Terra é a nossa mais nova modalidade de produto, sob medida para sua fazenda e foi criada a partir do pedido de diversos produtores que buscavam uma solução de curto prazo.",
    imagem: "/images/performa.png",
    link: "/servicos/PerformaTerra",
  },
  {
    titulo: "Análise e Plano de Negócios: Aquisição de Fazendas",
    descricao:
      "Suporte na análise e decisão de investimento e compra de propriedade rural, baseado nas principais variáveis envolvidas na produção, projeção de resultados, rentabilidade e viabilidade econômica.",
    imagem: "/images/planoNegocio.jpeg",
    link: "/servicos/AnalisePlanoDeNegocio",
  },
];

const ServicoCard = ({ servico }: { servico: (typeof servicos)[0] }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center px-4 sm:px-8 md:px-12 lg:px-24">
    {/* Image on the left */}
    <div>
      <img
        src={servico.imagem}
        alt={servico.titulo}
        className="rounded-3xl w-full h-auto object-cover aspect-[4/4]"
      />
    </div>
    {/* Text on the right */}
    <div className="space-y-6 flex flex-col items-center text-center md:items-start md:text-left">
      <h3 className="text-3xl md:text-4xl font-bold font-lexend text-terra-navy">
        {servico.titulo}
      </h3>
      <p className="text-terra-gray leading-relaxed">{servico.descricao}</p>

      {servico.link && (
        <Link to={servico.link}>
          <Button
            variant="outline"
            className="text-white bg-terra-navy hover:border-terra-navy hover:bg-white hover:text-terra-navy"
          >
            Saiba mais
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      )}
    </div>
  </div>
);

export default function Servicos() {
  return (
    <div className="min-h-screen bg-white ">
      <Header />
      <main>
        {/* Hero Section */}
        <AnimatedSection>
          <section className="relative text-terra-navy flex items-center justify-center pt-24 pb-12 md:pt-32 md:pb-16">
            <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold font-lexend mb-4">
                Serviços
              </h1>
              <p className="text-base sm:text-lg lg:text-xl font-light">
                Soluções completas para a sua fazenda,
                <br></br>
                sempre com foco em produtividade, eficiência e melhores
                resultados.
              </p>
            </div>
          </section>
        </AnimatedSection>

        {/* Services List */}
        <section className="py-12 md:py-20 px-4 lg:px-8">
          <div className="max-w-7xl mx-auto space-y-16 md:space-y-20">
            {servicos.map((servico, index) => (
              <AnimatedSection key={servico.titulo} delay={index * 150}>
                <ServicoCard servico={servico} />
              </AnimatedSection>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <AnimatedSection>
          <section className="py-16 px-4 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-lexend text-terra-navy mb-8">
                <span className="font-normal">
                  Seja você também um cliente{" "}
                </span>
                <span className="font-bold">Terra!</span>
              </h2>
              <a target="_blank" href="https://wa.me/556730263442">
                <Button
                  size="lg"
                  className="bg-terra-navy hover:bg-terra-dark-blue/95 text-white px-8 py-4 text-lg font-lexend rounded-lg flex items-center gap-3 mx-auto"
                >
                  FALE COM UM CONSULTOR
                </Button>
              </a>
            </div>
          </section>
        </AnimatedSection>
      </main>
      <Footer />
    </div>
  );
}
