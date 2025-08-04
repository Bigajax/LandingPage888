import React from 'react';
import { Link } from 'react-router-dom';

const CallToActionEco = () => {
  return (
    <section className="w-full py-20 px-5 sm:px-8 bg-white flex flex-col items-center justify-center text-center">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-[#0F111A] mb-6 leading-tight">
        Descubra a <span className="text-[#6C4CFF]">Eco</span> Antes de Todo Mundo
      </h2>

      <p className="text-base sm:text-lg md:text-xl text-gray-800 font-medium max-w-xl mb-6">
        Acesse gratuitamente a versão beta — uma jornada de autoconhecimento com IA, feita para quem quer se escutar com profundidade.
      </p>

      {/* Seta suave */}
      <div className="mb-5 opacity-80">
        <svg
          className="w-6 h-6 text-[#275C7A] mx-auto animate-bounce"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.8}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>

      <Link
        to="/reflexao"
        className="px-8 sm:px-10 py-3.5 sm:py-4 bg-gradient-to-r from-[#fbdada] via-[#f5e9da] to-[#8ee2d2] text-[#0F111A] font-semibold rounded-2xl shadow hover:scale-105 transition-transform duration-300"
      >
        Junte-se ao Beta
      </Link>
    </section>
  );
};

export default CallToActionEco;
