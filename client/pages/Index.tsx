import Header from "../components/Header";
import { Button } from "@/components/ui/button";

export default function Index() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative w-full">
        <div className="relative bg-terra-red rounded-3xl mx-4 lg:mx-8 mt-8 overflow-hidden">
          {/* Background Image */}
          <div className="relative h-[500px] lg:h-[700px]">
            <img 
              src="https://api.builder.io/api/v1/image/assets/TEMP/8f78dc573f7569fd2ddf77f5838a9e4da197f79b?width=3478" 
              alt="Terra - Homem com equipamento agrícola" 
              className="absolute inset-0 w-full h-full object-cover"
            />
            
            {/* Statistics Overlay */}
            <div className="absolute top-4 right-4 lg:top-8 lg:right-8 bg-white/10 backdrop-blur-sm rounded-lg p-4 lg:p-6">
              <div className="space-y-2 lg:space-y-4 text-white">
                <div className="flex items-center gap-2 lg:gap-4">
                  <span className="bg-terra-navy px-2 lg:px-4 py-1 lg:py-2 text-lg lg:text-2xl font-bold">31 Bilhões</span>
                  <span className="text-base lg:text-xl">administrados em ativos</span>
                </div>
                <div className="flex items-center gap-2 lg:gap-4">
                  <span className="bg-terra-navy px-2 lg:px-4 py-1 lg:py-2 text-lg lg:text-2xl font-bold">400</span>
                  <span className="text-base lg:text-xl">fazendas</span>
                </div>
                <div className="flex items-center gap-2 lg:gap-4">
                  <span className="bg-terra-navy px-2 lg:px-4 py-1 lg:py-2 text-lg lg:text-2xl font-bold">1,5 Milhões</span>
                  <span className="text-base lg:text-xl">de Cabeças de Gado</span>
                </div>
                <div className="flex items-center gap-2 lg:gap-4">
                  <span className="bg-terra-navy px-2 lg:px-4 py-1 lg:py-2 text-lg lg:text-2xl font-bold">300mil</span>
                  <span className="text-base lg:text-xl">HA Agricultura</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Innovation Section */}
      <section className="py-16 px-4 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl lg:text-6xl font-lexend font-bold text-terra-navy mb-8">
            <span className="font-bold">Inovação </span>
            <span className="font-normal">para transformar</span>
            <br />
            <span className="font-normal">sua fazenda em</span>
            <span className="font-bold"> resultado!</span>
          </h2>
        </div>
      </section>

      {/* Innovation Cards Section */}
      <section className="py-8 px-4 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Card 1 */}
            <div className="text-center">
              <div className="relative h-64 mb-6 rounded-lg overflow-hidden">
                <img 
                  src="https://api.builder.io/api/v1/image/assets/TEMP/f21655c2f91616d8262a8ad0e815d99752e5409a?width=1112" 
                  alt="Gestão estratégica" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-2xl font-lexend text-terra-navy leading-tight">
                Gestão<br />
                estratégica<br />
                com dados
              </h3>
            </div>

            {/* Card 2 */}
            <div className="text-center">
              <div className="relative h-64 mb-6 rounded-lg overflow-hidden">
                <img 
                  src="https://api.builder.io/api/v1/image/assets/TEMP/a6100926d96bc3f3cad361a2814524dc1a37b991?width=3110" 
                  alt="Resultados mensuráveis" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-2xl font-lexend text-terra-navy leading-tight">
                Resultados<br />
                mensuráveis<br />
                em produtividade<br />
                e lucro
              </h3>
            </div>

            {/* Card 3 */}
            <div className="text-center">
              <div className="relative h-64 mb-6 rounded-lg overflow-hidden">
                <img 
                  src="https://api.builder.io/api/v1/image/assets/TEMP/b235a756c1a6ba66ccb2e8b1a7714f4379864397?width=2310" 
                  alt="Equipe técnica" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-2xl font-lexend text-terra-navy leading-tight">
                Equipe<br />
                técnica<br />
                especializada
              </h3>
            </div>

            {/* Card 4 */}
            <div className="text-center">
              <div className="relative h-64 mb-6 rounded-lg overflow-hidden">
                <img 
                  src="https://api.builder.io/api/v1/image/assets/TEMP/9089e08c231ce6623565496d8afe658391eb6208?width=1440" 
                  alt="Presença regional" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-2xl font-lexend text-terra-navy leading-tight">
                Presença<br />
                em diversas<br />
                regiões do<br />
                Brasil
              </h3>
            </div>
          </div>
        </div>
      </section>

      {/* Methodologies Section */}
      <section className="py-16 px-4 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Image */}
            <div className="relative">
              <img 
                src="https://api.builder.io/api/v1/image/assets/TEMP/706d9d071baa3da7c9afaf17bf4f386dded6b8df?width=3748" 
                alt="Metodologias e métricas comprovadas" 
                className="w-full h-full object-cover rounded-3xl"
              />
            </div>

            {/* Right side - Content */}
            <div className="space-y-8">
              <h2 className="text-4xl lg:text-6xl font-lexend text-terra-navy text-center">
                <span className="font-normal">Metodologias e métricas</span>
                <br />
                <span className="font-bold">comprovadas</span>
              </h2>

              <div className="space-y-6">
                <h3 className="text-4xl lg:text-6xl font-lexend font-bold text-terra-navy">
                  Aplicadas nas<br />
                  fazendas mais<br />
                  bem-sucedidas do<br />
                  Brasil, Paraguai<br />
                  e Bolívia.
                </h3>
              </div>

              <Button className="bg-terra-dark-blue hover:bg-terra-navy text-white px-8 py-4 text-lg font-lexend rounded-lg flex items-center gap-3">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413"/>
                </svg>
                SOLICITE UM PLANO DE AÇÃO PERSONALIZADO
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-4 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-6xl font-lexend text-terra-navy">
              <span className="font-normal">Serviços </span>
              <span className="font-bold">Terra</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {/* Service 1 - Gestão de fazendas */}
            <div className="bg-terra-dark-blue rounded-lg p-6 text-center text-white">
              <div className="mb-6 flex justify-center">
                <svg className="w-16 h-16" viewBox="0 0 77 97" fill="none">
                  <path d="M3.87488 46.0888C2.96813 46.0219 2.18314 46.6544 2.05269 47.5426C1.91924 48.4314 2.49992 49.2687 3.37708 49.4617C9.71783 50.8399 15.448 51.4678 20.6511 51.4678C45.3026 51.4658 58.0637 37.3704 67.1333 22.3995L72.6206 25.6894C73.1926 26.0343 73.9125 26.0121 74.4635 25.6359C75.0176 25.2598 75.296 24.5977 75.1865 23.9395L71.6607 3.09881C71.5718 2.58515 71.2547 2.13632 70.7954 1.88589C70.336 1.63595 69.788 1.60778 69.3081 1.81216L50.6388 9.72535C50.0222 9.98618 49.6163 10.584 49.5987 11.2529C49.5807 11.9225 49.9543 12.5401 50.5556 12.8331L56.1823 15.5765C41.1721 48.6115 5.41559 46.21 3.87488 46.0888Z" fill="white"/>
                  <path d="M9.36041 67.896C6.06141 67.896 3.47351 71.1179 3.47351 75.2335V88.0914C3.47351 92.2075 6.06141 95.4294 9.36041 95.4294H17.4076C20.7096 95.4294 23.2943 92.2075 23.2943 88.0914V75.2335C23.2943 71.1179 20.7096 67.896 17.4076 67.896H9.36041Z" fill="white"/>
                  <path d="M33.6863 55.8396C30.3874 55.8396 27.8025 59.0615 27.8025 63.1776V88.0914C27.8025 92.2075 30.3874 95.4294 33.6863 95.4294H41.7368C45.0358 95.4294 47.6202 92.2075 47.6202 88.0914V63.1776C47.6202 59.0615 45.0358 55.8396 41.7368 55.8396H33.6863Z" fill="white"/>
                  <path d="M68.4636 41.3738H60.4165C57.1171 41.3738 54.5296 44.5957 54.5296 48.7108V88.0915C54.5296 92.2076 57.1171 95.4295 60.4165 95.4295H68.4636C71.7657 95.4295 74.3504 92.2076 74.3504 88.0915V48.7108C74.3504 44.5957 71.7657 41.3738 68.4636 41.3738Z" fill="white"/>
                </svg>
              </div>
              <h3 className="text-xl font-lexend">
                Gestão<br />
                de fazendas
              </h3>
            </div>

            {/* Service 2 - Planejamento estratégico */}
            <div className="bg-terra-dark-blue rounded-lg p-6 text-center text-white">
              <div className="mb-6 flex justify-center">
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/b8f4f0e150b3e30ba36c9d5193849bd7812277da?width=210"
                  alt="Planejamento estratégico"
                  className="w-16 h-12"
                />
              </div>
              <h3 className="text-xl font-lexend">
                Planejamento<br />
                estratégico
              </h3>
            </div>

            {/* Service 3 - Consultoria técnica */}
            <div className="bg-terra-dark-blue rounded-lg p-6 text-center text-white">
              <div className="mb-6 flex justify-center">
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/28e229fca138ab4c4258735fceaf7ded9685f8ed?width=156"
                  alt="Consultoria técnica"
                  className="w-16 h-16"
                />
              </div>
              <h3 className="text-xl font-lexend">
                Consultoria<br />
                técnica
              </h3>
            </div>

            {/* Service 4 - Diagnóstico produtivo */}
            <div className="bg-terra-dark-blue rounded-lg p-6 text-center text-white">
              <div className="mb-6 flex justify-center">
                <svg className="w-16 h-16" viewBox="0 0 81 87" fill="none">
                  <path d="M14.8821 68.4557H28.1161V75.3613H16.2203C15.2001 75.3613 14.3743 76.1866 14.3743 77.2065V83.6696C14.3743 84.6901 15.2001 85.516 16.2203 85.516H65.1594C66.1796 85.516 67.0054 84.6901 67.0054 83.6696V77.2065C67.0054 76.1866 66.1796 75.3613 65.1594 75.3613H53.2635V68.4557H66.4975C73.7207 68.4557 79.5977 62.5801 79.5977 55.3566V15.0138C79.5977 7.79165 73.7207 1.91455 66.4975 1.91455H14.8821C7.6587 1.91455 1.7832 7.79165 1.7832 15.0138V55.3566C1.7832 62.5801 7.6587 68.4557 14.8821 68.4557Z" fill="white"/>
                  <path d="M14.3743 44.6802C14.3743 51.9032 20.2501 57.7789 27.4733 57.7789H53.9064C61.1295 57.7789 67.0054 51.9032 67.0054 44.6802V25.6905C67.0054 18.467 61.1295 12.5913 53.9064 12.5913H27.4733C20.2501 12.5913 14.3743 18.467 14.3743 25.6905V44.6802Z" fill="white"/>
                </svg>
              </div>
              <h3 className="text-xl font-lexend">
                Diagnóstico<br />
                produtivo
              </h3>
            </div>

            {/* Service 5 - Treinamento de equipes */}
            <div className="bg-terra-dark-blue rounded-lg p-6 text-center text-white">
              <div className="mb-6 flex justify-center">
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/21118aa4bb982a515dcca3dfb4a542cba0332dd9?width=172"
                  alt="Treinamento de equipes"
                  className="w-16 h-16"
                />
              </div>
              <h3 className="text-xl font-lexend">
                Treinamento<br />
                de equipes
              </h3>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
