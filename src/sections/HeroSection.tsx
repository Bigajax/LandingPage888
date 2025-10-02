// src/sections/HeroSection.tsx
import React from "react";
import { ChevronDown, ChevronRight, PlayCircle } from "lucide-react";
import Orb from "../components/Orb";
import { useScrollReveal } from "../hooks/useScrollReveal";

const HeroSection: React.FC = () => {
  const { ref, isVisible } = useScrollReveal();

  const handleGoToHowItWorks = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    document.getElementById("como-funciona")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section
      ref={ref}
      aria-labelledby="hero-title"
      className="
        relative overflow-hidden bg-white
        min-h-[calc(100svh-var(--nav-h,64px))]
        [content-visibility:auto] [contain-intrinsic-size:1px_720px]
      "
    >
      {/* BG / ORB */}
      <div aria-hidden className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="relative w-[86vw] max-w-[520px] aspect-square">
          <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle,rgba(115,91,255,0.12)_0%,rgba(115,91,255,0.05)_45%,transparent_72%)] blur-xl sm:blur-2xl" />
          <div className="absolute inset-0 opacity-20 motion-reduce:opacity-0">
            <Orb hoverIntensity={0.1} rotateOnHover={false} hue={265} forceHoverState={false} />
          </div>
        </div>
      </div>

      {/* CONTENT */}
      <div
        className={`
          relative z-10 mx-auto px-5 sm:px-6
          max-w-[520px] sm:max-w-[840px]
          flex flex-col items-center text-center
          pt-[calc(var(--nav-h,64px)+28px)]
          pb-14
          transition-all duration-500 ease-out
          ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"}
        `}
      >
        {/* Pílula (opcional — discreta) */}
        <span className="inline-flex items-center px-3.5 py-1 rounded-full mb-4 text-[11px] sm:text-xs text-zinc-700 bg-white/70 border border-zinc-200 backdrop-blur-sm">
          Jornada de Autoconhecimento
        </span>

        {/* Title */}
        <h1
          id="hero-title"
          className="
            text-balance
            text-[30px] leading-tight
            sm:text-[44px] sm:leading-[1.1] lg:text-6xl
            tracking-tight mb-3
          "
        >
          <span className="font-extrabold text-zinc-900">Eco,</span>{" "}
          <span className="font-medium text-zinc-900">seu diário inteligente de autoconhecimento.</span>
        </h1>

        {/* Subtitle — 1 frase só */}
        <p
          className="
            text-[16px] sm:text-[18px] leading-relaxed
            text-zinc-600 max-w-[44ch] sm:max-w-[60ch]
            mb-8
          "
        >
          Escreva o que sente e receba reflexões personalizadas para ganhar clareza — com relatórios simples e visuais.
        </p>

        {/* CTAs compactos */}
        <div className="w-full flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-6">
          <a
            href="https://ecofrontend888.vercel.app/login"
            aria-label="Quero experimentar agora"
            className="
              inline-flex w-full sm:w-auto items-center justify-center gap-2
              h-11 px-6 rounded-full font-semibold text-white
              bg-gradient-to-b from-[#7C5CFF] to-[#5B4BFF]
              shadow-[0_10px_22px_rgba(91,75,255,0.24)]
              hover:brightness-[1.06] active:scale-[0.99] transition
            "
          >
            <PlayCircle size={18} className="opacity-90" />
            Quero experimentar agora
          </a>

          <a
            href="#como-funciona"
            onClick={handleGoToHowItWorks}
            className="
              group inline-flex w-full sm:w-auto items-center justify-center gap-2
              h-11 px-6 rounded-full font-medium
              bg-white text-zinc-900 ring-1 ring-[#E6E9F6]
              hover:bg-[#F8FAFF] active:scale-[0.99] transition
            "
            aria-label="Ver em ação"
          >
            Ver em ação
            <ChevronRight size={18} className="transition-transform duration-200 group-hover:translate-x-0.5" />
          </a>
        </div>

        {/* Micro-confiança bem curta */}
        <p className="text-[12px] text-zinc-500">Beta gratuito · Teste em minutos</p>

        {/* Seta */}
        <a
          href="#como-funciona"
          onClick={handleGoToHowItWorks}
          className="group mt-5 inline-flex cursor-pointer select-none"
          aria-label="Ir para a próxima seção"
        >
          <ChevronDown className="h-5 w-5 text-zinc-400 group-hover:text-zinc-600 transition-colors" />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
