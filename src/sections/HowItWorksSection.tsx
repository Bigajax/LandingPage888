import React from "react";

import Card from "../components/Card";
import Section from "../components/Section";

const steps = [
  {
    title: "1. Descarregue o que sente",
    description: "Voz, texto ou foto. Eco organiza tudo em cartões limpos com linhas finas.",
  },
  {
    title: "2. Veja o espelho",
    description: "Mapas emocionais mostram padrões e memórias com a mesma calma do login.",
  },
  {
    title: "3. Integre no seu ritmo",
    description: "Respirações guiadas e convites suaves ajudam a processar sem pressa.",
  },
];

const HowItWorksSection: React.FC = () => {
  return (
    <Section
      id="como-funciona"
      eyebrow="Como funciona"
      title="Três passos, mesma estética serena"
      description="Cada etapa mantém o peso visual equilibrado: espaços generosos, bordas sutis e tipografia atenta."
    >
      <div className="grid gap-6 lg:grid-cols-3">
        {steps.map((step) => (
          <Card key={step.title} className="h-full">
            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-eco-text">{step.title}</h3>
              <p className="text-sm text-eco-subtle">{step.description}</p>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
};

export default HowItWorksSection;
