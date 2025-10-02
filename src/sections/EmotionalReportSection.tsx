import React from "react";
import type { LucideIcon } from "lucide-react";
import { Sparkles, Smile, BarChart2, Mic, Volume2, Waves } from "lucide-react";
import { useScrollReveal } from "../hooks/useScrollReveal";

/* ---------- Tipos ---------- */
type Feature = {
  id: string;
  title: string;
  Icon: LucideIcon;
  points: string[];
};

/* ---------- Conteúdo (texto puro) ---------- */
const FEATURES: Feature[] = [
  {
    id: "memorias",
    title: "Memórias emocionais",
    Icon: Sparkles,
    points: [
      "Registre momentos marcantes com emoção, tags e contexto.",
      "Tudo organizado para revisitar quando precisar.",
    ],
  },
  {
    id: "perfil",
    title: "Perfil emocional",
    Icon: Smile,
    points: [
      "Veja emoções recorrentes e tendências ao longo do tempo.",
      "Um retrato que evolui com você.",
    ],
  },
  {
    id: "relatorio",
    title: "Relatórios",
    Icon: BarChart2,
    points: [
      "Padrões, picos e insights transformados em texto claro.",
      "Resumo semanal para acompanhar sua evolução.",
    ],
  },
  {
    id: "voz",
    title: "Diário por voz",
    Icon: Mic,
    points: [
      "Fale livremente: gravamos, transcrevemos e salvamos.",
      "Ideal para quem prefere refletir falando.",
    ],
  },
  {
    id: "tts",
    title: "Voz da Eco",
    Icon: Volume2,
    points: [
      "Respostas em áudio natural para escutar em movimento.",
      "A mesma clareza, em outro formato.",
    ],
  },
  {
    id: "conversa",
    title: "Conversa em voz",
    Icon: Waves,
    points: [
      "Fluxo contínuo de fala ↔ escuta com a Eco.",
      "Mais presença, menos atrito.",
    ],
  },
];

/* ---------- UI ---------- */
const Card: React.FC<Feature> = ({ Icon, title, points }) => {
  return (
    <article
      className="
        rounded-2xl bg-white/70 backdrop-blur-md border border-black/5
        p-5 sm:p-6 shadow-[0_12px_30px_rgba(2,6,23,0.06)]
        transition-transform hover:-translate-y-0.5
        focus-within:ring-2 focus-within:ring-[#5B4BFF]/20
      "
      tabIndex={0}
    >
      <div className="flex items-center gap-3">
        <span className="grid place-items-center h-10 w-10 rounded-xl bg-violet-50 text-violet-600 ring-1 ring-white/70">
          <Icon size={18} strokeWidth={1.75} />
        </span>
        <h3 className="text-base sm:text-[17px] font-semibold text-neutral-900">{title}</h3>
      </div>

      <ul className="mt-3 space-y-2 text-[15px] leading-relaxed text-neutral-700">
        {points.map((p, i) => (
          <li key={i} className="pl-4 relative">
            <span className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-[#5B4BFF]/50" />
            {p}
          </li>
        ))}
      </ul>
    </article>
  );
};

/* ---------- Section (simplificada) ---------- */
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
            text-center lg:text-left mb-8
            transition-all duration-700
            ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"}
          `}
        >
          <h2 id="features-title" className="heading-lg font-semibold text-neutral-900">
            Explore os recursos da <span className="text-[#5B4BFF]">Eco</span>
          </h2>
          <p className="subheading text-neutral-600 max-w-3xl mt-2 mx-auto lg:mx-0">
            Tudo o que você precisa para escrever, refletir e enxergar padrões — de forma simples e direta.
          </p>
        </header>

        {/* Cards, sem gráficos/fotos */}
        <div
          className={`
            grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6
            transition-all duration-700 delay-100
            ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"}
          `}
          role="list"
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
