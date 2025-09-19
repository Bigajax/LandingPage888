import React from "react";
import { Link } from "react-router-dom";

const CallToActionEco: React.FC = () => {
  return (
    <section
      id="convite"
      className="
        relative overflow-hidden
        w-full py-16 sm:py-20 px-6
        bg-white flex flex-col items-center text-center
      "
    >
      {/* Halos de fundo bem sutis */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[70vw] h-[70vw] max-w-[900px] rounded-full blur-[120px] opacity-40 bg-[radial-gradient(circle,#E9E8FF_0%,transparent_65%)]" />
        <div className="absolute -bottom-28 right-[-10%] w-[50vw] h-[50vw] rounded-full blur-[120px] opacity-30 bg-[radial-gradient(circle,#E6F0FF_0%,transparent_70%)]" />
      </div>

      {/* Título + subtítulo */}
      <div className="relative max-w-3xl">
        <h2 className="text-[28px] sm:text-[36px] md:text-[44px] font-semibold leading-tight tracking-tight text-[#0F111A]">
          Descubra a{" "}
          <span className="bg-[linear-gradient(90deg,#7C5CFF,#5B4BFF)] bg-clip-text text-transparent">
            Eco
          </span>{" "}
          antes de todo mundo
        </h2>

        <p className="mt-4 text-[15px] sm:text-[17px] text-[#565A66]">
          Acesse gratuitamente a versão beta — uma jornada de autoconhecimento
          com IA, feita para quem quer se escutar com profundidade.
        </p>
      </div>

      {/* Seta discreta */}
      <div className="relative mt-6 mb-2">
        <svg
          className="w-5 h-5 text-[#9AA0B1] mx-auto"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
        >
          <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>

      {/* CTA principal */}
      <Link
        to="/reflexao"
        aria-label="Entrar no beta da Eco"
        className="
          relative inline-flex items-center justify-center
          h-12 px-6 rounded-full font-semibold text-white
          bg-gradient-to-b from-[#7C5CFF] to-[#5B4BFF]
          shadow-[0_14px_32px_rgba(91,75,255,0.34)]
          hover:brightness-[1.08] active:scale-[0.99]
          focus:outline-none focus-visible:ring-2 focus-visible:ring-[#7C5CFF]/30
          transition
        "
      >
        Junte-se ao Beta
        {/* brilho de topo (gloss) */}
        <span className="pointer-events-none absolute inset-[1px] rounded-full bg-[linear-gradient(180deg,rgba(255,255,255,0.35),rgba(255,255,255,0))]" />
      </Link>

      {/* Micro-confiança */}
      <p className="relative mt-3 text-[12.5px] sm:text-[13px] text-[#7B7F8C]">
        Beta gratuito · 7 min para testar · Vagas limitadas
      </p>
    </section>
  );
};

export default CallToActionEco;
