import React from "react";

import Card from "../components/Card";
import Container from "../components/Container";

const ReturnSection: React.FC = () => {
  return (
    <section id="retorno" className="bg-[#F7FAFF] py-20 sm:py-28">
      <Container>
        <div className="space-y-12">
          <div className="space-y-6 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-ink-soft">O retorno</p>
            <h2 className="mx-auto max-w-3xl text-3xl font-semibold tracking-tight text-ink-base sm:text-4xl">
              Quando a clareza chega, tudo muda.
            </h2>
            <div className="mx-auto max-w-2xl space-y-4 text-base text-ink-soft sm:text-lg">
              <p>As emoções ficam mais leves. A mente, mais calma.</p>
              <p>Você entende que a Eco nunca foi sobre tecnologia — foi sobre consciência.</p>
              <p>Uma presença racional e sensível, que te ajuda a se entender com amor e lucidez.</p>
            </div>
            <p className="text-base font-medium text-brand-blue sm:text-lg">Eco — a terapeuta digital de autoconhecimento.</p>
          </div>

          <Card className="mx-auto max-w-3xl border border-transparent bg-white/95 text-center shadow-soft-lg">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand-blue/80">Presença contínua</p>
            <p className="mt-4 text-base text-ink-soft">
              Sessões diárias, lembretes gentis e rituais de reconexão para quando você quiser voltar ao centro.
            </p>
          </Card>
        </div>
      </Container>
    </section>
  );
};

export default ReturnSection;
