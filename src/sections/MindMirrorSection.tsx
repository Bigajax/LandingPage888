import React from "react";
import { Compass, HeartPulse, PenTool, Sparkles } from "lucide-react";

import Card from "../components/Card";
import IconBadge from "../components/IconBadge";
import Section from "../components/Section";

const features = [
  {
    title: "Mapas com significado",
    description: "Eventos e emoções conectados em linhas calmas.",
    icon: <Compass className="h-5 w-5" strokeWidth={1.5} />,
  },
  {
    title: "Bússola emocional",
    description: "Insights práticos para check-ins conscientes.",
    icon: <HeartPulse className="h-5 w-5" strokeWidth={1.5} />,
  },
  {
    title: "Reflexões curadas",
    description: "Perguntas sob medida para o momento.",
    icon: <PenTool className="h-5 w-5" strokeWidth={1.5} />,
  },
  {
    title: "Integração suave",
    description: "Voz, texto ou imagem. Tudo se organiza sem esforço.",
    icon: <Sparkles className="h-5 w-5" strokeWidth={1.5} />,
  },
];

const MindMirrorSection: React.FC = () => {
  return (
    <Section
      id="beneficios"
      eyebrow="🌸 Espelho da Mente"
      title="Tudo o que você sente, em ordem e sem pressa."
      description="A Eco transforma emoções em estrutura, sem perder o toque humano. Cada card é um reflexo do seu universo interno."
    >
      <div className="grid gap-6 sm:grid-cols-2">
        {features.map((feature) => (
          <Card
            key={feature.title}
            className="h-full space-y-5 border-eco-border/40 bg-white/70 shadow-eco-soft transition-all duration-300 hover:shadow-eco-medium"
          >
            <IconBadge className="h-12 w-12 rounded-2xl bg-eco-babySoft/20 text-eco-babyBlue">
              {feature.icon}
            </IconBadge>
            <div className="space-y-2">
              <h3 className="text-xl font-normal text-eco-text">{feature.title}</h3>
              <p className="text-sm font-light leading-relaxed text-eco-textSoft">{feature.description}</p>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
};

export default MindMirrorSection;
