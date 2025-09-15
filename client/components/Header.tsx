import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";


const navLinks = [
  { to: "/servicos", label: "Serviços" },
  { to: "/resultados", label: "Resultados" },
  { to: "/cursos-e-eventos", label: "Cursos e Eventos" },
  { to: "/noticias", label: "Notícias" },
  { to: "/trabalhe-conosco", label: "Trabalhe Conosco" },
  { to: "/contato", label: "Contato" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header 
      className={`
        w-full fixed top-0 left-0 z-50 py-4 px-4 lg:px-8 transition-colors duration-300
        ${isScrolled || isMenuOpen ? 'bg-white shadow-md' : 'bg-transparent'}
      `}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between relative">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Link to="/" onClick={() => setIsMenuOpen(false)}>
            <img
              src="/images/terra.svg"
              alt="Terra Logo"
              className="h-12 xl:h-16 w-auto" // Tamanho ajustado
            />
          </Link>
        </div>

        {/* Navigation Desktop: Alterado para 'lg:flex' */}
        <nav className="hidden lg:flex items-center space-x-4 xl:space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`text-xs xl:text-sm font-lexend transition-colors ${
                isScrolled ? 'text-terra-navy hover:text-terra-blue' : 'text-terra-navy hover:text-terra-blue'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* CTA Button: Alterado para 'lg:flex' */}
        <Button className="hidden lg:flex bg-terra-dark-blue hover:bg-terra-navy text-white px-4 xl:px-6 py-3 text-xs xl:text-sm font-lexend rounded-lg transition-colors">
          FALE COM UM CONSULTOR
        </Button>

        <button className="lg:hidden p-2" aria-label="Menu" onClick={toggleMenu}>
          <svg
            className={`w-6 h-6 transition-transform duration-300 ${isScrolled || isMenuOpen ? 'text-terra-navy' : 'text-terra-navy'}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* PAINEL DO MENU MOBILE: Alterado para 'lg:hidden' */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white mt-4 p-6 flex flex-col items-center space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setIsMenuOpen(false)}
              className="text-terra-navy font-lexend text-lg hover:text-terra-blue"
            >
              {link.label}
            </Link>
          ))}
          <Button className="w-full bg-terra-dark-blue hover:bg-terra-navy text-white px-6 py-3 text-sm font-lexend rounded-lg transition-colors">
            FALE COM UM CONSULTOR
          </Button>
        </div>
      )}
    </header>
  );
}