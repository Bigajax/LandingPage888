import React from "react";

import Container from "../components/Container";

const PrivacySection: React.FC = () => {
  return (
    <section id="privacidade" className="bg-surface-subtle/60" aria-labelledby="privacidade-heading">
      <Container className="grid gap-12 py-24 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1fr)] lg:items-center lg:gap-20">
        <div className="space-y-6">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-ink-soft">privacidade</p>
          <h2 id="privacidade-heading" className="text-3xl font-semibold tracking-tight text-ink-base sm:text-4xl">
            Privado. Seguro. Sagrado.
          </h2>
          <p className="text-base text-ink-soft">
            Tudo o que você compartilha com a Eco é criptografado e só existe para você. Nenhum dado vendido. Nenhuma emoção exposta.
          </p>
          <p className="text-lg font-medium text-brand-blue">A mente é sua. A Eco apenas reflete.</p>
        </div>

        <div className="space-y-4 rounded-3xl border border-surface-muted/60 bg-white/85 p-8 shadow-soft">
          <div className="rounded-2xl border border-brand-blue/20 bg-brand-blue/10 p-6 text-sm text-ink-soft">
            <p className="text-base font-semibold text-brand-blue">Criptografia ponta a ponta.</p>
            <p className="mt-2">
              Seus registros ficam inacessíveis para terceiros e podem ser apagados a qualquer momento.
            </p>
          </div>
          <div className="rounded-2xl border border-surface-muted/60 bg-surface-subtle/80 p-6 text-sm text-ink-soft">
            <p className="text-base font-semibold text-ink-base">Controle total de dados.</p>
            <p className="mt-2">Exportações auditáveis, transparência em cada insight e permissão granular.</p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default PrivacySection;
