import React from "react";

import Button from "../components/Button";
import Card from "../components/Card";
import Section from "../components/Section";

const CTASection: React.FC = () => {
  return (
    <Section
      id="comecar"
      align="center"
      className="bg-white py-20"
      eyebrow="🌤️ Comece agora"
      title="Comece o seu cotidiano emocional com mais leveza."
      description="Em menos de 3 minutos, sua conta está pronta. Você escolhe o ritmo — a Eco cuida do resto."
    >
      <div className="mx-auto max-w-3xl">
        <Card className="flex flex-col items-center gap-6 border-eco-border/40 bg-eco-offWhite/50 text-center shadow-eco-medium">
          <p className="text-base font-light leading-relaxed text-eco-textSoft">
            Você pode exportar todos os dados sempre que quiser. Total controle e transparência.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Button
              className="bg-eco-babyBlue px-8 py-3 text-white transition-all duration-300 hover:scale-102 hover:bg-eco-babySoft hover:shadow-eco-soft"
              aria-label="Experimentar agora"
            >
              Experimentar agora
            </Button>
            <Button
              variant="secondary"
              className="border-eco-babyBlue px-8 py-3 text-eco-babyBlue transition-all duration-300 hover:bg-eco-babyBlue/10"
            >
              Agendar demonstração
            </Button>
          </div>
        </Card>
      </div>
    </Section>
  );
};

export default CTASection;
