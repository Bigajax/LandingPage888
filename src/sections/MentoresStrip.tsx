// src/sections/MentoresStrip.tsx
import React, { useRef } from "react";
import marco   from "@/assets/mentores/marco-aurelio.png";
import seneca  from "@/assets/mentores/seneca.png";
import daniel  from "@/assets/mentores/daniel-kahneman.png";
import nassim  from "@/assets/mentores/nassim-taleb.png";
import brene   from "@/assets/mentores/brene-brown.png";
import joe     from "@/assets/mentores/joe-dispenza.png";
import { ChevronLeft, ChevronRight } from "lucide-react";

type Mentor = {
  name: string;
  tag: string;
  src: string;
  pillar: "Filosofia" | "Psicologia" | "Ciência";
  use: string; // como isso aparece nas respostas
};

const MENTORES: Mentor[] = [
  {
    name: "Marco Aurélio",
    tag: "Estoicismo",
    src: marco,
    pillar: "Filosofia",
    use: "Princípios estoicos para lidar com emoções e foco no que depende de você.",
  },
  {
    name: "Sêneca",
    tag: "Estoicismo",
    src: seneca,
    pillar: "Filosofia",
    use: "Perspectiva prática sobre adversidades e serenidade no cotidiano.",
  },
  {
    name: "Daniel Kahneman",
    tag: "Psicologia comportamental",
    src: daniel,
    pillar: "Psicologia",
    use: "Reconhecer vieses e padrões mentais para escolhas mais conscientes.",
  },
  {
    name: "Brené Brown",
    tag: "Vulnerabilidade & coragem",
    src: brene,
    pillar: "Psicologia",
    use: "Convites à autenticidade, autocompaixão e coragem emocional.",
  },
  {
    name: "Nassim Taleb",
    tag: "Antifragilidade",
    src: nassim,
    pillar: "Ciência",
    use: "Transformar incerteza em crescimento: micro-ações que fortalecem no tempo.",
  },
  {
    name: "Dr. Joe Dispenza",
    tag: "Neurociência aplicada",
    src: joe,
    pillar: "Ciência",
    use: "Hábitos e atenção como alavancas para reconfigurar estados emocionais.",
  },
];

const PILLAR_ICON: Record<Mentor["pillar"], string> = {
  Filosofia: "📜",
  Psicologia: "🧠",
  Ciência: "🔬",
};

const MentoresStrip: React.FC = () => {
  const railRef = useRef<HTMLDivElement>(null);

  const scrollBy = (delta: number) => railRef.current?.scrollBy({ left: delta, behavior: "smooth" });

  const onKeyDown: React.KeyboardEventHandler<HTMLDivElement> = (e) => {
    if (e.key === "ArrowRight") scrollBy(320);
    if (e.key === "ArrowLeft")  scrollBy(-320);
  };

  return (
    <section
      id="mentores"
      aria-labelledby="mentores-title"
      className="
        relative overflow-hidden py-20 sm:py-28
        bg-[radial-gradient(120%_100%_at_15%_0%,#B9A7FF_0%,#8D78FF_30%,#5D4BF7_63%,#281D7D_100%)]
      "
    >
      {/* halos decorativos */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div
          className="
            absolute -top-32 left-1/2 -translate-x-1/2 w-[140vw] h-[140vw] max-w-[1200px]
            rounded-full blur-[120px] opacity-80
            bg-[radial-gradient(circle,rgba(255,255,255,0.28)_0%,rgba(255,255,255,0.12)_40%,transparent_72%)]
          "
        />
        <div
          className="
            absolute left-[8%] top-[18%] w-[60vw] h-[60vw]
            rounded-full blur-[120px] opacity-50
            bg-[radial-gradient(circle,#FFBDF0_0%,transparent_68%)]
          "
        />
        <div
          className="
            absolute right-[-10%] bottom-[-16%] w-[70vw] h-[70vw]
            rounded-full blur-[130px] opacity-50
            bg-[radial-gradient(circle,#8BEEFF_0%,transparent_70%)]
          "
        />
        <div
          className="
            absolute inset-x-[-20%] top-[58%] h-[2px]
            bg-gradient-to-r from-transparent via-white/60 to-transparent opacity-75 blur-sm
          "
        />
        <div
          className="
            absolute inset-x-[-18%] top-[61%] h-[1px]
            bg-gradient-to-r from-transparent via-[#C0A6FF]/60 to-transparent opacity-70 blur
          "
        />
        <div
          className="
            absolute top-[12%] left-1/2 -translate-x-1/2 flex w-full max-w-5xl justify-between px-10
            opacity-60
          "
        >
          <span className="h-[2px] w-28 bg-gradient-to-r from-transparent via-white/60 to-white/10 blur-sm" />
          <span className="h-[2px] w-28 bg-gradient-to-l from-transparent via-white/60 to-white/10 blur-sm" />
        </div>
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-5">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.25fr)] items-start">
          {/* Título + mensagem de valor */}
          <div className="order-2 lg:order-1 text-center lg:text-left space-y-6">
            <span className="inline-flex items-center gap-2 self-start rounded-full border border-white/25 bg-white/10 px-4 py-1 text-xs font-medium uppercase tracking-[0.28em] text-white/80 backdrop-blur">
              Painel de Mentores
            </span>

            <div className="space-y-4">
              <h2 id="mentores-title" className="heading-lg font-semibold text-white">
                <span className="block text-base font-semibold uppercase tracking-[0.4em] text-white/50 lg:text-sm">
                  O coração da Eco
                </span>
                <span className="mt-2 block text-4xl leading-[1.15] text-white sm:text-5xl lg:max-w-lg">
                  A sala de ideias mais poderosa para guiar as suas decisões.
                </span>
              </h2>

              <p className="text-sm text-white/80 sm:text-base sm:leading-relaxed lg:max-w-lg">
                Esta seção é o centro criativo da Eco. Aqui, filosofia estoica, psicologia comportamental e ciência aplicada se unem para oferecer referências sólidas, sofisticadas e cheias de propósito a cada resposta que você recebe.
              </p>
            </div>

            <div className="grid gap-4 text-left sm:grid-cols-3">
              <div className="rounded-2xl border border-white/20 bg-white/10 px-4 py-5 backdrop-blur">
                <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-white/60">Filosofia</p>
                <p className="mt-2 text-sm text-white/90">Estoicismo para foco, presença e decisões com clareza emocional.</p>
              </div>
              <div className="rounded-2xl border border-white/20 bg-white/10 px-4 py-5 backdrop-blur">
                <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-white/60">Psicologia</p>
                <p className="mt-2 text-sm text-white/90">Coragem vulnerável e identificação de vieses que liberam o seu potencial.</p>
              </div>
              <div className="rounded-2xl border border-white/20 bg-white/10 px-4 py-5 backdrop-blur">
                <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-white/60">Ciência</p>
                <p className="mt-2 text-sm text-white/90">Neurociência e antifragilidade traduzidas em micro-ações transformadoras.</p>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            {/* SETAS mobile */}
            <div className="relative mb-6 md:hidden">
              <div className="absolute inset-x-0 -top-5 flex justify-between px-2">
                <button
                  type="button"
                  onClick={() => scrollBy(-320)}
                  aria-label="Ver anteriores"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/30 bg-white/15 text-white backdrop-blur hover:bg-white/25 active:scale-95"
                >
                  <ChevronLeft size={18} />
                </button>
                <button
                  type="button"
                  onClick={() => scrollBy(320)}
                  aria-label="Ver próximos"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/30 bg-white/15 text-white backdrop-blur hover:bg-white/25 active:scale-95"
                >
                  <ChevronRight size={18} />
                </button>
              </div>
            </div>

            {/* CARDS: carrossel mobile / grid desktop */}
            <div
              ref={railRef}
              role="region"
              aria-roledescription="carousel"
              aria-label="Mentores e referências"
              tabIndex={0}
              onKeyDown={onKeyDown}
              className="
                flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-6 -mx-5 px-5
                md:mx-0 md:flex-none md:overflow-visible md:px-0 md:grid md:grid-cols-2 md:gap-8 xl:grid-cols-3
              "
            >
              {MENTORES.map((m, index) => (
                <figure
                  key={m.name}
                  className="group snap-center shrink-0 w-[260px] sm:w-[280px] md:w-auto md:shrink md:snap-none"
                >
                  <div
                    className="
                      relative overflow-hidden rounded-[28px]
                      border border-white/25 bg-white/10 backdrop-blur-xl
                      shadow-[0_18px_45px_rgba(15,11,54,0.45)]
                      transition-transform duration-500 ease-out group-hover:-translate-y-1.5
                    "
                  >
                    <div className="relative w-full aspect-[4/5] flex items-end justify-center pb-6">
                      <div className="pointer-events-none absolute inset-x-12 bottom-6 h-24 rounded-full bg-white/10 blur-3xl" />
                      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#221862]/90 via-[#221862]/40 to-transparent" />
                      <img
                        src={m.src}
                        alt={m.name}
                        decoding="async"
                        loading={index < 2 ? undefined : "lazy"}
                        fetchpriority={index === 0 ? ("high" as const) : ("auto" as const)}
                        className="w-[78%] max-w-[320px] object-contain drop-shadow-[0_28px_50px_rgba(0,0,0,0.45)]"
                      />
                      <span className="pointer-events-none absolute inset-x-[18%] bottom-4 h-[3px] rounded-full bg-gradient-to-r from-white/20 via-white/70 to-white/20 opacity-80" />
                    </div>

                    <figcaption className="px-6 pb-6 text-center">
                      {/* badge pilar */}
                      <div className="mb-2 flex items-center justify-center gap-2 text-[11px] text-white/85">
                        <span className="rounded-full border border-white/20 bg-white/10 px-3 py-1 backdrop-blur">
                          {PILLAR_ICON[m.pillar]} {m.pillar}
                        </span>
                      </div>

                      <div className="text-[16px] font-semibold leading-tight text-white">{m.name}</div>
                      <div className="text-[13px] text-white/75">{m.tag}</div>

                      {/* como aparece nas respostas */}
                      <p className="mt-3 text-[12.5px] leading-snug text-white/80">
                        {m.use}
                      </p>
                    </figcaption>
                  </div>
                </figure>
              ))}
            </div>

            {/* HINT mobile */}
            <p
              className="md:hidden mx-auto mt-6 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/15 px-3 py-1 text-[11.5px] text-white/90 backdrop-blur-sm"
            >
              Deslize para ver mais
              <svg
                className="h-3.5 w-3.5 opacity-80 animate-[bounce-x_1.5s_infinite]"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M9 18l6-6-6-6" />
              </svg>
            </p>
          </div>
        </div>

        {/* Caixinha de explicação — “Como a Eco usa isso” */}
        <div
          className="
            mt-12 rounded-3xl border border-white/20 bg-white/10 px-5 py-6 text-white/90 backdrop-blur
            md:mt-14 md:px-8 md:py-8 lg:ml-auto lg:max-w-2xl
          "
          aria-label="Como a Eco usa essas referências nas respostas"
        >
          <h3 className="text-lg font-semibold text-white">Como essas vozes moldam sua jornada</h3>
          <ul className="mt-3 space-y-2 text-sm leading-relaxed">
            <li>
              <span className="font-medium">Perguntas e reflexões guiadas</span> nascem do cruzamento entre filosofia e psicologia — nada de respostas genéricas.
            </li>
            <li>
              <span className="font-medium">Reconhecimento de padrões</span> e vieses (Kahneman) para ampliar consciência e escolhas.
            </li>
            <li>
              <span className="font-medium">Micro-ações práticas</span> com base em antifragilidade e neurociência para transformar insight em mudança real.
            </li>
          </ul>
        </div>
      </div>

      <style>{`
        @keyframes bounce-x { 0%,100% { transform: translateX(0) } 50% { transform: translateX(4px) } }
      `}</style>
    </section>
  );
};

export default MentoresStrip;
