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
  use: string;
};

const MENTORES: Mentor[] = [
  {
    name: "Marco Aurélio",
    tag: "Estoicismo",
    src: marco,
    pillar: "Filosofia",
    use: "Foco no que depende de você.",
  },
  {
    name: "Sêneca",
    tag: "Estoicismo",
    src: seneca,
    pillar: "Filosofia",
    use: "Serenidade prática no cotidiano.",
  },
  {
    name: "Daniel Kahneman",
    tag: "Psicologia comportamental",
    src: daniel,
    pillar: "Psicologia",
    use: "Vieses e padrões para escolhas conscientes.",
  },
  {
    name: "Brené Brown",
    tag: "Vulnerabilidade & coragem",
    src: brene,
    pillar: "Psicologia",
    use: "Autenticidade, autocompaixão e coragem.",
  },
  {
    name: "Nassim Taleb",
    tag: "Antifragilidade",
    src: nassim,
    pillar: "Ciência",
    use: "Crescer com o imprevisto.",
  },
  {
    name: "Dr. Joe Dispenza",
    tag: "Neurociência aplicada",
    src: joe,
    pillar: "Ciência",
    use: "Hábitos e atenção para reconfigurar estados.",
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
    if (e.key === "ArrowRight") scrollBy(260);
    if (e.key === "ArrowLeft")  scrollBy(-260);
  };

  return (
    <section
      id="mentores"
      aria-labelledby="mentores-title"
      className="
        relative overflow-hidden
        py-12 sm:py-16
        bg-[radial-gradient(120%_90%_at_20%_10%,#B59CFF_0%,#8F77FF_28%,#6E5BFF_55%,#4F46E5_78%,#2A2376_100%)]
      "
    >
      {/* halos suaves */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -top-28 left-1/2 -translate-x-1/2 w-[120vw] h-[120vw] max-w-[980px] rounded-full blur-3xl opacity-70
                        bg-[radial-gradient(circle,rgba(255,255,255,0.18)_0%,rgba(255,255,255,0.08)_45%,transparent_70%)]" />
        <div className="absolute top-1/3 left-[12%] w-[55vw] h-[55vw] rounded-full blur-[100px] opacity-40
                        bg-[radial-gradient(circle,#FFB1E6_0%,transparent_65%)]" />
        <div className="absolute bottom-[-8%] right-[-6%] w-[50vw] h-[50vw] rounded-full blur-[100px] opacity-35
                        bg-[radial-gradient(circle,#86D8FF_0%,transparent_70%)]" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-5">
        {/* Título + subtítulo enxutos */}
        <div className="text-center mb-8 sm:mb-10">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium text-white/90 bg-white/10 border border-white/20 backdrop-blur">
            Referências
          </span>

          <h2 id="mentores-title" className="mt-4 text-3xl sm:text-4xl font-semibold text-white tracking-tight">
            A base por trás da Eco.
          </h2>

          <p className="text-white/90 max-w-xl mx-auto mt-3 text-sm sm:text-[15px] leading-relaxed">
            Filosofia, psicologia e ciência orientam cada reflexão — clara, útil e confiável.
          </p>
        </div>

        {/* SETAS mobile */}
        <div className="md:hidden relative h-0">
          <div className="absolute inset-x-0 -top-9 flex justify-between px-2">
            <button
              type="button"
              onClick={() => scrollBy(-260)}
              aria-label="Ver anteriores"
              className="inline-flex items-center justify-center h-9 w-9 rounded-full bg-white/15 text-white backdrop-blur hover:bg-white/25 active:scale-95"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              type="button"
              onClick={() => scrollBy(260)}
              aria-label="Ver próximos"
              className="inline-flex items-center justify-center h-9 w-9 rounded-full bg-white/15 text-white backdrop-blur hover:bg-white/25 active:scale-95"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        {/* CARDS */}
        <div
          ref={railRef}
          role="region"
          aria-roledescription="carousel"
          aria-label="Mentores e referências"
          tabIndex={0}
          onKeyDown={onKeyDown}
          className="
            md:grid md:grid-cols-6 md:gap-5
            flex gap-5 overflow-x-auto md:overflow-visible
            snap-x snap-mandatory pb-2 -mx-4 px-4 md:mx-0 md:px-0
            scroll-smooth
          "
        >
          {MENTORES.map((m, index) => (
            <figure key={m.name} className="snap-center shrink-0 w-[220px] sm:w-[236px] md:w-auto md:shrink md:snap-none group">
              <div
                className="
                  relative rounded-3xl overflow-hidden
                  bg-white/8 border border-white/20 backdrop-blur-md
                  shadow-[0_8px_24px_rgba(0,0,0,0.22)]
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
                    className="w-full h-[88%] object-contain drop-shadow-[0_16px_36px_rgba(0,0,0,0.32)]"
                  />
                  <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#2A2376]/70 to-transparent" />
                </div>

                <figcaption className="p-3.5 text-center">
                  <div className="mb-1 flex items-center justify-center gap-1 text-[11px] text-white/85">
                    <span className="px-2 py-0.5 rounded-full bg-white/10 border border-white/20 backdrop-blur">
                      {PILLAR_ICON[m.pillar]} {m.pillar}
                    </span>
                  </div>

                  <div className="text-white font-medium text-[15px] leading-tight">{m.name}</div>
                  <div className="text-white/80 text-[12px]">{m.tag}</div>

                  <p className="mt-2 text-[11.5px] leading-snug text-white/80">
                    {m.use}
                  </p>
                </figcaption>
              </div>
            </figure>
          ))}
        </div>

        {/* Box final — curto */}
        <div
          className="
            mt-8 sm:mt-9 rounded-2xl px-4 sm:px-5 py-4
            bg-white/10 text-white/90 backdrop-blur border border-white/20
            max-w-2xl mx-auto
          "
          aria-label="Como a Eco usa essas referências nas respostas"
        >
          <h3 className="font-medium mb-2">Como isso aparece na sua experiência</h3>
          <ul className="list-disc pl-5 space-y-1 text-sm">
            <li><span className="font-medium">Perguntas guiadas</span> + reconhecimento de padrões.</li>
            <li><span className="font-medium">Micro-ações práticas</span> para transformação gradual.</li>
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
