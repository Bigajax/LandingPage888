import React from "react";

import Button from "../components/Button";
import Section from "../components/Section";

const plans = [
  {
    name: "Free",
    price: "R$0",
    description: "Check-ins diários e memória de 14 dias",
    features: ["Check-in guiado", "Mapa semanal", "Exportação em texto"],
    highlighted: false,
  },
  {
    name: "Starter",
    price: "R$39",
    description: "Mapa completo e relatórios de 30 dias",
    features: ["Timeline 30 dias", "Perguntas sob medida", "Relatórios em PDF"],
    highlighted: true,
  },
  {
    name: "Pro",
    price: "R$89",
    description: "Para quem quer dados profundos e integrações",
    features: ["Integrations API", "Check-ins ilimitados", "Relatórios compartilháveis"],
    highlighted: false,
  },
];

const PricingSection: React.FC = () => {
  return (
    <Section id="preco" eyebrow="Planos" title="Comece gratuito. Evolua no seu tempo." align="center">
      <div className="grid gap-6 lg:grid-cols-3">
        {plans.map((plan) => (
          <article
            key={plan.name}
            className={`flex h-full flex-col gap-6 rounded-[32px] border border-surface-border bg-white/80 p-8 text-left shadow-[0_24px_50px_-36px_rgba(15,23,42,0.25)] transition duration-200 ease-subtle motion-safe:hover:-translate-y-1 motion-safe:hover:shadow-soft ${
              plan.highlighted ? "lg:-mt-4 lg:pb-10" : ""
            }`}
          >
            <div className="space-y-2">
              <span className="text-sm font-semibold uppercase tracking-[0.25em] text-ink-secondary/70">{plan.name}</span>
              <p className="text-3xl font-semibold text-ink-primary">{plan.price}</p>
              <p className="text-sm text-ink-secondary">{plan.description}</p>
            </div>
            <ul className="space-y-3 text-sm text-ink-secondary">
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-center gap-3">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-brand-blue/12 text-brand-blue">
                    <svg viewBox="0 0 16 16" className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M3.5 8.2 6.4 11l6-6.4" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  {feature}
                </li>
              ))}
            </ul>
            <div className="pt-2">
              <Button fullWidth className="py-3" variant={plan.highlighted ? "primary" : "secondary"}>
                Começar agora
              </Button>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
};

export default PricingSection;
