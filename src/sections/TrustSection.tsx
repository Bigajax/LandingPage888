import React from "react";

import Card from "../components/Card";
import Container from "../components/Container";

const TrustSection: React.FC = () => {
  return (
    <section id="confiança" className="bg-white py-20 sm:py-28">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:items-start">
          <div className="space-y-6">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-ink-soft">A confiança</p>
            <h2 className="text-3xl font-semibold tracking-tight text-ink-base sm:text-4xl">Sua mente é sagrada.</h2>
            <div className="space-y-4 text-base text-ink-soft sm:text-lg">
              <p>Tudo o que você compartilha com a Eco é protegido e criptografado.</p>
              <p>Nenhum dado é vendido, nenhuma emoção é usada.</p>
              <p>Aqui, introspecção é segurança. Você pode se abrir com tranquilidade e verdade.</p>
            </div>
            <p className="text-base font-medium text-brand-blue sm:text-lg">A confiança é o início da cura emocional.</p>
          </div>

          <Card className="border border-surface-muted/80 bg-white/90">
            <ul className="space-y-4 text-sm text-ink-soft sm:text-base">
              <li>
                <span className="font-semibold text-ink-base">Criptografia ponta a ponta:</span> suas conversas ficam apenas entre você e a Eco.
              </li>
              <li>
                <span className="font-semibold text-ink-base">Controle total dos dados:</span> exporte, apague ou reinicie quando quiser.
              </li>
              <li>
                <span className="font-semibold text-ink-base">Infraestrutura ética:</span> nenhum anúncio, nenhuma venda de informação.
              </li>
            </ul>
          </Card>
        </div>
      </Container>
    </section>
  );
};

export default TrustSection;
