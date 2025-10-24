import React from "react";
import { Play } from "lucide-react";

import Button from "../components/Button";
import Card from "../components/Card";
import Container from "../components/Container";
import EcoBubbleOneEye from "../components/EcoBubbleOneEye";
import IconBadge from "../components/IconBadge";

const bulletPoints = [
  "Memórias com contexto",
  "Mapa emocional",
  "Reflexões sob medida",
];

const HeroSection: React.FC = () => {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden bg-gradient-to-b from-white via-white to-[#F7FAFF]"
      aria-labelledby="hero-heading"
    >
      <div className="pointer-events-none absolute inset-x-0 -top-40 hidden h-64 rounded-full bg-[radial-gradient(65%_55%_at_50%_0%,rgba(0,122,255,0.12),transparent)] lg:block" />
      <Container className="relative">
        <div className="grid gap-12 py-28 sm:py-32 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.9fr)] lg:items-center lg:gap-16">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-3 rounded-full border border-surface-muted/60 bg-white/80 px-4 py-2 text-sm text-ink-soft shadow-soft backdrop-blur">
              <EcoBubbleOneEye size={24} />
              <span>Eco — cuidado emocional, agora minimalista</span>
            </div>

            <div className="space-y-6">
              <h1 id="hero-heading" className="text-4xl font-semibold tracking-tight text-ink-base sm:text-5xl lg:text-6xl">
                Eco — um espelho calmo para a sua mente
              </h1>
              <p className="max-w-xl text-lg text-ink-soft">
                Ganhe clareza emocional em minutos, sem ruído. Registre, organize e visualize sentimentos com o conforto de uma interface que respira.
              </p>
            </div>

            <ul className="flex flex-col gap-3 text-sm text-ink-soft sm:flex-row sm:flex-wrap">
              {bulletPoints.map((item) => (
                <li key={item} className="inline-flex items-center gap-2 rounded-full border border-surface-muted/60 bg-white/70 px-4 py-2 shadow-soft">
                  <span aria-hidden className="flex h-5 w-5 items-center justify-center rounded-full bg-brand-blue/10 text-brand-blue">
                    <svg viewBox="0 0 16 16" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M4 8.2 6.8 11l5.2-6.2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <span className="font-medium text-ink-base">{item}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <a href="#comecar" className="inline-flex">
                <Button className="px-8 py-3" aria-label="Experimentar agora">
                  Experimentar agora
                </Button>
              </a>
              <a
                href="#como-funciona"
                className="inline-flex items-center gap-2 text-sm font-medium text-ink-base transition-colors duration-150 hover:text-brand-blue"
              >
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-surface-muted/60 text-brand-blue">
                  <Play className="h-4 w-4" fill="currentColor" strokeWidth={1.5} />
                </span>
                Ver como funciona
              </a>
            </div>
          </div>

          <div className="lg:justify-self-end">
            <Card className="relative overflow-hidden rounded-3xl border border-surface-muted/60 bg-white/80 p-0 shadow-soft-lg">
              <div className="absolute inset-x-0 -top-20 h-40 bg-[radial-gradient(55%_60%_at_50%_0%,rgba(0,122,255,0.22),transparent)]" aria-hidden />
              <div className="space-y-6 p-8 sm:p-10">
                <div className="flex items-center justify-between text-sm text-ink-soft">
                  <span className="font-medium text-ink-base">Espelho diário</span>
                  <span className="rounded-full bg-surface-subtle px-3 py-1 text-xs text-ink-soft">Hoje</span>
                </div>
                <div className="space-y-4">
                  {["Observando padrões", "Trazendo à tona uma memória", "Reescrevendo uma crença"].map((entry, index) => (
                    <div key={entry} className="flex items-start gap-3 rounded-2xl border border-surface-muted/60 bg-white/70 p-4">
                      <IconBadge tone="brand" className="h-10 w-10 rounded-xl">
                        <span className="text-xs font-semibold">{index + 1}</span>
                      </IconBadge>
                      <div>
                        <p className="font-semibold text-ink-base">{entry}</p>
                        <p className="text-sm text-ink-soft">
                          Eco sintetiza suas notas para revelar emoções principais e gatilhos.
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="rounded-2xl border border-brand-blue/20 bg-brand-blue/10 p-6 text-sm text-ink-base">
                  <p className="font-semibold text-brand-blue">Respire.</p>
                  <p className="mt-2 text-ink-soft">
                    O modo presença te guia com prompts curtos e respirações para processar o agora.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default HeroSection;
