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
      className="relative overflow-hidden bg-eco-bg"
      aria-labelledby="hero-heading"
    >
      <div className="pointer-events-none absolute inset-x-0 -top-40 hidden h-64 rounded-full bg-[radial-gradient(65%_55%_at_50%_0%,rgba(167,132,108,0.08),transparent)] lg:block" />
      <Container className="relative">
        <div className="grid gap-12 py-28 sm:py-32 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.9fr)] lg:items-center lg:gap-16">
          <div className="space-y-8 fade-in-up">
            <div className="inline-flex items-center gap-3 rounded-pill border border-eco-gold/30 glass px-4 py-2 text-sm text-eco-ink-soft shadow-eco-soft backdrop-blur-eco">
              <EcoBubbleOneEye size={24} />
              <span>Eco — cuidado emocional, agora minimalista</span>
            </div>

            <div className="space-y-6">
              <h1 id="hero-heading" className="font-display text-4xl font-semibold tracking-tight text-eco-ink sm:text-5xl lg:text-6xl leading-tight">
                Eco — um espelho calmo para a sua mente
              </h1>
              <p className="max-w-xl text-lg text-eco-ink-soft text-organic leading-organic">
                Ganhe clareza emocional em minutos, sem ruído. Registre, organize e visualize sentimentos com o conforto de uma interface que respira.
              </p>
            </div>

            <ul className="flex flex-col gap-3 text-sm text-eco-ink-soft sm:flex-row sm:flex-wrap">
              {bulletPoints.map((item) => (
                <li key={item} className="inline-flex items-center gap-2 rounded-pill border border-eco-gold/30 glass px-4 py-2 shadow-eco-soft hover-lift transition-all duration-300 ease-calm">
                  <span aria-hidden className="flex h-5 w-5 items-center justify-center rounded-full bg-eco-clay/10 text-eco-clay">
                    <svg viewBox="0 0 16 16" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M4 8.2 6.8 11l5.2-6.2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <span className="font-medium text-eco-ink">{item}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <a href="#comecar" className="inline-flex focus-eco">
                <button className="gradient-eco px-8 py-3.5 rounded-pill text-white font-medium shadow-eco-soft hover-lift transition-all duration-300 ease-calm" aria-label="Experimentar agora">
                  Experimentar agora
                </button>
              </a>
              <a
                href="#como-funciona"
                className="inline-flex items-center gap-2 text-sm font-medium text-eco-ink transition-all duration-300 hover:text-eco-clay hover:-translate-y-0.5 focus-eco"
              >
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-eco-gold/30 text-eco-clay glass">
                  <Play className="h-4 w-4" fill="currentColor" strokeWidth={1.5} />
                </span>
                Ver como funciona
              </a>
            </div>
          </div>

          <div className="lg:justify-self-end fade-in-up" style={{ animationDelay: '150ms' }}>
            <div className="relative overflow-hidden rounded-3xl border border-eco-gold/30 glass p-0 shadow-eco-float">
              <div className="absolute inset-x-0 -top-20 h-40 bg-[radial-gradient(55%_60%_at_50%_0%,rgba(167,132,108,0.12),transparent)]" aria-hidden />
              <div className="space-y-6 p-8 sm:p-10">
                <div className="flex items-center justify-between text-sm text-eco-ink-soft">
                  <span className="font-medium text-eco-ink">Espelho diário</span>
                  <span className="rounded-pill bg-eco-bg-subtle px-3 py-1 text-xs text-eco-ink-soft">Hoje</span>
                </div>
                <div className="space-y-4">
                  {["Observando padrões", "Trazendo à tona uma memória", "Reescrevendo uma crença"].map((entry, index) => (
                    <div key={entry} className="flex items-start gap-3 rounded-2xl border border-eco-gold/30 glass p-4 hover-lift transition-all duration-300 ease-calm">
                      <div className="h-10 w-10 rounded-xl bg-eco-clay/10 flex items-center justify-center text-eco-clay">
                        <span className="text-xs font-semibold">{index + 1}</span>
                      </div>
                      <div>
                        <p className="font-semibold text-eco-ink">{entry}</p>
                        <p className="text-sm text-eco-ink-soft text-organic">
                          Eco sintetiza suas notas para revelar emoções principais e gatilhos.
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="rounded-2xl border border-eco-clay/20 bg-eco-clay/10 p-6 text-sm text-eco-ink">
                  <p className="font-semibold text-eco-clay font-display">Respire.</p>
                  <p className="mt-2 text-eco-ink-soft text-organic">
                    O modo presença te guia com prompts curtos e respirações para processar o agora.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default HeroSection;
