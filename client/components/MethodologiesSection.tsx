export default function MethodologiesSection() {
  return (
    <section className="p-4 lg:p-8">
      <div className="relative rounded-3xl overflow-hidden w-full min-h-[600px] lg:h-[75vh] flex items-center">
        {/* Imagem de fundo */}
        <img
          src="/images/metodologia.png"
          alt="Homem no campo de soja"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Gradiente (mantido como estava) */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/30 to-transparent -z-10" />

        {/* Conteúdo */}
        <div className="relative z-10 p-8 md:p-16 w-full flex flex-col justify-between h-full max-w-7xl mx-auto text-terra-navy">
          
          {/* Parte de cima: título + estatísticas */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <h3 className="text-3xl lg:text-5xl font-bold w-96">
              Aplicadas nas fazendas mais bem-sucedidas do Brasil, Paraguai e Bolívia.
            </h3>

            <div className="space-y-4 text-lg font-semibold lg:text-3xl w-full">
              <p><span className="bg-terra-navy text-white px-2 py-1 rounded">31 Bilhões</span> administrados em ativos</p>
              <p><span className="bg-terra-navy text-white px-2 py-1 rounded">400</span> fazendas</p>
              <p><span className="bg-terra-navy text-white px-2 py-1 rounded">1,5 Milhão</span> de Cabeças de Gado</p>
              <p><span className="bg-terra-navy text-white px-2 py-1 rounded">300 mil</span> HA Agricultura</p>
            </div>
          </div>

          {/* Parte de baixo: botão */}
          <div className="mt-8">
             <a target="_blank" href="https://wa.me/556730263442">
            <button className="inline-flex items-center bg-terra-navy text-white px-5 py-3 rounded-lg shadow-lg hover:bg-terra-navy/90 transition w-fit">
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5 mr-2">
                <path d="M16.75 2h-9.5C5.23 2 4 3.23 4 4.75v14.5C4 20.77 5.23 22 6.75 22h9.5c1.52 0 2.75-1.23 2.75-2.75V4.75C19.5 3.23 18.27 2 16.75 2zM12 21c-.69 0-1.25-.56-1.25-1.25S11.31 18.5 12 18.5s1.25.56 1.25 1.25S12.69 21 12 21zM17 17H7V5h10v12z" />
              </svg>
             SOLICITE UM PLANO DE AÇÃO PERSONALIZADO
            </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
