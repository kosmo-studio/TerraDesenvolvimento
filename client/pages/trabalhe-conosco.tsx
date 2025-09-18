import Header from "../components/Header";
import Footer from "../components/Footer";
import { Button } from "@/components/ui/button";
import HeroSection from "@/components/interno/HeroSection";

export default function Pagina() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      {/* Hero Section */}
      <HeroSection
        backgroundImage="/images/bg-trabalheConosco.jpeg"
        title=""
        subtitle=""
      />
      <main className="pt-32 pb-16">
        <div className="container mx-auto pt-14 max-w-7xl py-10 shadow-[0px_-15px_40px_-20px_rgba(0,0,0,0.3)] text-center bg-white relative mt-[-20px] md:-mt-52">
          <div className="max-w-4xl mx-auto px-4 lg:px-0 text-left">
            <h1 className="text-terra-navy text-4xl font-bold text-center mb-10">Construa sua carreira com a gente</h1>
            <p className="mb-6 leading-relaxed text-lg text-terra-navy">
                <strong>Na Terra Desenvolvimento Agropecuário</strong>, acreditamos que o verdadeiro diferencial de uma empresa de sucesso está nas pessoas que fazem parte dela. Por isso, buscamos profissionais comprometidos, que compartilham nossos valores e querem contribuir para transformar o agronegócio em um setor cada vez mais inovador e eficiente.
              </p>

              <p className="mb-6 leading-relaxed text-lg text-terra-navy">
                Aqui você encontra oportunidades para desenvolver sua carreira, enfrentar desafios reais do campo e participar de projetos que fazem a diferença. Nossa equipe trabalha com dedicação e propósito, sempre em busca dos melhores resultados.
              </p>

              <p className="mb-6 leading-relaxed text-lg text-terra-navy">
                Se você tem paixão pelo agro e deseja crescer junto conosco, envie seu currículo ou entre em contato com nossa equipe de recrutamento. Estamos sempre em busca de novos talentos para integrar nossas unidades no Brasil, Paraguai e Bolívia.

              </p>

              <p className="mb-12 leading-relaxed text-lg font-semibold">
                👉 Venha fazer parte da nossa história.
              </p>

            {/* FORMULÁRIO */}
            <form className="space-y-6">
              {/* Nome */}
              <div>
                <label className="block font-semibold mb-1">Nome Completo</label>
                <input
                  type="text"
                  placeholder="Nome"
                  className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-terra-navy"
                  required
                />
              </div>

              {/* E-mail e Telefone */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block font-semibold mb-1">E-mail</label>
                  <input
                    type="email"
                    placeholder="E-mail"
                    className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-terra-navy"
                    required
                  />
                </div>
                <div>
                  <label className="block font-semibold mb-1">Telefone + DDD</label>
                  <input
                    type="tel"
                    placeholder="(xx) xxxxx-xxxx"
                    className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-terra-navy"
                    required
                  />
                </div>
              </div>

              {/* Texto de apresentação */}
              <div>
                <label className="block font-semibold mb-1">
                  Explique por que você seria uma boa adição ao nosso time.
                </label>
                <textarea
                  rows={5}
                  placeholder="Explique como você acredita que pode reforçar a equipe..."
                  className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-terra-navy"
                />
              </div>

              {/* Upload */}
              <div>
                <label className="block font-semibold mb-1">
                  Envie seu currículo (formato .pdf)
                </label>
                <input
                  type="file"
                  accept=".pdf"
                  className="w-full border rounded-md px-3 py-2 bg-white file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:bg-terra-navy file:text-white hover:file:bg-terra-green"
                />
              </div>

              {/* Botão */}
              <div className="text-center">
                <Button
                  type="submit"
                  className="w-full md:w-auto px-6 py-3 rounded-md font-semibold bg-terra-navy text-white hover:bg-terra-green transition"
                >
                  ENVIAR FORMULÁRIO
                </Button>
              </div>
            </form>
            {/* FIM FORMULÁRIO */}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
