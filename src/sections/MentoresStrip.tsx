// src/sections/MentoresStrip.tsx
import React from "react";
import { BookOpen, Brain, Sparkles } from "lucide-react";
import Section from "../components/Section";

type Mentor = {
  name: string;
  tag: string;
  description: string;
  pillar: "Filosofia" | "Psicologia" | "Ciência";
  emoji: string;
};

const MENTORES: Mentor[] = [
  {
    name: "Marco Aurélio",
    tag: "Estoicismo",
    description: "Foco e serenidade",
    pillar: "Filosofia",
    emoji: "🏛️",
  },
  {
    name: "Sêneca",
    tag: "Estoicismo",
    description: "Adversidade com sabedoria",
    pillar: "Filosofia",
    emoji: "📜",
  },
  {
    name: "Daniel Kahneman",
    tag: "Heurísticas",
    description: "Clareza cognitiva",
    pillar: "Psicologia",
    emoji: "🧠",
  },
  {
    name: "Dr. Joe Dispenza",
    tag: "Neurociência",
    description: "Mudança interna",
    pillar: "Ciência",
    emoji: "🔬",
  },
  {
    name: "Eckhart Tolle",
    tag: "Presença",
    description: "Consciência do agora",
    pillar: "Filosofia",
    emoji: "🌟",
  },
];

const PILLAR_CONFIG = {
  Filosofia: { icon: BookOpen, color: "eco-earth" },
  Psicologia: { icon: Brain, color: "eco-babyBlue" },
  Ciência: { icon: Sparkles, color: "eco-babySoft" },
};

const MentoresStrip: React.FC = () => {
  return (
    <Section
      id="filosofia"
      eyebrow="✨ Coração da Eco"
      title="As mentes que inspiram a Eco."
      description="Filosofia estoica, psicologia e ciência aplicada — princípios que sustentam cada resposta."
      className="bg-white"
    >
      {/* Grid de mentores */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {MENTORES.map((mentor) => {
          const PillarIcon = PILLAR_CONFIG[mentor.pillar].icon;
          return (
            <div
              key={mentor.name}
              className="group relative overflow-hidden rounded-2xl border border-eco-border/40 bg-eco-offWhite/50 p-6 shadow-eco-soft transition-all duration-300 hover:shadow-eco-medium"
            >
              {/* Icon badge */}
              <div className="mb-4 flex items-center justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-eco-babySoft/20 text-2xl">
                  {mentor.emoji}
                </div>
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/60 text-eco-babyBlue">
                  <PillarIcon size={16} strokeWidth={1.5} />
                </div>
              </div>

              {/* Content */}
              <div className="space-y-2">
                <div className="inline-flex items-center gap-2 rounded-full bg-eco-babyBlue/10 px-3 py-1 text-xs font-normal text-eco-babyBlue">
                  {mentor.pillar}
                </div>
                <h3 className="text-xl font-normal text-eco-text">{mentor.name}</h3>
                <p className="text-sm text-eco-textSoft">
                  {mentor.tag} · {mentor.description}
                </p>
              </div>

              {/* Subtle bottom accent */}
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-transparent via-eco-babyBlue/20 to-transparent" />
            </div>
          );
        })}
      </div>

      {/* Explicação adicional */}
      <div className="mt-12 rounded-2xl border border-eco-border/40 bg-white/70 p-6 shadow-eco-soft md:p-8">
        <h3 className="text-lg font-normal text-eco-text">Como essas vozes moldam sua jornada</h3>
        <ul className="mt-4 space-y-3 text-sm font-light leading-relaxed text-eco-textSoft">
          <li className="flex items-start gap-3">
            <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-eco-babyBlue/20 text-xs text-eco-babyBlue">
              1
            </span>
            <span>
              <span className="font-normal text-eco-text">Perguntas e reflexões guiadas</span> nascem do cruzamento entre filosofia e psicologia — nada de respostas genéricas.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-eco-babyBlue/20 text-xs text-eco-babyBlue">
              2
            </span>
            <span>
              <span className="font-normal text-eco-text">Reconhecimento de padrões</span> e vieses para ampliar consciência e escolhas.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-eco-babyBlue/20 text-xs text-eco-babyBlue">
              3
            </span>
            <span>
              <span className="font-normal text-eco-text">Micro-ações práticas</span> com base em neurociência para transformar insight em mudança real.
            </span>
          </li>
        </ul>
      </div>
    </Section>
  );
};

export default MentoresStrip;
