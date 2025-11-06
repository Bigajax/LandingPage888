import React from "react";
import { Clock, MessageCircle, NotebookPen } from "lucide-react";

import Card from "../components/Card";
import IconBadge from "../components/IconBadge";
import Section from "../components/Section";

const steps = [
  {
    number: "1",
    title: "Descarregue o que sente",
    description: "Fale, escreva ou grave; a Eco escuta sem julgar.",
    icon: <MessageCircle className="h-5 w-5" strokeWidth={1.5} />,
  },
  {
    number: "2",
    title: "Veja o espelho",
    description: "Memórias e padrões se revelam em mapas claros.",
    icon: <NotebookPen className="h-5 w-5" strokeWidth={1.5} />,
  },
  {
    number: "3",
    title: "Integre no seu ritmo",
    description: "Reflita, respire e siga leve.",
    icon: <Clock className="h-5 w-5" strokeWidth={1.5} />,
  },
];

const HowItWorksSection: React.FC = () => {
  return (
    <Section
      id="como-funciona"
      eyebrow="🧭 Como funciona"
      title="Três passos para clareza que fica."
      description="Um ciclo leve de reflexão inspirado na filosofia e no design calmo."
    >
      <div className="grid gap-6 lg:grid-cols-3">
        {steps.map((step) => (
          <Card
            key={step.title}
            className="h-full space-y-5 border-eco-border/40 bg-white/70 shadow-eco-soft transition-all duration-300 hover:shadow-eco-medium"
          >
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-eco-babyBlue/20 text-lg font-light text-eco-babyBlue">
                {step.number}
              </div>
              <IconBadge className="h-10 w-10 rounded-xl bg-eco-babySoft/20 text-eco-babyBlue">
                {step.icon}
              </IconBadge>
            </div>
            <div className="space-y-2">
              <h3 className="text-lg font-normal text-eco-text">{step.title}</h3>
              <p className="text-sm font-light leading-relaxed text-eco-textSoft">{step.description}</p>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
};

export default HowItWorksSection;
