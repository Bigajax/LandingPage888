import React, { useCallback } from "react";
import { ChevronDown, ChevronRight, PlayCircle } from "lucide-react";
import EcoBubbleOneEye from "../components/EcoBubbleOneEye";
import { useScrollReveal } from "../hooks/useScrollReveal";

const HeroSection: React.FC = () => {
  const { ref, isVisible } = useScrollReveal();

  const handleGoToHowItWorks = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault();
      const el = document.getElementById("como-funciona");
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    },
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
      {/* BACKGROUND GLOWS */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-[1]">
        {/* leve glow superior */}
        <div className="absolute -top-24 left-1/2 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-gradient-to-br from-purple-200 via-transparent to-indigo-200 opacity-50 blur-[80px]" />
        {/* leve glow inferior para separar a dobra */}
        <div className="absolute inset-x-0 bottom-[-10%] h-[22rem] bg-gradient-to-t from-white/90 via-white/40 to-transparent" />
      </div>

      {/* CONTENT – SPLIT LAYOUT */}
      <div
        className={`
          relative z-10 mx-auto flex max-w-7xl flex-col-reverse md:flex-row items-center
          gap-10 lg:gap-14
          px-4 sm:px-6 lg:px-8
          pt-[calc(var(--nav-h,64px)+32px+env(safe-area-inset-top))]
          md:pt-[calc(var(--nav-h,80px)+56px)]
          pb-[calc(32px+env(safe-area-inset-bottom))] md:pb-24
          transition-all duration-500 ease-out
          ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}
        `}
      >
        {/* LEFT: Text & CTAs */}
        <div className="w-full md:flex-1 text-center md:text-left">
          {/* Pílula topo */}
          <div className="flex justify-center md:justify-start">
            <span
              className="glass-chip-25 inline-flex items-center rounded-full px-4 py-2 text-sm font-medium text-gray-700"
              itemProp="applicationCategory"
            >
              #EcoIAdeAutoconhecimento
            </span>
          </div>

          {/* Título */}
          <h1
            id="hero-title"
            itemProp="name"
            className="heading-xl mt-6 text-balance font-semibold text-gray-900"
          >
            Transforme seus dias com
            <br className="hidden sm:block" />
            7 minutos de autoconhecimento
          </h1>

          {/* Subtítulo */}
          <p
            className="subheading mt-6 max-w-2xl text-balance text-gray-600 md:pr-6 md:max-w-none"
            itemProp="description"
          >
            A Eco identifica como você está se sentindo e revela padrões emocionais que
            transformam sua vida.
          </p>

          {/* CTAs */}
          <div className="mt-10 flex w-full flex-col items-center md:items-start justify-center gap-4 sm:mt-12 sm:flex-row md:flex-row md:gap-5">
            <a
              href="https://ecofrontend888.vercel.app/login"
              aria-label="Começar a escrever na Eco gratuitamente"
              className="inline-flex items-center justify-center gap-2.5 rounded-full bg-[#007AFF] px-9 py-4 text-base font-semibold text-white shadow-lg transition-all duration-200 ease-out hover:bg-[#0066E5] hover:shadow-xl hover:scale-[1.01] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#007AFF] focus-visible:ring-offset-2 focus-visible:ring-offset-white active:scale-[0.99]"
            >
              <PlayCircle size={18} className="opacity-90" />
              Começar minha jornada grátis
            </a>

            <a
              href="#como-funciona"
              onClick={handleGoToHowItWorks}
              className="glass-btn-25 group inline-flex items-center justify-center gap-2 rounded-full px-9 py-4 text-base font-medium text-gray-800"
              aria-label="Ver como o Eco funciona"
            >
              Assista em 1 minuto
              <ChevronRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1 text-gray-600"
                aria-hidden="true"
              />
            </a>
          </div>

          {/* Micro-confiança – selo único */}
          <div className="mt-10 flex flex-wrap justify-center md:justify-start gap-3 sm:gap-4 text-sm font-medium text-gray-700">
            <span className="glass-chip-25 inline-flex items-center rounded-full px-4 py-2" itemProp="featureList">
              ✨ Beta gratuito • 🕐 7 min/dia • 🔥 Últimas vagas
            </span>
          </div>
        </div>

        {/* RIGHT: Eco Bubble */}
        <div className="w-full md:flex-1 relative flex items-center justify-center">
          {/* halo radial suave atrás do olho */}
          <div className="absolute inset-0 -z-10 opacity-60 blur-2xl">
            <div className="mx-auto h-[320px] w-[320px] md:h-[420px] md:w-[420px] rounded-full bg-[radial-gradient(circle,rgba(115,91,255,0.15)_0%,rgba(115,91,255,0.06)_45%,transparent_72%)]" />
          </div>

          {/* Bolha / Olho */}
          <EcoBubbleOneEye state="idle" variant="voice" size={380} />
        </div>
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
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
