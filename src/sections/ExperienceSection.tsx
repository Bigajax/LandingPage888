import React from "react";

import Card from "../components/Card";
import Container from "../components/Container";

const ExperienceSection: React.FC = () => {
  return (
    <section id="experiencia" className="bg-[#F7FAFF] py-20 sm:py-28">
      <Container>
        <div className="space-y-14">
          <div className="space-y-6 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-ink-soft">A experiência</p>
            <h2 className="mx-auto max-w-3xl text-3xl font-semibold tracking-tight text-ink-base sm:text-4xl">
              Design que acalma. Conversa que transforma.
            </h2>
            <div className="mx-auto max-w-2xl space-y-4 text-base text-ink-soft sm:text-lg">
              <p>Tudo na Eco foi criado para desacelerar: interface leve, sons sutis, atmosfera silenciosa.</p>
              <p>Você fala, escreve ou respira — e ela te guia com perguntas terapêuticas baseadas em ciência e presença.</p>
            </div>
            <p className="text-base font-medium text-brand-blue sm:text-lg">Clareza é estética para a mente.</p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {["Interface leve", "Som que abraça", "Perguntas que guiam"].map((label) => (
              <Card key={label} className="h-full border border-transparent bg-white/90 text-left shadow-soft">
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand-blue/80">Experiência</p>
                <h3 className="mt-4 text-xl font-semibold text-ink-base">{label}</h3>
                <p className="mt-3 text-sm text-ink-soft">
                  Cada detalhe foi desenhado para acalmar o corpo enquanto a mente encontra palavras.
                </p>
              </Card>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ExperienceSection;
