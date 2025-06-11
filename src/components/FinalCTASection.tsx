
import { Button } from "@/components/ui/button";
import { ArrowRight, AlertTriangle, Zap, Shield, Clock } from "lucide-react";

const FinalCTASection = () => {
  const handleWhatsAppClick = () => {
    const message = "Oi! Quero meu site profissional da perfil.store 🚀";
    const whatsappUrl = `https://wa.me/5511999999999?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section className="py-12 sm:py-20 px-4 section-gradient">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8">
          <AlertTriangle className="w-12 h-12 sm:w-16 sm:h-16 text-red-400 mx-auto mb-4 animate-float" />
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-elegant-text">
            PARE DE PARECER PEQUENO.
          </h2>
          <p className="text-lg sm:text-xl text-elegant-text/80 mb-4">
            Sua concorrência já tem um site profissional.
          </p>
          <p className="text-xl sm:text-2xl font-bold text-red-400 mb-8">
            Você vai continuar sendo só "mais um link no WhatsApp"?
          </p>
        </div>

        <div className="elegant-card rounded-2xl p-6 sm:p-8 mb-8">
          <div className="space-y-6 mb-8">
            <p className="text-xl sm:text-2xl font-bold text-elegant-text">
              💥 Escolha parecer grande agora.
            </p>
            <p className="text-lg sm:text-xl text-elegant-text/80">
              💬 Clique abaixo e comece ainda hoje.
            </p>
          </div>

          <Button 
            size="lg" 
            className="elegant-button text-white font-bold text-lg sm:text-xl px-8 sm:px-12 py-4 sm:py-6 tech-glow mb-6 transition-all duration-300 w-full sm:w-auto"
            onClick={handleWhatsAppClick}
          >
            <span className="hidden sm:inline">Quero meu site profissional agora</span>
            <span className="sm:hidden">Quero meu site agora</span>
            <ArrowRight className="ml-2 w-5 h-5 sm:w-6 sm:h-6" />
          </Button>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
            <div className="flex items-center justify-center space-x-2 text-elegant-text/70">
              <Shield className="w-5 h-5 text-cyan-400" />
              <span>🔒 Seus dados estão seguros</span>
            </div>
            <div className="flex items-center justify-center space-x-2 text-elegant-text/70">
              <Clock className="w-5 h-5 text-cyan-400" />
              <span>⏱️ Entrega em até 72h</span>
            </div>
            <div className="flex items-center justify-center space-x-2 text-elegant-text/70">
              <Zap className="w-5 h-5 text-cyan-400" />
              <span>📞 Suporte rápido no WhatsApp</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;
