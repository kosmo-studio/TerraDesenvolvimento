// src/pages/Index.tsx

import Header from "../components/Header";
import Footer from "../components/Footer";

// Importando as novas seções da página inicial
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
        <HeroHome />
        <InnovationSection />
        <MethodologiesSection />
        <ServicesSection />
        <TestimonialsSection />
        <AboutSection />
        <CtaSection />
        <NewsSection />
      </main>
      <Footer />
    </div>
  );
}