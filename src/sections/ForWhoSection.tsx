import React, { useEffect, useState } from "react";
import { type LucideIcon, Brain, Clock, Repeat, Compass } from "lucide-react";

/** Hook para detectar se o dispositivo suporta hover (mouse) */
function useHoverCapable() {
  const [canHover, setCanHover] = useState<boolean>(true);
  useEffect(() => {
    if (typeof window === "undefined" || !("matchMedia" in window)) return;
    const mq = window.matchMedia("(hover: hover) and (pointer: fine)");
    const update = () => setCanHover(mq.matches);
    update();
    mq.addEventListener?.("change", update);
    return () => mq.removeEventListener?.("change", update);
  }, []);
  return canHover;
}

/** Modelo: dor + sinais + como a Eco ajuda */
type Issue = {
  Icon: LucideIcon;
  title: string;
  signals: string;
  help: string;
};

/** 4 dores principais */
const issues: Issue[] = [
  {
    Icon: Brain,
    title: "Confusão emocional",
    signals: "“não sei o que estou sentindo”, pensamentos em loop.",
    help: "Nomear emoções, organizar ideias e escolher o próximo passo — em 5–7 minutos.",
  },
  {
    Icon: Clock,
    title: "Piloto automático",
    signals: "dias iguais, reagir no impulso e só perceber depois.",
    help: "Pausas curtas que recuperam presença e deixam a escolha mais consciente.",
  },
  {
    Icon: Repeat,
    title: "Padrões que se repetem",
    signals: "mesmos conflitos/decisões; sensação de “voltar à estaca zero”.",
    help: "Ver gatilho → resposta → consequência e agir com micro-ações para quebrar o ciclo.",
  },
  {
    Icon: Compass,
    title: "Transições sem clareza",
    signals: "decisões grandes com neblina emocional.",
    help: "Foco no essencial e serenidade para decidir com calma.",
  },
];

/* Badge do ícone — vidro minimalista */
const IconBadge: React.FC<{ Icon: LucideIcon; active?: boolean }> = ({ Icon, active }) => (
  <span
    aria-hidden
    className={`
      relative overflow-hidden
      flex items-center justify-center
      w-11 h-11 sm:w-12 sm:h-12
      rounded-xl sm:rounded-2xl
      bg-[linear-gradient(to_bottom,rgba(255,255,255,0.14),rgba(255,255,255,0.05))]
      backdrop-blur-md border border-white/12
      shadow-[0_6px_16px_rgba(0,0,0,0.22)]
      before:absolute before:inset-0 before:rounded-inherit before:content-['']
      before:bg-[radial-gradient(130%_130%_at_20%_15%,rgba(255,255,255,0.35),rgba(255,255,255,0)_60%)]
      after:absolute after:inset-0 after:rounded-inherit after:content-['']
      after:shadow-[inset_0_1px_0_rgba(255,255,255,0.22),inset_0_-10px_16px_rgba(0,0,0,0.16)]
      transition-[box-shadow,border-color] duration-200
      group-hover/card:shadow-[0_8px_20px_rgba(0,0,0,0.26)]
      ${active ? "shadow-[0_10px_22px_rgba(0,0,0,0.28)] border-white/18" : ""}
    `}
  >
    <Icon
      size={26}
      strokeWidth={1.9}
      absoluteStrokeWidth
      shapeRendering="geometricPrecision"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="text-white"
    />
  </span>
);

const TargetAudienceSection: React.FC = () => {
  const canHover = useHoverCapable();                 // ← detecção de mouse/touch
  const hint = canHover
    ? "Passe o mouse nos cards para ver o que muda."
    : "Toque nos cards para ver o que muda.";

  // No mobile (sem hover), um tap alterna o card entre “Sinais” e “O que muda”
  const [active, setActive] = useState<number | null>(null);

  return (
    <section
      id="para-quem"
      aria-labelledby="para-quem-title"
      className="relative overflow-hidden bg-[#0A0A0D] py-20 sm:py-24 px-5 sm:px-8"
    >
      {/* fundo sutil */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 left-1/3 w-[70vw] h-[70vw] rounded-full blur-[120px] opacity-20 bg-[radial-gradient(circle,#8C89FF_0%,transparent_70%)]" />
        <div className="absolute bottom-[-25%] right-[-10%] w-[60vw] h-[60vw] rounded-full blur-[120px] opacity-16 bg-[radial-gradient(circle,#AAB2FF_0%,transparent_70%)]" />
      </div>

      <div className="relative max-w-5xl mx-auto text-center mb-10 sm:mb-14">
        <h2
          id="para-quem-title"
          className="text-white text-[28px] sm:text-[36px] lg:text-[44px] font-semibold leading-tight tracking-tight"
        >
          Quando a <span className="text-[#5B4BFF]">Eco</span> ajuda
        </h2>
        <p className="mt-3 text-white/70 text-[15px] sm:text-[17px] max-w-2xl mx-auto">
          4 situações comuns — {hint}
        </p>
      </div>

      {/* GRID 2×2 (1×4 no mobile) */}
      <div className="relative max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6 lg:gap-8">
        {issues.map((c, i) => {
          const isActive = active === i;
          return (
            <button
              key={c.title}
              type="button"
              aria-pressed={isActive}
              onClick={() => setActive(isActive ? null : i)}
              className={`
                group/card relative overflow-hidden text-left
                rounded-2xl lg:rounded-3xl
                bg-white/[0.03] backdrop-blur-xl
                border border-white/10
                shadow-[0_10px_26px_rgba(0,0,0,0.22)]
                p-5 sm:p-6 lg:p-7
                transition-all duration-200
                hover:-translate-y-[1px] focus-visible:-translate-y-[1px]
                focus:outline-none focus-visible:ring-2 focus-visible:ring-white/15
              `}
            >
              {/* highlight sutil */}
              <span
                aria-hidden
                className="pointer-events-none absolute inset-0 rounded-inherit bg-[radial-gradient(120%_80%_at_20%_0%,rgba(255,255,255,0.10),transparent_40%)]"
              />

              <div className="relative flex items-start gap-4 sm:gap-5">
                <IconBadge Icon={c.Icon} active={isActive} />

                <div className="flex-1 min-w-0">
                  <h3 className="text-white font-semibold tracking-tight text-[18px] sm:text-[20px] lg:text-[22px]">
                    {c.title}
                  </h3>

                  {/* área que alterna Sinais ↔ O que muda; altura fixa p/ não pular */}
                  <div className="relative mt-2 lg:mt-3 min-h-[44px]">
                    {/* Sinais (default) */}
                    <p
                      className={`
                        absolute inset-0 text-white/70 text-[14px] sm:text-[15px] leading-snug
                        transition-all duration-250
                        ${isActive ? "opacity-0 translate-y-1" : "opacity-100 translate-y-0"}
                        group-hover/card:opacity-0 group-hover/card:translate-y-1
                      `}
                    >
                      <span className="text-white/50">Sinais: </span>
                      {c.signals}
                    </p>

                    {/* O que muda (hover/active) */}
                    <p
                      className={`
                        absolute inset-0 text-white/90 text-[14px] sm:text-[15px] leading-snug
                        transition-all duration-250
                        ${isActive ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-1"}
                        group-hover/card:opacity-100 group-hover/card:translate-y-0
                      `}
                    >
                      <span className="text-white/60">O que muda: </span>
                      {c.help}
                    </p>
                  </div>
                </div>
              </div>

              {/* pílula dinâmica: mouse vs toque */}
              <div
                className="
                  relative mt-5 inline-flex items-center gap-2 px-2.5 py-1
                  rounded-full text-[12px] text-white/60 border border-white/10
                  bg-white/[0.03] transition-opacity duration-200
                  group-hover/card:opacity-70
                "
              >
                <span className="">{canHover ? "Passe o mouse" : "Toque"}</span>
                <span className="opacity-50">para ver o que muda</span>
              </div>
            </button>
          );
        })}
      </div>
    </section>
  );
};

export default TargetAudienceSection;
