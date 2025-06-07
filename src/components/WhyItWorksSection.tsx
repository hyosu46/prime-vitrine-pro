
import { Brain, Shield, Zap, Heart } from "lucide-react";

const WhyItWorksSection = () => {
  return (
    <section className="py-20 px-4 bg-card">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-12">
          <Brain className="w-16 h-16 text-primary mx-auto mb-6" />
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            ENTENDA POR QUE FUNCIONA
          </h2>
        </div>

        <div className="space-y-8 text-xl md:text-2xl leading-relaxed">
          <p className="font-semibold">
            Você não precisa de um site.
          </p>
          <p className="text-primary font-bold">
            Você precisa de um ambiente onde seu cliente:
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mt-12">
          <div className="bg-background border border-border rounded-2xl p-6">
            <Shield className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-3">Sinta confiança</h3>
            <p className="text-muted-foreground">Visual profissional que transmite credibilidade</p>
          </div>
          
          <div className="bg-background border border-border rounded-2xl p-6">
            <Zap className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-3">Veja estrutura</h3>
            <p className="text-muted-foreground">Organização clara que impressiona</p>
          </div>
          
          <div className="bg-background border border-border rounded-2xl p-6">
            <Heart className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-3">Tome decisão</h3>
            <p className="text-muted-foreground">Sem te perguntar nada</p>
          </div>
        </div>

        <div className="mt-12 p-6 bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 rounded-2xl">
          <p className="text-xl font-bold">
            E é <span className="text-primary">exatamente isso</span> que a perfil.store entrega.
          </p>
        </div>

        {/* Espaço para vídeo explicativo */}
        <div className="mt-16">
          <div className="video-placeholder">
            <div className="text-center space-y-4">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary rounded-full">
                <Brain className="text-primary-foreground" size={24} />
              </div>
              <div>
                <p className="font-semibold text-lg">A psicologia por trás</p>
                <p className="text-muted-foreground">Por que um site profissional converte</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyItWorksSection;
