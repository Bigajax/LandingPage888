import React, { useState } from "react";
import type { LucideIcon } from "lucide-react";
import { Sparkles, Smile, BarChart2, Mic, Volume2, Waves, Play, Square, StopCircle } from "lucide-react";
import RelatorioMemoriasImg from "@/assets/images/relatorio+memorias.png";
import { useScrollReveal } from "../hooks/useScrollReveal";

const COLOR = "#5B4BFF";

/* ---------- UI atoms ---------- */
const IconBadge: React.FC<{ active?: boolean; children: React.ReactNode }> = ({ active, children }) => (
  <span
    data-active={active}
    className="
      relative grid place-items-center
      w-9 h-9 sm:w-10 sm:h-10 rounded-lg
      bg-[linear-gradient(180deg,rgba(255,255,255,0.18),rgba(255,255,255,0.06))]
      backdrop-blur-md border border-white/20
      shadow-[inset_0_1px_0_rgba(255,255,255,0.45)]
      data-[active=true]:border-[rgba(91,75,255,0.35)]
      data-[active=true]:shadow-[inset_0_1px_0_rgba(255,255,255,0.55)]
      transition-all duration-200
    "
    aria-hidden
  >
    <i className="pointer-events-none absolute inset-0 rounded-lg opacity-70 bg-[radial-gradient(120%_120%_at_15%_10%,rgba(255,255,255,0.55),rgba(255,255,255,0)_55%)]" />
    {children}
  </span>
);

const TabButton: React.FC<{
  title: string;
  active: boolean;
  onClick: () => void;
  Icon: LucideIcon;
}> = ({ title, active, onClick, Icon }) => (
  <button
    type="button"
    aria-pressed={active}
    onClick={onClick}
    data-active={active}
    className={`
      group relative flex items-center gap-3
      w-full px-4 py-2.5 sm:px-5 sm:py-3
      rounded-xl text-[15px] sm:text-base font-medium
      bg-white/75 border border-white/40
      hover:bg-white/90
      transition-all duration-200
      focus:outline-none focus-visible:ring-2 focus-visible:ring-[${COLOR}] focus-visible:ring-opacity-20
      data-[active=true]:bg-white data-[active=true]:border-transparent
    `}
  >
    <span
      className="
        absolute left-0 top-0 bottom-0 w-[3px] rounded-l-xl
        bg-gradient-to-b from-[#7C6BFF] to-[#B3AEFF]
        opacity-0 data-[active=true]:opacity-100 transition-opacity duration-200
      "
    />
    <IconBadge active={active}>
      <Icon
        size={18}
        strokeWidth={1.75}
        absoluteStrokeWidth
        shapeRendering="geometricPrecision"
        className={active ? "text-[#5B4BFF]" : "text-neutral-700"}
      />
    </IconBadge>

    <span className={`truncate ${active ? "text-[#5B4BFF]" : "text-neutral-800"}`}>
      {title}
    </span>
  </button>
);

/* ---------- Content ---------- */
type TabId = "memorias" | "perfil" | "relatorio" | "voz" | "tts" | "conversa";
type Tab = {
  id: TabId;
  title: string;
  Icon: LucideIcon;
  description: React.ReactNode;
};

const TABS: Tab[] = [
  {
    id: "memorias",
    title: "Memórias emocionais",
    Icon: Sparkles,
    description: (
      <>
        A Eco registra <strong className="text-[#5B4BFF]">momentos marcantes</strong> com emoção
        presente, <strong className="text-[#5B4BFF]">tags-chave</strong>, domínio da vida e uma análise
        sensível. Cada memória se torna um <strong className="text-[#5B4BFF]">reflexo</strong> do que te
        atravessa.
      </>
    ),
  },
  {
    id: "perfil",
    title: "Perfil emocional",
    Icon: Smile,
    description: (
      <>
        A Eco identifica as <strong className="text-[#5B4BFF]">emoções recorrentes</strong> da sua
        jornada e organiza em um <strong className="text-[#5B4BFF]">retrato emocional</strong> que
        evolui com você.
      </>
    ),
  },
  {
    id: "relatorio",
    title: "Relatório emocional",
    Icon: BarChart2,
    description: (
      <>
        Visualize sua jornada em dois painéis: um{" "}
        <strong className="text-[#5B4BFF]">mapa emocional</strong> com zonas de maior atividade e uma{" "}
        <strong className="text-[#5B4BFF]">linha do tempo</strong> com os momentos mais intensos.
      </>
    ),
  },

  /* -------- Novas abas de VOZ -------- */
  {
    id: "voz",
    title: "Diário por voz",
    Icon: Mic,
    description: (
      <>
        Fale com a Eco e <strong className="text-[#5B4BFF]">registre por voz</strong>. Nós transcrevemos,
        analisamos a emoção e salvamos como memória — perfeito para quem prefere falar a digitar.
      </>
    ),
  },
  {
    id: "tts",
    title: "Voz da Eco",
    Icon: Volume2,
    description: (
      <>
        Ouça as respostas da Eco em <strong className="text-[#5B4BFF]">áudio natural</strong> com
        entonação suave (ElevenLabs). Ideal para reflexões no caminho, na academia ou antes de dormir.
      </>
    ),
  },
  {
    id: "conversa",
    title: "Conversa em voz",
    Icon: Waves,
    description: (
      <>
        Um modo contínuo de <strong className="text-[#5B4BFF]">fala ↔ escuta</strong>: você fala, a Eco
        transcreve, responde e lê em voz alta — uma experiência fluida de conversa.
      </>
    ),
  },
];

/* ---------- Section ---------- */
const EmotionalReportSection: React.FC = () => {
  const { ref, isVisible } = useScrollReveal();
  const [activeTab, setActiveTab] = useState<TabId>("memorias");

  const active = TABS.find((t) => t.id === activeTab);

  // placeholders para você plugar nas suas funções reais
  const startRecording = () => {
    // conectar ao seu VoiceRecorder/AssemblyAI/Whisper
    console.log("startRecording()");
  };
  const stopRecording = () => {
    console.log("stopRecording()");
  };
  const playTTS = () => {
    // chamar sua rota /tts (ElevenLabs)
    console.log("playTTS()");
  };

  const isVoicePreview = activeTab === "voz" || activeTab === "tts" || activeTab === "conversa";

  return (
    <section
      ref={ref}
      className="
        relative w-full overflow-hidden
        bg-gradient-to-br from-[#F7F9FC] to-[#EEF3FF]
        py-16 sm:py-20 px-4 sm:px-6 md:px-8
      "
    >
      <div className="mx-auto w-full max-w-7xl">
        {/* Título e subtítulo */}
        <h2
          className={`
            heading-lg font-semibold
            text-neutral-900 text-center lg:text-left
            transition-all duration-700 mb-3
            ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}
          `}
        >
          Explore os recursos da{" "}
          <span className="bg-gradient-to-r from-[#5B4BFF] to-[#8F77FF] bg-clip-text text-transparent">
            Eco
          </span>
        </h2>

        <p
          className={`
            subheading text-neutral-600 max-w-3xl
            text-center lg:text-left mb-8
            transition-all duration-700 delay-100
            ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}
          `}
        >
          Memórias, perfil, relatórios e voz — organizados de forma clara e visual, para acompanhar sua
          jornada emocional com simplicidade.
        </p>

        {/* Conteúdo */}
        <div className="mt-4 grid grid-cols-1 lg:grid-cols-2 items-center gap-8 md:gap-10">
          {/* Tabs + descrição */}
          <div className="flex flex-col items-center lg:items-start text-gray-800">
            <div className="flex flex-col space-y-3 mb-6 w-full max-w-md">
              {TABS.map((tab) => (
                <TabButton
                  key={tab.id}
                  title={tab.title}
                  active={activeTab === tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  Icon={tab.Icon}
                />
              ))}
            </div>

            <div
              className={`
                transition-all duration-500 ease-out
                max-w-md text-center lg:text-left
                ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"}
              `}
            >
              <p className="text-[15px] sm:text-[16px] leading-relaxed text-neutral-700">
                {active?.description}
              </p>

              {/* CTA contextual (opcional) */}
              {activeTab === "voz" && (
                <div className="mt-4 flex items-center gap-2">
                  <button
                    onClick={startRecording}
                    className="inline-flex items-center gap-2 px-3 py-2 rounded-xl bg-neutral-900 text-white text-sm hover:bg-neutral-800 transition"
                    aria-label="Iniciar gravação por voz"
                  >
                    <Mic size={16} /> Gravar agora
                  </button>
                  <button
                    onClick={stopRecording}
                    className="inline-flex items-center gap-2 px-3 py-2 rounded-xl bg-white border text-sm hover:bg-neutral-50 transition"
                    aria-label="Parar gravação"
                  >
                    <Square size={16} /> Parar
                  </button>
                </div>
              )}

              {activeTab === "tts" && (
                <div className="mt-4">
                  <button
                    onClick={playTTS}
                    className="inline-flex items-center gap-2 px-3 py-2 rounded-xl bg-neutral-900 text-white text-sm hover:bg-neutral-800 transition"
                    aria-label="Ouvir resposta em áudio"
                  >
                    <Play size={16} /> Ouvir resposta
                  </button>
                </div>
              )}

              {activeTab === "conversa" && (
                <div className="mt-4 flex items-center gap-2">
                  <button
                    onClick={startRecording}
                    className="inline-flex items-center gap-2 px-3 py-2 rounded-xl bg-neutral-900 text-white text-sm hover:bg-neutral-800 transition"
                    aria-label="Iniciar conversa por voz"
                  >
                    <Waves size={16} /> Iniciar conversa
                  </button>
                  <button
                    onClick={stopRecording}
                    className="inline-flex items-center gap-2 px-3 py-2 rounded-xl bg-white border text-sm hover:bg-neutral-50 transition"
                    aria-label="Encerrar conversa"
                  >
                    <StopCircle size={16} /> Encerrar
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Preview – Moldura Apple-like */}
          <div
            className={`
              relative group flex justify-center items-center w-full
              transition-all duration-700 ease-out delay-150
              ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"}
            `}
          >
            <div
              className="
                relative w-full max-w-[620px]
                rounded-[30px] p-0.5
                bg-[conic-gradient(from_180deg_at_50%_0%,#ffffff_0%,#f7f9ff_40%,#eef2ff_60%,#ffffff_100%)]
              "
            >
              <div
                className="
                  rounded-[28px] relative overflow-hidden
                  bg-white/70 supports-[backdrop-filter]:bg-white/55
                  backdrop-blur-2xl ring-1 ring-black/5
                "
                style={{
                  WebkitMaskImage:
                    "radial-gradient(150% 120% at 50% 0%, #000 60%, rgba(0,0,0,0) 100%)",
                  maskImage:
                    "radial-gradient(150% 120% at 50% 0%, #000 60%, rgba(0,0,0,0) 100%)",
                }}
              >
                {/* brilho sutil no topo */}
                <span
                  aria-hidden
                  className="
                    pointer-events-none absolute inset-x-6 -top-2 h-10
                    rounded-[20px]
                    bg-[linear-gradient(180deg,rgba(255,255,255,0.85),rgba(255,255,255,0))]
                  "
                />

                {/* halos discretos */}
                <div aria-hidden className="pointer-events-none absolute inset-0">
                  <div className="absolute -left-16 -top-20 w-64 h-64 rounded-full blur-3xl opacity-25 bg-[radial-gradient(circle,#EAE8FF_0%,transparent_65%)]" />
                  <div className="absolute -right-16 -bottom-24 w-72 h-72 rounded-full blur-3xl opacity-20 bg-[radial-gradient(circle,#E6F0FF_0%,transparent_65%)]" />
                </div>

                {/* Conteúdo da moldura */}
                <figure className="relative grid place-items-center px-4 sm:px-5 py-5 sm:py-6">
                  {!isVoicePreview ? (
                    <img
                      src={RelatorioMemoriasImg}
                      alt="Relatório emocional e memórias"
                      className="
                        w-full max-w-[560px]
                        select-none pointer-events-none
                        contrast-[1.02] saturate-[1.02]
                        transition-transform duration-500 ease-out
                        group-hover:translate-y-[-1px]
                      "
                      style={{
                        WebkitMaskImage:
                          "radial-gradient(ellipse 100% 100% at 50% 55%, rgba(0,0,0,1) 88%, rgba(0,0,0,0) 100%)",
                        maskImage:
                          "radial-gradient(ellipse 100% 100% at 50% 55%, rgba(0,0,0,1) 88%, rgba(0,0,0,0) 100%)",
                      }}
                    />
                  ) : (
                    /* Preview de voz (rec/tts) dentro da moldura */
                    <div
                      className="
                        w-full max-w-[520px]
                        rounded-2xl border border-black/5 bg-white/60 backdrop-blur-xl
                        px-5 py-4
                      "
                      role="group"
                      aria-label="Controles de voz"
                    >
                      {/* título + legenda dinâmica */}
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-[15px] font-medium text-neutral-900">
                            {activeTab === "voz" && "Diário por voz"}
                            {activeTab === "tts" && "Voz da Eco"}
                            {activeTab === "conversa" && "Conversa em voz"}
                          </p>
                          <p className="text-[12px] text-neutral-500">
                            {activeTab === "voz" && "Grave, transcreva e salve como memória."}
                            {activeTab === "tts" && "Ouça a resposta da Eco em áudio natural."}
                            {activeTab === "conversa" && "Fale e escute em fluxo contínuo."}
                          </p>
                        </div>
                        {activeTab === "voz" && <Mic className="text-[#5B4BFF]" size={18} />}
                        {activeTab === "tts" && <Volume2 className="text-[#5B4BFF]" size={18} />}
                        {activeTab === "conversa" && <Waves className="text-[#5B4BFF]" size={18} />}
                      </div>

                      {/* barra/onda ilustrativa */}
                      <div className="mt-4 h-16 rounded-xl bg-gradient-to-r from-[#F1EEFF] to-[#EAF0FF] relative overflow-hidden">
                        <div className="absolute inset-0 animate-pulse opacity-60" />
                        <div className="absolute inset-0 grid grid-cols-24 gap-1 px-2">
                          {Array.from({ length: 24 }).map((_, i) => (
                            <span
                              key={i}
                              className="self-end w-full rounded-t bg-[#5B4BFF]/30"
                              style={{ height: `${12 + ((i * 37) % 40)}%` }}
                            />
                          ))}
                        </div>
                      </div>

                      {/* controles */}
                      <div className="mt-4 flex items-center gap-2">
                        {activeTab !== "tts" && (
                          <>
                            <button
                              onClick={startRecording}
                              className="inline-flex items-center gap-2 px-3 py-2 rounded-xl bg-neutral-900 text-white text-sm hover:bg-neutral-800 transition"
                            >
                              <Mic size={16} /> Gravar
                            </button>
                            <button
                              onClick={stopRecording}
                              className="inline-flex items-center gap-2 px-3 py-2 rounded-xl bg-white border text-sm hover:bg-neutral-50 transition"
                            >
                              <Square size={16} /> Parar
                            </button>
                          </>
                        )}
                        <button
                          onClick={playTTS}
                          className="inline-flex items-center gap-2 px-3 py-2 rounded-xl bg-white border text-sm hover:bg-neutral-50 transition"
                        >
                          <Play size={16} /> Reproduzir
                        </button>
                      </div>
                    </div>
                  )}
                </figure>
              </div>
            </div>
          </div>
          {/* /Preview */}
        </div>
      </div>
    </section>
  );
};

export default EmotionalReportSection;
