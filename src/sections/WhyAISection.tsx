import React from "react";

import Card from "../components/Card";
import Section from "../components/Section";

const reasons = [
  {
    title: "🕓 Sempre disponível",
    description: "24 horas por dia, sem julgamentos. A Eco te acolhe no momento em que você precisar falar.",
  },
  {
    title: "🧘 Complementar à terapia",
    description: "Não substitui profissionais humanos; aprofunda processos terapêuticos com registro constante e sensível.",
  },
  {
    title: "🧩 Memória perfeita",
    description: "A Eco lembra o que você compartilha e acompanha sua evolução, respeitando o contexto de cada história.",
  },
];

const WhyAISection: React.FC = () => {
  return (
    <Section
      eyebrow="Elefante na sala"
      title="Por que uma IA, e não um humano?"
      description="Porque clareza emocional precisa estar disponível no exato momento em que a emoção acontece."
      className="bg-surface-soft/40"
    >
      <div className="grid gap-6 lg:grid-cols-3">
        {reasons.map((reason) => (
          <Card key={reason.title} className="h-full space-y-3 bg-white/90">
            <h3 className="text-lg font-semibold text-ink-base">{reason.title}</h3>
            <p className="text-sm text-ink-soft">{reason.description}</p>
          </Card>
        ))}
      </div>
    </Section>
  );
};

export default WhyAISection;
