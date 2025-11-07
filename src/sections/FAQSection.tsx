import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

import Section from "../components/Section";

const faqs = [
  {
    question: "A Eco substitui terapia?",
    answer:
      "Não. A Eco complementa processos terapêuticos ajudando você a registrar emoções entre as sessões e chegar com mais clareza ao encontro humano.",
  },
  {
    question: "Minhas memórias são privadas?",
    answer:
      "Sim. Todo conteúdo é criptografado e você decide quando exportar ou apagar registros. Nada é usado para treinar modelos externos.",
  },
  {
    question: "Ela aprende sobre mim com o tempo?",
    answer:
      "Aprende apenas com o que você escolhe compartilhar. Assim, devolve perguntas e insights cada vez mais alinhados ao seu contexto emocional.",
  },
  {
    question: "O que é um relatório emocional?",
    answer:
      "Um painel que traduz suas conversas em mapas de intensidade, temas recorrentes e evolução ao longo das semanas.",
  },
];

const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex((current) => (current === index ? null : index));
  };

  return (
    <Section
      id="faq"
      eyebrow="FAQ"
      title="Entendendo a Eco"
      description="Perguntas essenciais sobre privacidade, funcionamento e integração com a sua jornada emocional."
    >
      <div className="divide-y divide-surface-muted/60 rounded-3xl border border-surface-muted/60 bg-white/80 shadow-soft">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;
          const contentId = `faq-panel-${index}`;
          const buttonId = `faq-button-${index}`;

          return (
            <div key={faq.question}>
              <button
                id={buttonId}
                type="button"
                className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left text-base font-medium text-ink-base transition-colors duration-150 hover:text-brand-blue focus-visible:text-brand-blue"
                aria-expanded={isOpen}
                aria-controls={contentId}
                onClick={() => toggle(index)}
              >
                <span>{faq.question}</span>
                <span className={`flex h-9 w-9 items-center justify-center rounded-full border border-surface-muted/60 text-brand-blue transition-transform duration-200 ${isOpen ? "rotate-180" : "rotate-0"}`}>
                  <ChevronDown className="h-4 w-4" aria-hidden />
                </span>
              </button>
              <div
                id={contentId}
                role="region"
                aria-labelledby={buttonId}
                className={`px-6 pb-6 text-sm text-ink-soft transition-[max-height,opacity] duration-200 ease-subtle ${isOpen ? "max-h-72 opacity-100" : "max-h-0 opacity-0 overflow-hidden"}`}
              >
                <p>{faq.answer}</p>
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
};

export default FAQSection;
