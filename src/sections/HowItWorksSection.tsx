import React from "react";
import { MessageCircle, ScanFace, Sparkles } from "lucide-react";

import Card from "../components/Card";
import IconBadge from "../components/IconBadge";
import Section from "../components/Section";

const steps = [
  {
    title: "1️⃣ Você fala",
    description: "Por texto ou voz, descarregue o que está sentindo. Nenhum detalhe é pequeno demais.",
    icon: <MessageCircle className="h-5 w-5" strokeWidth={1.5} />,
  },
  {
    title: "2️⃣ A Eco reflete",
    description: "Ela identifica emoções, padrões e significados sutis, devolvendo perguntas que expandem sua percepção.",
    icon: <ScanFace className="h-5 w-5" strokeWidth={1.5} />,
  },
  {
    title: "3️⃣ Você entende",
    description: "O que era ruído vira insight e próximos passos. Tudo armazenado com contexto e sensibilidade.",
    icon: <Sparkles className="h-5 w-5" strokeWidth={1.5} />,
  },
];

const HowItWorksSection: React.FC = () => {
  return (
    <Section
      id="como-funciona"
      eyebrow="O Fluxo"
      title="Como a Eco transforma emoções em clareza"
      description="Em três movimentos, a experiência vai da descarga emocional até a integração consciente."
    >
      <div className="grid gap-6 lg:grid-cols-3">
        {steps.map((step) => (
          <Card key={step.title} className="h-full space-y-5">
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
