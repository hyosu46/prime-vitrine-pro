import { Clock, Palette, CreditCard, Zap, Smartphone, TrendingUp, Shield, Heart } from "lucide-react";
const benefits = [{
  icon: Clock,
  title: "Agendamentos 24h",
  description: "Seus clientes podem agendar a qualquer hora, mesmo quando você está dormindo"
}, {
  icon: Palette,
  title: "Design que impressiona",
  description: "Visual profissional que faz você parecer uma empresa grande e confiável"
}, {
  icon: CreditCard,
  title: "Sem mensalidade",
  description: "Pague uma vez e use para sempre. Sem surpresas no cartão"
}, {
  icon: Zap,
  title: "Entrega em 3 dias",
  description: "Seu site profissional fica pronto rapidinho, sem enrolação"
}, {
  icon: Smartphone,
  title: "Perfeito no celular",
  description: "Funciona perfeitamente em qualquer dispositivo, sempre carregando rápido"
}, {
  icon: TrendingUp,
  title: "Mais conversões",
  description: "Design otimizado para converter visitantes em clientes pagantes"
}, {
  icon: Shield,
  title: "Seguro e confiável",
  description: "Tecnologia profissional com hospedagem segura e rápida"
}, {
  icon: Heart,
  title: "Suporte incluído",
  description: "Ajudamos você sempre que precisar, sem custo adicional"
}];
const BenefitsSection = () => {
  return <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Por que escolher a <span className="gradient-text">perfil.store</span>?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Porque você merece ter o mesmo nível profissional dos grandes, sem pagar como eles
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => <div key={index} className="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-2xl p-6 card-hover text-center animate-fade-in" style={{
          animationDelay: `${index * 0.1}s`
        }}>
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-sitigon-500 to-purple-600 rounded-2xl mb-4">
                <benefit.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
              <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
            </div>)}
        </div>

        {/* Seção de vídeo de demonstração */}
        <div className="mt-20 text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-8">
            Veja a diferença de ter um site profissional
          </h3>
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <div className="video-placeholder hover:shadow-lg transition-all duration-300">
              <div className="text-center space-y-4">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-red-500 rounded-full">
                  <Smartphone className="text-white" size={24} />
                </div>
                <div>
                  <p className="font-semibold text-lg text-red-500">ANTES</p>
                  <p className="text-gray-600">Link simples que não converte</p>
                </div>
              </div>
            </div>
            <div className="video-placeholder hover:shadow-lg transition-all duration-300">
              <div className="text-center space-y-4">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-sitigon-500 to-purple-600 rounded-full">
                  <TrendingUp className="text-white" size={24} />
                </div>
                <div>
                  <p className="font-semibold text-lg gradient-text">DEPOIS</p>
                  <p className="text-gray-600">Site profissional que impressiona</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default BenefitsSection;