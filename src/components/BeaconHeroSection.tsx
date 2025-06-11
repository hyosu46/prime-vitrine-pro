
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
        <div className={`inline-block mb-8 ${animationStarted ? 'animate-fade-in-up opacity-100' : 'opacity-0'}`}>
          <span className="px-6 py-2 bg-primary/10 border border-primary/30 rounded-full text-primary font-medium text-sm tracking-wider uppercase">
            Posicionamento para Profissionais de Elite
          </span>
        </div>

        {/* H1 Principal */}
        <h1 className={`font-playfair text-6xl lg:text-7xl xl:text-8xl font-bold leading-[1.1] text-beacon-text-title mb-6 ${animationStarted ? 'animate-fade-in-up opacity-100' : 'opacity-0'}`}>
          VOCÊ PODE CONTINUAR PARECENDO PEQUENO…{" "}
          <span className="gradient-text">OU PODE VIRAR REFERÊNCIA</span>{" "}
          EM 72 HORAS.
        </h1>

        {/* Parágrafo */}
        <p className={`max-w-[650px] mx-auto text-xl text-beacon-text-light leading-relaxed mb-8 delay-150 ${animationStarted ? 'animate-fade-in-up opacity-100' : 'opacity-0'}`}>
          Transforme seu "link da bio" em um ativo que qualifica, agenda e converte clientes para você. 
          <span className="text-primary font-semibold"> Sem esforço, sem mensalidade.</span>
        </p>

        {/* Botão CTA */}
        <div className={`mb-12 delay-300 ${animationStarted ? 'animate-fade-in-up opacity-100' : 'opacity-0'}`}>
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-lg px-12 py-6 beacon-glow transition-all duration-300 rounded-xl"
            onClick={handleWhatsAppClick}
          >
            QUERO MEU PERFIL DE REFERÊNCIA
          </Button>
        </div>

        {/* Barra de Progresso */}
        <div className={`max-w-md mx-auto delay-400 ${animationStarted ? 'animate-fade-in-up opacity-100' : 'opacity-0'}`}>
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium text-beacon-text-light">VAGAS DE CONSULTORIA PREENCHIDAS</span>
            <span className="text-sm font-bold text-primary">{progressValue}%</span>
          </div>
          <div className="w-full bg-secondary rounded-full h-3">
            <div 
              className="bg-gradient-to-r from-primary to-accent h-3 rounded-full transition-all duration-1000 ease-out beacon-glow"
              style={{ width: `${progressValue}%` }}
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BeaconHeroSection;
