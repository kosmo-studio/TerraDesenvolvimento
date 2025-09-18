import React from 'react';
const IconGestao = () => <svg className="w-16 h-16" viewBox="0 0 77 97" fill="white"> <path d="M3.87488 46.0888C2.96813 46.0219 2.18314 46.6544 2.05269 47.5426C1.91924 48.4314 2.49992 49.2687 3.37708 49.4617C9.71783 50.8399 15.448 51.4678 20.6511 51.4678C45.3026 51.4658 58.0637 37.3704 67.1333 22.3995L72.6206 25.6894C73.1926 26.0343 73.9125 26.0121 74.4635 25.6359C75.0176 25.2598 75.296 24.5977 75.1865 23.9395L71.6607 3.09881C71.5718 2.58515 71.2547 2.13632 70.7954 1.88589C70.336 1.63595 69.788 1.60778 69.3081 1.81216L50.6388 9.72535C50.0222 9.98618 49.6163 10.584 49.5987 11.2529C49.5807 11.9225 49.9543 12.5401 50.5556 12.8331L56.1823 15.5765C41.1721 48.6115 5.41559 46.21 3.87488 46.0888Z" /><path d="M9.36041 67.896C6.06141 67.896 3.47351 71.1179 3.47351 75.2335V88.0914C3.47351 92.2075 6.06141 95.4294 9.36041 95.4294H17.4076C20.7096 95.4294 23.2943 92.2075 23.2943 88.0914V75.2335C23.2943 71.1179 20.7096 67.896 17.4076 67.896H9.36041Z" /><path d="M33.6863 55.8396C30.3874 55.8396 27.8025 59.0615 27.8025 63.1776V88.0914C27.8025 92.2075 30.3874 95.4294 33.6863 95.4294H41.7368C45.0358 95.4294 47.6202 92.2075 47.6202 88.0914V63.1776C47.6202 59.0615 45.0358 55.8396 41.7368 55.8396H33.6863Z" /><path d="M68.4636 41.3738H60.4165C57.1171 41.3738 54.5296 44.5957 54.5296 48.7108V88.0915C54.5296 92.2076 57.1171 95.4295 60.4165 95.4295H68.4636C71.7657 95.4295 74.3504 92.2076 74.3504 88.0915V48.7108C74.3504 44.5957 71.7657 41.3738 68.4636 41.3738Z" /></svg>;
const IconPlanejamento = () => <svg className="w-16 h-16" viewBox="0 0 64 64" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="26" y="4" width="12" height="12" rx="2" /><line x1="32" y1="16" x2="32" y2="28" /><line x1="12" y1="28" x2="52" y2="28" /><line x1="16" y1="28" x2="16" y2="40" /><line x1="32" y1="28" x2="32" y2="40" /><line x1="48" y1="28" x2="48" y2="40" /><rect x="10" y="40" width="12" height="12" rx="2" /><rect x="26" y="40" width="12" height="12" rx="2" /><rect x="42" y="40" width="12" height="12" rx="2" /></svg>;
const IconConsultoria = () => <img src="https://api.builder.io/api/v1/image/assets/TEMP/28e229fca138ab4c4258735fceaf7ded9685f8ed?width=156" alt="Consultoria técnica" className="w-16 h-16" />;
const IconDiagnostico = () => <svg className="w-16 h-16" viewBox="0 0 64 64" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="8" y="8" width="48" height="36" rx="4" ry="4" /><line x1="32" y1="44" x2="32" y2="52" /><rect x="24" y="52" width="16" height="4" rx="1" /><polyline points="12,28 20,28 24,20 28,36 32,28 36,32 40,28 52,28" /></svg>;
const IconTreinamento = () => <img src="data:image/png;base64,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" alt="Treinamento de equipes" className="w-16 h-16 invert" />;
// Dados dos serviços
const servicesData = [
  { title: ["Gestão", "de fazendas"], icon: <IconGestao /> },
  { title: ["Planejamento", "estratégico"], icon: <IconPlanejamento /> },
  { title: ["Consultoria", "técnica"], icon: <IconConsultoria /> },
  { title: ["Plano De aquisição", "de Fazendas"], icon: <IconDiagnostico /> },
  { title: ["Treinamento", "de equipes"], icon: <IconTreinamento /> },
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
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {servicesData.map((service) => (
            <div key={service.title.join(' ')} className="bg-terra-dark-blue rounded-3xl p-6 text-center text-white flex flex-col items-center">
              <div className="mb-6 h-16 w-16 flex items-center justify-center">{service.icon}</div>
              <h3 className="text-xl font-lexend">
                {service.title.map((line, i) => <React.Fragment key={i}>{line}<br /></React.Fragment>)}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Definições dos ícones para manter o código principal limpo
