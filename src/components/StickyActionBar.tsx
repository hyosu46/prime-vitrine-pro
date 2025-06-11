
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";

const StickyActionBar = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      setIsVisible(scrollPosition > windowHeight * 0.3);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleWhatsAppClick = () => {
    const message = "Oi! Quero meu site profissional da perfil.store 🚀";
    const whatsappUrl = `https://wa.me/5511999999999?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 elegant-card border-t border-cyan-400/20 p-3 sm:p-4 animate-fade-in">
      <div className="max-w-sm mx-auto px-2">
        <Button 
          onClick={handleWhatsAppClick}
          className="w-full elegant-button text-white font-bold text-sm sm:text-lg py-3 sm:py-4 px-4 sm:px-6 tech-glow transition-all duration-300 whitespace-nowrap overflow-hidden text-ellipsis"
        >
          <span className="hidden sm:inline">Quero meu site profissional</span>
          <span className="sm:hidden">Quero meu site</span>
          <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
        </Button>
        <p className="text-xs text-center text-elegant-text/70 mt-2">
          💬 Resposta rápida via WhatsApp
        </p>
      </div>
    </div>
  );
};

export default StickyActionBar;
