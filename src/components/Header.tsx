import React, { useEffect, useState } from "react";
import { Link as RouterLink, useLocation } from "react-router-dom";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import { Menu, X } from "lucide-react";

const Header: React.FC = () => {
  const [hasAnimated, setHasAnimated] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const t = setTimeout(() => setHasAnimated(true), 100);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isHome = location.pathname === "/";

  const linkCls = scrolled
    ? "text-neutral-800 hover:text-black"
    : "text-white/90 hover:text-white";

  const ctaCls = scrolled
    ? "bg-neutral-900 text-white hover:bg-black"
    : "bg-white/10 text-white ring-1 ring-white/30 hover:bg-white/20";

  const iconColor = scrolled ? "text-neutral-900" : "text-white";

  return (
    <header className="fixed top-4 inset-x-0 z-50 px-4 sm:px-6 md:px-6 w-full max-w-full">
      <div
        className={`rounded-full px-4 py-3 md:px-6 md:py-2 flex items-center justify-between border transition-all duration-700 ease-out
        ${hasAnimated ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}
        ${
          scrolled
            ? "bg-white/80 text-neutral-900 border-white/60 shadow-[0_6px_24px_rgba(0,0,0,0.12)] backdrop-blur-md"
            : "bg-transparent text-white border-white/15 backdrop-blur-[2px]"
        }`}
      >
        {/* Logo */}
        {isHome ? (
          <button
            aria-label="Voltar ao topo"
            onClick={() => scroll.scrollToTop({ duration: 500 })}
            className={`text-lg sm:text-xl font-semibold tracking-wide transition ${iconColor}`}
          >
            ECO
          </button>
        ) : (
          <RouterLink
            to="/"
            className={`text-lg sm:text-xl font-semibold tracking-wide transition ${iconColor}`}
          >
            ECO
          </RouterLink>
        )}

        {/* Menu Desktop */}
        <nav className="hidden md:flex gap-8 text-sm font-medium">
          <ScrollLink
            to="como-funciona"
            smooth
            duration={500}
            offset={-80}
            className={`cursor-pointer transition ${linkCls}`}
          >
            Características
          </ScrollLink>

          <ScrollLink
            to="para-quem"
            smooth
            duration={500}
            offset={-80}
            className={`cursor-pointer transition ${linkCls}`}
          >
            Boletim Informativo
          </ScrollLink>

          <ScrollLink
            to="feedback"
            smooth
            duration={500}
            offset={-80}
            className={`cursor-pointer transition ${linkCls}`}
          >
            Opinar
          </ScrollLink>
        </nav>

        {/* CTA Desktop */}
        <a
          href="https://ecofrontend888.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
          className={`hidden md:inline-block ml-4 rounded-full text-sm font-medium px-4 py-2 transition ${ctaCls}`}
        >
          Acesso Antecipado
        </a>

        {/* Menu Mobile (toggle) */}
        <button
          aria-label="Abrir menu"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className={`md:hidden p-2 ${iconColor}`}
        >
          {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Dropdown Mobile */}
      {isMenuOpen && (
        <div
          className={`mt-2 mx-4 md:hidden flex flex-col gap-4 rounded-2xl px-6 py-4 border shadow-lg backdrop-blur-md
            ${scrolled ? "bg-white/90 text-neutral-900 border-white/60" : "bg-black/80 text-white border-white/20"}`}
        >
          <ScrollLink
            to="como-funciona"
            smooth
            duration={500}
            offset={-80}
            onClick={() => setIsMenuOpen(false)}
            className="font-semibold cursor-pointer"
          >
            Características
          </ScrollLink>

          <ScrollLink
            to="para-quem"
            smooth
            duration={500}
            offset={-80}
            onClick={() => setIsMenuOpen(false)}
            className="font-semibold cursor-pointer"
          >
            Boletim informativo
          </ScrollLink>

          <ScrollLink
            to="feedback"
            smooth
            duration={500}
            offset={-80}
            onClick={() => setIsMenuOpen(false)}
            className="font-semibold cursor-pointer"
          >
            Opinar
          </ScrollLink>

          <a
            href="https://ecofrontend888.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsMenuOpen(false)}
            className={`w-fit rounded-full text-sm font-medium px-4 py-2 transition
              ${scrolled ? "bg-neutral-900 text-white hover:bg-black" : "bg-white/10 text-white ring-1 ring-white/30 hover:bg-white/20"}`}
          >
            Acesso antecipado
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;
