import React, { useState } from "react";
import { Circle, Sparkles, Sun, BookOpen } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

type Step = {
  id: number;
  title: string;
  description: string;
  icon: React.ComponentType<{ size?: number; strokeWidth?: number; className?: string }>;
};

const steps: Step[] = [
  { id: 1, title: "Compartilhe",          description: "Dê forma ao que sente.",                 icon: Circle },
  { id: 2, title: "Reflexão guiada",      description: "Um reflexo do seu interior.",            icon: Sparkles },
  { id: 3, title: "Clareza emocional",    description: "Veja o invisível ganhar contorno.",      icon: Sun },
  { id: 4, title: "Memórias conscientes", description: "Um lugar para guardar o essencial.",     icon: BookOpen },
];

const HowItWorks: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(1);
  const { ref, isVisible } = useScrollReveal();

  const Demo = ({ step }: { step: number }) => {
    if (step === 1)
      return (
        <div className="space-y-4">
          <span className="text-xs font-medium uppercase tracking-[0.18em] text-[#A1A6BB]">
            Sua expressão
          </span>
          <div className="rounded-2xl border border-white/40 bg-white/80 p-4 shadow-sm backdrop-blur-xl">
            <p className="text-sm leading-relaxed text-[#111827]">
              Hoje me sinto confuso, tentando ouvir o que está aqui dentro.
            </p>
          </div>
          <div className="mt-1 flex h-11 items-center rounded-xl border border-white/30 bg-white/60 px-4 text-sm text-[#6B7280] backdrop-blur-xl">
            Dê forma ao que sente…
          </div>
        </div>
      );

    if (step === 2)
      return (
        <div className="flex flex-col items-center justify-center space-y-4 py-6">
          <div className="relative flex h-28 w-28 items-center justify-center overflow-hidden rounded-full border border-white/50 bg-white/80 shadow-inner backdrop-blur-xl">
            <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.9),rgba(99,102,241,0.16)_50%,rgba(79,70,229,0.22)_85%)]" />
            <div className="absolute inset-0 rounded-full border border-white/60 opacity-70 animate-pulse" />
          </div>
          <p className="px-6 text-center text-sm leading-relaxed text-[#6B7280]">
            Uma resposta nasce do que você revela.
          </p>
        </div>
      );

    if (step === 3)
      return (
        <div className="space-y-4">
          <span className="text-xs font-medium uppercase tracking-[0.18em] text-[#A1A6BB]">
            Seu insight
          </span>
          <div className="rounded-2xl border border-[#C7D2FE]/60 bg-gradient-to-br from-[#E0E7FF]/60 via-white to-[#F5F3FF]/70 p-4 shadow-sm backdrop-blur-xl">
            <p className="text-sm leading-relaxed text-[#111827]">
              O que se repete começa a ganhar contorno.
            </p>
          </div>
        </div>
      );

    return (
      <div className="space-y-4">
        <span className="text-xs font-medium uppercase tracking-[0.18em] text-[#A1A6BB]">
          Memória (exemplo)
        </span>
        <div className="max-h-[240px] space-y-4 overflow-y-auto rounded-2xl border border-white/40 bg-white/80 p-4 shadow-sm backdrop-blur-xl">
          <div className="border-b border-white/40 pb-3">
            <div className="text-xs text-[#A1A6BB]">14 de julho</div>
            <p className="text-sm leading-relaxed text-[#111827]">
              Hoje me senti mais presente e calmo.
            </p>
          </div>
          <div className="border-b border-white/40 pb-3">
            <div className="text-xs text-[#A1A6BB]">12 de julho</div>
            <p className="text-sm leading-relaxed text-[#111827]">
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
      className="relative w-full scroll-mt-24 bg-white py-20 md:py-28"
    >
      <div className="pointer-events-none absolute left-[12%] top-12 hidden h-64 w-64 -translate-x-1/2 rounded-full bg-gradient-to-br from-purple-200 via-transparent to-indigo-200 opacity-40 blur-3xl lg:block" aria-hidden />

      {/* Cabeçalho estilo “continuação” */}
      <div
        className={`mx-auto mb-12 flex w-full max-w-7xl flex-col px-4 sm:px-6 lg:px-8 transition-all duration-700 ease-out ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        <h2 className="heading-lg text-left font-semibold text-[#111827]">
          Como a Eco acompanha sua clareza emocional.
        </h2>
        <p className="subheading mt-3 max-w-2xl text-left text-[#6B7280]">
          Passo a passo, da escrita à leitura delicada dos seus padrões.
        </p>
      </div>

      {/* MOBILE: cards empilhados + demo inline no card ativo */}
      <div className="w-full max-w-3xl space-y-4 px-4 sm:px-6 lg:hidden">
        {steps.map((step) => {
          const Icon = step.icon;
          const active = activeStep === step.id;
          return (
            <div
              key={step.id}
              className={`glass glass-hover w-full transition-all duration-300 ease-out ${
                active
                  ? "border-white/50 bg-white/70 ring-2 ring-[#A78BFA]/40 shadow-md"
                  : "border-white/30 bg-white/50"
              }`}
            >
              <button
                onClick={() => setActiveStep(active ? 0 : step.id)}
                className="flex w-full items-center gap-4 rounded-[inherit] px-5 py-5 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A78BFA] focus-visible:ring-offset-2 focus-visible:ring-offset-white"
                aria-expanded={active}
                aria-pressed={active}
                aria-controls={`demo-${step.id}`}
              >
                <span
                  className={`flex h-12 w-12 items-center justify-center rounded-full border border-white/60 bg-gradient-to-br from-white via-white/60 to-[#E0E7FF]/70 shadow-inner transition-opacity duration-300 ease-out ${
                    active ? "opacity-100" : "opacity-90"
                  }`}
                  aria-hidden
                >
                  <Icon size={18} strokeWidth={1.6} className="text-[#4F46E5]" />
                </span>

                <span className="flex flex-1 flex-col gap-2">
                  <span className="flex items-baseline gap-2">
                    <span className="text-sm font-semibold leading-snug text-[#111827] sm:text-[16px]">
                      {step.title}
                    </span>
                    <span className="ml-auto text-[12px] font-medium text-[#A1A6BB] tabular-nums">
                      0{step.id}
                    </span>
                  </span>
                  <span className="text-[13px] leading-snug text-[#6B7280] sm:text-[14px]">
                    {step.description}
                  </span>
                  {step.id === 4 && (
                    <a
                      href="#relatorio"
                      className="mt-1 inline-flex items-center text-[13px] font-semibold text-[#4F46E5] transition-colors duration-200 ease-out hover:text-[#111827] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A78BFA] focus-visible:ring-offset-2 focus-visible:ring-offset-white"
                    >
                      Ver relatório emocional →
                    </a>
                  )}
                </span>
              </button>

              {active && (
                <div id={`demo-${step.id}`} className="px-5 pb-5">
                  <div className="rounded-2xl border border-white/40 bg-white/75 p-4 shadow-sm backdrop-blur-xl">
                    <Demo step={step.id} />
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* DESKTOP: lista à esquerda + demo fixa à direita */}
      <div className="mx-auto hidden w-full max-w-7xl grid-cols-2 gap-12 px-4 sm:px-6 lg:px-8 lg:grid">
        <div className="space-y-4">
          {steps.map((step) => {
            const Icon = step.icon;
            const active = activeStep === step.id;
            return (
              <button
                key={step.id}
                onClick={() => setActiveStep(step.id)}
                className={`glass glass-hover flex w-full items-center gap-4 rounded-2xl px-6 py-5 text-left transition-all duration-300 ease-out ${
                  active
                    ? "border-white/60 bg-white/70 ring-2 ring-[#A78BFA]/40 shadow-md"
                    : "border-white/30 bg-white/40"
                }`}
                aria-pressed={active}
                aria-controls={`demo-desktop-${step.id}`}
              >
                <span
                  className="flex h-12 w-12 items-center justify-center rounded-full border border-white/60 bg-gradient-to-br from-white via-white/60 to-[#E0E7FF]/70 shadow-inner"
                  aria-hidden
                >
                  <Icon size={18} strokeWidth={1.6} className="text-[#4F46E5]" />
                </span>
                <span className="flex flex-1 flex-col gap-2">
                  <span className="flex items-baseline gap-2">
                    <span className="text-[17px] font-semibold leading-snug text-[#111827]">
                      {step.title}
                    </span>
                    <span className="ml-auto text-xs font-medium text-[#A1A6BB] tabular-nums">
                      0{step.id}
                    </span>
                  </span>
                  <span className="text-[15px] leading-snug text-[#6B7280]">
                    {step.description}
                  </span>
                  {step.id === 4 && (
                    <a
                      href="#relatorio"
                      className="mt-1 inline-flex items-center text-[13px] font-semibold text-[#4F46E5] transition-colors duration-200 ease-out hover:text-[#111827] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A78BFA] focus-visible:ring-offset-2 focus-visible:ring-offset-white"
                    >
                      Ver relatório emocional →
                    </a>
                  )}
                </span>
              </button>
            );
          })}
        </div>

        <div className="glass relative min-h-[420px] overflow-hidden rounded-3xl border-white/40 bg-white/60 p-8 shadow-lg">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(120%_80%_at_70%_0%,rgba(99,102,241,0.12),transparent)]" />
          <div className="relative h-full" id="demo-desktop">
            <Demo step={activeStep || 1} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
