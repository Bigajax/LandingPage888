import React from "react";

import Container from "../components/Container";

const DataScienceSection: React.FC = () => {
  return (
    <section id="dados" className="bg-white" aria-labelledby="dados-heading">
      <Container className="grid gap-12 py-24 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.9fr)] lg:items-center lg:gap-20">
        <div className="space-y-6">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-ink-soft">dados e ciência</p>
          <h2 id="dados-heading" className="text-3xl font-semibold tracking-tight text-ink-base sm:text-4xl">
            De emoções a dados, tudo faz sentido.
          </h2>
          <p className="text-base text-ink-soft">
            Cada conversa, reflexão ou respiração gera um mapa emocional dinâmico. A Eco transforma percepções em métricas — e métricas em consciência.
          </p>
          <p className="text-lg font-medium text-brand-blue">Filosofia viva com base científica.</p>
        </div>

        <div className="space-y-5 rounded-3xl border border-surface-muted/60 bg-surface-subtle/70 p-8 shadow-soft">
          <div className="grid gap-4 sm:grid-cols-2">
            {["Mapa emocional em tempo real", "Insights com evidência científica", "Alertas de padrões emocionais", "Recomendações calibradas por IA"].map((item) => (
              <div key={item} className="rounded-2xl border border-surface-muted/60 bg-white/90 p-5 text-sm font-medium text-ink-base">
                {item}
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default DataScienceSection;
