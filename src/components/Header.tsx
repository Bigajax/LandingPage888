import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

import Button from "./Button";
import Container from "./Container";
import EcoBubbleOneEye from "./EcoBubbleOneEye";

const NAV_LINKS = [
  { label: "Início", href: "#inicio" },
  { label: "Como funciona", href: "#como-funciona" },
  { label: "Casos de uso", href: "#casos-de-uso" },
  { label: "Relatórios", href: "#relatorios" },
  { label: "Preço", href: "#preco" },
];

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handler = () => setIsScrolled(window.scrollY > 16);
    handler();
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const headerBg = isScrolled
    ? "bg-white/88 backdrop-blur-xl shadow-[0_18px_48px_-24px_rgba(15,23,42,0.35)] border border-surface-border"
    : "bg-white/60 backdrop-blur-md border border-transparent";

  return (
    <header className="fixed inset-x-0 top-0 z-50" role="banner">
      <div className="py-4">
        <Container className="relative">
          <div
            className={`flex items-center justify-between rounded-[28px] px-4 py-3 transition-[background,box-shadow,border] duration-200 ease-subtle sm:px-6 ${headerBg}`}
          >
            <div className="flex items-center gap-3">
              <Link
                to="/"
                className="flex items-center gap-2 font-semibold tracking-tight text-ink-primary"
                aria-label="ECO, voltar ao início"
              >
                <EcoBubbleOneEye size={28} />
                <span className="text-lg sm:text-xl">ECO</span>
              </Link>
            </div>

            <nav
              className="hidden items-center gap-9 text-sm font-medium text-ink-secondary lg:flex"
              aria-label="Navegação principal"
            >
              {NAV_LINKS.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="group relative transition-colors duration-150 hover:text-ink-primary focus-visible:text-ink-primary"
                >
                  {item.label}
                  <span className="pointer-events-none absolute -bottom-2 left-1/2 hidden h-px w-8 -translate-x-1/2 bg-brand-blue transition-opacity duration-200 group-hover:block" />
                </a>
              ))}
            </nav>

            <div className="hidden lg:flex">
              <a href="#cta-final" className="inline-flex">
                <Button aria-label="Experimentar" className="px-5 py-2.5">
                  Experimentar
                </Button>
              </a>
            </div>

            <button
              type="button"
              className="flex h-11 w-11 items-center justify-center rounded-2xl border border-surface-border text-ink-secondary transition-colors duration-150 hover:text-ink-primary lg:hidden"
              onClick={() => setIsOpen((open) => !open)}
              aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
              aria-expanded={isOpen}
            >
              {isOpen ? <X aria-hidden size={20} /> : <Menu aria-hidden size={20} />}
            </button>
          </div>

          {isOpen && (
            <div className="mt-3 rounded-3xl border border-surface-border bg-white/95 p-6 shadow-soft lg:hidden" role="dialog">
              <nav className="space-y-4 text-base text-ink-secondary">
                {NAV_LINKS.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="block rounded-2xl px-2 py-2 transition-colors duration-150 hover:text-ink-primary"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </a>
                ))}
              </nav>
              <a href="#cta-final" className="mt-6 block">
                <Button fullWidth className="py-3">
                  Experimentar
                </Button>
              </a>
            </div>
          )}
        </Container>
      </div>
    </header>
  );
};

export default Header;
