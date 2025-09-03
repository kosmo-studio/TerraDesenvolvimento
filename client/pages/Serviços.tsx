import Header from "../components/Header";
import Footer from "../components/Footer";
import { Button } from "@/components/ui/button";

const servicos = [
  {
    titulo: "Diagnóstico de Desempenho Global",
    descricao:
      "Fazemos uma análise 360º da sua propriedade, avaliando todos os processos produtivos, financeiros e de gestão para identificar pontos fortes, gargalos e oportunidades de melhoria, fornecendo um roteiro claro para a otimização de resultados.",
    imagem: "https://placehold.co/800x600/152A43/FFF?text=Diagnóstico",
    entregaveis: [
      "Análise de indicadores zootécnicos e agrícolas",
      "Mapeamento de processos operacionais",
      "Benchmarking com dados de mercado",
      "Relatório de diagnóstico com plano de ação",
      "Identificação de gargalos produtivos",
    ],
  },
  {
    titulo: "Implementação de Controle",
    descricao:
      "Implementamos ferramentas e rotinas de controle que permitem um acompanhamento preciso do desempenho da fazenda em tempo real, garantindo que as decisões sejam baseadas em dados concretos e confiáveis para uma gestão mais segura.",
    imagem:
      "https://placehold.co/800x600/37BC69/FFF?text=Controle",
    entregaveis: [
      "Desenvolvimento de planilhas e sistemas de controle",
      "Treinamento da equipe para coleta de dados",
      "Criação de dashboards de gestão visual",
      "Definição de rotinas de acompanhamento e checagem",
      "Integração de informações financeiras e de produção",
    ],
  },
  {
    titulo: "Planejamento Estratégico",
    descricao:
      "Elaboramos um plano detalhado para o seu negócio, alinhando seus objetivos com as melhores práticas de mercado. Analisamos cenários, identificamos oportunidades e definimos metas claras, criando um roteiro para o crescimento e a sustentabilidade da sua fazenda a longo prazo.",
    imagem: "https://placehold.co/800x600/152A43/FFF?text=Planejamento",
    entregaveis: [
      "Análise de mercado e concorrência",
      "Definição de metas e indicadores de desempenho (KPIs)",
      "Elaboração de plano de investimentos",
      "Desenvolvimento de estratégias de produção e comercialização",
      "Análise de viabilidade econômica e financeira",
    ],
  },
  {
    titulo: "PRG: Programa de Recuperação Gerencial",
    descricao:
      "Um programa intensivo focado em reestruturar a gestão de fazendas que enfrentam desafios financeiros ou produtivos. Atuamos diretamente na operação para reverter cenários negativos e colocar o negócio de volta no caminho da lucratividade e sustentabilidade.",
    imagem: "https://placehold.co/800x600/37BC69/FFF?text=PRG",
    entregaveis: [
      "Diagnóstico de crise e plano de recuperação",
      "Renegociação de passivos e otimização de fluxo de caixa",
      "Reestruturação de processos produtivos",
      "Implementação de gestão de custos rigorosa",
      "Acompanhamento intensivo de resultados",
    ],
  },
  {
    titulo: "Desenvolvimento Gerencial",
    descricao:
      "Capacitamos gestores e líderes de fazendas com as mais modernas ferramentas e conceitos de gestão do agronegócio, desenvolvendo habilidades para uma liderança eficaz e uma tomada de decisão cada vez mais estratégica e assertiva.",
    imagem: "https://placehold.co/800x600/152A43/FFF?text=Desenvolvimento",
    entregaveis: [
      "Treinamentos em liderança e gestão de pessoas",
      "Workshops sobre finanças e contabilidade rural",
      "Programas de mentoria para gestores",
      "Desenvolvimento de competências em negociação",
      "Implementação de cultura de alta performance",
    ],
  },
  {
    titulo: "Performa Terra",
    descricao:
      "Nosso programa de elite para maximizar a performance da sua propriedade. Utilizando tecnologia de ponta e análise de dados avançada, otimizamos cada detalhe da sua operação para alcançar níveis superiores de produtividade e rentabilidade.",
    imagem: "https://placehold.co/800x600/37BC69/FFF?text=Performa",
    entregaveis: [
      "Agricultura e pecuária de precisão",
      "Utilização de VANTs e sensoriamento remoto",
      "Análise avançada de dados (Analytics)",
      "Otimização de uso de insumos e recursos",
      "Relatórios de performance e benchmarking de elite",
    ],
  },
  {
    titulo: "Análise e Plano de Negócios: Aquisição de Fazendas",
    descricao:
      "Oferecemos suporte completo para investidores na aquisição de novas propriedades rurais. Realizamos a due diligence, análise de viabilidade e elaboramos um plano de negócios detalhado para garantir um investimento seguro e rentável.",
    imagem: "https://placehold.co/800x600/152A43/FFF?text=Análise",
    entregaveis: [
      "Análise de aptidão agrícola e produtiva da terra",
      "Avaliação de infraestrutura e benfeitorias",
      "Estudo de viabilidade econômica e financeira do investimento",
      "Elaboração de plano de negócios para a nova propriedade",
      "Suporte na negociação e processo de aquisição",
    ],
  },
];

const ServicoCard = ({
  servico,
}: {
  servico: (typeof servicos)[0];
}) => (
  <div
    className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
  >
    {/* Image on the left */}
    <div>
      <img
        src={servico.imagem}
        alt={servico.titulo}
        className="rounded-3xl w-full h-auto object-cover aspect-[4/3]"
      />
    </div>
    {/* Text on the right */}
    <div className="space-y-6">
      <h3 className="text-4xl font-bold font-lexend text-terra-navy">
        {servico.titulo}
      </h3>
      <p className="text-terra-gray leading-relaxed">{servico.descricao}</p>
      <div>
        <h4 className="font-bold text-terra-navy mb-3">O que entregamos:</h4>
        <ul className="space-y-2">
          {servico.entregaveis.map((item) => (
            <li key={item} className="flex items-start">
              <svg
                className="w-5 h-5 mr-2 text-terra-green flex-shrink-0 mt-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span className="text-terra-gray">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </div>
);

export default function Servicos() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative h-[500px] text-gray-900 flex items-center justify-center">
          <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
            <h1 className="text-5xl lg:text-7xl font-bold font-lexend mb-4">
              Soluções completas para a gestão do seu negócio
            </h1>
            <p className="text-lg lg:text-xl font-light">
              Cada propriedade rural tem sua particularidade e oferecemos um
              plano de ação personalizado para cada realidade.
            </p>
          </div>
        </section>

        {/* Services List */}
        <section className="py-20 px-4 lg:px-8">
          <div className="max-w-7xl mx-auto space-y-20">
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
            <h2 className="text-4xl lg:text-5xl font-lexend text-terra-navy mb-8">
              <span className="font-normal">Pronto para transformar </span>
              <span className="font-bold">sua gestão?</span>
            </h2>
            <p className="text-lg text-terra-gray mb-8 max-w-2xl mx-auto">
              Entre em contato com nossa equipe e descubra como as soluções da
              Terra podem impulsionar os resultados da sua fazenda.
            </p>
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