import { Link } from 'react-router-dom';
import React, { useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
// 1. Importamos os dados do nosso arquivo central
import { todasAsNoticias } from './data/noticias';
// 2. Importamos o componente de botão correto
import { Button } from '@/components/ui/button';

// Componente de Card (sem alterações)
const ArticleCard = ({ image, title, date, link }) => (
  <Link to={link} className="bg-white rounded-lg overflow-hidden shadow-sm flex flex-col group transition-transform duration-300 hover:scale-105 hover:shadow-sm h-full">
    <div className="relative h-48 overflow-hidden">
      <img src={image} alt={title} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" />
    </div>
    <div className="p-6 flex flex-col flex-grow">
      <h3 className="text-lg font-lexend text-terra-navy leading-tight mb-4 flex-grow">{title}</h3>
      <span className="text-terra-blue font-lexend text-sm mb-2 block">Leia mais</span>
      <p className="text-terra-gray font-lexend text-sm">{date}</p>
    </div>
  </Link>
);

export default function NewsSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true, 
    align: 'start',
  });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <section className="py-16 px-4 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl lg:text-4xl font-bold text-terra-navy">Últimas Notícias</h2>
            <div className="flex items-center gap-2">
                <Button onClick={scrollPrev} variant="outline" size="icon" className="bg-white rounded-full ">
                    <ChevronLeft className="h-6 w-6 text-terra-navy" />
                </Button>
                <Button onClick={scrollNext} variant="outline" size="icon" className="bg-white rounded-full ">
                    <ChevronRight className="h-6 w-6 text-terra-navy" />
                </Button>
            </div>
        </div>

        {/* Estrutura do Carrossel Embla */}
        <div className="overflow-hidden py-4" ref={emblaRef}>
          <div className="flex -ml-4">
            {todasAsNoticias.map((article) => (
              <div className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 pl-4" key={article.id}>
                <ArticleCard
                  image={article.imagemDestaque}
                  title={article.titulo}
                  date={article.dataPublicacao}
                  link={`/noticias/${article.slug}`}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

