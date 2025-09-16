import Header from "../components/Header";
import Footer from "../components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const servicos = [
  {
    titulo: "Diagnóstico de Desempenho Global",
    descricao: "Apresentar e discutir onde sua fazenda está, o “Ponto A” e onde poderá chegar...",
    imagem: "/images/Diagnostico-desempenho.png",
    link: "/servicos/DiagnosticoGlobal",
  },
  {
    titulo: "Implementação de Controle",
    descricao: "Acesso pelos gestores e equipe dos dados e informações essenciais...",
    imagem: "/images/Controle.png",
    link: "/servicos/ImplementaçãoDeControle",
  },
  {
    titulo: "Planejamento Estratégico",
    descricao: "O PROJETO é o elemento determinante para o sucesso da atividade em questão...",
    imagem: "/images/planejamento.png",
    link: "/servicos/PlanejamentoEstrategico",
  },
  {
    titulo: "PRG: Programa de Recuperação Gerencial",
    descricao: "O Programa de Recuperação (ou intervenção) Gerencial tem por missão gerar lucro...",
    imagem: "/images/prg.png",
    link: "/servicos/ProgramaRecuperaçãoGerencial",
  },
  {
    titulo: "Desenvolvimento Gerencial",
    descricao: "Construir equipe realizadora capaz de assumir e bater as metas estabelecidas...",
    imagem: "/images/gerencial.png",
    link: "/servicos/DesenvolvimentoGerencial",
  },
  {
    titulo: "Performa Terra",
    descricao: "O Performa Terra é a nossa mais nova modalidade de produto...",
    imagem: "/images/reforma.png",
    link: "/servicos/performa-terra",
  },
  {
    titulo: "Análise e Plano de Negócios: Aquisição de Fazendas",
    descricao: "Suporte na análise e decisão de investimento e compra de propriedade rural...",
    imagem: "/images/analise.png",
    link: "/servicos/analise-plano-de-negocios",
  },
];
const ServicoCard = ({
  servico,
}: {
  servico: (typeof servicos)[0];
}) => (
  <div
    className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center px-4 sm:px-8 md:px-12 lg:px-24"
  >
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
          <Button variant="outline" className="text-white bg-terra-navy hover:border-terra-navy hover:bg-white hover:text-terra-navy">
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
        <section className="relative text-gray-900 flex items-center justify-center pt-24 pb-12 md:pt-32 md:pb-16">
          <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold font-lexend mb-4">
              Serviços
            </h1>
            <p className="text-base sm:text-lg lg:text-xl font-light">
              Soluções completas para a sua fazenda, 
              <br></br>
              sempre com foco em produtividade, eficiência e melhores resultados.
            </p>
          </div>
        </section>

        {/* Services List */}
        <section className="py-12 md:py-20 px-4 lg:px-8">
          <div className="max-w-7xl mx-auto space-y-16 md:space-y-20">
            {servicos.map((servico) => (
              <ServicoCard
                key={servico.titulo}
                servico={servico}
              />
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 lg:px-8 bg-terra-light-gray">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-lexend text-terra-navy mb-8">
              <span className="font-normal">Seja você também um cliente </span>
              <span className="font-bold">Terra!</span>
            </h2>
            <Button
              size="lg"
              className="bg-terra-green hover:bg-green-600 text-white px-8 py-4 text-lg font-lexend rounded-lg flex items-center gap-3 mx-auto"
            >
              FALE COM UM CONSULTOR
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

