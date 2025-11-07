import React from "react";

import Container from "./Container";
import EcoBubbleOneEye from "./EcoBubbleOneEye";

const footerLinks = [
  {
    title: "Explorar",
    items: [
      { label: "Como funciona", href: "#como-funciona" },
      { label: "Momentos", href: "#momentos" },
      { label: "Planos", href: "#planos" },
    ],
  },
  {
    title: "Clareza",
    items: [
      { label: "BenefÃ­cios", href: "#beneficios" },
      { label: "Depoimentos", href: "#depoimentos" },
      { label: "FAQ", href: "#faq" },
    ],
  },
];

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-[rgba(56,50,42,0.12)] bg-[radial-gradient(circle_at_top,#f3eee7,rgba(250,249,247,0.95))] py-12" role="contentinfo">
      <Container className="flex flex-col gap-10">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-sm space-y-6">
            <div className="flex items-center gap-3">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-white/50 bg-[rgba(250,249,247,0.85)] shadow-soft backdrop-blur">
                <EcoBubbleOneEye size={30} />
              </span>
              <span className="text-xl font-semibold tracking-tight text-ink-base">ECO</span>
            </div>
            <p className="text-sm text-ink-soft">
              SilÃªncio e continuidade. A Eco guarda suas reflexÃµes com carinho, para que vocÃª volte sempre que precisar ouvir a si mesmo.
            </p>
          </div>

          <div className="grid flex-1 gap-8 sm:grid-cols-2">
            {footerLinks.map((column) => (
              <div key={column.title} className="space-y-3">
                <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-clay/80">
                  {column.title}
                </h3>
                <ul className="space-y-2 text-sm text-ink-soft">
                  {column.items.map((item) => (
                    <li key={item.label}>
                      <a href={item.href} className="transition-colors duration-150 hover:text-ink-base">
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-4 border-t border-[rgba(56,50,42,0.12)] pt-6 text-xs text-ink-soft sm:flex-row sm:items-center sm:justify-between">
          <p>Â© 2025 ECO Â· Todos os direitos reservados</p>
          <div className="flex flex-wrap items-center gap-4">
            {[
              { label: "PolÃ­tica de Privacidade", href: "#" },
              { label: "Termos de Uso", href: "#" },
              { label: "Contato", href: "mailto:oi@eco.app" },
            ].map((item) => (
              <a key={item.label} href={item.href} className="transition-colors duration-150 hover:text-ink-base">
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;

