
import { ArrowDown, ArrowUp, MessageCircle, Calendar, Users } from "lucide-react";

const ContrastSection = () => {
  return (
    <section className="py-20 px-4 bg-card">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            CONTRASTE VIOLENTO: <span className="text-red-400">ANTES</span> x <span className="text-primary">DEPOIS</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* ANTES */}
          <div className="bg-red-500/10 border border-red-500/30 rounded-2xl p-8 text-center">
            <div className="flex items-center justify-center space-x-2 mb-6">
              <ArrowDown className="w-8 h-8 text-red-400" />
              <h3 className="text-2xl font-bold text-red-400">ANTES</h3>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4 text-left">
                <MessageCircle className="w-6 h-6 text-red-400 mt-1 flex-shrink-0" />
                <p className="text-lg">Link sem cara de profissional</p>
              </div>
              <div className="flex items-start space-x-4 text-left">
                <MessageCircle className="w-6 h-6 text-red-400 mt-1 flex-shrink-0" />
                <p className="text-lg">Mensagem no WhatsApp que ninguém responde</p>
              </div>
              <div className="flex items-start space-x-4 text-left">
                <Users className="w-6 h-6 text-red-400 mt-1 flex-shrink-0" />
                <p className="text-lg">Concorrente fechando com seu cliente</p>
              </div>
            </div>
          </div>

          {/* DEPOIS */}
          <div className="bg-primary/10 border border-primary/30 rounded-2xl p-8 text-center">
            <div className="flex items-center justify-center space-x-2 mb-6">
              <ArrowUp className="w-8 h-8 text-primary" />
              <h3 className="text-2xl font-bold text-primary">DEPOIS</h3>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4 text-left">
                <Calendar className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                <p className="text-lg">Link que parece empresa grande</p>
              </div>
              <div className="flex items-start space-x-4 text-left">
                <Calendar className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                <p className="text-lg">Agendamento automático 24h</p>
              </div>
              <div className="flex items-start space-x-4 text-left">
                <Users className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                <p className="text-lg">Cliente chega pronto pra fechar</p>
              </div>
            </div>
          </div>
        </div>

        {/* Vídeo de demonstração */}
        <div className="mt-16">
          <div className="video-placeholder">
            <div className="text-center space-y-4">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary rounded-full">
                <ArrowUp className="text-primary-foreground" size={24} />
              </div>
              <div>
                <p className="font-semibold text-lg">Veja a transformação completa</p>
                <p className="text-muted-foreground">ANTES x DEPOIS real dos nossos clientes</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContrastSection;
