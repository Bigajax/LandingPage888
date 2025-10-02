import React from "react"; 
import { ChevronDown, ChevronRight, PlayCircle } from "lucide-react";
import EcoBubbleOneEye from "../components/EcoBubbleOneEye";
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
        relative overflow-hidden liquid-bg
        min-h-[calc(100svh-var(--nav-h,64px))] md:min-h-[calc(100dvh-var(--nav-h,80px))]
        [content-visibility:auto] [contain-intrinsic-size:1px_800px]
      `}
    >
      {/* BG / ORB */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-[1]"
      >
        <div className="absolute -top-24 left-1/2 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-gradient-to-br from-purple-200 via-transparent to-indigo-200 opacity-60 blur-3xl" />
        <div className="absolute inset-x-0 bottom-[-10%] h-[22rem] bg-gradient-to-t from-white/90 via-white/40 to-transparent" />
        <div className="absolute inset-0 flex items-center justify-center transform-gpu will-change-transform">
          <div className="relative flex w-[88vw] max-w-[560px] items-center justify-center">
            <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle,rgba(16,185,129,0.22)_0%,rgba(16,185,129,0.12)_48%,transparent_76%)] blur-2xl" />
            <div className="absolute -inset-10 rounded-full bg-emerald-200/30 blur-3xl" />
            <EcoBubbleOneEye className="pointer-events-none mx-auto max-w-[420px] shadow-[0_34px_82px_rgba(16,185,129,0.32)]" />
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
        <span className="glass inline-flex items-center gap-2 rounded-full px-5 py-2 text-xs font-medium uppercase tracking-[0.2em] text-[#6B7280]">
          Jornada de autoconhecimento
        </span>

        {/* Título */}
        <h1 id="hero-title" className="heading-xl mt-8 text-balance font-semibold text-[#111827]">
          Eco, um espaço delicado para ler o que você sente.
        </h1>

        {/* Subtítulo */}
        <p className="subheading mt-6 max-w-2xl text-balance text-[#6B7280]">
          Um diário inteligente com toques humanos: escreva, receba reflexões e acompanhe sua evolução emocional com suavidade.
        </p>

        {/* CTAs */}
        <div className="mt-10 flex w-full flex-col items-center justify-center gap-4 sm:mt-12 sm:flex-row sm:flex-wrap md:flex-nowrap md:gap-5">
          <a
            href="https://ecofrontend888.vercel.app/login"
            aria-label="Começar minha jornada"
            className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#3B82F6] px-8 py-3 text-base font-semibold text-white shadow-[0_16px_32px_rgba(59,130,246,0.28)] transition duration-300 ease-out hover:bg-[#2563EB] hover:shadow-[0_22px_44px_rgba(59,130,246,0.32)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3B82F6]/40 focus-visible:ring-offset-2 focus-visible:ring-offset-white sm:w-auto"
          >
            <PlayCircle size={18} className="opacity-90" />
            Começar minha jornada
          </a>

          <a
            href="#como-funciona"
            onClick={handleGoToHowItWorks}
            className="group inline-flex w-full items-center justify-center gap-2 rounded-full border border-[#D1D5DB] bg-white/80 px-8 py-3 text-base font-semibold text-[#3B82F6] shadow-[0_8px_24px_rgba(15,23,42,0.06)] transition duration-300 ease-out hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3B82F6]/30 focus-visible:ring-offset-2 focus-visible:ring-offset-white sm:w-auto"
            aria-label="Ver como funciona"
          >
            Ver como funciona
            <ChevronRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </div>

        {/* Micro-confiança */}
        <div className="mt-10 flex flex-wrap justify-center gap-3 text-xs font-medium text-[#6B7280] sm:text-sm">
          <span className="glass px-4 py-1.5">Beta gratuito</span>
          <span className="glass px-4 py-1.5">Relatórios emocionais guiados</span>
          <span className="glass px-4 py-1.5">Mentoria humana + IA</span>
        </div>

        {/* Seta */}
        <a
          href="#como-funciona"
          onClick={handleGoToHowItWorks}
          className="group mt-10 inline-flex cursor-pointer select-none rounded-full border border-transparent p-3 text-[#6B7280] transition duration-300 ease-out hover:text-[#4F46E5] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A78BFA] focus-visible:ring-offset-2 focus-visible:ring-offset-white"
          aria-label="Ir para a próxima seção"
        >
          <ChevronDown className="h-5 w-5 sm:h-6 sm:w-6 transition-transform duration-300 group-hover:translate-y-1" />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
