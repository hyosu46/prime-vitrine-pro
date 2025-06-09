
import { Button } from "@/components/ui/button";
import { Play, TrendingUp, Users, CheckCircle } from "lucide-react";
import Logo from "./Logo";

const HeroSection = () => {
  const scrollToAction = () => {
    const element = document.getElementById('como-funciona');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleVideoClick = () => {
    console.log("Video clicked - replace with actual video");
  };

  const handleWhatsAppClick = () => {
    const message = "Oi! Quero meu site profissional da perfil.store 🚀";
    const whatsappUrl = `https://wa.me/5511999999999?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Logo no topo */}
        <div className="flex justify-center mb-12">
          <Logo size="large" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left space-y-6 animate-fade-in">
            {/* Headline com tensão emocional */}
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Você parece{" "}
              <span className="text-red-500">pequeno demais</span>{" "}
              pra ser levado a sério?
            </h1>
            
            {/* Subheadline com promessa reversa */}
            <p className="text-xl text-gray-600 leading-relaxed">
              📱 Um <span className="gradient-text font-semibold">site profissional</span> que faz você parecer <span className="text-foreground font-semibold">grande</span>, atrair mais clientes e fechar sem esforço.
              <br />
              <span className="text-foreground font-semibold">Sem mensalidade. Entregue em até 72h.</span>
            </p>

            {/* Badge de social proof melhorado */}
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-sitigon-50 to-purple-50 border border-sitigon-200 rounded-full px-4 py-2 text-sm">
              <Users size={16} className="text-sitigon-600" />
              <span className="text-sitigon-700 font-medium">🔒 +2.500 profissionais já saíram do amadorismo com a perfil.store</span>
            </div>

            {/* Benefícios rápidos */}
            <div className="flex flex-wrap gap-6 pt-4">
              <div className="flex items-center space-x-2">
                <CheckCircle className="text-sitigon-500" size={20} />
                <span className="text-sm font-medium">Agendamentos 24h</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="text-sitigon-500" size={20} />
                <span className="text-sm font-medium">Visual Premium</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="text-sitigon-500" size={20} />
                <span className="text-sm font-medium">Pronto em até 3 dias</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-sitigon-500 to-purple-600 hover:from-sitigon-600 hover:to-purple-700 text-white font-bold text-lg px-8 py-6 tech-glow transition-all duration-300"
                onClick={handleWhatsAppClick}
              >
                Quero meu site agora
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-2 border-sitigon-500 text-sitigon-600 hover:bg-sitigon-500 hover:text-white font-semibold text-lg px-8 py-6 transition-all duration-300"
                onClick={handleVideoClick}
              >
                Ver transformações reais
              </Button>
            </div>

            {/* Estatística que mata dúvida */}
            <div className="pt-6 bg-gradient-to-r from-sitigon-50 to-purple-50 border border-sitigon-200 rounded-xl p-4">
              <p className="text-lg font-semibold text-center">
                <span className="gradient-text">87%</span> dos nossos clientes aumentaram seus agendamentos na primeira semana.
              </p>
              <p className="text-gray-600 text-center mt-1">
                💬 E 1 em cada 3 pagou o investimento em menos de 15 dias.
              </p>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="space-y-6">
              {/* Vídeo de contraste ANTES x DEPOIS */}
              <div 
                className="video-placeholder cursor-pointer group transition-all duration-300 hover:shadow-lg"
                onClick={handleVideoClick}
              >
                <div className="text-center space-y-4">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-sitigon-500 to-purple-600 rounded-full group-hover:scale-110 transition-transform">
                    <Play className="text-white ml-1" size={24} />
                  </div>
                  <div>
                    <p className="font-semibold text-lg">ANTES x DEPOIS</p>
                    <p className="text-gray-600">Veja a transformação completa</p>
                  </div>
                </div>
              </div>

              {/* Preview mockup */}
              <div className="relative max-w-sm mx-auto">
                <div className="absolute inset-0 bg-gradient-to-r from-sitigon-500 to-purple-600 rounded-3xl blur-xl opacity-30 animate-glow"></div>
                <div className="relative bg-white/80 backdrop-blur-sm border border-gray-200 rounded-3xl p-8 hover:shadow-xl transition-all duration-300">
                  <div className="space-y-4">
                    <div className="h-4 bg-gradient-to-r from-sitigon-500 to-purple-600 rounded w-3/4"></div>
                    <div className="h-3 bg-gray-200 rounded w-1/2"></div>
                    <div className="space-y-2">
                      <div className="h-12 bg-gray-50 rounded-lg border border-sitigon-200"></div>
                      <div className="h-12 bg-gray-50 rounded-lg border border-gray-200"></div>
                      <div className="h-12 bg-gray-50 rounded-lg border border-gray-200"></div>
                    </div>
                    <div className="h-10 bg-gradient-to-r from-sitigon-500 to-purple-600 rounded-lg"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
