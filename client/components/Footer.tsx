import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

// Os dados permanecem os mesmos
const menuLinks = [
  { href: "/nossaHistoria", label: "Nossa História" }, 
  { href: "/noticias", label: "Notícias" },
  { href: "/trabalhe-conosco", label: "Trabalhe conosco" },
  { href: "/Resultados", label: "Resultados" }, 
  { href: "/cursosEventos", label: "Cursos e Eventos" },
];

const servicosLinks = [
  { href: "/servicos/DiagnosticoGlobal", label: "Diagnóstico de Desempenho Global" },
  { href: "/servicos/ImplementacaoDeControle", label: "Implementação de Controle" },
  { href: "/servicos/PlanejamentoEstrategico", label: "Planejamento Estratégico" },
  { href: "/servicos/ProgramaRecuperaçãoGerencial", label: "PRG: Prog. de Recuperação Gerencial" },
  { href: "/servicos/DesenvolvimentoGerencial", label: "Desenvolvimento Gerencial" },
  { href: "/servicos/PerformaTerra", label: "Performa Terra" },
  { href: "/servicos/AnalisePlanoDeNegocio", label: "Plano de Aquisição de Fazendas" },
];

const contactInfo = {
  address: "Rua São Paulo, 1568 - Vila Gomes, CEP 79022-140 / Campo Grande - MS",
  email: "contato@terradesenvolvimento.com.br",
  whatsappLink: "https://wa.me/556730263442", // Link centralizado
  socials: {
    twitter: "#",
    instagram: "#",
    linkedin: "#",
  },
  locations: [
    { country: "Brasil", flag: "br", phones: [{ number: "+55 (67) 3026-3442", location: "Campo Grande-MS" }, { number: "+55 (44) 3031-8844", location: "Maringá-PR" }, { number: "+55 (62) 99688-1105", location: "Goiânia-GO" }, { number: "+55 (65) 98429-8379", location: "Ji-Paraná - RO" }, { number: "+55 (65) 99692-1046", location: "Cuiabá-MT" }, { number: "+55 (44) 99126-6268", location: "Araguaína - TO" }] },
    { country: "Paraguai", flag: "py", phones: [{ number: "+595 9851-92143", location: "Assunção" }, { number: "+595 986 923995", location: "Assunção" }] },
    { country: "Bolívia", flag: "bo", phones: [{ number: "+591 76685231", location: "Santa Cruz" }, { number: "+591 77694853", location: "Santa Cruz" }] },
  ],
};

// Componente de Título para reutilização
const FooterTitle = ({ children }) => (
    <h3 className="text-base font-bold font-lexend tracking-wider uppercase text-terra-navy">
        {children}
    </h3>
);

export default function Footer() {
  return (
    <footer className="bg-terra-light-gray text-terra-navy">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        
        {/* Grid principal unificado para todas as colunas */}
        <div className="grid grid-cols-1 gap-y-10 gap-x-8 sm:grid-cols-2 lg:grid-cols-4">
          
          {/* Coluna 1: Logo, Descrição e Redes Sociais */}
          <div className="space-y-6">
            <img src="/images/logo-bola.svg" alt="Terra Logo" className="h-24 w-auto" />
            <p className="font-lexend text-sm leading-relaxed w-[200px]">
              Com a TERRA você tem todos os números da sua fazenda na mão, permitindo traçar estratégias e tornar a seu negócio eficiente.
            </p>
            <div className="flex space-x-4">
              <a href={contactInfo.socials.twitter} className="hover:text-terra-blue transition-colors" aria-label="X"><IconX /></a>
              <a href={contactInfo.socials.instagram} className="hover:text-terra-blue transition-colors" aria-label="Instagram"><IconInstagram /></a>
              <a href={contactInfo.socials.linkedin} className="hover:text-terra-blue transition-colors" aria-label="LinkedIn"><IconLinkedin /></a>
            </div>
          </div>

          {/* Coluna 3: Serviços */}
          <div className="space-y-4">
            <FooterTitle>Serviços</FooterTitle>
            <ul className="space-y-3 font-lexend text-[13px]">
              {servicosLinks.map((link) => (
                <li key={link.label}>
                  <Link to={link.href} className="hover:text-terra-blue transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Coluna 2: Menu */}
          <div className="space-y-4">
            <FooterTitle>Terra Desenvolvimento</FooterTitle>
            <ul className="space-y-3 font-lexend text-sm">
              {menuLinks.map((link) => (
                <li key={link.label}>
                  <Link to={link.href} className="hover:text-terra-blue transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          
          
          {/* Coluna 4: Contato */}
          <div className="space-y-4">
            <FooterTitle>Contato</FooterTitle>
            <div className="space-y-3 font-lexend text-[13px] leading-relaxed">
                <p className="flex items-start gap-2">
                    <span className="mt-1">📍</span>
                    <span>{contactInfo.address}</span>
                </p>
                 <p className="flex items-center gap-2">
                    <span>✉️</span>
                    <a href={`mailto:${contactInfo.email}`} className="hover:text-terra-blue break-all">
                        {contactInfo.email}
                    </a>
                </p>
            </div>
             <a target="_blank" href={contactInfo.whatsappLink} rel="noopener noreferrer">
              <Button className="bg-terra-green hover:bg-green-600 text-white px-4 py-2 w-full max-w-xs text-sm font-lexend rounded-lg flex items-center justify-center gap-2 mt-4">
                <IconWhatsapp /> WhatsApp
              </Button>
            </a>
          </div>

        </div>

        {/* Seção de Telefones - agora separada do grid principal para um layout mais limpo */}
        <div className="mt-12 pt-8 border-t border-terra-navy/20">
            <FooterTitle>Nossos Escritórios</FooterTitle>
            <div className="mt-4 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {contactInfo.locations.map(location => (
                    <div key={location.country} className="font-lexend text-sm">
                        <div className="flex items-center mb-3">
                            <img src={`https://flagcdn.com/w20/${location.flag}.png`} alt={location.country} className="mr-3 flex-shrink-0 rounded-sm" />
                            <span className="font-semibold">{location.country}</span>
                        </div>
                        <div className="space-y-2 pl-8">
                            {location.phones.map(phone => (
                                <p key={phone.number} className="flex items-center gap-2">
                                    <span>📞</span>
                                    <span>{phone.number} <span className="text-terra-navy/70">({phone.location})</span></span>
                                </p>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-terra-navy/20 mt-12 pt-8 text-center">
          <p className="text-sm font-lexend text-terra-navy/80">
            © {new Date().getFullYear()} Terra Desenvolvimento Agropecuário. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}


// Ícones (SVG components)
// Adicionei tamanhos consistentes e currentColor para herdar a cor do link no hover.

const IconWhatsapp = () => <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413" /></svg>;
const IconX = () => <svg className="w-6 h-6" role="img" viewBox="0 0 24 24" fill="currentColor"><path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8 -7.584 -6.638 7.584H0.474l8.6 -9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" /></svg>;
const IconInstagram = () => <svg className="w-6 h-6" viewBox="0 0 192 192" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeWidth="12"><path d="M96 162c-14.152 0-24.336-.007-32.276-.777-7.849-.761-12.87-2.223-16.877-4.741a36 36 0 0 1-11.33-11.329c-2.517-4.007-3.98-9.028-4.74-16.877C30.007 120.336 30 110.152 30 96c0-14.152.007-24.336.777-32.276.76-7.849 2.223-12.87 4.74-16.877a36 36 0 0 1 11.33-11.33c4.007-2.517 9.028-3.98 16.877-4.74C71.663 30.007 81.847 30 96 30c14.152 0 24.336.007 32.276.777 7.849.76 12.87 2.223 16.877 4.74a36 36 0 0 1 11.329 11.33c2.518 4.007 3.98 9.028 4.741 16.877.77 7.94.777 18.124.777 32.276 0 14.152-.007 24.336-.777 32.276-.761 7.849-2.223 12.87-4.741 16.877a36 36 0 0 1-11.329 11.329c-4.007 2.518-9.028 3.98-16.877 4.741-7.94.77-18.124.777-32.276.777Z"/><circle cx="96" cy="96" r="30" /><circle cx="135" cy="57" r="9" fill="currentColor"/></svg>;
const IconLinkedin = () => <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>;