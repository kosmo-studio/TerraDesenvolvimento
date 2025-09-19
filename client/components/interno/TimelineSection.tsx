import React from 'react';
import { useInView } from 'react-intersection-observer';

// --- DADOS DA LINHA DO TEMPO (sem alterações) ---
const timelineData = [
  {
    ano: 1997,
    titulo: "Onde tudo começou",
    texto: "A Terra nasceu como Technical Training, um projeto do professor Antônio Branco na Universidade Estadual de Maringá (UEM) voltado para capacitar gestores rurais. O que ninguém imaginava à época é que aquela iniciativa plantava as raízes de uma empresa que transformaria a gestão do agronegócio no Brasil e além.",
    imagem: "/images/1997.png",
    posicao: "direita",
  },
  {
    ano: 2002,
    titulo: "Nasce a Terra",
    texto: "Com a entrada de novos sócios, o projeto ganha corpo, visão empresarial e um novo nome: Terra. A partir dali, a consultoria passa a atuar de forma mais estruturada, profissionalizando-se e construindo uma metodologia própria. O que antes era um projeto promissor, agora se tornava uma empresa pronta para liderar mudanças profundas no campo.",
    imagem: "/images/2002.png",
    posicao: "esquerda",
  },
  {
    ano: 2005,
    titulo: "Novos caminhos",
    texto: "A chegada da Terra ao Mato Grosso do Sul marcou sua primeira operação fora do Paraná e foi um verdadeiro divisor de águas. Mais do que expandir fronteiras, foi o momento de aplicar sua metodologia em novos contextos produtivos — provando sua força, adaptabilidade e compromisso com o resultado. A partir daqui, a Terra começa a escrever uma história nacional.",
    imagem: "/images/2005.png",
    posicao: "direita",
  },
  {
    ano: 2010,
    titulo: "Tecnologia como aliada",
    texto: "A Terra desenvolve seu próprio sistema de gestão rural, conectando dados da fazenda a uma plataforma inteligente. Pela primeira vez, os produtores podiam alimentar um banco de dados e, com isso, receber análises automatizadas e personalizadas. A tecnologia se tornava parte central da rotina de decisão, trazendo clareza, precisão e controle para o produtor.",
    imagem: "/images/2010.png",
    posicao: "esquerda",
  },
  {
    ano: 2015,
    titulo: "Uma nova matriz",
    texto: "A mudança da sede de Maringá para Campo Grande não foi apenas geográfica — foi simbólica. Representou a consolidação da Terra como protagonista nacional, estrategicamente posicionada no coração do agronegócio brasileiro. De lá, a empresa se aproximou ainda mais dos seus clientes e das realidades do campo.",
    imagem: "/images/2015.png",
    posicao: "direita",
  },
  {
    ano: 2017,
    titulo: "A força da expansão",
    texto: "Novas bases em Goiás, Mato Grosso e Paraguai reforçaram a missão da Terra de estar presente onde a produção pulsa com mais força. Essa expansão não foi movida apenas por oportunidade, mas por estratégia: levar a excelência da gestão rural a novos territórios, ampliando seu impacto sem perder sua essência.",
    imagem: "/images/2017.png",
    posicao: "esquerda",
  },
  {
    ano: 2019,
    titulo: "A revolução do PRG",
    texto: "Com o lançamento do PRG – Programa de Recuperação Gerencial – a Terra passa a oferecer uma solução integral para propriedades rurais. O produtor pode confiar à Terra a gestão de todas as frentes operacionais da fazenda, com controle, visão estratégica e foco absoluto em resultado. Um serviço completo, que cuida de tudo para que o proprietário se concentre apenas no que realmente importa: colher os frutos do seu negócio.",
    imagem: "/images/2019.png",
    posicao: "direita",
  },
  {
    ano: 2022,
    titulo: "Inteligência regional, impacto internacional",
    texto: "Com presença em 8 estados brasileiros, além do Paraguai e da Bolívia, a Terra reorganiza suas operações em regiões estratégicas, cada uma com seu gerente regional. Essa estrutura trouxe ainda mais eficiência, proximidade e resultados concretos. A Terra entra em uma nova fase, com visão internacional e uma gestão cada vez mais inteligente, escalável e lucrativa.",
    imagem: "/images/2022.png",
    posicao: "esquerda",
  },
];

const TimelineItem = ({ item }) => {
  const isDireita = item.posicao === 'direita';
  
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });


  const textAnimation = inView 
    ? 'opacity-100 translate-x-0' 
    : (isDireita ? 'opacity-0 translate-x-10' : 'opacity-0 -translate-x-10');

  const imageAnimation = inView 
    ? 'opacity-100 translate-x-0' 
    : (isDireita ? 'opacity-0 -translate-x-10' : 'opacity-0 translate-x-10');

  const textColumn = isDireita ? 'md:col-start-3' : 'md:col-start-1';
  const imageColumn = isDireita ? 'md:col-start-1' : 'md:col-start-3';

  return (
    
    <div ref={ref} className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-x-12 items-center relative gap-y-6">
      
      {/* Bloco de Texto */}
      <div className={`transition-all duration-700 ease-out ${textAnimation} ${textColumn} md:row-start-1`}>
        <div className={`md:text-${isDireita ? 'left' : 'right'}`}>
          <p className="text-2xl font-bold text-terra-navy">{item.ano}</p>
          <h3 className="text-xl font-semibold text-terra-navy mt-1 mb-2">{item.titulo}</h3>
          <p className="text-sm text-terra-navy">{item.texto}</p>
        </div>
      </div>
      
      {/* Bloco de Imagem */}
      <div className={`transition-all duration-700 ease-out ${imageAnimation} ${imageColumn} md:row-start-1`}>
         <img src={item.imagem} alt={item.titulo} className="rounded-lg shadow-md w-full" />
      </div>

      {/* Ponto Central e Linha */}
      <div className="hidden md:flex flex-col items-center h-full row-start-1 col-start-2">
        <div className="w-4 h-4 bg-terra-navy rounded-full z-10" />
      </div>
    </div>
  );
};

export default function TimelineSection() {
  return (
    <section className="py-24 px-4">
      <div className="max-w-5xl mx-auto relative">
        <div className="hidden md:block absolute top-0 left-1/2 -translate-x-1/2 w-0.5 h-full bg-gray-300" />
        
        <div className="space-y-24">
          {timelineData.map((item) => (
            <TimelineItem key={item.ano} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}

