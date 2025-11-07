import React from "react";

import Button from "../components/Button";
import Card from "../components/Card";
import Section from "../components/Section";

const plans = [
  {
    name: "Explorar",
    price: "Grátis",
    audience: "Começar a refletir",
    benefits: ["10 reflexões/mês", "memória curta"],
    highlight: false,
  },
  {
    name: "Aprofundar",
    price: "R$29/mês",
    audience: "Reconhecer padrões",
    benefits: ["reflexões ilimitadas", "relatórios emocionais"],
    highlight: true,
  },
  {
    name: "Integrar",
    price: "R$59/mês",
    audience: "Transformação contínua",
    benefits: ["linha do tempo emocional", "insights personalizados"],
    highlight: false,
  },
];

const PricingSection: React.FC = () => {
  return (
    <Section
      id="planos"
      eyebrow="Clareza ao seu ritmo"
      title="Planos que acompanham o seu processo"
      description="Comece gratuitamente e evolua para relatórios profundos quando estiver pronto."
      align="center"
    >
      <div className="grid gap-6 lg:grid-cols-3">
        {plans.map((plan) => (
          <Card
            key={plan.name}
            className={`h-full space-y-5 rounded-[32px] border border-[rgba(56,50,42,0.14)] p-6 text-left ${
              plan.highlight ? "ring-2 ring-brand-blue/60 shadow-[0_25px_60px_-35px_rgba(56,50,42,0.55)]" : ""
            }`}
          >
            <div className="space-y-2">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-ink-soft">{plan.name}</p>
              <h3 className="text-2xl font-semibold text-ink-base">{plan.price}</h3>
              <p className="text-sm text-ink-soft">{plan.audience}</p>
            </div>
            <ul className="space-y-2 text-sm text-ink-soft">
              {plan.benefits.map((benefit) => (
                <li key={benefit} className="flex items-center gap-2">
                  <span aria-hidden className="text-brand-clay">•</span>
                  <span className="capitalize">{benefit}</span>
                </li>
              ))}
            </ul>
            {plan.highlight && (
              <p className="rounded-full bg-brand-blue/10 px-4 py-1 text-center text-xs font-medium text-brand-blue">
                Destaque suave recomendado
              </p>
            )}
          </Card>
        ))}
      </div>
      <div className="mt-10 flex justify-center">
        <a href="#comecar" className="inline-flex">
          <Button className="px-8 py-3" aria-label="Começar gratuitamente">
            Comece de graça — descubra o poder de se escutar
          </Button>
        </a>
      </div>
    </Section>
  );
};

export default PricingSection;
