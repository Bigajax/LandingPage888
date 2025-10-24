import React from "react";
import { FileText, MessageSquareText, Mic, Sparkles } from "lucide-react";

import Section from "../components/Section";

const steps = [
  {
    title: "Você fala ou escreve",
    description: "Registro por voz, texto ou toque rápido. Até fotos ganham contexto emocional.",
    icon: Mic,
  },
  {
    title: "A ECO espelha e nomeia",
    description: "Classificação emocional imediata com linguagem gentil e precisa.",
    icon: MessageSquareText,
  },
  {
    title: "Memória salva",
    description: "Intensidade, tags e gatilhos organizados para revisitar quando quiser.",
    icon: FileText,
  },
  {
    title: "Relatórios e insights",
    description: "Mapa emocional, perguntas abertas e sugestões práticas semanais.",
    icon: Sparkles,
  },
];

const HowItWorksSection: React.FC = () => {
  return (
    <Section
      id="como-funciona"
      eyebrow="Como a ECO trabalha por você"
      title="Fluxo leve, inteligência emocional constante"
      description="Cada etapa acontece com sutileza. Você fala, nós cuidamos de organizar e devolver clareza."
    >
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {steps.map(({ title, description, icon: Icon }, index) => (
          <article
            key={title}
            className="relative flex h-full flex-col gap-4 rounded-[28px] border border-surface-border bg-white/80 p-8 backdrop-blur motion-safe:animate-fade-up motion-safe:hover:-translate-y-1 motion-safe:hover:shadow-soft transition duration-200 ease-subtle"
            style={{ animationDelay: `${index * 80}ms` }}
          >
            <div className="flex items-center gap-3 text-sm text-ink-secondary">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-blue/12 font-semibold text-brand-blue">
                {String(index + 1).padStart(2, "0")}
              </span>
              <Icon className="h-5 w-5 text-brand-blue" strokeWidth={1.5} />
            </div>
            <h3 className="text-lg font-semibold text-ink-primary">{title}</h3>
            <p className="text-sm text-ink-secondary">{description}</p>
          </article>
        ))}
      </div>
    </Section>
  );
};

export default HowItWorksSection;
