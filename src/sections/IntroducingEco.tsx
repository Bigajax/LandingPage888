import React from "react";
import { PenLine, Sparkles, RefreshCw, Sprout } from "lucide-react";
import EcoChat from "@/assets/images/Eco_chat.png";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const usePrefersReducedMotion = () => {
  const [prefersReducedMotion, setPrefersReducedMotion] = React.useState(false);

  React.useEffect(() => {
    if (typeof window === "undefined") return;

    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updateMotionPreference = () => setPrefersReducedMotion(mediaQuery.matches);

    updateMotionPreference();

    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener("change", updateMotionPreference);
      return () => mediaQuery.removeEventListener("change", updateMotionPreference);
    }

    mediaQuery.addListener(updateMotionPreference);
    return () => mediaQuery.removeListener(updateMotionPreference);
  }, []);

  return prefersReducedMotion;
};

type Feature = {
  Icon: React.ElementType;
  title: string;
  description: string;
};

interface FeatureCardProps extends Feature {
  index: number;
  isVisible: boolean;
  prefersReducedMotion: boolean;
}

const features: Feature[] = [
  {
    Icon: PenLine,
    title: "Escrita expressiva",
    description: "Dar forma ao que sente, aliviar tensões.",
  },
  {
    Icon: Sparkles,
    title: "Reflexão guiada",
    description: "Perguntas que funcionam como espelho.",
  },
  {
    Icon: RefreshCw,
    title: "Padrões revelados",
    description: "Emoções recorrentes ficam nítidas no tempo.",
  },
  {
    Icon: Sprout,
    title: "Jornada pessoal",
    description: "Pequenas doses no seu ritmo, evolução real.",
  },
];

const FeatureCard: React.FC<FeatureCardProps> = ({
  Icon,
  title,
  description,
  index,
  isVisible,
  prefersReducedMotion,
}) => {
  const animationBase = prefersReducedMotion ? "" : "transition-all duration-700 ease-out";
  const revealClass = prefersReducedMotion
    ? "opacity-100"
    : isVisible
    ? "translate-y-0 opacity-100"
    : "translate-y-6 opacity-0";

  return (
    <div
      className={`group rounded-3xl border border-white/60 bg-white/55 p-6 shadow-[0_18px_50px_rgba(148,163,184,0.18)] backdrop-blur-md transition-transform duration-500 ease-out hover:-translate-y-1.5 hover:shadow-[0_28px_70px_rgba(129,140,248,0.32)] ${animationBase} ${revealClass}`}
      style={
        !prefersReducedMotion && isVisible
          ? { transitionDelay: `${0.22 + index * 0.08}s` }
          : undefined
      }
    >
      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-violet-50 text-violet-600 ring-1 ring-white/60">
        <Icon size={20} strokeWidth={1.6} />
      </div>
      <h3 className="mt-5 font-semibold tracking-tight text-slate-900">{title}</h3>
      <p className="mt-2 text-sm text-slate-600">{description}</p>
    </div>
  );
};

const IntroducingEco: React.FC = () => {
  const { ref: leftRef, isVisible: leftVisible } = useScrollReveal();
  const { ref: rightRef, isVisible: rightVisible } = useScrollReveal();
  const prefersReducedMotion = usePrefersReducedMotion();

  const animationBase = prefersReducedMotion ? "" : "transition-all duration-700 ease-out";
  const getRevealClass = (isVisible: boolean) =>
    prefersReducedMotion
      ? "opacity-100"
      : isVisible
      ? "translate-y-0 opacity-100"
      : "translate-y-8 opacity-0";
  const getRevealStyle = (isVisible: boolean, delay: number) =>
    !prefersReducedMotion && isVisible ? { transitionDelay: `${delay}s` } : undefined;

  return (
    <section
      id="conheca-eco"
      aria-labelledby="introducing-eco-title"
      className="relative overflow-hidden bg-[radial-gradient(circle_at_top_left,_rgba(168,141,255,0.24),_transparent_55%),_radial-gradient(circle_at_bottom_right,_rgba(111,196,255,0.2),_transparent_65%)] py-24 sm:py-28"
    >
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(135deg,_rgba(250,250,255,0.95)_0%,_rgba(245,247,255,0.85)_45%,_rgba(255,255,255,0.92)_100%)]" />
      <div className="absolute -left-40 top-1/3 h-72 w-72 rounded-full bg-violet-300/30 blur-[140px]" aria-hidden />
      <div className="absolute -right-32 bottom-10 h-80 w-80 rounded-full bg-sky-200/35 blur-[160px]" aria-hidden />

      <div className="relative mx-auto grid max-w-6xl grid-cols-1 gap-10 px-6 lg:grid-cols-2 lg:items-center lg:gap-16">
        <div ref={leftRef} className="space-y-10 font-sans">
          <div className="space-y-5">
            <span
              className={`inline-flex items-center rounded-full border border-white/50 bg-white/40 px-4 py-1 text-xs font-medium uppercase tracking-[0.28em] text-slate-700 ${animationBase} ${getRevealClass(leftVisible)}`}
              style={getRevealStyle(leftVisible, 0.05)}
            >
              Eco
            </span>
            <h2
              id="introducing-eco-title"
              className={`text-4xl font-semibold tracking-tight text-slate-900 sm:text-[2.9rem] sm:leading-[1.05] ${animationBase} ${getRevealClass(leftVisible)}`}
              style={getRevealStyle(leftVisible, 0.1)}
            >
              Conheça a Eco.
            </h2>
            <p
              className={`max-w-xl text-lg leading-relaxed text-slate-600 ${animationBase} ${getRevealClass(leftVisible)}`}
              style={getRevealStyle(leftVisible, 0.16)}
            >
              Um espaço simples e guiado para escrever, refletir e enxergar padrões — criando condições reais para mudança.
            </p>
          </div>

          <div
            className={`grid grid-cols-1 gap-4 sm:grid-cols-2 ${animationBase} ${getRevealClass(leftVisible)}`}
            style={getRevealStyle(leftVisible, 0.2)}
          >
            {features.map((feature, index) => (
              <FeatureCard
                key={feature.title}
                {...feature}
                index={index}
                isVisible={leftVisible}
                prefersReducedMotion={prefersReducedMotion}
              />
            ))}
          </div>

          <div
            className={`${animationBase} ${getRevealClass(leftVisible)}`}
            style={getRevealStyle(leftVisible, 0.38)}
          >
            <a
              href="https://ecofrontend888.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className={`relative inline-flex items-center justify-center rounded-full bg-gradient-to-r from-violet-500 via-fuchsia-500 to-indigo-500 px-8 py-3 text-sm font-semibold text-white shadow-[0_22px_55px_rgba(139,92,246,0.38)] transition duration-300 hover:brightness-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-200 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent ${
                prefersReducedMotion ? "" : "hover:-translate-y-0.5"
              }`}
            >
              Começar minha jornada
              <span
                className="absolute inset-0 -z-10 rounded-full bg-gradient-to-r from-white/45 via-transparent to-white/20 blur"
                aria-hidden
              />
            </a>
          </div>
        </div>

        <div
          ref={rightRef}
          className={`relative flex justify-center font-sans ${animationBase} ${getRevealClass(rightVisible)}`}
          style={getRevealStyle(rightVisible, 0.18)}
        >
          <div className="absolute inset-y-10 -left-20 h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle_at_center,_rgba(139,92,246,0.45),_rgba(129,140,248,0.08)_55%,_transparent_70%)] blur-3xl" aria-hidden />
          <div className="absolute inset-y-12 right-0 h-[360px] w-[360px] rounded-full bg-[radial-gradient(circle_at_center,_rgba(96,165,250,0.32),_transparent_70%)] blur-[120px]" aria-hidden />
          <div className="relative">
            <div className="absolute -inset-8 rounded-[44px] bg-[radial-gradient(circle_at_top,_rgba(196,181,253,0.75),_rgba(167,139,250,0.3)_55%,_rgba(244,244,255,0.25)_80%)] blur-3xl" aria-hidden />
            <div className="relative overflow-hidden rounded-[44px] border border-white/25 bg-white/20 p-3 shadow-[0_32px_90px_rgba(88,70,155,0.4)] backdrop-blur-xl">
              <img
                src={EcoChat}
                alt="Mockup do aplicativo Eco exibindo a interface de escrita guiada"
                className="h-auto w-[260px] drop-shadow-[0_30px_60px_rgba(124,58,237,0.35)] sm:w-[300px] lg:w-[340px]"
                draggable={false}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroducingEco;
