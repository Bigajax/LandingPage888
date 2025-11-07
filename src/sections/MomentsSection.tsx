import React from "react";

import Card from "../components/Card";
import Section from "../components/Section";

const moments = [
  {
    icon: "🌙",
    title: "Antes de dormir",
    description: "Quando a mente não desliga, a Eco ajuda a desacelerar e clarear o que ainda ocupa o seu peito.",
  },
  {
    icon: "☕",
    title: "Durante o dia",
    description: "Para organizar pensamentos, decisões e tarefas sem perder de vista como você se sente.",
  },
  {
    icon: "💔",
    title: "Depois de uma conversa difícil",
    description: "Entenda o que realmente te afetou e quais limites precisam ser reforçados.",
  },
  {
    icon: "🌿",
    title: "Ao acordar",
    description: "Comece o dia com clareza emocional e intenções conscientes.",
  },
];

const MomentsSection: React.FC = () => {
  return (
    <Section
      id="momentos"
      eyebrow="Quando a Eco faz sentido"
      title="Momentos para respirar com a Eco"
      description="Uma rede orgânica de pausas suaves para você se reconectar consigo em qualquer hora do dia."
    >
      <div className="grid gap-6 sm:grid-cols-2">
        {moments.map((moment) => (
          <Card key={moment.title} className="h-full space-y-4 bg-white/85">
            <span className="text-3xl" aria-hidden>
              {moment.icon}
            </span>
            <div className="space-y-2">
              <h3 className="text-xl font-semibold text-ink-base">{moment.title}</h3>
              <p className="text-sm text-ink-soft">{moment.description}</p>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
};

export default MomentsSection;
