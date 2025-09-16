import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
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
          className="relative bg-cover bg-center h-[768px] text-white flex items-center justify-center"
          style={{
            backgroundImage:
              "url('/images/BackgroundCabeçalhoDesempenho.png')",
          }}
        >
          <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
            <h1 className="text-4xl md:text-6xl font-bold font-lexend mb-4 text-terra-navy">
              Diagnóstico de Desempenho Global
            </h1>
            <p className="text-lg md:text-xl font-light text-terra-navy">
              Apresentar e discutir onde sua fazenda está, o “Ponto A” e onde
              poderá chegar, mostrando com clareza a atual situação financeira,
              produtiva e gerencial da empresa através de indicadores
              parametrizados.
            </p>
          </div>
        </section>

        {/* Intro Section */}
        <section className="py-16 md:py-24 z-20">
          <div className="container mx-auto pt-14 max-w-7xl text-center bg-white relative -mt-40">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-4">
              <div className="flex-shrink-0 pt-1 ">
                <img
                  src="/images/terra logo.png"
                  alt="Descrição da imagem"
                  className="w-28 h-28 md:w-40 md:h-40 mx-auto md:mx-20"/>
              </div>
              <div className="space-y-3 ">
                <h2 className="text-3xl md:text-4xl text-center font-light font-lexend text-white">
                  <span className="bg-terra-navy text-white px-2">
                    A partir das conclusões do diagnóstico e desafios
                  </span>
                </h2>
                <h2 className="text-3xl md:text-4xl text-center font-light font-lexend text-white">
                  <span className="bg-terra-navy text-white px-2">
                    definidos no planejamento estratégico,
                  </span>
                </h2>
                <h2 className="text-3xl md:text-4xl text-center font-bold font-lexend text-white">
                  <span className="bg-terra-navy text-white px-2">
                    a Terra Desenvolvimento coordenará:
                  </span>
                </h2>
              </div>
            </div>
              <p className="text-3xl md:text-4xl center font-bold font-lexend text-terra-navy mt-24 -mb-14 ">
                Definição dos indicadores que serão monitorados referentes a:
              </p>
          </div>
        </section>

        {/* Indicadores Section */}
        <section className="px-6 pb-8 bg-gray-50">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="bg-terra-navy shadow-lg rounded-3xl w-full h-0 pt-[100%] relative">

                </div>
                <p className="font-light text-lg text-terra-navy mt-4">Movimentação e 
                  estoque pecuário;
                </p>
              </div>

              <div className="text-center">
                <div className="bg-terra-navy shadow-lg rounded-3xl w-full h-0 pt-[100%] relative">
                  
                </div>
                <p className="font-light text-lg text-terra-navy mt-4">Utilização de insumos 
                  agrícolas, pecuários e 
                  controle de estoques 
                  em geral;
                </p>
              </div>

              <div className="text-center">
                <div className="bg-terra-navy shadow-lg rounded-3xl w-full h-0 pt-[100%] relative">
                  
                </div>
                <p className="font-light text-lg text-terra-navy mt-4">Fatores Climáticos;</p>
              </div>

              <div className="text-center">
                <div className="bg-terra-navy shadow-lg rounded-3xl w-full h-0 pt-[100%] relative">
                  
                </div>
                <p className="font-light text-lg text-terra-navy mt-4"> Parque de máquinas 
                  (operações, consumo 
                  e manutenções);
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-terra-navy shadow-lg rounded-3xl w-full h-0 pt-[100%] relative">
                  
                </div>
                <p className="font-light text-lg text-terra-navy mt-4">Equipe</p>
              </div>
              
              <div className="text-center">
                <div className="bg-terra-navy shadow-lg rounded-3xl w-full h-0 pt-[100%] relative">
                  
                </div>
                <p className="font-light text-lg text-terra-navy mt-4">Fluxo de Caixa e 
                  indicadores financeiros.
                </p>
              </div>

              <div className="text-center">
                <div className="bg-terra-navy shadow-lg rounded-3xl w-full h-0 pt-[100%] relative">
              
                </div>
                <p className="font-light text-lg text-terra-navy mt-4">Treinamento da equipe 
                  de campo na coleta de 
                  dados por função, setor 
                  e hierarquia.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/*colaboradores section*/}

                <section className="py-16 bg-white text-center px-4">
        {/* Título principal */}
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-terra-navy leading-snug">
            Com um diagnóstico preciso e estratégias <br className="hidden md:block" />
            bem definidas, sua fazenda ganha clareza <br className="hidden md:block" />
            de rumo e solidez nas decisões.
          </h2>

          {/* Subtítulo */}
          <p className="mt-6 text-base md:text-lg text-terra-navy/80 leading-relaxed">
            Mais do que números, entregamos caminhos <br className="hidden md:block" />
            para transformar potencial em resultado real, <br className="hidden md:block" />
            garantindo evolução constante e <br className="hidden md:block" />
            sustentabilidade do negócio.
          </p>
        </div>

        {/* Ícone com linhas */}
        <div className="flex items-center justify-center gap-6 mt-10">
          <div className="flex-grow h-px bg-terra-navy/100 max-w-[420px]" />
          <img
            src="/images/terra logo.png"
            alt="Ícone Terra"
            className="w-10 h-10 object-contain"
          />
          <div className="flex-grow h-px bg-terra-navy/100 max-w-[420px]" />
        </div>

        {/* Citação */}
        <p className="text-xl md:text-4xl font-bold text-terra-navy mt-10">
          "Quem já transformou <br/>
          resultados conosco"
        </p>

        {/* Logos */}
        <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-6 justify-items-center max-w-5xl mx-auto">
          <img src="" />
          <img src="" />
          <img src="" />
          <img src="" />
        </div>
      </section>


        {/* CTA Section */}
        <section className="py-16 px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-lexend text-terra-navy mb-8">
              <span className="font-normal">Seja você também um cliente </span>
              <span className="font-bold">Terra!</span>
            </h2>
              <Button
                asChild
                size="lg"
                className="bg-terra-green hover:bg-green-600 text-white px-8 py-4 text-lg font-lexend rounded-lg flex items-center gap-3 mx-auto"
              >
                <Link to="/fale-com-um-consultor">
                  FALE COM UM CONSULTOR
                </Link>
              </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

{/* test */}