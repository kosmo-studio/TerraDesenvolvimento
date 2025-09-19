import Header from "../components/Header";
import Footer from "../components/Footer";

import AnimatedSection from "@/components/AnimatedSection";

import HeroHome from "@/components/HeroHome";
import InnovationSection from "@/components/InnovationSection";
import MethodologiesSection from "@/components/MethodologiesSection";
import ServicesSection from "@/components/ServiceSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import AboutSection from "@/components/AboutSection";
import CtaSection from "@/components/CtaSection";
import NewsSection from "@/components/NewsSection";

export default function Index() {
  return (
    <div className="bg-white overflow-x-hidden">
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
