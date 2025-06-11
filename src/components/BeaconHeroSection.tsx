
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

const BeaconHeroSection = () => {
  const [progressValue, setProgressValue] = useState(0);
  const [animationStarted, setAnimationStarted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimationStarted(true);
      // Animar progresso após 400ms
      setTimeout(() => {
        setProgressValue(23);
      }, 400);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  const handleWhatsAppClick = () => {
    const message = "Quero meu Perfil de Referência Beacon 🚀";
    const whatsappUrl = `https://wa.me/5511999999999?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section className="section-spacing">
      <div className="container-beacon text-center">
        {/* Tag de Posicionamento */}
        <div className={`inline-block mb-6 md:mb-8 ${animationStarted ? 'animate-fade-in-up opacity-100' : 'opacity-0'}`}>
          <span className="px-4 md:px-6 py-2 bg-primary/10 border border-primary/30 rounded-full text-primary font-medium text-xs md:text-sm tracking-wider uppercase">
            Posicionamento para Profissionais de Elite
          </span>
        </div>

        {/* H1 Principal - Otimizado para Mobile */}
        <h1 className={`font-playfair mobile-title font-bold leading-[1.1] text-beacon-text-title mb-4 md:mb-6 px-2 ${animationStarted ? 'animate-fade-in-up opacity-100' : 'opacity-0'}`}>
          VOCÊ PODE CONTINUAR PARECENDO PEQUENO…{" "}
          <span className="gradient-text">OU PODE VIRAR REFERÊNCIA</span>{" "}
          EM 72 HORAS.
        </h1>

        {/* Parágrafo - Responsivo */}
        <p className={`max-w-[650px] mx-auto mobile-subtitle text-beacon-text-light leading-relaxed mb-6 md:mb-8 px-4 delay-150 ${animationStarted ? 'animate-fade-in-up opacity-100' : 'opacity-0'}`}>
          Transforme seu "link da bio" em um ativo que qualifica, agenda e converte clientes para você. 
          <span className="text-primary font-semibold"> Sem esforço, sem mensalidade.</span>
        </p>

        {/* Botão CTA - Mobile Friendly */}
        <div className={`mb-8 md:mb-12 delay-300 px-4 ${animationStarted ? 'animate-fade-in-up opacity-100' : 'opacity-0'}`}>
          <Button 
            size="lg" 
            className="w-full md:w-auto bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-base md:text-lg px-6 md:px-12 py-4 md:py-6 beacon-glow transition-all duration-300 rounded-xl"
            onClick={handleWhatsAppClick}
          >
            QUERO MEU PERFIL DE REFERÊNCIA
          </Button>
        </div>

        {/* Barra de Progresso - Mobile Otimizada */}
        <div className={`max-w-md mx-auto delay-400 px-4 ${animationStarted ? 'animate-fade-in-up opacity-100' : 'opacity-0'}`}>
          <div className="flex justify-between items-center mb-2">
            <span className="text-xs md:text-sm font-medium text-beacon-text-light">VAGAS DE CONSULTORIA PREENCHIDAS</span>
            <span className="text-xs md:text-sm font-bold text-primary">{progressValue}%</span>
          </div>
          <div className="w-full bg-secondary rounded-full h-2 md:h-3">
            <div 
              className="bg-gradient-to-r from-primary to-accent h-2 md:h-3 rounded-full transition-all duration-1000 ease-out beacon-glow"
              style={{ width: `${progressValue}%` }}
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BeaconHeroSection;
