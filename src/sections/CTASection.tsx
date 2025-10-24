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
      eyebrow="Comece agora"
      title="Prepare-se para um cotidiano emocional mais leve"
      description="Junte-se ao beta fechado e receba convites exclusivos, templates de reflexão e trilhas de respiração guiada."
    >
      <div className="mx-auto max-w-3xl">
        <Card className="flex flex-col items-center gap-6 bg-white/90 text-center shadow-soft-lg">
          <p className="text-base text-ink-soft">
            Leva menos de 3 minutos para criar sua conta. Você pode exportar todos os dados sempre que quiser.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Button className="px-8 py-3" aria-label="Experimentar agora">
              Experimentar agora
            </Button>
            <Button variant="secondary" className="px-8 py-3">
              Agendar demonstração
            </Button>
          </div>
        </Card>
      </div>
    </Section>
  );
};

export default CTASection;
