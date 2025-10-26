import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

import Section from "../components/Section";

const faqs = [
  {
    question: "Como Eco cuida da minha privacidade?",
    answer:
      "Todo o conteúdo é criptografado de ponta a ponta e processado localmente sempre que possível. Só você acessa suas memórias.",
  },
  {
    question: "Quanto custa depois do período de testes?",
    answer:
      "Durante o beta aberto, Eco é gratuito. Após o lançamento, haverá planos mensais com cancelamento instantâneo e descontos anuais.",
  },
  {
    question: "Como começo a usar?",
    answer:
      "Clique em ‘Experimentar agora’, crie sua conta com e-mail ou Apple ID e complete o onboarding guiado de 3 minutos.",
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
      eyebrow="FAQ"
      title="Respostas objetivas, sem ruído"
      description="A mesma serenidade visual da tela de login, agora guiando suas principais dúvidas."
    >
      <div className="space-y-3">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;
          const contentId = `faq-panel-${index}`;
          const buttonId = `faq-button-${index}`;

          return (
            <div key={faq.question} className="rounded-[12px] border border-[var(--line)] bg-white">
              <button
                id={buttonId}
                type="button"
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-base font-medium text-eco-text transition-colors duration-150 hover:text-eco-brand"
                aria-expanded={isOpen}
                aria-controls={contentId}
                onClick={() => toggle(index)}
              >
                <span>{faq.question}</span>
                <span
                  className={`flex h-8 w-8 items-center justify-center rounded-full border border-[var(--line)] text-eco-subtle transition-transform duration-150 ${
                    isOpen ? "rotate-180" : "rotate-0"
                  }`}
                >
                  <ChevronDown className="h-4 w-4" aria-hidden />
                </span>
              </button>
              <div
                id={contentId}
                role="region"
                aria-labelledby={buttonId}
                className={`px-5 pb-4 text-sm text-eco-subtle transition-[max-height,opacity] duration-150 ease-subtle ${
                  isOpen ? "max-h-64 opacity-100" : "max-h-0 overflow-hidden opacity-0"
                }`}
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
