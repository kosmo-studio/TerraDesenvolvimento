import Header from "../components/Header";
import Footer from "../components/Footer";
import { useState, useEffect } from 'react';
import AnimatedSection from "@/components/AnimatedSection";
import { PricingCardsContent } from "@/components/PrincingCardsContent";
import HeroHome from "@/components/HeroHome";
import InnovationSection from "@/components/InnovationSection";
import MethodologiesSection from "@/components/MethodologiesSection";
import ServicesSection from "@/components/ServiceSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import AboutSection from "@/components/AboutSection";
import CtaSection from "@/components/CtaSection";
import NewsSection from "@/components/NewsSection";
import { Modal } from "@/components/Modal";
import { CtaModalStackedSpeakers } from "@/components/CtaModel";


export default function Index() {
  const [isModalOpen, setIsModalOpen] = useState(false);

    // 2. Efeito para disparar o modal ao carregar a página
    useEffect(() => {
        // Verifica se o usuário já viu o modal nesta sessão (sessionStorage)
        const hasSeenModal = sessionStorage.getItem('blackFridayModalSeen');

        if (!hasSeenModal) {
            // Define um pequeno atraso de 1 segundo (1000ms)
            const timer = setTimeout(() => {
                setIsModalOpen(true);
                // Marca o modal como visto
                sessionStorage.setItem('blackFridayModalSeen', 'true');
            }, 1000); 

            return () => clearTimeout(timer); // Limpeza ao desmontar
        }
    }, []);

    const handleCloseModal = () => setIsModalOpen(false);
  return (
    <div className="bg-white overflow-x-hidden">
      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
                {/* O conteúdo da sua oferta */}
                <CtaModalStackedSpeakers onClose={handleCloseModal} />
            </Modal>
      <Header />
      
      <main>
        <AnimatedSection>
          <HeroHome />
        </AnimatedSection>
    
        
        <AnimatedSection>
          <InnovationSection />
        </AnimatedSection>
        
        <AnimatedSection>
          <MethodologiesSection />
        </AnimatedSection>
        
        <AnimatedSection>
          <ServicesSection />
        </AnimatedSection>
        
        <AnimatedSection>
          <TestimonialsSection />
        </AnimatedSection>
        
        <AnimatedSection>
          <AboutSection />
        </AnimatedSection>
        
        <AnimatedSection>
          <CtaSection />
        </AnimatedSection>

        <AnimatedSection>
          <NewsSection />
        </AnimatedSection>
      </main>
      <Footer />
    </div>
  );
}
