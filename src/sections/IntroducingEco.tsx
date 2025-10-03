import React from "react";
import { PenLine, Sparkles, RefreshCw, Sprout, ChevronDown } from "lucide-react";
import EcoChat from "@/assets/images/Eco_chat.png";
import { useScrollReveal } from "@/hooks/useScrollReveal";

type Feature = { Icon: React.ElementType; title: string; description: string };

const FEATURES: Feature[] = [
  { Icon: PenLine,  title: "Escrita expressiva",       description: "Dê forma ao que sente e alivie tensões." },
  { Icon: Sparkles, title: "Reflexão guiada",          description: "Perguntas que funcionam como espelho." },
  { Icon: RefreshCw,title: "Padrões revelados",        description: "O que se repete fica nítido no tempo." },
  { Icon: Sprout,   title: "Jornada pessoal",          description: "Pequenas doses no seu ritmo, evolução real." },
];

const Chip: React.FC<Feature> = ({ Icon, title, description }) => (
  <div
    className="
      rounded-2xl p-4 bg-white/60 border border-white/70 backdrop-blur-md
      shadow-[0_10px_30px_rgba(17,24,39,0.06)] hover:-translate-y-0.5 transition-all
    "
  >
    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-50 text-slate-600 ring-1 ring-white/60">
      <Icon size={18} strokeWidth={1.6} />
    </div>
    <h3 className="mt-3 font-semibold text-slate-900">{title}</h3>
    <p className="mt-1 text-sm leading-relaxed text-slate-600">{description}</p>
  </div>
);

const IntroducingEco: React.FC = () => {
  const { ref: headRef, isVisible: headVis } = useScrollReveal();
  const { ref: phoneRef, isVisible: phoneVis } = useScrollReveal();

  const fade = (v: boolean) => (v ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4");

  return (
    <section
      id="conheca-eco"
      aria-labelledby="introducing-eco-title"
      className="
        relative overflow-hidden py-20 sm:py-24
        bg-[radial-gradient(circle_at_top_left,rgba(168,141,255,0.18),transparent_55%),radial-gradient(circle_at_bottom_right,rgba(111,196,255,0.16),transparent_65%)]
      "
    >
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(135deg,rgba(250,250,255,0.96)_0%,rgba(246,248,255,0.9)_45%,rgba(255,255,255,0.98)_100%)]" />

      <div className="mx-auto max-w-6xl px-6">
        {/* Header */}
        <div
          ref={headRef}
          className={`text-center transition-all duration-700 ${fade(headVis)}`}
        >
          {/* PÍLULA: igual à “Seu diário emocional” */}
          <span
            className="
              inline-flex items-center rounded-full
              px-5 py-2 text-sm font-medium text-slate-800
              bg-white/60 border border-white/70 backdrop-blur-md
              shadow-[0_4px_16px_rgba(17,24,39,0.06)]
            "
          >
            Como funciona
          </span>

          <h2
            id="introducing-eco-title"
            className="mt-5 text-4xl font-semibold tracking-tight text-slate-900 sm:text-[2.6rem] sm:leading-[1.06]"
          >
            Conheça a Eco.
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-lg leading-relaxed text-slate-600">
            Escreva, reflita e descubra padrões — transformando insight em mudança real.
          </p>
        </div>

        {/* Grid 3 colunas: chips / phone / chips */}
        <div
          className="
            mt-10 grid grid-cols-1 gap-8
            lg:grid-cols-[1fr_auto_1fr] lg:items-center
          "
        >
          {/* Chips esquerda */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-1">
            <Chip {...FEATURES[0]} />
            <Chip {...FEATURES[1]} />
          </div>

          {/* iPhone central + CTA */}
          <div
            ref={phoneRef}
            className={`relative flex flex-col items-center transition-all duration-700 ${fade(phoneVis)}`}
          >
            {/* halo removido (sem roxo atrás do celular) */}
            <img
              src={EcoChat}
              alt="Interface da Eco com escrita guiada"
              className="w-[270px] sm:w-[320px] lg:w-[360px] drop-shadow-[0_30px_70px_rgba(15,23,42,0.12)] select-none"
              draggable={false}
            />

            {/* SETA: mais para baixo, acima do botão */}
            <div aria-hidden className="mt-5 sm:mt-6 flex items-center justify-center">
              <ChevronDown
                className="h-5 w-5 text-slate-500 animate-bounce-slow opacity-90"
                aria-hidden="true"
              />
            </div>

            {/* CTA */}
            <a
              href="https://ecofrontend888.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="
                mt-2 inline-flex items-center justify-center rounded-full
                bg-gradient-to-r from-violet-600 to-indigo-600 px-8 py-3
                text-sm font-semibold text-white
                shadow-[0_18px_40px_rgba(15,23,42,0.12)]
                transition hover:brightness-110 hover:-translate-y-0.5
                focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-300
                focus-visible:ring-offset-2 focus-visible:ring-offset-white
              "
            >
              Começar minha jornada
            </a>
          </div>

          {/* Chips direita */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-1">
            <Chip {...FEATURES[2]} />
            <Chip {...FEATURES[3]} />
          </div>
        </div>
      </div>

      {/* animações utilitárias */}
      <style>{`
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50%      { transform: translateY(6px); }
        }
        .animate-bounce-slow {
          animation: bounce-slow 1.6s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default IntroducingEco;
