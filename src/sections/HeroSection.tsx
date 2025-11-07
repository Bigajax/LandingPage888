import React, { useState } from "react";

import Button from "../components/Button";
import Card from "../components/Card";
import Container from "../components/Container";
import EcoBubbleOneEye from "../components/EcoBubbleOneEye";
import IconBadge from "../components/IconBadge";

const feelings = [
  {
    label: "ansiedade",
    reflection:
      "Percebo que sua mente está acelerada tentando te proteger. Vamos encontrar qual parte da situação precisa de presença agora.",
  },
  {
    label: "confusão",
    reflection:
      "Existe muita informação ao mesmo tempo. Respire comigo e vamos ordenar os fatos para descobrir o que realmente importa.",
  },
  {
    label: "tristeza",
    reflection:
      "Sua tristeza está mostrando algo que precisa de cuidado. Podemos acolher esse sentimento sem pressa, com gentileza.",
  },
  {
    label: "cansaço",
    reflection:
      "Seu corpo e sua mente pedem pausa. Vamos observar onde você está gastando energia demais e como recuperar equilíbrio.",
  },
];

const HeroSection: React.FC = () => {
  const [selectedFeeling, setSelectedFeeling] = useState(feelings[0]);

  return (
    <section
      id="inicio"
      className="relative overflow-hidden bg-gradient-to-b from-white via-white to-[#F7FAFF]"
      aria-labelledby="hero-heading"
    >
      <div className="pointer-events-none absolute inset-x-0 -top-40 hidden h-64 rounded-full bg-[radial-gradient(65%_55%_at_50%_0%,rgba(0,122,255,0.12),transparent)] lg:block" />
      <Container className="relative">
        <div className="grid gap-12 py-28 sm:py-32 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.95fr)] lg:items-center lg:gap-16">
          <div className="space-y-10">
            <div className="inline-flex items-center gap-3 rounded-full border border-surface-muted/60 bg-white/80 px-4 py-2 text-sm text-ink-soft shadow-soft backdrop-blur">
              <span className="flex h-8 w-8 items-center justify-center rounded-full border border-surface-muted/60 text-lg">○</span>
              <span className="font-medium">Clareza em 3 segundos</span>
            </div>

            <div className="space-y-6">
              <h1 id="hero-heading" className="text-4xl font-semibold tracking-tight text-ink-base sm:text-5xl lg:text-6xl">
                Transforme confusão em clareza emocional.
              </h1>
              <p className="max-w-xl text-lg text-ink-soft">
                Uma IA que reflete seus sentimentos, reconhece padrões e ajuda você a entender o que realmente está acontecendo dentro de você.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <a href="#comecar" className="inline-flex">
                <Button className="px-8 py-3" aria-label="Fazer minha primeira reflexão">
                  Fazer Minha Primeira Reflexão — 2 min
                </Button>
              </a>
              <p className="text-sm text-ink-soft">Sem cadastro. Apenas você e o espelho.</p>
            </div>

            <div className="space-y-6 rounded-3xl border border-surface-muted/60 bg-white/80 p-6 shadow-soft">
              <p className="text-sm font-medium uppercase tracking-[0.28em] text-ink-soft">Digite o que está sentindo agora:</p>
              <div className="flex flex-wrap gap-3">
                {feelings.map((feeling) => {
                  const isActive = selectedFeeling.label === feeling.label;
                  return (
                    <button
                      key={feeling.label}
                      type="button"
                      onClick={() => setSelectedFeeling(feeling)}
                      className={`rounded-full px-4 py-2 text-sm font-medium transition-colors duration-150 ${
                        isActive
                          ? "bg-brand-blue text-white shadow-[0_12px_30px_rgba(0,122,255,0.18)]"
                          : "border border-surface-muted/60 bg-white/70 text-ink-soft hover:text-ink-base"
                      }`}
                    >
                      {feeling.label}
                    </button>
                  );
                })}
              </div>
              <Card className="relative overflow-hidden rounded-2xl border border-surface-muted/60 bg-white/90 p-6 shadow-soft">
                <div className="flex items-center gap-3 text-sm text-ink-soft">
                  <IconBadge tone="brand" className="h-10 w-10 rounded-xl">
                    <EcoBubbleOneEye size={20} />
                  </IconBadge>
                  <span className="font-medium text-ink-base">Eco refletindo…</span>
                </div>
                <p className="mt-4 text-base text-ink-base">“{selectedFeeling.reflection}”</p>
                <p className="mt-3 text-sm text-ink-soft">
                  A Eco transforma o ruído interno em insight acionável em poucos segundos.
                </p>
              </Card>
            </div>
          </div>

          <div className="lg:justify-self-end">
            <Card className="relative overflow-hidden rounded-3xl border border-surface-muted/60 bg-white/80 p-0 shadow-soft-lg">
              <div className="absolute inset-x-0 -top-20 h-40 bg-[radial-gradient(55%_60%_at_50%_0%,rgba(0,122,255,0.22),transparent)]" aria-hidden />
              <div className="space-y-6 p-8 sm:p-10">
                <div className="flex items-center justify-between text-sm text-ink-soft">
                  <span className="font-medium text-ink-base">Clareza emocional</span>
                  <span className="rounded-full bg-surface-subtle px-3 py-1 text-xs text-ink-soft">Em tempo real</span>
                </div>
                <div className="space-y-4">
                  {["Reconhece padrões sutis", "Traduz sentimentos em linguagem clara", "Devolve perguntas que abrem espaço"].map((entry, index) => (
                    <div key={entry} className="flex items-start gap-3 rounded-2xl border border-surface-muted/60 bg-white/70 p-4">
                      <IconBadge tone="brand" className="h-10 w-10 rounded-xl">
                        <span className="text-xs font-semibold">{index + 1}</span>
                      </IconBadge>
                      <div>
                        <p className="font-semibold text-ink-base">{entry}</p>
                        <p className="text-sm text-ink-soft">
                          Sem julgamentos. Apenas presença e organização emocional.
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="rounded-2xl border border-brand-blue/20 bg-brand-blue/10 p-6 text-sm text-ink-base">
                  <p className="font-semibold text-brand-blue">Eco respira com você.</p>
                  <p className="mt-2 text-ink-soft">
                    Enquanto você escreve, a IA devolve respiros, metáforas e convites para se escutar.
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
