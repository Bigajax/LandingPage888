// src/sections/MentoresStrip.tsx
import React, { useRef } from "react";
import marco   from "@/assets/mentores/marco-aurelio.png";
import seneca  from "@/assets/mentores/seneca.png";
import daniel  from "@/assets/mentores/daniel-kahneman.png";
import nassim  from "@/assets/mentores/nassim-taleb.png";
import brene   from "@/assets/mentores/brene-brown.png";
import joe     from "@/assets/mentores/joe-dispenza.png";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Reveal from "../components/Reveal";

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
    if (e.key === "ArrowRight") scrollBy(280);
    if (e.key === "ArrowLeft")  scrollBy(-280);
  };

  return (
    <section
      id="mentores"
      aria-labelledby="mentores-title"
      className="
        relative overflow-hidden py-14 sm:py-20
        bg-[radial-gradient(120%_90%_at_20%_10%,#B59CFF_0%,#8F77FF_28%,#6E5BFF_55%,#4F46E5_78%,#2A2376_100%)]
      "
    >
      {/* halos decorativos */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -top-28 left-1/2 -translate-x-1/2 w-[120vw] h-[120vw] max-w-[1100px] rounded-full blur-3xl 
                        bg-[radial-gradient(circle,rgba(255,255,255,0.24)_0%,rgba(255,255,255,0.10)_45%,transparent_70%)]" />
        <div className="absolute top-1/3 left-[12%] w-[60vw] h-[60vw] rounded-full blur-[110px] opacity-45 
                        bg-[radial-gradient(circle,#FFB1E6_0%,transparent_65%)]" />
        <div className="absolute bottom-[-8%] right-[-6%] w-[55vw] h-[55vw] rounded-full blur-[110px] opacity-40 
                        bg-[radial-gradient(circle,#86D8FF_0%,transparent_70%)]" />
        <div className="absolute left-[-10%] top-[56%] w-[130%] h-[2px] -rotate-[14deg]
                        bg-gradient-to-r from-transparent via-white/55 to-transparent blur-[2px] opacity-80" />
        <div className="absolute left-[-8%] top-[58%] w-[130%] h-[1px] -rotate-[14deg]
                        bg-gradient-to-r from-transparent via-[#B58CFF]/50 to-transparent blur-[3px] opacity-60" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-5">
        {/* Título + mensagem de valor */}
        <div className="text-center mb-8 sm:mb-12">
          <Reveal
            as="span"
            index={0}
            duration={780}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs sm:text-sm font-medium text-white/90 bg-white/10 border border-white/20 backdrop-blur"
          >
            Referências • Base das respostas
          </Reveal>

          <Reveal
            as="h2"
            index={1}
            duration={860}
            className="mt-4 heading-lg font-semibold text-white"
            id="mentores-title"
          >
            <span className="text-white">Grandes mentes.</span>
            <span className="text-white/70"> As ideias que inspiram a Eco.</span>
          </Reveal>

          <Reveal
            as="p"
            index={2}
            duration={900}
            className="text-white/90 max-w-2xl mx-auto mt-3 text-sm sm:text-base"
          >
            A Eco não dá respostas genéricas: usa princípios de <span className="font-medium">filosofia</span>,{" "}
            <span className="font-medium">psicologia</span> e <span className="font-medium">ciência</span> para orientar reflexões
            mais humanas, profundas e confiáveis.
          </Reveal>
        </div>

        {/* SETAS mobile */}
        <div className="md:hidden relative h-0">
          <div className="absolute inset-x-0 -top-10 flex justify-between px-2">
            <button
              type="button"
              onClick={() => scrollBy(-280)}
              aria-label="Ver anteriores"
              className="inline-flex items-center justify-center h-9 w-9 rounded-full bg-white/15 text-white backdrop-blur hover:bg-white/25 active:scale-95"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              type="button"
              onClick={() => scrollBy(280)}
              aria-label="Ver próximos"
              className="inline-flex items-center justify-center h-9 w-9 rounded-full bg-white/15 text-white backdrop-blur hover:bg-white/25 active:scale-95"
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
            md:grid md:grid-cols-6 md:gap-6
            flex gap-6 overflow-x-auto md:overflow-visible
            snap-x snap-mandatory pb-4 -mx-5 px-5 md:mx-0 md:px-0
            scroll-smooth
          "
        >
          {MENTORES.map((m, index) => (
            <Reveal
              as="figure"
              key={m.name}
              index={index}
              delayOffset={160}
              duration={860}
              className="snap-center shrink-0 w-[240px] sm:w-[260px] md:w-auto md:shrink md:snap-none group"
            >
              <div
                className="
                  relative rounded-3xl overflow-hidden
                  bg-white/8 border border-white/20 backdrop-blur-md
                  shadow-[0_8px_28px_rgba(0,0,0,0.25)]
                  motion-safe:transition-transform motion-safe:duration-300 group-hover:-translate-y-1
                "
              >
                <div className="relative w-full aspect-[3/4] flex items-end justify-center">
                  <img
                    src={m.src}
                    alt={m.name}
                    decoding="async"
                    loading={index < 2 ? undefined : "lazy"}
                    fetchpriority={index === 0 ? ("high" as const) : ("auto" as const)}
                    className="w-full h-[90%] object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.33)]"
                  />
                  <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#2A2376]/70 to-transparent" />
                </div>

                <figcaption className="p-4 text-center">
                  {/* badge pilar */}
                  <div className="mb-1 flex items-center justify-center gap-1 text-[11px] text-white/85">
                    <span className="px-2 py-0.5 rounded-full bg-white/10 border border-white/20 backdrop-blur">
                      {PILLAR_ICON[m.pillar]} {m.pillar}
                    </span>
                  </div>

                  <div className="text-white font-medium text-[15px] leading-tight">{m.name}</div>
                  <div className="text-white/80 text-[12px]">{m.tag}</div>

                  {/* como aparece nas respostas */}
                  <p className="mt-2 text-[11.5px] leading-snug text-white/80">
                    {m.use}
                  </p>
                </figcaption>
              </div>
            </Reveal>
          ))}
        </div>

        {/* HINT mobile */}
        <Reveal
          as="p"
          index={MENTORES.length + 1}
          duration={780}
          className="md:hidden mx-auto mt-5 inline-flex items-center gap-2 px-3 py-1 rounded-full
                      bg-white/10 text-[11.5px] text-white/90 backdrop-blur-sm border border-white/20"
        >
          Deslize para ver mais
          <svg
            className="w-3.5 h-3.5 opacity-80 animate-[bounce-x_1.5s_infinite]"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M9 18l6-6-6-6" />
          </svg>
        </Reveal>

        {/* Caixinha de explicação — “Como a Eco usa isso” */}
        <Reveal
          as="div"
          index={MENTORES.length + 2}
          duration={880}
          className="
            mt-8 sm:mt-10 rounded-2xl px-4 sm:px-6 py-4 sm:py-5
            bg-white/10 text-white/90 backdrop-blur border border-white/20
            max-w-3xl mx-auto
          "
          aria-label="Como a Eco usa essas referências nas respostas"
        >
          <h3 className="font-medium mb-2">Como isso aparece na sua experiência</h3>
          <ul className="list-disc pl-5 space-y-1 text-sm">
            <li>
              <span className="font-medium">Perguntas e reflexões guiadas</span> inspiradas em filosofia e psicologia — nada de respostas vazias.
            </li>
            <li>
              <span className="font-medium">Reconhecimento de padrões</span> e vieses (Kahneman) para decisões mais conscientes.
            </li>
            <li>
              <span className="font-medium">Micro-ações práticas</span> (antifragilidade & neurociência) para transformar insight em mudança real.
            </li>
          </ul>
        </Reveal>
      </div>

      <style>{`
        @keyframes bounce-x { 0%,100% { transform: translateX(0) } 50% { transform: translateX(4px) } }
      `}</style>
    </section>
  );
};

export default MentoresStrip;
