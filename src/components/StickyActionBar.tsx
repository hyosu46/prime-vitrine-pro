
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
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-t border-border p-4 animate-fade-in">
      <div className="max-w-sm mx-auto">
        <Button 
          onClick={handleWhatsAppClick}
          className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-lg py-4 tech-glow"
        >
          Quero meu site profissional
          <ArrowRight className="ml-2 w-5 h-5" />
        </Button>
        <p className="text-xs text-center text-muted-foreground mt-2">
          💬 Resposta rápida via WhatsApp
        </p>
      </div>
    </div>
  );
};

export default StickyActionBar;
