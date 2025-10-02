import React, { useMemo, useState } from "react";
import type { LucideIcon } from "lucide-react";
import { Sparkles, Smile, BarChart2, Mic, Volume2, Waves, Play, Square } from "lucide-react";
import { useScrollReveal } from "../hooks/useScrollReveal";

/* ---------- Tokens (opcional) ---------- */
const TOKENS = {
  accent: "#5B4BFF",
};

/* ---------- UI atoms ---------- */
const IconBadge: React.FC<{ active?: boolean; children: React.ReactNode }> = ({ active, children }) => (
  <span
    data-active={active}
    className="
      grid place-items-center w-9 h-9 sm:w-10 sm:h-10 rounded-lg
      bg-white/70 backdrop-blur-md border border-black/5
      shadow-[0_2px_10px_rgba(0,0,0,0.06)]
      data-[active=true]:ring-1 data-[active=true]:ring-[rgba(91,75,255,0.35)]
      transition-all
    "
    aria-hidden
  >
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
      focus:outline-none focus-visible:ring-2 focus-visible:ring-[${TOKENS.accent}] focus-visible:ring-opacity-20
      data-[active=true]:bg-white data-[active=true]:border-transparent
    `}
  >
    <IconBadge active={active}>
      <Icon size={18} strokeWidth={1.75} absoluteStrokeWidth className={active ? "text-[#5B4BFF]" : "text-neutral-700"} />
    </IconBadge>
    <span className={`truncate ${active ? "text-[#5B4BFF]" : "text-neutral-800"}`}>{title}</span>
  </button>
);

/* ---------- Content ---------- */
type TabId = "memorias" | "perfil" | "relatorio" | "voz" | "tts" | "conversa";
type Tab = { id: TabId; title: string; Icon: LucideIcon; description: React.ReactNode };

const TABS: Tab[] = [
  {
    id: "memorias",
    title: "Memórias emocionais",
    Icon: Sparkles,
    description: <>Registre <strong className="text-[#5B4BFF]">momentos marcantes</strong> com emoção, tags e domínio da vida — tudo salvo como memória.</>,
  },
  {
    id: "perfil",
    title: "Perfil emocional",
    Icon: Smile,
    description: <>Veja suas <strong className="text-[#5B4BFF]">emoções recorrentes</strong> em um retrato que evolui com você.</>,
  },
  {
    id: "relatorio",
    title: "Relatório emocional",
    Icon: BarChart2,
    description: <>Acompanhe um <strong className="text-[#5B4BFF]">mapa emocional</strong> e uma <strong className="text-[#5B4BFF]">linha do tempo</strong> com picos de intensidade.</>,
  },
  {
    id: "voz",
    title: "Diário por voz",
    Icon: Mic,
    description: <>Fale com a Eco: <strong className="text-[#5B4BFF]">gravamos, transcrevemos e salvamos</strong> como memória.</>,
  },
  {
    id: "tts",
    title: "Voz da Eco",
    Icon: Volume2,
    description: <>Ouça respostas em <strong className="text-[#5B4BFF]">áudio natural</strong> — ideal para refletir em movimento.</>,
  },
  {
    id: "conversa",
    title: "Conversa em voz",
    Icon: Waves,
    description: <>Fluxo contínuo de <strong className="text-[#5B4BFF]">fala ↔ escuta</strong> para uma experiência mais imersiva.</>,
  },
];

/* ---------- Minimal Preview Cards ---------- */
function DataPreview() {
  return (
    <div className="grid gap-3 sm:grid-cols-3">
      {[
        { k: "Memórias (7d)", v: "25" },
        { k: "Intensidade média", v: "6.8" },
        { k: "Domínios ativos", v: "3" },
      ].map((it) => (
        <div key={it.k} className="rounded-2xl bg-white/70 backdrop-blur-xl border border-black/5 p-4">
          <div className="text-xs text-neutral-500">{it.k}</div>
          <div className="mt-1 text-2xl font-semibold text-neutral-900">{it.v}</div>
        </div>
      ))}

      <div className="sm:col-span-3 rounded-2xl border border-black/5 bg-white/70 backdrop-blur-xl p-4">
        <div className="text-sm text-neutral-600 mb-2">Intensidade por dia</div>
        <div className="grid grid-cols-7 gap-1 h-16 items-end">
          {[40, 70, 55, 30, 85, 60, 45].map((h, i) => (
            <div key={i} className="rounded-md bg-[#5B4BFF]/25" style={{ height: `${h}%` }} />
          ))}
        </div>
      </div>
    </div>
  );
}

/* ---------- Voice helpers ---------- */
type VoiceTabMeta = { title: string; subtitle: string; Icon: LucideIcon };
const VOICE_TAB_META: Record<"voz" | "tts" | "conversa", VoiceTabMeta> = {
  voz: { title: "Diário por voz", subtitle: "Grave, transcreva e salve como memória.", Icon: Mic },
  tts: { title: "Voz da Eco", subtitle: "Ouça a resposta da Eco em áudio natural.", Icon: Volume2 },
  conversa: { title: "Conversa em voz", subtitle: "Fale e escute em fluxo contínuo.", Icon: Waves },
};

type ActionButtonVariant = "primary" | "secondary";
const ACTION_BUTTON_BASE =
  "inline-flex items-center gap-2 px-3 py-2 rounded-xl text-sm font-medium transition focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-[#5B4BFF]/40";
const getActionButtonClasses = (variant: ActionButtonVariant) =>
  `${ACTION_BUTTON_BASE} ${variant === "primary" ? "bg-neutral-900 text-white hover:bg-neutral-800" : "bg-white border border-black/10 text-neutral-800 hover:bg-neutral-50"}`;

const ActionButton: React.FC<{
  label: string;
  Icon: LucideIcon;
  onClick: () => void;
  variant?: ActionButtonVariant;
  ariaLabel: string;
}> = ({ label, Icon, onClick, ariaLabel, variant = "primary" }) => (
  <button type="button" onClick={onClick} className={getActionButtonClasses(variant)} aria-label={ariaLabel}>
    <Icon size={16} /> {label}
  </button>
);

/* ---------- Section ---------- */
const EmotionalReportSection: React.FC = () => {
  const { ref, isVisible } = useScrollReveal();
  const [activeTab, setActiveTab] = useState<TabId>("memorias");

  const isVoice = activeTab === "voz" || activeTab === "tts" || activeTab === "conversa";
  const voiceMeta = useMemo(() => {
    if (!isVoice) return null;
    return VOICE_TAB_META[activeTab as "voz" | "tts" | "conversa"];
  }, [activeTab, isVoice]);
  const VoiceIcon = voiceMeta?.Icon;

  // ações (no-ops seguros por enquanto)
  const startRecording = () => console.log("[voice] startRecording()");
  const stopRecording = () => console.log("[voice] stopRecording()");
  const playTTS = () => console.log("[voice] playTTS()");

  const active = TABS.find((t) => t.id === activeTab)!;

  return (
    <section
      ref={ref}
      className="
        relative w-full bg-gradient-to-br from-[#F7F9FC] to-[#EEF3FF]
        py-16 sm:py-20 px-4 sm:px-6 md:px-8
      "
    >
      <div className="mx-auto w-full max-w-7xl">
        <h2
          className={`
            heading-lg font-semibold
            text-neutral-900 text-center lg:text-left
            transition-all duration-700 mb-3
            ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}
          `}
        >
          Explore os recursos da <span className="text-[#5B4BFF]">Eco</span>
        </h2>

        <p
          className={`
            subheading text-neutral-600 max-w-3xl
            text-center lg:text-left mb-8
            transition-all duration-700 delay-100
            ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}
          `}
        >
          Memórias, perfil, relatórios e voz — organizados de forma clara e visual para acompanhar sua jornada emocional.
        </p>

        <div className="mt-4 grid grid-cols-1 lg:grid-cols-2 items-start gap-8 md:gap-10">
          {/* Tabs + descrição */}
          <div className="flex flex-col items-center lg:items-start">
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
              <p className="text-[15px] sm:text-[16px] leading-relaxed text-neutral-700">{active?.description}</p>
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
                  WebkitMaskImage: "radial-gradient(150% 120% at 50% 0%, #000 60%, rgba(0,0,0,0) 100%)",
                  maskImage: "radial-gradient(150% 120% at 50% 0%, #000 60%, rgba(0,0,0,0) 100%)",
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
                  {!isVoice ? (
                    <DataPreview />
                  ) : (
                    <div
                      className="
                        w-full max-w-[520px]
                        rounded-2xl border border-black/5 bg-white/60 backdrop-blur-xl
                        px-5 py-4
                      "
                      role="group"
                      aria-label="Controles de voz"
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-[15px] font-medium text-neutral-900">{voiceMeta?.title}</p>
                          <p className="text-[12px] text-neutral-500">{voiceMeta?.subtitle}</p>
                        </div>
                        {VoiceIcon && <VoiceIcon className="text-[#5B4BFF]" size={18} />}
                      </div>

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

                      <div className="mt-4 flex items-center gap-2">
                        {activeTab !== "tts" && (
                          <>
                            <ActionButton onClick={startRecording} Icon={Mic} label="Gravar" ariaLabel="Iniciar gravação" />
                            <ActionButton onClick={stopRecording} Icon={Square} label="Parar" ariaLabel="Parar gravação" variant="secondary" />
                          </>
                        )}
                        <ActionButton onClick={playTTS} Icon={Play} label="Reproduzir" ariaLabel="Reproduzir áudio" variant="secondary" />
                      </div>
                    </div>
                  )}
                </figure>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmotionalReportSection;
