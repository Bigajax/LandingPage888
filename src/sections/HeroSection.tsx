import React from "react";
import { ChevronDown, ChevronRight, PlayCircle } from "lucide-react";
import Orb from "../components/Orb";
import { useScrollReveal } from "../hooks/useScrollReveal";

const HeroSection: React.FC = () => {
  const { ref, isVisible } = useScrollReveal();

  const handleGoToHowItWorks = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const el = document.getElementById("como-funciona");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section
      ref={ref}
      aria-labelledby="hero-title"
      className={`
        relative overflow-hidden bg-white
        min-h-[calc(100svh-var(--nav-h,64px))] md:min-h-[calc(100dvh-var(--nav-h,80px))]
        [content-visibility:auto] [contain-intrinsic-size:1px_800px]
      `}
    >
      {/* BG / ORB */}
      <div
        aria-hidden
        className="
          pointer-events-none absolute inset-0 flex items-center justify-center
          transform-gpu will-change-transform
        "
      >
        <div className="relative w-[88vw] max-w-[560px] aspect-square">
          {/* blur mais leve no mobile */}
          <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle,rgba(115,91,255,0.14)_0%,rgba(115,91,255,0.06)_45%,transparent_72%)] blur-xl sm:blur-2xl" />
          <div className="absolute inset-0 opacity-20 sm:opacity-35 motion-reduce:opacity-0">
            <Orb hoverIntensity={0.12} rotateOnHover={false} hue={265} forceHoverState={false} />
          </div>
        </div>
      </div>

      {/* CONTEÚDO */}
      <div
        className={`
          relative z-10 mx-auto px-5 sm:px-6
          max-w-[560px] sm:max-w-[880px]
          flex flex-col items-center text-center
          pt-[calc(var(--nav-h,64px)+18px+env(safe-area-inset-top))]
          md:pt-[calc(var(--nav-h,80px)+72px)]
          pb-[calc(12px+env(safe-area-inset-bottom))] md:pb-20
          transition-all duration-500 ease-out
          ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"}
          transform-gpu will-change-[opacity,transform]
        `}
      >
        {/* Pílula */}
        <span className="inline-flex items-center px-4 py-1.5 rounded-full mb-4 sm:mb-5 text-[12px] sm:text-sm font-medium text-zinc-700 bg-white/80 border border-zinc-200 backdrop-blur-sm shadow-sm">
          Jornada de Autoconhecimento
        </span>

        {/* Título – mais respiro no mobile */}
        <h1
          id="hero-title"
          className="
            text-balance
            text-[30px] leading-[1.28]  /* antes: 28px / 1.16 */
            sm:text-6xl sm:leading-tight lg:text-7xl
            tracking-tight mb-3 sm:mb-6
          "
        >
          <span className="font-extrabold text-zinc-900">Eco.</span>{" "}
          <span className="font-medium text-zinc-700">Sua jornada começa aqui.</span>
        </h1>

        {/* Subtítulo – line-height maior e espaçamento extra */}
        <p className="
          text-[16px] leading-[1.7] sm:text-xl sm:leading-relaxed
          text-zinc-600 max-w-[680px] mb-9 sm:mb-10
        ">
          Escreva, reflita e descubra padrões — simples, guiado e no seu ritmo.
        </p>

        {/* CTAs */}
        <div className="w-full flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5 mb-6 sm:mb-9">
          <a
            href="https://ecofrontend888.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Começar minha jornada"
            className="
              relative inline-flex w-full sm:w-auto items-center justify-center gap-2
              h-12 px-6 rounded-full font-semibold text-white
              bg-gradient-to-b from-[#7C5CFF] to-[#5B4BFF]
              shadow-[0_12px_24px_rgba(91,75,255,0.26)]
              hover:brightness-[1.07] active:scale-[0.99] transition
              transform-gpu
            "
          >
            <PlayCircle size={18} className="opacity-90" />
            Começar minha jornada
          </a>

          <a
            href="#como-funciona"
            onClick={handleGoToHowItWorks}
            className="
              group relative inline-flex w-full sm:w-auto items-center justify-center gap-2
              h-12 px-6 rounded-full font-semibold
              bg-white text-zinc-900
              ring-1 ring-[#E6E9F6]
              shadow-sm hover:bg-[#F8FAFF] active:scale-[0.99] transition
              cursor-pointer
            "
            aria-label="Ver como funciona"
          >
            Ver como funciona
            <ChevronRight size={18} className="transition-transform duration-200 group-hover:translate-x-0.5" />
          </a>
        </div>

        {/* Micro-confiança */}
        <p className="text-[12px] sm:text-sm text-zinc-500 tracking-wide">
          Beta gratuito · Teste em minutos · Vagas limitadas
        </p>

        {/* Seta */}
        <a
          href="#como-funciona"
          onClick={handleGoToHowItWorks}
          className="group mt-5 sm:mt-8 inline-flex cursor-pointer select-none"
          aria-label="Ir para a próxima seção"
        >
          <ChevronDown className="h-5 w-5 sm:h-6 sm:w-6 text-zinc-400 group-hover:text-zinc-600 transition-colors" />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
