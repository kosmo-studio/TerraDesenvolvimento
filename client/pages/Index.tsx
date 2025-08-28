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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
            {/* Card 1 */}
            <div className="text-left">
              <div className="relative h-[550px] mb-6 rounded-3xl overflow-hidden">
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
            <div className="text-left">
              <div className="relative h-[550px] mb-6 rounded-3xl overflow-hidden">
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
            <div className="text-left">
              <div className="relative h-[550px] mb-6 rounded-3xl overflow-hidden">
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
            <div className="text-left">
              <div className="relative h-[550px] mb-6 rounded-3xl overflow-hidden">
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
      <section className="lg:px-8 ">
        <div className="mx-auto">
          <h2 className="text-4xl lg:text-6xl font-lexend text-terra-navy text-center mb-10">
            <span className="font-normal">Metodologias e métricas</span>
            <br />
            <span className="font-bold">comprovadas</span>
          </h2>

          <div className="relative rounded-3xl overflow-hidden w-full h-[780px] mx-auto">
            <img
              src="/images/Camada 4 (1).png"
              alt="Metodologias e métricas comprovadas"
              className="w-full h-full object-cover object-bottom"
            />

            <div className="absolute inset-0 flex items-start px-6 lg:px-64 text-terra-navy mt-10">
              <div className="flex flex-col lg:flex-row justify-between items-start w-full gap-8">
                <div className="lg:max-w-md">
                  <h3 className="text-2xl lg:text-5xl font-bold mb-6">
                    Aplicadas nas fazendas mais bem-sucedidas do Brasil, Paraguai e Bolívia.
                  </h3>
                </div>

                <div className="space-y-3 text-lg font-semibold lg:text-3xl ">
                  <p>
                    <span className="bg-terra-navy text-white px-2 py-1 rounded">31 Bilhões</span> administrados em ativos
                  </p>
                  <p>
                    <span className="bg-terra-navy text-white px-2 py-1 rounded">400</span> fazendas
                  </p>
                  <p>
                    <span className="bg-terra-navy text-white px-2 py-1 rounded">1,5 Milhões</span> de Cabeças de Gado
                  </p>
                  <p>
                    <span className="bg-terra-navy text-white px-2 py-1 rounded">300 mil</span> HA Agricultura
                  </p>
                </div>
              </div>
            </div>

            <div className="absolute bottom-32 left-64">
              <button className="inline-flex items-center bg-terra-navy text-white px-5 py-3 rounded-lg shadow-lg hover:bg-terra-navy/90 transition">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="w-5 h-5 mr-2"
                >
                  <path d="M16.75 2h-9.5C5.23 2 4 3.23 4 4.75v14.5C4 20.77 5.23 22 6.75 22h9.5c1.52 0 2.75-1.23 2.75-2.75V4.75C19.5 3.23 18.27 2 16.75 2zM12 21c-.69 0-1.25-.56-1.25-1.25S11.31 18.5 12 18.5s1.25.56 1.25 1.25S12.69 21 12 21zM17 17H7V5h10v12z" />
                </svg>
                SOLICITE UM PLANO DE AÇÃO PERSONALIZADO
              </button>
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
            <div className="bg-terra-dark-blue rounded-3xl p-6 text-center text-white">
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
            <div className="bg-terra-dark-blue rounded-3xl p-6 text-center text-white">
            <div className="mb-6 flex justify-center">
              <svg className="w-16 h-16" viewBox="0 0 64 64" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
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
            </div>
              <h3 className="text-xl font-lexend">
                Planejamento
                <br />
                estratégico
              </h3>
            </div>

            {/* Service 3 - Consultoria técnica */}
            <div className="bg-terra-dark-blue rounded-3xl p-6 text-center text-white">
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
            <div className="bg-terra-dark-blue rounded-3xl p-6 text-center text-white">
              <div className="mb-6 flex justify-center">
                <svg className="w-16 h-16" viewBox="0 0 64 64" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
                  <rect x="8" y="8" width="48" height="36" rx="4" ry="4" />
                  
                  <line x1="32" y1="44" x2="32" y2="52" />
                  <rect x="24" y="52" width="16" height="4" rx="1" />

                  <polyline points="12,28 20,28 24,20 28,36 32,28 36,32 40,28 52,28" />
                </svg>
              </div>
              <h3 className="text-xl font-lexend ">
                Diagnóstico
                <br />
                produtivo
              </h3>
            </div>

            {/* Service 5 - Treinamento de equipes */}
            <div className="bg-terra-dark-blue rounded-3xl p-6 text-center text-white">
              <div className="mb-6 flex justify-center">
                <svg width="86" height="94" viewBox="0 0 86 94" xmlns="http://www.w3.org/2000/svg">
                  <filter id="whiteFilter">
                    <feColorMatrix type="matrix" values="
                      0 0 0 0 1
                      0 0 0 0 1
                      0 0 0 0 1
                      0 0 0 1 0"/>
                  </filter>
                  <image
                    width="86"
                    height="94"
                    href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFYAAABeCAMAAACO2xOoAAAB8lBMVEUAAAAnJSUoJSUnJSUmJiYnJSQAAAAnJSUAAAAnJCUnJSUmJSVAQEAnJiYnJSUnJSUnJSUgICAnJSUqKiozMzMoJSUnJSUnJSUoJCQnJSUnJCQoJSUiIiInJSUnJSUnJSUmJiYoJSUnJSUnJSUnJSUnJSUoJCQoJCQqKionJSUmJCQmJCQnJyclJSUnJSUmJiYnJSUnJSUnJSUnJSUpJCQnJSUgICAoKCgnJSUnJSUnJCQmJCQnJCQmJSUnJiYoJCQmJiYnJSUnJSUkJCQoJSUnJSUnJCQnJSUnJCQjIyMoJiYpISEkJCQnJSUmJiYtHh4mJCQlJSUmJSUpKSknJSUnJiYnJiYmJSUmJiYnJSUmJSUnJSUmJSUnJiYnJSUnJiYnJSUnJiYoJSUpIiImJSUnJSUnJSUkJCQmJiYuLi4pJCQpIyMmJiYlJSUnJCQoJiYnJSUmJiYnJiYmJiYnJCQnJSUnJSUnJSUmJSUnJSUnJCQnJSUnJSUnJCQnJSUnJCQjIyMmJSUrKysoJCQoKCgmJiYoJSUnJyckJCQnJCQkJCQoJSUoKCgoJiYoJCQpJSUnJiYnJycpJSUmJSUoJSUoJSUmJCQqJCQcHBwzGhomJiYqICAkJCQnJCQnJycmJiYmJiYsISEoJSUnJycoJCQmJia7enlhAAAApnRSTlMA/2DwUP8D/QH/+v8EsObu6wj8BgVt6YtA9HBaD8DKw0PV0Lj18k05DPmMahoppFjikOTfMtgQE5irm4VbsueNUchnHKf20ntUFocfMYRJEX83lhluqpymPN7U2qCV1qJv4K4lx7XMIxsLOCwvPctfxTa3ZU91gnytj6i8kmmeYh3bEkYgKGYhFa8OUi2AlGC+J0W6dFNdKwkKchgHeDQUaxfODaFEVtjfzgAAB0ZJREFUeJzlWfdfE0kUn0dID53QIypSpIrSRRGRKlVF6YqgUhRUQMR61rOfvfe7+z/vO7vZzbZkYxJ/uq8fycybme/Ozrx5781bFkBKbuV4KtlHh5dLFFJTPIprHLWTa7yyKsWg1ZOTTG6yEjmtZFk36mGIlHULScjI8Wib726SWzm2VITHWrFFMchNrXfVze8SuXy8dCW+qgc9MeGhcFiHLE4MG+u5Gd9ceoszJL5TNn/ayWf40l8r5jNPPmPOeiYJHTcV+2t3+Mx3flK0F0BwILCenkne3WbGalvCa00G1jPlAIZdDLTHk5MeqliOosN9M9r76HRU9ZyHkKzK1SUsSp5qREot0ajJdG27iGo/q0R5e/GWUqUCz7iuGfMYsnOhac+hy2ON7Dpk9/zlE0Qu9WQZSy8k6gtN20dkSdfIBlxEJ/zlCaJ83aBGsu4JTbuH6KROmE90w1+EHhzXte8m2hqaditRpk7YQNYCf9FHVK1rvxQO7VOdEKrp8xdPQmkNHkutoWlnjWbTGFiZUqJdunacNP3KqHDc6MFQuhZ/8Q204qymec5OtD807X4MK9fIzkLW5S+XbNPPLJPIrh2jQTmerN0zvEG7bK2xjrRZ1VwD/dNrjwbYE1evSrIZRA1yrQ3TTX6iaD4Ii5a6aEa7iGfvPKgQPEkm2vZHoF6GpyQVydUsbn0HzVgZG+QWNkuurnI7WabswC0WXSzitjH932FeuWxqF2FsLjvdRMMv+RFO6T/FhzWpOxwS3Ma2JV9HtlA6kGbOylgat7DkLmz1jWEdgUPaybzlbyDCStleRzisjDm84ixEJC3re9Q/TeSOifublsPhkXIcLsU+CUi8VK9tzCuDgtm+lmVWt3gX4EbyVkyMrYhuLxyZZ8FbWp1Z9hXv/6OsRtn8oINoImByPW9h5bWG3QBt0MON93I17XsS2fcFmtPzsaGUvC7q4Jkvgm+meDPW+THebe9HcckqBnfwqiugcC3i4jhp+lXCcyFi4Cj804S2Uuo5XpDgy5Bjmwf+5mIc7g7u0wOYfoY/V0OzFqHL7HkhmpFQe4Prpthsw7tkz7CXp8AuIPV5c5pwQALnzgBpeOfkw47459IwV8FjjyMBBTEeqUIphxfq3zxtmphcK6rjlTzozWle6FXFPwJG+LnPsbqpmdd+VPUdnbj2ul+wXHPQYyECcUwRTelCPca8OBcjjH3Y7lpTn42SSjrP2Gcoi5H7gLOiF/iFMXPnGrTP49jxE34Fj+9WyHtvkR0+O1dnTEV0byfajV/s516tuxcAM5GBeTpyXJQoEzi82ymD1wrIPWV4wuHNOqD6hW4Dv8yRJfmiCzuc9j7RhtzGlvi4nua5yP3acFiX4IuK8XfBsD2tneijSIZII78NhRHsvviAVRgk41D1NjSjma1B74OYVsQPE2LJ8SWVkotsnfjbL0rg66aNRzGEuaXsGNGrIO0bRD+l8kiilaAy5/mcOa4SHQsyDIwFPB7QBxEioGJJcqX7FVarVN7baaLOIMMQ8tUynGXhLBhgH+49gRDdlq8gcqQSGWklB+KHQgY1a7cYgxt+4cSJSKA4uVzHPVSQYdz9MMlK+D2DGk6S1lJDW67shZfSgp1W1gK2yA9loK+ktY1qp6P63cTqcuMM8Bf+Ac3fFGumpGUPmo2GCSPj4nIfBVl2I6hoY4ffRFtNd34HrU0RtP1PkXcuN66rJqyAL2yk3cwX/Wt7Ywy3rR/3F/kU+rgDjAEcuFAKsMBsAdlvYkLLAxzqyHmRztKHenhMZK+KAesRPsEVycnOb8CWuC5EzToDg5ykjFrjYAinotYI3E/sgdiSYx3TN7lgmqINivVMLbLhaj4eJS0yI7pLKo8FtXfkX8RlOHGtrATLfSQ6WsQS+lAKmZND0dEi3NRPDEHklehocZfx6oQIyYKFNGHCMM/zk+hadLQIqHSZoHrzzIgZbkKZtLlcnluciY52AEFuo1r0HmZSTiRGCp4ReKuSNEEStQ3rxs3EpbjIOhAwU36YeYEQ2MfN7cbf/tpdnuOwmF1bwwHMApiaVmfKa5YfIutD2biuxQDL2DZFTLjja0xYGbuHm4KE1IaBGLECQw1CsoDGdsdiWQWsLGXyG0R978LiPH493tnB6BVByFBukd2OIx5WgiajZs0Sg4PZIzXf6g72t4hrEa0VZ3VyjkV5N7C6lBnJCMCzJDlr+MrErzPClSbjdREsWGtUy9sLngR8Eyvz8XMAzsouhAg8epKSvxEB9/zCOaGUXpGVVexPy32AzxASLhFiETGiPlvP2HcsRxQB0zVcQY0OVQm+oQS7gJvDBjVQJ2QlVJK1NmLaIWyNUZpHtJbK9PUvoRPBonFmZAA6FuzibwrEA6eCNOF7Wk+ktPCFwRLviM1MPlAFhSfVGfRNkUSNVHPnsC+d8cb4B14iQtp7khkQ0xv+HIacJrFESMu/USqhTJ6gnBEhrWNYSs3qDCP+bw+WkOL4Dz6D4L7vCV5BAAAAAElFTkSuQmCC"
                    filter="url(#whiteFilter)"
                  />
                </svg>
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
              <span className="font-light">Com a Terra, passamos a</span>
              <br />
              <span className="font-bold">ter controle real da fazenda.</span>
            </h2>
          </div>

          {/* Video Section */}
          <div className="mb-16">
            <div className="relative w-full max-w-4xl mx-auto rounded-3xl overflow-hidden">
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
          <div className="grid grid-cols-2 md:grid-cols-5 gap-2">
            {/* Client 1 */}
            <div className="text-center">
              <div className="bg-terra-darker-blue rounded-3xl overflow-hidden mb-4">
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/167d9d5be0b7a32e8a957e91ad9b3ddc29a5bc43?width=976"
                  alt="João Flavio Ribeiro"
                  className="w-full h-80 object-cover"
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
              <div className="bg-terra-darker-blue rounded-3xl overflow-hidden mb-4">
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/54f0d73b5a636daaaf641a0963437a0134d3c773?width=918"
                  alt="Elton Silveira"
                  className="w-full h-80 object-cover"
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
              <div className="bg-terra-darker-blue rounded-3xl overflow-hidden mb-4">
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/70c8a604db88b32610607b67b99da2fbcc47cae3?width=1294"
                  alt="Thiago Carminati"
                  className="w-full h-80 object-cover"
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
              <div className="bg-terra-darker-blue rounded-3xl overflow-hidden mb-4">
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/d6a113fdacb6ab6a2e890810ea54dee9a55fc46d?width=1336"
                  alt="Fernando Pinheiro Carneiro"
                  className="w-full h-80 object-cover"
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
              <div className="bg-terra-darker-blue rounded-3xl overflow-hidden mb-4">
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/ec671130f158f4501e49d9aa387e004ef26316ce?width=1450"
                  alt="Duarte de Castro Cunha"
                  className="w-full h-80 object-cover"
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
      <section className="py-16 px-4 lg:px-8 ">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="relative">
              <div className="bg-white rounded-3xl p-8 ">
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/69204bfeffeba099d2457481d88ff001b35f1ae4?width=1172"
                  alt="Rodrigo Patussi"
                  className="w-full h-auto rounded-2xl"
                />
              </div>
            </div>

            {/* Content */}
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
          <a
            href="https://wa.me/*numero*?text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20os%20servi%C3%A7os%20da%20Terra"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="bg-terra-dark-blue hover:bg-terra-navy text-white px-8 py-4 text-lg font-lexend rounded-lg flex items-center gap-3 mx-auto">
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413" />
              </svg>
              TRANSFORME SUA PRODUÇÃO
            </Button>
          </a>
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
        <div className="relative max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-terra-navy">
            {/* Company Info */}
            <div className="space-y-4">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/1d24384ce6f1f402995d9f1497ed944557f962dd?width=590"
                alt="Terra Logo"
                className="h-12 w-auto mb-4"
              />
              <p className="font-lexend text-sm pr-8">
                Com a TERRA você tem todos os números da sua fazenda na mão, em tempo real, permitindo traçar estratégias, fazer previsões e, principalmente, 
                agir e tornar a fazenda eficiente
              </p>
            </div>

            {/* Services */}
            <div className="space-y-4">
              <h3 className="text-lg font-lexend font-bold">Menu</h3>
              <ul className="space-y-2 text-sm font-lexend">
                <li>
                  <a href="#" className="hover:text-terra-blue">
                    Institucional
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-terra-blue">
                    Capacitação
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-terra-blue">
                    Notícias
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-terra-blue">
                    Trabalhe conosco
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-terra-blue">
                    Área Do Associado
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-terra-blue">
                    Portal da LGPD
                  </a>
                </li>
              </ul>
            </div>

            {/* Company */}
            <div className="space-y-4">
              <h3 className="text-lg font-lexend font-bold">Produtos</h3>
              <ul className="space-y-2 text-sm font-lexend">
                <li>
                  <a href="#" className="hover:text-terra-blue">
                    Gestão de Fazendas
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-terra-blue">
                    Planejamento Estratégico Rural
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-terra-blue">
                    Consultoria Técnica Agropecuária
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-terra-blue">
                    Diagnóstico Produtivo
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-terra-blue">
                    Treinamento de Equipes
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-terra-blue">
                    Monitoramento de Indicadores
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-terra-blue">
                    Avaliação de Desempenho Operacional
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
                    <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" id="X--Streamline-Simple-Icons" height="24" width="24">
                      <desc>
                        X Streamline Icon: https://streamlinehq.com
                      </desc>
                      <title>X</title>
                      <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8 -7.584 -6.638 7.584H0.474l8.6 -9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" fill="#152946" stroke-width="1"></path>
                    </svg>
                  </a>
                  <a href="#" className="text-terra-navy hover:text-terra-blue">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-6 h-6"
                    >
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                      <line x1="17.5" y1="6.5" x2="17.5" y2="6.5"></line>
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
                <div className="space-y-2 text-sm font-lexend">
                  <p>📍 Endereço: Rua São Paulo, 1568 - Vila Gomes CEP 79022-140 / Campo Grande - MS</p>
                  <p>📞 Telefone: (67) 3026-3442</p>
                  <p>✉️ Email: contato@terradesenvolvimento.com.br</p>
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
