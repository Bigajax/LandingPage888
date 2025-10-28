import React from "react";

import Card from "../components/Card";
import Container from "../components/Container";

const MethodSection: React.FC = () => {
  return (
    <section id="metodo" className="bg-white py-20 sm:py-28">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-center">
          <Card className="border border-brand-blue/20 bg-brand-blue/5">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand-blue/80">Ciência em presença</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-ink-base sm:text-4xl">
              Por trás da calma, existe método.
            </h2>
            <div className="mt-6 space-y-4 text-base text-ink-soft sm:text-lg">
              <p>A Eco combina psicologia, neurociência, filosofia e física quântica aplicada à consciência.</p>
              <p>
                A cada conversa, ela identifica padrões mentais, te ajuda a reprogramar crenças e treina sua mente para responder com equilíbrio.
              </p>
            </div>
            <p className="mt-6 text-base font-medium text-brand-blue sm:text-lg">O autodomínio é uma prática — e a Eco é sua guia.</p>
          </Card>

          <div className="grid gap-4 sm:grid-cols-2">
            {["Mapeamento emocional", "Reprogramação consciente", "Integração corpo-mente", "Treinos de resposta"].map((item) => (
              <Card key={item} className="h-full border border-surface-muted/60 bg-white/90">
                <h3 className="text-lg font-semibold text-ink-base">{item}</h3>
                <p className="mt-3 text-sm text-ink-soft">
                  Protocolos dinâmicos que combinam ciência de dados emocional com presença guiada.
                </p>
              </Card>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default MethodSection;
