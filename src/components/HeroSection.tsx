
import { Button } from "@/components/ui/button";
import { Play, Star, TrendingUp, Users } from "lucide-react";
import Logo from "./Logo";

const HeroSection = () => {
  const scrollToAction = () => {
    const element = document.getElementById('como-funciona');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleVideoClick = () => {
    // Placeholder para quando o vídeo for adicionado
    console.log("Video clicked - replace with actual video");
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-7xl mx-auto">
        {/* Logo no topo */}
        <div className="flex justify-center mb-12">
          <Logo size="large" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left space-y-6 animate-fade-in">
            {/* Badge de social proof */}
            <div className="inline-flex items-center space-x-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 text-sm">
              <Users size={16} className="text-primary" />
              <span className="text-primary font-medium">+2.500 profissionais já transformaram sua presença online</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Tenha um{" "}
              <span className="gradient-text">site profissional</span>{" "}
              que faz você parecer <span className="text-primary">grande</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
              Sua <span className="text-primary font-semibold">página profissional</span> com 
              agendamento automático e design que impressiona,{" "}
              <span className="text-foreground font-semibold">sem mensalidades.</span>
            </p>

            {/* Estatísticas rápidas */}
            <div className="flex flex-wrap gap-6 pt-4">
              <div className="flex items-center space-x-2">
                <TrendingUp className="text-accent" size={20} />
                <span className="text-sm font-medium">87% mais agendamentos</span>
              </div>
              <div className="flex items-center space-x-2">
                <Star className="text-accent" size={20} />
                <span className="text-sm font-medium">4.9/5 satisfação</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-lg px-8 py-6 tech-glow"
                onClick={scrollToAction}
              >
                Quero meu site profissional
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold text-lg px-8 py-6"
                onClick={scrollToAction}
              >
                Ver exemplos reais
              </Button>
            </div>

            <div className="pt-4 text-sm text-muted-foreground">
              ✅ Entrega em até 3 dias • ✅ Sem mensalidade • ✅ Design que impressiona
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="space-y-6">
              {/* Placeholder para vídeo de exemplo */}
              <div 
                className="video-placeholder cursor-pointer group"
                onClick={handleVideoClick}
              >
                <div className="text-center space-y-4">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary rounded-full group-hover:scale-110 transition-transform">
                    <Play className="text-primary-foreground ml-1" size={24} />
                  </div>
                  <div>
                    <p className="font-semibold text-lg">Veja exemplos reais</p>
                    <p className="text-muted-foreground">Como nossos clientes ficaram após ter um site profissional</p>
                  </div>
                </div>
              </div>

              {/* Preview mockup */}
              <div className="relative max-w-sm mx-auto">
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-3xl blur-xl opacity-30 animate-glow"></div>
                <div className="relative bg-card border border-border rounded-3xl p-8">
                  <div className="space-y-4">
                    <div className="h-4 bg-primary rounded w-3/4"></div>
                    <div className="h-3 bg-muted rounded w-1/2"></div>
                    <div className="space-y-2">
                      <div className="h-12 bg-background rounded-lg border border-primary/30"></div>
                      <div className="h-12 bg-background rounded-lg border border-border"></div>
                      <div className="h-12 bg-background rounded-lg border border-border"></div>
                    </div>
                    <div className="h-10 bg-primary rounded-lg"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
