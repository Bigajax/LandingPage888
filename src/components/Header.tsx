import React, { useEffect, useState } from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [hasAnimated, setHasAnimated] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const timer = setTimeout(() => setHasAnimated(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const isHome = location.pathname === '/';

  return (
    <header className="fixed top-4 inset-x-0 z-50 px-4 sm:px-6 md:px-6 w-full max-w-full">
      <div
        className={`bg-black text-white rounded-full px-4 py-3 md:px-6 md:py-2 flex items-center justify-between shadow-md transition-all duration-700 ease-out ${
          hasAnimated ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}
      >
        {/* Logo */}
        {isHome ? (
          <button
            onClick={() => scroll.scrollToTop({ duration: 500 })}
            className="text-lg sm:text-xl font-semibold tracking-wide hover:opacity-80 transition"
          >
            ECO
          </button>
        ) : (
          <RouterLink
            to="/"
            className="text-lg sm:text-xl font-semibold tracking-wide hover:opacity-80 transition"
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
            className="hover:text-gray-300 transition cursor-pointer"
          >
            Características
          </ScrollLink>

          <ScrollLink
            to="para-quem"
            smooth
            duration={500}
            offset={-80}
            className="hover:text-gray-300 transition cursor-pointer"
          >
            Boletim Informativo
          </ScrollLink>

          <ScrollLink
            to="feedback"
            smooth
            duration={500}
            offset={-80}
            className="hover:text-gray-300 transition cursor-pointer"
          >
            Opinar
          </ScrollLink>
        </nav>

        {/* Botão Desktop */}
        <RouterLink
          to="/reflexao"
          className="hidden md:inline-block ml-4 bg-white text-black px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-200 transition"
        >
          Acesso Antecipado
        </RouterLink>

        {/* Menu Mobile */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-white p-2"
        >
          {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Dropdown Mobile */}
      {isMenuOpen && (
        <div className="bg-black rounded-2xl mt-2 px-6 py-4 text-white md:hidden flex flex-col gap-4 shadow-lg mx-4">
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
            Apoiar
          </ScrollLink>

          <RouterLink
            to="/reflexao"
            onClick={() => setIsMenuOpen(false)}
            className="bg-white text-black px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-200 transition w-fit"
          >
            Obtenha acesso antecipado
          </RouterLink>
        </div>
      )}
    </header>
  );
};

export default Header;
