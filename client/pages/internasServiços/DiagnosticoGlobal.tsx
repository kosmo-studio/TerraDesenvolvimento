import Header from "@/components/Header";
import HeroSection from "@/components/interno/HeroSection";
import CTASection from "@/components/interno/CTASection";
import ServicesSection from "@/components/interno/ServicesSection";
import ClientsSection from "@/components/interno/ClientsSection";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { Link } from "react-router-dom";

export default function DiagnosticoGlobal() {
  return (
    <div className="w-[1920px] h-[4237px] relative bg-white max-md:w-full max-md:h-auto max-md:min-h-screen max-sm:w-full max-sm:overflow-x-hidden">
      <div className="fixed top-0 left-0 w-full h-20 z-50">
        <Header />
      </div>
      
      <main>
        <HeroSection />
        <ServicesSection />
        <ClientsSection />
        <CTASection />
      </main>
      {/* <Footer /> */}
    </div>
  );
}

