import React from "react";

/** ajuste os caminhos se suas imagens estiverem em /public */
const MENTORES = [
  { name: "Marco Aurélio", tag: "Estoicismo", src: "/src/assets/mentores/marco-aurelio.png" },
  { name: "Sêneca", tag: "Estoicismo", src: "/src/assets/mentores/seneca.png" },
  { name: "Daniel Kahneman", tag: "Psicologia comportamental", src: "/src/assets/mentores/daniel-kahneman.png" },
  { name: "Nassim Taleb", tag: "Antifragilidade", src: "/src/assets/mentores/nassim-taleb.png" },
  { name: "Brené Brown", tag: "Vulnerabilidade & coragem", src: "/src/assets/mentores/brene-brown.png" },
  { name: "Dr. Joe Dispenza", tag: "Neurociência aplicada", src: "/src/assets/mentores/joe-dispenza.png" },
];

const MentoresStrip: React.FC = () => {
  return (
    <section
      id="mentores"
      aria-labelledby="mentores-title"
      className="relative overflow-hidden bg-[#5B4BFF] py-14 sm:py-20"
    >
      {/* glow geral do fundo */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[120vw] h-[120vw] max-w-[1100px] rounded-full blur-3xl bg-[radial-gradient(circle,rgba(255,255,255,0.18)_0%,rgba(255,255,255,0.08)_45%,transparent_70%)]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-5">
        {/* título */}
        <div className="text-center mb-8 sm:mb-12">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs sm:text-sm font-medium text-white/90 bg-white/10 border border-white/20 backdrop-blur">
            Referências da Eco
          </span>
          <h2
            id="mentores-title"
            className="text-white text-2xl sm:text-4xl font-semibold tracking-tight mt-4"
          >
            Inspirada por grandes mentes
          </h2>
          <p className="text-indigo-100/90 max-w-2xl mx-auto mt-3 text-sm sm:text-base">
            Filosofia, psicologia e ciência que embasam nossas reflexões.
          </p>
        </div>

        {/* carrossel no mobile / grid no desktop, sem cards */}
        <div
          className="
            md:grid md:grid-cols-6 md:gap-6
            flex gap-6 overflow-x-auto md:overflow-visible
            snap-x snap-mandatory pb-2 -mx-5 px-5 md:mx-0 md:px-0
          "
        >
          {MENTORES.map((m) => (
            <figure
              key={m.name}
              className="snap-start shrink-0 w-[220px] sm:w-[260px] md:w-auto md:shrink md:snap-none"
            >
              <div className="relative">
                {/* glow atrás de cada escultura (bem sutil) */}
                <div
                  aria-hidden
                  className="absolute -z-10 inset-0 translate-y-2 bg-[radial-gradient(60%_55%_at_50%_40%,rgba(255,255,255,0.22),transparent)]"
                />
                {/* imagem grande, sem moldura */}
                <div className="
                  relative mx-auto
                  h-[52vw] max-h-[360px] min-h-[280px]
                  md:h-[340px] md:max-h-none
                ">
                  <img
                    src={m.src}
                    alt={m.name}
                    loading="lazy"
                    className="
                      w-full h-full object-contain
                      drop-shadow-[0_30px_60px_rgba(0,0,0,0.35)]
                    "
                  />
                  {/* fade na base para integrar ao roxo */}
                  <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#5B4BFF] to-transparent" />
                </div>
              </div>

              {/* legenda minimal */}
              <figcaption className="mt-3 text-center">
                <div className="text-white font-medium leading-tight">{m.name}</div>
                <div className="text-indigo-100/80 text-xs mt-1">{m.tag}</div>
              </figcaption>
            </figure>
          ))}
        </div>

        <p className="md:hidden text-indigo-100/70 text-center text-xs mt-4">Arraste para ver mais →</p>
      </div>
    </section>
  );
};

export default MentoresStrip;
