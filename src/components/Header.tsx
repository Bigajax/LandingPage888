import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

import Button from "./Button";
import Container from "./Container";
import EcoBubbleOneEye from "./EcoBubbleOneEye";

const NAV_LINKS = [
  { label: "Benefícios", href: "#beneficios" },
  { label: "Como funciona", href: "#como-funciona" },
  { label: "Filosofia", href: "#filosofia" },
  { label: "FAQ", href: "#faq" },
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
    ? "bg-white/60 backdrop-blur-lg shadow-eco-soft border border-eco-border/40"
    : "bg-white/50 backdrop-blur border border-transparent";

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
                className="flex items-center gap-2 font-light tracking-tight text-eco-text transition-all duration-300 hover:opacity-80"
                aria-label="Eco, voltar ao início"
              >
                <EcoBubbleOneEye size={26} />
                <span className="text-lg font-light sm:text-xl">ECO</span>
              </Link>
            </div>

            <nav className="hidden items-center gap-8 text-sm font-normal text-eco-textSoft md:flex" aria-label="Navegação principal">
              {NAV_LINKS.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="transition-all duration-300 hover:text-eco-text focus-visible:text-eco-text"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            <div className="hidden md:flex">
              <a href="#comecar" className="inline-flex">
                <Button
                  aria-label="Experimentar agora"
                  className="bg-eco-babyBlue px-5 py-2.5 text-white transition-all duration-300 hover:scale-102 hover:bg-eco-babySoft hover:shadow-eco-soft"
                >
                  Experimentar agora
                </Button>
              </a>
            </div>

            <button
              type="button"
              className="flex h-11 w-11 items-center justify-center rounded-2xl border border-eco-border/60 text-eco-textSoft transition-all duration-300 hover:text-eco-text md:hidden"
              onClick={() => setIsOpen((open) => !open)}
              aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
              aria-expanded={isOpen}
            >
              {isOpen ? <X aria-hidden size={20} /> : <Menu aria-hidden size={20} />}
            </button>
          </div>

          {isOpen && (
            <div className="mt-3 rounded-3xl border border-eco-border/60 bg-white/95 p-6 shadow-eco-soft md:hidden" role="dialog">
              <nav className="space-y-4 text-base text-eco-textSoft">
                {NAV_LINKS.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="block rounded-xl px-2 py-2 transition-all duration-300 hover:text-eco-text"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </a>
                ))}
              </nav>
              <a href="#comecar" className="mt-6 block">
                <Button
                  fullWidth
                  className="bg-eco-babyBlue py-3 text-white transition-all duration-300 hover:bg-eco-babySoft hover:shadow-eco-soft"
                >
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
