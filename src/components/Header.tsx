import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

import Button from "./Button";
import Container from "./Container";
import EcoBubbleOneEye from "./EcoBubbleOneEye";

const NAV_LINKS = [
  { label: "Benefícios", href: "#beneficios" },
  { label: "Como funciona", href: "#como-funciona" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "FAQ", href: "#faq" },
  { label: "Começar", href: "#comecar" },
];

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handler = () => setIsScrolled(window.scrollY > 10);
    handler();
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b border-[var(--line)] transition-colors duration-150 ${
        isScrolled ? "bg-white/90 backdrop-blur" : "bg-white/80 backdrop-blur"
      }`}
      role="banner"
    >
      <div className="py-3 sm:py-4">
        <Container className="flex items-center justify-between gap-4">
          <Link
            to="/"
            className="flex items-center gap-2 font-semibold tracking-[-0.02em] text-eco-text"
            aria-label="Eco, voltar ao início"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--line)]">
              <EcoBubbleOneEye size={20} />
            </span>
            <span className="text-lg sm:text-xl">ECO</span>
          </Link>

          <nav className="hidden items-center gap-8 text-sm text-eco-subtle lg:flex" aria-label="Navegação principal">
            {NAV_LINKS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="transition-colors duration-150 hover:text-eco-text focus-visible:text-eco-text"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <a href="#como-funciona" className="inline-flex">
              <Button variant="secondary" className="px-5 py-2.5" aria-label="Iniciar Tour">
                Iniciar Tour
              </Button>
            </a>
            <a href="#comecar" className="inline-flex">
              <Button className="px-5 py-2.5" aria-label="Experimentar agora">
                Experimentar agora
              </Button>
            </a>
          </div>

          <button
            type="button"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-[var(--line)] text-eco-subtle transition-colors duration-150 hover:text-eco-text lg:hidden"
            onClick={() => setIsOpen((open) => !open)}
            aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={isOpen}
          >
            {isOpen ? <X aria-hidden size={18} /> : <Menu aria-hidden size={18} />}
          </button>
        </Container>

        {isOpen && (
          <div className="mt-3 border-t border-[var(--line)] bg-white px-6 pb-6 pt-4 lg:hidden" role="dialog">
            <nav className="flex flex-col gap-3 text-base text-eco-subtle">
              {NAV_LINKS.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="rounded-full px-3 py-2 transition-colors duration-150 hover:text-eco-text"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </nav>
            <div className="mt-6 flex flex-col gap-3">
              <a href="#como-funciona" className="inline-flex" onClick={() => setIsOpen(false)}>
                <Button variant="secondary" fullWidth className="py-3" aria-label="Iniciar Tour">
                  Iniciar Tour
                </Button>
              </a>
              <a href="#comecar" className="inline-flex" onClick={() => setIsOpen(false)}>
                <Button fullWidth className="py-3" aria-label="Experimentar agora">
                  Experimentar agora
                </Button>
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
