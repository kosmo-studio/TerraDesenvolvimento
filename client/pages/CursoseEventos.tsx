import Header from "../components/Header";
import Footer from "../components/Footer";
import { Button } from "@/components/ui/button";
import HeroSection from "@/components/interno/HeroSection";

export default function Pagina() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
        <HeroSection/>
      <Footer />
    </div>
    );
}
      