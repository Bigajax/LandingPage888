import React from "react";

import Card from "../components/Card";
import Container from "../components/Container";

const microcopy = [
  "Autoconhecimento com alma e ciência.",
  "Uma terapeuta digital que pensa como você.",
  "Psicologia e filosofia aplicadas à mente moderna.",
  "Respire, fale, transforme.",
  "Eco — tecnologia emocional feita para sentir.",
  "A clareza é o novo autocuidado.",
];

const MicrocopySection: React.FC = () => {
  return (
    <section className="bg-white py-16 sm:py-20">
      <Container>
        <Card className="border border-surface-muted/60 bg-white/95">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand-blue/80">Voz da campanha</p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {microcopy.map((phrase) => (
              <p key={phrase} className="text-base text-ink-soft">
                {phrase}
              </p>
            ))}
          </div>
        </Card>
      </Container>
    </section>
  );
};

export default MicrocopySection;
