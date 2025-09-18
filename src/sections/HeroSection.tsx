import React from "react";
import { Link as ScrollLink } from "react-scroll";
import { ChevronDown } from "lucide-react";
import Button from "../components/Button";
import { useScrollReveal } from "../hooks/useScrollReveal";
import Orb from "../components/Orb";

const HeroSection: React.FC = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section
      ref={ref}
      // Mobile: sem min-height. Desktop: ocupa viewport - header.
      className="
        relative bg-white overflow-hidden
        sm:min-h-[calc(100svh-var(--nav-h,80px))]
      "
      aria-labelledby="hero-title"
    >
      {/* Halo / Orb: só do sm pra cima */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 hidden sm:flex items-center justify-center"
      >
        <div className="relative w-[90vw] max-w-[560px] aspect-square">
          <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle,_rgba(115,91,255,0.14)_0%,_rgba(115,91,255,0.05)_45%,_transparent_70%)] blur-3xl" />
          <div className="absolute inset-0 opacity-20">
            <Orb hoverIntensity={0.2} rotateOnHover={false} hue={265} forceHoverState={false} />
          </div>
        </div>
      </div>

      {/* Conteúdo */}
      <div
        className={`
          relative z-10 mx-auto px-5 sm:px-6
          max-w-[500px] sm:max-w-[760px]
          flex flex-col items-center text-center
          pb-8 sm:pb-14
          pt-[calc(var(--nav-h,64px)+16px)] sm:pt-[calc(var(--nav-h,80px)+24px)]
          transition-all duration-500 ease-out
          ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"}
        `}
      >
        <h1
          id="hero-title"
          className="text-[30px] leading-[1.2] sm:text-5xl sm:leading-tight lg:text-6xl font-extrabold text-zinc-900 tracking-tight mb-4 sm:mb-5"
        >
          Conheça-se melhor com a Eco
        </h1>

        <p className="text-[15px] sm:text-lg text-zinc-600 max-w-[640px] mb-8 sm:mb-10">
          IA reflexiva que analisa suas emoções e mostra padrões para você evoluir.
        </p>

        <div className="w-full flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5 mb-5 sm:mb-8">
          <a
            href="https://ecofrontend888.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto"
          >
            <Button className="w-full sm:w-auto h-12 px-6 rounded-full font-semibold text-white shadow-[0_8px_20px_rgba(91,75,255,0.35)] bg-[linear-gradient(180deg,#7C5CFF_0%,#5B4BFF_100%)] hover:brightness-110 active:scale-[0.99]">
              Entrar no Beta
            </Button>
          </a>

          <ScrollLink to="como-funciona" smooth duration={600} offset={-80} className="w-full sm:w-auto">
            <Button className="w-full sm:w-auto h-12 px-6 rounded-full font-semibold border border-zinc-200 bg-white text-zinc-900 shadow-[0_4px_10px_rgba(0,0,0,0.04)] hover:bg-zinc-50 active:scale-[0.99]">
              Ver como funciona
            </Button>
          </ScrollLink>
        </div>

        <p className="text-[12px] sm:text-sm text-zinc-500 tracking-wide">
          Beta gratuito · 7 min para testar · Vagas limitadas
        </p>

        {/* Seta: só no desktop para não criar “buraco” no mobile */}
        <ScrollLink
          to="como-funciona"
          smooth
          duration={600}
          offset={-80}
          className="group mt-8 inline-flex cursor-pointer select-none hidden sm:inline-flex"
          aria-label="Ir para a próxima seção"
        >
          <ChevronDown className="h-6 w-6 text-zinc-400 group-hover:text-zinc-600 transition-colors" />
        </ScrollLink>
      </div>
    </section>
  );
};

export default HeroSection;
