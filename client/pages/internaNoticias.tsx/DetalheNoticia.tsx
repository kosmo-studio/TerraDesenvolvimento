import { useParams } from 'react-router-dom';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ArtigoTemplate from "@/components/interno/Artigo";
import { todasAsNoticias } from '@/components/data/noticias';

export default function DetalheNoticia() {
  // 1. O hook 'useParams' lê os parâmetros da URL.
  // A variável 'slug' terá o valor que estava no lugar de ':slug'.
  const { slug } = useParams();

  // 2. Procuramos no nosso array de dados pelo artigo com o slug correspondente.
  // (No futuro, aqui seria a chamada para a API: fetch(`/api/noticias/${slug}`))
  const artigo = todasAsNoticias.find(noticia => noticia.slug === slug);

  // 3. Verificação caso a notícia não seja encontrada
  if (!artigo) {
    return (
      <div>
        <Header />
        <main className="pt-32 text-center">
          <h1>Notícia não encontrada!</h1>
        </main>
        <Footer />
      </div>
    );
  }

  // 4. Se o artigo foi encontrado, renderizamos o template com os dados dele.
  return (
    <div className="bg-white">
      <Header />
      <main className="pt-20">
        <ArtigoTemplate artigo={artigo} />
      </main>
      <Footer />
    </div>
  );
}