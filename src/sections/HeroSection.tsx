// src/sections/HeroSection.tsx
import React, { useCallback, useMemo } from "react";
import { ChevronDown, ChevronRight, PlayCircle } from "lucide-react";
import Orb from "../components/Orb";
import { useScrollReveal } from "../hooks/useScrollReveal";

const ACCENT = "#5B4BFF";

const HeroSection: React.FC = () => {
  const { ref, isVisible } = useScrollReveal();

  const handleGoToHowItWorks = useCallback((e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    document.getElementById("como-funciona")?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  const badges = useMemo(
    () => [
      { label: "Grátis para sempre", key: "beta" },
      { label: "Insights toda semana", key: "reports" },
      { label: "Tecnologia + empatia", key: "mentorship" },
    ],
    []
  );

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
      <div aria-hidden className="pointer-events-none absolute inset-0 z-[1]">
        <div className="absolute -top-24 left-1/2 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(115,91,255,0.12)_0%,transparent_70%)] blur-[80px]" />
        <div className="absolute inset-0 flex items-center justify-center will-change-transform">
          <div className="relative w-[88vw] max-w-[560px] aspect-square">
            <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle,rgba(115,91,255,0.14)_0%,rgba(115,91,255,0.06)_45%,transparent_72%)] blur-2xl" />
            <div className="absolute inset-0 opacity-25 sm:opacity-40 motion-reduce:opacity-30">
              <Orb hoverIntensity={0.12} rotateOnHover={false} hue={265} forceHoverState={false} />
            </div>
          </div>
        </div>
        <div className="absolute inset-x-0 bottom-[-10%] h-[18rem] bg-gradient-to-t from-white via-white/40 to-transparent" />
      </div>

      {/* CONTENT */}
      <div
        className={`
          relative z-10 mx-auto max-w-[700px] sm:max-w-[920px]
          px-5 sm:px-8 text-center
          pt-[calc(var(--nav-h,64px)+72px)] md:pt-[calc(var(--nav-h,80px)+96px)]
          pb-24 md:pb-32
          transition-all duration-500 ease-out
          ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"}
        `}
      >
        {/* Pílula – vidro líquido */}
        <span
          className="glass-pill inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-[11px] sm:text-xs text-zinc-700"
          itemProp="applicationCategory"
        >
          SEU DIÁRIO EMOCIONAL
        </span>

        {/* Título */}
        <h1
          id="hero-title"
          itemProp="name"
          className="mt-7 text-balance tracking-tight text-[32px] leading-[1.08] sm:text-[48px] sm:leading-[1.06] lg:text-6xl font-semibold text-zinc-900"
        >
          Transforme sentimentos em clareza.
        </h1>

        {/* Subtítulo */}
        <p
          className="mt-6 text-[17px] sm:text-[19px] leading-[2] sm:leading-[2.05] text-zinc-600 max-w-[62ch] sm:max-w-[72ch] mx-auto"
          itemProp="description"
        >
          Escreva livremente. Receba reflexões personalizadas. Descubra padrões que você não via sozinho.
        </p>

        {/* CTAs – vidro (secundário) e vidro-sólido (primário) */}
        <div className="mt-10 flex w-full flex-col items-center justify-center gap-4 sm:mt-12 sm:flex-row sm:gap-5">
          {/* Primário – sólido com brilho de vidro */}
          <a
            href="https://ecofrontend888.vercel.app/login"
            aria-label="Começar a escrever no Eco gratuitamente"
            className="glass-btn-primary inline-flex w-full sm:w-auto items-center justify-center gap-2.5 h-12 px-8 rounded-full font-semibold text-white transition-all"
          >
            <PlayCircle size={18} className="opacity-90" />
            <span className="hidden sm:inline">Começar agora — é grátis</span>
            <span className="sm:hidden">Começar grátis</span>
          </a>

          {/* Secundário – vidro translúcido */}
          <a
            href="#como-funciona"
            onClick={handleGoToHowItWorks}
            className="glass-btn inline-flex w-full sm:w-auto items-center justify-center gap-2 h-12 px-8 rounded-full font-medium text-zinc-900"
            aria-label="Ver como o Eco funciona"
          >
            Ver como funciona
            <ChevronRight size={18} className="transition-transform duration-300 group-hover:translate-x-1 text-zinc-600" aria-hidden />
          </a>
        </div>

        {/* Badges – chips em glass */}
        <div className="mt-12 md:mt-16 flex flex-wrap justify-center gap-3 sm:gap-4 text-sm font-medium text-zinc-700">
          {badges.map(({ label, key }) => (
            <span key={key} className="glass-chip inline-flex items-center rounded-full px-4 py-2">
              {label}
            </span>
          ))}
        </div>

        {/* Seta */}
        <a
          href="#como-funciona"
          onClick={handleGoToHowItWorks}
          className="group mt-12 md:mt-16 inline-flex cursor-pointer select-none rounded-full border border-transparent p-3 text-zinc-500 transition-all duration-300 hover:text-[--accent] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[--accent] focus-visible:ring-offset-2 focus-visible:ring-offset-white"
          aria-label="Ir para a seção Como Funciona"
        >
          <ChevronDown className="h-5 w-5 sm:h-6 sm:w-6 transition-transform duration-300 group-hover:translate-y-1" aria-hidden />
        </a>
      </div>

      {/* util classes para glass / liquid glass */}
      <style>{`
        :root { --accent: ${ACCENT}; }

        .glass-pill{
          position:relative;
          background: linear-gradient(180deg, rgba(255,255,255,0.75), rgba(255,255,255,0.55));
          border: 1px solid rgba(255,255,255,0.6);
          box-shadow: 0 8px 24px rgba(15,23,42,0.06), inset 0 1px 0 rgba(255,255,255,0.6);
          -webkit-backdrop-filter: blur(14px);
          backdrop-filter: blur(14px);
        }
        .glass-pill::before{
          content:"";
          position:absolute; inset:0; border-radius:9999px;
          background: radial-gradient(120% 100% at 50% 0%, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0) 70%);
          pointer-events:none;
        }

        .glass-btn{
          position:relative;
          color:#0b0b0f;
          background: linear-gradient(180deg, rgba(255,255,255,0.75), rgba(255,255,255,0.55));
          border: 1px solid rgba(230,233,246,0.9);
          box-shadow: 0 12px 28px rgba(15,23,42,0.06);
          -webkit-backdrop-filter: blur(16px);
          backdrop-filter: blur(16px);
          transition: transform .2s ease, box-shadow .2s ease, background .2s ease;
        }
        .glass-btn:hover{ background: rgba(255,255,255,0.85); box-shadow: 0 16px 36px rgba(15,23,42,0.1); transform: translateY(-1px); }
        .glass-btn:active{ transform: translateY(0); }

        .glass-chip{
          position:relative;
          background: linear-gradient(180deg, rgba(255,255,255,0.7), rgba(255,255,255,0.5));
          border: 1px solid rgba(235,238,249,0.9);
          box-shadow: inset 0 1px 0 rgba(255,255,255,0.7), 0 10px 20px rgba(15,23,42,0.05);
          -webkit-backdrop-filter: blur(14px);
          backdrop-filter: blur(14px);
        }

        .glass-btn-primary{
          position:relative;
          background: linear-gradient(180deg, #7C5CFF 0%, var(--accent) 100%);
          box-shadow: 0 16px 32px rgba(91,75,255,0.28);
        }
        .glass-btn-primary::before{
          content:"";
          position:absolute; inset:0; border-radius:9999px;
          background: radial-gradient(100% 80% at 50% 0%, rgba(255,255,255,0.45) 0%, rgba(255,255,255,0) 60%);
          pointer-events:none;
        }
        .glass-btn-primary:hover{ filter: brightness(1.06); box-shadow: 0 22px 44px rgba(91,75,255,0.32); transform: translateY(-1px); }
        .glass-btn-primary:active{ transform: translateY(0); }
      `}</style>
    </section>
  );
};

export default HeroSection;
