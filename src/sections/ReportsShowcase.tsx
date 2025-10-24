import React from "react";

import Section from "../components/Section";

const mockups = [
  {
    title: "Mapa emocional 2D",
    description: "Veja emoções dominantes por quadrantes de energia e profundidade.",
    gradient: "from-[#CFE7FF]/70 via-white/80 to-white/40",
  },
  {
    title: "Linha do tempo 30 dias",
    description: "Picos de intensidade, notas rápidas e momentos de virada.",
    gradient: "from-[#D5E8FF]/80 via-white/70 to-white/40",
  },
];

const ReportsShowcase: React.FC = () => {
  return (
    <Section
      id="relatorios"
      eyebrow="Relatórios"
      title="Relatórios que realmente ajudam"
      description="Mapa emocional, emoções dominantes e linha do tempo (30 dias)."
      align="center"
    >
      <div className="mt-12 grid gap-8 lg:grid-cols-2">
        {mockups.map((mockup) => (
          <article
            key={mockup.title}
            className="relative overflow-hidden rounded-[32px] border border-white/60 bg-white/70 p-8 shadow-soft-lg backdrop-blur-xl transition duration-200 ease-subtle motion-safe:hover:-translate-y-1"
          >
            <div className={`absolute inset-0 bg-gradient-to-br ${mockup.gradient}`} aria-hidden />
            <div className="relative space-y-4">
              <div className="flex items-center justify-between text-xs font-medium uppercase tracking-[0.3em] text-ink-secondary/70">
                <span>{mockup.title}</span>
                <span className="rounded-full border border-white/60 bg-white/80 px-3 py-1 text-[0.65rem] text-ink-secondary">
                  Hover para ver detalhes
                </span>
              </div>
              <p className="text-sm text-ink-secondary">{mockup.description}</p>
              <div className="rounded-3xl border border-white/40 bg-white/70 p-6 shadow-soft backdrop-blur">
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="space-y-3">
                    <p className="text-sm font-semibold text-ink-primary">Insights rápidos</p>
                    <ul className="space-y-2 text-sm text-ink-secondary">
                      <li>• Emoção dominante: Alegria serena</li>
                      <li>• Gatilho recorrente: Reuniões às segundas</li>
                      <li>• Recomenda: Micro-pausas de respiração</li>
                    </ul>
                  </div>
                  <div className="relative flex items-center justify-center rounded-2xl border border-white/70 bg-white/80 p-4">
                    <div className="h-28 w-28 rounded-full bg-[conic-gradient(from_90deg_at_50%_50%,#007AFF_0deg,#7FB6FF_220deg,#D5E8FF_360deg)] opacity-90" />
                    <div className="absolute bottom-4 right-4 rounded-full border border-white/60 bg-white/80 px-3 py-1 text-[0.65rem] text-ink-secondary">
                      Tooltip suave
                    </div>
                  </div>
                </div>
              </div>
              <p className="text-sm text-ink-secondary">
                Dados privados, organizados em camadas simples, com foco em decisões do seu dia.
              </p>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
};

export default ReportsShowcase;
