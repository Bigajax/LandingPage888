import React from "react";

import Section from "../components/Section";

const testimonials = [
  {
    name: "Isabela Rocha",
    role: "Terapeuta integrativa",
    quote: "“Em 7 dias, percebi padrões que antes levavam meses em terapia para emergir.”",
  },
  {
    name: "Thiago Mendes",
    role: "Fundador, Studio Soma",
    quote: "“É como abrir o app de clima da minha mente — vejo nuvens passando sem me apegar.”",
  },
  {
    name: "Luna Carvalho",
    role: "Pesquisadora cognitiva",
    quote: "“As perguntas da ECO me colocam de volta no corpo, sem forçar nada.”",
  },
  {
    name: "João Pereira",
    role: "Product Lead",
    quote: "“As timelines emocionais viraram parte do meu weekly review. Objetivo e humano.”",
  },
  {
    name: "Mariana Dias",
    role: "Psicóloga clínica",
    quote: "“Pacientes chegam mais presentes — registram e compartilham insights em segundos.”",
  },
];

const getInitials = (name: string) =>
  name
    .split(" ")
    .filter(Boolean)
    .map((part) => part[0]?.toUpperCase() ?? "")
    .slice(0, 2)
    .join("");

const Testimonials: React.FC = () => {
  const marqueeItems = [...testimonials, ...testimonials];

  return (
    <Section
      id="depoimentos"
      eyebrow="O que pessoas falam após 7 dias com a ECO"
      title="Depoimentos reais, ritmo humano"
      align="center"
    >
      <div className="relative mt-10 overflow-hidden">
        <div className="flex w-max gap-6 motion-safe:animate-carousel motion-reduce:animate-none">
          {marqueeItems.map((testimonial, index) => (
            <figure
              key={`${testimonial.name}-${index}`}
              className="w-[320px] shrink-0 rounded-[28px] border border-surface-border bg-white/75 p-6 shadow-[0_24px_50px_-36px_rgba(15,23,42,0.28)] backdrop-blur"
            >
              <div className="flex items-center gap-4">
                <span className="flex h-12 w-12 items-center justify-center rounded-full border border-brand-blue/20 bg-brand-blue/10 text-sm font-semibold text-brand-blue">
                  {getInitials(testimonial.name)}
                </span>
                <figcaption className="text-left">
                  <p className="font-semibold text-ink-primary">{testimonial.name}</p>
                  <p className="text-xs text-ink-secondary">{testimonial.role}</p>
                </figcaption>
              </div>
              <blockquote className="mt-4 text-sm text-ink-secondary">{testimonial.quote}</blockquote>
            </figure>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Testimonials;
