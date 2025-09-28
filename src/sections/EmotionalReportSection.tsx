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
import { useScrollReveal } from "../hooks/useScrollReveal";

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
      focus:outline-none focus-visible:ring-2 focus-visible:ring-[#5B4BFF] focus-visible:ring-opacity-20
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

const EMOTION_BADGES = [
  {
    label: "Frustração",
    gradient: "from-[#FBCFE8]/80 to-[#FDE2FF]/60",
  },
  {
    label: "Curiosidade",
    gradient: "from-[#C7F9FF]/70 to-[#E0F2FF]/60",
  },
  {
    label: "Dedicação",
    gradient: "from-[#FFE7BA]/70 to-[#FFEFD5]/50",
  },
  {
    label: "Autocuidado",
    gradient: "from-[#D7FAD9]/70 to-[#ECFFED]/50",
  },
];

const MINI_CARDS = [
  {
    title: "Memórias da semana",
    value: "12 registradas",
    accent: "from-[#6C63FF]/50 via-[#8F77FF]/40 to-[#B7A2FF]/40",
  },
  {
    title: "Intensidade média",
    value: "3.7 / 5",
    accent: "from-[#FF8AAE]/40 via-[#FFB5C2]/35 to-[#FFD9E3]/30",
  },
  {
    title: "Domínios ativos",
    value: "Carreira, Relações",
    accent: "from-[#5BE0C5]/45 via-[#82F7DD]/40 to-[#B6FFEE]/30",
  },
];

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
type VoiceTabMeta = {
  title: string;
  subtitle: string;
  Icon: LucideIcon;
};

const VOICE_TAB_META: Record<"voz" | "tts" | "conversa", VoiceTabMeta> = {
  voz: {
    title: "Diário por voz",
    subtitle: "Grave, transcreva e salve como memória.",
    Icon: Mic,
  },
  tts: {
    title: "Voz da Eco",
    subtitle: "Ouça a resposta da Eco em áudio natural.",
    Icon: Volume2,
  },
  conversa: {
    title: "Conversa em voz",
    subtitle: "Fale e escute em fluxo contínuo.",
    Icon: Waves,
  },
};

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

  const isVoicePreview = isVoiceTab(activeTab);
  const activeVoiceMeta = isVoicePreview ? VOICE_TAB_META[activeTab] : null;
  const VoiceIcon = activeVoiceMeta?.Icon;

  const renderContextualCTA = () => {
    if (!isVoiceTab(activeTab)) {
      return null;
    }

    if (activeTab === "tts") {
      return (
        <div className="mt-4">
          <ActionButton
            onClick={playTTS}
            Icon={Play}
            label="Ouvir resposta"
            ariaLabel="Ouvir resposta em áudio"
          />
        </div>
      );
    }

    const isConversation = activeTab === "conversa";

    return (
      <div className="mt-4 flex items-center gap-2">
        <ActionButton
          onClick={startRecording}
          Icon={isConversation ? Waves : Mic}
          label={isConversation ? "Iniciar conversa" : "Gravar agora"}
          ariaLabel={
            isConversation ? "Iniciar conversa por voz" : "Iniciar gravação por voz"
          }
        />
        <ActionButton
          onClick={stopRecording}
          Icon={isConversation ? StopCircle : Square}
          variant="secondary"
          label={isConversation ? "Encerrar" : "Parar"}
          ariaLabel={isConversation ? "Encerrar conversa" : "Parar gravação"}
        />
      </div>
    );
  };

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
              {renderContextualCTA()}
            </div>
          </div>

          {/* Preview – Painel abstrato */}
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
              "
            >
              <div
                className="
                  relative overflow-hidden
                  rounded-[28px]
                  border border-white/10
                  bg-white/10 backdrop-blur-xl
                  shadow-[0_35px_80px_-30px_rgba(93,87,255,0.35)]
                  text-white/90
                  supports-[backdrop-filter]:bg-white/10
                "
              >
                <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
                  <div className="absolute -top-24 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-[radial-gradient(circle,#8F77FF_0%,transparent_60%)] opacity-40 blur-3xl" />
                  <div className="absolute -bottom-28 right-12 h-52 w-52 rounded-full bg-[radial-gradient(circle,#6EE7FF_0%,transparent_65%)] opacity-30 blur-3xl" />
                  <div className="absolute top-1/3 -left-10 h-40 w-40 rotate-12 rounded-[32px] bg-[linear-gradient(140deg,rgba(255,255,255,0.18),rgba(255,255,255,0))]" />
                </div>

                {/* Conteúdo do painel */}
                <div className="relative px-6 sm:px-8 py-7 sm:py-8 space-y-7">
                  <div className="flex flex-wrap gap-2.5">
                    {EMOTION_BADGES.map((badge) => (
                      <span
                        key={badge.label}
                        className={`
                          inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-sm font-medium
                          bg-gradient-to-r ${badge.gradient}
                          text-white/80 shadow-[0_8px_20px_rgba(15,23,42,0.08)]
                          border border-white/10 backdrop-blur-md
                        `}
                      >
                        <span className="inline-block h-1.5 w-1.5 rounded-full bg-white/70" aria-hidden />
                        {badge.label}
                      </span>
                    ))}
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
                    {MINI_CARDS.map((card) => (
                      <div
                        key={card.title}
                        className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-white/80"
                      >
                        <div className={`absolute inset-0 opacity-70 bg-gradient-to-br ${card.accent}`} aria-hidden />
                        <div className="relative space-y-1">
                          <p className="text-xs font-medium uppercase tracking-wide text-white/60">
                            {card.title}
                          </p>
                          <p className="text-lg font-semibold text-white/90">{card.value}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {!isVoicePreview ? (
                    <div className="rounded-3xl border border-white/10 bg-white/5 px-5 py-6 text-white/75">
                      <p className="text-sm leading-relaxed">
                        A Eco destila suas memórias em padrões semanais, destacando emoções, gatilhos e os
                        domínios da vida que mais vibraram. Visualize a progressão, acompanhe seus rituais de
                        autocuidado e descubra oportunidades de equilíbrio.
                      </p>
                    </div>
                  ) : (
                    <div
                      className="
                        rounded-3xl border border-white/10 bg-white/10 px-5 py-5 text-white/85 backdrop-blur-lg
                      "
                      role="group"
                      aria-label="Controles de voz"
                    >
                      <div className="flex items-center justify-between gap-4">
                        <div>
                          <p className="text-[15px] font-semibold tracking-tight text-white">
                            {activeVoiceMeta?.title}
                          </p>
                          <p className="text-xs text-white/70">{activeVoiceMeta?.subtitle}</p>
                        </div>
                        {VoiceIcon && (
                          <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white/10">
                            <VoiceIcon className="text-white" size={18} />
                          </span>
                        )}
                      </div>

                      <div className="relative mt-4 h-16 overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-r from-white/10 via-white/5 to-white/10">
                        <div className="absolute inset-0 animate-pulse opacity-40" />
                        <div className="relative flex h-full items-end gap-[3px] px-3 pb-2">
                          {Array.from({ length: 32 }).map((_, i) => (
                            <span
                              key={i}
                              className="w-[4px] rounded-t-full bg-white/60"
                              style={{ height: `${18 + ((i * 37) % 55)}%` }}
                            />
                          ))}
                        </div>
                      </div>

                      <div className="mt-4 flex flex-wrap items-center gap-2">
                        {activeTab !== "tts" && (
                          <>
                            <ActionButton
                              onClick={startRecording}
                              Icon={Mic}
                              label="Gravar"
                              ariaLabel="Iniciar gravação"
                            />
                            <ActionButton
                              onClick={stopRecording}
                              Icon={Square}
                              label="Parar"
                              ariaLabel="Parar gravação"
                              variant="secondary"
                            />
                          </>
                        )}
                        <ActionButton
                          onClick={playTTS}
                          Icon={Play}
                          label={activeTab === "tts" ? "Ouvir agora" : "Reproduzir"}
                          ariaLabel="Reproduzir áudio"
                          variant="secondary"
                        />
                      </div>
                    </div>
                  )}
                </div>
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
