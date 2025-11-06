import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import EcoBubbleOneEye from "./EcoBubbleOneEye";

const NAV_LINKS = [
  { label: "Benefícios", href: "#beneficios" },
  { label: "Como funciona", href: "#como-funciona" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "FAQ", href: "#faq" },
];

const SoftHeader: React.FC = () => {
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
    ? "glass border-eco-gold/30 shadow-eco-glass"
    : "bg-eco-glass border-transparent backdrop-blur-md";

  return (
    <header className="fixed inset-x-0 top-0 z-50" role="banner">
      <div className="py-4">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div
            className={`flex items-center justify-between rounded-pill px-5 py-3.5 transition-all duration-300 ease-calm border ${headerBg}`}
          >
            {/* Logo */}
            <div className="flex items-center gap-3">
              <Link
                to="/"
                className="flex items-center gap-2.5 font-medium tracking-tight text-eco-ink transition-colors duration-300 hover:text-eco-clay focus-eco"
                aria-label="Eco, voltar ao início"
              >
                <EcoBubbleOneEye size={32} />
                <span className="text-lg sm:text-xl font-display font-semibold">ECO</span>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav
              className="hidden items-center gap-8 text-sm font-medium text-eco-ink-soft md:flex"
              aria-label="Navegação principal"
            >
              {NAV_LINKS.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="transition-all duration-300 ease-calm hover:text-eco-clay hover:-translate-y-0.5 focus-eco"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            {/* CTA Button */}
            <div className="hidden md:flex">
              <a href="#comecar" className="inline-flex focus-eco">
                <button
                  className="btn-baby-blue px-6 py-2.5 rounded-pill text-white font-medium text-sm shadow-eco-soft focus-eco"
                  aria-label="Experimentar agora"
                >
                  Experimentar agora
                </button>
              </a>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              type="button"
              className="flex h-11 w-11 items-center justify-center rounded-2xl border border-eco-gold/30 text-eco-ink-soft transition-all duration-300 hover:text-eco-clay hover:bg-eco-bg-subtle md:hidden focus-eco"
              onClick={() => setIsOpen((open) => !open)}
              aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
              aria-expanded={isOpen}
            >
              {isOpen ? <X aria-hidden size={20} /> : <Menu aria-hidden size={20} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isOpen && (
            <div
              className="mt-3 rounded-3xl border border-eco-gold/30 glass p-6 shadow-eco-glass md:hidden fade-in-up"
              role="dialog"
            >
              <nav className="space-y-3 text-base text-eco-ink-soft">
                {NAV_LINKS.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="block rounded-xl px-3 py-2.5 transition-all duration-300 hover:text-eco-clay hover:bg-eco-bg-subtle focus-eco"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </a>
                ))}
              </nav>
              <a href="#comecar" className="mt-6 block">
                <button className="w-full btn-baby-blue px-6 py-3.5 rounded-pill text-white font-medium shadow-eco-soft focus-eco">
                  Experimentar agora
                </button>
              </a>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default SoftHeader;
