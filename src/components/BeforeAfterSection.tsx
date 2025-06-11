
import { useState, useEffect, useRef } from "react";
import { CheckCircle, XCircle } from "lucide-react";

const BeforeAfterSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const beforeItems = [
    "Parece apenas mais um profissional perdido nas redes",
    "Clientes questionam sua credibilidade",
    "Concorre por preço, não por valor",
    "Agenda cheia de reuniões que não fecham",
    "Visto como commodity no mercado"
  ];

  const afterItems = [
    "Reconhecido como autoridade no seu nicho",
    "Clientes chegam pré-vendidos e qualificados",
    "Cobra premium sem resistência",
    "Agenda automatizada com leads quentes",
    "Referência que todos querem contratar"
  ];

  return (
    <section ref={sectionRef} className="section-spacing">
      <div className="container-beacon">
        <h2 className="text-4xl lg:text-5xl font-playfair font-bold text-center text-beacon-text-title mb-16">
          Quem você será depois do <span className="gradient-text">Perfil Beacon</span>
        </h2>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Antes */}
          <div className={`surface-card rounded-xl p-8 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="flex items-center space-x-3 mb-6">
              <XCircle className="w-8 h-8 text-destructive" />
              <h3 className="text-2xl font-playfair font-bold text-destructive">ANTES</h3>
            </div>
            <div className="space-y-4">
              {beforeItems.map((item, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-destructive rounded-full mt-3 flex-shrink-0"></div>
                  <p className="text-beacon-text-light leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Depois */}
          <div className={`surface-card rounded-xl p-8 transition-all duration-700 delay-150 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="flex items-center space-x-3 mb-6">
              <CheckCircle className="w-8 h-8 text-primary" />
              <h3 className="text-2xl font-playfair font-bold text-primary">DEPOIS</h3>
            </div>
            <div className="space-y-4">
              {afterItems.map((item, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                  <p className="text-beacon-text-light leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BeforeAfterSection;
