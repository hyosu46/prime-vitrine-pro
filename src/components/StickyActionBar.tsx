
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
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-t border-gray-200 animate-fade-in">
      <div className="w-full px-3 py-3 sm:px-4 sm:py-4">
        <div className="max-w-lg mx-auto">
          <Button 
            onClick={handleWhatsAppClick}
            className="w-full bg-gradient-to-r from-sitigon-500 to-purple-600 hover:from-sitigon-600 hover:to-purple-700 text-white font-bold tech-glow transition-all duration-300 text-sm sm:text-base md:text-lg px-4 py-3 sm:px-6 sm:py-4"
          >
            <span className="hidden sm:inline">Quero meu site profissional</span>
            <span className="sm:hidden">Quero meu site</span>
            <ArrowRight className="ml-1 sm:ml-2 w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
          </Button>
          <p className="text-xs text-center text-gray-600 mt-2">
            💬 Resposta rápida via WhatsApp
          </p>
        </div>
      </div>
    </div>
  );
};

export default StickyActionBar;
