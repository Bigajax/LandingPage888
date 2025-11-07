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
      "Percebo que sua mente estÃ¡ acelerada tentando te proteger. Vamos encontrar qual parte da situaÃ§Ã£o precisa de presenÃ§a agora.",
  },
  {
    label: "confusÃ£o",
    reflection:
      "Existe muita informaÃ§Ã£o ao mesmo tempo. Respire comigo e vamos ordenar os fatos para descobrir o que realmente importa.",
  },
  {
    label: "tristeza",
    reflection:
      "Sua tristeza estÃ¡ mostrando algo que precisa de cuidado. Podemos acolher esse sentimento sem pressa, com gentileza.",
  },
  {
    label: "cansaÃ§o",
    reflection:
      "Seu corpo e sua mente pedem pausa. Vamos observar onde vocÃª estÃ¡ gastando energia demais e como recuperar equilÃ­brio.",
  },
];

const HeroSection: React.FC = () => {
  const [selectedFeeling, setSelectedFeeling] = useState(feelings[0]);

  return (
    <section
      id="inicio"
      className="relative overflow-hidden bg-gradient-to-b from-[#FAF9F7] via-[#F3EEE7] to-[#F7FBFF]"
      aria-labelledby="hero-heading"
    >
      <div
        className="pointer-events-none absolute inset-x-0 -top-48 hidden h-72 rounded-full bg-[radial-gradient(65%_55%_at_50%_0%,rgba(110,200,255,0.28),transparent)] lg:block"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-y-0 right-[-10%] hidden w-1/3 bg-[radial-gradient(60%_70%_at_40%_50%,rgba(167,132,108,0.45),transparent)] blur-3xl lg:block"
        aria-hidden
      />
      <Container className="relative">
        <div className="grid gap-12 py-28 sm:py-32 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.95fr)] lg:items-center lg:gap-16">
          <div className="space-y-10">
            <div className="inline-flex items-center gap-3 rounded-full border border-[rgba(56,50,42,0.16)] bg-[rgba(250,249,247,0.65)] px-4 py-2 text-sm text-ink-soft/90 shadow-soft backdrop-blur">
              <span className="flex h-8 w-8 items-center justify-center rounded-full border border-[rgba(56,50,42,0.18)] text-lg">â—‹</span>
              <span className="font-medium">Clareza em 3 segundos</span>
            </div>

            <div className="space-y-6">
              <h1 id="hero-heading" className="font-serif text-4xl font-semibold tracking-tight text-ink-base sm:text-5xl lg:text-6xl">
                Transforme confusÃ£o em clareza emocional.
              </h1>
              <p className="max-w-xl text-lg text-ink-soft">
                Uma IA que reflete seus sentimentos, reconhece padrÃµes e ajuda vocÃª a entender o que realmente estÃ¡ acontecendo dentro de vocÃª.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <a href="#comecar" className="inline-flex">
                <Button className="px-8 py-3" aria-label="Fazer minha primeira reflexÃ£o">
                  Fazer Minha Primeira ReflexÃ£o â€” 2 min
                </Button>
              </a>
              <p className="text-sm text-ink-soft">Sem cadastro. Apenas vocÃª e o espelho.</p>
            </div>

            <div className="space-y-6 rounded-[32px] border border-[rgba(56,50,42,0.12)] bg-[rgba(250,249,247,0.78)] p-6 shadow-soft backdrop-blur">
              <p className="text-sm font-medium uppercase tracking-[0.28em] text-brand-clay/80">Digite o que estÃ¡ sentindo agora:</p>
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
                          ? "bg-[linear-gradient(120deg,#A7846C,#6EC8FF)] text-white shadow-[0_18px_32px_rgba(56,50,42,0.25)]"
                          : "border border-[rgba(56,50,42,0.16)] bg-white/70 text-ink-soft hover:text-ink-base"
                      }`}
                    >
                      {feeling.label}
                    </button>
                  );
                })}
              </div>
              <Card className="relative overflow-hidden rounded-[26px] border border-brand-blue/20">
                <div className="flex items-center gap-3 text-sm text-ink-soft">
                  <IconBadge tone="brand" className="h-10 w-10 rounded-xl">
                    <EcoBubbleOneEye size={20} />
                  </IconBadge>
                  <span className="font-medium text-ink-base">Eco refletindoâ€¦</span>
                </div>
                <p className="mt-4 text-base text-ink-base">â€œ{selectedFeeling.reflection}â€</p>
                <p className="mt-3 text-sm text-ink-soft">
                  A Eco transforma o ruÃ­do interno em insight acionÃ¡vel em poucos segundos.
                </p>
              </Card>
            </div>
          </div>

          <div className="lg:justify-self-end">
            <Card className="relative overflow-hidden rounded-[34px] p-0 shadow-soft-lg">
              <div className="absolute inset-x-0 -top-20 h-40 bg-[radial-gradient(55%_60%_at_50%_0%,rgba(110,200,255,0.32),transparent)]" aria-hidden />
              <div className="space-y-6 p-8 sm:p-10">
                <div className="flex items-center justify-between text-sm text-ink-soft">
                  <span className="font-medium text-ink-base">Clareza emocional</span>
                  <span className="rounded-full bg-[rgba(243,238,231,0.85)] px-3 py-1 text-xs text-ink-soft">Em tempo real</span>
                </div>
                <div className="space-y-4">
                  {["Reconhece padrÃµes sutis", "Traduz sentimentos em linguagem clara", "Devolve perguntas que abrem espaÃ§o"].map((entry, index) => (
                    <div key={entry} className="flex items-start gap-3 rounded-2xl border border-[rgba(56,50,42,0.12)] bg-[rgba(250,249,247,0.75)] p-4">
                      <IconBadge tone="brand" className="h-10 w-10 rounded-xl">
                        <span className="text-xs font-semibold">{index + 1}</span>
                      </IconBadge>
                      <div>
                        <p className="font-semibold text-ink-base">{entry}</p>
                        <p className="text-sm text-ink-soft">
                          Sem julgamentos. Apenas presenÃ§a e organizaÃ§Ã£o emocional.
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="rounded-2xl border border-brand-blue/20 bg-brand-blue/10 p-6 text-sm text-ink-base">
                  <p className="font-semibold text-brand-blue">Eco respira com vocÃª.</p>
                  <p className="mt-2 text-ink-soft">
                    Enquanto vocÃª escreve, a IA devolve respiros, metÃ¡foras e convites para se escutar.
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

