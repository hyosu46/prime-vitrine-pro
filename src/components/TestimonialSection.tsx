
import { Star, Quote } from "lucide-react";

const TestimonialSection = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            O que nossos clientes dizem
          </h2>
        </div>

        <div className="bg-card border border-border rounded-2xl p-8 md:p-12 text-center relative overflow-hidden">
          {/* Quote icon decoration */}
          <div className="absolute top-6 left-6 opacity-20">
            <Quote className="w-16 h-16 text-primary" />
          </div>
          
          <div className="flex justify-center mb-6">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-6 h-6 text-accent fill-current" />
            ))}
          </div>
          
          <blockquote className="text-xl md:text-2xl leading-relaxed mb-8 italic relative z-10">
            "Cara, mudou minha vida profissional! Antes eu parecia um amador, agora os clientes me levam a sério. 
            Em 2 semanas já paguei o investimento só com os agendamentos automáticos. 
            Melhor dinheiro que já investi no meu negócio!"
          </blockquote>
          
          <div className="flex items-center justify-center space-x-4">
            <div className="w-12 h-12 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center font-bold text-primary-foreground">
              MC
            </div>
            <div className="text-left">
              <div className="font-bold text-lg">Marcos Costa</div>
              <div className="text-muted-foreground">Personal Trainer • São Paulo</div>
            </div>
          </div>
        </div>

        {/* Espaço para mais depoimentos em vídeo */}
        <div className="mt-16 grid md:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <div key={i} className="video-placeholder aspect-square">
              <div className="text-center space-y-2">
                <div className="w-8 h-8 bg-primary rounded-full mx-auto flex items-center justify-center">
                  <Star className="text-primary-foreground" size={16} />
                </div>
                <p className="text-sm font-medium">Depoimento {i}</p>
                <p className="text-xs text-muted-foreground">Cliente real</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
