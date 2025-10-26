import React from "react";

import Card from "../components/Card";
import Section from "../components/Section";

const testimonials = [
  {
    name: "Isabela Rocha",
    role: "Terapeuta integrativa",
    quote:
      "Eco virou meu lugar de checagem diária. Em poucos minutos noto padrões e chego às sessões mais presente.",
  },
  {
    name: "Thiago Mendes",
    role: "Fundador, Studio Soma",
    quote: "O cuidado com espaçamento e tipografia me acalma. Posso focar na emoção, não na interface.",
  },
  {
    name: "Luna Carvalho",
    role: "Pesquisadora cognitiva",
    quote: "As linhas do tempo emocionais me mostraram ciclos que eu não enxergava há anos.",
  },
  {
    name: "Marina Lopes",
    role: "Designer de produto",
    quote: "Os cartões parecem o login: limpos e equilibrados. Dá vontade de registrar sentimentos todos os dias.",
  },
];

const Avatar: React.FC<{ name: string }> = ({ name }) => {
  const initials = name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--line)] bg-white text-sm font-semibold text-eco-brand">
      {initials}
    </span>
  );
};

const Testimonials: React.FC = () => {
  return (
    <Section
      id="depoimentos"
      eyebrow="Depoimentos"
      title="Uma comunidade que respira com Eco"
      description="Pessoas reais relatam como a experiência minimalista reduz ansiedade e traz foco emocional."
    >
      <div className="grid gap-6 md:grid-cols-2">
        {testimonials.map((testimonial) => (
          <Card key={testimonial.name} className="h-full space-y-5">
            <div className="flex items-center gap-3">
              <Avatar name={testimonial.name} />
              <div>
                <p className="font-semibold text-eco-text">{testimonial.name}</p>
                <p className="text-sm text-eco-subtle">{testimonial.role}</p>
              </div>
            </div>
            <p className="text-base text-eco-subtle">“{testimonial.quote}”</p>
          </Card>
        ))}
      </div>
    </Section>
  );
};

export default Testimonials;
