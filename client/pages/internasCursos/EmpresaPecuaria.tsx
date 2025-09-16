import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HeroSection from "@/components/interno/HeroSection";
import DivisorTerra from '@/components/interno/DivisorTerra';
import React from 'react';
const dadosInvestimento = {
  lotes: ["1º Lote", "2º Lote", "3º Lote"],
  categorias: [
    {
      nome: "Profissionais e Produtores",
      valores: ["R$500,00", "R$600,00", "R$700,00"],
    },
    {
      nome: "Estudantes e Clientes Terra",
      valores: ["R$500,00", "R$600,00", "R$700,00"],
    },
  ],
};
const modulos = [
  {
    titulo: "Análise de potencialidades:",
    descricao: "Como levantar os pontos fortes da fazenda, identificar melhorias e compreender a situação produtiva e financeira do negócio."
  },
  {
    titulo: "Análise de indicadores:",
    descricao: "Os principais indicadores produtivos e financeiros da pecuária, como calculá-los, interpretá-los e utilizá-los como ferramentas de sucesso."
  },
  {
    titulo: "Análise de resultados:",
    descricao: "Como calcular os resultados da sua fazenda, analisá-los, compará-los e buscar melhorias contínuas."
  },
  {
    titulo: "Planejamento estratégico:",
    descricao: "Como elaborar um planejamento eficiente, visando maior rentabilidade e melhor uso dos recursos da fazenda."
  },
  {
    titulo: "Gestão de pessoas:",
    descricao: "Como contratar, identificar talentos, engajar a equipe, estruturar premiações por metas e alinhar toda a equipe ao objetivo da fazenda."
  },
];
const patrocinadores = [
  { src: "/images/espaçorural.png", alt: "Logo Espaço Rural" },
  { src: "/images/metryx-logo.png", alt: "Logo Metryx" },
  { src: "/images/agroceres.png", alt: "Logo Agroceres" },
  { src: "/images/castros.png", alt: "Logo Castros" },
];
export default function EmpresaPecuaria() {
  return (
    <div className="bg-white overflow-x-hidden">
      <main>
        <Header />
        {/* Hero Section */}
         <HeroSection
          backgroundImage="/images/bg-empresapecuaria.png"
          title=""
          subtitle=""
        />
        {/* --- Seção de Introdução --- */}
            <section className="py-0 md:pt-24 z-20">
              <div className="container mx-auto pt-14 max-w-7xl shadow-[0px_-40px_40px_-20px_rgba(0,0,0,0.3)] text-center bg-white relative mt-[-20px] md:-mt-40">
                  <div className=" space-y-2 md:space-y-0 lg:space-y-2 xl:space-y-3 mb-10">
                    <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-3xl xl:text-5xl md:text-center font-bold font-lexend text-white">
                      <span className="text-terra-navy px-2">
                        Curso de Gestão da Empresa Pecuária
                      </span>
                    </h2>
                  </div>
                {/* Texto principal */}
                <p className="text-lg sm:text-xl text-terra-navy font-light leading-relaxed mb-6 max-w-4xl mx-auto text-left">
                  O <strong className="font-bold">Curso de Gestão da Empresa Pecuária,</strong> um verdadeiro sucesso em todo o país, já formou mais de <strong className="font-bold">10.000 participantes, </strong>
                    em <strong className="font-bold">215 edições</strong> realizadas, alcançando uma média de satisfação superior a 9,0 pontos nas avaliações.
                </p>

                <p className="text-lg sm:text-xl text-terra-navy font-light leading-relaxed mb-12 max-w-4xl mx-auto text-left">
                  Agora, o curso apresenta uma nova abordagem, com um formato prático e dinâmico, onde você será o protagonista e
                   aplicará diretamente os conceitos no seu próprio Excel.
                </p>

                <p className="text-lg sm:text-xl text-terra-navy font-light leading-relaxed mb-12 max-w-4xl mx-auto text-left">
                  Ideal para <strong className="font-bold">produtores rurais, gestores de negócios agropecuários, técnicos e estudantes</strong> que desejam aprofundar seus conhecimentos em gestão,
                  o curso utiliza metodologias e métricas comprovadas, aplicadas nas fazendas mais bem-sucedidas do <strong className="font-bold">Brasil, Paraguai e Bolívia.</strong>
                </p>
            </div>
          </section>
           {/* tabela */}
            <section className="py-16 px-4 bg-white">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-4xl md:text-5xl font-bold font-lexend text-terra-navy mb-12">
                Investimento
                </h2>

                {/* --- VISUALIZAÇÃO PARA DESKTOP (TABLET E MAIORES) --- */}
                <div className="hidden md:grid grid-cols-4 gap-2 text-terra-navy">
                {/* Cabeçalho */}
                <div /> {/* Célula vazia no canto superior esquerdo */}
                {dadosInvestimento.lotes.map((lote) => (
                    <div key={lote} className="bg-terra-beige text-white font-bold text-3xl p-3 rounded-lg">
                    {lote}
                    </div>
                ))}

                {/* Linhas de Categoria */}
                {dadosInvestimento.categorias.map((categoria) => (
                    <React.Fragment key={categoria.nome}>
                    <div className="font-bold text-right text-lg p-3 pr-6 flex items-center justify-end">
                        {categoria.nome}
                    </div>
                    {categoria.valores.map((valor, index) => (
                        <div key={index} className="border font-bold border-gray-300 p-3 rounded-lg flex items-center justify-center">
                        {valor}
                        </div>
                    ))}
                    </React.Fragment>
                ))}
                </div>

                {/* --- VISUALIZAÇÃO PARA MOBILE --- */}
                <div className="md:hidden space-y-8">
                {dadosInvestimento.categorias.map((categoria) => (
                    <div key={categoria.nome} className="border border-gray-300 rounded-lg p-6 text-left">
                    <h3 className="font-bold text-xl text-terra-navy mb-4">{categoria.nome}</h3>
                    <div className="space-y-3">
                        {dadosInvestimento.lotes.map((lote, index) => (
                        <div key={lote} className="flex justify-between items-center text-terra-navy">
                            <span className="bg-terra-beige font-bold py-1 px-3 rounded-md text-sm">{lote}</span>
                            <span className="font-medium">{categoria.valores[index]}</span>
                        </div>
                        ))}
                    </div>
                    </div>
                ))}
                </div>
                {/* modulo */}
                <section className="py-20 px-4 bg-white">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-bold font-lexend text-terra-navy mb-12 text-center">
                    Módulos
                    </h2>

                    {/* Container da lista com espaçamento entre os módulos */}
                    <div className="flex flex-col space-y-8">
                    {modulos.map((modulo) => (
                        <div key={modulo.titulo}>
                        {/* Caixa do Título (bege) */}
                        <div className="bg-terra-beige p-4 rounded-t-xl">
                            <h3 className="text-xl font-bold text-white">
                            {modulo.titulo}
                            </h3>
                        </div>
                        {/* Caixa da Descrição (branca com borda) */}
                        <div className="border border-t-0 border-gray-300 p-4 md:p-8 rounded-b-xl">
                            <p className="text-terra-navy text-lg font-medium">
                            {modulo.descricao}
                            </p>
                        </div>
                        </div>
                    ))}
                    </div>
                    <section className="py-16">
                        <div>
                            <p className="text-5xl text-terra-navy">Faça sua <strong>inscrição!</strong></p>
                            <button className="mt-4 px-16 py-3 bg-terra-navy text-white font-semibold rounded-lg hover:bg-[#0f1d39] transition">
                                CLIQUE AQUI PARRA COMPRAR
                            </button>  
                        </div>
                    </section>
                    <section className="py-10 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-5xl mx-auto text-center">
                        <h2 className="text-4xl font-medium text-terra-navy mb-6">
                        Patrocinadores
                        </h2>
                        
                        
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 items-center">
                        {patrocinadores.map((patrocinador) => (
                            <div key={patrocinador.alt} className="flex justify-center items-center p-4 w-auto h-40 ">
                            <img
                                src={patrocinador.src}
                                alt={patrocinador.alt}
                                className="w-full h-full object-contain transition-all duration-300 "
                            />
                            </div>
                        ))}
                        </div>
                    </div>
                    </section>
                </div>
                </section>
            </div>
            </section>
        </main>
      <Footer />
    </div>
  );
}
