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

type Issue = {
  Icon: LucideIcon;
  title: string;
  signals: string;
  help: string;
  accent: {
    tintBg: string;
    tintBorder: string;
    color: string;
  };
};

const issueCardBaseClasses =
  "group relative text-left rounded-[22px] bg-white border border-[#E7EAF2] p-5 sm:p-6 lg:p-7 shadow-[0_8px_24px_rgba(17,24,39,0.06)] transition-all duration-300 hover:-translate-y-[1px] hover:shadow-[0_16px_40px_rgba(17,24,39,0.1)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#7C5CFF]/20";

const IssueTile: React.FC<{
  issue: Issue;
  index: number;
  activeIndex: number | null;
  onToggle: (index: number) => void;
}> = ({ issue, index, activeIndex, onToggle }) => {
  const isActive = activeIndex === index;
  return (
    <button
      type="button"
      aria-pressed={isActive}
      onClick={() => onToggle(isActive ? -1 : index)}
      className={issueCardBaseClasses}
    >
      <div className="relative flex items-start gap-3.5 sm:gap-4">
        <IconBadge Icon={issue.Icon} accent={issue.accent} />
        <div className="min-w-0 flex-1">
          <h3 className="text-[#1D1D1F] font-semibold tracking-tight text-[17px] sm:text-[18px] lg:text-[19px]">
            {issue.title}
          </h3>
          <div className="relative mt-2 lg:mt-2.5 min-h-[40px]">
            <p
              className={`absolute inset-0 text-[#6E6E73] text-[13px] sm:text-[14px] leading-snug transition-all duration-200 ${
                isActive ? "opacity-0 translate-y-1" : "opacity-100 translate-y-0"
              } group-hover:opacity-0 group-hover:translate-y-1`}
            >
              <span className="text-[#8E8E93]">Sinais: </span>
              {issue.signals}
            </p>
            <p
              className={`absolute inset-0 text-[#1D1D1F] text-[13px] sm:text-[14px] leading-snug transition-all duration-200 ${
                isActive ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-1"
              } group-hover:opacity-100 group-hover:translate-y-0`}
            >
              <span className="text-[#7B7F8C]">O que muda: </span>
              {issue.help}
            </p>
          </div>
        </div>
      </div>
    </button>
  );
};

/** Quatro “tiles” harmônicos com a paleta do CTA (roxo suave) */
const issues: Issue[] = [
  {
    Icon: Brain,
    title: "Confusão emocional",
    signals: "Não saber o que sente, pensamentos em loop.",
    help: "Nomeia emoções, organiza ideias e aponta o próximo passo.",
    accent: { tintBg: "#F1EFFF", tintBorder: "#E6E1F9", color: "#7C5CFF" },
  },
  {
    Icon: Clock,
    title: "Piloto automático",
    signals: "Dias iguais, reagir no impulso e só perceber depois.",
    help: "Cria pausas curtas para recuperar presença e escolher melhor.",
    accent: { tintBg: "#EFF6FF", tintBorder: "#DBEAFE", color: "#2563EB" },
  },
  {
    Icon: Repeat,
    title: "Padrões que voltam",
    signals: "Mesmos conflitos/decisões; sensação de voltar à estaca zero.",
    help: "Mostra gatilho → resposta → consequência e sugere micro-ações.",
    accent: { tintBg: "#ECFDF5", tintBorder: "#D1FAE5", color: "#16A34A" },
  },
  {
    Icon: Compass,
    title: "Transições sem clareza",
    signals: "Decisões grandes com neblina emocional.",
    help: "Foca no essencial e dá serenidade para decidir com calma.",
    accent: { tintBg: "#FFF7ED", tintBorder: "#FFEDD5", color: "#F97316" },
  },
];

/** Cápsula do ícone (branquinho + tint sutil) */
const IconBadge: React.FC<{ Icon: LucideIcon; accent: Issue["accent"] }> = ({
  Icon,
  accent,
}) => (
  <span
    aria-hidden
    className="relative grid h-9 w-9 sm:h-10 sm:w-10 place-items-center rounded-[14px]"
    style={{
      background:
        "linear-gradient(180deg, rgba(255,255,255,0.98), rgba(255,255,255,1))",
      boxShadow:
        "inset 0 1px 0 rgba(255,255,255,0.9), 0 6px 14px rgba(17,24,39,0.04)",
      border: `1px solid ${accent.tintBorder}`,
    }}
  >
    <span
      className="absolute inset-0 rounded-[14px]"
      style={{
        background: `radial-gradient(58% 58% at 50% 45%, ${accent.tintBg} 0%, transparent 70%)`,
      }}
    />
    <Icon
      size={15}
      strokeWidth={1.9}
      className="text-[inherit]"
      style={{ color: accent.color }}
    />
  </span>
);

const TargetAudienceSection: React.FC = () => {
  const canHover = useHoverCapable();
  const sub = `${canHover ? "Passe o mouse" : "Toque"} em um card para ver como a Eco traz clareza.`;
  const [active, setActive] = useState<number | null>(null);

  return (
    <section
      id="para-quem"
      aria-labelledby="para-quem-title"
      className="relative overflow-hidden bg-[#F7F6FB] py-16 sm:py-20 px-5 sm:px-8"
    >
      {/* Halos clarinhos */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -left-24 top-[-10%] w-[55vw] h-[55vw] rounded-full blur-[120px] opacity-35 bg-[radial-gradient(circle,#E9E7FF_0%,transparent_65%)]" />
        <div className="absolute right-[-18%] bottom-[-18%] w-[60vw] h-[60vw] rounded-full blur-[130px] opacity-30 bg-[radial-gradient(circle,#E6F0FF_0%,transparent_70%)]" />
      </div>

      {/* Header alinhado à esquerda (como o "como funciona") */}
      <div className="relative w-full max-w-7xl mx-auto mb-8 sm:mb-12 text-left">
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

      {/* Grid de cards (mesma largura da seção de referência) */}
      <div className="relative w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 lg:gap-7">
        {issues.map((issue, index) => (
          <IssueTile
            key={issue.title}
            issue={issue}
            index={index}
            activeIndex={active}
            onToggle={(nextIndex) => setActive(nextIndex === -1 ? null : nextIndex)}
          />
        ))}
      </div>
    </section>
  );
};

export default TargetAudienceSection;
