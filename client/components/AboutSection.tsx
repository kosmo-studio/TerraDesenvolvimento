export default function AboutSection() {
  return (
    <section className="py-16 px-4 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="bg-white rounded-3xl p-8">
              <img src="https://api.builder.io/api/v1/image/assets/TEMP/69204bfeffeba099d2457481d88ff001b35f1ae4?width=1172" alt="Rodrigo Patussi" className="w-full h-auto rounded-2xl" />
            </div>
          </div>
          <div className="space-y-6">
            <div className="text-center lg:text-left">
              <h2 className="text-4xl lg:text-5xl font-lexend text-terra-navy mb-2">
                <span className="font-normal">Rodrigo </span><span className="font-bold">Patussi</span>
              </h2>
              <p className="text-xl font-lexend text-terra-navy font-light">Sócio-diretor Terra</p>
            </div>
            <div className="space-y-4 text-center lg:text-left text-lg font-lexend text-terra-navy leading-relaxed">
              <p>Nos últimos 25 anos, a pecuária e o agronegócio brasileiro evoluíram significativamente, impulsionados pela necessidade de mudanças e maior eficiência "da porteira pra dentro". Nesse cenário, a Terra Desenvolvimento se destacou ao identificar a carência de segurança na tomada de decisões do setor.</p>
              <p>Enquanto práticas de gestão já consolidadas em outros segmentos ainda eram pouco aplicadas no campo, desenvolvemos, junto aos nossos clientes, uma metodologia sólida e prática, indo além da consultoria tradicional. Assumimos o papel de assessoria, atuando lado a lado com o produtor para implementar ferramentas de gestão eficientes e capacitá-lo a tomar decisões com autonomia.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}