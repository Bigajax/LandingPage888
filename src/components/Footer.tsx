import React from "react";

import Container from "./Container";
import EcoBubbleOneEye from "./EcoBubbleOneEye";

const footerColumns = [
  {
    title: "Produto",
    items: [
      { label: "Benefícios", href: "#beneficios" },
      { label: "Como funciona", href: "#como-funciona" },
      { label: "Depoimentos", href: "#depoimentos" },
    ],
  },
  {
    title: "Recursos",
    items: [
      { label: "Blog", href: "#" },
      { label: "Central de ajuda", href: "#" },
      { label: "Comunidade", href: "#" },
    ],
  },
  {
    title: "Legal",
    items: [
      { label: "Privacidade", href: "#" },
      { label: "Termos", href: "#" },
      { label: "Cookies", href: "#" },
    ],
  },
];

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-[var(--line)] bg-white" role="contentinfo">
      <Container className="grid gap-10 py-16">
        <div className="grid gap-8 md:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] md:gap-12">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--line)]">
                <EcoBubbleOneEye size={18} />
              </span>
              <span className="text-lg font-semibold tracking-[-0.02em] text-eco-text">ECO</span>
            </div>
            <p className="max-w-sm text-sm text-eco-subtle">
              Um espaço calmo para organizar emoções, preservar memórias com contexto e enxergar padrões com clareza.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {footerColumns.map((column) => (
              <div key={column.title} className="space-y-3">
                <h3 className="text-xs font-semibold uppercase tracking-[0.24em] text-eco-subtle">{column.title}</h3>
                <ul className="space-y-2 text-sm text-eco-subtle">
                  {column.items.map((item) => (
                    <li key={item.label}>
                      <a
                        href={item.href}
                        className="transition-colors duration-150 hover:text-eco-text focus-visible:text-eco-text"
                      >
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-4 border-t border-[var(--line)] pt-6 text-xs text-eco-subtle sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Eco. Todos os direitos reservados.</p>
          <div className="flex flex-wrap items-center gap-4">
            {footerColumns[2].items.map((item) => (
              <a key={item.label} href={item.href} className="transition-colors duration-150 hover:text-eco-text">
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
