import React, { useEffect, useState } from "react";
import { type LucideIcon, Brain, Clock, Repeat, Compass } from "lucide-react";

/* Detecta se há hover (mouse) para o texto do subtítulo */
function useHoverCapable() {
  const [canHover, setCanHover] = useState(true);
  useEffect(() => {
    const mq = window.matchMedia?.("(hover: hover) and (pointer: fine)");
    const update = () => setCanHover(!!mq?.matches);
    update();
    mq?.addEventListener?.("change", update);
    return () => mq?.removeEventListener?.("change", update);
  }, []);
  return canHover;
}

type Chip = {
  Icon: LucideIcon;
  label: string;
  subtitle: string;
  tooltip: string;
  ariaLabel: string;
  accent: {
    icon: string;
    tint: string;
  };
};

const chips: Chip[] = [
  {
    Icon: Brain,
    label: "Confusão emocional",
    subtitle: "Nomeia emoções, organiza ideias e aponta o próximo passo.",
    tooltip: "Sinais: Não saber o que sente, pensamentos em loop.",
    ariaLabel:
      "Confusão emocional — Nomeia emoções, organiza ideias e aponta o próximo passo.",
    accent: { icon: "#7C5CFF", tint: "rgba(124,92,255,0.12)" },
  },
  {
    Icon: Clock,
    label: "Piloto automático",
    subtitle: "Cria pausas curtas para recuperar presença e escolher melhor.",
    tooltip: "Sinais: Dias iguais, reagir no impulso e só perceber depois.",
    ariaLabel:
      "Piloto automático — Cria pausas curtas para recuperar presença e escolher melhor.",
    accent: { icon: "#2563EB", tint: "rgba(37,99,235,0.12)" },
  },
  {
    Icon: Repeat,
    label: "Padrões que voltam",
    subtitle: "Mostra gatilho, resposta e consequência com micro-ações.",
    tooltip:
      "Sinais: Mesmos conflitos ou decisões com sensação de voltar à estaca zero.",
    ariaLabel:
      "Padrões que voltam — Mostra gatilho, resposta e consequência com micro-ações.",
    accent: { icon: "#16A34A", tint: "rgba(22,163,74,0.12)" },
  },
  {
    Icon: Compass,
    label: "Transições sem clareza",
    subtitle: "Foca no essencial e dá serenidade para decidir com calma.",
    tooltip: "Sinais: Decisões grandes acompanhadas de neblina emocional.",
    ariaLabel:
      "Transições sem clareza — Foca no essencial e dá serenidade para decidir com calma.",
    accent: { icon: "#F97316", tint: "rgba(249,115,22,0.12)" },
  },
];

const TargetAudienceSection: React.FC = () => {
  const canHover = useHoverCapable();
  const sub = `${canHover ? "Passe o mouse" : "Arraste"} pelos sinais que a Eco acolhe.`;

  return (
    <section
      id="para-quem"
      aria-labelledby="para-quem-title"
      className="relative overflow-hidden bg-[#F7F6FB] py-12 px-5 sm:px-8"
    >
      {/* Halos clarinhos */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -left-24 top-[-10%] w-[55vw] h-[55vw] rounded-full blur-[120px] opacity-35 bg-[radial-gradient(circle,#E9E7FF_0%,transparent_65%)]" />
        <div className="absolute right-[-18%] bottom-[-18%] w-[60vw] h-[60vw] rounded-full blur-[130px] opacity-30 bg-[radial-gradient(circle,#E6F0FF_0%,transparent_70%)]" />
      </div>

      {/* Header alinhado à esquerda (como o "como funciona") */}
      <div className="relative w-full max-w-7xl mx-auto mb-8 sm:mb-10 text-left">
        <h2 id="para-quem-title" className="heading-lg font-semibold">
          <span className="text-zinc-900">Quando a </span>
          <span className="bg-gradient-to-r from-[#9B8CFF] to-[#7C5CFF] bg-clip-text text-transparent">
            Eco
          </span>
          <span className="text-zinc-900"> ajuda.</span>
        </h2>
        <p className="mt-2 subheading text-zinc-900 max-w-2xl">
          Quatro situações do dia a dia. {sub}
        </p>
      </div>

      <div className="relative w-full max-w-7xl mx-auto">
        <div
          className="relative -mx-5 px-5 lg:mx-0 lg:px-0 overflow-x-auto overflow-y-visible snap-x snap-mandatory lg:snap-none"
          style={{ scrollbarWidth: "none" }}
        >
          <div className="flex min-w-fit gap-3 pb-1 lg:gap-4 lg:pb-0 [&::-webkit-scrollbar]:hidden">
            {chips.map((chip, index) => {
              const tooltipId = `chip-tooltip-${index}`;
              const Icon = chip.Icon;
              return (
                <button
                  key={chip.label}
                  type="button"
                  className="group relative flex min-h-[48px] snap-start flex-shrink-0 items-center gap-3 rounded-full border border-white/50 bg-white/70 px-4 sm:px-5 text-left font-sans text-sm font-medium text-[#1D1D1F] shadow-[0_6px_18px_rgba(17,24,39,0.08)] backdrop-blur-[14px] transition duration-200 ease-out hover:-translate-y-[1px] hover:shadow-[0_14px_30px_rgba(17,24,39,0.12)] active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8b5cf6]/40"
                  aria-label={chip.ariaLabel}
                  aria-describedby={canHover ? tooltipId : undefined}
                  title={chip.label}
                >
                  <span
                    aria-hidden
                    className="grid h-10 w-10 flex-shrink-0 place-items-center rounded-full"
                    style={{ backgroundColor: chip.accent.tint }}
                  >
                    <Icon size={22} strokeWidth={2} style={{ color: chip.accent.icon }} />
                  </span>
                  <span className="flex min-w-0 flex-col text-left">
                    <span className="truncate">{chip.label}</span>
                    <span className="text-xs font-normal text-[#6E6E73]">
                      {chip.subtitle}
                    </span>
                  </span>
                  {canHover && (
                    <span
                      id={tooltipId}
                      role="tooltip"
                      className="pointer-events-none absolute left-1/2 top-0 z-10 w-max max-w-xs -translate-x-1/2 -translate-y-[calc(100%+14px)] scale-95 rounded-2xl border border-white/60 bg-white/90 px-4 py-2 text-[13px] font-normal text-[#3F3F46] opacity-0 shadow-[0_12px_32px_rgba(17,24,39,0.15)] backdrop-blur-[16px] transition duration-200 group-hover:-translate-y-[calc(100%+18px)] group-hover:scale-100 group-hover:opacity-100"
                    >
                      {chip.tooltip}
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TargetAudienceSection;
