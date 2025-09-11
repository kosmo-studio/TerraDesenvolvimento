import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { Link } from "react-router-dom";

// Dados para a secção "O que entregamos?" em formato de blocos
const entregaveis = [
  {
    titulo: "Relatório de Análise e Diagnóstico",
    descricao: "Análise detalhada da situação atual da sua empresa rural.",
  },
  {
    titulo: "Indicadores de Desempenho (KPIs)",
    descricao:
      "Definição e acompanhamento dos principais indicadores para o seu negócio.",
  },
  {
    titulo: "Análise de Viabilidade Econômica",
    descricao:
      "Estudo completo para garantir a sustentabilidade dos seus investimentos.",
  },
  {
    titulo: "Plano de Metas e Objetivos",
    descricao:
      "Criação de um plano claro com metas para guiar o crescimento da fazenda.",
  },
  {
    titulo: "Recomendações Estratégicas",
    descricao:
      "Ações práticas e estratégicas para otimizar a produção e a gestão.",
  },
];

// Placeholder data for the steps
const comoFunciona = [
  {
    passo: "01",
    titulo: "Título do Passo 1",
    descricao: "Descrição breve do primeiro passo do processo.",
  },
  {
    passo: "02",
    titulo: "Título do Passo 2",
    descricao: "Descrição breve do segundo passo do processo.",
  },
  {
    passo: "03",
    titulo: "Título do Passo 3",
    descricao: "Descrição breve do terceiro passo do processo.",
  },
  {
    passo: "04",
    titulo: "Título do Passo 4",
    descricao: "Descrição breve do quarto passo do processo.",
  },
];

export default function DiagnosticoGlobal() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        {/* Hero Section */}
        <section
          className="relative bg-cover bg-center h-[500px] text-white flex items-center justify-center"
          style={{
            backgroundImage:
              "url('https://placehold.co/1920x500/152A43/FFFFFF?text=Imagem+de+Fundo')",
          }}
        >
          <div className="absolute inset-0 bg-black opacity-40"></div>
          <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
            <h1 className="text-4xl md:text-6xl font-bold font-lexend mb-4">
              Título Principal da Página
            </h1>
            <p className="text-lg md:text-xl font-light">
              Subtítulo ou breve descrição que complementa o título principal da
              página.
            </p>
          </div>
        </section>

        {/* Intro Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold font-lexend text-terra-navy mb-6">
              Título da Secção de Introdução
            </h2>
            <p className="text-lg text-terra-gray leading-relaxed">
              Parágrafo introdutório explicando o conceito principal do serviço
              ou da página. Este texto serve para dar um contexto geral ao
              visitante.
            </p>
          </div>
        </section>

        {/* "O que entregamos?" Section */}
        <section className="pb-16 md:pb-24">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-12 md:gap-16 items-center">
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold font-lexend text-terra-navy">
                  O que entregamos?
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {entregaveis.map((item) => (
                    <div
                      key={item.titulo}
                      className="bg-terra-light-gray/50 p-6 rounded-xl border"
                    >
                      <Check className="h-6 w-6 text-terra-green mb-3" />
                      <h3 className="font-bold text-terra-navy mb-1">
                        {item.titulo}
                      </h3>
                      <p className="text-terra-gray text-sm">
                        {item.descricao}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* "Como funciona?" Section */}
        <section className="py-16 md:py-24 bg-terra-light-gray">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold font-lexend text-terra-navy">
                Como funciona?
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {comoFunciona.map((item) => (
                <div
                  key={item.passo}
                  className="bg-white p-8 rounded-2xl shadow-sm text-center"
                >
                  <div className="text-5xl font-bold font-lexend text-terra-green mb-4">
                    {item.passo}
                  </div>
                  <h3 className="text-xl font-bold font-lexend text-terra-navy mb-2">
                    {item.titulo}
                  </h3>
                  <p className="text-terra-gray">{item.descricao}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-lexend text-terra-navy mb-8">
              <span className="font-normal">Título do CTA, </span>
              <span className="font-bold">com destaque</span>
            </h2>
            <p className="text-lg text-terra-gray mb-8 max-w-2xl mx-auto">
              Texto de apoio para o apelo à ação, incentivando o usuário a
              clicar no botão abaixo.
            </p>
            <Link to="/fale-com-um-consultor" asChild>
              <Button
                size="lg"
                className="bg-terra-green hover:bg-green-600 text-white px-8 py-4 text-lg font-lexend rounded-lg flex items-center gap-3 mx-auto"
              >
                FALE COM UM CONSULTOR
              </Button>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

