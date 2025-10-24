import React from "react";

import Card from "../components/Card";
import Section from "../components/Section";

import brene from "@/assets/mentores/brene-brown.png";
import daniel from "@/assets/mentores/daniel-kahneman.png";
import joe from "@/assets/mentores/joe-dispenza.png";
import marco from "@/assets/mentores/marco-aurelio.png";
import nassim from "@/assets/mentores/nassim-taleb.png";
import seneca from "@/assets/mentores/seneca.png";

type Mentor = {
  name: string;
  tag: string;
  src: string;
  pillar: "Filosofia" | "Psicologia" | "Ciência";
  summary: string;
};

const mentors: Mentor[] = [
  {
    name: "Marco Aurélio",
    tag: "Estoicismo",
    src: marco,
    pillar: "Filosofia",
    summary: "Princípios estoicos para cuidar do que depende de você e acalmar emoções.",
  },
  {
    name: "Sêneca",
    tag: "Estoicismo",
    src: seneca,
    pillar: "Filosofia",
    summary: "Visão prática sobre adversidades e serenidade para os ciclos do dia a dia.",
  },
  {
    name: "Daniel Kahneman",
    tag: "Psicologia comportamental",
    src: daniel,
    pillar: "Psicologia",
    summary: "Reconhece vieses mentais para escolhas conscientes e notas mais lúcidas.",
  },
  {
    name: "Brené Brown",
    tag: "Vulnerabilidade & coragem",
    src: brene,
    pillar: "Psicologia",
    summary: "Convida à autenticidade, autocompaixão e coragem emocional no processo.",
  },
  {
    name: "Nassim Taleb",
    tag: "Antifragilidade",
    src: nassim,
    pillar: "Ciência",
    summary: "Transforma incerteza em crescimento com micro-ações que fortalecem no tempo.",
  },
  {
    name: "Dr. Joe Dispenza",
    tag: "Neurociência aplicada",
    src: joe,
    pillar: "Ciência",
    summary: "Mostra como atenção e hábito reconfiguram estados emocionais com gentileza.",
  },
];

const pillarGlyph: Record<Mentor["pillar"], string> = {
  Filosofia: "📜",
  Psicologia: "🧠",
  Ciência: "🔬",
};

const MentorsSection: React.FC = () => {
  return (
    <Section
      id="pensadores"
      align="center"
      eyebrow="Referências vivas"
      title="Pensadores que inspiram a Eco"
      description="Sabedoria estoica, psicologia contemporânea e ciência unem-se para orientar reflexões humanas, profundas e confiáveis."
      className="relative overflow-hidden bg-gradient-to-b from-white via-white to-[#F5F7FA]"
    >
      <div aria-hidden className="pointer-events-none absolute inset-x-0 top-40 flex justify-center">
        <div className="h-64 w-[520px] rounded-full bg-[radial-gradient(circle,rgba(0,122,255,0.18)_0%,transparent_70%)] blur-3xl" />
      </div>
      <div className="relative z-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {mentors.map((mentor, index) => (
          <Card
            key={mentor.name}
            className="flex h-full flex-col gap-6 border-surface-muted/50 bg-white/90 p-6 shadow-soft transition-transform duration-200 ease-subtle motion-safe:hover:-translate-y-1"
          >
            <div className="flex items-center gap-4">
              <div className="relative h-16 w-16 overflow-hidden rounded-2xl border border-surface-muted/70 bg-white">
                <img
                  src={mentor.src}
                  alt={mentor.name}
                  loading={index < 2 ? "eager" : "lazy"}
                  decoding="async"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="text-left">
                <p className="text-base font-semibold text-ink-base">{mentor.name}</p>
                <p className="text-sm text-ink-soft">{mentor.tag}</p>
              </div>
            </div>

            <div className="flex items-center justify-between text-xs font-medium text-ink-soft">
              <span className="inline-flex items-center gap-2 rounded-full border border-surface-muted/60 bg-white px-3 py-1 text-ink-base/80">
                <span>{pillarGlyph[mentor.pillar]}</span>
                {mentor.pillar}
              </span>
              <span className="hidden text-brand-blue sm:inline-flex">Eco seleciona</span>
            </div>

            <p className="text-sm leading-relaxed text-ink-soft">{mentor.summary}</p>
          </Card>
        ))}
      </div>
    </Section>
  );
};

export default MentorsSection;
