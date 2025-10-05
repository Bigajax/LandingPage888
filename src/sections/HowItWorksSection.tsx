import React, { useState } from "react";
import { MessageCircle, Lightbulb, TrendingUp, BookOpen } from "lucide-react";

type Step = {
  id: number;
  title: string;
  description: string;
  icon: React.ComponentType<{ size?: number; strokeWidth?: number; className?: string }>;
};

const steps: Step[] = [
  { 
    id: 1, 
    title: "Você compartilha seu dia",   
    description: "Escreva livremente sobre como você está se sentindo. A Eco está aqui para te ouvir, sem julgamentos.",           
    icon: MessageCircle 
  },
  { 
    id: 2, 
    title: "Eco reflete com você",      
    description: "Perguntas pensadas especialmente para você aprofundar o que realmente importa no seu momento.",     
    icon: Lightbulb 
  },
  { 
    id: 3, 
    title: "Padrões se revelam",     
    description: "A cada conversa, a Eco identifica sinais e comportamentos que se repetem — e que você talvez nunca tinha notado.",                    
    icon: TrendingUp 
  },
  { 
    id: 4, 
    title: "Suas memórias ficam guardadas", 
    description: "Tudo fica salvo de forma privada para você revisitar e ver sua evolução ao longo do tempo.", 
    icon: BookOpen 
  },
];

const HowItWorks: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(1);

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
            <ul className="space-y-1.5 text-sm text-[#1D1D1F]">
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
      className="relative w-full scroll-mt-24 bg-[#F5F5F7] py-14 md:py-20"
    >
      {/* Header */}
      <div className="mx-auto mb-10 flex w-full max-w-7xl flex-col px-4 sm:px-6 lg:px-8">
        <h2 className="text-left font-semibold text-[#1D1D1F] text-[32px] sm:text-[40px] leading-[1.08]">
          Seu diário inteligente em 4 passos simples
        </h2>
        <p className="mt-3 max-w-2xl text-left text-[#6E6E73] text-[15px] sm:text-[17px] leading-relaxed">
          Em menos de 7 minutos, a Eco transforma suas palavras em insights profundos sobre você mesmo.
        </p>
      </div>

      {/* MOBILE (cards empilhados) */}
      <div className="mx-auto w-full max-w-3xl space-y-3 px-4 sm:px-6 lg:hidden">
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
                className="flex w-full items-start gap-3 rounded-[inherit] px-4 py-4 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgba(0,122,255,0.25)]"
                aria-expanded={active}
                aria-pressed={active}
                aria-controls={`demo-${step.id}`}
              >
                {/* Ícone com Apple Blue */}
                <span
                  className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-[#007AFF] text-white"
                  aria-hidden
                >
                  <Icon size={20} strokeWidth={2} />
                </span>

                <span className="flex flex-1 flex-col">
                  <span className="flex items-baseline gap-2">
                    <span className="text-[17px] font-semibold leading-snug text-[#1D1D1F]">
                      {step.title}
                    </span>
                    <span className="ml-auto text-[13px] font-semibold text-[#007AFF] tabular-nums">
                      0{step.id}
                    </span>
                  </span>
                  <span className="mt-1 text-[14px] leading-relaxed text-[#6E6E73]">
                    {step.description}
                  </span>
                </span>
              </button>

              {active && (
                <div id={`demo-${step.id}`} className="px-4 pb-4">
                  <div className="rounded-xl border border-[#E5E5EA] bg-[#FAFAFA] p-4 shadow-[0_1px_1px_rgba(0,0,0,0.04)]">
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
                className={`flex w-full items-start gap-4 rounded-2xl px-5 py-5 text-left transition-all duration-200
                  border ${active ? "border-[#007AFF] bg-[rgba(0,122,255,0.06)]" : "border-[#E5E5EA] bg-white"}
                  shadow-[0_1px_1px_rgba(0,0,0,0.04)]
                  hover:shadow-[0_10px_24px_rgba(0,0,0,0.08)]
                  focus:outline-none focus-visible:ring-2 focus-visible:ring-[rgba(0,122,255,0.25)]`}
                aria-pressed={active}
                aria-controls={`demo-desktop-${step.id}`}
              >
                <span
                  className={`flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full transition-colors ${
                    active 
                      ? "bg-[#007AFF] text-white" 
                      : "bg-[#F5F5F7] text-[#1D1D1F]"
                  }`}
                  aria-hidden
                >
                  <Icon size={20} strokeWidth={2} />
                </span>
                <span className="flex flex-1 flex-col">
                  <span className="flex items-baseline gap-2">
                    <span className={`text-[18px] font-semibold leading-snug ${active ? "text-[#007AFF]" : "text-[#1D1D1F]"}`}>
                      {step.title}
                    </span>
                    <span className={`ml-auto text-[13px] font-semibold tabular-nums ${active ? "text-[#007AFF]" : "text-[#8E8E93]"}`}>
                      0{step.id}
                    </span>
                  </span>
                  <span className="mt-1.5 text-[15px] leading-relaxed text-[#6E6E73]">
                    {step.description}
                  </span>
                </span>
              </button>
            );
          })}
        </div>

        {/* Painel de demonstração */}
        <div className="relative min-h-[400px] overflow-hidden rounded-3xl border border-[#E5E5EA] bg-white p-8 shadow-[0_8px_32px_rgba(0,0,0,0.08)]">
          <div className="relative h-full" id="demo-desktop">
            <Demo step={activeStep || 1} />
          </div>
          
          {/* Badge decorativo em Apple Blue */}
          <div className="absolute bottom-6 left-8 flex items-center gap-2 rounded-full px-3 py-1.5 text-xs font-medium text-[#007AFF]" style={{ background: "linear-gradient(90deg, rgba(0,122,255,0.10), rgba(0,122,255,0.18))" }}>
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#007AFF] opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[#007AFF]"></span>
            </span>
            Exemplo ao vivo
          </div>
        </div>
      </div>

      {/* CTA Final */}
      <div className="mx-auto mt-12 flex w-full max-w-7xl flex-col items-center px-4 sm:px-6 lg:px-8">
        <button
          className="group relative overflow-hidden rounded-full px-8 py-4 text-[17px] font-semibold text-white shadow-[0_4px_16px_rgba(0,122,255,0.30)] transition-all hover:shadow-[0_8px_24px_rgba(0,122,255,0.40)] hover:scale-105"
          style={{
            background: "linear-gradient(90deg, #007AFF 0%, #007AFF 100%)"
          }}
        >
          <span className="relative z-10 flex items-center gap-2">
            🎯 Começar minha jornada grátis
          </span>
          {/* overlay para hover (azul + levemente mais escuro) */}
          <div
            className="absolute inset-0 opacity-0 transition-opacity group-hover:opacity-100"
            style={{ background: "linear-gradient(90deg, #007AFF 0%, #0066E6 100%)" }}
          />
        </button>
        <p className="mt-3 text-center text-[13px] text-[#8E8E93]">
          Grátis • Sem cartão • Cancele quando quiser
        </p>
      </div>
    </section>
  );
};

export default HowItWorks;
