import React from "react";

import Card from "../components/Card";
import Section from "../components/Section";

const testimonials = [
  {
    name: "Ana",
    meta: "34 · Designer",
    quote: "Identifiquei que minha ansiedade vinha da necessidade de controle, não do trabalho em si.",
    color: "bg-gradient-to-br from-brand-blue/10 to-white",
  },
  {
    name: "Lucas",
    meta: "41 · Psicólogo",
    quote: "Percebi padrões que repito há anos. A Eco me ajudou a nomeá-los.",
    color: "bg-gradient-to-br from-white to-surface-subtle/60",
  },
  {
    name: "Marina",
    meta: "28 · Estudante",
    quote: "É como conversar com a parte calma de mim.",
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
      eyebrow="O reflexo nos outros"
      title="Quem usa a Eco encontra palavras novas para sentir"
      description="Relatos reais de quem transformou confusão em clareza com conversas íntimas e seguras."
    >
      <div className="grid gap-6 lg:grid-cols-3">
        {testimonials.map((testimonial) => (
          <Card key={testimonial.name} className={`h-full space-y-6 bg-white/85 ${testimonial.color}`}>
            <div className="flex items-center gap-4">
              <Avatar name={testimonial.name} color="bg-white" />
              <div>
                <p className="font-semibold text-ink-base">{testimonial.name}</p>
                <p className="text-sm text-ink-soft">{testimonial.meta}</p>
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
