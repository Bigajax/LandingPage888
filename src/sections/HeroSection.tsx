import React from "react";
import { Link as ScrollLink } from "react-scroll";
import { ChevronDown } from "lucide-react";
import Orb from "../components/Orb";
import Button from "../components/Button";
import { useScrollReveal } from "../hooks/useScrollReveal";

const HeroSection: React.FC = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section
      ref={ref}
      aria-labelledby="hero-title"
      className="
        relative bg-white overflow-hidden
        /* Desktop ocupa viewport menos o header; mobile sem min-height pra não sobrar buraco */
        sm:min-h-[calc(100svh-var(--nav-h,80px))]
      "
    >
      {/* Halo só em ≥ sm para não poluir o mobile */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 hidden sm:flex items-center justify-center"
      >
        <div className="relative w-[92vw] max-w-[600px] aspect-square">
          <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle,_rgba(115,91,255,0.16)_0%,_rgba(115,91,255,0.06)_45%,_transparent_70%)] blur-3xl" />
          <div className="absolute inset-0 opacity-20">
            <Orb hoverIntensity={0.2} rotateOnHover={false} hue={265} forceHoverState={false} />
          </div>
        </div>
      </div>

      {/* Conteúdo com respiro e safe-areas */}
      <div
        className={`
          relative z-10 mx-auto px-5 sm:px-6
          max-w-[560px] sm:max-w-[880px]
          flex flex-col items-center text-center
          /* compensa header fixo + safe area superior */
          pt-[calc(var(--nav-h,64px)+28px+env(safe-area-inset-top))]
          sm:pt-[calc(var(--nav-h,80px)+96px)]
          /* respiro inferior + safe area inferior (Instagram/iOS) */
          pb-[calc(18px+env(safe-area-inset-bottom))]
          sm:pb-24
          transition-all duration-500 ease-out
          ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"}
        `}
      >
        {/* Pílula */}
        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-5 sm:mb-6 text-[12px] sm:text-sm font-medium text-zinc-700 bg-white/80 border border-zinc-200 backdrop-blur-sm shadow-[0_1px_0_rgba(255,255,255,0.6)_inset,0_6px_18px_rgba(0,0,0,0.06)]">
          #EcoIAdeAutoconhecimento
        </span>

        {/* Título (com balance para quebra bonita) */}
        <h1
          id="hero-title"
          className="
            text-balance
            text-[32px] leading-[1.18]
            sm:text-6xl sm:leading-tight lg:text-7xl
            font-extrabold text-zinc-900 tracking-tight
            mb-5 sm:mb-6
          "
        >
          Conheça-se melhor com a Eco
        </h1>

        {/* Subtítulo */}
        <p className="text-base sm:text-xl text-zinc-600 max-w-[720px] mb-9 sm:mb-12">
          IA reflexiva que analisa suas emoções e mostra padrões para você evoluir.
        </p>

        {/* CTAs */}
        <div className="w-full flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5 mb-6 sm:mb-10">
          <a
            href="https://ecofrontend888.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto"
          >
            <Button className="w-full sm:w-auto h-12 px-6 rounded-full font-semibold text-white shadow-[0_12px_28px_rgba(91,75,255,0.38)] bg-[linear-gradient(180deg,#7C5CFF_0%,#5B4BFF_100%)] hover:brightness-110 active:scale-[0.99]">
              Entrar no Beta
            </Button>
          </a>

          <ScrollLink to="como-funciona" smooth duration={600} offset={-80} className="w-full sm:w-auto">
            <Button className="w-full sm:w-auto h-12 px-6 rounded-full font-semibold border border-zinc-200 bg-white text-zinc-900 shadow-[0_6px_16px_rgba(0,0,0,0.06)] hover:bg-zinc-50 active:scale-[0.99]">
              Ver como funciona
            </Button>
          </ScrollLink>
        </div>

        {/* Micro-confiança */}
        <p className="text-[12px] sm:text-sm text-zinc-500 tracking-wide">
          Beta gratuito · 7 min para testar · Vagas limitadas
        </p>

        {/* Seta – margem menor no mobile para não criar buraco */}
        <ScrollLink
          to="como-funciona"
          smooth
          duration={600}
          offset={-80}
          className="group mt-5 sm:mt-10 inline-flex cursor-pointer select-none"
          aria-label="Ir para a próxima seção"
        >
          <ChevronDown className="h-5 w-5 sm:h-6 sm:w-6 text-zinc-400 group-hover:text-zinc-600 transition-colors" />
        </ScrollLink>
      </div>
    </section>
  );
};

export default HeroSection;
