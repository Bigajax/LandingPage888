import React from "react";

import Card from "../components/Card";
import Section from "../components/Section";

const testimonials = [
  {
    name: "Isabela Rocha",
    role: "Terapeuta integrativa",
    quote:
      "Eco virou meu lugar de checagem diária. Em 5 minutos consigo mapear gatilhos dos pacientes e chego às sessões mais presente.",
    color: "bg-gradient-to-br from-brand-blue/10 to-white",
  },
  {
    name: "Thiago Mendes",
    role: "Fundador, Studio Soma",
    quote:
      "O app acalma só de abrir. O cuidado com tipografia e espaços me ajuda a focar na emoção, não na interface.",
    color: "bg-gradient-to-br from-white to-surface-subtle/60",
  },
  {
    name: "Luna Carvalho",
    role: "Pesquisadora cognitiva",
    quote:
      "As timelines emocionais me mostraram ciclos que eu não via há anos. É como ter um diário sensorial guiado.",
    color: "bg-gradient-to-br from-brand-blue/5 to-white",
  },
];

const Avatar: React.FC<{ name: string; color: string }> = ({ name, color }) => {
  const initials = name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <span className={`flex h-12 w-12 items-center justify-center rounded-full ${color} text-sm font-semibold text-brand-blue`}>
      {initials}
    </span>
  );
};

const Testimonials: React.FC = () => {
  return (
    <Section
      id="depoimentos"
      eyebrow="Prova social"
      title="Uma comunidade de mentes calmas"
      description="Profissionais de saúde mental, criadores e pessoas que buscam autoconhecimento encontram em Eco um aliado leve."
    >
      <div className="grid gap-6 lg:grid-cols-3">
        {testimonials.map((testimonial) => (
          <Card key={testimonial.name} className={`h-full space-y-6 bg-white/85 ${testimonial.color}`}>
            <div className="flex items-center gap-4">
              <Avatar name={testimonial.name} color="bg-white" />
              <div>
                <p className="font-semibold text-ink-base">{testimonial.name}</p>
                <p className="text-sm text-ink-soft">{testimonial.role}</p>
              </div>
            </div>
            <p className="text-base text-ink-soft">“{testimonial.quote}”</p>
          </Card>
        ))}
      </div>
    </Section>
  );
};

export default Testimonials;
