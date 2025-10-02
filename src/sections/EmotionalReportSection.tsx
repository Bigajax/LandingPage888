import React from "react";
import type { LucideIcon } from "lucide-react";
import { Sparkles, BarChart2, Smile, Mic } from "lucide-react";
import { useScrollReveal } from "../hooks/useScrollReveal";

/* ---------- Tipos ---------- */
type Feature = {
  id: string;
  title: string;
  desc: string;
  Icon: LucideIcon;
};

/* ---------- Conteúdo enxuto ---------- */
const FEATURES: Feature[] = [
  {
    id: "diario",
    title: "Diário expressivo",
    desc: "Escreva com liberdade. A Eco conduz, você se escuta.",
    Icon: Sparkles,
  },
  {
    id: "insights",
    title: "Insights claros",
    desc: "Padrões e tendências traduzidos em texto simples.",
    Icon: BarChart2,
  },
  {
    id: "memorias",
    title: "Memórias conscientes",
    desc: "Momentos que importam, salvos com contexto.",
    Icon: Smile,
  },
  {
    id: "voz",
    title: "Voz & áudio",
    desc: "Grave, transcreva e escute respostas em áudio natural.",
    Icon: Mic,
  },
];

/* ---------- UI ---------- */
const Card: React.FC<Feature> = ({ Icon, title, desc }) => (
  <article
    className="
      group rounded-3xl border border-white/60 bg-white/60 backdrop-blur-xl
      p-6 sm:p-7 shadow-[0_12px_30px_rgba(2,6,23,0.06)]
      transition-all hover:-translate-y-0.5
      focus-within:ring-2 focus-within:ring-[#5B4BFF]/25
    "
    tabIndex={0}
  >
    <div className="flex items-center gap-3">
      <span className="grid place-items-center h-12 w-12 rounded-2xl bg-violet-50 text-violet-600 ring-1 ring-white/70">
        <Icon size={20} strokeWidth={1.7} />
      </span>
      <h3 className="text-[17px] sm:text-[18px] font-semibold text-neutral-900">{title}</h3>
    </div>
    <p className="mt-3 text-[15px] leading-relaxed text-neutral-600">{desc}</p>
  </article>
);

/* ---------- Section minimal ---------- */
const EmotionalReportSection: React.FC = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section
      ref={ref}
      className="
        relative w-full bg-gradient-to-br from-[#F7F9FC] to-[#EEF3FF]
        py-16 sm:py-20 px-4 sm:px-6 md:px-8
      "
      aria-labelledby="features-title"
    >
      <div className="mx-auto w-full max-w-7xl">
        <header
          className={`
            text-center lg:text-left mb-10
            transition-all duration-700
            ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"}
          `}
        >
          <span className="inline-flex items-center rounded-full border border-white/60 bg-white/50 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.26em] text-neutral-700 backdrop-blur">
            Recursos
          </span>

          <h2 id="features-title" className="heading-lg font-semibold text-neutral-900 mt-4">
            O essencial da <span className="text-[#5B4BFF]">Eco</span>
          </h2>

          <p className="subheading text-neutral-600 max-w-3xl mt-2 mx-auto lg:mx-0">
            Simples, direto e humano. Tudo para transformar insight em mudança real.
          </p>
        </header>

        {/* Grid de cards — clean */}
        <div
          role="list"
          className={`
            grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6
            transition-all duration-700 delay-100
            ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"}
          `}
        >
          {FEATURES.map((f) => (
            <Card key={f.id} {...f} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default EmotionalReportSection;
