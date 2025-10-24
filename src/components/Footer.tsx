import React from "react";

import Container from "./Container";
import EcoBubbleOneEye from "./EcoBubbleOneEye";

const columns = [
  {
    title: "Produto",
    links: [
      { label: "Início", href: "#inicio" },
      { label: "Como funciona", href: "#como-funciona" },
      { label: "Casos de uso", href: "#casos-de-uso" },
    ],
  },
  {
    title: "Recursos",
    links: [
      { label: "Relatórios", href: "#relatorios" },
      { label: "Planos", href: "#preco" },
      { label: "Perguntas frequentes", href: "#depoimentos" },
    ],
  },
  {
    title: "Sobre",
    links: [
      { label: "Manifesto", href: "#" },
      { label: "Time", href: "#" },
      { label: "Contato", href: "#" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacidade", href: "#" },
      { label: "Termos", href: "#" },
      { label: "Cookies", href: "#" },
    ],
  },
];

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-surface-border/80 bg-white/90 py-16" role="contentinfo">
      <Container className="flex flex-col gap-12">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-sm space-y-6">
            <div className="flex items-center gap-3">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-surface-border bg-white shadow-soft">
                <EcoBubbleOneEye size={30} />
              </span>
              <span className="text-xl font-semibold tracking-tight text-ink-primary">ECO</span>
            </div>
            <p className="text-sm text-ink-secondary">
              © ECO — um espelho calmo para a sua mente inquieta.
            </p>
          </div>
          <div className="grid flex-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {columns.map((column) => (
              <div key={column.title} className="space-y-3">
                <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-ink-secondary/70">{column.title}</h3>
                <ul className="space-y-2 text-sm text-ink-secondary">
                  {column.links.map((link) => (
                    <li key={link.label}>
                      <a href={link.href} className="transition-colors duration-150 hover:text-ink-primary">
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-4 border-t border-surface-border/60 pt-6 text-xs text-ink-secondary sm:flex-row sm:items-center sm:justify-between">
          <p>Tudo calmo por aqui. Que tal um mini-scan?</p>
          <div className="flex flex-wrap items-center gap-4">
            {["Instagram", "LinkedIn", "YouTube"].map((item) => (
              <a key={item} href="#" className="transition-colors duration-150 hover:text-ink-primary">
                {item}
              </a>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
