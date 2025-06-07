
import { Palette, Send, Zap, CheckCircle, Shield, Rocket } from "lucide-react";

const steps = [
  {
    icon: Palette,
    number: "1️⃣",
    title: "Você escolhe o estilo",
    description: "Seleciona o design que combina com seu perfil profissional"
  },
  {
    icon: Send,
    number: "2️⃣",
    title: "Envia suas informações",
    description: "Passa dados, fotos e conteúdo que quer incluir"
  },
  {
    icon: Zap,
    number: "3️⃣",
    title: "Em até 3 dias seu site está no ar",
    description: "Pronto pra converter e impressionar"
  }
];

const HowItWorksSection = () => {
  return (
    <section id="como-funciona" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            COMO FUNCIONA <span className="gradient-text">(PASSO A PASSO VISUAL)</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Simples, rápido e sem complicação
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="text-center animate-fade-in relative"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="relative mb-8">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-primary rounded-2xl mb-4">
                  <step.icon className="w-10 h-10 text-primary-foreground" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-accent rounded-full flex items-center justify-center font-bold text-accent-foreground text-sm">
                  {step.number}
                </div>
              </div>
              
              <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
              <p className="text-muted-foreground text-lg leading-relaxed">{step.description}</p>
              
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-10 left-1/2 transform translate-x-12 w-16 h-0.5 bg-primary/30"></div>
              )}
            </div>
          ))}
        </div>

        {/* Vídeo do processo */}
        <div className="mt-20">
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-8">
            Veja todo o processo
          </h3>
          <div className="video-placeholder max-w-4xl mx-auto">
            <div className="text-center space-y-4">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary rounded-full">
                <Rocket className="text-primary-foreground" size={24} />
              </div>
              <div>
                <p className="font-semibold text-lg">Do zero ao ar</p>
                <p className="text-muted-foreground">Como criamos seu site profissional</p>
              </div>
            </div>
          </div>
        </div>

        {/* Garantia de poder */}
        <div className="text-center mt-16">
          <div className="inline-block bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/30 rounded-2xl p-8">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <Shield className="w-8 h-8 text-primary" />
              <h3 className="text-2xl font-bold">GARANTIA DE PODER</h3>
            </div>
            <div className="space-y-2">
              <p className="text-lg font-semibold">
                ⚠️ Garantia total: se não gostar, devolvemos seu dinheiro.
              </p>
              <p className="text-muted-foreground">
                Sem risco. Sem enrolação. Só resultado.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
