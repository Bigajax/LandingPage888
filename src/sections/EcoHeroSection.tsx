import React from "react";

import Button from "../components/Button";
import Container from "../components/Container";

const EcoHeroSection: React.FC = () => {
  return (
    <section
      id="experiencia"
      className="relative overflow-hidden bg-gradient-to-b from-white via-white to-surface-subtle/70"
      aria-labelledby="hero-heading"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(0,122,255,0.12),transparent_65%)]" aria-hidden />
      <Container className="relative">
        <div className="grid gap-10 pb-24 pt-36 sm:pb-32 sm:pt-40 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.9fr)] lg:items-center lg:gap-16">
          <div className="space-y-10">
            <div className="space-y-6">
              <h1 id="hero-heading" className="text-4xl font-semibold tracking-tight text-ink-base sm:text-5xl lg:text-6xl">
                A ciência de entender o que você sente.
              </h1>
              <p className="max-w-xl text-lg text-ink-soft">
                Um espaço inteligente onde psicologia, neurociência e filosofia se encontram para organizar o que vive dentro de você.
              </p>
            </div>

            <div className="space-y-3 text-sm font-medium text-ink-soft">
              <p className="flex items-center gap-2 text-base text-ink-base">
                <span aria-hidden className="text-brand-blue">✦</span>
                Treine presença. Entenda emoções.
              </p>
              <p className="flex items-center gap-2 text-base text-ink-base">
                <span aria-hidden className="text-brand-blue">✦</span>
                Acesse a versão mais lúcida de si mesmo.
              </p>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <a href="#comecar" className="inline-flex">
                <Button className="px-8 py-3" aria-label="Baixar o app">
                  Baixar o app
                </Button>
              </a>
              <a
                href="#multiplataforma"
                className="inline-flex items-center gap-2 text-sm font-semibold text-ink-base transition-colors duration-150 hover:text-brand-blue"
              >
                Conhecer mais
                <span aria-hidden className="text-lg">→</span>
              </a>
            </div>
          </div>

          <div className="relative flex flex-col gap-6 rounded-3xl border border-surface-muted/60 bg-white/80 p-10 shadow-soft-lg backdrop-blur">
            <div className="space-y-2">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-ink-soft">
                Ritmo emocional
              </p>
              <p className="text-2xl font-semibold text-ink-base">Calma lúcida</p>
              <p className="text-sm text-ink-soft">
                Enquanto você respira, a Eco organiza sinais internos em padrões claros e acionáveis.
              </p>
            </div>

            <div className="grid gap-3 rounded-2xl bg-surface-subtle/80 p-6">
              {["Neurociência aplicada", "Filosofia viva", "Psicologia baseada em dados"].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-2xl bg-white text-sm font-semibold text-brand-blue shadow-soft">
                    {item === "Filosofia viva" ? "Φ" : item === "Neurociência aplicada" ? "Ν" : "Ψ"}
                  </span>
                  <p className="text-sm font-medium text-ink-base">{item}</p>
                </div>
              ))}
            </div>

            <div className="space-y-2 rounded-2xl border border-brand-blue/20 bg-brand-blue/10 p-6 text-sm text-ink-soft">
              <p className="text-base font-semibold text-brand-blue">Presença em estado científico.</p>
              <p>
                IA proprietária com curadoria de especialistas transforma sensações em linguagem clara.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default EcoHeroSection;
