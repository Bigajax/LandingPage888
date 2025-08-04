import React, { useState } from 'react'; 
import { MessageCircle, Brain, RefreshCw, BookOpen } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const steps = [
  {
    id: 1,
    title: "Compartilhe",
    description: "Escreva o que sente com honestidade.",
    icon: MessageCircle
  },
  {
    id: 2,
    title: "Reflexão guiada",
    description: "Receba um olhar cuidadoso de volta.",
    icon: Brain
  },
  {
    id: 3,
    title: "Clareza emocional",
    description: "Ganhe reflexos para enxergar com mais nitidez.",
    icon: RefreshCw
  },
  {
    id: 4,
    title: "Memórias conscientes",
    description: "Guarde aprendizados para evoluir com segurança.",
    icon: BookOpen
  }
];

const HowItWorks: React.FC = () => {
  const [activeStep, setActiveStep] = useState(1);
  const { ref, isVisible } = useScrollReveal();

  return (
    <section
      id="como-funciona"
      ref={ref}
      className="py-28 px-6 bg-[#F8F6FA] w-full flex flex-col items-center justify-center text-center scroll-mt-24"
    >
      <h2
  className={`text-[2.2rem] sm:text-4xl md:text-5xl font-semibold text-gray-900 mb-20 leading-tight tracking-tight transition-all duration-1000 ease-out ${
    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
  }`}
>
  Como a <span className="text-[#5F4BFF]">Eco</span> funciona?
</h2>


      <div className="w-full max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-16 items-start text-left">
        <div className="space-y-4 sm:space-y-5 w-full flex flex-col items-center">
          {steps.map((step) => (
            <button
              key={step.id}
              onClick={() => setActiveStep(step.id)}
              className={`w-full max-w-xs sm:max-w-full flex items-center sm:items-start sm:flex-row flex-col px-4 sm:px-5 py-3 sm:py-4 rounded-2xl sm:rounded-3xl transition-all backdrop-blur-lg border border-white/20 shadow-md ${
                activeStep === step.id
                  ? 'bg-white/80 shadow-xl border-[#E8E3F5]'
                  : 'bg-white/30 hover:bg-white/50'
              }`}
            >
              <div
                className={`flex items-center justify-center w-10 h-10 sm:w-14 sm:h-14 rounded-full mb-2 sm:mb-0 sm:mr-4 shadow-inner ${
                  activeStep === step.id ? 'bg-[#7A9EBF]' : 'bg-white/20'
                }`}
              >
                <step.icon
                  size={18}
                  strokeWidth={1.4}
                  className={activeStep === step.id ? 'text-white' : 'text-[#1D3557]/80'}
                />
              </div>
              <div className="flex flex-col text-center sm:text-left">
                <h3 className="text-base sm:text-lg text-[#1D3557] font-medium leading-snug">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-sm sm:text-base font-light leading-relaxed">
                  {step.description}
                </p>
              </div>
            </button>
          ))}
        </div>

        {/* Área de demonstração */}
        <div className="relative bg-white/40 backdrop-blur-xl rounded-3xl border border-white/20 shadow-lg p-6 sm:p-8 h-[420px] w-full overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#7A9EBF]/10 to-[#F7CAC9]/10 pointer-events-none"></div>
          <div className="relative h-full flex flex-col">
            {activeStep === 1 && (
              <div className="flex flex-col h-full">
                <div className="text-sm text-gray-400 mb-2">Sua expressão</div>
                <div className="bg-white/60 backdrop-blur-lg rounded-2xl p-4 shadow border border-white/20 mb-auto">
                  <p className="text-gray-800 font-light italic leading-relaxed">
                    Hoje me sinto confuso, tentando ouvir o que está aqui dentro.
                  </p>
                </div>
                <div className="mt-4 flex items-center h-11 rounded-2xl px-4 text-gray-400 bg-white/40 backdrop-blur-lg border border-white/20 shadow-inner">
                  Escreva aqui...
                </div>
              </div>
            )}

            {activeStep === 2 && (
              <div className="flex flex-col items-center justify-center h-full">
                <div className="w-28 h-28 sm:w-36 sm:h-36 rounded-full relative overflow-hidden border border-white/30 backdrop-blur-lg shadow-xl bg-white/20">
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        'radial-gradient(circle at 30% 30%, white 0%, #7A9EBF10 40%, #7A9EBF20 70%, #7A9EBF30 100%)',
                      backdropFilter: 'blur(10px)',
                    }}
                  />
                  <div className="absolute inset-0 border border-white/30 rounded-full animate-pulse"></div>
                </div>
                <p className="text-center text-gray-600 mt-6 text-sm sm:text-base leading-relaxed font-light">
                  Analisando com atenção e empatia...
                </p>
              </div>
            )}

            {activeStep === 3 && (
              <div className="flex flex-col h-full">
                <div className="text-sm text-gray-400 mb-2">Seu reflexo</div>
                <div className="bg-gradient-to-br from-[#7A9EBF]/10 to-[#F7CAC9]/10 rounded-2xl p-4 border border-white/40 shadow-sm">
                  <p className="text-gray-800 font-light italic leading-relaxed">
                    "Sinto que você busca clareza para entender melhor seus próprios movimentos internos."
                  </p>
                </div>
              </div>
            )}

            {activeStep === 4 && (
              <div className="flex flex-col h-full">
                <div className="text-sm text-gray-400 mb-2">Suas memórias</div>
                <div className="bg-white/50 backdrop-blur-lg rounded-2xl p-4 shadow border border-white/20 max-h-[280px] overflow-y-auto space-y-4">
                  <div className="border-b border-white/20 pb-3">
                    <div className="text-xs text-gray-400">14 de julho</div>
                    <p className="text-gray-800 text-sm leading-relaxed">
                      Hoje me senti mais presente e calmo.
                    </p>
                  </div>
                  <div className="border-b border-white/20 pb-3">
                    <div className="text-xs text-gray-400">12 de julho</div>
                    <p className="text-gray-800 text-sm leading-relaxed">
                      Notei que estou reconhecendo melhor o que sinto.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
