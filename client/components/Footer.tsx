import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import React from "react";

// --- DADOS (sem alterações) ---
const menuLinks = [
  { href: "", label: "Institucional" },
  { href: "/noticias", label: "Notícias" },
  { href: "/trabalhe-conosco", label: "Trabalhe conosco" },
  { href: "", label: "Resultados" },
  { href: "/cursosEventos", label: "Cursos e Eventos" },
];

const servicosLinks = [
  { href: "/servicos/DiagnosticoGlobal", label: "Diagnóstico de Desempenho Global" },
  { href: "/servicos/ImplementaçãoDeControle", label: "Implementação de Controle" },
  { href: "/servicos/PlanejamentoEstrategico", label: "Planejamento Estratégico" },
  { href: "/servicos/ProgramaRecuperaçãoGerencial", label: "PRG: Prog. de Recuperação Gerencial" },
  { href: "/servicos/DesenvolvimentoGerencial", label: "Desenvolvimento Gerencial" },
  { href: "/servicos/PerformaTerra", label: "Performa Terra" },
  { href: "/servicos/AnalisePlanoDeNegocio", label: "Plano de Aquisição de Fazendas" },
];

const contactInfo = {
  address: "Rua São Paulo, 1568 - Vila Gomes, CEP 79022-140 / Campo Grande - MS",
  email: "contato@terradesenvolvimento.com.br",
  locations: [
    { country: "Brasil", flag: "br", phones: [{ number: "+55 (67) 3026-3442", location: "Campo Grande-MS" }, { number: "+55 (44) 3031-8844", location: "Maringá-PR" }, { number: "+55 (62) 99688-1105", location: "Goiânia-GO" }, { number: "+55 (16) 99630-1209", location: "Ribeirão Preto-SP" }, { number: "+55 (65) 99692-1046", location: "Cuiabá-MT" }, { number: "+55 (55) 99669-2703", location: "Uruguaiana-RS" }] },
    { country: "Paraguai", flag: "py", phones: [{ number: "+595 9851-92143", location: "Assunção" }, { number: "+595 986 923995", location: "Assunção" }] },
    { country: "Bolívia", flag: "bo", phones: [{ number: "+591 76685231", location: "Santa Cruz de la Sierra" }, { number: "+591 77694853", location: "Santa Cruz de la Sierra" }] },
  ],
};

export default function Footer() {
  return (
    <footer className="relative py-16 px-4 sm:px-6 lg:px-8 bg-terra-light-gray">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center md:text-left">
          
          {/* Coluna 1: Logo e Descrição */}
          <div className="space-y-4 flex flex-col items-center md:items-start">
            <img src="/images/logo-bola.svg" alt="Terra Logo" className="h-20 w-auto mb-4" />
            <p className="font-lexend text-sm text-terra-navy w-60">
              Com a TERRA você tem todos os números da sua fazenda na mão, em tempo real, permitindo traçar estratégias e tornar a fazenda eficiente.
            </p>
          </div>

          {/* Coluna 2: Menu */}
          <div className="space-y-4 ml-14">
            <h3 className="text-lg font-lexend font-bold text-terra-navy">Menu</h3>
            <ul className="space-y-4 text-sm font-lexend">
              {menuLinks.map((link) => (
                <li key={link.href}><Link to={link.href} className="text-terra-navy hover:text-terra-blue">{link.label}</Link></li>
              ))}
            </ul>
          </div>

          {/* Coluna 3: Serviços */}
          <div className="space-y-4">
            <h3 className="text-lg font-lexend font-bold text-terra-navy">Serviços</h3>
            <ul className="space-y-4 text-sm font-lexend">
              {servicosLinks.map((link) => (
                <li key={link.href}><Link to={link.href} className="text-terra-navy hover:text-terra-blue">{link.label}</Link></li>
              ))}
            </ul>
          </div>

          {/* Coluna 4: Contato */}
          <div className="space-y-4 flex flex-col items-center md:items-start">
            <h3 className="text-lg font-lexend font-bold text-terra-navy">Contato</h3><a target="_blank" href="https://wa.me/556730263442">
            <Button className="bg-terra-green hover:bg-green-600 text-white px-2 py-2 w-56 text-sm font-lexend rounded-lg flex items-center gap-2s max-w-xs">
              <IconWhatsapp /> WhatsApp
            </Button>
              </a> 
            <div className="flex space-x-3 pt-2 justify-center md:justify-start">
              <a href="#" className="text-terra-navy hover:text-terra-blue" aria-label="X"><IconX /></a>
              <a href="#" className="text-terra-navy hover:text-terra-blue" aria-label="Instagram"><IconInstagram /></a>
              <a href="#" className="text-terra-navy hover:text-terra-blue" aria-label="LinkedIn"><IconLinkedin /></a>
            </div>

            <div className="space-y-2 text-xs font-lexend text-terra-navy leading-relaxed text-left">
              <p>📍 {contactInfo.address}</p>
              <p>✉️ {contactInfo.email}</p>
            </div>
            {contactInfo.locations.map(location => (
              <div key={location.country} className="text-xs font-lexend text-terra-navy text-left w-full">
                {location.phones.map(phone => (
                  <div key={phone.number} className="flex items-center mt-2">
                    <img src={`https://flagcdn.com/w20/${location.flag}.png`} alt={location.country} className="mr-2 flex-shrink-0" />
                    <span>📞 {phone.number} <strong>({phone.location})</strong></span>
                  </div>
                ))}
              </div>
            ))}
          </div>

        </div>

        {/* Copyright */}
        <div className="border-t border-terra-navy/20 mt-12 pt-8 text-center">
          <p className="text-sm font-lexend text-terra-navy">
            © {new Date().getFullYear()} Terra Desenvolvimento Agropecuário. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}

// Ícones para manter o código principal limpo
const IconWhatsapp = () => <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413" /></svg>;
const IconX = () => <svg role="img" viewBox="0 0 24 24" height="24" width="24"><path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8 -7.584 -6.638 7.584H0.474l8.6 -9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" fill="currentColor"/></svg>;
const IconInstagram = () => <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6"><rect x="2" y="2" width="20" height="20" rx="5" ry="5" stroke="currentColor" strokeWidth="1.5" fill="none"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.5" y2="6.5" stroke="currentColor" strokeWidth="1.5"></line></svg>;
const IconLinkedin = () => <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>;