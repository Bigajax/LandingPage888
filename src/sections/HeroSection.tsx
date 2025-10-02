import React, { useCallback, useMemo } from "react";
import { ChevronDown, ChevronRight, ArrowRight } from "lucide-react";
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
        relative overflow-hidden
        min-h-[calc(100svh-var(--nav-h,64px))] md:min-h-[calc(100dvh-var(--nav-h,80px))]
        bg-gradient-to-b from-gray-50 via-white to-gray-50
        [content-visibility:auto] [contain-intrinsic-size:1px_800px]
      `}
    >
      {/* BG GRADIENT */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-[1]"
      >
        <div className="absolute top-0 left-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/4 rounded-full bg-gradient-to-br from-indigo-100 via-purple-50 to-transparent opacity-60 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-[400px] w-[400px] translate-x-1/4 translate-y-1/4 rounded-full bg-gradient-to-tl from-blue-100 via-indigo-50 to-transparent opacity-40 blur-3xl" />
        
        <div className="absolute inset-0 flex items-center justify-center transform-gpu will-change-transform">
          <div className="relative w-[88vw] max-w-[560px] aspect-square">
            <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle,rgba(139,92,246,0.08)_0%,rgba(99,102,241,0.04)_45%,transparent_72%)] blur-2xl" />
            <div className="absolute inset-0 opacity-0 animate-[fadeIn_1s_ease-out_0.4s_forwards] motion-reduce:opacity-20 sm:motion-reduce:opacity-30">
              <Orb 
                hoverIntensity={0.15} 
                rotateOnHover={true} 
                hue={260} 
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
          pt-[calc(var(--nav-h,64px)+40px+env(safe-area-inset-top))]
          md:pt-[calc(var(--nav-h,80px)+96px)]
          pb-[calc(40px+env(safe-area-inset-bottom))]
          md:pb-40
          transition-all duration-700 ease-out
          ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
          transform-gpu will-change-[opacity,transform]
        `}
      >
        {/* Pílula */}
        <div 
          className="backdrop-blur-xl bg-white/40 border border-white/60 shadow-[0_8px_32px_rgba(0,0,0,0.06)] inline-flex items-center gap-2 rounded-full px-6 py-2.5 text-xs font-medium tracking-wide text-gray-700"
          itemProp="applicationCategory"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 animate-pulse"></span>
          Seu diário emocional
        </div>

        {/* Título */}
        <h1 
          id="hero-title" 
          itemProp="name"
          className="heading-xl mt-10 text-balance font-bold text-gray-900 tracking-tight"
          style={{
            fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
            lineHeight: '1.1',
            letterSpacing: '-0.02em'
          }}
        >
          Transforme sentimentos<br />em clareza.
        </h1>

        {/* Subtítulo */}
        <p 
          className="subheading mt-8 max-w-2xl text-balance text-gray-600 text-lg md:text-xl leading-relaxed"
          itemProp="description"
        >
          Escreva livremente. Receba reflexões personalizadas.<br className="hidden sm:inline" />
          Descubra padrões que você não via sozinho.
        </p>

        {/* CTAs */}
        <div className="mt-12 flex w-full flex-col items-center justify-center gap-4 sm:flex-row sm:flex-wrap md:flex-nowrap">
          <a
            href="https://ecofrontend888.vercel.app/login"
            aria-label="Começar a escrever no Eco gratuitamente"
            className="group inline-flex w-full items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-indigo-600 to-purple-600 px-8 py-4 text-base font-semibold text-white shadow-[0_4px_24px_rgba(99,102,241,0.3),0_16px_48px_rgba(139,92,246,0.15)] transition-all duration-300 ease-out hover:shadow-[0_8px_32px_rgba(99,102,241,0.4),0_20px_56px_rgba(139,92,246,0.2)] hover:scale-[1.02] hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white active:scale-[0.98] sm:w-auto"
          >
            <span>Começar agora — é grátis</span>
            <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
          </a>

          <a
            href="#como-funciona"
            onClick={handleGoToHowItWorks}
            className="group inline-flex w-full items-center justify-center gap-2.5 rounded-2xl backdrop-blur-xl bg-white/50 border border-white/80 px-8 py-4 text-base font-medium text-gray-700 shadow-[0_4px_16px_rgba(0,0,0,0.06)] transition-all duration-300 ease-out hover:bg-white/70 hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)] hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-300 focus-visible:ring-offset-2 focus-visible:ring-offset-white sm:w-auto"
            aria-label="Ver como o Eco funciona"
          >
            <span>Ver como funciona</span>
            <ChevronRight 
              size={18} 
              className="transition-transform duration-300 group-hover:translate-x-1 text-gray-500" 
              aria-hidden="true"
            />
          </a>
        </div>

        {/* Badges Glassmorphism */}
        <div className="mt-16 md:mt-20 flex flex-wrap justify-center gap-3 text-sm font-medium">
          {badges.map(({ label, key }) => (
            <span 
              key={key}
              className="backdrop-blur-md bg-white/30 border border-white/40 rounded-full px-5 py-2.5 text-gray-700 shadow-[0_4px_16px_rgba(0,0,0,0.04)] transition-all duration-300 hover:bg-white/50 hover:shadow-[0_6px_20px_rgba(0,0,0,0.06)] hover:-translate-y-0.5"
              itemProp="featureList"
            >
              {label}
            </span>
          ))}
        </div>

        {/* Seta com glassmorphism */}
        <a
          href="#como-funciona"
          onClick={handleGoToHowItWorks}
          className="group mt-16 md:mt-20 inline-flex cursor-pointer select-none rounded-full backdrop-blur-md bg-white/30 border border-white/40 p-3 text-gray-500 shadow-[0_4px_16px_rgba(0,0,0,0.04)] transition-all duration-300 ease-out hover:bg-white/50 hover:text-indigo-600 hover:shadow-[0_6px_20px_rgba(0,0,0,0.06)] hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
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
          to { opacity: 0.2; }
        }
        @media (min-width: 640px) {
          @keyframes fadeIn {
            to { opacity: 0.3; }
          }
        }
        
        /* Glassmorphism backdrop blur support */
        @supports (backdrop-filter: blur(12px)) or (-webkit-backdrop-filter: blur(12px)) {
          .backdrop-blur-xl {
            backdrop-filter: blur(12px);
            -webkit-backdrop-filter: blur(12px);
          }
          .backdrop-blur-md {
            backdrop-filter: blur(8px);
            -webkit-backdrop-filter: blur(8px);
          }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;