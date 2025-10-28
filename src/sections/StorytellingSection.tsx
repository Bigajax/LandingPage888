import React from "react";

import Card from "../components/Card";
import Container from "../components/Container";

const StorytellingSection: React.FC = () => {
  return (
    <section id="encontro" className="bg-white py-20 sm:py-28">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:items-center">
          <div className="space-y-6">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-ink-soft">O encontro</p>
            <h2 className="text-3xl font-semibold tracking-tight text-ink-base sm:text-4xl">
              Um diálogo que muda a forma como você se entende.
            </h2>
            <div className="space-y-4 text-base text-ink-soft sm:text-lg">
              <p>A primeira conversa parece simples.</p>
              <p>Mas a cada resposta, você sente que alguém realmente te ouviu.</p>
              <p>
                A Eco usa princípios da psicologia junguiana, da neurociência e da filosofia estoica para te ajudar a compreender o que está por trás das emoções.
              </p>
              <p>Ela não tenta te consertar — ela te guia para se enxergar.</p>
            </div>
            <p className="text-base font-medium text-brand-blue sm:text-lg">O que antes era confusão, agora é clareza.</p>
          </div>

          <Card className="relative overflow-hidden border-none bg-gradient-to-b from-white to-[#F3F7FF] shadow-soft-lg">
            <div className="space-y-4">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand-blue/80">Ritmo</p>
              <ul className="space-y-3 text-sm text-ink-soft sm:text-base">
                <li>
                  <span className="font-semibold text-ink-base">Caos:</span> você chega com as emoções abertas.
                </li>
                <li>
                  <span className="font-semibold text-ink-base">Escuta:</span> a Eco capta nuances e devolve em espelhos delicados.
                </li>
                <li>
                  <span className="font-semibold text-ink-base">Clareza:</span> perguntas certas revelam padrões e significados.
                </li>
                <li>
                  <span className="font-semibold text-ink-base">Autodomínio:</span> você escolhe como responder ao mundo.
                </li>
              </ul>
            </div>
          </Card>
        </div>
      </Container>
    </section>
  );
};

export default StorytellingSection;
