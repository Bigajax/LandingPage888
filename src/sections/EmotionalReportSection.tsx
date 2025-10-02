import React from "react";
import type { LucideIcon } from "lucide-react";
import { Sparkles, Smile, BarChart2, Mic, Volume2, Waves } from "lucide-react";
import { useScrollReveal } from "../hooks/useScrollReveal";

type Feature = {
  id: string;
  title: string;
  Icon: LucideIcon;
  points: string[];
};

const FEATURES: Feature[] = [
  {
    id: "memorias",
    title: "Memórias emocionais",
    Icon: Sparkles,
    points: [
      "Guarde momentos com emoção, tags e contexto.",
      "Revise quando quiser — tudo organizado.",
    ],
  },
  {
    id: "reflexao",
    title: "Reflexão guiada",
    Icon: Sparkles,
    points: [
      "Perguntas que funcionam como espelho.",
      "Clareza sem respostas genéricas.",
    ],
  },
  {
    id: "perfil",
    title: "Perfil emocional",
    Icon: Smile,
    points: [
      "Enxergue padrões e recorrências.",
      "Um retrato que evolui com você.",
    ],
  },
  {
    id: "relatorios",
    title: "Relatórios",
    Icon: BarChart2,
    points: [
      "Insights em texto claro, sem jargão.",
      "Resumo semanal da sua evolução.",
    ],
  },
  {
    id: "voz",
    title: "Diário por voz",
    Icon: Mic,
    points: [
      "Fale, a Eco transcreve e salva.",
      "Ideal para refletir em movimento.",
    ],
  },
  {
    id: "conversa",
    title: "Conversa em voz",
    Icon: Waves,
    points: [
      "Fluxo contínuo de fala ↔ escuta.",
      "Mais presença, menos atrito.",
    ],
  },
  // Se quiser manter TTS como item separado:
  {
    id: "tts",
    title: "Voz da Eco",
    Icon: Volume2,
    points: [
      "Respostas em áudio natural.",
      "Escute onde estiver.",
    ],
  },
];

const Card: React.FC<Feature> = ({ Icon, title, points }) => (
  <article
    role="listitem"
    tabIndex={0}
    className="
      rounded-2xl bg-white/70 backdrop-blur-md border border-black/5
      p-5 sm:p-6 shadow-[0_12px_30px_rgba(2,6,23,0.06)]
      transition-transform hover:-translate-y-0.5
      focus:outline-none focus-visible:ring-2 focus-visible:ring-[#111827]/10
    "
  >
    <div className="flex items-center gap-3">
      <span className="grid place-items-center h-10 w-10 rounded-xl bg-violet-50 text-violet-600 ring-1 ring-white/70">
        <Icon size={18} strokeWidth={1.75} />
      </span>
      <h3 className="text-[17px] font-semibold text-neutral-900">{title}</h3>
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

const EmotionalReportSection: React.FC = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section
      ref={ref}
      aria-labelledby="features-title"
      className="
        relative w-full bg-gradient-to-br from-[#F7F9FC] to-[#EEF3FF]
        py-16 sm:py-20 px-4 sm:px-6 md:px-8
      "
    >
      <div className="mx-auto w-full max-w-7xl">
        <header
          className={`
            text-center lg:text-left mb-10
            transition-all duration-700
            ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"}
          `}
        >
          <h2 id="features-title" className="heading-lg font-semibold text-neutral-900">
            Recursos da <span className="text-[#5B4BFF]">Eco</span>, sem complicação.
          </h2>
          <p className="subheading text-neutral-600 max-w-3xl mt-2 mx-auto lg:mx-0">
            O essencial para escrever, refletir e enxergar padrões — com clareza e leveza.
          </p>
        </header>

        <div
          role="list"
          className={`
            grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6
            transition-all duration-700 delay-100
            ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"}
          `}
        >
          {FEATURES.map((f) => (
            <Card key={f.id} {...f} />
          ))}
        </div>

        {/* CTA discreto para amarrar fluxo */}
        <div className="mt-10 flex justify-center lg:justify-start">
          <a
            href="https://ecofrontend888.vercel.app/login"
            className="
              inline-flex items-center rounded-full bg-black text-white
              px-6 py-3 text-sm font-semibold
              shadow-[0_12px_30px_rgba(2,6,23,0.12)]
              transition hover:brightness-110 focus:outline-none
              focus-visible:ring-2 focus-visible:ring-black/30
            "
          >
            Explorar a Eco
          </a>
        </div>
      </div>
    </section>
  );
};

export default EmotionalReportSection;
