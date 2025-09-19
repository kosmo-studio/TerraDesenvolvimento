import React from "react";
import { Link } from "react-router-dom"; // 1. Importar o Link

// --- ÍCONES (sem alterações) ---
const IconGestao = () => (
  <svg className="w-16 h-16" viewBox="0 0 77 97" fill="white">
    <path d="M3.87488 46.0888C2.96813 46.0219 2.18314 46.6544 2.05269 47.5426C1.91924 48.4314 2.49992 49.2687 3.37708 49.4617C9.71783 50.8399 15.448 51.4678 20.6511 51.4678C45.3026 51.4658 58.0637 37.3704 67.1333 22.3995L72.6206 25.6894C73.1926 26.0343 73.9125 26.0121 74.4635 25.6359C75.0176 25.2598 75.296 24.5977 75.1865 23.9395L71.6607 3.09881C71.5718 2.58515 71.2547 2.13632 70.7954 1.88589C70.336 1.63595 69.788 1.60778 69.3081 1.81216L50.6388 9.72535C50.0222 9.98618 49.6163 10.584 49.5987 11.2529C49.5807 11.9225 49.9543 12.5401 50.5556 12.8331L56.1823 15.5765C41.1721 48.6115 5.41559 46.21 3.87488 46.0888Z" />
    <path d="M9.36041 67.896C6.06141 67.896 3.47351 71.1179 3.47351 75.2335V88.0914C3.47351 92.2075 6.06141 95.4294 9.36041 95.4294H17.4076C20.7096 95.4294 23.2943 92.2075 23.2943 88.0914V75.2335C23.2943 71.1179 20.7096 67.896 17.4076 67.896H9.36041Z" />
    <path d="M33.6863 55.8396C30.3874 55.8396 27.8025 59.0615 27.8025 63.1776V88.0914C27.8025 92.2075 30.3874 95.4294 33.6863 95.4294H41.7368C45.0358 95.4294 47.6202 92.2075 47.6202 88.0914V63.1776C47.6202 59.0615 45.0358 55.8396 41.7368 55.8396H33.6863Z" />
    <path d="M68.4636 41.3738H60.4165C57.1171 41.3738 54.5296 44.5957 54.5296 48.7108V88.0915C54.5296 92.2076 57.1171 95.4295 60.4165 95.4295H68.4636C71.7657 95.4295 74.3504 92.2076 74.3504 88.0915V48.7108C74.3504 44.5957 71.7657 41.3738 68.4636 41.3738Z" />
  </svg>
);
const IconPlanejamento = () => (
  <svg
    className="w-16 h-16"
    viewBox="0 0 64 64"
    fill="none"
    stroke="white"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="26" y="4" width="12" height="12" rx="2" />
    <line x1="32" y1="16" x2="32" y2="28" />
    <line x1="12" y1="28" x2="52" y2="28" />
    <line x1="16" y1="28" x2="16" y2="40" />
    <line x1="32" y1="28" x2="32" y2="40" />
    <line x1="48" y1="28" x2="48" y2="40" />
    <rect x="10" y="40" width="12" height="12" rx="2" />
    <rect x="26" y="40" width="12" height="12" rx="2" />
    <rect x="42" y="40" width="12" height="12" rx="2" />
  </svg>
);
const IconConsultoria = () => (
  <img
    src="https://api.builder.io/api/v1/image/assets/TEMP/28e229fca138ab4c4258735fceaf7ded9685f8ed?width=156"
    alt="Consultoria técnica"
    className="w-16 h-16"
  />
);
const IconDiagnostico = () => (
  <svg
    className="w-16 h-16"
    viewBox="0 0 64 64"
    fill="none"
    stroke="white"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="8" y="8" width="48" height="36" rx="4" ry="4" />
    <line x1="32" y1="44" x2="32" y2="52" />
    <rect x="24" y="52" width="16" height="4" rx="1" />
    <polyline points="12,28 20,28 24,20 28,36 32,28 36,32 40,28 52,28" />
  </svg>
);
const IconTreinamento = () => (
  <svg
    className="w-16 h-16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="white"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
    <circle cx="9" cy="7" r="4"></circle>
    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
  </svg>
);

// --- DADOS DOS SERVIÇOS ---
// 2. Adicionada a propriedade 'href' para cada serviço
const servicesData = [
  {
    href: "/servicos/ProgramaRecuperaçãoGerencial",
    title: ["Gestão", "de fazendas"],
    icon: <IconGestao />,
  },
  {
    href: "/servicos/PlanejamentoEstrategico",
    title: ["Planejamento", "estratégico"],
    icon: <IconPlanejamento />,
  },
  {
    href: "/servicos/DiagnosticoGlobal",
    title: ["Diagnóstico de", "Desempenho Global"],
    icon: <IconConsultoria />,
  },
  {
    href: "/servicos/AnalisePlanoDeNegocio",
    title: ["Plano de Aquisição", "de Fazendas"],
    icon: <IconDiagnostico />,
  },
  {
    href: "/servicos/DesenvolvimentoGerencial",
    title: ["Treinamento", "de equipes"],
    icon: <IconTreinamento />,
  },
];

export default function ServicesSection() {
  return (
    <section className="py-16 px-4 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-6xl font-lexend text-terra-navy">
            <span className="font-normal">Serviços </span>
            <span className="font-bold">Terra</span>
          </h2>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 w-50 md:w-90 gap-6">
          {servicesData.map((service) => (
            // 3. O card agora é um componente <Link> clicável
            <Link
              to={service.href}
              key={service.title.join(" ")}
              className="bg-terra-dark-blue rounded-3xl p-6 text-center text-white flex flex-col items-center group transition-all duration-300 ease-in-out hover:bg-terra-navy hover:scale-105 hover:shadow-lg cursor-pointer"
            >
              <div className="mb-6 h-16 w-16 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                {service.icon}
              </div>
              <h3 className="text-xs xl:text-xl font-lexend">
                {service.title.map((line, i) => (
                  <React.Fragment key={i}>
                    {line}
                    <br />
                  </React.Fragment>
                ))}
              </h3>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
