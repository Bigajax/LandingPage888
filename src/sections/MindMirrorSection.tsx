import React from "react";
import { Compass, HeartPulse, PenTool, Sparkles } from "lucide-react";

import Card from "../components/Card";
import IconBadge from "../components/IconBadge";
import Section from "../components/Section";

const features = [
  {
    title: "Mapas com significado",
    description: "Conecte eventos, pessoas e emoções em linhas do tempo suaves que revelam padrões ao longo do dia.",
    icon: <Compass className="h-5 w-5" strokeWidth={1.5} />,
  },
  {
    title: "Bússola emocional",
    description: "Eco traduz o que você sente em insights acionáveis e envia lembretes gentis para check-ins conscientes.",
    icon: <HeartPulse className="h-5 w-5" strokeWidth={1.5} />,
  },
  {
    title: "Reflexões curadas",
    description: "Perguntas feitas sob medida, com linguagem acolhedora, para te guiar em poucos minutos ao núcleo da questão.",
    icon: <PenTool className="h-5 w-5" strokeWidth={1.5} />,
  },
  {
    title: "Integração suave",
    description: "Traga memórias de fotos, voz ou texto. Tudo é organizado automaticamente no seu espelho privado.",
    icon: <Sparkles className="h-5 w-5" strokeWidth={1.5} />,
  },
];

const MindMirrorSection: React.FC = () => {
  return (
    <Section
      id="beneficios"
      eyebrow="Espelho da mente"
      title="Tudo o que você sente, organizado com delicadeza"
      description="Cada card é pensado para reduzir ruído e ampliar foco. Visualize seu universo emocional em camadas claras e acessíveis."
    >
      <div className="grid gap-6 sm:grid-cols-2">
        {features.map((feature) => (
          <Card key={feature.title} className="h-full space-y-5 bg-white/80">
            <IconBadge className="h-12 w-12 rounded-2xl">{feature.icon}</IconBadge>
            <div className="space-y-2">
              <h3 className="text-xl font-semibold text-ink-base">{feature.title}</h3>
              <p className="text-sm text-ink-soft">{feature.description}</p>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
};

export default MindMirrorSection;
