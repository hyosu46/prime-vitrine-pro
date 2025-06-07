
import { Target, Users, Trophy, Clock, DollarSign, Zap } from "lucide-react";

const points = [
  {
    icon: Target,
    text: "Você quer ser levado a sério pelos seus clientes"
  },
  {
    icon: Users,
    text: "Você perdeu cliente por não ter presença online profissional"
  },
  {
    icon: Trophy,
    text: "Você se sente pequeno perto da concorrência"
  },
  {
    icon: Clock,
    text: "Você quer automatizar seus agendamentos"
  },
  {
    icon: DollarSign,
    text: "Você não quer pagar mensalidade todo mês"
  },
  {
    icon: Zap,
    text: "Você quer algo rápido e sem complicação"
  }
];

const ForYouSection = () => {
  return (
    <section className="py-20 px-4 bg-card">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-6">
          É pra você se...
        </h2>
        <p className="text-xl text-muted-foreground mb-12">
          Reconhece alguma dessas situações?
        </p>

        <div className="grid md:grid-cols-2 gap-6 text-left">
          {points.map((point, index) => (
            <div 
              key={index}
              className="flex items-start space-x-4 p-6 rounded-xl hover:bg-background transition-colors animate-fade-in border border-border/50"
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
          <p className="text-lg">
            <span className="text-primary font-bold">Se você se identificou</span> com pelo menos 2 itens,
            a perfil.store foi feita para você! 🚀
          </p>
        </div>

        {/* Espaço para vídeo de depoimentos */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold mb-8">Veja o que nossos clientes falam</h3>
          <div className="video-placeholder">
            <div className="text-center space-y-4">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-accent rounded-full">
                <Users className="text-accent-foreground" size={24} />
              </div>
              <div>
                <p className="font-semibold text-lg">Depoimentos reais</p>
                <p className="text-muted-foreground">Veja como nossos clientes transformaram seus negócios</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForYouSection;
