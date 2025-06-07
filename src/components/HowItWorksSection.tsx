
import { Palette, Send, Zap } from "lucide-react";

const steps = [
  {
    icon: Palette,
    number: "01",
    title: "Você escolhe o modelo",
    description: "Seleciona o design que mais combina com seu estilo e negócio"
  },
  {
    icon: Send,
    number: "02",
    title: "Enviamos os dados",
    description: "Passa suas informações, fotos e links que quer incluir"
  },
  {
    icon: Zap,
    number: "03",
    title: "Pronto em até 72h",
    description: "Sua vitrine digital fica linda e funcionando perfeitamente"
  }
];

const HowItWorksSection = () => {
  return (
    <section id="como-funciona" className="py-20 px-4 bg-dark-card">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Como funciona?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Simples e rápido. Em 3 passos você tem sua presença digital profissional
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="text-center animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="relative mb-8">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-tech-green rounded-2xl mb-4">
                  <step.icon className="w-10 h-10 text-black" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-tech-blue rounded-full flex items-center justify-center font-bold text-black text-sm">
                  {step.number}
                </div>
              </div>
              
              <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
              <p className="text-muted-foreground text-lg leading-relaxed">{step.description}</p>
              
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-10 left-1/2 transform translate-x-12 w-16 h-0.5 bg-tech-green/30"></div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="inline-block bg-tech-green/10 border border-tech-green/30 rounded-2xl p-6">
            <p className="text-lg font-semibold">
              ⚡ <span className="text-tech-green">Garantia total:</span> Se não ficar satisfeito, devolvemos seu dinheiro!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
