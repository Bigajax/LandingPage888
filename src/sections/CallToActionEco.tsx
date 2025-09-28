import React from "react";
import { Link } from "react-router-dom";

const CallToActionEco: React.FC = () => {
  return (
    <section
      id="convite"
      className="
        relative overflow-hidden
        w-full py-16 sm:py-20 px-5 sm:px-8 md:px-12
        flex flex-col items-center text-center
        mx-auto max-w-5xl
        rounded-[32px] border border-white/60
        bg-[radial-gradient(circle_at_top,#F4EFFF_0%,#FFFFFF_48%,#EFF6FF_100%)]
        shadow-[0_32px_80px_rgba(124,92,255,0.16)]
      "
    >
      {/* Halos de fundo bem sutis */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[75vw] h-[75vw] max-w-[960px] rounded-full blur-[140px] opacity-50 bg-[radial-gradient(circle,#E4D7FF_0%,transparent_65%)]" />
        <div className="absolute -bottom-32 right-[-12%] w-[55vw] h-[55vw] rounded-full blur-[140px] opacity-40 bg-[radial-gradient(circle,#DFF1FF_0%,transparent_70%)]" />
      </div>

      {/* Título + subtítulo */}
      <div className="relative max-w-3xl md:max-w-2xl">
        <h2 className="heading-lg font-semibold text-[#0A0C18]">
          Descubra a{" "}
          <span className="bg-[linear-gradient(90deg,#7C5CFF,#5B4BFF)] bg-clip-text text-transparent">
            Eco
          </span>{" "}
          antes de todo mundo
        </h2>

        <p className="mt-4 subheading text-[#505467]">
          Acesse gratuitamente a versão beta — uma jornada de autoconhecimento
          com IA, feita para quem quer se escutar com profundidade.
        </p>
      </div>

      {/* Seta discreta */}
      <div className="relative mt-6 mb-2">
        <svg
          className="w-5 h-5 text-[#8A8FA6] mx-auto"
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
      <p className="relative mt-3 text-[12.5px] sm:text-[13px] text-[#6E7284]">
        Beta gratuito · 7 min para testar · Vagas limitadas
      </p>
    </section>
  );
};

export default CallToActionEco;
