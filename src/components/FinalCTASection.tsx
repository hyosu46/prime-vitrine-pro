
import { Button } from "@/components/ui/button";
import { ArrowRight, AlertTriangle, Zap, Shield, Clock } from "lucide-react";

const FinalCTASection = () => {
  const handleWhatsAppClick = () => {
    const message = "Oi! Quero meu site profissional da perfil.store 🚀";
    const whatsappUrl = `https://wa.me/5511999999999?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section className="py-20 px-4 section-gradient">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8">
          <AlertTriangle className="w-16 h-16 text-red-500 mx-auto mb-4" />
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            PARE DE PARECER PEQUENO.
          </h2>
          <p className="text-xl text-gray-600 mb-4">
            Sua concorrência já tem um site profissional.
          </p>
          <p className="text-2xl font-bold text-red-500 mb-8">
            Você vai continuar sendo só "mais um link no WhatsApp"?
          </p>
        </div>

        <div className="bg-gradient-to-r from-sitigon-50 to-purple-50 border border-sitigon-200 rounded-2xl p-8 mb-8">
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
            className="bg-gradient-to-r from-sitigon-500 to-purple-600 hover:from-sitigon-600 hover:to-purple-700 text-white font-bold text-xl px-12 py-6 tech-glow mb-6 transition-all duration-300"
            onClick={handleWhatsAppClick}
          >
            Quero meu site profissional agora
            <ArrowRight className="ml-2 w-6 h-6" />
          </Button>

          <div className="grid md:grid-cols-3 gap-4 text-sm">
            <div className="flex items-center justify-center space-x-2">
              <Shield className="w-5 h-5 text-sitigon-600" />
              <span>🔒 Seus dados estão seguros</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <Clock className="w-5 h-5 text-sitigon-600" />
              <span>⏱️ Entrega em até 72h</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <Zap className="w-5 h-5 text-sitigon-600" />
              <span>📞 Suporte rápido no WhatsApp</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;
