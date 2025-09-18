import React, { useState } from "react";
import type { LucideIcon } from "lucide-react";
import { Sparkles, Smile, BarChart2 } from "lucide-react";
import RelatorioMemoriasImg from "@/assets/images/relatorio+memorias.png";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const COLOR = "#5B4BFF";

/* ---------- UI atoms ---------- */
const IconBadge: React.FC<{ active?: boolean; children: React.ReactNode }> = ({
  active,
  children,
}) => (
  <span
    data-active={active}
    className="
      relative grid place-items-center
      w-9 h-9 sm:w-10 sm:h-10 rounded-lg
      bg-[linear-gradient(180deg,rgba(255,255,255,0.18),rgba(255,255,255,0.06))]
      backdrop-blur-md border border-white/20
      shadow-[inset_0_1px_0_rgba(255,255,255,0.45),0_1px_3px_rgba(0,0,0,0.08)]
      data-[active=true]:border-[rgba(91,75,255,0.35)]
      data-[active=true]:shadow-[inset_0_1px_0_rgba(255,255,255,0.55),0_8px_20px_rgba(91,75,255,0.16)]
      transition-all duration-200
    "
    aria-hidden
  >
    <i className="pointer-events-none absolute inset-0 rounded-lg opacity-70 bg-[radial-gradient(120%_120%_at_15%_10%,rgba(255,255,255,0.55),rgba(255,255,255,0)_55%)]" />
    {children}
  </span>
);

const TabButton: React.FC<{
  title: string;
  active: boolean;
  onClick: () => void;
  Icon: LucideIcon;
}> = ({ title, active, onClick, Icon }) => (
  <button
    type="button"
    aria-pressed={active}
    onClick={onClick}
    data-active={active}
    className={`
      group relative flex items-center gap-3
      w-full px-4 py-2.5 sm:px-5 sm:py-3
      rounded-xl text-[15px] sm:text-base font-medium
      bg-white/75 border border-white/40
      hover:bg-white/90
      transition-all duration-200
      focus:outline-none focus-visible:ring-2 focus-visible:ring-[${COLOR}] focus-visible:ring-opacity-20
      data-[active=true]:bg-white data-[active=true]:border-transparent
      shadow-[0_1px_2px_rgba(0,0,0,0.04)]
      hover:shadow-[0_4px_14px_rgba(0,0,0,0.06)]
      data-[active=true]:shadow-[0_8px_24px_rgba(91,75,255,0.10)]
    `}
  >
    <span
      className="
        absolute left-0 top-0 bottom-0 w-[3px] rounded-l-xl
        bg-gradient-to-b from-[#7C6BFF] to-[#B3AEFF]
        opacity-0 data-[active=true]:opacity-100 transition-opacity duration-200
      "
    />
    <IconBadge active={active}>
      <Icon
        size={18}
        strokeWidth={1.75}
        absoluteStrokeWidth
        shapeRendering="geometricPrecision"
        className={active ? "text-[#5B4BFF]" : "text-neutral-700"}
      />
    </IconBadge>

    <span className={`truncate ${active ? "text-[#5B4BFF]" : "text-neutral-800"}`}>
      {title}
    </span>
  </button>
);

/* ---------- Content ---------- */
type Tab = {
  id: "memorias" | "perfil" | "relatorio";
  title: string;
  Icon: LucideIcon;
  description: React.ReactNode;
};

const TABS: Tab[] = [
  {
    id: "memorias",
    title: "Memórias emocionais",
    Icon: Sparkles,
    description: (
      <>
        A Eco registra <strong className="text-[#5B4BFF]">momentos marcantes</strong> com emoção
        presente, <strong className="text-[#5B4BFF]">tags-chave</strong>, domínio da vida e uma análise
        sensível. Cada memória se torna um <strong className="text-[#5B4BFF]">reflexo</strong> do que te
        atravessa.
      </>
    ),
  },
  {
    id: "perfil",
    title: "Perfil emocional",
    Icon: Smile,
    description: (
      <>
        A Eco identifica as <strong className="text-[#5B4BFF]">emoções recorrentes</strong> da sua
        jornada e organiza em um <strong className="text-[#5B4BFF]">retrato emocional</strong> que
        evolui com você.
      </>
    ),
  },
  {
    id: "relatorio",
    title: "Relatório emocional",
    Icon: BarChart2,
    description: (
      <>
        Visualize sua jornada em dois painéis: um{" "}
        <strong className="text-[#5B4BFF]">mapa emocional</strong> com zonas de maior atividade e uma{" "}
        <strong className="text-[#5B4BFF]">linha do tempo</strong> com os momentos mais intensos.
      </>
    ),
  },
];

/* ---------- Section ---------- */
const EmotionalReportSection: React.FC = () => {
  const { ref, isVisible } = useScrollReveal();
  const [activeTab, setActiveTab] = useState<Tab["id"]>("memorias");

  const active = TABS.find((t) => t.id === activeTab);

  return (
    <section
      ref={ref}
      className="relative w-full bg-gradient-to-br from-[#F7F9FC] to-[#EEF3FF] py-16 px-4 sm:px-6 md:px-8 flex flex-col items-center overflow-hidden"
    >
      <h2
        className={`text-[28px] sm:text-[34px] lg:text-[40px] font-semibold text-[#0F111A] text-center mb-4 transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
      >
        <span className="font-bold text-black">Explore os recursos da </span>
        <span className="font-bold text-[#5B4BFF]">Eco</span>
      </h2>

      <p
        className={`text-sm sm:text-base text-[#4B4F5C] text-center max-w-2xl mb-8 transition-all duration-700 delay-100 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
      >
        Memórias, perfil e relatórios — tudo em um só lugar, simples e visual.
      </p>

      <div className="mt-4 max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 items-center z-10">
        {/* Tabs + description */}
        <div className="flex flex-col items-center lg:items-start text-gray-800">
          <div className="flex flex-col space-y-3 mb-6 w-full max-w-md">
            {TABS.map((tab) => (
              <TabButton
                key={tab.id}
                title={tab.title}
                active={activeTab === tab.id}
                onClick={() => setActiveTab(tab.id)}
                Icon={tab.Icon}
              />
            ))}
          </div>

          <div
            className={`transition-all duration-500 ease-out max-w-md text-center lg:text-left ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
            }`}
          >
            <p className="text-[15px] sm:text-[16px] leading-relaxed text-neutral-700">
              {active?.description}
            </p>
          </div>
        </div>

        {/* Preview image */}
        <div
          className={`flex justify-center items-center w-full transition-all duration-700 ease-out delay-150 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
          }`}
        >
          <img
            src={RelatorioMemoriasImg}
            alt="Relatório emocional e memórias"
            className="w-full max-w-[420px] sm:max-w-[460px] md:max-w-[500px] lg:max-w-[520px] drop-shadow-xl"
          />
        </div>
      </div>
    </section>
  );
};

export default EmotionalReportSection;
