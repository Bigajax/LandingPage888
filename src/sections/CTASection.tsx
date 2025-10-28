import React from "react";

import Button from "../components/Button";
import Card from "../components/Card";
import Section from "../components/Section";

const CTASection: React.FC = () => {
  return (
    <Section
      id="comecar"
      align="center"
      className="py-20"
      eyebrow="Convite"
      title="Pronta para te ouvir quando você estiver pronta para sentir"
      description="Comece uma sessão com a Eco agora mesmo e descubra como a clareza emocional muda a forma como você vive."
    >
      <div className="mx-auto max-w-3xl">
        <Card className="flex flex-col items-center gap-6 bg-white/95 text-center shadow-soft-lg">
          <p className="text-base text-ink-soft sm:text-lg">
            Gratuito para usar. Melhor com Premium.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Button className="px-8 py-3" aria-label="Começar agora">
              Começar agora
            </Button>
            <Button variant="secondary" className="px-8 py-3">
              Conhecer planos
            </Button>
          </div>
        </Card>
      </div>
    </Section>
  );
};

export default CTASection;
