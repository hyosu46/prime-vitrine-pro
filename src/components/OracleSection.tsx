
import { useState, useEffect, useRef } from "react";

const OracleSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showPrompt, setShowPrompt] = useState(false);
  const [showTyping, setShowTyping] = useState(false);
  const [showResponse, setShowResponse] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
          // Coreografia de animação
          setTimeout(() => setShowPrompt(true), 300);
          setTimeout(() => setShowTyping(true), 800);
          setTimeout(() => setShowTyping(false), 2300);
          setTimeout(() => setShowResponse(true), 2500);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  return (
    <section ref={sectionRef} className="section-spacing">
      <div className="container-beacon">
        <h2 className="text-4xl lg:text-5xl font-playfair font-bold text-center text-beacon-text-title mb-16">
          A Melhor Oportunidade do Mercado
        </h2>

        <div className={`oracle-box max-w-4xl mx-auto transition-all duration-500 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
          {/* Prompt */}
          <div className={`mb-6 transition-all duration-300 ${showPrompt ? 'opacity-100' : 'opacity-0'}`}>
            <p className="text-beacon-text-light text-lg leading-relaxed">
              <span className="text-primary font-semibold">Prompt:</span> Oráculo, um corretor/advogado/consultor que usa apenas o Instagram para vender consegue cobrar o valor que realmente merece?
            </p>
          </div>

          {/* Indicador de Digitação */}
          {showTyping && (
            <div className="mb-6 flex items-center space-x-2">
              <span className="text-beacon-text-light">Oráculo está digitando</span>
              <div className="typing-indicator">
                <div className="typing-dot animate-pulse-typing" style={{ '--delay': 0 } as any}></div>
                <div className="typing-dot animate-pulse-typing" style={{ '--delay': 1 } as any}></div>
                <div className="typing-dot animate-pulse-typing" style={{ '--delay': 2 } as any}></div>
              </div>
            </div>
          )}

          {/* Resposta */}
          <div className={`transition-all duration-500 ${showResponse ? 'opacity-100' : 'opacity-0'}`}>
            <div className="border-l-4 border-primary pl-6">
              <p className="text-beacon-text-light text-lg leading-relaxed">
                <span className="text-primary font-semibold">Oráculo:</span> Não. Apenas postar conteúdo será substituído pela IA. Sobrevivem aqueles que dominam a{" "}
                <strong className="text-primary">percepção de valor</strong>. Quem constrói um ambiente digital proprietário, transmite autoridade e usa a IA para qualificar, não apenas para postar.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OracleSection;
