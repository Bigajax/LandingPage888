import React, { useState } from "react";
import { MessageCircle, Brain, RefreshCw, BookOpen } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

type Step = {
  id: number;
  title: string;
  description: string;
  icon: React.ComponentType<{ size?: number; strokeWidth?: number; className?: string }>;
};

const steps: Step[] = [
  {
    id: 1,
    title: "Compartilhe",
    description: "Escreva como se sente, sem complicação.",
    icon: MessageCircle,
  },
  {
    id: 2,
    title: "Reflexão guiada",
    description: "Receba respostas cuidadosas com base no que expressou.",
    icon: Brain,
  },
  {
    id: 3,
    title: "Clareza emocional",
    description: "Veja padrões e insights visuais do seu momento.",
    icon: RefreshCw,
  },
  {
    id: 4,
    title: "Memórias conscientes",
    description: "Acompanhe sua evolução e guarde aprendizados.",
    icon: BookOpen,
  },
];

const HowItWorks: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(1);
  const { ref, isVisible } = useScrollReveal();

  // UI de demonstração (reusável)
  const Demo = ({ step }: { step: number }) => {
    if (step === 1)
      return (
        <div className="space-y-3">
          <div className="text-xs sm:text-sm text-zinc-400">Sua expressão</div>
          <div className="bg-white rounded-xl p-4 shadow border border-zinc-100">
            <p className="text-zinc-800 leading-relaxed">
              Hoje me sinto confuso, tentando ouvir o que está aqui dentro.
            </p>
          </div>
          <div className="mt-1 flex items-center h-11 rounded-xl px-4 text-zinc-400 bg-zinc-50 border border-zinc-200">
            Escreva aqui…
          </div>
        </div>
      );

    if (step === 2)
      return (
        <div className="flex flex-col items-center justify-center py-6">
          <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full relative overflow-hidden border border-zinc-200 shadow-inner bg-white">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,white,rgba(91,75,255,0.10)_45%,rgba(91,75,255,0.18)_80%)]" />
            <div className="absolute inset-0 rounded-full border border-white/60 animate-pulse" />
          </div>
          <p className="text-center text-zinc-600 mt-4 text-sm leading-relaxed">
            Analisando com atenção o que você disse…
          </p>
        </div>
      );

    if (step === 3)
      return (
        <div className="space-y-3">
          <div className="text-xs sm:text-sm text-zinc-400">Seu insight</div>
          <div className="bg-gradient-to-br from-[#5B4BFF]/10 to-[#5B4BFF]/5 rounded-xl p-4 border border-zinc-200">
            <p className="text-zinc-800 leading-relaxed">
              Você busca clareza para entender seus movimentos internos. Vamos acompanhar quando isso aparece?
            </p>
          </div>
        </div>
      );

    return (
      <div className="space-y-3">
        <div className="text-xs sm:text-sm text-zinc-400">Suas memórias</div>
        <div className="bg-white rounded-xl p-4 border border-zinc-200 max-h-[240px] overflow-y-auto space-y-4">
          <div className="border-b border-zinc-200 pb-3">
            <div className="text-xs text-zinc-400">14 de julho</div>
            <p className="text-zinc-800 text-sm leading-relaxed">
              Hoje me senti mais presente e calmo.
            </p>
          </div>
          <div className="border-b border-zinc-200 pb-3">
            <div className="text-xs text-zinc-400">12 de julho</div>
            <p className="text-zinc-800 text-sm leading-relaxed">
              Notei que estou reconhecendo melhor o que sinto.
            </p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section
      id="como-funciona"
      ref={ref}
      className="py-20 sm:py-24 px-4 sm:px-6 bg-[#F7F6FB] w-full flex flex-col items-center text-center scroll-mt-24"
    >
      <h2
        className={`text-[26px] sm:text-4xl md:text-[44px] font-semibold text-zinc-900 mb-10 sm:mb-14 leading-tight tracking-tight transition-all duration-700 ease-out ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        Como a <span className="text-[#5B4BFF]">Eco</span> funciona
      </h2>

      {/* MOBILE: cards empilhados + demo inline no card ativo  */}
      <div className="w-full max-w-3xl lg:hidden space-y-4">
        {steps.map((step) => {
          const Icon = step.icon;
          const active = activeStep === step.id;
          return (
            <div
              key={step.id}
              className={`w-full text-left rounded-2xl border transition-all shadow-[0_6px_18px_rgba(0,0,0,0.06)] ${
                active ? "border-[#E8E3F5] ring-2 ring-[#5B4BFF]/10 bg-white" : "border-white bg-white"
              }`}
            >
              <button
                onClick={() => setActiveStep(active ? 0 : step.id)}
                className="w-full flex items-center gap-4 p-4"
                aria-expanded={active}
                aria-controls={`demo-${step.id}`}
              >
                <div
                  className={`flex items-center justify-center w-11 h-11 rounded-full shadow-inner ${
                    active ? "bg-[#5B4BFF]" : "bg-zinc-100"
                  }`}
                >
                  <Icon size={18} strokeWidth={1.6} className={active ? "text-white" : "text-zinc-600"} />
                </div>
                <div className="flex-1">
                  <h3 className="text-[16px] text-zinc-900 font-medium leading-snug">{step.title}</h3>
                  <p className="text-zinc-600 text-[13px] leading-relaxed">{step.description}</p>
                </div>
              </button>

              {/* demo inline (accordion) */}
              {active && (
                <div id={`demo-${step.id}`} className="px-4 pb-4">
                  <div className="mt-1 rounded-xl border border-zinc-100 bg-white p-4">
                    <Demo step={step.id} />
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* DESKTOP: lista à esquerda + demo fixa à direita */}
      <div className="w-full max-w-7xl hidden lg:grid grid-cols-2 gap-12 items-start text-left">
        <div className="space-y-4">
          {steps.map((step) => {
            const Icon = step.icon;
            const active = activeStep === step.id;
            return (
              <button
                key={step.id}
                onClick={() => setActiveStep(step.id)}
                className={`w-full flex items-center gap-4 px-5 py-4 rounded-2xl transition-all border bg-white shadow-[0_6px_18px_rgba(0,0,0,0.06)] ${
                  active ? "border-[#E8E3F5] ring-2 ring-[#5B4BFF]/10" : "border-white"
                }`}
              >
                <div
                  className={`flex items-center justify-center w-12 h-12 rounded-full shadow-inner ${
                    active ? "bg-[#5B4BFF]" : "bg-zinc-100"
                  }`}
                >
                  <Icon size={18} strokeWidth={1.6} className={active ? "text-white" : "text-zinc-600"} />
                </div>
                <div>
                  <h3 className="text-[17px] text-zinc-900 font-medium leading-snug">{step.title}</h3>
                  <p className="text-zinc-600 text-[15px] leading-relaxed">{step.description}</p>
                </div>
              </button>
            );
          })}
        </div>

        <div className="relative bg-white/70 backdrop-blur-xl rounded-3xl border border-white shadow-[0_10px_30px_rgba(0,0,0,0.08)] p-8 min-h-[420px] overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(120%_80%_at_70%_0%,rgba(91,75,255,0.06),transparent)] pointer-events-none" />
          <div className="relative h-full">
            <Demo step={activeStep || 1} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
