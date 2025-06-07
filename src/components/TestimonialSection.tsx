
import { Star } from "lucide-react";

const TestimonialSection = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            O que nossos clientes dizem
          </h2>
        </div>

        <div className="bg-card border border-dark-border rounded-2xl p-8 md:p-12 text-center">
          <div className="flex justify-center mb-6">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-6 h-6 text-tech-green fill-current" />
            ))}
          </div>
          
          <blockquote className="text-xl md:text-2xl leading-relaxed mb-8 italic">
            "Cara, mudou minha vida! Antes eu parecia um amador, agora os clientes me levam a sério. 
            Em 2 semanas já paguei o investimento só com os agendamentos automáticos. 
            Melhor dinheiro que já gastei no meu negócio!"
          </blockquote>
          
          <div className="flex items-center justify-center space-x-4">
            <div className="w-12 h-12 bg-gradient-to-r from-tech-green to-tech-blue rounded-full flex items-center justify-center font-bold text-black">
              MC
            </div>
            <div className="text-left">
              <div className="font-bold text-lg">Marcos Costa</div>
              <div className="text-muted-foreground">Personal Trainer • São Paulo</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
