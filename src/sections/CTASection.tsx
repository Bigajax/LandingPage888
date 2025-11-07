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
      eyebrow="O começo de dentro"
      title="O ponto de partida é dentro."
      description="Faça sua primeira reflexão agora — leva menos de 2 minutos. Sem conta. Sem login. Só você e o espelho."
    >
      <div className="mx-auto max-w-3xl">
        <Card className="flex flex-col items-center gap-6 bg-white/90 text-center shadow-soft-lg">
          <Button className="px-8 py-3" aria-label="Fazer minha primeira reflexão">
            Fazer Minha Primeira Reflexão
          </Button>
          <p className="text-sm text-ink-soft">Você começa agora e pode sair quando quiser. A clareza fica com você.</p>
        </Card>
      </div>
    </Section>
  );
};

export default CTASection;
