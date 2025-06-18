import { AlertTriangle, Eye, TrendingDown } from "lucide-react";
const ProblemSection = () => {
  return <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-12">
          <Eye className="w-16 h-16 text-primary mx-auto mb-6" />
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            O PROBLEMA INVISÍVEL
          </h2>
        </div>

        <div className="space-y-8 text-xl md:text-2xl leading-relaxed">
          <p className="font-semibold">
            Você não perde clientes porque é ruim.
          </p>
          <p className="text-red-400 font-bold">
            Você perde porque parece amador.
          </p>
          <p className="text-muted-foreground">
            Ninguém confia em quem ainda "tá começando". Mesmo que você seja bom.
          </p>
        </div>

        <div className="mt-16 bg-gradient-to-r from-red-500/10 to-primary/10 border border-red-500/30 rounded-2xl p-8">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <AlertTriangle className="w-8 h-8 text-red-400" />
            <h3 className="text-2xl font-bold">A VERDADE SEM FILTRO</h3>
          </div>
          
          <div className="space-y-6 text-lg">
            <p className="flex items-center justify-center space-x-2">
              <TrendingDown className="w-6 h-6 text-red-400" />
              <span>Se o seu cliente precisa te perguntar se tem site,</span>
            </p>
            <p className="text-red-400 font-bold text-xl">
              é porque ele já achou você pequeno.
            </p>
            
            <div className="mt-8 p-6 bg-primary/10 border border-primary/30 rounded-xl">
              <p className="text-left leading-relaxed">Agora imagina se ele clica e encontra uma página que transborda confiança, com tudo no lugar: nome, serviços, agendamento automático, seus contatos, portifólio videos e o visual perfeito no celular.</p>
              <p className="text-primary font-bold text-xl mt-4">Você vira opção na hora!</p>
            </div>
          </div>
        </div>

        {/* Espaço para vídeo explicativo */}
        <div className="mt-16">
          <div className="video-placeholder">
            <div className="text-center space-y-4">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-red-500 rounded-full">
                <Eye className="text-white" size={24} />
              </div>
              <div>
                <p className="font-semibold text-lg">O problema que ninguém fala</p>
                <p className="text-muted-foreground">Por que você perde clientes sem saber</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default ProblemSection;