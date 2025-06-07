
const ForYouSection = () => {
  const points = [
    "Você quer parecer profissional online",
    "Você perdeu cliente por não ter uma estrutura",
    "Você se sente pequeno perto da concorrência",
    "Você quer automatizar seus agendamentos",
    "Você não quer pagar mensalidade todo mês",
    "Você quer algo rápido e sem complicação"
  ];

  return (
    <section className="py-20 px-4 bg-dark-card">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-6">
          É pra você se...
        </h2>
        <p className="text-xl text-muted-foreground mb-12">
          Reconhece alguma dessas situações?
        </p>

        <div className="grid md:grid-cols-2 gap-6 text-left">
          {points.map((point, index) => (
            <div 
              key={index}
              className="flex items-start space-x-4 p-4 rounded-xl hover:bg-dark-bg transition-colors animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex-shrink-0 w-6 h-6 bg-tech-green rounded-full flex items-center justify-center mt-1">
                <div className="w-2 h-2 bg-black rounded-full"></div>
              </div>
              <p className="text-lg font-medium">{point}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 p-6 bg-tech-green/5 border border-tech-green/20 rounded-2xl">
          <p className="text-lg">
            <span className="text-tech-green font-bold">Se você se identificou</span> com pelo menos 2 itens,
            a perfil.store foi feita para você! 🚀
          </p>
        </div>
      </div>
    </section>
  );
};

export default ForYouSection;
