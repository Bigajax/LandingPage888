import React from "react";

import Card from "../components/Card";
import Section from "../components/Section";

const painPoints = [
  "Preso nos mesmos ciclos emocionais",
  "Sobrecarregado sem saber por quê",
  "Desconectado do próprio eu",
];

const benefits = [
  {
    icon: "🌬️",
    title: "Clareza Emocional",
    description: "Compreenda o que sente sem se perder nas palavras ou em ruídos mentais.",
  },
  {
    icon: "💭",
    title: "Consciência dos Padrões",
    description: "Veja as repetições que moldam a sua vida e escolha novos caminhos com consciência.",
  },
  {
    icon: "🧠",
    title: "Reflexão Viva",
    description: "Cada conversa amplia o mapa da sua consciência, com perguntas que evoluem junto com você.",
  },
  {
    icon: "🪞",
    title: "Espelho Interior",
    description: "Perceba o que existe por trás do que você diz e do que evita dizer.",
  },
  {
    icon: "📊",
    title: "Relatórios Emocionais",
    description: "Visualize intensidades, temas e evolução em gráficos calmos e acionáveis.",
  },
  {
    icon: "🔒",
    title: "Privacidade Absoluta",
    description: "Suas memórias pertencem só a você. Criptografia e controle total de exportação acompanham cada insight.",
  },
];

const BenefitsSection: React.FC = () => {
  return (
    <Section id="beneficios" eyebrow="O Crescimento" title="A Eco não fala sobre você. Ela reflete com você.">
      <div className="mb-10 max-w-2xl space-y-3 text-base text-ink-soft">
        <p>Para quem se sente:</p>
        <ul className="list-disc space-y-2 pl-5">
          {painPoints.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {benefits.map((benefit) => (
          <Card key={benefit.title} className="h-full space-y-4">
            <span className="text-3xl" aria-hidden>
              {benefit.icon}
            </span>
            <div className="space-y-2">
              <h3 className="text-lg font-semibold text-ink-base">{benefit.title}</h3>
              <p className="text-sm text-ink-soft">{benefit.description}</p>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
};

export default BenefitsSection;
