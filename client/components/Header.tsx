import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="w-full py-4 px-4 lg:px-8">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Link to="/">
          <img
            src="/images/terra.svg"
            alt="Terra Logo"
            className="h-16 w-auto"
          />
          </Link>
        </div>

        {/* Navigation - Hidden on mobile, shown on desktop */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link
            to="/Serviços"
            className="text-terra-navy text-sm font-lexend hover:text-terra-blue transition-colors"
          >
            Serviços
          </Link>
          <Link
            to="/resultados"
            className="text-terra-navy text-sm font-lexend hover:text-terra-blue transition-colors"
          >
            Resultados
          </Link>
          <Link
            to="/cursos-e-eventos"
            className="text-terra-navy text-sm font-lexend hover:text-terra-blue transition-colors"
          >
            Cursos e Eventos
          </Link>
          <Link
            to="/notícias"
            className="text-terra-navy text-sm font-lexend hover:text-terra-blue transition-colors"
          >
            Notícias
          </Link>
          <Link
            to="/trabalhe-conosco"
            className="text-terra-navy text-sm font-lexend hover:text-terra-blue transition-colors"
          >
            Trabalhe Conosco
          </Link>
          <Link
            to="/contato"
            className="text-terra-navy text-sm font-lexend hover:text-terra-blue transition-colors"
          >
            Contato
          </Link>
        </nav>

        {/* CTA Button */}
        <Button className="bg-terra-dark-blue hover:bg-terra-navy text-white px-6 py-3 text-sm font-lexend rounded-lg transition-colors">
          FALE COM UM CONSULTOR
        </Button>

        {/* Mobile menu button - for future mobile navigation */}
        <button className="md:hidden p-2" aria-label="Menu">
          <svg
            className="w-6 h-6 text-terra-navy"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
    </header>
  );
}
