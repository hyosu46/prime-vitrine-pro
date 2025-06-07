
import { Star, Quote, Users } from "lucide-react";

const TestimonialSection = () => {
  return (
    <section className="py-20 px-4 bg-card">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            DEPOIMENTOS REAIS + <span className="gradient-text">EFEITO DE REDE</span>
          </h2>
        </div>

        {/* Depoimento principal */}
        <div className="bg-background border border-border rounded-2xl p-8 md:p-12 text-center relative overflow-hidden mb-8">
          <div className="absolute top-6 left-6 opacity-20">
            <Quote className="w-16 h-16 text-primary" />
          </div>
          
          <div className="flex justify-center mb-6">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-6 h-6 text-accent fill-current" />
            ))}
          </div>
          
          <blockquote className="text-xl md:text-2xl leading-relaxed mb-8 italic relative z-10">
            "Já fechei 4 atendimentos só com agendamento automático"
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

        {/* Segundo depoimento */}
        <div className="bg-background border border-border rounded-2xl p-8 md:p-12 text-center relative overflow-hidden">
          <div className="absolute top-6 right-6 opacity-20">
            <Quote className="w-16 h-16 text-accent" />
          </div>
          
          <div className="flex justify-center mb-6">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-6 h-6 text-accent fill-current" />
            ))}
          </div>
          
          <blockquote className="text-xl md:text-2xl leading-relaxed mb-8 italic relative z-10">
            "Eu era invisível. Hoje pareço uma empresa grande e me procuram todos os dias."
          </blockquote>
          
          <div className="flex items-center justify-center space-x-4">
            <div className="w-12 h-12 bg-gradient-to-r from-accent to-primary rounded-full flex items-center justify-center font-bold text-primary-foreground">
              LR
            </div>
            <div className="text-left">
              <div className="font-bold text-lg">Lívia Rocha</div>
              <div className="text-muted-foreground">Consultora de Imagem • Rio de Janeiro</div>
            </div>
          </div>
        </div>

        {/* Vídeos de depoimentos */}
        <div className="mt-16 grid md:grid-cols-3 gap-6">
          {[
            { name: "Personal Trainer", city: "SP" },
            { name: "Consultora", city: "RJ" },
            { name: "Esteticista", city: "MG" }
          ].map((client, i) => (
            <div key={i} className="video-placeholder aspect-square">
              <div className="text-center space-y-2">
                <div className="w-8 h-8 bg-primary rounded-full mx-auto flex items-center justify-center">
                  <Users className="text-primary-foreground" size={16} />
                </div>
                <p className="text-sm font-medium">{client.name}</p>
                <p className="text-xs text-muted-foreground">{client.city} • Cliente real</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
