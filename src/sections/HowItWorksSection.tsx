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
  { id: 1, title: "Envie uma mensagem",   description: "Você escreve livremente. A conversa começa com você.",           icon: Circle },
  { id: 2, title: "Resposta da Eco",      description: "Reflexões guiadas e perguntas que funcionam como espelho.",     icon: Sparkles },
  { id: 3, title: "Sinais & padrões",     description: "O essencial e o que se repete com o tempo.",                    icon: Sun },
  { id: 4, title: "Memórias automáticas", description: "O que importa fica salvo para consultas futuras — sem esforço.", icon: BookOpen },
];

const HowItWorks: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(1);
  const { ref, isVisible } = useScrollReveal();

  const Demo = ({ step }: { step: number }) => {
    if (step === 1)
      return (
        <div className="space-y-3">
          <span className="text-[11px] font-medium uppercase tracking-[0.18em] text-[#8E8E93]">
            Sua mensagem
          </span>
          <div className="rounded-xl border border-[#E5E5EA] bg-white p-3 shadow-[0_1px_1px_rgba(0,0,0,0.04)]">
            <p className="text-sm leading-relaxed text-[#1D1D1F]">
              Hoje me sinto confuso, tentando ouvir o que está aqui dentro.
            </p>
          </div>
          <div className="mt-1 flex h-10 items-center rounded-lg border border-[#E5E5EA] bg-white px-3 text-sm text-[#6E6E73]">
            Escreva para a Eco…
          </div>
        </div>
      );

    if (step === 2)
      return (
        <div className="space-y-3">
          <span className="text-[11px] font-medium uppercase tracking-[0.18em] text-[#8E8E93]">
            Resposta da Eco
          </span>
          <div className="space-y-2">
            <div className="rounded-xl border border-[#E5E5EA] bg-white p-3 text-sm text-[#1D1D1F] shadow-[0_1px_1px_rgba(0,0,0,0.04)]">
              Entendi. Vamos explorar: o que provocou essa confusão hoje?
            </div>
            <div className="rounded-xl border border-[#E5E5EA] bg-white p-3 text-sm text-[#1D1D1F] shadow-[0_1px_1px_rgba(0,0,0,0.04)]">
              Se isso tivesse uma cor ou peso, qual seria? Por quê?
            </div>
          </div>
        </div>
      );

    if (step === 3)
      return (
        <div className="space-y-3">
          <span className="text-[11px] font-medium uppercase tracking-[0.18em] text-[#8E8E93]">
            Sinais & padrões
          </span>
          <div className="rounded-xl border border-[#E5E5EA] bg-white p-3 shadow-[0_1px_1px_rgba(0,0,0,0.04)]">
            <ul className="space-y-1 text-sm text-[#1D1D1F]">
              <li>• Tema recorrente: <b>autocrítica</b> nas tardes de segunda.</li>
              <li>• Gatilho comum: reuniões longas.</li>
              <li>• Sugestão: mini-pausa respiratória antes da última reunião.</li>
            </ul>
          </div>
        </div>
      );

    return (
      <div className="space-y-3">
        <span className="text-[11px] font-medium uppercase tracking-[0.18em] text-[#8E8E93]">
          Memórias automáticas
        </span>
        <div className="max-h-[200px] space-y-3 overflow-y-auto rounded-xl border border-[#E5E5EA] bg-white p-3 shadow-[0_1px_1px_rgba(0,0,0,0.04)]">
          <div className="border-b border-[#E5E5EA] pb-2">
            <div className="text-[11px] text-[#8E8E93]">14 de julho</div>
            <p className="text-sm leading-relaxed text-[#1D1D1F]">
              Confusão → clareza após pausa de respiração (3 min).
            </p>
          </div>
          <div className="border-b border-[#E5E5EA] pb-2">
            <div className="text-[11px] text-[#8E8E93]">12 de julho</div>
            <p className="text-sm leading-relaxed text-[#1D1D1F]">
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
      className="relative w-full scroll-mt-24 bg-[#F5F5F7] py-14 md:py-20"
    >
      {/* Header */}
      <div
        className={`mx-auto mb-8 flex w-full max-w-7xl flex-col px-4 sm:px-6 lg:px-8 transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        <h2 className="text-left font-semibold text-[#1D1D1F] text-[32px] sm:text-[40px] leading-[1.08]">
          Como a conversa funciona.
        </h2>
        <p className="mt-2 max-w-2xl text-left text-[#6E6E73] text-[15px] sm:text-[16px]">
          Você escreve, a Eco responde com perguntas e reflexões, destaca sinais importantes e salva o essencial.
        </p>
      </div>

      {/* MOBILE (cards empilhados) */}
      <div className="w-full max-w-3xl space-y-3 px-4 sm:px-6 lg:hidden">
        {steps.map((step) => {
          const Icon = step.icon;
          const active = activeStep === step.id;
          return (
            <div
              key={step.id}
              className={`transition-all duration-300 rounded-2xl border ${
                active ? "border-[#1D1D1F]" : "border-[#E5E5EA]"
              } bg-white shadow-[0_1px_1px_rgba(0,0,0,0.04)]`}
            >
              <button
                onClick={() => setActiveStep(active ? 0 : step.id)}
                className="flex w-full items-center gap-3 rounded-[inherit] px-4 py-4 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/10"
                aria-expanded={active}
                aria-pressed={active}
                aria-controls={`demo-${step.id}`}
              >
                <span
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-[#E5E5EA] bg-white"
                  aria-hidden
                >
                  <Icon size={16} strokeWidth={1.7} className="text-[#1D1D1F]" />
                </span>

                <span className="flex flex-1 flex-col">
                  <span className="flex items-baseline gap-2">
                    <span className="text-[15px] font-semibold leading-snug text-[#1D1D1F]">
                      {step.title}
                    </span>
                    <span className="ml-auto text-[11px] font-medium text-[#8E8E93] tabular-nums">
                      0{step.id}
                    </span>
                  </span>
                  <span className="text-[13px] leading-snug text-[#6E6E73]">
                    {step.description}
                  </span>
                </span>
              </button>

              {active && (
                <div id={`demo-${step.id}`} className="px-4 pb-4">
                  <div className="rounded-xl border border-[#E5E5EA] bg-white p-3 shadow-[0_1px_1px_rgba(0,0,0,0.04)]">
                    <Demo step={step.id} />
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* DESKTOP (lista à esquerda + painel à direita) */}
      <div className="mx-auto hidden w-full max-w-7xl grid-cols-2 gap-8 px-4 sm:px-6 lg:px-8 lg:grid">
        {/* Lista */}
        <div className="space-y-3">
          {steps.map((step) => {
            const Icon = step.icon;
            const active = activeStep === step.id;
            return (
              <button
                key={step.id}
                onClick={() => setActiveStep(step.id)}
                className={`flex w-full items-center gap-3 rounded-2xl px-5 py-4 text-left transition-all duration-200
                  border ${active ? "border-[#1D1D1F]" : "border-[#E5E5EA]"}
                  bg-white shadow-[0_1px_1px_rgba(0,0,0,0.04)]
                  hover:shadow-[0_10px_24px_rgba(0,0,0,0.06)]
                  focus:outline-none focus-visible:ring-2 focus-visible:ring-black/10`}
                aria-pressed={active}
                aria-controls={`demo-desktop-${step.id}`}
              >
                <span
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-[#E5E5EA] bg-white"
                  aria-hidden
                >
                  <Icon size={16} strokeWidth={1.7} className="text-[#1D1D1F]" />
                </span>
                <span className="flex flex-1 flex-col">
                  <span className="flex items-baseline gap-2">
                    <span className="text-[16px] font-semibold leading-snug text-[#1D1D1F]">
                      {step.title}
                    </span>
                    <span className="ml-auto text-[12px] font-medium text-[#8E8E93] tabular-nums">
                      0{step.id}
                    </span>
                  </span>
                  <span className="text-[14px] leading-snug text-[#6E6E73]">
                    {step.description}
                  </span>
                </span>
              </button>
            );
          })}
        </div>

        {/* Painel de demonstração */}
        <div className="relative min-h-[340px] overflow-hidden rounded-3xl border border-[#E5E5EA] bg-white p-6 shadow-[0_8px_24px_rgba(0,0,0,0.06)]">
          <div className="relative h-full" id="demo-desktop">
            <Demo step={activeStep || 1} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
