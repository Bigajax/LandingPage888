import React from "react";
import { Clock, MessageCircle, NotebookPen } from "lucide-react";

import Card from "../components/Card";
import IconBadge from "../components/IconBadge";
import Section from "../components/Section";

const steps = [
  {
    title: "1. Descarregue o que sente",
    description: "Grave voz, escreva ou faça upload de fotos. Eco reconhece emoções automaticamente, sem julgamento.",
    icon: <MessageCircle className="h-5 w-5" strokeWidth={1.5} />,
  },
  {
    title: "2. Veja o espelho",
    description: "O algoritmo organiza lembranças em mapas calmos com cores que respeitam sua experiência.",
    icon: <NotebookPen className="h-5 w-5" strokeWidth={1.5} />,
  },
  {
    title: "3. Integre no seu ritmo",
    description: "Receba convites suaves para pausar, respirar e integrar aprendizados sem notificações invasivas.",
    icon: <Clock className="h-5 w-5" strokeWidth={1.5} />,
  },
];

const HowItWorksSection: React.FC = () => {
  return (
    <Section
      id="como-funciona"
      eyebrow="Como funciona"
      title="Três passos para clareza emocional"
      description="Eco cria um ciclo de reflexão rápido e acolhedor — inspirado em terapias somáticas, com a suavidade do design Apple."
    >
      <div className="grid gap-6 lg:grid-cols-3">
        {steps.map((step) => (
          <Card key={step.title} className="h-full space-y-5 bg-white/85">
            <IconBadge className="h-12 w-12 rounded-2xl">{step.icon}</IconBadge>
            <div className="space-y-2">
              <h3 className="text-lg font-semibold text-ink-base">{step.title}</h3>
              <p className="text-sm text-ink-soft">{step.description}</p>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
};

export default HowItWorksSection;
