import React from "react";

import Section from "../components/Section";

const useCases = [
  {
    title: "Check-in de presença",
    description: "Use a ECO para pausar entre reuniões e voltar ao corpo com um mini-scan guiado.",
  },
  {
    title: "Revisão de vieses (Kahneman)",
    description: "Monitore padrões automáticos e veja onde o Sistema 1 domina suas decisões.",
  },
  {
    title: "Coragem & vulnerabilidade (Brené Brown)",
    description: "Construa vocabulário emocional para conversas difíceis com o tom que te acolhe.",
  },
  {
    title: "Reflexão estoica",
    description: "Reflita sobre o que depende de você e ancore ações no essencial, sem drama.",
  },
];

const UseCasesSection: React.FC = () => {
  return (
    <Section
      id="casos-de-uso"
      eyebrow="Casos de uso"
      title="Para diferentes momentos do seu dia"
      description="Ajuste o ritmo conforme a vida acontece."
    >
      <div className="grid gap-6 md:grid-cols-2">
        {useCases.map((card) => (
          <article
            key={card.title}
            className="rounded-[28px] border border-surface-border bg-white/75 p-8 shadow-[0_24px_50px_-36px_rgba(15,23,42,0.2)] transition duration-200 ease-subtle motion-safe:hover:-translate-y-1 motion-safe:hover:shadow-soft"
          >
            <h3 className="text-lg font-semibold text-ink-primary">{card.title}</h3>
            <p className="mt-3 text-sm text-ink-secondary">{card.description}</p>
          </article>
        ))}
      </div>
    </Section>
  );
};

export default UseCasesSection;
