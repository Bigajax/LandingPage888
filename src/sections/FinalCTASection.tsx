import React from "react";

import Button from "../components/Button";
import Container from "../components/Container";

const miniHeadlines = [
  "Autoconhecimento sem esoterismo.",
  "A clareza é o novo luxo.",
  "Psicologia, ciência e filosofia em um só toque.",
  "Eco — a mente em estado de presença.",
  "Transforme confusão em lucidez.",
];

const FinalCTASection: React.FC = () => {
  return (
    <section id="comecar" className="relative overflow-hidden bg-white" aria-labelledby="cta-heading">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(0,122,255,0.1),transparent_60%)]" aria-hidden />
      <Container className="relative flex flex-col gap-16 py-28">
        <div className="space-y-6 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-ink-soft">convite final</p>
          <h2 id="cta-heading" className="text-3xl font-semibold tracking-tight text-ink-base sm:text-4xl">
            Eco — autodomínio em forma de experiência.
          </h2>
          <p className="mx-auto max-w-2xl text-base text-ink-soft">
            Filosofia, psicologia e neurociência para o agora. Clareza emocional acessível, científica e bela.
          </p>
          <div className="flex flex-col items-center gap-4">
            <a href="#" className="inline-flex">
              <Button className="px-10 py-3" aria-label="Começar agora">
                Começar agora
              </Button>
            </a>
            <p className="text-xs font-medium uppercase tracking-[0.28em] text-ink-soft">
              Gratuito para usar. Melhor com Premium.
            </p>
          </div>
        </div>

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {miniHeadlines.map((headline) => (
            <div
              key={headline}
              className="rounded-3xl border border-surface-muted/60 bg-surface-subtle/80 p-5 text-center text-sm font-medium text-ink-base shadow-soft"
            >
              {headline}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default FinalCTASection;
