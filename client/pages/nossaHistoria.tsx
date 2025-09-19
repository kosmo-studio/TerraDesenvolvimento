import Header from "../components/Header";
import Footer from "../components/Footer";
import { Button } from "@/components/ui/button";
import HeroSection from "@/components/interno/HeroSection";
import AnimatedSection from "@/components/AnimatedSection"; 
import TimelineSection from "@/components/interno/TimelineSection";
import CTASection from "@/components/interno/CTASection";


export default function NossaHistoria() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
      
        <AnimatedSection>
          <HeroSection
            backgroundImage="/images/bg-nossahistoria.png"
            title="Terra Desenvolvimento Agropecuário"
            subtitle=""
          />
        </AnimatedSection>
        
         <div className="container mx-auto pt-14 max-w-7xl py-10 shadow-[0px_-15px_40px_-20px_rgba(0,0,0,0.3)] text-center bg-white relative -mt-20 md:-mt-32 overflow-hidden">
            <div className="max-w-4xl mx-auto text-left">
              <div className="text-sm md:text-lg lg:text-xl p-8 space-y-6 text-terra-navy leading-relaxed">
                <p>
                  A Terra Desenvolvimento Agropecuário nasceu com o propósito de levar gestão profissional às fazendas, apoiando produtores rurais na conquista de melhores resultados por meio de conhecimento, tecnologia e práticas modernas de administração.
                </p>
                <p>
                  Ao longo de sua trajetória, consolidou-se como referência em <strong>diagnóstico de desempenho, implantação de controles, planejamento estratégico e programas de recuperação gerencial</strong>, sempre com foco em aumentar a lucratividade e fortalecer a gestão das propriedades.
                </p>
                <p>
                  Com o passar dos anos, a Terra expandiu sua presença, estabelecendo <strong >8 sedes no Brasil e unidades no Paraguai e na Bolívia</strong>, o que lhe permite atender diferentes realidades produtivas de forma próxima e personalizada.
                </p>
                <p>
                  Essa trajetória é marcada por inovação, dedicação e resultados que transformaram a realidade de inúmeras fazendas. Conheça os marcos que construíram a história da Terra Desenvolvimento Agropecuário.
                </p>
              </div>
              <TimelineSection />
              <h3 className="text-[#162946] py-10 mb-8 text-xl sm:text-4xl md:text-2xl lg:text-4xl font-semibold leading-tight mx-auto text-center  lg:max-w-5xl lg:px-4">
                Essa é a nossa trajetória, marcada por inovação, dedicação e resultados que transformaram fazendas. Agora, convidamos você a fazer parte do nosso caminho e escrever conosco os próximos capítulos de sucesso no agronegócio.
              </h3>
              <div className="flex items-center justify-center w-full max-w-4xl px-4 gap-6">
                
                <div className="flex-grow h-px bg-[#162946]" />
                <img
                  src="/images/terra logo.png"
                  alt="Ícone Terra"
                  className="w-10 h-10 object-contain"
                />
                <div className="flex-grow h-px bg-[#162946]" />
                
              </div>
              
              </div>

              
            
          </div>
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}

