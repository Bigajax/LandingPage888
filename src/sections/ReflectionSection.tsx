import React from "react";

import Card from "../components/Card";
import Container from "../components/Container";

const ReflectionSection: React.FC = () => {
  return (
    <section id="reflexo" className="bg-[#F7FAFF] py-20 sm:py-28">
      <Container>
        <div className="space-y-8 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-ink-soft">O reflexo</p>
          <h2 className="mx-auto max-w-3xl text-3xl font-semibold tracking-tight text-ink-base sm:text-4xl">
            Veja sua mente com novos olhos.
          </h2>
          <div className="mx-auto max-w-2xl space-y-4 text-base text-ink-soft sm:text-lg">
            <p>A Eco registra suas emoções, intensidade e progresso emocional.</p>
            <p>
              Ela constrói um mapa da sua consciência — para que você entenda o que sente, por que sente e como transformar.
            </p>
          </div>
          <p className="text-base font-medium text-brand-blue sm:text-lg">Clareza emocional é autoconhecimento em ação.</p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {["Mapa da consciência", "Linhas do tempo emocionais", "Insights compartilháveis", "Planos de integração"].map((item) => (
            <Card key={item} className="h-full border border-transparent bg-white/90 text-left">
              <h3 className="text-lg font-semibold text-ink-base">{item}</h3>
              <p className="mt-3 text-sm text-ink-soft">
                Visualizações e reflexões que mostram sua evolução com delicadeza científica.
              </p>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default ReflectionSection;
