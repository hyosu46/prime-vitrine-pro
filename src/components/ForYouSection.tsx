
import { Target, Users, Trophy, Clock, DollarSign, Zap } from "lucide-react";

const points = [
  {
    icon: Users,
    text: "Já perdeu cliente por parecer amador"
  },
  {
    icon: Trophy,
    text: "Se sente pequeno diante da concorrência"
  },
  {
    icon: Clock,
    text: "Quer automatizar agendamentos"
  },
  {
    icon: DollarSign,
    text: "Cansou de pagar mensalidade"
  },
  {
    icon: Zap,
    text: "Precisa de algo pronto, simples e profissional"
  },
  {
    icon: Target,
    text: "Quer ser levado a sério pelos clientes"
  }
];

const ForYouSection = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-6">
          PRA QUEM É ESSA <span className="gradient-text">ESTRUTURA</span>?
        </h2>
        <p className="text-xl text-muted-foreground mb-12">
          Essa estrutura é pra você se...
        </p>

        <div className="grid md:grid-cols-2 gap-6 text-left">
          {points.map((point, index) => (
            <div 
              key={index}
              className="flex items-start space-x-4 p-6 rounded-xl hover:bg-card transition-colors animate-fade-in border border-border/50"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                <point.icon className="w-6 h-6 text-primary" />
              </div>
              <p className="text-lg font-medium pt-3">{point.text}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 p-6 bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 rounded-2xl">
          <p className="text-xl">
            Se você se identificou com <span className="text-primary font-bold">pelo menos 2 desses</span>...
          </p>
          <p className="text-2xl font-bold mt-2">
            A perfil.store foi feita para você! 🚀
          </p>
        </div>

        {/* Espaço para vídeo de identificação */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold mb-8">Reconhece essas situações?</h3>
          <div className="video-placeholder">
            <div className="text-center space-y-4">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-accent rounded-full">
                <Target className="text-accent-foreground" size={24} />
              </div>
              <div>
                <p className="font-semibold text-lg">Situações reais</p>
                <p className="text-muted-foreground">Veja se você se identifica</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForYouSection;
