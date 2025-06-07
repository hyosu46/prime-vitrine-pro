
import { Clock, Palette, CreditCard, Zap } from "lucide-react";

const benefits = [
  {
    icon: Clock,
    title: "Agendamentos 24h",
    description: "Seus clientes podem agendar a qualquer hora, mesmo quando você está dormindo"
  },
  {
    icon: Palette,
    title: "Visual personalizado",
    description: "Design profissional que faz você parecer uma empresa grande"
  },
  {
    icon: CreditCard,
    title: "Sem mensalidade",
    description: "Pague uma vez e use para sempre. Sem surpresas no cartão"
  },
  {
    icon: Zap,
    title: "Entrega em 3 dias",
    description: "Sua vitrine digital fica pronta rapidinho, sem enrolação"
  }
];

const BenefitsSection = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Por que escolher a <span className="gradient-text">perfil.store</span>?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Porque você merece ter a mesma estrutura dos grandes, sem pagar como eles
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="bg-card border border-dark-border rounded-2xl p-6 card-hover text-center animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-tech-green/10 rounded-2xl mb-4">
                <benefit.icon className="w-8 h-8 text-tech-green" />
              </div>
              <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
