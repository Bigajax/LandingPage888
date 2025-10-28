import React from "react";

import Container from "../components/Container";

const practices = [
  {
    label: "Sinta",
    description: "Identifique nuances emocionais com prompts guiados para nomear o que surge.",
  },
  {
    label: "Fale",
    description: "Transcreva voz ou texto para que a IA conecte ideias, crenças e microemoções.",
  },
  {
    label: "Respire",
    description: "Protocolos inspirados em Dispenza, Kahneman e Marco Aurélio para reprogramar presença.",
  },
];

const RespirationReflectionSection: React.FC = () => {
  return (
    <section id="respirar" className="bg-gradient-to-b from-white via-white to-surface-subtle/70" aria-labelledby="respirar-heading">
      <Container className="grid gap-12 py-24 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.9fr)] lg:items-center lg:gap-16">
        <div className="space-y-6">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-ink-soft">respiração e reflexão</p>
          <h2 id="respirar-heading" className="text-3xl font-semibold tracking-tight text-ink-base sm:text-4xl">
            Sinta, fale ou apenas respire.
          </h2>
          <p className="text-base text-ink-soft">
            A Eco entende texto, voz e silêncio. Use exercícios guiados baseados em Dispenza, Kahneman e Marco Aurélio. Deixe que a IA traduza o invisível em insight.
          </p>
          <p className="text-lg font-medium text-brand-blue">Clareza começa quando você se escuta de verdade.</p>
        </div>

        <div className="space-y-5 rounded-3xl border border-brand-blue/25 bg-white/85 p-8 shadow-soft backdrop-blur">
          {practices.map((practice) => (
            <div key={practice.label} className="rounded-2xl border border-surface-muted/60 bg-surface-subtle/70 p-5">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-ink-base">{practice.label}</h3>
                <span aria-hidden className="text-xl text-brand-blue">•</span>
              </div>
              <p className="mt-2 text-sm text-ink-soft">{practice.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default RespirationReflectionSection;
