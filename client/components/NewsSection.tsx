import { Link } from 'react-router-dom';

// Dados das notícias para a página inicial
const newsData = [
  {
    slug: "5-anos-covid-agro",
    image: "https://api.builder.io/api/v1/image/assets/TEMP/4afcf9b3e3244ee38a3c8a36490ca3801377faa2?width=1130",
    title: "5 Anos da Covid-19 no Brasil: Lições de Resiliência e Inovação no Agronegócio",
    date: "27 de fevereiro de 2025",
  },
  {
    slug: "passos-para-uma-gestao-eficiente",
    image: "https://api.builder.io/api/v1/image/assets/TEMP/b0f43d8df013d60e4ead90c956d34aa52002d4aa?width=1650",
    title: "Passos para uma gestão eficiente",
    date: "27 de fevereiro de 2025",
  },
  {
    slug: "gestao-baseada-em-numeros",
    image: "https://api.builder.io/api/v1/image/assets/TEMP/3d1aa2e8f24ed563d6d90dc53929a40cc40cdd60?width=1600",
    title: "Gestão baseada em números: um alicerce para novos gestores",
    date: "27 de fevereiro de 2025",
  },
  {
    slug: "gestao-alta-performance",
    image: "https://api.builder.io/api/v1/image/assets/TEMP/fa844d3fafaf24c3a8bc6cea0b744ca4d4cfad92?width=1640",
    title: "Gestão de alta performance eleva desempenho pecuário",
    date: "27 de fevereiro de 2025",
  },
];

// Componente de Card reutilizável para cada notícia
const ArticleCard = ({ image, title, date, link }) => (
  <Link to={link} className="bg-white rounded-lg overflow-hidden shadow-sm flex flex-col group transition-transform duration-300 hover:scale-105 hover:shadow-xl">
    <div className="relative h-48 overflow-hidden">
      <img src={image} alt={title} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" />
    </div>
    <div className="p-6 flex flex-col flex-grow">
      <h3 className="text-lg font-lexend text-terra-navy leading-tight mb-4 flex-grow">{title}</h3>
      <span className="text-terra-blue font-lexend text-sm hover:underline mb-2 block">Leia mais</span>
      <p className="text-terra-gray font-lexend text-sm">{date}</p>
    </div>
  </Link>
);

export default function NewsSection() {
  return (
    <section className="py-16 px-4 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {newsData.map((article) => (
            <ArticleCard
              key={article.slug}
              image={article.image}
              title={article.title}
              date={article.date}
              link={`/noticias/${article.slug}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}