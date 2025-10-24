import React from "react";
import { BookOpenCheck, Map, MessagesSquare } from "lucide-react";

import Section from "../components/Section";

const cards = [
  {
    title: "Memórias com sentido",
    description: "Registre emoções (≥7) e referências leves, sem fricção.",
    icon: BookOpenCheck,
  },
  {
    title: "Mapa & padrões",
    description: "Veja padrões emocionais e evoluções ao longo do tempo.",
    icon: Map,
  },
  {
    title: "Perguntas que clareiam",
    description: "A ECO devolve perguntas abertas, no tom certo.",
    icon: MessagesSquare,
  },
];

const MindMirrorSection: React.FC = () => {
  return (
    <Section
      id="beneficios"
      eyebrow="Proposta de valor"
      title="Mais presença. Menos ruído."
      description="Cards claros, com foco no essencial, para que você avance com leveza."
      className="bg-surface-tint/40"
    >
      <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {cards.map(({ title, description, icon: Icon }) => (
          <article
            key={title}
            className="group relative h-full overflow-hidden rounded-[28px] border border-surface-border bg-white/80 p-8 shadow-[0_24px_50px_-36px_rgba(15,23,42,0.28)] transition duration-200 ease-subtle motion-safe:hover:-translate-y-1 motion-safe:hover:shadow-soft-lg"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-brand-blue/15 bg-brand-blue/10 text-brand-blue">
              <Icon className="h-5 w-5" strokeWidth={1.5} />
            </div>
            <h3 className="mt-6 text-xl font-semibold text-ink-primary">{title}</h3>
            <p className="mt-3 text-sm text-ink-secondary">{description}</p>
          </article>
        ))}
      </div>
    </Section>
  );
};

export default MindMirrorSection;
