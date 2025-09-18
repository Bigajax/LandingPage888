import React from "react";
import {
  Mic,
  Sparkles,
  SunDim,
  BookOpen,
  ChevronRight,
  type LucideIcon,
} from "lucide-react";

/** Badge do ícone: vidro suave, sem arestas */
const IconBadge: React.FC<{ Icon: LucideIcon }> = ({ Icon }) => (
  <span
    aria-hidden
    className="
      relative flex h-12 w-12 items-center justify-center rounded-full
      bg-[radial-gradient(130%_130%_at_20%_15%,rgba(111,93,255,0.15),rgba(255,255,255,0))]
      border border-[#5B4BFF]/15 backdrop-blur
      shadow-[inset_0_1px_0_rgba(255,255,255,0.6),0_4px_14px_rgba(42,32,100,0.12)]
    "
  >
    <Icon size={20} className="text-[#5B4BFF]" strokeWidth={1.9} />
  </span>
);

type Step = {
  icon: LucideIcon;
  title: string;
  subtitle: string;
  cta?: { label: string; href: string };
};

const STEPS: Step[] = [
  {
    icon: Mic,
    title: "Compartilhe",
    subtitle: "Dê forma ao que sente.",
  },
  {
    icon: Sparkles,
    title: "Reflexão guiada",
    subtitle: "Um reflexo do seu interior.",
  },
  {
    icon: SunDim,
    title: "Clareza emocional",
    subtitle: "Veja o invisível ganhar contorno.",
  },
  {
    icon: BookOpen,
    title: "Memórias conscientes",
    subtitle: "Um lugar para guardar o essencial.",
    cta: { label: "Ver relatório emocional →", href: "#relatorio" },
  },
];

const Card: React.FC<{
  stepNumber: number;
  icon: LucideIcon;
  title: string;
  subtitle: string;
  cta?: { label: string; href: string };
}> = ({ stepNumber, icon: Icon, title, subtitle, cta }) => (
  <div
    className="
      group relative flex items-start gap-4 rounded-2xl
      border border-[#EAEAF3] bg-white/90 p-5 sm:p-6
      shadow-[0_2px_8px_rgba(17,24,39,0.04)]
      transition-all duration-200 hover:shadow-[0_8px_24px_rgba(17,24,39,0.08)]
      hover:border-[#5B4BFF]/30
    "
  >
    <IconBadge Icon={Icon} />

    <div className="min-w-0 flex-1">
      <div className="flex items-start gap-3">
        <div className="min-w-0 flex-1">
          <h3 className="text-zinc-900 text-lg font-semibold tracking-tight">
            {title}
          </h3>
          <p className="text-zinc-600 mt-1">{subtitle}</p>
        </div>

        {/* número à direita */}
        <div className="select-none text-zinc-400 text-sm font-semibold pl-2">
          {String(stepNumber).padStart(2, "0")}
        </div>
      </div>

      {cta && (
        <a
          href={cta.href}
          className="
            mt-3 inline-flex items-center gap-1 text-[15px] font-medium
            text-[#5B4BFF] hover:text-[#4c3cff] transition-colors
          "
        >
          {cta.label}
          <ChevronRight size={16} />
        </a>
      )}
    </div>

    {/* halo sutil no hover */}
    <span
      aria-hidden
      className="
        pointer-events-none absolute inset-0 rounded-2xl opacity-0
        group-hover:opacity-100 transition
        bg-[radial-gradient(80%_80%_at_10%_10%,rgba(91,75,255,0.07),transparent)]
      "
    />
  </div>
);

const ComoFunciona: React.FC = () => {
  return (
    <section className="relative w-full bg-[#F7F8FC] py-14 px-5 sm:py-16 sm:px-8">
      <div className="mx-auto max-w-5xl">
        <h2 className="mb-8 text-center text-2xl sm:text-3xl font-semibold text-zinc-900">
          Como a <span className="text-[#5B4BFF]">Eco</span> funciona
        </h2>

        <div className="grid grid-cols-1 gap-4 sm:gap-5">
          {STEPS.map((s, i) => (
            <Card
              key={s.title}
              stepNumber={i + 1}
              icon={s.icon}
              title={s.title}
              subtitle={s.subtitle}
              cta={s.cta}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ComoFunciona;
