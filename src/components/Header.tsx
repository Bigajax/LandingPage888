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

  // transparente no topo; vidro leve ao rolar
  const containerState = scrolled
    ? "bg-white/80 border-white/60 backdrop-blur-xl shadow-[0_8px_24px_rgba(15,23,42,0.06)]"
    : "bg-transparent border-transparent backdrop-blur-0 shadow-none";

  const linkCls =
    "text-[14px] font-medium text-[#6B7280] transition hover:text-[color:var(--violet-600)]";

  const gradientCta =
    "inline-flex items-center justify-center gap-2 rounded-full px-5 py-2 text-sm font-semibold text-white " +
    "bg-[linear-gradient(120deg,var(--violet-600),var(--indigo-600))] shadow-[0_14px_34px_rgba(var(--violet-600-rgb),0.24)] " +
    "transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_20px_40px_rgba(var(--violet-600-rgb),0.28)] focus-visible:outline-none " +
    "focus-visible:ring-2 focus-visible:ring-[color:var(--violet-300)] focus-visible:ring-offset-2 focus-visible:ring-offset-white " +
    "active:translate-y-0";

  return (
    <header className="fixed inset-x-0 top-4 z-50 mx-auto w-full px-4 sm:px-6">
      <div
        className={`mx-auto flex max-w-6xl items-center justify-between rounded-full border px-4 py-3 md:px-6 md:py-3 transition-all duration-500 ease-out
          ${hasAnimated ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"} ${containerState}`}
      >
        {/* Logo */}
        {isHome ? (
          <button
            aria-label="Voltar ao topo"
            onClick={() => scroll.scrollToTop({ duration: 500 })}
            className="text-lg sm:text-xl font-semibold tracking-tight text-[#111827] transition"
          >
            ECO
          </button>
        ) : (
          <RouterLink
            to="/"
            className="text-lg sm:text-xl font-semibold tracking-tight text-[#111827] transition"
          >
            ECO
          </RouterLink>
        )}

        {/* Menu Desktop */}
        <nav className="hidden items-center gap-8 md:flex">
          <ScrollLink
            to="como-funciona"
            smooth
            duration={500}
            offset={-80}
            className={`cursor-pointer ${linkCls}`}
          >
            Características
          </ScrollLink>

        <ScrollLink
            to="para-quem"
            smooth
            duration={500}
            offset={-80}
            className={`cursor-pointer ${linkCls}`}
          >
            Boletim Informativo
          </ScrollLink>

          <ScrollLink
            to="feedback"
            smooth
            duration={500}
            offset={-80}
            className={`cursor-pointer ${linkCls}`}
          >
            Opinar
          </ScrollLink>
        </nav>

        {/* CTA Desktop (preto) */}
        <a
          href="https://ecofrontend888.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
          className={`hidden md:inline-flex ${gradientCta}`}
        >
          Acesso Antecipado
        </a>

        {/* Toggle Mobile */}
        <button
          aria-label="Abrir menu"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="rounded-full p-2 text-[color:var(--violet-500)] transition hover:text-[color:var(--violet-600)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--violet-300)] focus-visible:ring-offset-2 focus-visible:ring-offset-white md:hidden"
        >
          {isMenuOpen ? (
            <X size={20} className="text-[color:var(--violet-600)]" strokeWidth={1.8} />
          ) : (
            <Menu size={20} className="text-[color:var(--violet-600)]" strokeWidth={1.8} />
          )}
        </button>
      </div>

      {/* Dropdown Mobile */}
      {isMenuOpen && (
        <div className="mx-4 mt-3 flex flex-col gap-4 rounded-2xl border border-white/60 bg-white/90 px-6 py-5 text-[#111827] shadow-[0_16px_40px_rgba(15,23,42,0.08)] backdrop-blur-xl md:hidden">
          <ScrollLink
            to="como-funciona"
            smooth
            duration={500}
            offset={-80}
            onClick={() => setIsMenuOpen(false)}
            className="cursor-pointer text-[15px] font-medium text-[#6B7280] transition hover:text-[#111827]"
          >
            Características
          </ScrollLink>

          <ScrollLink
            to="para-quem"
            smooth
            duration={500}
            offset={-80}
            onClick={() => setIsMenuOpen(false)}
            className="cursor-pointer text-[15px] font-medium text-[#6B7280] transition hover:text-[#111827]"
          >
            Boletim informativo
          </ScrollLink>

          <ScrollLink
            to="feedback"
            smooth
            duration={500}
            offset={-80}
            onClick={() => setIsMenuOpen(false)}
            className="cursor-pointer text-[15px] font-medium text-[#6B7280] transition hover:text-[#111827]"
          >
            Opinar
          </ScrollLink>

          {/* CTA Mobile (preto) */}
          <a
            href="https://ecofrontend888.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsMenuOpen(false)}
            className={`${gradientCta} inline-flex w-fit`}
          >
            Acesso antecipado
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;
