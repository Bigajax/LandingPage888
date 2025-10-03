import React, { useEffect, useState } from "react";
import { type LucideIcon, Brain, Clock, Repeat, Compass } from "lucide-react";

/* Detecta se há hover (mouse) para decidir copy do subtítulo */
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

const issues: Issue[] = [
  { Icon: Brain,   title: "Confusão emocional",     signals: "Não saber o que sente, pensamentos em loop.", help: "Nomeia emoções, organiza ideias e aponta o próximo passo." },
  { Icon: Clock,   title: "Piloto automático",      signals: "Dias iguais, reagir no impulso e só perceber depois.", help: "Cria pausas curtas para recuperar presença e escolher melhor." },
  { Icon: Repeat,  title: "Padrões que voltam",     signals: "Mesmos conflitos/decisões; sensação de voltar à estaca zero.", help: "Mostra gatilho → resposta → consequência e sugere micro-ações." },
  { Icon: Compass, title: "Transições sem clareza", signals: "Decisões grandes com neblina emocional.", help: "Foca no essencial e dá serenidade para decidir com calma." },
];

/** Ícone monocromático */
const IconMark: React.FC<{ Icon: LucideIcon }> = ({ Icon }) => (
  <div
    className="grid place-items-center h-10 w-10 sm:h-11 sm:w-11 rounded-md border border-[#ECECEC] bg-white"
    style={{ boxShadow: "inset 0 1px 0 rgba(255,255,255,0.9), 0 4px 10px rgba(0,0,0,0.04)" }}
    aria-hidden
  >
    <Icon size={20} strokeWidth={1.8} className="text-[#1D1D1F]" />
  </div>
);

const TargetAudienceSection: React.FC = () => {
  const canHover = useHoverCapable();
  const legend = `${canHover ? "Passe o mouse" : "Toque"} em um card para ver como a Eco ajuda.`;
  const [active, setActive] = useState<number | null>(null);

  return (
    <section
      id="para-quem"
      aria-labelledby="para-quem-title"
      className="relative overflow-hidden bg-[#F5F5F7] py-12 sm:py-16 px-4 sm:px-6"
    >
      {/* Header menor */}
      <div className="relative w-full max-w-7xl mx-auto mb-6 sm:mb-8 text-left">
        <h2
          id="para-quem-title"
          className="font-semibold tracking-tight text-[#1D1D1F] text-[30px] sm:text-[36px] lg:text-[42px] leading-[1.08]"
        >
          Quando a <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#9B8CFF] to-[#7C5CFF]">Eco</span> ajuda.
        </h2>
        <p className="mt-2 text-[14px] sm:text-[15px] leading-relaxed text-[#6E6E73] max-w-2xl">
          Quatro situações do dia a dia. {legend}
        </p>
      </div>

      {/* Grid mais compacto */}
      <div className="relative w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 lg:gap-6">
        {issues.map((c, i) => {
          const isActive = active === i;
          return (
            <button
              key={c.title}
              type="button"
              aria-pressed={isActive}
              onClick={() => setActive(isActive ? null : i)}
              className="
                group relative text-left rounded-lg
                bg-white border border-[#E5E5EA]
                p-5 sm:p-6
                shadow-[0_1px_1px_rgba(0,0,0,0.04),0_6px_18px_rgba(0,0,0,0.06)]
                transition-all duration-200
                hover:-translate-y-[1px]
                hover:shadow-[0_10px_24px_rgba(0,0,0,0.08)]
                focus:outline-none focus-visible:ring-2 focus-visible:ring-[#7C5CFF]/15
              "
            >
              <div className="relative flex items-start gap-3 sm:gap-4">
                <IconMark Icon={c.Icon} />
                <div className="flex-1 min-w-0">
                  {/* título dos cards menor */}
                  <h3 className="text-[#1D1D1F] font-semibold tracking-tight text-[18px] sm:text-[20px]">
                    {c.title}
                  </h3>

                  {/* textos menores e altura menor */}
                  <div className="relative mt-1.5 sm:mt-2 min-h-[40px]">
                    <p
                      className={`
                        absolute inset-0 text-[#6E6E73] text-[13px] sm:text-[14px] leading-snug
                        transition-all duration-200
                        ${isActive ? "opacity-0 translate-y-1" : "opacity-100 translate-y-0"}
                        group-hover:opacity-0 group-hover:translate-y-1
                      `}
                    >
                      <span className="text-[#8E8E93]">Sinais: </span>{c.signals}
                    </p>
                    <p
                      className={`
                        absolute inset-0 text-[#1D1D1F] text-[13px] sm:text-[14px] leading-snug
                        transition-all duration-200
                        ${isActive ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-1"}
                        group-hover:opacity-100 group-hover:translate-y-0
                      `}
                    >
                      <span className="text-[#7B7F8C]">O que muda: </span>{c.help}
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
