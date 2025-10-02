import React from "react";
import { PenLine, Sparkles, RefreshCw, Sprout } from "lucide-react";
import EcoChat from "@/assets/images/Eco_chat.png";
import { useScrollReveal } from "@/hooks/useScrollReveal";

/* acessibilidade: respeita prefers-reduced-motion */
const usePrefersReducedMotion = () => {
  const [prefersReducedMotion, setPrefersReducedMotion] = React.useState(false);
  React.useEffect(() => {
    if (typeof window === "undefined") return;
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setPrefersReducedMotion(mq.matches);
    update();
    mq.addEventListener?.("change", update);
    return () => mq.removeEventListener?.("change", update);
  }, []);
  return prefersReducedMotion;
};

type Feature = {
  Icon: React.ElementType;
  title: string;
  description: string;
};

const features: Feature[] = [
  { Icon: PenLine,  title: "Escrita expressiva",       description: "Dê forma ao que sente e alivie tensões." },
  { Icon: Sparkles, title: "Reflexão guiada",          description: "Perguntas que funcionam como espelho." },
  { Icon: RefreshCw,title: "Padrões revelados",        description: "Emoções recorrentes ficam nítidas no tempo." },
  { Icon: Sprout,   title: "Jornada pessoal",          description: "Pequenas doses no seu ritmo, evolução real." },
];

const FeatureCard: React.FC<Feature & { i: number; visible: boolean; reduce: boolean }> = ({
  Icon, title, description, i, visible, reduce
}) => {
  const base = reduce ? "" : "transition-all duration-700 ease-out";
  const vis  = reduce ? "opacity-100" : visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4";
  return (
    <div
      className={`group rounded-3xl border border-white/60 bg-white/55 p-6 shadow-[0_18px_50px_rgba(148,163,184,0.18)] backdrop-blur-md hover:-translate-y-1 hover:shadow-[0_28px_70px_rgba(129,140,248,0.28)] ${base} ${vis}`}
      style={!reduce && visible ? { transitionDelay: `${0.15 + i * 0.07}s` } : undefined}
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
  const reduce = usePrefersReducedMotion();

  const { ref: topRef,    isVisible: topVisible }    = useScrollReveal();
  const { ref: phoneRef,  isVisible: phoneVisible }  = useScrollReveal();
  const { ref: gridRef,   isVisible: gridVisible }   = useScrollReveal();

  const base = reduce ? "" : "transition-all duration-700 ease-out";
  const getVis = (v: boolean) => (reduce ? "opacity-100" : v ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6");
  const getDelay = (v: boolean, d: number) => (!reduce && v ? { transitionDelay: `${d}s` } : undefined);

  return (
    <section
      id="conheca-eco"
      aria-labelledby="introducing-eco-title"
      className="relative overflow-hidden py-24 sm:py-28
                 bg-[radial-gradient(circle_at_top_left,rgba(168,141,255,0.22),transparent_55%),radial-gradient(circle_at_bottom_right,rgba(111,196,255,0.18),transparent_65%)]"
    >
      {/* wash de luz suave */}
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(135deg,rgba(250,250,255,0.96)_0%,rgba(246,248,255,0.88)_45%,rgba(255,255,255,0.96)_100%)]" />

      <div className="relative mx-auto max-w-6xl px-6">
        {/* Cabeçalho centralizado + pill em glass */}
        <div
          ref={topRef}
          className={`text-center ${base} ${getVis(topVisible)}`}
          style={getDelay(topVisible, 0.05)}
        >
          <span
            className="inline-flex items-center rounded-full border border-white/60 bg-white/45 px-4 py-1
                       text-xs font-medium uppercase tracking-[0.28em] text-slate-700 backdrop-blur"
          >
            Por dentro do Eco
          </span>

          <h2
            id="introducing-eco-title"
            className="mt-5 text-4xl font-semibold tracking-tight text-slate-900 sm:text-[2.7rem] sm:leading-[1.06]"
          >
            Conheça a Eco.
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-lg leading-relaxed text-slate-600">
            Um espaço simples para escrever, refletir e enxergar padrões —
            transformando insight em mudança real.
          </p>
        </div>

        {/* iPhone no centro, sem cartão (apenas halo) */}
        <div
          ref={phoneRef}
          className={`relative mx-auto mt-10 flex justify-center ${base} ${getVis(phoneVisible)}`}
          style={getDelay(phoneVisible, 0.12)}
          aria-label="Visual do app Eco"
        >
          {/* halo sutil atrás do phone */}
          <div
            aria-hidden
            className="absolute -z-10 top-1/2 -translate-y-1/2 h-[380px] w-[380px] sm:h-[440px] sm:w-[440px]
                       rounded-full bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.35),rgba(129,140,248,0.10)_55%,transparent_75%)]
                       blur-2xl"
          />
          <img
            src={EcoChat}
            alt="Interface da Eco com escrita guiada"
            className="w-[270px] sm:w-[320px] lg:w-[360px] drop-shadow-[0_30px_70px_rgba(124,58,237,0.30)] select-none"
            draggable={false}
          />
        </div>

        {/* grid de features + CTA preto integrado */}
        <div
          ref={gridRef}
          className={`mx-auto mt-12 max-w-4xl ${base} ${getVis(gridVisible)}`}
          style={getDelay(gridVisible, 0.18)}
        >
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {features.map((f, i) => (
              <FeatureCard
                key={f.title}
                Icon={f.Icon}
                title={f.title}
                description={f.description}
                i={i}
                visible={gridVisible}
                reduce={reduce}
              />
            ))}
          </div>

          {/* CTA escuro e alinhado ao conjunto (nada “solto”) */}
          <div className="mt-8 text-center">
            <a
              href="https://ecofrontend888.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center justify-center rounded-full bg-black px-8 py-3
                          text-sm font-semibold text-white shadow-[0_18px_40px_rgba(2,6,23,0.25)]
                          transition focus:outline-none focus-visible:ring-2 focus-visible:ring-black/30
                          focus-visible:ring-offset-2 focus-visible:ring-offset-white
                          ${reduce ? "" : "hover:-translate-y-0.5 hover:bg-zinc-900"}`}
              aria-label="Começar minha jornada no Eco"
            >
              Começar minha jornada
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroducingEco;
