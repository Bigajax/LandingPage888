import React from "react";

import Container from "../components/Container";

const integrations = [
  { name: "Web", icon: "🌐" },
  { name: "iOS", icon: "📱" },
  { name: "Android", icon: "🤖" },
  { name: "Calendário", icon: "🗓️" },
];

const IntegrationsRow: React.FC = () => {
  return (
    <section className="py-12">
      <Container className="flex flex-col gap-4 rounded-[28px] border border-surface-border bg-white/80 px-6 py-8 text-center shadow-soft backdrop-blur">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-ink-secondary/70">Compatibilidade</p>
        <p className="text-base text-ink-secondary">Funciona em web, mobile e com sua rotina.</p>
        <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-ink-secondary">
          {integrations.map((item) => (
            <div key={item.name} className="flex items-center gap-2 rounded-full border border-surface-border px-4 py-2">
              <span aria-hidden className="text-lg">{item.icon}</span>
              <span>{item.name}</span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default IntegrationsRow;
