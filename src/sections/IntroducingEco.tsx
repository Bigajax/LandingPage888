import React from "react";
import { Sparkles, Brain, LineChart, PlayCircle } from "lucide-react";
import EcoChat from "@/assets/images/Eco_chat.png";
import Orb from "@/components/Orb";

/** Card compacto inspirado na Apple Store — ícone limpo e sem "Saiba mais" */
function FeatureCard({
  Icon,
  title,
  desc,
}: {
  Icon: React.ElementType;
  title: string;
  desc: string;
}) {
  return (
    <div
      className="
        group rounded-2xl bg-white/95
        ring-1 ring-[#E7EAF6]
        shadow-[0_6px_18px_rgba(17,24,39,0.06)]
        hover:shadow-[0_14px_36px_rgba(17,24,39,0.10)]
        hover:ring-[#5B4BFF]/35
        transition-all duration-300 p-5
      "
      role="article"
      aria-label={title}
    >
      {/* Badge do ícone – duotone com ring suave */}
      <div className="relative h-10 w-10 grid place-items-center rounded-xl bg-gradient-to-br from-[#EFEFFF] to-[#F7F8FF] ring-1 ring-[#E6E9F6]">
        <div className="absolute inset-0 rounded-xl bg-[radial-gradient(80%_80%_at_30%_20%,rgba(91,75,255,0.18),transparent_55%)]" />
        <Icon size={20} strokeWidth={2} className="relative z-10 text-[#5B4BFF]" />
      </div>

      <h4 className="mt-3 text-[15px] font-semibold text-[#0F111A]">{title}</h4>
      <p className="mt-1.5 text-[13.5px] leading-relaxed text-[#4B5166]">{desc}</p>
    </div>
  );
}

const IntroducingEco: React.FC = () => {
  return (
    <section
      id="conheca-eco"
      className="
        relative overflow-hidden w-full
        bg-gradient-to-b from-white via-[#F7F9FF] to-white
        px-6 sm:px-10 lg:px-24 py-14 sm:py-18 lg:py-20
      "
    >
      {/* brilho sutil de fundo */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 right-1/3 w-[60vw] h-[60vw] rounded-full blur-[120px] opacity-70 bg-[radial-gradient(circle,#E9E8FF_0%,transparent_70%)]" />
      </div>

      {/* Título + subtítulo */}
      <div className="relative max-w-5xl mx-auto text-center mb-8 sm:mb-12">
        <h2 className="text-[30px] sm:text-[40px] lg:text-[48px] font-semibold tracking-tight text-[#0F111A]">
          Conheça a{" "}
          <span className="bg-gradient-to-r from-[#7C5CFF] to-[#5B4BFF] bg-clip-text text-transparent">
            Eco
          </span>
        </h2>
        <p className="mt-3 text-[15px] sm:text-[17px] text-[#4B4F5C]">
          Um espaço de <strong>escuta guiada</strong> para dar contorno ao que você sente — simples,
          visual e no seu tempo.
        </p>
      </div>

      {/* Grid principal */}
      <div className="relative max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
        {/* Texto */}
        <div className="order-2 lg:order-1">
          <p className="text-2xl sm:text-[28px] font-semibold text-[#0F111A] leading-snug">
            Você muda. <span className="text-[#5B4BFF]">A Eco muda com você.</span>
          </p>
          <p className="mt-2 text-[#2A2F3D] text-lg">Reflete. Escuta. Evolui.</p>

          <div className="mt-6 space-y-3 text-[15.5px] leading-relaxed text-[#40465A]">
            <p>
              A <span className="text-[#5B4BFF] font-medium">Eco</span> ajuda a{" "}
              <strong>nomear emoções</strong>, <strong>dar contorno</strong> ao que vem forte e{" "}
              <strong>organizar</strong> o momento.
            </p>
            <p>
              Cada registro vira uma <strong className="text-[#5B4BFF]">memória emocional</strong>{" "}
              (emoção, intensidade, tema e padrões).
            </p>
            <p>
              Com o tempo, nasce um{" "}
              <strong className="text-[#5B4BFF]">perfil emocional vivo</strong> e um{" "}
              <strong className="text-[#5B4BFF]">relatório visual</strong> com tendências, ciclos e
              marcos de evolução.
            </p>
          </div>

          {/* CTA único */}
          <div className="mt-7">
            <a
              href="https://ecofrontend888.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="
                relative inline-flex items-center justify-center rounded-full
                h-12 px-6 text-[14px] font-semibold text-white
                bg-gradient-to-b from-[#7C5CFF] to-[#5B4BFF]
                shadow-[0_14px_32px_rgba(91,75,255,0.34)]
                hover:brightness-[1.08] active:scale-[0.99] transition
              "
            >
              <PlayCircle size={18} className="mr-2 opacity-90" />
              Junte-se ao beta
              <span className="pointer-events-none absolute -inset-0.5 rounded-full bg-[radial-gradient(60%_60%_at_50%_50%,rgba(124,92,255,0.35),transparent)] blur-md" />
            </a>
          </div>
        </div>

        {/* Mock do app */}
        <div className="order-1 lg:order-2 relative flex items-center justify-center">
          {/* Orb/halo atrás do iPhone */}
          <div className="absolute inset-0 flex items-center justify-center -z-10">
            <div className="w-[260px] h-[260px] sm:w-[340px] sm:h-[340px] lg:w-[420px] lg:h-[420px] opacity-60">
              <Orb />
            </div>
          </div>
          {/* Placa de vidro */}
          <div aria-hidden className="absolute inset-0 flex items-center justify-center -z-10">
            <div
              className="
                w-[260px] h-[260px] sm:w-[340px] sm:h-[340px] lg:w-[420px] lg:h-[420px]
                rounded-[36px] bg-white/70 backdrop-blur
                ring-1 ring-white shadow-[0_24px_60px_rgba(17,24,39,0.12)]
              "
            />
          </div>
          <img
            src={EcoChat}
            alt="App Eco — tela inicial"
            className="
              w-[260px] sm:w-[300px] lg:w-[340px] h-auto
              rounded-[32px] ring-1 ring-black/5
              shadow-[0_20px_60px_rgba(17,24,39,0.18)]
            "
            draggable={false}
          />
        </div>
      </div>

      {/* Cards – Apple vibes */}
      <div className="relative max-w-6xl mx-auto mt-12 sm:mt-14">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
          <FeatureCard
            Icon={Sparkles}
            title="Memórias emocionais"
            desc="Registros com emoção, intensidade, tema e análise sensível."
          />
          <FeatureCard
            Icon={Brain}
            title="Perfil emocional"
            desc="Retrato vivo do que mais aparece e do que vem mudando."
          />
          <FeatureCard
            Icon={LineChart}
            title="Relatório visual"
            desc="Tendências, ciclos e picos — tudo claro e navegável."
          />
        </div>
      </div>
    </section>
  );
};

export default IntroducingEco;
