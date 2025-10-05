import React, { useCallback } from "react";
import { ChevronDown, ChevronRight, PlayCircle } from "lucide-react";
import EcoBubbleOneEye from "../components/EcoBubbleOneEye";
import { useScrollReveal } from "../hooks/useScrollReveal";

/* Hookzinho leve para valores responsivos */
function useMediaQuery(query: string) {
  const [match, setMatch] = React.useState<boolean>(() =>
    typeof window !== "undefined" ? window.matchMedia(query).matches : false
  );
  React.useEffect(() => {
    if (typeof window === "undefined") return;
    const m = window.matchMedia(query);
    const onChange = () => setMatch(m.matches);
    onChange();
    m.addEventListener?.("change", onChange);
    return () => m.removeEventListener?.("change", onChange);
  }, [query]);
  return match;
}

const HeroSection: React.FC = () => {
  const { ref, isVisible } = useScrollReveal();

  // Tamanhos do olho por breakpoint
  const md = useMediaQuery("(min-width: 768px)");
  const lg = useMediaQuery("(min-width: 1024px)");
  const eyeSize = lg ? 520 : md ? 400 : 260;

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
        min-h-[calc(100svh-var(--nav-h,64px))]
        md:min-h-[calc(100dvh-var(--nav-h,80px))]
        [content-visibility:auto] [contain-intrinsic-size:1px_800px]
      `}
    >
      {/* BG suave no topo */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-[1]">
        <div className="absolute -top-24 left-1/2 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-gradient-to-br from-purple-200 via-transparent to-indigo-200 opacity-40 blur-[80px]" />
      </div>

      {/* CONTEÚDO – GRID */}
      <div
        className={`
          relative z-10 mx-auto grid max-w-7xl grid-cols-1 items-center
          gap-8 px-4
          pt-[calc(var(--nav-h,64px)+12px+env(safe-area-inset-top))]
          pb-[calc(28px+env(safe-area-inset-bottom))]
          sm:px-6
          md:grid-cols-2 md:gap-6 md:pt-[calc(var(--nav-h,80px)+40px)] md:pb-20
          lg:px-8
          transition-all duration-500 ease-out
          ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}
        `}
      >
        {/* Coluna olho (em cima no mobile, à direita no desktop) */}
        <div className="order-1 flex items-center justify-center md:order-2">
          <div className="relative">
            {/* halo radial atrás do olho */}
            <div
              aria-hidden="true"
              className="absolute left-1/2 top-1/2 -z-10 -translate-x-1/2 -translate-y-1/2 rounded-full blur-2xl"
              style={{
                width: eyeSize * 1.35,
                height: eyeSize * 1.35,
                background:
                  "radial-gradient(60% 60% at 50% 50%, rgba(115, 141, 255, 0.16), transparent)",
              }}
            />
            <EcoBubbleOneEye state="idle" variant="voice" size={eyeSize} />
          </div>
        </div>

        {/* Coluna texto */}
        <div className="order-2 md:order-1">
          {/* Pílula topo */}
          <div className="mb-4 flex justify-start md:mb-6">
            <span
              className="inline-flex items-center rounded-full px-4 py-2 text-sm font-medium text-gray-700 glass-chip-25"
              itemProp="applicationCategory"
            >
              🪞Eco IA de Autoconhecimento
            </span>
          </div>

          {/* Título */}
          <h1
            id="hero-title"
            itemProp="name"
            className={`
              font-semibold text-gray-900 text-balance
              text-[30px] leading-[1.07]
              sm:text-[36px]
              md:text-[48px]
              lg:text-[56px]
            `}
          >
            Transforme seus dias com{" "}
            <span className="whitespace-nowrap">7 minutos</span> de autoconhecimento
          </h1>

          {/* Subtítulo */}
          <p
            className="mt-4 max-w-[50ch] text-[16px] leading-relaxed text-gray-600 sm:text-[17px]"
            itemProp="description"
          >
            A Eco identifica como você está se sentindo e revela padrões emocionais que
            transformam sua vida.
          </p>

          {/* CTAs */}
          <div className="mt-7 flex w-full flex-col gap-3 sm:flex-row sm:flex-wrap md:gap-4">
            <a
              href="https://ecofrontend888.vercel.app/login"
              aria-label="Começar a escrever na Eco gratuitamente"
              className={`
                inline-flex w-full items-center justify-center gap-2.5
                rounded-full bg-[#007AFF] px-6 py-4
                text-[15px] font-semibold text-white
                shadow-[0_6px_18px_rgba(0,122,255,0.22)]
                transition-all duration-200 ease-out
                hover:bg-[#0066E5] hover:shadow-[0_10px_28px_rgba(0,122,255,0.24)]
                focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#007AFF]
                focus-visible:ring-offset-2 focus-visible:ring-offset-white
                active:scale-[0.99]
                sm:w-auto sm:min-w-[240px]
              `}
            >
              <PlayCircle size={18} className="opacity-90" />
              Começar minha jornada grátis
            </a>

            <a
              href="#como-funciona"
              onClick={handleGoToHowItWorks}
              className={`
                glass-btn-25 group inline-flex w-full items-center justify-center gap-2
                rounded-full px-6 py-4 text-[15px] font-medium text-gray-800
                sm:w-auto sm:min-w-[220px]
              `}
              aria-label="Ver como a Eco funciona"
            >
              Assista em 1 minuto
              <ChevronRight
                size={18}
                className="text-gray-600 transition-transform duration-300 group-hover:translate-x-1"
                aria-hidden="true"
              />
            </a>
          </div>

          {/* Micro-confiança */}
          <div className="mt-6 flex flex-wrap items-center gap-2 text-[13px] font-medium text-gray-700 md:mt-8">
            <span className="glass-chip-25 inline-flex items-center rounded-full px-3 py-1.5">
              ✨ Beta gratuito
            </span>
            <span className="glass-chip-25 inline-flex items-center rounded-full px-3 py-1.5">
              🕐 7 min/dia
            </span>
            <span className="glass-chip-25 inline-flex items-center rounded-full px-3 py-1.5">
              🔥 Últimas vagas
            </span>
          </div>

          {/* Seta */}
          <a
            href="#como-funciona"
            onClick={handleGoToHowItWorks}
            className="group mt-9 inline-flex cursor-pointer select-none rounded-full border border-transparent p-3 text-gray-500 transition-all duration-300 ease-out hover:bg-indigo-50/50 hover:text-indigo-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 focus-visible:ring-offset-2 focus-visible:ring-offset-white md:mt-10"
            aria-label="Ir para a seção Como Funciona"
          >
            <ChevronDown
              className="h-5 w-5 transition-transform duration-300 group-hover:translate-y-1 sm:h-6 sm:w-6"
              aria-hidden="true"
            />
          </a>
        </div>
      </div>

      {/* estilos utilitários de glass */}
      <style>{`
        .glass-btn-25{
          position:relative;
          color:#0b0b0f;
          background: linear-gradient(180deg, rgba(255,255,255,0.72), rgba(255,255,255,0.46));
          border: 1px solid rgba(230,233,246,0.92);
          box-shadow: 0 12px 28px rgba(15,23,42,0.06);
          -webkit-backdrop-filter: blur(22px);
          backdrop-filter: blur(22px);
          transition: transform .2s ease, box-shadow .2s ease, background .2s ease;
        }
        .glass-btn-25:hover{ background: rgba(255,255,255,0.9); box-shadow: 0 16px 36px rgba(15,23,42,0.1); transform: translateY(-1px); }
        .glass-btn-25:active{ transform: translateY(0); }

        .glass-chip-25{
          position:relative;
          background: linear-gradient(180deg, rgba(255,255,255,0.60), rgba(255,255,255,0.32));
          border: 1px solid rgba(235,238,249,0.9);
          box-shadow: inset 0 1px 0 rgba(255,255,255,0.7), 0 10px 20px rgba(15,23,42,0.05);
          -webkit-backdrop-filter: blur(18px);
          backdrop-filter: blur(18px);
        }

        @keyframes fadeIn { from { opacity: 0; } to { opacity: 0.25; } }
        @media (min-width: 640px) { @keyframes fadeIn { to { opacity: 0.4; } } }
      `}</style>
    </section>
  );
};

export default HeroSection;
