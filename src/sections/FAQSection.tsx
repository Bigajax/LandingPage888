import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

import Section from "../components/Section";

const faqs = [
  {
    question: "Como Eco cuida da minha privacidade?",
    answer:
      "Todo o conteúdo é criptografado de ponta a ponta e processado localmente sempre que possível. Só você tem acesso às suas memórias.",
  },
  {
    question: "Quanto custa depois do período de testes?",
    answer:
      "Durante o beta aberto, Eco é gratuito. Após o lançamento, haverá planos mensais com cancelamento instantâneo e descontos anuais.",
  },
  {
    question: "Como começo a usar?",
    answer:
      "Clique em 'Experimentar agora', crie sua conta com e-mail ou Apple ID e complete o onboarding guiado de 3 minutos.",
  },
  {
    question: "Posso cancelar quando quiser?",
    answer:
      "Sim. Você pode cancelar a assinatura dentro do app, sem ligações ou questionários. O acesso permanece até o final do ciclo vigente.",
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
      eyebrow="❓ FAQ"
      title="Perguntas diretas, respostas leves."
      description="Ficou com alguma dúvida? Estamos aqui para responder com transparência total."
    >
      <div className="divide-y divide-eco-border/40 rounded-3xl border border-eco-border bg-white/70 shadow-eco-soft backdrop-blur-sm">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;
          const contentId = `faq-panel-${index}`;
          const buttonId = `faq-button-${index}`;

          return (
            <div key={faq.question}>
              <button
                id={buttonId}
                type="button"
                className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left text-base font-normal text-eco-text transition-all duration-300 hover:text-eco-babyBlue focus-visible:text-eco-babyBlue"
                aria-expanded={isOpen}
                aria-controls={contentId}
                onClick={() => toggle(index)}
              >
                <span>{faq.question}</span>
                <span className={`flex h-9 w-9 items-center justify-center rounded-full border border-eco-border/60 text-eco-babyBlue transition-all duration-300 ${isOpen ? "rotate-180 bg-eco-babyBlue/10" : "rotate-0"}`}>
                  <ChevronDown className="h-4 w-4" aria-hidden />
                </span>
              </button>
              <div
                id={contentId}
                role="region"
                aria-labelledby={buttonId}
                className={`px-6 pb-6 text-sm font-light leading-relaxed text-eco-textSoft transition-[max-height,opacity] duration-300 ease-subtle ${isOpen ? "max-h-72 opacity-100" : "max-h-0 opacity-0 overflow-hidden"}`}
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
