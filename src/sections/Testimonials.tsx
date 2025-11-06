import React from "react";

import Card from "../components/Card";
import Section from "../components/Section";

const testimonials = [
  {
    name: "Isabela Rocha",
    role: "Terapeuta integrativa",
    quote:
      "Eco virou meu lugar de checagem diária. Em 5 minutos consigo mapear gatilhos dos pacientes e chego às sessões mais presente.",
  },
  {
    name: "Thiago Mendes",
    role: "Fundador, Studio Soma",
    quote:
      "O app acalma só de abrir. O cuidado com tipografia e espaços me ajuda a focar na emoção, não na interface.",
  },
  {
    name: "Luna Carvalho",
    role: "Pesquisadora cognitiva",
    quote:
      "As timelines emocionais me mostraram ciclos que eu não via há anos. É como ter um diário sensorial guiado.",
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
    <span className={`flex h-12 w-12 items-center justify-center rounded-full ${color} text-sm font-normal text-eco-babyBlue`}>
      {initials}
    </span>
  );
};

const Testimonials: React.FC = () => {
  return (
    <Section
      id="depoimentos"
      eyebrow="💬 Prova social"
      title="Uma comunidade de mentes calmas."
      description="Criadores, terapeutas e curiosos que encontraram na Eco um espaço de pausa e lucidez."
    >
      <div className="grid gap-6 lg:grid-cols-3">
        {testimonials.map((testimonial) => (
          <Card
            key={testimonial.name}
            className="h-full space-y-6 border-eco-border/40 bg-white/80 shadow-eco-soft transition-all duration-300 hover:shadow-eco-medium"
          >
            <div className="flex items-center gap-4">
              <Avatar name={testimonial.name} color="bg-eco-babyBlue/20" />
              <div>
                <p className="font-normal text-eco-text">{testimonial.name}</p>
                <p className="text-sm font-light text-eco-textSoft">{testimonial.role}</p>
              </div>
            </div>
            <p className="text-base font-light leading-relaxed text-eco-textSoft">"{testimonial.quote}"</p>
          </Card>
        ))}
      </div>
    </Section>
  );
};

export default Testimonials;
