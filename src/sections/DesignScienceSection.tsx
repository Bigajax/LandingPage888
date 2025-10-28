import React from "react";

import Container from "../components/Container";

const DesignScienceSection: React.FC = () => {
  return (
    <section id="design" className="bg-surface-subtle/50" aria-labelledby="design-heading">
      <Container className="grid gap-10 py-24 lg:grid-cols-2 lg:items-center lg:gap-20">
        <div className="space-y-6">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-ink-soft">design cognitivo</p>
          <h2 id="design-heading" className="text-3xl font-semibold tracking-tight text-ink-base sm:text-4xl">
            Design minimalista. Ciência profunda.
          </h2>
          <p className="text-base text-ink-soft">
            Cada detalhe da Eco foi desenhado para acalmar o olhar e ativar a mente. Nada de ruído, distrações ou estímulos vazios — apenas espaço, luz e pensamento.
          </p>
          <p className="text-lg font-medium text-brand-blue">Um ambiente que pensa como você: com calma.</p>
        </div>

        <div className="space-y-5 rounded-3xl border border-surface-muted/60 bg-white/90 p-8 shadow-soft">
          {["Interface respirável, com tipografia calibrada para foco.", "Cores neutras que reduzem carga cognitiva.", "Microinterações criadas para estabilizar sua atenção."].map((item) => (
            <div key={item} className="rounded-2xl border border-surface-muted/60 bg-surface-subtle/80 p-5 text-sm font-medium text-ink-base">
              {item}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default DesignScienceSection;
