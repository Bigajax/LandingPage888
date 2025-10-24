import React from "react";

import Button from "../components/Button";
import Container from "../components/Container";
import EcoBubbleOneEye from "../components/EcoBubbleOneEye";

const FinalCTA: React.FC = () => {
  return (
    <section id="cta-final" className="relative overflow-hidden py-24">
      <div className="absolute inset-0 bg-[radial-gradient(120%_120%_at_50%_100%,rgba(0,122,255,0.1),transparent_65%)]" aria-hidden />
      <Container className="relative flex flex-col items-center gap-8 rounded-[40px] border border-surface-border bg-white/80 px-8 py-16 text-center shadow-soft-lg backdrop-blur">
        <div className="flex items-center gap-3 rounded-full border border-white/70 bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-ink-secondary/80">
          <span>Beta gratuito · vagas limitadas</span>
        </div>
        <EcoBubbleOneEye size={96} className="text-brand-blue" />
        <div className="space-y-3">
          <h2 className="text-3xl font-semibold text-ink-primary sm:text-4xl">Pronto para dar um passo de clareza?</h2>
          <p className="text-base text-ink-secondary">Entre no beta gratuito e viva uma rotina com mais presença emocional.</p>
        </div>
        <Button className="px-8 py-3">Entrar no Beta gratuito</Button>
      </Container>
    </section>
  );
};

export default FinalCTA;
