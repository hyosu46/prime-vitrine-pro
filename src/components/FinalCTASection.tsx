
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";

const FinalCTASection = () => {
  const handleWhatsAppClick = () => {
    const message = "Oi! Quero minha vitrine digital profissional da perfil.store 🚀";
    const whatsappUrl = `https://wa.me/5511999999999?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-6">
          Pare de parecer pequeno online
        </h2>
        <p className="text-xl text-muted-foreground mb-8">
          Sua concorrência já tem. Você vai ficar para trás?
        </p>

        <div className="bg-gradient-to-r from-tech-green/10 to-tech-blue/10 border border-tech-green/20 rounded-2xl p-8 mb-8">
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="flex items-center justify-center space-x-2">
              <CheckCircle className="w-6 h-6 text-tech-green" />
              <span className="font-semibold">Pagamento único</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <CheckCircle className="w-6 h-6 text-tech-green" />
              <span className="font-semibold">Entrega garantida</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <CheckCircle className="w-6 h-6 text-tech-green" />
              <span className="font-semibold">Suporte incluído</span>
            </div>
          </div>

          <Button 
            size="lg" 
            className="bg-tech-green hover:bg-tech-green/90 text-black font-bold text-xl px-12 py-6 tech-glow"
            onClick={handleWhatsAppClick}
          >
            Quero minha estrutura agora
            <ArrowRight className="ml-2 w-6 h-6" />
          </Button>
        </div>

        <p className="text-sm text-muted-foreground">
          🔒 Seus dados estão seguros • ⚡ Resposta em até 2 horas • 🚀 Começamos hoje mesmo
        </p>
      </div>
    </section>
  );
};

export default FinalCTASection;
