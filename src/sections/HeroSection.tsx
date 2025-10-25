import React from "react";

import Button from "../components/Button";
import Card from "../components/Card";
import Container from "../components/Container";

const steps = [
  {
    title: "Observando padrões",
    description: "Notas curtas revelam repetições emocionais com delicadeza.",
  },
  {
    title: "Trazendo à tona uma memória",
    description: "Conecte lembranças a contextos para enxergar gatilhos ocultos.",
  },
  {
    title: "Reescrevendo uma crença",
    description: "Reflexões guiadas ajudam a atualizar narrativas internas.",
  },
];

const HeroSection: React.FC = () => {
  return (
    <section id="inicio" aria-labelledby="hero-heading" className="border-b border-[var(--line)] bg-white">
      <Container className="grid gap-12 py-24 lg:grid-cols-12 lg:items-center lg:gap-16">
        <div className="space-y-10 lg:col-span-7">
          <span className="inline-flex items-center gap-2 rounded-full border border-[var(--line)] px-4 py-1 text-xs font-medium uppercase tracking-[0.26em] text-eco-subtle">
            Eco — cuidado emocional, agora minimalista
          </span>

          <div className="space-y-6">
            <h1 id="hero-heading" className="font-display text-4xl font-semibold tracking-[-0.03em] text-eco-text sm:text-5xl lg:text-6xl">
              Eco — um espelho calmo para a sua mente
            </h1>
            <p className="max-w-xl text-lg text-eco-subtle">
              Ganhe clareza emocional em minutos, sem ruído. Registre, organize e visualize sentimentos com o conforto de uma interface que respira.
            </p>
          </div>

          <div className="flex flex-col gap-4 text-sm text-eco-subtle sm:flex-row sm:items-center sm:gap-6">
            <a href="#comecar" className="inline-flex">
              <Button className="px-8 py-3" aria-label="Experimentar agora">
                Experimentar agora
              </Button>
            </a>
            <a href="#como-funciona" className="inline-flex">
              <Button variant="secondary" className="px-8 py-3" aria-label="Ver como funciona">
                Ver como funciona
              </Button>
            </a>
          </div>
        </div>

        <div className="lg:col-span-5">
          <div className="space-y-4">
            {steps.map((step, index) => (
              <Card key={step.title} className="flex items-start gap-4 rounded-[16px]">
                <span className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--line)] text-sm font-semibold text-eco-text">
                  {index + 1}
                </span>
                <div className="space-y-1">
                  <p className="font-medium text-eco-text">{step.title}</p>
                  <p className="text-sm text-eco-subtle">{step.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default HeroSection;
