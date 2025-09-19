import React, { useEffect, useState } from "react";
import { type LucideIcon, Brain, Clock, Repeat, Compass } from "lucide-react";

/** Detecta se o dispositivo suporta hover (mouse) */
function useHoverCapable() {
  const [canHover, setCanHover] = useState(true);
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

type Issue = {
  Icon: LucideIcon;
  title: string;
  signals: string;
  help: string;
};

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

/** Badge com vidro claro + glow roxo sutil */
const IconBadge: React.FC<{ Icon: LucideIcon; active?: boolean }> = ({ Icon, active }) => (
  <span
    aria-hidden
    className={`
      relative grid place-items-center h-12 w-12 rounded-full
      bg-[linear-gradient(180deg,rgba(255,255,255,0.92),#fff)]
      border border-[#E7EAF6]
      shadow-[inset_0_1px_0_rgba(255,255,255,0.95),0_6px_16px_rgba(17,24,39,0.08)]
      after:content-[''] after:absolute after:inset-[-8px] after:rounded-full
      after:bg-[radial-gradient(50%_50%_at_50%_50%,rgba(91,75,255,0.16),transparent)]
      after:opacity-0 group-hover/card:after:opacity-100 transition-all duration-200
      ${active ? "after:opacity-100 border-[#5B4BFF]/30" : ""}
    `}
  >
    <Icon size={20} strokeWidth={1.9} className="text-[#5B4BFF]" />
  </span>
);

const TargetAudienceSection: React.FC = () => {
  const canHover = useHoverCapable();
  const sub = `${canHover ? "Passe o mouse" : "Toque"} em um card para ver como a Eco traz clareza.`;

  const [active, setActive] = useState<number | null>(null);
  const [showHint, setShowHint] = useState(true);
  useEffect(() => {
    const t = setTimeout(() => setShowHint(false), 1800);
    return () => clearTimeout(t);
  }, []);
  const dismissHint = () => setShowHint(false);

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

      {/* título + subtítulo */}
      <div className="relative max-w-5xl mx-auto text-center mb-10 sm:mb-14">
        <h2
          id="para-quem-title"
          className="text-white text-[28px] sm:text-[36px] lg:text-[44px] font-semibold leading-tight tracking-tight"
        >
          Quando a <span className="text-[#5B4BFF]">Eco</span> ajuda
        </h2>
        <p className="mt-3 text-white/80 text-[15px] sm:text-[17px] max-w-2xl mx-auto">
          4 situações do dia a dia — {sub}
        </p>
      </div>

      {/* GRID */}
      <div className="relative max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6 lg:gap-8">
        {issues.map((c, i) => {
          const isActive = active === i;
          return (
            <button
              key={c.title}
              type="button"
              aria-pressed={isActive}
              onClick={() => {
                dismissHint();
                setActive(isActive ? null : i);
              }}
              onMouseEnter={dismissHint}
              onTouchStart={dismissHint}
              onFocus={dismissHint}
              className={`
                group/card relative text-left rounded-3xl
                bg-white !bg-opacity-100               /* SÓLIDO: garante contraste alto */
                border border-[#E6E9F6]
                p-5 sm:p-6 lg:p-7
                shadow-[0_8px_26px_rgba(17,24,39,0.08)]
                transition-all duration-300
                hover:-translate-y-[1px]
                hover:shadow-[0_18px_44px_rgba(17,24,39,0.12)]
                hover:border-[#5B4BFF]/35
                focus:outline-none focus-visible:ring-2 focus-visible:ring-[#5B4BFF]/25
                before:content-[''] before:absolute before:inset-0 before:rounded-[inherit]
                before:pointer-events-none
                before:bg-[radial-gradient(90%_90%_at_12%_8%,rgba(91,75,255,0.06),transparent_42%),radial-gradient(120%_100%_at_100%_120%,rgba(17,24,39,0.06),transparent_40%)]
                before:opacity-0 group-hover/card:before:opacity-100 before:transition-opacity
                after:content-[''] after:absolute after:inset-0 after:rounded-[inherit]
                after:pointer-events-none after:shadow-[inset_0_1px_0_rgba(255,255,255,0.9)]
              `}
            >
              <div className="relative flex items-start gap-4 sm:gap-5">
                <IconBadge Icon={c.Icon} active={isActive} />

                <div className="flex-1 min-w-0">
                  <h3 className="text-[#0F111A] font-semibold tracking-tight text-[18px] sm:text-[20px] lg:text-[22px]">
                    {c.title}
                  </h3>

                  {/* Troca Sinais ↔ O que muda (altura fixa p/ não pular) */}
                  <div className="relative mt-2 lg:mt-3 min-h-[44px]">
                    <p
                      className={`
                        absolute inset-0 text-[#3B4151] text-[14px] sm:text-[15px] leading-snug
                        transition-all duration-200
                        ${isActive ? "opacity-0 translate-y-1" : "opacity-100 translate-y-0"}
                        group-hover/card:opacity-0 group-hover/card:translate-y-1
                      `}
                    >
                      <span className="text-[#8A90A4]">Sinais: </span>
                      {c.signals}
                    </p>

                    <p
                      className={`
                        absolute inset-0 text-[#0F111A] text-[14px] sm:text-[15px] leading-snug
                        transition-all duration-200
                        ${isActive ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-1"}
                        group-hover/card:opacity-100 group-hover/card:translate-y-0
                      `}
                    >
                      <span className="text-[#5F6682]">O que muda: </span>
                      {c.help}
                    </p>
                  </div>
                </div>
              </div>

              {/* dica inicial */}
              {showHint && (
                <div className="absolute left-5 bottom-5 sm:bottom-6">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[12px] text-[#2A2F3D] bg-white border border-[#E6E9F6] shadow-[0_6px_18px_rgba(17,24,39,0.08)]">
                    {canHover ? "Passe o mouse" : "Toque"} para ver o que muda
                  </span>
                </div>
              )}
            </button>
          );
        })}
      </div>
    </section>
  );
};

export default TargetAudienceSection;
