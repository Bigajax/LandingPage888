import React, { useCallback } from "react";
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
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-[1]">
        <div className="absolute -top-24 left-1/2 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-gradient-to-br from-purple-200 via-transparent to-indigo-200 opacity-50 blur-[80px]" />
        <div className="absolute inset-0 flex items-center justify-center transform-gpu will-change-transform">
          <div className="relative w-[88vw] max-w-[560px] aspect-square">
            <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle,rgba(115,91,255,0.15)_0%,rgba(115,91,255,0.06)_45%,transparent_72%)] blur-xl" />
            <div className="absolute inset-0 opacity-0 animate-[fadeIn_0.8s_ease-out_0.3s_forwards] motion-reduce:opacity-25 sm:motion-reduce:opacity-40">
              <Orb hoverIntensity={0.12} rotateOnHover={false} hue={290} forceHoverState={true} />
            </div>
          </div>
        </div>
        <div className="absolute inset-x-0 bottom-[-10%] h-[22rem] bg-gradient-to-t from-white/90 via-white/40 to-transparent" />
      </div>

      {/* CONTEÚDO */}
      <div
        className={`
          relative z-10 mx-auto flex max-w-7xl flex-col items-center
          px-4 sm:px-6 lg:px-8 text-center
          pt-[calc(var(--nav-h,64px)+32px+env(safe-area-inset-top))]
          md:pt-[calc(var(--nav-h,80px)+88px)]
          pb-[calc(32px+env(safe-area-inset-bottom))] md:pb-32
          transition-all duration-500 ease-out
          ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}
        `}
      >
        {/* Pílula topo – borda gradiente, interior transparente */}
        <div className="mt-2 flex justify-center">
          <span
            aria-label="Eco IA de Autoconhecimento"
            itemProp="applicationCategory"
            className={`
              inline-flex items-center rounded-full px-5 py-2
              text-white/95 font-medium leading-none

              border-2 border-transparent
              [background:linear-gradient(transparent,transparent)_padding-box,linear-gradient(90deg,#59B5FF,#C08BFF,#FF7AE0,#59B5FF)_border-box]
              [background-size:200%_200%]
              [animation:eco-gradient-move_6s_ease_infinite]

              shadow-[0_0_10px_rgba(192,139,255,0.35)]
              backdrop-blur-[1px]
              filter drop-shadow-[0_1px_8px_rgba(0,0,0,0.45)]
            `}
          >
            #EcoIAdeAutoconhecimento
          </span>
        </div>

        {/* Título */}
        <h1 id="hero-title" itemProp="name" className="heading-xl mt-8 text-balance font-semibold text-gray-900">
          Transforme seus dias com 
7 minutos de autoconhecimento
        </h1>

        {/* Subtítulo */}
        <p className="subheading mt-6 max-w-2xl text-balance text-gray-600" itemProp="description">
          A Eco identifica como você está se sentindo e 
revela padrões emocionais que transformam sua vida.
        </p>

        {/* CTAs */}
        <div className="mt-10 flex w-full flex-col items-center justify-center gap-4 sm:mt-12 sm:flex-row sm:flex-wrap md:flex-nowrap md:gap-5">
          <a
            href="https://ecofrontend888.vercel.app/login"
            aria-label="Começar a escrever na Eco gratuitamente"
            className="inline-flex w-full items-center justify-center gap-2.5 rounded-full bg-[#007AFF] px-9 py-4 text-base font-semibold text-white shadow-lg transition-all duration-200 ease-out hover:bg-[#0066E5] hover:shadow-xl hover:scale-[1.01] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#007AFF] focus-visible:ring-offset-2 focus-visible:ring-offset-white active:scale-[0.99] sm:w-auto"
          >
            <PlayCircle size={18} className="opacity-90" />
            <span className="hidden sm:inline"> Começar minha jornada grátis</span>
            <span className="sm:hidden">Começar minha jornada grátis</span>
          </a>
          <a
            href="#como-funciona"
            onClick={handleGoToHowItWorks}
            className="glass-btn-25 group inline-flex w-full items-center justify-center gap-2 rounded-full px-9 py-4 text-base font-medium text-gray-800 sm:w-auto"
            aria-label="Ver como o Eco funciona"
          >
            Assista em 1 minuto
            <ChevronRight size={18} className="transition-transform duration-300 group-hover:translate-x-1 text-gray-600" aria-hidden="true" />
          </a>
        </div>

        {/* Micro-confiança – selo único */}
        <div className="mt-12 md:mt-16 flex flex-wrap justify-center gap-3 sm:gap-4 text-sm font-medium text-gray-700">
          <span className="glass-chip-25 inline-flex items-center rounded-full px-4 py-2" itemProp="featureList">
            ✨ Beta gratuito • 🕐 7 min/dia • 🔥 Últimas vagas
          </span>
        </div>

        {/* Seta */}
        <a
          href="#como-funciona"
          onClick={handleGoToHowItWorks}
          className="group mt-12 md:mt-16 inline-flex cursor-pointer select-none rounded-full border border-transparent p-3 text-gray-500 transition-all duration-300 ease-out hover:text-indigo-600 hover:bg-indigo-50/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
          aria-label="Ir para a seção Como Funciona"
        >
          <ChevronDown className="h-5 w-5 sm:h-6 sm:w-6 transition-transform duration-300 group-hover:translate-y-1" aria-hidden="true" />
        </a>
      </div>

      {/* glass utils */}
      <style>{`
        .glass-25{
          position:relative;
          background: linear-gradient(180deg, rgba(255,255,255,0.65), rgba(255,255,255,0.35));
          border: 1px solid rgba(235,238,249,0.85);
          box-shadow: 0 10px 24px rgba(15,23,42,0.06), inset 0 1px 0 rgba(255,255,255,0.7);
          -webkit-backdrop-filter: blur(25px);
          backdrop-filter: blur(25px);
        }
        .glass-25::before{
          content:""; position:absolute; inset:0; border-radius:9999px;
          background: radial-gradient(120% 100% at 50% 0%, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0) 70%);
          pointer-events:none;
        }

        .glass-btn-25{
          position:relative;
          color:#0b0b0f;
          background: linear-gradient(180deg, rgba(255,255,255,0.70), rgba(255,255,255,0.40));
          border: 1px solid rgba(230,233,246,0.9);
          box-shadow: 0 12px 28px rgba(15,23,42,0.06);
          -webkit-backdrop-filter: blur(25px);
          backdrop-filter: blur(25px);
          transition: transform .2s ease, box-shadow .2s ease, background .2s ease;
        }
        .glass-btn-25:hover{ background: rgba(255,255,255,0.82); box-shadow: 0 16px 36px rgba(15,23,42,0.1); transform: translateY(-1px); }
        .glass-btn-25:active{ transform: translateY(0); }

        .glass-chip-25{
          position:relative;
          background: linear-gradient(180deg, rgba(255,255,255,0.60), rgba(255,255,255,0.32));
          border: 1px solid rgba(235,238,249,0.9);
          box-shadow: inset 0 1px 0 rgba(255,255,255,0.7), 0 10px 20px rgba(15,23,42,0.05);
          -webkit-backdrop-filter: blur(25px);
          backdrop-filter: blur(25px);
        }
      `}</style>

      {/* Anim. da borda gradiente + fade do ORB */}
      <style>{`
        @keyframes eco-gradient-move {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 0.25; } }
        @media (min-width: 640px) { @keyframes fadeIn { to { opacity: 0.4; } } }
      `}</style>
    </section>
  );
};

export default HeroSection;
