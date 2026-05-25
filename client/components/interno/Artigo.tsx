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
  const getYouTubeId = (url: string): string | null => {
    try {
      const u = new URL(url);
      const host = u.hostname.replace("www.", "");

      // youtu.be/VIDEO_ID
      if (host === "youtu.be") {
        const id = u.pathname.slice(1);
        return id || null;
      }

      // youtube.com/watch?v=VIDEO_ID or /embed/VIDEO_ID
      if (host === "youtube.com" || host === "m.youtube.com" || host.endsWith("youtube.com")) {
        const v = u.searchParams.get("v");
        if (v) return v;
        const parts = u.pathname.split("/").filter(Boolean);
        const embedIndex = parts.indexOf("embed");
        if (embedIndex !== -1 && parts[embedIndex + 1]) return parts[embedIndex + 1];
        if (parts.length && parts[0] !== "watch") return parts[0];
      }
    } catch (e) {
      // ignore
    }
    return null;
  };

  const makeYouTubeEmbed = (id: string) => {
    const src = `https://www.youtube.com/embed/${id}`;
    return `
      <div class="w-full h-0 relative" style="padding-bottom:56.25%">
        <iframe src="${src}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen class="absolute top-0 left-0 w-full h-full rounded-2xl"></iframe>
      </div>
    `;
  };

  const transformYouTubeEmbeds = (html: string) => {
    if (!html) return html;

    // Replace anchor tags that link to YouTube
    html = html.replace(/<a[^>]*href=("|')([^"']+)(\1)[^>]*>.*?<\/a>/gi, (match, _q, href) => {
      try {
        if (/youtu(?:\.be|be\.com)/i.test(href)) {
          const id = getYouTubeId(href);
          if (id) return makeYouTubeEmbed(id);
        }
      } catch (e) {
        // fallthrough to return original anchor
      }
      return match;
    });

    // Replace plain YouTube URLs in text
    const urlRegex = /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/watch\?v=|youtu\.be\/)([A-Za-z0-9_-]{11})([^\s<]*)/gi;
    html = html.replace(urlRegex, (m, id) => makeYouTubeEmbed(id));

    return html;
  };

  const renderedContent = transformYouTubeEmbeds(artigo.conteudo);

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
        dangerouslySetInnerHTML={{ __html: renderedContent }}
      />
    </article>
  );
};

export default ArtigoTemplate;