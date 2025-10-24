import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

import Button from "./Button";
import Container from "./Container";
import EcoBubbleOneEye from "./EcoBubbleOneEye";

const NAV_LINKS = [
  { label: "Benefícios", href: "#beneficios" },
  { label: "Como funciona", href: "#como-funciona" },
  { label: "Pensadores", href: "#pensadores" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "FAQ", href: "#faq" },
  { label: "Começar", href: "#comecar" },
];

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handler = () => setIsScrolled(window.scrollY > 24);
    handler();
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const headerBg = isScrolled
    ? "bg-white/85 backdrop-blur-lg shadow-[0_20px_40px_-28px_rgba(17,24,39,0.25)] border border-surface-muted/60"
    : "bg-white/60 backdrop-blur-md border border-transparent";

  return (
    <header className="fixed inset-x-0 top-0 z-50" role="banner">
      <div className="py-4">
        <Container className="relative">
          <div
            className={`flex items-center justify-between rounded-3xl px-4 py-3 transition-[background,box-shadow,border] duration-200 ease-subtle sm:px-6 ${headerBg}`}
          >
            <div className="flex items-center gap-3">
              <Link
                to="/"
                className="flex items-center gap-2 font-semibold tracking-tight text-ink-base"
                aria-label="Eco, voltar ao início"
              >
                <EcoBubbleOneEye size={28} />
                <span className="text-lg sm:text-xl">ECO</span>
              </Link>
            </div>

            <nav className="hidden items-center gap-8 text-sm font-medium text-ink-soft md:flex" aria-label="Navegação principal">
              {NAV_LINKS.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="transition-colors duration-150 hover:text-ink-base focus-visible:text-ink-base"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            <div className="hidden md:flex">
              <a href="#comecar" className="inline-flex">
                <Button aria-label="Experimentar agora" className="px-5 py-2.5">
                  Experimentar agora
                </Button>
              </a>
            </div>

            <button
              type="button"
              className="flex h-11 w-11 items-center justify-center rounded-2xl border border-surface-muted/60 text-ink-soft transition-colors duration-150 hover:text-ink-base md:hidden"
              onClick={() => setIsOpen((open) => !open)}
              aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
              aria-expanded={isOpen}
            >
              {isOpen ? <X aria-hidden size={20} /> : <Menu aria-hidden size={20} />}
            </button>
          </div>

          {isOpen && (
            <div className="mt-3 rounded-3xl border border-surface-muted/60 bg-white/95 p-6 shadow-soft md:hidden" role="dialog">
              <nav className="space-y-4 text-base text-ink-soft">
                {NAV_LINKS.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="block rounded-xl px-2 py-2 transition-colors duration-150 hover:text-ink-base"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </a>
                ))}
              </nav>
              <a href="#comecar" className="mt-6 block">
                <Button fullWidth className="py-3">
                  Experimentar agora
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
