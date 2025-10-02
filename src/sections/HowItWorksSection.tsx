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
  { id: 1, title: "Envie uma mensagem",     description: "Você escreve livremente. A conversa começa com você.",           icon: Circle },
  { id: 2, title: "Resposta da Eco",        description: "Reflexões guiadas e perguntas que funcionam como espelho.",     icon: Sparkles },
  { id: 3, title: "Sinais & padrões",       description: "A Eco destaca o essencial e o que se repete com o tempo.",      icon: Sun },
  { id: 4, title: "Memórias automáticas",   description: "O que importa fica salvo para consultas futuras — sem esforço.", icon: BookOpen },
];

const HowItWorks: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(1);
  const { ref, isVisible } = useScrollReveal();

  const Demo = ({ step }: { step: number }) => {
    if (step === 1)
      return (
        <div className="space-y-3">
          <span className="text-[11px] font-medium uppercase tracking-[0.18em] text-[#A1A6BB]">
            Sua mensagem
          </span>
          <div className="rounded-xl border border-white/40 bg-white/80 p-3 shadow-sm backdrop-blur-xl">
            <p className="text-sm leading-relaxed text-[#111827]">
              Hoje me sinto confuso, tentando ouvir o que está aqui dentro.
            </p>
          </div>
          <div className="mt-1 flex h-10 items-center rounded-lg border border-white/30 bg-white/60 px-3 text-sm text-[#6B7280] backdrop-blur-xl">
            Escreva para a Eco…
          </div>
        </div>
      );

    if (step === 2)
      return (
        <div className="space-y-3">
          <span className="text-[11px] font-medium uppercase tracking-[0.18em] text-[#A1A6BB]">
            Resposta da Eco
          </span>
          <div className="space-y-2">
            <div className="rounded-xl border border-white/40 bg-white/85 p-3 text-sm text-[#111827] shadow-sm backdrop-blur-xl">
              Entendi. Vamos explorar: o que provocou essa confusão hoje?
            </div>
            <div className="rounded-xl border border-white/40 bg-white/70 p-3 text-sm text-[#111827] shadow-sm backdrop-blur-xl">
              Se isso tivesse uma cor ou peso, qual seria? Por quê?
            </div>
          </div>
        </div>
      );

    if (step === 3)
      return (
        <div className="space-y-3">
          <span className="text-[11px] font-medium uppercase tracking-[0.18em] text-[#A1A6BB]">
            Sinais & padrões
          </span>
          <div className="rounded-xl border border-[#C7D2FE]/60 bg-gradient-to-br from-[#E0E7FF]/60 via-white to-[#F5F3FF]/70 p-3 shadow-sm backdrop-blur-xl">
            <ul className="space-y-1 text-sm text-[#111827]">
              <li>• Tema recorrente: <b>autocrítica</b> nas tardes de segunda.</li>
              <li>• Gatilho comum: reuniões longas.</li>
              <li>• Sugestão: mini-pausa respiratória antes da última reunião.</li>
            </ul>
          </div>
        </div>
      );

    return (
      <div className="space-y-3">
        <span className="text-[11px] font-medium uppercase tracking-[0.18em] text-[#A1A6BB]">
          Memórias automáticas
        </span>
        <div className="max-h-[200px] space-y-3 overflow-y-auto rounded-xl border border-white/40 bg-white/80 p-3 shadow-sm backdrop-blur-xl">
          <div className="border-b border-white/40 pb-2">
            <div className="text-[11px] text-[#A1A6BB]">14 de julho</div>
            <p className="text-sm leading-relaxed text-[#111827]">
              Confusão → clareza após pausa de respiração (3 min).
            </p>
          </div>
          <div className="border-b border-white/40 pb-2">
            <div className="text-[11px] text-[#A1A6BB]">12 de julho</div>
            <p className="text-sm leading-relaxed text-[#111827]">
              Padrão percebido: tensão pré-reunião. Funcionou: anotar 1 intenção.
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
      className="relative w-full scroll-mt-24 bg-white py-14 md:py-20"
    >
      <div
        className={`mx-auto mb-8 flex w-full max-w-7xl flex-col px-4 sm:px-6 lg:px-8 transition-all duration-700 ease-out ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        <h2 className="heading-lg text-left font-semibold text-[#111827]">
          Como a conversa funciona.
        </h2>
        <p className="subheading mt-2 max-w-2xl text-left text-[#6B7280]">
          Você escreve, a Eco responde com perguntas e reflexões, destaca sinais importantes e salva o essencial.
        </p>
      </div>

      {/* MOBILE */}
      <div className="w-full max-w-3xl space-y-3 px-4 sm:px-6 lg:hidden">
        {steps.map((step) => {
          const Icon = step.icon;
          const active = activeStep === step.id;
          return (
            <div
              key={step.id}
              className={`glass glass-hover w-full transition-all duration-300 ease-out ${
                active
                  ? "border-white/50 bg-white/70 ring-1 ring-[rgba(var(--violet-600-rgb),0.32)] shadow-md"
                  : "border-white/30 bg-white/50"
              }`}
            >
              <button
                onClick={() => setActiveStep(active ? 0 : step.id)}
                className="flex w-full items-center gap-3 rounded-[inherit] px-4 py-4 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:rgba(var(--violet-600-rgb),0.45)] focus-visible:ring-offset-2 focus-visible:ring-offset-white"
                aria-expanded={active}
                aria-pressed={active}
                aria-controls={`demo-${step.id}`}
              >
                <span
                  className={`flex h-10 w-10 items-center justify-center rounded-full border border-white/60 bg-gradient-to-br from-white via-white/60 to-[#E0E7FF]/70 shadow-inner transition-opacity ${
                    active ? "opacity-100" : "opacity-90"
                  }`}
                  aria-hidden
                >
                  <Icon size={16} strokeWidth={1.6} className="text-[color:var(--indigo-600)]" />
                </span>

                <span className="flex flex-1 flex-col">
                  <span className="flex items-baseline gap-2">
                    <span className="text-[15px] font-semibold leading-snug text-[#111827]">
                      {step.title}
                    </span>
                    <span className="ml-auto text-[11px] font-medium text-[#A1A6BB] tabular-nums">
                      0{step.id}
                    </span>
                  </span>
                  <span className="text-[13px] leading-snug text-[#6B7280]">
                    {step.description}
                  </span>
                </span>
              </button>

              {active && (
                <div id={`demo-${step.id}`} className="px-4 pb-4">
                  <div className="rounded-xl border border-white/40 bg-white/75 p-3 shadow-sm backdrop-blur-xl">
                    <Demo step={step.id} />
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* DESKTOP */}
      <div className="mx-auto hidden w-full max-w-7xl grid-cols-2 gap-8 px-4 sm:px-6 lg:px-8 lg:grid">
        <div className="space-y-3">
          {steps.map((step) => {
            const Icon = step.icon;
            const active = activeStep === step.id;
            return (
              <button
                key={step.id}
                onClick={() => setActiveStep(step.id)}
                className={`glass glass-hover flex w-full items-center gap-3 rounded-2xl px-5 py-4 text-left transition-all duration-300 ease-out ${
                  active
                    ? "border-white/60 bg-white/70 ring-1 ring-[rgba(var(--violet-600-rgb),0.32)] shadow-md"
                    : "border-white/30 bg-white/40"
                }`}
                aria-pressed={active}
                aria-controls={`demo-desktop-${step.id}`}
              >
                <span
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/60 bg-gradient-to-br from-white via-white/60 to-[#E0E7FF]/70 shadow-inner"
                  aria-hidden
                >
                  <Icon size={16} strokeWidth={1.6} className="text-[color:var(--indigo-600)]" />
                </span>
                <span className="flex flex-1 flex-col">
                  <span className="flex items-baseline gap-2">
                    <span className="text-[16px] font-semibold leading-snug text-[#111827]">
                      {step.title}
                    </span>
                    <span className="ml-auto text-[12px] font-medium text-[#A1A6BB] tabular-nums">
                      0{step.id}
                    </span>
                  </span>
                  <span className="text-[14px] leading-snug text-[#6B7280]">
                    {step.description}
                  </span>
                </span>
              </button>
            );
          })}
        </div>

        <div className="glass relative min-h-[340px] overflow-hidden rounded-3xl border-white/40 bg-white/60 p-6 shadow-lg">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(120%_80%_at_70%_0%,rgba(99,102,241,0.10),transparent)]" />
          <div className="relative h-full" id="demo-desktop">
            <Demo step={activeStep || 1} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
