import Header from "../components/Header";
import Footer from "../components/Footer";
import { Button } from "@/components/ui/button";
import HeroSection from "@/components/interno/HeroSection";
import AnimatedSection from "@/components/AnimatedSection"; 


export default function TrabalheConosco() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
      
        <AnimatedSection>
          <HeroSection
            backgroundImage="/images/bg-trabalheConosco.jpeg"
            title=""
            subtitle=""
          />
        </AnimatedSection>
        
        <AnimatedSection>
          <div className="container mx-auto pt-14 max-w-7xl py-10 shadow-[0px_-15px_40px_-20px_rgba(0,0,0,0.3)] text-center bg-white relative -mt-32 md:-mt-32">
            <div className="max-w-4xl mx-auto px-4 lg:px-0 text-left">
              <h1 className="text-4xl font-bold text-center text-terra-navy mb-10">Construa sua carreira com a gente</h1>
              <p className="mb-6 leading-relaxed text-lg text-terra-navy text-justify">
                <strong>Na Terra Desenvolvimento Agropecuário</strong>, acreditamos que o verdadeiro diferencial de uma empresa de sucesso está nas pessoas que fazem parte dela. Por isso, buscamos profissionais comprometidos, que compartilham nossos valores e querem contribuir para transformar o agronegócio em um setor cada vez mais inovador e eficiente.
              </p>
              <p className="mb-6 leading-relaxed text-lg text-terra-navy text-justify">
                Aqui você encontra oportunidades para desenvolver sua carreira, enfrentar desafios reais do campo e participar de projetos que fazem a diferença. Nossa equipe trabalha com dedicação e propósito, sempre em busca dos melhores resultados.
              </p>
              <p className="mb-12 leading-relaxed text-lg text-terra-navy text-justify">
                Se você tem paixão pelo agro e deseja crescer junto conosco, envie seu currículo. Estamos sempre em busca de novos talentos para integrar nossas unidades no Brasil, Paraguai e Bolívia.
                <strong> Venha fazer parte da nossa história.</strong>
              </p>

              {/* FORMULÁRIO */}
              <form className="space-y-6 text-terra-navy">
                {/* Nome */}
                <div>
                  <label className="block font-semibold mb-2">Nome Completo</label>
                  <input
                    type="text"
                    placeholder="Seu nome completo"
                    className="w-full border border-terra-navy rounded-md px-3 py-2  focus:ring-2 focus:ring-terra-navy"
                    required
                  />
                </div>

                {/* E-mail e Telefone */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block font-semibold mb-2">E-mail</label>
                    <input
                      type="email"
                      placeholder="seu.email@exemplo.com"
                      className="w-full border border-terra-navy rounded-md px-3 py-2  focus:ring-terra-navy"
                      required
                    />
                  </div>
                  <div>
                    <label className="block font-semibold mb-2">Telefone + DDD</label>
                    <input
                      type="tel"
                      placeholder="(xx) xxxxx-xxxx"
                      className="w-full border border-terra-navy text-sm rounded-md px-3 py-2  focus:ring-2 focus:ring-terra-navy"
                      required
                    />
                  </div>
                </div>

                {/* Texto de apresentação */}
                <div>
                  <label className="block font-semibold mb-2">
                    Explique por que você seria uma boa adição ao nosso time.
                  </label>
                  <textarea
                    rows={5}
                    placeholder="Conte-nos como você pode contribuir para nossa equipe..."
                    className="w-full border border-terra-navy rounded-md px-3 py-2  focus:ring-2 focus:ring-terra-navy"
                  />
                </div>

                {/* Upload */}
                <div>
                  <label className="block font-semibold mb-2">
                    Envie seu currículo (formato .pdf)
                  </label>
                  <input
                    type="file"
                    accept=".pdf"
                    className="w-full border border-terra-navy text-sm text-slate-500  rounded-md cursor-pointer
                    file:mr-4 file:py-2 file:px-4
                    file:rounded-l-md file:border-0
                    file:bg-terra-navy file:text-white hover:file:bg-terra-green"
                  />
                </div>

                {/* Botão */}
                <div className="text-center pt-4">
                  <Button
                    type="submit"
                    className="w-full md:w-auto px-8 py-3 rounded-lg font-semibold bg-terra-navy text-white hover:bg-terra-green transition-colors"
                  >
                    ENVIAR FORMULÁRIO
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </AnimatedSection>
      </main>
      <Footer />
    </div>
  );
}

