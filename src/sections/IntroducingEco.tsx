import React from "react";
import { PenLine, Sparkles, RefreshCw, Sprout } from "lucide-react";
import EcoChat from "@/assets/images/Eco_chat.png";
import { useScrollReveal } from "@/hooks/useScrollReveal";

type Feature = { Icon: React.ElementType; title: string; description: string };

const FEATURES: Feature[] = [
  { Icon: PenLine,  title: "Escrita expressiva",  description: "Dê forma ao que sente e alivie tensões." },
  { Icon: Sparkles, title: "Reflexão guiada",     description: "Perguntas que funcionam como espelho." },
  { Icon: RefreshCw,title: "Padrões revelados",   description: "O que se repete fica nítido no tempo." },
  { Icon: Sprout,   title: "Jornada pessoal",     description: "Pequenas doses no seu ritmo, evolução real." },
];

const Chip: React.FC<Feature> = ({ Icon, title, description }) => (
  <div
    className="
      rounded-2xl p-4 bg-white/60 border border-white/70 backdrop-blur-md
      shadow-[0_10px_30px_rgba(17,24,39,0.06)] hover:-translate-y-0.5 transition-all
    "
  >
    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-50 text-violet-600 ring-1 ring-white/60">
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
        <div ref={headRef} className={`text-center transition-all duration-700 ${fade(headVis)}`}>
          {/* Pílula melhorada */}
          <span
            className="
              inline-flex items-center gap-2 rounded-full border border-indigo-200/60
              bg-white/60 px-4 py-1 text-[11px] font-semibold uppercase tracking-[0.28em]
              text-slate-700 backdrop-blur shadow-[inset_0_1px_0_rgba(255,255,255,.8)]
            "
          >
            <span className="h-1.5 w-1.5 rounded-full bg-violet-500 shadow-[0_0_0_3px_rgba(139,92,246,0.18)]" />
            Como a Eco funciona
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
        <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-[1fr_auto_1fr] lg:items-center">
          {/* Chips esquerda */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-1">
            <Chip {...FEATURES[0]} />
            <Chip {...FEATURES[1]} />
          </div>

          {/* iPhone central + CTA + seta */}
          <div
            ref={phoneRef}
            className={`relative flex flex-col items-center transition-all duration-700 ${fade(phoneVis)}`}
          >
            {/* halo sutil atrás */}
            <div
              aria-hidden
              className="absolute -z-10 top-1/2 -translate-y-1/2 h-[360px] w-[360px] sm:h-[420px] sm:w-[420px]
                         rounded-full blur-2xl
                         bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.35),rgba(129,140,248,0.12)_55%,transparent_78%)]"
            />
            <img
              src={EcoChat}
              alt="Interface da Eco com escrita guiada"
              className="w-[270px] sm:w-[320px] lg:w-[360px] drop-shadow-[0_30px_70px_rgba(124,58,237,0.28)] select-none"
              draggable={false}
            />

            {/* Wrapper do CTA para ancorar a seta */}
            <div className="relative mt-6">
              {/* SETA apontando para o botão */}
              <div
                aria-hidden
                className="pointer-events-none absolute -top-10 left-1/2 -translate-x-1/2 animate-[floaty_1.8s_ease-in-out_infinite]"
              >
                <svg
                  width="120"
                  height="58"
                  viewBox="0 0 120 58"
                  fill="none"
                  className="opacity-95"
                >
                  {/* curva */}
                  <path
                    d="M10 10 C 35 40, 85 40, 60 52"
                    stroke="#ef4444"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                    fill="none"
                  />
                  {/* ponta da seta */}
                  <path d="M60 52 L53 44" stroke="#ef4444" strokeWidth="3.5" strokeLinecap="round" />
                  <path d="M60 52 L67 44" stroke="#ef4444" strokeWidth="3.5" strokeLinecap="round" />
                </svg>
              </div>

              {/* CTA preto */}
              <a
                href="https://ecofrontend888.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  inline-flex items-center justify-center rounded-full
                  bg-black px-8 py-3 text-sm font-semibold text-white
                  shadow-[0_18px_40px_rgba(2,6,23,0.25)]
                  hover:bg-zinc-900 hover:-translate-y-0.5 transition
                  focus:outline-none focus-visible:ring-2 focus-visible:ring-black/30
                  focus-visible:ring-offset-2 focus-visible:ring-offset-white
                "
              >
                Começar minha jornada
              </a>
            </div>
          </div>

          {/* Chips direita */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-1">
            <Chip {...FEATURES[2]} />
            <Chip {...FEATURES[3]} />
          </div>
        </div>
      </div>

      {/* animação da seta */}
      <style>{`
        @keyframes floaty {
          0%, 100% { transform: translate(-50%, -2px); }
          50%      { transform: translate(-50%,  2px); }
        }
      `}</style>
    </section>
  );
};

export default IntroducingEco;
