
import { Button } from "@/components/ui/button";
import { useState, useEffect, useRef } from "react";
import { CheckCircle, Star, Shield, Clock, Zap } from "lucide-react";

const BeaconPricingSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [priceAnimated, setPriceAnimated] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          setTimeout(() => setPriceAnimated(true), 300);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const valueItems = [
    { icon: Star, text: "Perfil completo com design premium" },
    { icon: Zap, text: "Sistema de agendamento automatizado" },
    { icon: Shield, text: "Estratégia de posicionamento personalizada" },
    { icon: Clock, text: "Consultoria de implementação incluída" },
    { icon: CheckCircle, text: "Suporte por 90 dias após entrega" }
  ];

  const handleWhatsAppClick = () => {
    const message = "Quero garantir minha vaga no Perfil Beacon por R$497! 🚀";
    const whatsappUrl = `https://wa.me/5511999999999?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section ref={sectionRef} className="section-spacing relative overflow-hidden">
      {/* Background sutil com imagens */}
      <div className="absolute inset-0 opacity-5 bg-gradient-to-br from-primary/10 to-accent/10"></div>
      
      <div className="container-beacon relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl lg:text-5xl font-playfair font-bold text-beacon-text-title mb-12">
            A Oferta <span className="gradient-text">Irresistível</span>
          </h2>

          {/* Lista de Valor */}
          <div className={`grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {valueItems.map((item, index) => (
              <div key={index} className="surface-card rounded-lg p-6 text-left">
                <div className="flex items-start space-x-3">
                  <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <p className="text-beacon-text-light leading-relaxed">{item.text}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Preço */}
          <div className="surface-card rounded-2xl p-12 mb-8">
            <div className="mb-6">
              <p className="text-2xl text-beacon-text-light/60 line-through mb-2">De R$ 2.970</p>
              <p className="text-lg text-beacon-text-light mb-4">por apenas</p>
            </div>

            <div className={`mb-6 transition-all duration-500 ${priceAnimated ? 'animate-scale-in opacity-100' : 'opacity-0'}`}>
              <span className="text-8xl lg:text-9xl font-bold font-playfair text-primary beacon-glow">
                R$ 497
              </span>
            </div>

            <p className="text-lg text-primary font-semibold mb-8 animate-pulse">
              🔥 Vagas limitadas - Apenas 15 por mês
            </p>

            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-xl px-16 py-8 beacon-glow transition-all duration-300 rounded-xl text-center w-full md:w-auto"
              onClick={handleWhatsAppClick}
            >
              GARANTIR MINHA VAGA AGORA
            </Button>

            <div className="grid md:grid-cols-3 gap-4 mt-8 text-sm">
              <div className="flex items-center justify-center space-x-2 text-beacon-text-light">
                <Shield className="w-4 h-4 text-primary" />
                <span>Pagamento 100% seguro</span>
              </div>
              <div className="flex items-center justify-center space-x-2 text-beacon-text-light">
                <Clock className="w-4 h-4 text-primary" />
                <span>Entrega em até 72h</span>
              </div>
              <div className="flex items-center justify-center space-x-2 text-beacon-text-light">
                <Zap className="w-4 h-4 text-primary" />
                <span>Suporte premium incluso</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BeaconPricingSection;
