import React from "react";

import Button from "../components/Button";
import Card from "../components/Card";
import Container from "../components/Container";
import EcoBubbleOneEye from "../components/EcoBubbleOneEye";
import IconBadge from "../components/IconBadge";

const highlights = [
  "Psicologia junguiana",
  "Neurociência afetiva",
  "Filosofia estoica",
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
          <div className="space-y-10">
            <div className="inline-flex items-center gap-3 rounded-full border border-surface-muted/60 bg-white/80 px-4 py-2 text-sm text-ink-soft shadow-soft backdrop-blur">
              <EcoBubbleOneEye size={24} />
              <span>Eco — terapeuta digital de autoconhecimento</span>
            </div>

            <div className="space-y-6">
              <h1 id="hero-heading" className="text-4xl font-semibold tracking-tight text-ink-base sm:text-5xl lg:text-6xl">
                A terapeuta digital que te ajuda a entender o que sente.
              </h1>
              <p className="text-lg text-ink-soft sm:text-xl">
                Psicologia, filosofia e neurociência unidas para te guiar de volta ao seu centro.
              </p>
              <p className="max-w-xl text-base text-ink-soft">
                A Eco escuta, reflete e traduz o que você sente em clareza emocional. Um espaço entre o pensar e o sentir — onde você se reencontra com calma e consciência.
              </p>
            </div>

            <ul className="flex flex-col gap-3 text-sm text-ink-soft sm:flex-row sm:flex-wrap">
              {highlights.map((item) => (
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
                <Button className="px-8 py-3" aria-label="Começar agora">
                  Começar agora
                </Button>
              </a>
              <a
                href="#encontro"
                className="inline-flex items-center gap-2 text-sm font-medium text-ink-base transition-colors duration-150 hover:text-brand-blue"
              >
                Conhecer mais →
              </a>
            </div>
          </div>

          <div className="lg:justify-self-end">
            <Card className="relative overflow-hidden rounded-3xl border border-surface-muted/60 bg-white/80 p-0 shadow-soft-lg">
              <div className="absolute inset-x-0 -top-20 h-40 bg-[radial-gradient(55%_60%_at_50%_0%,rgba(0,122,255,0.22),transparent)]" aria-hidden />
              <div className="space-y-6 p-8 sm:p-10">
                <div className="flex items-center justify-between text-sm text-ink-soft">
                  <span className="font-medium text-ink-base">Sessão Eco</span>
                  <span className="rounded-full bg-surface-subtle px-3 py-1 text-xs text-ink-soft">Agora</span>
                </div>
                <div className="space-y-4">
                  {[
                    "Você descreve uma emoção",
                    "Eco traduz em consciência",
                    "Você escolhe como responder",
                  ].map((entry, index) => (
                    <div key={entry} className="flex items-start gap-3 rounded-2xl border border-surface-muted/60 bg-white/70 p-4">
                      <IconBadge tone="brand" className="h-10 w-10 rounded-xl">
                        <span className="text-xs font-semibold">{index + 1}</span>
                      </IconBadge>
                      <div>
                        <p className="font-semibold text-ink-base">{entry}</p>
                        <p className="text-sm text-ink-soft">
                          Ritmo suave, perguntas curtas, presença constante.
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="rounded-2xl border border-brand-blue/20 bg-brand-blue/10 p-6 text-sm text-ink-base">
                  <p className="font-semibold text-brand-blue">Entre o pensar e o sentir.</p>
                  <p className="mt-2 text-ink-soft">
                    Respire, escreva ou apenas observe. A Eco guia com ciência e afeto.
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
