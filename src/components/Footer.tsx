import React from "react";

import Container from "./Container";
import EcoBubbleOneEye from "./EcoBubbleOneEye";

const footerLinks = [
  {
    title: "Produto",
    items: [
      { label: "Benefícios", href: "#beneficios" },
      { label: "Como funciona", href: "#como-funciona" },
      { label: "Depoimentos", href: "#depoimentos" },
    ],
  },
  {
    title: "Empresa",
    items: [
      { label: "Sobre", href: "#" },
      { label: "Carreiras", href: "#" },
      { label: "Contato", href: "#" },
    ],
  },
];

const socials = [
  { label: "Instagram", href: "#", icon: <path d="M12 7.2a4.8 4.8 0 1 0 0 9.6 4.8 4.8 0 0 0 0-9.6Zm0 7.6a2.8 2.8 0 1 1 0-5.6 2.8 2.8 0 0 1 0 5.6Zm6.2-7.8a1.1 1.1 0 1 1 0-2.2 1.1 1.1 0 0 1 0 2.2Zm3.2 1.2c-.1-2-.6-3.4-1.4-4.2-.8-.8-2.2-1.3-4.2-1.4C13.8 2.5 10.2 2.5 7 2.6c-2 .1-3.4.6-4.2 1.4C2 4.8 1.5 6.2 1.4 8.2 1.3 10.4 1.3 13.6 1.4 16c.1 2 .6 3.4 1.4 4.2.8.8 2.2 1.3 4.2 1.4 2.2.1 5.8.1 9 0 2 0 3.4-.6 4.2-1.4.8-.8 1.3-2.2 1.4-4.2.1-2.4.1-5.6 0-7.8Z" /> },
  { label: "LinkedIn", href: "#", icon: <path d="M4.6 8.6H8v12H4.6zm1.7-5.8a2 2 0 1 1 0 4.1 2 2 0 0 1 0-4.1ZM9.5 8.6H13v1.8h.1c.5-.9 1.7-1.9 3.5-1.9 3.8 0 4.5 2.5 4.5 5.8v7.3h-3.4v-6.5c0-1.6 0-3.6-2.2-3.6-2.2 0-2.5 1.7-2.5 3.5v6.6H9.6Z" /> },
  { label: "YouTube", href: "#", icon: <path d="M21.8 7.2a2.3 2.3 0 0 0-1.6-1.6C18.4 5 12 5 12 5s-6.4 0-8.2.6A2.3 2.3 0 0 0 2.2 7.2 37 37 0 0 0 1.6 12a37 37 0 0 0 .6 4.8 2.3 2.3 0 0 0 1.6 1.6C5.6 19 12 19 12 19s6.4 0 8.2-.6a2.3 2.3 0 0 0 1.6-1.6 37 37 0 0 0 .6-4.8 37 37 0 0 0-.6-4.8ZM10.2 15.1V8.9l5.2 3.1z" /> },
];

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-surface-muted/60 bg-surface-soft/40 py-12" role="contentinfo">
      <Container className="flex flex-col gap-10">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-sm space-y-6">
            <div className="flex items-center gap-3">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-surface-muted/60 bg-white shadow-soft">
                <EcoBubbleOneEye size={30} />
              </span>
              <span className="text-xl font-semibold tracking-tight text-ink-base">ECO</span>
            </div>
            <p className="text-sm text-ink-soft">
              Um espaço calmo para organizar emoções, preservar memórias com contexto e enxergar padrões com clareza.
            </p>
            <div className="flex items-center gap-3">
              {socials.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  aria-label={item.label}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-surface-muted/60 bg-white text-ink-soft transition-colors duration-150 hover:text-brand-blue"
                >
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    {item.icon}
                  </svg>
                </a>
              ))}
            </div>
          </div>

          <div className="grid flex-1 gap-8 sm:grid-cols-2">
            {footerLinks.map((column) => (
              <div key={column.title} className="space-y-3">
                <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-ink-soft">
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

        <div className="flex flex-col gap-4 border-t border-surface-muted/60 pt-6 text-xs text-ink-soft sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Eco. Todos os direitos reservados.</p>
          <div className="flex flex-wrap items-center gap-4">
            {["Privacidade", "Termos", "Cookies"].map((item) => (
              <a key={item} href="#" className="transition-colors duration-150 hover:text-ink-base">
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
