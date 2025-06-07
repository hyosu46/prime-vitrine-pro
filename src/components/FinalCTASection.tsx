
import { Button } from "@/components/ui/button";
import { ArrowRight, AlertTriangle, Zap, Shield, Clock } from "lucide-react";

const FinalCTASection = () => {
  const handleWhatsAppClick = () => {
    const message = "Oi! Quero meu site profissional da perfil.store 🚀";
    const whatsappUrl = `https://wa.me/5511999999999?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8">
          <AlertTriangle className="w-16 h-16 text-red-400 mx-auto mb-4" />
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            PARE DE PARECER PEQUENO.
          </h2>
          <p className="text-xl text-muted-foreground mb-4">
            Sua concorrência já tem um site profissional.
          </p>
          <p className="text-2xl font-bold text-red-400 mb-8">
            Você vai continuar sendo só "mais um link no WhatsApp"?
          </p>
        </div>

        <div className="bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 rounded-2xl p-8 mb-8">
          <div className="space-y-6 mb-8">
            <p className="text-2xl font-bold">
              💥 Escolha parecer grande agora.
            </p>
            <p className="text-xl">
              💬 Clique abaixo e comece ainda hoje.
            </p>
          </div>

          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-xl px-12 py-6 tech-glow mb-6"
            onClick={handleWhatsAppClick}
          >
            Quero meu site profissional agora
            <ArrowRight className="ml-2 w-6 h-6" />
          </Button>

          <div className="grid md:grid-cols-3 gap-4 text-sm">
            <div className="flex items-center justify-center space-x-2">
              <Shield className="w-5 h-5 text-primary" />
              <span>🔒 Seus dados estão seguros</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <Clock className="w-5 h-5 text-primary" />
              <span>⏱️ Entrega em até 72h</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <Zap className="w-5 h-5 text-primary" />
              <span>📞 Suporte rápido no WhatsApp</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;
