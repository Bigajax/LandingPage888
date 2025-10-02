import React, { useCallback, useMemo } from "react";
import { ChevronDown, ChevronRight, PlayCircle } from "lucide-react";
import Orb from "../components/Orb";
import { useScrollReveal } from "../hooks/useScrollReveal";

const HeroSection: React.FC = () => {
  const { ref, isVisible } = useScrollReveal();

  const handleGoToHowItWorks = useCallback((e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const el = document.getElementById("como-funciona");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  const badges = useMemo(() => [
    { label: "Grátis para sempre", key: "beta" },
    { label: "Insights toda semana", key: "reports" },
    { label: "Tecnologia + empatia", key: "mentorship" }
  ], []);

  return (
    <section
      ref={ref}
      role="region"
      aria-labelledby="hero-title"
      itemScope
      itemType="https://schema.org/SoftwareApplication"
      className={`
        relative overflow-hidden bg-white
        min-h-[calc(100svh-var(--nav-h,64px))] md:min-h-[calc(100dvh-var(--nav-h,80px))]
        [content-visibility:auto] [contain-intrinsic-size:1px_800px]
      `}
    >
      {/* BG / ORB */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-[1]"
      >
        <div className="absolute -top-24 left-1/2 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-gradient-to-br from-purple-200 via-transparent to-indigo-200 opacity-50 blur-[80px]" />
        <div className="absolute inset-x-0 bottom-[-10%] h-[22rem] bg-gradient-to-t from-white/90 via-white/40 to-transparent" />
        <div className="absolute inset-0 flex items-center justify-center transform-gpu will-change-transform">
          <div className="relative w-[88vw] max-w-[560px] aspect-square">
            <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle,rgba(115,91,255,0.15)_0%,rgba(115,91,255,0.06)_45%,transparent_72%)] blur-xl" />
            <div className="absolute inset-0 opacity-0 animate-[fadeIn_0.8s_ease-out_0.3s_forwards] motion-reduce:opacity-25 sm:motion-reduce:opacity-40">
              <Orb 
                hoverIntensity={0.12} 
                rotateOnHover={false} 
                hue={265} 
                forceHoverState={false} 
              />
            </div>
          </div>
        </div>
      </div>

      {/* CONTEÚDO */}
      <div
        className={`
          relative z-10 mx-auto flex max-w-7xl flex-col items-center
          px-4 sm:px-6 lg:px-8 text-center
          pt-[calc(var(--nav-h,64px)+32px+env(safe-area-inset-top))]
          md:pt-[calc(var(--nav-h,80px)+88px)]
          pb-[calc(32px+env(safe-area-inset-bottom))]
          md:pb-32
          transition-all duration-500 ease-out
          ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}
          transform-gpu will-change-[opacity,transform]
        `}
      >
        {/* Pílula */}
        <span 
          className="glass inline-flex items-center gap-2 rounded-full px-5 py-2 text-xs font-medium uppercase tracking-[0.2em] text-gray-600"
          itemProp="applicationCategory"
        >
          Seu diário emocional
        </span>

        {/* Título */}
        <h1 
          id="hero-title" 
          itemProp="name"
          className="heading-xl mt-8 text-balance font-semibold text-gray-900"
        >
          Transforme sentimentos em clareza.
        </h1>

        {/* Subtítulo */}
        <p 
          className="subheading mt-6 max-w-2xl text-balance text-gray-600"
          itemProp="description"
        >
          Escreva livremente. Receba reflexões personalizadas. Descubra padrões que você não via sozinho.
        </p>

        {/* CTAs */}
        <div className="mt-10 flex w-full flex-col items-center justify-center gap-4 sm:mt-12 sm:flex-row sm:flex-wrap md:flex-nowrap md:gap-5">
          <a
            href="https://ecofrontend888.vercel.app/login"
            aria-label="Começar a escrever no Eco gratuitamente"
            className="inline-flex w-full items-center justify-center gap-2.5 rounded-full bg-gray-900 px-9 py-4 text-base font-semibold text-white shadow-lg transition-all duration-200 ease-out hover:bg-gray-800 hover:shadow-xl hover:scale-[1.01] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-900 focus-visible:ring-offset-2 focus-visible:ring-offset-white active:scale-[0.99] sm:w-auto"
          >
            <span className="hidden sm:inline">Começar agora — é grátis</span>
            <span className="sm:hidden">Começar grátis</span>
          </a>

          <a
            href="#como-funciona"
            onClick={handleGoToHowItWorks}
            className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-gray-50 px-9 py-4 text-base font-medium text-gray-700 transition-all duration-200 ease-out hover:bg-gray-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-300 focus-visible:ring-offset-2 focus-visible:ring-offset-white sm:w-auto"
            aria-label="Ver como o Eco funciona"
          >
            Ver como funciona
            <ChevronRight 
              size={18} 
              className="transition-transform duration-300 group-hover:translate-x-1 text-gray-500" 
              aria-hidden="true"
            />
          </a>
        </div>

        {/* Micro-confiança */}
        <div className="mt-12 md:mt-16 flex flex-wrap justify-center gap-4 text-sm font-medium text-gray-600 sm:text-base">
          {badges.map(({ label, key }) => (
            <span 
              key={key}
              className="inline-flex items-center gap-2 px-4 py-2"
              itemProp="featureList"
            >
              {label}
            </span>
          ))}
        </div>

        {/* Seta */}
        <a
          href="#como-funciona"
          onClick={handleGoToHowItWorks}
          className="group mt-12 md:mt-16 inline-flex cursor-pointer select-none rounded-full border border-transparent p-3 text-gray-500 transition-all duration-300 ease-out hover:text-indigo-600 hover:bg-indigo-50/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
          aria-label="Ir para a seção Como Funciona"
        >
          <ChevronDown 
            className="h-5 w-5 sm:h-6 sm:w-6 transition-transform duration-300 group-hover:translate-y-1" 
            aria-hidden="true"
          />
        </a>
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 0.25; }
        }
        @media (min-width: 640px) {
          @keyframes fadeIn {
            to { opacity: 0.4; }
          }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;