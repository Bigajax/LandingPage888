import React from "react";
import { PenLine, Sparkles, RefreshCw, Sprout, PlayCircle } from "lucide-react";
import EcoChat from "@/assets/images/Eco_chat.png";
import Orb from "../components/Orb";

/** Card compacto — igual ao restante do site */
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
        ring-1 ring-[#DCDFFB]
        shadow-[0_6px_18px_rgba(17,24,39,0.06)]
        hover:shadow-[0_16px_40px_rgba(17,24,39,0.10)]
        hover:ring-[#7C5CFF]/30
        transition-all duration-300 p-5
      "
      role="article"
      aria-label={title}
    >
      <div className="relative h-10 w-10 grid place-items-center rounded-xl bg-gradient-to-br from-[#F1EFFF] to-[#FAFAFF] ring-1 ring-[#E6E1F9]">
        <div className="absolute inset-0 rounded-xl bg-[radial-gradient(80%_80%_at_30%_20%,rgba(124,92,255,0.18),transparent_55%)]" />
        <Icon size={20} strokeWidth={2} className="relative z-10 text-[#7C5CFF]" />
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
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-40 right-1/3 w-[60vw] h-[60vw] rounded-full blur-[120px] opacity-70 bg-[radial-gradient(circle,#E9E8FF_0%,transparent_70%)]" />
      </div>

      {/* Título + subtítulo */}
      <div className="relative w-full max-w-7xl mx-auto text-left mb-8 sm:mb-12">
        <h2 className="text-[26px] sm:text-4xl md:text-[44px] font-semibold leading-tight tracking-tight">
          <span className="text-zinc-900">Conheça a </span>
          <span className="bg-gradient-to-r from-[#9B8CFF] to-[#7C5CFF] bg-clip-text text-transparent">Eco</span>
        </h2>
        <p className="mt-2 text-zinc-500 text-[15px] sm:text-[17px] max-w-3xl">
          Um espaço simples e guiado para escrever, refletir e enxergar padrões — criando condições reais para mudança.
        </p>
      </div>

      {/* Grid principal */}
      <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
        {/* Texto */}
        <div className="order-2 lg:order-1">
          <p className="text-2xl sm:text-[28px] font-semibold text-[#0F111A] leading-snug">
            Você muda. <span className="text-zinc-900">A </span>
            <span className="bg-gradient-to-r from-[#9B8CFF] to-[#7C5CFF] bg-clip-text text-transparent">Eco</span>
            <span className="text-zinc-900"> cria as condições.</span>
          </p>
          <p className="mt-2 text-[#2A2F3D] text-lg">Escreva. Reflita. Veja-se com mais clareza.</p>

          <ul className="mt-6 space-y-3 text-[15.5px] leading-relaxed text-[#40465A]">
            <li>
              <span className="font-medium text-[#0F111A]">Ato de escrita expressiva:</span> dar forma ao que sente já
              organiza a mente e alivia tensões.
            </li>
            <li>
              <span className="font-medium text-[#0F111A]">Reflexão guiada & insights:</span> perguntas que funcionam
              como espelho, revelando o que estava oculto.
            </li>
            <li>
              <span className="font-medium text-[#0F111A]">Padrões que se revelam:</span> emoções recorrentes, ciclos e
              mudanças ficam nítidos ao longo do tempo.
            </li>
            <li>
              <span className="font-medium text-[#0F111A]">Jornada de autoconhecimento:</span> pequenas pílulas, no seu
              ritmo, somando evolução real.
            </li>
          </ul>

          {/* CTA */}
          <div className="mt-7">
            <a
              href="https://ecofrontend888.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="
                relative inline-flex items-center justify-center rounded-full
                h-12 px-6 text-[14px] font-semibold text-white
                bg-gradient-to-b from-[#9B8CFF] to-[#7C5CFF]
                shadow-[0_12px_28px_rgba(124,92,255,0.28)]
                hover:brightness-[1.08] active:scale-[0.99] transition
              "
            >
              <PlayCircle size={18} className="mr-2 opacity-90" />
              Começar minha jornada
              <span className="pointer-events-none absolute -inset-0.5 rounded-full bg-[radial-gradient(60%_60%_at_50%_50%,rgba(124,92,255,0.35),transparent)] blur-md" />
            </a>
          </div>

          <p className="mt-3 text-[12px] text-[#6B7280]">
            Não é sobre mudar de uma vez. É sobre criar condições para que você mude no seu tempo.
          </p>
        </div>

        {/* PHONE — apenas halo + orb (sem “segunda placa”) */}
        <div className="order-1 lg:order-2 relative flex items-center justify-center">
          {/* Halo roxo suave (não parece card) */}
          <div aria-hidden className="absolute inset-0 z-0 flex items-center justify-center">
            <div
              className="
                w-[260px] h-[260px] sm:w-[340px] sm:h-[340px] lg:w-[420px] lg:h-[420px]
                rounded-full blur-[48px] opacity-70
                bg-[radial-gradient(circle,rgba(155,140,255,0.35)_0%,rgba(124,92,255,0.18)_42%,transparent_72%)]
              "
            />
          </div>

          {/* ORB (cor roxa viva) */}
          <div className="absolute inset-0 z-10 flex items-center justify-center">
            <div className="w-[260px] h-[260px] sm:w-[340px] sm:h-[340px] lg:w-[420px] lg:h-[420px] pointer-events-none">
              {/* Sem mix-blend; o shader já tem alpha correto */}
              <Orb hue={265} hoverIntensity={0.45} forceHoverState />
            </div>
          </div>

          {/* Telefone */}
          <div className="group relative z-20 [perspective:1200px]">
            <div
              className="
                relative rounded-[32px]
                transition-transform duration-500 ease-out
                group-hover:-translate-y-0.5 group-hover:scale-[1.012]
                group-hover:[transform:rotateX(2deg)_rotateY(-2deg)]
                shadow-[0_20px_60px_rgba(17,24,39,0.18)]
              "
            >
              <img
                src={EcoChat}
                alt="App Eco — tela inicial"
                className="w-[260px] sm:w-[300px] lg:w-[340px] h-auto rounded-[32px] ring-1 ring-black/5 block"
                draggable={false}
              />

              {/* brilho / vinheta */}
              <span aria-hidden className="pointer-events-none absolute inset-0 rounded-[32px] overflow-hidden">
                <span
                  className="
                    absolute -top-6 -left-10 h-[160%] w-[60%] rotate-[-18deg]
                    bg-[linear-gradient(90deg,rgba(255,255,255,0.00)_0%,rgba(255,255,255,0.35)_45%,rgba(255,255,255,0.06)_70%,rgba(255,255,255,0.00)_100%)]
                    opacity-70 group-hover:opacity-90 transition-opacity duration-500 rounded-3xl
                  "
                />
                <span className="absolute inset-0 rounded-[32px] bg-[radial-gradient(125%_110%_at_50%_0%,rgba(0,0,0,0.06),transparent_60%)]" />
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Cards – 4 pilares */}
      <div className="relative max-w-7xl mx-auto mt-12 sm:mt-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          <FeatureCard Icon={PenLine} title="Escrita expressiva" desc="Escrever com honestidade organiza pensamentos e reduz a névoa emocional." />
          <FeatureCard Icon={Sparkles} title="Reflexão guiada" desc="Respostas sensíveis com perguntas que fazem pensar e revelam novos ângulos." />
          <FeatureCard Icon={RefreshCw} title="Padrões no tempo" desc="Veja emoções que se repetem, ciclos e mudanças sutis — de forma simples." />
          <FeatureCard Icon={Sprout} title="Jornada contínua" desc="Pequenas pílulas no seu ritmo, gerando clareza e evolução prática." />
        </div>
      </div>
    </section>
  );
};

export default IntroducingEco;
