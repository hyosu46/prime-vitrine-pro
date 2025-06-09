
import { ArrowDown, ArrowUp, MessageCircle, Calendar, Users } from "lucide-react";

const ContrastSection = () => {
  return (
    <section className="py-20 px-4 section-special">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            CONTRASTE VIOLENTO: <span className="text-red-500">ANTES</span> x <span className="gradient-text">DEPOIS</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* ANTES */}
          <div className="bg-red-50 border border-red-200 rounded-2xl p-8 text-center transition-all duration-300 hover:shadow-lg">
            <div className="flex items-center justify-center space-x-2 mb-6">
              <ArrowDown className="w-8 h-8 text-red-500" />
              <h3 className="text-2xl font-bold text-red-500">ANTES</h3>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4 text-left">
                <MessageCircle className="w-6 h-6 text-red-500 mt-1 flex-shrink-0" />
                <p className="text-lg">Link sem cara de profissional</p>
              </div>
              <div className="flex items-start space-x-4 text-left">
                <MessageCircle className="w-6 h-6 text-red-500 mt-1 flex-shrink-0" />
                <p className="text-lg">Mensagem no WhatsApp que ninguém responde</p>
              </div>
              <div className="flex items-start space-x-4 text-left">
                <Users className="w-6 h-6 text-red-500 mt-1 flex-shrink-0" />
                <p className="text-lg">Concorrente fechando com seu cliente</p>
              </div>
            </div>
          </div>

          {/* DEPOIS */}
          <div className="bg-white/80 backdrop-blur-sm border border-sitigon-200 rounded-2xl p-8 text-center transition-all duration-300 hover:shadow-lg">
            <div className="flex items-center justify-center space-x-2 mb-6">
              <ArrowUp className="w-8 h-8 text-sitigon-600" />
              <h3 className="text-2xl font-bold gradient-text">DEPOIS</h3>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4 text-left">
                <Calendar className="w-6 h-6 text-sitigon-600 mt-1 flex-shrink-0" />
                <p className="text-lg">Link que parece empresa grande</p>
              </div>
              <div className="flex items-start space-x-4 text-left">
                <Calendar className="w-6 h-6 text-sitigon-600 mt-1 flex-shrink-0" />
                <p className="text-lg">Agendamento automático 24h</p>
              </div>
              <div className="flex items-start space-x-4 text-left">
                <Users className="w-6 h-6 text-sitigon-600 mt-1 flex-shrink-0" />
                <p className="text-lg">Cliente chega pronto pra fechar</p>
              </div>
            </div>
          </div>
        </div>

        {/* Vídeo de demonstração */}
        <div className="mt-16">
          <div className="video-placeholder hover:shadow-lg transition-all duration-300">
            <div className="text-center space-y-4">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-sitigon-500 to-purple-600 rounded-full">
                <ArrowUp className="text-white" size={24} />
              </div>
              <div>
                <p className="font-semibold text-lg">Veja a transformação completa</p>
                <p className="text-gray-600">ANTES x DEPOIS real dos nossos clientes</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContrastSection;
