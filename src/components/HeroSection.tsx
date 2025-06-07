
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const scrollToAction = () => {
    const element = document.getElementById('como-funciona');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <div className="text-center lg:text-left space-y-6 animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Você merece um{" "}
            <span className="gradient-text">link que faz você</span>{" "}
            parecer <span className="text-tech-green">grande</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
            Sua <span className="text-tech-green font-semibold">vitrine digital</span> com 
            agendamento automático e design profissional,{" "}
            <span className="text-white font-semibold">sem mensalidades.</span>
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button 
              size="lg" 
              className="bg-tech-green hover:bg-tech-green/90 text-black font-bold text-lg px-8 py-6 tech-glow"
              onClick={scrollToAction}
            >
              Quero minha estrutura agora
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-tech-green text-tech-green hover:bg-tech-green hover:text-black font-semibold text-lg px-8 py-6"
              onClick={scrollToAction}
            >
              Ver como funciona
            </Button>
          </div>

          <div className="pt-4 text-sm text-muted-foreground">
            ✅ Entrega em até 3 dias úteis • ✅ Sem mensalidade • ✅ Design profissional
          </div>
        </div>

        <div className="flex justify-center lg:justify-end">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-tech-green to-tech-blue rounded-3xl blur-xl opacity-30 animate-glow"></div>
            <div className="relative bg-dark-card border border-dark-border rounded-3xl p-8 max-w-sm">
              <div className="space-y-4">
                <div className="h-4 bg-tech-green rounded w-3/4"></div>
                <div className="h-3 bg-muted rounded w-1/2"></div>
                <div className="space-y-2">
                  <div className="h-12 bg-dark-bg rounded-lg border border-tech-green/30"></div>
                  <div className="h-12 bg-dark-bg rounded-lg border border-dark-border"></div>
                  <div className="h-12 bg-dark-bg rounded-lg border border-dark-border"></div>
                </div>
                <div className="h-10 bg-tech-green rounded-lg"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
