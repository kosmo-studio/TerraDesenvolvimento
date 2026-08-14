import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HeroSection from "@/components/interno/HeroSection";

const modulos = [
  {
    titulo: "Análise de potencialidades:",
    descricao:
      "Como levantar os pontos fortes da fazenda, identificar melhorias e compreender a situação produtiva e financeira do negócio.",
  },
  {
    titulo: "Análise de indicadores:",
    descricao:
      "Os principais indicadores produtivos e financeiros da pecuária, como calculá-los, interpretá-los e utilizá-los como ferramentas de sucesso.",
  },
  {
    titulo: "Análise de resultados:",
    descricao:
      "Como calcular os resultados da sua fazenda, analisá-los, compará-los e buscar melhorias contínuas.",
  },
  {
    titulo: "Planejamento estratégico:",
    descricao:
      "Como elaborar um planejamento eficiente, visando maior rentabilidade e melhor uso dos recursos da fazenda.",
  },
  {
    titulo: "Gestão de pessoas:",
    descricao:
      "Como contratar, identificar talentos, engajar a equipe, estruturar premiações por metas e alinhar toda a equipe ao objetivo da fazenda.",
  },
];

const symplaUrl =
  "https://www.sympla.com.br/evento/curso-gestao-da-empresa-pecuaria-londrina-pr/3535441";

export default function EmpresaPecuariaLD() {
  return (
    <div className="bg-white overflow-x-hidden">
      <main>
        <Header />
        <HeroSection
          backgroundImage="/images/banner-londrina-gestao.png"
          title=""
          subtitle=""
        />

        <section className="py-0 md:pt-24 z-20">
          <div className="container mx-auto pt-14 max-w-7xl shadow-[0px_-40px_40px_-20px_rgba(0,0,0,0.3)] text-center bg-white relative mt-[-20px] md:-mt-40">
            <div className="space-y-2 md:space-y-0 lg:space-y-2 xl:space-y-3 mb-10">
              <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-3xl xl:text-5xl md:text-center font-bold font-lexend text-white">
                <span className="text-terra-navy px-2">
                  Curso de Gestão da Empresa Pecuária
                </span>
              </h1>
              <p className="text-xl md:text-2xl font-lexend font-bold text-terra-beige">
                Londrina - PR | 29 e 30 de setembro
              </p>
              <p className="max-w-3xl mx-auto px-4 text-base md:text-lg text-terra-navy">
                IDR - Paraná | Rod. Celso Garcia Cid, km 375 - Londrina, PR
              </p>
            </div>

            <p className="text-lg sm:text-xl text-terra-navy font-light leading-relaxed mb-6 max-w-4xl mx-auto text-left">
              O{" "}
              <strong className="font-bold">
                Curso de Gestão da Empresa Pecuária
              </strong>
              , um verdadeiro sucesso em todo o país, já formou mais de{" "}
              <strong className="font-bold">10.000 participantes</strong>, em{" "}
              <strong className="font-bold">215 edições</strong> realizadas,
              alcançando uma média de satisfação superior a 9,0 pontos nas
              avaliações.
            </p>

            <p className="text-lg sm:text-xl text-terra-navy font-light leading-relaxed mb-12 max-w-4xl mx-auto text-left">
              Agora, o curso apresenta uma nova abordagem, com um formato
              prático e dinâmico, onde você será o protagonista e aplicará
              diretamente os conceitos no seu próprio Excel.
            </p>

            <p className="text-lg sm:text-xl text-terra-navy font-light leading-relaxed mb-12 max-w-4xl mx-auto text-left">
              Ideal para{" "}
              <strong className="font-bold">
                produtores rurais, gestores de negócios agropecuários, técnicos
                e estudantes
              </strong>{" "}
              que desejam aprofundar seus conhecimentos em gestão, o curso
              utiliza metodologias e métricas comprovadas, aplicadas nas
              fazendas mais bem-sucedidas do{" "}
              <strong className="font-bold">Brasil, Paraguai e Bolívia.</strong>
            </p>
          </div>
        </section>

        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold font-lexend text-terra-navy mb-12 text-center">
              Módulos
            </h2>

            <div className="flex flex-col space-y-8">
              {modulos.map((modulo) => (
                <div key={modulo.titulo}>
                  <div className="bg-terra-beige p-4 rounded-t-xl">
                    <h3 className="text-xl font-bold text-white">
                      {modulo.titulo}
                    </h3>
                  </div>
                  <div className="border border-t-0 border-gray-300 p-4 md:p-8 rounded-b-xl">
                    <p className="text-terra-navy text-lg font-medium">
                      {modulo.descricao}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <section className="py-16">
              <a href={symplaUrl} target="_blank" rel="noopener noreferrer">
                <p className="text-4xl md:text-5xl text-terra-navy">
                  Faça sua <strong>inscrição!</strong>
                </p>
                <button className="mt-9 px-8 md:px-16 py-3 bg-terra-navy text-white font-semibold rounded-lg hover:bg-[#0f1d39] transition">
                  CLIQUE AQUI PARA COMPRAR
                </button>
              </a>
            </section>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
