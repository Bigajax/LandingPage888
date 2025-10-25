import React from "react";

import Button from "../components/Button";
import Card from "../components/Card";
import Section from "../components/Section";

const CTASection: React.FC = () => {
  return (
    <Section
      id="comecar"
      align="center"
      className="bg-white"
      eyebrow="Pronto para começar?"
      title="Ganhe clareza emocional em minutos, sem ruído."
      description="Entre no beta e sinta a experiência minimalista da Eco acompanhando cada respiração."
    >
      <div className="mx-auto max-w-3xl">
        <Card className="flex flex-col items-center gap-6 text-center">
          <p className="text-base text-eco-subtle">
            Nenhuma notificação intrusiva, cancelamento a qualquer momento e exportação completa dos seus dados.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row">
            <a href="#comecar" className="inline-flex">
              <Button className="px-8 py-3" aria-label="Experimentar agora">
                Experimentar agora
              </Button>
            </a>
            <a href="#como-funciona" className="inline-flex">
              <Button variant="secondary" className="px-8 py-3" aria-label="Iniciar Tour">
                Iniciar Tour
              </Button>
            </a>
          </div>
        </Card>
      </div>
    </Section>
  );
};

export default CTASection;
