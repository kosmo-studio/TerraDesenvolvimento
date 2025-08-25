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
                  <span className="bg-terra-navy px-2 lg:px-4 py-1 lg:py-2 text-lg lg:text-2xl font-bold">
                    31 Bilhões
                  </span>
                  <span className="text-base lg:text-xl">
                    administrados em ativos
                  </span>
                </div>
                <div className="flex items-center gap-2 lg:gap-4">
                  <span className="bg-terra-navy px-2 lg:px-4 py-1 lg:py-2 text-lg lg:text-2xl font-bold">
                    400
                  </span>
                  <span className="text-base lg:text-xl">fazendas</span>
                </div>
                <div className="flex items-center gap-2 lg:gap-4">
                  <span className="bg-terra-navy px-2 lg:px-4 py-1 lg:py-2 text-lg lg:text-2xl font-bold">
                    1,5 Milhões
                  </span>
                  <span className="text-base lg:text-xl">
                    de Cabeças de Gado
                  </span>
                </div>
                <div className="flex items-center gap-2 lg:gap-4">
                  <span className="bg-terra-navy px-2 lg:px-4 py-1 lg:py-2 text-lg lg:text-2xl font-bold">
                    300mil
                  </span>
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
                Gestão
                <br />
                estratégica
                <br />
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
                Resultados
                <br />
                mensuráveis
                <br />
                em produtividade
                <br />e lucro
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
                Equipe
                <br />
                técnica
                <br />
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
                Presença
                <br />
                em diversas
                <br />
                regiões do
                <br />
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
                  Aplicadas nas
                  <br />
                  fazendas mais
                  <br />
                  bem-sucedidas do
                  <br />
                  Brasil, Paraguai
                  <br />e Bolívia.
                </h3>
              </div>

              <Button className="bg-terra-dark-blue hover:bg-terra-navy text-white px-8 py-4 text-lg font-lexend rounded-lg flex items-center gap-3">
                <svg
                  className="w-6 h-6"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413" />
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
                  <path
                    d="M3.87488 46.0888C2.96813 46.0219 2.18314 46.6544 2.05269 47.5426C1.91924 48.4314 2.49992 49.2687 3.37708 49.4617C9.71783 50.8399 15.448 51.4678 20.6511 51.4678C45.3026 51.4658 58.0637 37.3704 67.1333 22.3995L72.6206 25.6894C73.1926 26.0343 73.9125 26.0121 74.4635 25.6359C75.0176 25.2598 75.296 24.5977 75.1865 23.9395L71.6607 3.09881C71.5718 2.58515 71.2547 2.13632 70.7954 1.88589C70.336 1.63595 69.788 1.60778 69.3081 1.81216L50.6388 9.72535C50.0222 9.98618 49.6163 10.584 49.5987 11.2529C49.5807 11.9225 49.9543 12.5401 50.5556 12.8331L56.1823 15.5765C41.1721 48.6115 5.41559 46.21 3.87488 46.0888Z"
                    fill="white"
                  />
                  <path
                    d="M9.36041 67.896C6.06141 67.896 3.47351 71.1179 3.47351 75.2335V88.0914C3.47351 92.2075 6.06141 95.4294 9.36041 95.4294H17.4076C20.7096 95.4294 23.2943 92.2075 23.2943 88.0914V75.2335C23.2943 71.1179 20.7096 67.896 17.4076 67.896H9.36041Z"
                    fill="white"
                  />
                  <path
                    d="M33.6863 55.8396C30.3874 55.8396 27.8025 59.0615 27.8025 63.1776V88.0914C27.8025 92.2075 30.3874 95.4294 33.6863 95.4294H41.7368C45.0358 95.4294 47.6202 92.2075 47.6202 88.0914V63.1776C47.6202 59.0615 45.0358 55.8396 41.7368 55.8396H33.6863Z"
                    fill="white"
                  />
                  <path
                    d="M68.4636 41.3738H60.4165C57.1171 41.3738 54.5296 44.5957 54.5296 48.7108V88.0915C54.5296 92.2076 57.1171 95.4295 60.4165 95.4295H68.4636C71.7657 95.4295 74.3504 92.2076 74.3504 88.0915V48.7108C74.3504 44.5957 71.7657 41.3738 68.4636 41.3738Z"
                    fill="white"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-lexend">
                Gestão
                <br />
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
                Planejamento
                <br />
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
                Consultoria
                <br />
                técnica
              </h3>
            </div>

            {/* Service 4 - Diagnóstico produtivo */}
            <div className="bg-terra-dark-blue rounded-lg p-6 text-center text-white">
              <div className="mb-6 flex justify-center">
                <svg className="w-16 h-16" viewBox="0 0 81 87" fill="none">
                  <path
                    d="M14.8821 68.4557H28.1161V75.3613H16.2203C15.2001 75.3613 14.3743 76.1866 14.3743 77.2065V83.6696C14.3743 84.6901 15.2001 85.516 16.2203 85.516H65.1594C66.1796 85.516 67.0054 84.6901 67.0054 83.6696V77.2065C67.0054 76.1866 66.1796 75.3613 65.1594 75.3613H53.2635V68.4557H66.4975C73.7207 68.4557 79.5977 62.5801 79.5977 55.3566V15.0138C79.5977 7.79165 73.7207 1.91455 66.4975 1.91455H14.8821C7.6587 1.91455 1.7832 7.79165 1.7832 15.0138V55.3566C1.7832 62.5801 7.6587 68.4557 14.8821 68.4557Z"
                    fill="white"
                  />
                  <path
                    d="M14.3743 44.6802C14.3743 51.9032 20.2501 57.7789 27.4733 57.7789H53.9064C61.1295 57.7789 67.0054 51.9032 67.0054 44.6802V25.6905C67.0054 18.467 61.1295 12.5913 53.9064 12.5913H27.4733C20.2501 12.5913 14.3743 18.467 14.3743 25.6905V44.6802Z"
                    fill="white"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-lexend">
                Diagnóstico
                <br />
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
                Treinamento
                <br />
                de equipes
              </h3>
            </div>
          </div>
        </div>
      </section>

      {/* Client Testimonials Section */}
      <section className="py-16 px-4 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-6xl font-lexend text-terra-navy mb-8">
              <span className="font-normal">Com a Terra, passamos a</span>
              <br />
              <span className="font-bold">ter controle real da fazenda.</span>
            </h2>
          </div>

          {/* Video Section */}
          <div className="mb-16">
            <div className="relative w-full max-w-4xl mx-auto rounded-lg overflow-hidden">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/2e947ade489ad97b288f12b311ef0680f0dec37e?width=2132"
                alt="Depoimento de clientes Terra"
                className="w-full h-auto"
              />
              {/* Play button overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <button className="bg-black/50 rounded-full p-4 hover:bg-black/70 transition-colors">
                  <svg
                    className="w-12 h-12 text-white"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Clients Title */}
          <div className="text-center mb-8">
            <h3 className="text-4xl lg:text-5xl font-lexend text-terra-navy">
              <span className="font-normal">Clientes </span>
              <span className="font-bold">Terra</span>
            </h3>
            <p className="text-xl font-lexend text-terra-navy mt-4">
              Veja os depoimentos sobre nossas parceirias
            </p>
          </div>

          {/* Client Photos */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {/* Client 1 */}
            <div className="text-center">
              <div className="bg-terra-darker-blue rounded-lg overflow-hidden mb-4">
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/167d9d5be0b7a32e8a957e91ad9b3ddc29a5bc43?width=976"
                  alt="João Flavio Ribeiro"
                  className="w-full h-48 object-cover"
                />
              </div>
              <h4 className="text-lg font-lexend text-terra-navy">
                João Flavio
                <br />
                Ribeiro
              </h4>
            </div>

            {/* Client 2 */}
            <div className="text-center">
              <div className="bg-terra-darker-blue rounded-lg overflow-hidden mb-4">
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/54f0d73b5a636daaaf641a0963437a0134d3c773?width=918"
                  alt="Elton Silveira"
                  className="w-full h-48 object-cover"
                />
              </div>
              <h4 className="text-lg font-lexend text-terra-navy">
                Elton
                <br />
                Silveira
              </h4>
            </div>

            {/* Client 3 */}
            <div className="text-center">
              <div className="bg-terra-darker-blue rounded-lg overflow-hidden mb-4">
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/70c8a604db88b32610607b67b99da2fbcc47cae3?width=1294"
                  alt="Thiago Carminati"
                  className="w-full h-48 object-cover"
                />
              </div>
              <h4 className="text-lg font-lexend text-terra-navy">
                Thiago
                <br />
                Carminati
              </h4>
            </div>

            {/* Client 4 */}
            <div className="text-center">
              <div className="bg-terra-darker-blue rounded-lg overflow-hidden mb-4">
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/d6a113fdacb6ab6a2e890810ea54dee9a55fc46d?width=1336"
                  alt="Fernando Pinheiro Carneiro"
                  className="w-full h-48 object-cover"
                />
              </div>
              <h4 className="text-lg font-lexend text-terra-navy">
                Fernando
                <br />
                Pinheiro
                <br />
                Carneiro
              </h4>
            </div>

            {/* Client 5 */}
            <div className="text-center">
              <div className="bg-terra-darker-blue rounded-lg overflow-hidden mb-4">
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/ec671130f158f4501e49d9aa387e004ef26316ce?width=1450"
                  alt="Duarte de Castro Cunha"
                  className="w-full h-48 object-cover"
                />
              </div>
              <h4 className="text-lg font-lexend text-terra-navy">
                Duarte de
                <br />
                Castro
                <br />
                Cunha
              </h4>
            </div>
          </div>
        </div>
      </section>

      {/* Rodrigo Patussi Section */}
      <section className="py-16 px-4 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Image */}
            <div className="relative">
              <div className="bg-white rounded-3xl p-8 shadow-lg">
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/69204bfeffeba099d2457481d88ff001b35f1ae4?width=1172"
                  alt="Rodrigo Patussi"
                  className="w-full h-auto rounded-2xl"
                />
              </div>
            </div>

            {/* Right side - Content */}
            <div className="space-y-6">
              <div className="text-center lg:text-left">
                <h2 className="text-4xl lg:text-5xl font-lexend text-terra-navy mb-2">
                  <span className="font-normal">Rodrigo </span>
                  <span className="font-bold">Patussi</span>
                </h2>
                <p className="text-xl font-lexend text-terra-navy font-light">
                  Sócio-diretor Terra
                </p>
              </div>

              <div className="space-y-4">
                <p className="text-lg font-lexend text-terra-navy leading-relaxed">
                  Nos últimos 25 anos, a pecuária e o agronegócio brasileiro
                  evoluíram significativamente, impulsionados pela necessidade
                  de mudanças e maior eficiência "da porteira pra dentro". Nesse
                  cenário, a Terra Desenvolvimento se destacou ao identificar a
                  carência de segurança na tomada de decisões do setor.
                </p>
                <p className="text-lg font-lexend text-terra-navy leading-relaxed">
                  Enquanto práticas de gestão já consolidadas em outros
                  segmentos ainda eram pouco aplicadas no campo, desenvolvemos,
                  junto aos nossos clientes, uma metodologia sólida e prática,
                  indo além da consultoria tradicional. Assumimos o papel de
                  assessoria, atuando lado a lado com o produtor para
                  implementar ferramentas de gestão eficientes e capacitá-lo a
                  tomar decisões com autonomia.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl lg:text-5xl font-lexend text-terra-navy mb-8">
            <span className="font-normal">Seja você também um cliente </span>
            <span className="font-bold">Terra!</span>
          </h2>

          <Button className="bg-terra-dark-blue hover:bg-terra-navy text-white px-8 py-4 text-lg font-lexend rounded-lg flex items-center gap-3 mx-auto">
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413" />
            </svg>
            TRANSFORME SUA PRODUÇÃO
          </Button>
        </div>
      </section>

      {/* News Section */}
      <section className="py-16 px-4 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Article 1 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-sm">
              <div className="relative h-48">
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/4afcf9b3e3244ee38a3c8a36490ca3801377faa2?width=1130"
                  alt="5 Anos da Covid-19 no Brasil"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-lexend text-terra-navy leading-tight mb-4">
                  5 Anos da Covid-19 no Brasil: Lições de Resiliência e Inovação
                  no Agronegócio
                </h3>
                <a
                  href="#"
                  className="text-terra-blue font-lexend text-sm hover:underline mb-2 block"
                >
                  Leia mais
                </a>
                <p className="text-terra-gray font-lexend text-sm">
                  27 de fevereiro de 2025
                </p>
              </div>
            </div>

            {/* Article 2 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-sm">
              <div className="relative h-48">
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/b0f43d8df013d60e4ead90c956d34aa52002d4aa?width=1650"
                  alt="Passos para uma gestão eficiente"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-lexend text-terra-navy leading-tight mb-4">
                  Passos para uma gestão eficiente
                </h3>
                <a
                  href="#"
                  className="text-terra-blue font-lexend text-sm hover:underline mb-2 block"
                >
                  Leia mais
                </a>
                <p className="text-terra-gray font-lexend text-sm">
                  27 de fevereiro de 2025
                </p>
              </div>
            </div>

            {/* Article 3 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-sm">
              <div className="relative h-48">
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/3d1aa2e8f24ed563d6d90dc53929a40cc40cdd60?width=1600"
                  alt="Gestão baseada em números"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-lexend text-terra-navy leading-tight mb-4">
                  Gestão baseada em números: um alicerce fundamental para novos
                  gestores
                </h3>
                <a
                  href="#"
                  className="text-terra-blue font-lexend text-sm hover:underline mb-2 block"
                >
                  Leia mais
                </a>
                <p className="text-terra-gray font-lexend text-sm">
                  27 de fevereiro de 2025
                </p>
              </div>
            </div>

            {/* Article 4 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-sm">
              <div className="relative h-48">
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/fa844d3fafaf24c3a8bc6cea0b744ca4d4cfad92?width=1640"
                  alt="Gestão de alta performance"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-lexend text-terra-navy leading-tight mb-4">
                  Gestão de alta performance eleva desempenho pecuário
                </h3>
                <a
                  href="#"
                  className="text-terra-blue font-lexend text-sm hover:underline mb-2 block"
                >
                  Leia mais
                </a>
                <p className="text-terra-gray font-lexend text-sm">
                  27 de fevereiro de 2025
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-16 px-4 lg:px-8 bg-terra-light-gray overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 mix-blend-multiply">
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/1f94e8cfe959d7a96577b24040af5594cdf1fb57?width=3840"
            alt="Footer background"
            className="w-full h-full object-cover opacity-30"
          />
        </div>

        <div className="relative max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-terra-navy">
            {/* Company Info */}
            <div className="space-y-4">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/1d24384ce6f1f402995d9f1497ed944557f962dd?width=590"
                alt="Terra Logo"
                className="h-12 w-auto mb-4"
              />
              <p className="font-lexend text-sm">
                Desenvolvimento e gestão agropecuária
              </p>
              <div className="space-y-2 text-sm font-lexend">
                <p>📍 Endereço: Rua das Fazendas, 123</p>
                <p>📞 Telefone: (11) 99999-9999</p>
                <p>✉️ Email: contato@terra.com.br</p>
              </div>
            </div>

            {/* Services */}
            <div className="space-y-4">
              <h3 className="text-lg font-lexend font-bold">Serviços</h3>
              <ul className="space-y-2 text-sm font-lexend">
                <li>
                  <a href="#" className="hover:text-terra-blue">
                    Gestão de fazendas
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-terra-blue">
                    Planejamento estratégico
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-terra-blue">
                    Consultoria técnica
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-terra-blue">
                    Diagnóstico produtivo
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-terra-blue">
                    Treinamento de equipes
                  </a>
                </li>
              </ul>
            </div>

            {/* Company */}
            <div className="space-y-4">
              <h3 className="text-lg font-lexend font-bold">Empresa</h3>
              <ul className="space-y-2 text-sm font-lexend">
                <li>
                  <a href="#" className="hover:text-terra-blue">
                    Sobre nós
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-terra-blue">
                    Nossa equipe
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-terra-blue">
                    Resultados
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-terra-blue">
                    Trabalhe conosco
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-terra-blue">
                    Contato
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div className="space-y-4">
              <h3 className="text-lg font-lexend font-bold">Contato</h3>
              <div className="space-y-3">
                <Button className="bg-terra-green hover:bg-green-600 text-white px-4 py-2 text-sm font-lexend rounded-lg flex items-center gap-2 w-full">
                  <svg
                    className="w-4 h-4"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413" />
                  </svg>
                  WhatsApp
                </Button>
                <div className="flex space-x-3">
                  <a href="#" className="text-terra-navy hover:text-terra-blue">
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                    </svg>
                  </a>
                  <a href="#" className="text-terra-navy hover:text-terra-blue">
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z" />
                    </svg>
                  </a>
                  <a href="#" className="text-terra-navy hover:text-terra-blue">
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-terra-navy/20 mt-12 pt-8 text-center">
            <p className="text-sm font-lexend text-terra-navy">
              © 2025 Terra Desenvolvimento Agropecuário. Todos os direitos
              reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
