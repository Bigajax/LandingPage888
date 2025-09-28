import React, { useState } from "react";
import type { LucideIcon } from "lucide-react";
import {
  Sparkles,
  Smile,
  BarChart2,
  Mic,
  Volume2,
  Waves,
  Play,
  Square,
  StopCircle,
} from "lucide-react";
import RelatorioMemoriasImg from "@/assets/images/relatorio+memorias.png";
import { useScrollReveal } from "../hooks/useScrollReveal";

/* ---------- UI atoms ---------- */
const IconBadge: React.FC<{ active?: boolean; children: React.ReactNode }> = ({ active, children }) => (
  <span
    data-active={active}
    className="
      relative grid place-items-center
      h-9 w-9 sm:h-10 sm:w-10 rounded-[12px]
      border border-white/50 bg-white/60
      shadow-[inset_0_1px_0_rgba(255,255,255,0.65)]
      backdrop-blur-xl transition-all duration-200
      data-[active=true]:border-[#5B4BFF]/60 data-[active=true]:bg-white
    "
    aria-hidden
  >
    <i className="pointer-events-none absolute inset-0 rounded-[12px] bg-[radial-gradient(130%_130%_at_15%_12%,rgba(139,122,255,0.28),rgba(255,255,255,0))]" />
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
    className="
      group relative flex w-full items-center gap-3
      rounded-2xl border border-white/40 bg-white/60 px-4 py-2.5
      text-left text-[15px] font-medium text-neutral-700 transition-all duration-200
      hover:border-[#5B4BFF]/30 hover:bg-white focus:outline-none
      focus-visible:ring-2 focus-visible:ring-[#5B4BFF]/30 focus-visible:ring-offset-1
      data-[active=true]:border-[#5B4BFF]/40 data-[active=true]:bg-white data-[active=true]:text-[#5046FF]
      sm:px-5 sm:py-3 sm:text-base
    "
  >
    <span
      className="
        absolute inset-y-2 left-2 w-[3px] rounded-full
        bg-gradient-to-b from-[#6F60FF] to-[#B4AEFF]
        opacity-0 transition-opacity duration-200
        data-[active=true]:opacity-100
      "
    />
    <IconBadge active={active}>
      <Icon
        size={18}
        strokeWidth={1.6}
        absoluteStrokeWidth
        shapeRendering="geometricPrecision"
        className={active ? "text-[#5B4BFF]" : "text-neutral-600"}
      />
    </IconBadge>

    <span className="truncate pl-1">{title}</span>
  </button>
);

/* ---------- Content ---------- */
type TabId = "memorias" | "perfil" | "relatorio" | "voz" | "tts" | "conversa";
type Tab = {
  id: TabId;
  title: string;
  Icon: LucideIcon;
  description: React.ReactNode;
  voice?: {
    headline: string;
    subheadline: string;
    actions: VoiceActionKey[];
  };
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

  /* -------- Abas de voz -------- */
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
    voice: {
      headline: "Diário por voz",
      subheadline: "Grave, transcreva e salve como memória.",
      actions: ["record", "stop", "playback"],
    },
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
    voice: {
      headline: "Voz da Eco",
      subheadline: "Respostas naturais para te acompanhar.",
      actions: ["listen"],
    },
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
    voice: {
      headline: "Conversa em voz",
      subheadline: "Fale, escute e continue o fluxo.",
      actions: ["conversationStart", "conversationStop", "playback"],
    },
  },
];

/* ---------- Section ---------- */
type ActionButtonVariant = "primary" | "secondary";

const ACTION_BUTTON_BASE =
  "inline-flex items-center gap-2 px-3 py-2 rounded-xl text-sm font-medium transition focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-[#5B4BFF]/40";

const getActionButtonClasses = (variant: ActionButtonVariant) =>
  `${ACTION_BUTTON_BASE} ${
    variant === "primary"
      ? "bg-neutral-900 text-white hover:bg-neutral-800"
      : "bg-white border border-black/10 text-neutral-800 hover:bg-neutral-50"
  }`;

const ActionButton: React.FC<{
  label: string;
  Icon: LucideIcon;
  onClick: () => void;
  variant?: ActionButtonVariant;
  ariaLabel: string;
}> = ({ label, Icon, onClick, ariaLabel, variant = "primary" }) => (
  <button
    type="button"
    onClick={onClick}
    className={getActionButtonClasses(variant)}
    aria-label={ariaLabel}
  >
    <Icon size={16} /> {label}
  </button>
);

const isVoiceTab = (tabId: TabId): tabId is "voz" | "tts" | "conversa" =>
  tabId === "voz" || tabId === "tts" || tabId === "conversa";

type VoiceActionKey =
  | "record"
  | "stop"
  | "playback"
  | "listen"
  | "conversationStart"
  | "conversationStop";

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

  const voiceActions: Record<
    VoiceActionKey,
    Omit<React.ComponentProps<typeof ActionButton>, "Icon"> & { Icon: LucideIcon }
  > = {
    record: {
      label: "Gravar",
      ariaLabel: "Iniciar gravação",
      Icon: Mic,
      onClick: startRecording,
      variant: "primary",
    },
    stop: {
      label: "Parar",
      ariaLabel: "Parar gravação",
      Icon: Square,
      onClick: stopRecording,
      variant: "secondary",
    },
    playback: {
      label: "Reproduzir",
      ariaLabel: "Reproduzir áudio",
      Icon: Play,
      onClick: playTTS,
      variant: "secondary",
    },
    listen: {
      label: "Ouvir resposta",
      ariaLabel: "Ouvir resposta em áudio",
      Icon: Play,
      onClick: playTTS,
      variant: "primary",
    },
    conversationStart: {
      label: "Iniciar conversa",
      ariaLabel: "Iniciar conversa por voz",
      Icon: Waves,
      onClick: startRecording,
      variant: "primary",
    },
    conversationStop: {
      label: "Encerrar",
      ariaLabel: "Encerrar conversa",
      Icon: StopCircle,
      onClick: stopRecording,
      variant: "secondary",
    },
  };

  const isVoicePreview = isVoiceTab(activeTab);
  const activeVoice = isVoicePreview ? active?.voice : undefined;
  const VoiceIcon = isVoicePreview ? TABS.find((tab) => tab.id === activeTab)?.Icon : undefined;

  return (
    <section
      ref={ref}
      className="
        relative w-full overflow-hidden
        bg-[radial-gradient(circle_at_top,#FFFFFF_0%,#F4F5FF_42%,#ECF0FF_100%)]
        px-4 py-16 sm:px-6 sm:py-20 md:px-10
      "
    >
      <div className="mx-auto w-full max-w-7xl">
        {/* Título e subtítulo */}
        <h2
          className={`
            heading-lg mb-3 text-center font-semibold text-neutral-900 transition-all duration-700 lg:text-left
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
            subheading mx-auto mb-10 max-w-3xl text-center text-neutral-600 transition-all duration-700 delay-100
            ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}
            lg:mx-0 lg:text-left
          `}
        >
          Memórias, perfil, relatórios e voz — organizados de forma clara e visual, para acompanhar sua
          jornada emocional com simplicidade.
        </p>

        {/* Conteúdo */}
        <div className="mt-6 grid grid-cols-1 items-start gap-10 lg:grid-cols-[320px_minmax(0,1fr)]">
          {/* Tabs + descrição */}
          <div className="mx-auto w-full max-w-md lg:mx-0">
            <div className="flex flex-col gap-2.5">
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
                mt-6 max-w-md text-center text-[15px] text-neutral-600 transition-all duration-500 ease-out
                ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"}
                lg:text-left
              `}
            >
              <p className="leading-relaxed">{active?.description}</p>

              {isVoicePreview && activeVoice && (
                <div className="mt-4 flex flex-wrap gap-2">
                  {activeVoice.actions.map((actionKey) => {
                    const action = voiceActions[actionKey];
                    return (
                      <ActionButton
                        key={actionKey}
                        onClick={action.onClick}
                        Icon={action.Icon}
                        label={action.label}
                        ariaLabel={action.ariaLabel}
                        variant={action.variant}
                      />
                    );
                  })}
                </div>
              )}
            </div>
          </div>

          {/* Preview – Moldura Apple-like */}
          <div
            className={`
              relative flex w-full justify-center
              transition-all duration-700 ease-out delay-150
              ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"}
            `}
          >
            <div
              className="
                relative w-full max-w-[640px]
                rounded-[32px] border border-white/60 bg-white/40 p-0.5
                shadow-[0_40px_80px_rgba(112,118,255,0.18)]
              "
            >
              <div
                className="
                  relative overflow-hidden rounded-[30px]
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
                <figure className="relative grid place-items-center px-5 py-6 sm:px-6">
                  {!isVoicePreview ? (
                    <img
                      src={RelatorioMemoriasImg}
                      alt="Relatório emocional e memórias"
                      className="
                        w-full max-w-[560px]
                        select-none pointer-events-none
                        contrast-[1.04] saturate-[1.04]
                        transition-transform duration-500 ease-out
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
                        rounded-3xl border border-black/5 bg-white/70 px-6 py-5 shadow-[0_25px_60px_rgba(109,115,255,0.16)]
                      "
                      role="group"
                      aria-label="Controles de voz"
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-[16px] font-medium text-neutral-900">{activeVoice?.headline}</p>
                          <p className="text-[12px] text-neutral-500">{activeVoice?.subheadline}</p>
                        </div>
                        {VoiceIcon && <VoiceIcon className="text-[#5B4BFF]" size={18} />}
                      </div>

                      <div className="mt-6 h-[72px] rounded-2xl bg-gradient-to-r from-[#F2EEFF] to-[#E8F0FF] p-3">
                        <div className="flex h-full items-center gap-1 overflow-hidden">
                          {Array.from({ length: 28 }).map((_, index) => (
                            <span
                              key={index}
                              className="w-1 rounded-full bg-[#5B4BFF]/30"
                              style={{ height: `${40 + ((index * 23) % 45)}%` }}
                            />
                          ))}
                        </div>
                      </div>

                      {activeVoice && (
                        <div className="mt-5 flex flex-wrap gap-2">
                          {activeVoice.actions.map((actionKey) => {
                            const action = voiceActions[actionKey];
                            return (
                              <ActionButton
                                key={actionKey}
                                onClick={action.onClick}
                                Icon={action.Icon}
                                label={action.label}
                                ariaLabel={action.ariaLabel}
                                variant={action.variant}
                              />
                            );
                          })}
                        </div>
                      )}
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
