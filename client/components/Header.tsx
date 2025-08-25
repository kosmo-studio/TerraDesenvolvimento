import { Button } from "@/components/ui/button";

export default function Header() {
  return (
    <header className="w-full bg-white py-4 px-4 lg:px-8">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex-shrink-0">
          <img 
            src="https://api.builder.io/api/v1/image/assets/TEMP/1d24384ce6f1f402995d9f1497ed944557f962dd?width=590" 
            alt="Terra Logo" 
            className="h-16 w-auto"
          />
        </div>

        {/* Navigation - Hidden on mobile, shown on desktop */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#servicos" className="text-terra-navy text-sm font-lexend hover:text-terra-blue transition-colors">
            Serviços
          </a>
          <a href="#resultados" className="text-terra-navy text-sm font-lexend hover:text-terra-blue transition-colors">
            Resultados
          </a>
          <a href="#cursos" className="text-terra-navy text-sm font-lexend hover:text-terra-blue transition-colors">
            Cursos e Eventos
          </a>
          <a href="#noticias" className="text-terra-navy text-sm font-lexend hover:text-terra-blue transition-colors">
            Notícias
          </a>
          <a href="#trabalhe" className="text-terra-navy text-sm font-lexend hover:text-terra-blue transition-colors">
            Trabalhe Conosco
          </a>
          <a href="#contato" className="text-terra-navy text-sm font-lexend hover:text-terra-blue transition-colors">
            Contato
          </a>
        </nav>

        {/* CTA Button */}
        <Button 
          className="bg-terra-dark-blue hover:bg-terra-navy text-white px-6 py-3 text-sm font-lexend rounded-lg transition-colors"
        >
          FALE COM UM CONSULTOR
        </Button>

        {/* Mobile menu button - for future mobile navigation */}
        <button className="md:hidden p-2" aria-label="Menu">
          <svg className="w-6 h-6 text-terra-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </header>
  );
}
