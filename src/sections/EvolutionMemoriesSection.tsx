import React from "react";

import Container from "../components/Container";

const highlights = [
  {
    title: "Intensidade emocional",
    description: "A Eco atribui camadas de profundidade para cada registro, cruzando sensação, contexto e intenção.",
  },
  {
    title: "Linha do tempo inteligente",
    description: "Reviva momentos significativos com filtros por emoções, temas e conquistas internas.",
  },
  {
    title: "Análises comparativas",
    description: "Entenda padrões e veja como seu estado mental evolui com visualizações claras e sem ruído.",
  },
];

const EvolutionMemoriesSection: React.FC = () => {
  return (
    <section id="memorias" className="bg-white" aria-labelledby="memorias-heading">
      <Container className="space-y-14 py-24">
        <div className="max-w-3xl space-y-6">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-ink-soft">memórias e autoconhecimento</p>
          <h2 id="memorias-heading" className="text-3xl font-semibold tracking-tight text-ink-base sm:text-4xl">
            Reveja sua evolução emocional.
          </h2>
          <p className="text-base text-ink-soft">
            A Eco registra suas memórias com base em intensidade emocional e contexto psicológico. Volte no tempo, entenda seus padrões e veja o quanto sua mente já mudou.
          </p>
          <p className="text-lg font-medium text-brand-blue">O autoconhecimento não é linha reta — é uma espiral de consciência.</p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {highlights.map((item) => (
            <div key={item.title} className="space-y-3 rounded-3xl border border-surface-muted/60 bg-surface-subtle/70 p-6 shadow-soft">
              <h3 className="text-lg font-semibold text-ink-base">{item.title}</h3>
              <p className="text-sm text-ink-soft">{item.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default EvolutionMemoriesSection;
