import React from "react";

interface Artigo {
  id: number;
  titulo: string;
  subtitulo?: string;
  imagemDestaque: string;
  dataPublicacao: string;
  autor: string;
  conteudo: string; 
}

interface ArtigoTemplateProps {
  artigo: Artigo;
}

const ArtigoTemplate: React.FC<ArtigoTemplateProps> = ({ artigo }) => {
  return (
    <article className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      {/* CABEÇALHO E IMAGEM ) */}
      <div className="text-center mb-12">
        <p className="text-sm text-terra-gray mb-2">
          {artigo.autor} • {artigo.dataPublicacao}
        </p>
        <h1 className="text-4xl md:text-5xl font-bold font-lexend text-terra-navy leading-tight mb-[-15px]">
          {artigo.titulo}
        </h1>
      </div>
      <img
        src={artigo.imagemDestaque}
        alt={artigo.titulo}
        className="w-full h-auto max-h-[500px] object-cover rounded-2xl mb-12 shadow-lg"
      />

      {/* CORPO DO ARTIGO  */}
      <div
        className="prose lg:prose-xl prose-strong:font-bold max-w-none text-terra-gray leading-relaxed space-y-6"
        dangerouslySetInnerHTML={{ __html: artigo.conteudo }}
      />
    </article>
  );
};

export default ArtigoTemplate;