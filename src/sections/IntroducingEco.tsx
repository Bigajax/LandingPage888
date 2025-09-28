import React from "react";
import { PenLine, Sparkles, RefreshCw, Sprout } from "lucide-react";
import EcoChat from "@/assets/images/Eco_chat.png";
import { useScrollReveal } from "@/hooks/useScrollReveal";

interface FeatureCardProps {
  Icon: React.ElementType;
  title: string;
  description: string;
}

const features: FeatureCardProps[] = [
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

const FeatureCard: React.FC<FeatureCardProps> = ({ Icon, title, description }) => (
  <div className="rounded-2xl border border-white/30 bg-white/40 p-5 backdrop-blur-md transition-transform duration-500 ease-out hover:-translate-y-1">
    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/50 text-violet-500">
      <Icon size={20} strokeWidth={2} />
    </div>
    <h3 className="mt-4 text-base font-semibold text-slate-900">{title}</h3>
    <p className="mt-2 text-sm text-slate-600">{description}</p>
  </div>
);

const IntroducingEco: React.FC = () => {
  const { ref: leftRef, isVisible: leftVisible } = useScrollReveal();
  const { ref: rightRef, isVisible: rightVisible } = useScrollReveal();

  return (
    <section
      id="conheca-eco"
      className="relative overflow-hidden bg-[radial-gradient(circle_at_top_left,_rgba(168,141,255,0.28),_transparent_55%),_radial-gradient(circle_at_bottom_right,_rgba(111,196,255,0.2),_transparent_60%)] py-20 sm:py-24"
    >
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(135deg,_#f7f4ff_0%,_#f2f9ff_50%,_#ffffff_100%)]" />
      <div className="absolute -left-32 top-1/3 h-64 w-64 rounded-full bg-violet-300/30 blur-3xl" aria-hidden />
      <div className="absolute -right-28 bottom-10 h-72 w-72 rounded-full bg-sky-200/30 blur-[120px]" aria-hidden />

      <div className="relative mx-auto grid max-w-6xl grid-cols-1 gap-12 px-6 lg:grid-cols-2 lg:items-center">
        <div
          ref={leftRef}
          className={`space-y-8 font-sans transition-all duration-700 ease-out ${
            leftVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <div className="space-y-4">
            <span className="inline-flex items-center rounded-full border border-white/40 bg-white/30 px-4 py-1 text-xs font-medium uppercase tracking-[0.2em] text-slate-700">
              Eco
            </span>
            <h2 className="text-4xl font-semibold text-slate-900 sm:text-5xl">Conheça a Eco.</h2>
            <p className="max-w-xl text-base leading-relaxed text-slate-600">
              Um espaço simples e guiado para escrever, refletir e enxergar padrões — criando condições reais para mudança.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {features.map((feature) => (
              <FeatureCard key={feature.title} {...feature} />
            ))}
          </div>

          <div>
            <a
              href="https://ecofrontend888.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="relative inline-flex items-center justify-center rounded-full bg-gradient-to-r from-violet-500 via-violet-500 to-fuchsia-500 px-7 py-3 text-sm font-semibold text-white shadow-[0_15px_35px_rgba(139,92,246,0.35)] transition-transform duration-300 hover:scale-[1.03] focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-300"
            >
              Começar minha jornada
              <span className="absolute inset-0 -z-10 rounded-full bg-gradient-to-r from-white/40 via-transparent to-white/30 blur" aria-hidden />
            </a>
          </div>
        </div>

        <div
          ref={rightRef}
          className={`relative flex justify-center font-sans transition-all duration-700 ease-out ${
            rightVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <div className="absolute -top-10 right-6 h-64 w-64 rounded-full bg-violet-400/40 blur-3xl" aria-hidden />
          <div className="absolute -bottom-12 left-8 h-72 w-72 rounded-full bg-purple-300/30 blur-[120px]" aria-hidden />
          <div className="relative">
            <div className="absolute -inset-6 rounded-[36px] bg-gradient-to-br from-violet-400/40 via-violet-500/40 to-fuchsia-400/30 blur-2xl" aria-hidden />
            <div className="relative overflow-hidden rounded-[36px] border border-white/20 bg-white/20 shadow-[0_30px_80px_rgba(76,29,149,0.35)] backdrop-blur-xl">
              <img
                src={EcoChat}
                alt="Interface do app Eco"
                className="h-auto w-[280px] sm:w-[320px] lg:w-[360px]"
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
