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
        [content-visibility:auto] [contain-intrinsic-size:1px_760px]
      "
    >
      {/* BG / ORB */}
      <div aria-hidden className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="relative w-[88vw] max-w-[560px] aspect-square">
          <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle,rgba(115,91,255,0.10)_0%,rgba(115,91,255,0.04)_45%,transparent_72%)] blur-xl sm:blur-2xl" />
          <div className="absolute inset-0 opacity-20 motion-reduce:opacity-0">
            <Orb hoverIntensity={0.1} rotateOnHover={false} hue={265} forceHoverState={false} />
          </div>
        </div>
      </div>

      {/* CONTENT */}
      <div
        className={`
          relative z-10 mx-auto px-6 sm:px-8
          max-w-[640px] sm:max-w-[920px]
          flex flex-col items-center text-center
          pt-[calc(var(--nav-h,64px)+56px)]
          pb-24 sm:pb-28
          transition-all duration-500 ease-out
          ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"}
        `}
      >
        {/* Pílula — pode remover se quiser ainda mais clean */}
        <span className="inline-flex items-center px-4 py-1.5 rounded-full mb-6 text-xs sm:text-sm text-zinc-700 bg-white/70 border border-zinc-200 backdrop-blur-sm">
          Jornada de Autoconhecimento
        </span>

        {/* Título com mais ar abaixo */}
        <h1
          id="hero-title"
          className="
            text-balance
            text-[32px] leading-tight
            sm:text-[48px] sm:leading-[1.08] lg:text-6xl
            tracking-tight mb-6 sm:mb-8
          "
        >
          <span className="font-extrabold text-zinc-900">Eco,</span>{" "}
          <span className="font-medium text-zinc-900">seu diário inteligente de autoconhecimento.</span>
        </h1>

        {/* Subtítulo mais largo, com leading maior */}
        <p
          className="
            text-[17px] sm:text-[19px]
            leading-[1.95] sm:leading-[2.05]
            text-zinc-600
            max-w-[58ch] sm:max-w-[72ch]
            mb-12 sm:mb-14
          "
        >
          Escreva o que sente e receba reflexões personalizadas para ganhar clareza — com relatórios simples e visuais.
        </p>

        {/* Espaçador sutil para “quebrar” o bloco no mobile */}
        <div className="h-1 sm:h-2" aria-hidden />

        {/* CTAs com respiro maior */}
        <div className="w-full flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5 mb-10 sm:mb-12">
          <a
            href="https://ecofrontend888.vercel.app/login"
            aria-label="Quero experimentar agora"
            className="
              inline-flex w-full sm:w-auto items-center justify-center gap-2
              h-12 sm:h-12 px-7 sm:px-8 rounded-full font-semibold text-white
              bg-gradient-to-b from-[#7C5CFF] to-[#5B4BFF]
              shadow-[0_14px_28px_rgba(91,75,255,0.22)]
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
              h-12 sm:h-12 px-7 sm:px-8 rounded-full font-medium
              bg-white text-zinc-900 ring-1 ring-[#E6E9F6]
              hover:bg-[#F8FAFF] active:scale-[0.99] transition
            "
            aria-label="Ver em ação"
          >
            Ver em ação
            <ChevronRight size={18} className="transition-transform duration-200 group-hover:translate-x-0.5" />
          </a>
        </div>

        {/* Micro-confiança com margem maior inferior */}
        <p className="text-[12px] sm:text-[13px] text-zinc-500 mb-6 sm:mb-8">
          Beta gratuito · Teste em minutos
        </p>

        {/* Seta com respiro */}
        <a
          href="#como-funciona"
          onClick={handleGoToHowItWorks}
          className="group mt-1 inline-flex cursor-pointer select-none"
          aria-label="Ir para a próxima seção"
        >
          <ChevronDown className="h-5 w-5 text-zinc-400 group-hover:text-zinc-600 transition-colors" />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
