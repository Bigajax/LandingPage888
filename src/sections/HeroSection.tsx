import React from "react";
import { Play } from "lucide-react";

import Button from "../components/Button";
import Container from "../components/Container";
import EcoBubbleOneEye from "../components/EcoBubbleOneEye";

const HeroSection: React.FC = () => {
  return (
    <section id="inicio" className="relative overflow-hidden bg-white" aria-labelledby="hero-heading">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(120%_120%_at_50%_0%,rgba(0,122,255,0.08),transparent_62%)]" aria-hidden />
      <Container className="relative">
        <div className="grid gap-16 py-28 sm:py-32 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:items-center">
          <div className="space-y-10">
            <div className="inline-flex items-center gap-3 rounded-full border border-surface-border bg-white/80 px-4 py-2 text-sm text-ink-secondary shadow-soft backdrop-blur-md">
              <span className="rounded-full bg-brand-blue/15 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-brand-blue">
                Beta gratuito · vagas limitadas
              </span>
              <span aria-hidden className="hidden text-ink-secondary sm:inline">
                Clareza emocional com cuidado humano
              </span>
            </div>

            <div className="space-y-6">
              <h1 id="hero-heading" className="text-4xl font-semibold tracking-tight text-ink-primary sm:text-5xl lg:text-[3.4rem]">
                Clareza emocional, sem esforço.
              </h1>
              <p className="max-w-xl text-lg text-ink-secondary">
                A ECO é um espelho calmo para sua mente — registra memórias, reconhece padrões e devolve insights práticos, no seu ritmo.
              </p>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <a href="#preco" className="inline-flex">
                <Button className="px-7 py-3" aria-label="Começar em 7 minutos">
                  Começar em 7 min
                </Button>
              </a>
              <a
                href="#como-funciona"
                className="inline-flex items-center gap-3 rounded-full border border-surface-border bg-white/70 px-5 py-2.5 text-sm font-medium text-ink-primary shadow-soft transition duration-200 ease-subtle hover:border-brand-blue/40 hover:shadow-[0_18px_40px_-28px_rgba(0,122,255,0.25)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue/80 focus-visible:ring-offset-2"
              >
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-brand-blue/12 text-brand-blue">
                  <Play className="h-4 w-4" strokeWidth={1.6} />
                </span>
                Ver como funciona
              </a>
            </div>

            <div className="flex flex-wrap items-center gap-4 text-xs font-medium text-ink-secondary">
              <span className="text-ink-secondary/70">Confiada por equipes em</span>
              <div className="flex items-center gap-6 opacity-70">
                {['Atlas', 'Syntropy', 'Aurora', 'CalmLab'].map((logo) => (
                  <span key={logo} className="tracking-wide">{logo}</span>
                ))}
              </div>
            </div>
          </div>

          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[420px] rounded-[32px] border border-white/70 bg-white/70 p-10 shadow-soft-lg backdrop-blur-xl">
              <div className="absolute -top-12 right-6 hidden h-32 w-32 rounded-full bg-[radial-gradient(circle_at_center,rgba(0,122,255,0.22),transparent_70%)] md:block" aria-hidden />
              <div className="absolute -left-10 top-1/3 hidden h-16 w-16 rounded-full border border-white/40 bg-white/30 backdrop-blur lg:block" aria-hidden />
              <div className="absolute -right-8 bottom-10 hidden h-14 w-14 rounded-full border border-white/50 bg-white/20 backdrop-blur-sm lg:block" aria-hidden />

              <div className="relative flex flex-col items-center gap-6 text-center">
                <EcoBubbleOneEye size={160} className="motion-safe:animate-float" />
                <div className="space-y-3">
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-blue/80">ECO insight</p>
                  <p className="text-lg font-medium text-ink-primary">
                    “Percebi que minhas memórias ganham sentido quando volto a sentir, não só registrar.”
                  </p>
                  <p className="text-sm text-ink-secondary">Sugestão de respiração · 2 minutos</p>
                </div>
                <div className="grid w-full grid-cols-2 gap-3 text-left text-xs text-ink-secondary">
                  {[{ label: "Emoções", value: "7" }, { label: "Padrões", value: "3" }, { label: "Perguntas", value: "2" }, { label: "Insights", value: "5" }].map((item) => (
                    <div
                      key={item.label}
                      className="rounded-2xl border border-surface-border/70 bg-white/65 p-4 backdrop-blur"
                    >
                      <p className="text-[0.7rem] uppercase tracking-[0.18em] text-ink-secondary/70">{item.label}</p>
                      <p className="mt-1 text-xl font-semibold text-ink-primary">{item.value}</p>
                    </div>
                  ))}
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
