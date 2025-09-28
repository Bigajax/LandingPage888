import React, { useState } from "react";
import type { LucideIcon } from "lucide-react";
import { Sparkles, Smile, BarChart2, Mic, Volume2, Waves, Play, Square, StopCircle } from "lucide-react";
import { useScrollReveal } from "../hooks/useScrollReveal";

const COLOR = "#5B4BFF";

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
    className="
      group relative flex items-center gap-3 w-full
      px-4 py-2.5 sm:px-5 sm:py-3 rounded-xl
      text-[15px] sm:text-base font-medium
      bg-white/80 border border-black/5
      hover:bg-white transition-all focus:outline-none
      focus-visible:ring-2 focus-visible:ring-[rgba(91,75,255,0.25)]
      data-[active=true]:bg-white
    "
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
    description: (
      <>Registre <strong className="text-[#5B4BFF]">momentos marcantes</strong> com emoção, tags e domínio da vida — tudo salvo como memória.</>
    ),
  },
  {
    id: "perfil",
    title: "Perfil emocional",
    Icon: Smile,
    description: (
      <>Veja suas <strong className="text-[#5B4BFF]">emoções recorrentes</strong> em um retrato que evolui com você.</>
    ),
  },
  {
    id: "relatorio",
    title: "Relatório emocional",
    Icon: BarChart2,
    description: (
      <>Acompanhe um <strong className="text-[#5B4BFF]">mapa emocional</strong> e uma <strong className="text-[#5B4BFF]">linha do tempo</strong> com picos de intensidade.</>
    ),
  },
  {
    id: "voz",
    title: "Diário por voz",
    Icon: Mic,
    description: (
      <>Fale com a Eco: <strong className="text-[#5B4BFF]">gravamos, transcrevemos e salvamos</strong> como memória.</>
    ),
  },
  {
    id: "tts",
    title: "Voz da Eco",
    Icon: Volume2,
    description: (
      <>Ouça respostas em <strong className="text-[#5B4BFF]">áudio natural</strong> — ideal para refletir em movimento.</>
    ),
  },
  {
    id: "conversa",
    title: "Conversa em voz",
    Icon: Waves,
    description: (
      <>Fluxo contínuo de <strong className="text-[#5B4BFF]">fala ↔ escuta</strong> para uma experiência mais imersiva.</>
    ),
  },
];

/* ---------- Minimal Preview Cards ---------- */
function DataPreview() {
  // mini dashboard discreto no lugar dos iPhones
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

function VoicePreview({ mode }: { mode: "voz" | "tts" | "conversa" }) {
  return (
    <div className="rounded-2xl border border-black/5 bg-white/70 backdrop-blur-xl px-5 py-4">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-[15px] font-medium text-neutral-900">
            {mode === "voz" ? "Diário por voz" : mode === "tts" ? "Voz da Eco" : "Conversa em voz"}
          </p>
          <p className="text-xs text-neutral-500">
            {mode === "voz" && "Grave, transcreva e salve como memória."}
            {mode === "tts" && "Ouça a resposta da Eco em áudio natural."}
            {mode === "conversa" && "Fale e escute em fluxo contínuo."}
          </p>
        </div>
        {mode === "voz" && <Mic className="text-[#5B4BFF]" size={18} />}
        {mode === "tts" && <Volume2 className="text-[#5B4BFF]" size={18} />}
        {mode === "conversa" && <Waves className="text-[#5B4BFF]" size={18} />}
      </div>

      <div className="mt-4 h-16 rounded-xl bg-gradient-to-r from-[#F4F4FF] to-[#EDF1FF] relative overflow-hidden">
        <div className="absolute inset-0 grid grid-cols-24 gap-1 px-2">
          {Array.from({ length: 24 }).map((_, i) => (
            <span key={i} className="self-end w-full rounded-t bg-[#5B4BFF]/30" style={{ height: `${12 + ((i * 37) % 40)}%` }} />
          ))}
        </div>
      </div>

      <div className="mt-4 flex items-center gap-2">
        {mode !== "tts" && (
          <>
            <button className="inline-flex items-center gap-2 px-3 py-2 rounded-xl bg-neutral-900 text-white text-sm hover:bg-neutral-800 transition">
              <Mic size={16} /> Gravar
            </button>
            <button className="inline-flex items-center gap-2 px-3 py-2 rounded-xl bg-white border text-sm hover:bg-neutral-50 transition">
              <Square size={16} /> Parar
            </button>
          </>
        )}
        <button className="inline-flex items-center gap-2 px-3 py-2 rounded-xl bg-white border text-sm hover:bg-neutral-50 transition">
          <Play size={16} /> Reproduzir
        </button>
      </div>
    </div>
  );
}

/* ---------- Section ---------- */
const EmotionalReportSection: React.FC = () => {
  const { ref, isVisible } = useScrollReveal();
  const [activeTab, setActiveTab] = useState<TabId>("memorias");
  const active = TABS.find((t) => t.id === activeTab)!;

  const isVoice = activeTab === "voz" || activeTab === "tts" || activeTab === "conversa";

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
            text-[26px] sm:text-4xl md:text-[44px] font-semibold tracking-tight
            text-neutral-900 text-center lg:text-left mb-3
            transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}
          `}
        >
          Explore os recursos da <span className="text-[color:var(--accent,#5B4BFF)]" style={{ ["--accent" as any]: COLOR }}>Eco</span>
        </h2>

        <p
          className={`
            text-[15px] sm:text-[17px] lg:text-[18px] leading-relaxed text-neutral-600
            max-w-3xl text-center lg:text-left mb-8
            transition-all duration-700 delay-100 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}
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

            <div className={`max-w-md text-center lg:text-left transition-all ${isVisible ? "opacity-100" : "opacity-0"}`}>
              <p className="text-[15px] sm:text-[16px] leading-relaxed text-neutral-700">{active.description}</p>
            </div>
          </div>

          {/* Preview minimalista (sem imagens) */}
          <div className={`relative transition-all ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"}`}>
            <div className="relative rounded-3xl border border-black/5 bg-white/60 backdrop-blur-2xl p-6 md:p-8 shadow-[0_16px_50px_rgba(0,0,0,0.06)]">
              {!isVoice ? <DataPreview /> : <VoicePreview mode={activeTab as "voz" | "tts" | "conversa"} />}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmotionalReportSection;
