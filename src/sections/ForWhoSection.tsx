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
};

/** Quatro “tiles” harmônicos com a paleta do CTA (roxo suave) */
const issues: Issue[] = [
  {
    Icon: Brain,
    title: "Confusão emocional",
    signals: "Não saber o que sente, pensamentos em loop.",
    help: "Nomeia emoções, organiza ideias e aponta o próximo passo.",
  },
  {
    Icon: Clock,
    title: "Piloto automático",
    signals: "Dias iguais, reagir no impulso e só perceber depois.",
    help: "Cria pausas curtas para recuperar presença e escolher melhor.",
  },
  {
    Icon: Repeat,
    title: "Padrões que voltam",
    signals: "Mesmos conflitos/decisões; sensação de voltar à estaca zero.",
    help: "Mostra gatilho → resposta → consequência e sugere micro-ações.",
  },
  {
    Icon: Compass,
    title: "Transições sem clareza",
    signals: "Decisões grandes com neblina emocional.",
    help: "Foca no essencial e dá serenidade para decidir com calma.",
  },
];

/** Cápsula do ícone (branquinho + tint sutil) */
const IconBadge: React.FC<{ Icon: LucideIcon }> = ({ Icon }) => (
  <span
    aria-hidden
    className="relative grid h-11 w-11 place-items-center rounded-xl border border-[color:rgba(var(--violet-600-rgb),0.22)] shadow-[0_14px_32px_rgba(var(--violet-600-rgb),0.14)] sm:h-12 sm:w-12"
    style={{
      background:
        "linear-gradient(180deg, rgba(255,255,255,0.96), rgba(255,255,255,0.64))",
      boxShadow:
        "0 14px 30px rgba(var(--violet-600-rgb),0.14), inset 0 1px 0 rgba(255,255,255,0.75)",
    }}
  >
    <span
      className="absolute inset-0 rounded-xl"
      style={{
        background:
          "radial-gradient(60% 60% at 50% 50%, rgba(var(--violet-600-rgb),0.18) 0%, transparent 72%)",
      }}
    />
    <Icon size={20} strokeWidth={1.9} className="relative text-[color:var(--violet-600)]" />
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
          <span className="bg-gradient-to-r from-[color:var(--violet-500)] to-[color:var(--violet-600)] bg-clip-text text-transparent">
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
        {issues.map((c, i) => {
          const isActive = active === i;
          return (
            <button
              key={c.title}
              type="button"
              aria-pressed={isActive}
              onClick={() => setActive(isActive ? null : i)}
              className="group relative text-left rounded-[22px] border border-[color:rgba(var(--violet-600-rgb),0.22)] bg-white/80 p-5 shadow-[0_14px_36px_rgba(var(--violet-600-rgb),0.12)] transition-all duration-300 hover:-translate-y-[1px] hover:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--violet-300)] focus-visible:ring-offset-2 focus-visible:ring-offset-white sm:p-6 lg:p-7"
            >
              <div className="relative flex items-start gap-4 sm:gap-5">
                <IconBadge Icon={c.Icon} />
                <div className="flex-1 min-w-0">
                  <h3 className="text-[#1D1D1F] font-semibold tracking-tight text-[18px] sm:text-[20px] lg:text-[22px]">
                    {c.title}
                  </h3>
                  {/* Sinais ↔ O que muda (altura fixa) */}
                  <div className="relative mt-2 lg:mt-3 min-h-[44px]">
                    <p
                      className={`absolute inset-0 text-[#6E6E73] text-[14px] sm:text-[15px] leading-snug transition-all duration-200 ${isActive ? "opacity-0 translate-y-1" : "opacity-100 translate-y-0"} group-hover:opacity-0 group-hover:translate-y-1`}
                    >
                      <span className="text-[#8E8E93]">Sinais: </span>
                      {c.signals}
                    </p>
                    <p
                      className={`absolute inset-0 text-[#1D1D1F] text-[14px] sm:text-[15px] leading-snug transition-all duration-200 ${isActive ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-1"} group-hover:opacity-100 group-hover:translate-y-0`}
                    >
                      <span className="text-[#7B7F8C]">O que muda: </span>
                      {c.help}
                    </p>
                  </div>
                </div>
              </div>
            </button>
          );
        })}
      </div>
    </section>
  );
};

export default TargetAudienceSection;
