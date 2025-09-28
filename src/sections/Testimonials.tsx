import React, { useMemo } from "react";

type RawFeedback = {
  idx: number;
  id: string;
  created_at: string; // ISO
  purpose_understanding: "clearly_understood" | "partially_understood" | string;
  voice_reflection_help: "quite" | "a_little" | "not_much" | string;
  voice_quality_clarity: number;
  emotional_understanding: "low" | "medium" | "quite" | "very" | string;
  responses_useful_reflection: number; // 1-5
  design_aesthetics: "neutral" | "pleasant" | "very_pleasant" | string;
  ease_of_use: "intuitive" | "very_intuitive" | string;
  emotional_change: string; // JSON string array
  emotional_change_other: string;
  recommendation_nps: number; // 0-10
  overall_experience_short: string;
};

const rawData: RawFeedback[] = [
  {
    idx: 0,
    id: "041d467e-58f2-42e4-8f04-f0664a6b278c",
    created_at: "2025-08-04 17:49:46.09084+00",
    purpose_understanding: "clearly_understood",
    voice_reflection_help: "quite",
    voice_quality_clarity: 0,
    emotional_understanding: "medium",
    responses_useful_reflection: 4,
    design_aesthetics: "neutral",
    ease_of_use: "intuitive",
    emotional_change: '["calmer"]',
    emotional_change_other: "",
    recommendation_nps: 9,
    overall_experience_short: "Me senti emocionalmente entendido ",
  },
  {
    idx: 1,
    id: "2ce53abf-a164-4cdb-8407-820a70aa3257",
    created_at: "2025-08-13 16:45:15.213902+00",
    purpose_understanding: "clearly_understood",
    voice_reflection_help: "quite",
    voice_quality_clarity: 0,
    emotional_understanding: "quite",
    responses_useful_reflection: 3,
    design_aesthetics: "very_pleasant",
    ease_of_use: "very_intuitive",
    emotional_change: '["more_aware"]',
    emotional_change_other: "",
    recommendation_nps: 7,
    overall_experience_short: "Experiência positiva ",
  },
];

type UiFeedback = {
  date: string;
  short: string;
  nps: number;
  chips: string[];
};

function mapChangeTag(tag: string): string {
  switch (tag) {
    case "calmer":
      return "Mais calmo(a)";
    case "more_aware":
      return "Mais consciente";
    case "lighter":
      return "Mais leve";
    default:
      return tag;
  }
}

function normalize(data: RawFeedback[]): UiFeedback[] {
  return data.map((f) => {
    let chips: string[] = [];
    try {
      const parsed = JSON.parse(f.emotional_change || "[]");
      chips = Array.isArray(parsed) ? parsed.map(mapChangeTag) : [];
    } catch {
      chips = [];
    }
    const date = new Date(f.created_at).toLocaleDateString("pt-BR", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
    return {
      date,
      short: (f.overall_experience_short || "").trim(),
      nps: f.recommendation_nps,
      chips,
    };
  });
}

const Testimonials: React.FC = () => {
  const feedbackUrl = "https://feedback777.vercel.app";

  const ui = useMemo(() => normalize(rawData), []);
  const stats = useMemo(() => {
    const n = rawData.length || 1;
    const avgNps =
      Math.round(
        (rawData.reduce((s, f) => s + (f.recommendation_nps || 0), 0) / n) * 10
      ) / 10;

    const understoodPct =
      Math.round(
        (100 *
          rawData.filter((f) => f.purpose_understanding === "clearly_understood")
            .length) /
          n
      ) || 0;

    const changes = new Set<string>();
    rawData.forEach((f) => {
      try {
        JSON.parse(f.emotional_change || "[]").forEach((t: string) =>
          changes.add(mapChangeTag(t))
        );
      } catch {}
    });

    return {
      avgNps,
      understoodPct,
      changeLabels: Array.from(changes),
    };
  }, []);

  return (
    <section
      id="feedback"
      className="
        relative overflow-hidden
        w-full py-16 sm:py-20 px-6
        bg-[#F8F7FB]
      "
    >
      {/* Halos de fundo sutis */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[70vw] h-[70vw] max-w-[900px] rounded-full blur-[120px] opacity-40 bg-[radial-gradient(circle,#E9E8FF_0%,transparent_65%)]" />
        <div className="absolute -bottom-28 right-[-10%] w-[50vw] h-[50vw] rounded-full blur-[120px] opacity-30 bg-[radial-gradient(circle,#E6F0FF_0%,transparent_70%)]" />
      </div>

      <div className="relative max-w-5xl mx-auto">
        {/* Header */}
        <div className="flex flex-col items-center text-center">
          <h2 className="heading-lg font-semibold text-[#0F111A]">
            O que as pessoas sentem com a{" "}
            <span className="bg-[linear-gradient(90deg,#7C5CFF,#5B4BFF)] bg-clip-text text-transparent">
              Eco
            </span>
          </h2>
          <p className="mt-3 subheading text-[#565A66] max-w-xl">
            Feedbacks reais de quem experimentou. Simples, seguros e anônimos.
          </p>
        </div>

        {/* Métricas rápidas */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-3">
          <div className="rounded-2xl border border-white/60 bg-white/70 backdrop-blur p-5 shadow-sm">
            <div className="text-[13px] text-[#6B7180]">NPS médio</div>
            <div className="mt-1 text-[28px] font-semibold text-[#0F111A]">
              {stats.avgNps}
              <span className="text-[#6B7180] text-[16px]"> /10</span>
            </div>
          </div>
          <div className="rounded-2xl border border-white/60 bg-white/70 backdrop-blur p-5 shadow-sm">
            <div className="text-[13px] text-[#6B7180]">
              Entendimento do propósito
            </div>
            <div className="mt-1 text-[28px] font-semibold text-[#0F111A]">
              {stats.understoodPct}%{" "}
              <span className="text-[16px] text-[#6B7180]">“claro”</span>
            </div>
          </div>
          <div className="rounded-2xl border border-white/60 bg-white/70 backdrop-blur p-5 shadow-sm">
            <div className="text-[13px] text-[#6B7180]">Efeitos relatados</div>
            <div className="mt-1 flex flex-wrap gap-1.5">
              {stats.changeLabels.map((c) => (
                <span
                  key={c}
                  className="text-[12.5px] px-2 py-1 rounded-full border border-[#E3E6EF] bg-white"
                >
                  {c}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Depoimentos */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {ui.map((f) => (
            <figure
              key={f.date + f.nps + f.short}
              className="rounded-2xl border border-white/60 bg-white/80 backdrop-blur p-5 shadow-sm"
            >
              <div className="flex items-center justify-between">
                <div className="text-[12.5px] text-[#6B7180]">{f.date}</div>
                <div className="text-[12.5px] text-[#6B7180]">
                  NPS <span className="font-medium text-[#0F111A]">{f.nps}</span>
                </div>
              </div>
              <blockquote className="mt-3 text-[15px] sm:text-[16px] text-[#0F111A] leading-relaxed">
                “{f.short}”
              </blockquote>
              {f.chips.length > 0 && (
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {f.chips.map((c) => (
                    <span
                      key={c}
                      className="text-[12.5px] px-2 py-1 rounded-full border border-[#E3E6EF] bg-white"
                    >
                      {c}
                    </span>
                  ))}
                </div>
              )}
            </figure>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-8 flex flex-col items-center text-center">
          <a
            href={feedbackUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Enviar feedback sobre a Eco"
            className="
              relative inline-flex items-center justify-center
              h-12 px-6 rounded-full font-semibold text-white
              bg-gradient-to-b from-[#7C5CFF] to-[#5B4BFF]
              shadow-[0_14px_32px_rgba(91,75,255,0.34)]
              hover:brightness-[1.08] active:scale-[0.99]
              focus:outline-none focus-visible:ring-2 focus-visible:ring-[#7C5CFF]/30
              transition
            "
          >
            Enviar feedback
            <span className="pointer-events-none absolute inset-[1px] rounded-full bg-[linear-gradient(180deg,rgba(255,255,255,0.35),rgba(255,255,255,0))]" />
          </a>
          <p className="mt-3 text-[12.5px] sm:text-[13px] text-[#7B7F8C]">
            Leva ~2 minutos.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
