// src/sections/MentoresStrip.tsx
import React, { useEffect, useRef, useState } from "react";
import marco from "@/assets/mentores/marco-aurelio.png";
import seneca from "@/assets/mentores/seneca.png";
import daniel from "@/assets/mentores/daniel-kahneman.png";
import nassim from "@/assets/mentores/nassim-taleb.png";
import brene from "@/assets/mentores/brene-brown.png";
import joe from "@/assets/mentores/joe-dispenza.png";

interface Mentor {
  name: string;
  discipline: "Filosofia" | "Psicologia" | "Ciência";
  area: string;
  description: string;
  image: string;
  alt: string;
}

const MENTORS: Mentor[] = [
  {
    name: "Marco Aurélio",
    discipline: "Filosofia",
    area: "Estoicismo",
    description: "Stoicism principles for daily clarity.",
    image: marco,
    alt: "Busto de Marco Aurélio",
  },
  {
    name: "Sêneca",
    discipline: "Filosofia",
    area: "Estoicismo",
    description: "Practical serenity for adversity.",
    image: seneca,
    alt: "Busto de Sêneca",
  },
  {
    name: "Daniel Kahneman",
    discipline: "Psicologia",
    area: "Psicologia comportamental",
    description: "Spot biases for wiser choices.",
    image: daniel,
    alt: "Busto de Daniel Kahneman",
  },
  {
    name: "Brené Brown",
    discipline: "Psicologia",
    area: "Vulnerabilidade",
    description: "Authenticity & emotional courage.",
    image: brene,
    alt: "Busto de Brené Brown",
  },
  {
    name: "Nassim Taleb",
    discipline: "Ciência",
    area: "Antifragilidade",
    description: "Micro-actions that build antifragility.",
    image: nassim,
    alt: "Busto de Nassim Taleb",
  },
  {
    name: "Dr. Joe Dispenza",
    discipline: "Ciência",
    area: "Neurociência aplicada",
    description: "Habits + attention to reconfigure states.",
    image: joe,
    alt: "Busto de Dr. Joe Dispenza",
  },
];

interface MentorCardProps {
  mentor: Mentor;
  index: number;
  isVisible: boolean;
  setRef: (element: HTMLElement | null) => void;
}

const badgeStyles: Record<Mentor["discipline"], string> = {
  Filosofia: "bg-white/70 text-[#4F46E5]",
  Psicologia: "bg-white/70 text-[#4F46E5]",
  Ciência: "bg-white/70 text-[#4F46E5]",
};

const MentorCard: React.FC<MentorCardProps> = ({ mentor, index, isVisible, setRef }) => {
  const revealClass = isVisible
    ? "motion-safe:opacity-100 motion-safe:translate-y-0"
    : "motion-safe:opacity-0 motion-safe:translate-y-3";
  const delay = Math.min(120, 80 + index * 20);

  return (
    <article
      ref={setRef}
      data-index={index}
      tabIndex={0}
      className={`group h-full focus:outline-none focus-visible:ring-2 focus-visible:ring-[#A78BFA] ${revealClass} motion-safe:duration-500 motion-safe:ease-out motion-safe:transition-all`}
      style={{ transitionDelay: isVisible ? `${delay}ms` : undefined }}
    >
      <div
        className="flex h-full flex-col items-center rounded-3xl border border-white/60 bg-white/55 px-8 pb-10 pt-8 text-center text-[#111827]
          shadow-sm backdrop-blur-xl transition-all duration-300 ease-out group-hover:-translate-y-1 group-hover:shadow-lg"
      >
        <div className="relative w-full max-w-[220px]">
          <div className="relative aspect-[3/4] overflow-hidden rounded-[2rem] bg-white/60">
            <div className="absolute inset-0 bg-gradient-to-br from-white/70 via-white/30 to-white/10" aria-hidden />
            <img
              src={mentor.image}
              alt={mentor.alt}
              loading="lazy"
              decoding="async"
              className="relative z-10 h-full w-full object-contain p-6"
            />
          </div>
        </div>

        <div className="mt-8 flex w-full flex-col items-center gap-2">
          <span
            className={`inline-flex items-center rounded-full border border-white/70 px-3 py-1 text-xs font-medium shadow-sm backdrop-blur ${badgeStyles[mentor.discipline]}`}
          >
            {mentor.discipline}
          </span>
          <h3 className="text-lg font-semibold text-[#111827]">{mentor.name}</h3>
          <p className="text-sm font-medium text-[#6B7280]">{mentor.area}</p>
          <p className="mt-2 text-sm text-[#6B7280]">{mentor.description}</p>
        </div>
      </div>
    </article>
  );
};

const MentoresStrip: React.FC = () => {
  const cardRefs = useRef<(HTMLElement | null)[]>([]);
  const [visibleCards, setVisibleCards] = useState<boolean[]>(() => MENTORS.map(() => false));

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) {
      setVisibleCards(MENTORS.map(() => true));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute("data-index"));
            setVisibleCards((prev) => {
              if (prev[index]) return prev;
              const next = [...prev];
              next[index] = true;
              return next;
            });
          }
        });
      },
      { threshold: 0.25, rootMargin: "0px 0px -80px" }
    );

    cardRefs.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
      <section
        id="mentores"
        aria-labelledby="mentores-title"
        className="relative isolate overflow-hidden bg-[#F9FAFF] py-24"
      >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
      >
        <div className="absolute -top-40 right-[15%] h-[36rem] w-[36rem] rounded-full bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.18),transparent_65%)]" />
        <div className="absolute bottom-[-20%] left-[8%] h-[44rem] w-[44rem] rounded-full bg-[radial-gradient(circle_at_center,rgba(79,70,229,0.12),transparent_70%)]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center justify-center rounded-full border border-white/60 bg-white/40 px-4 py-1 text-xs font-medium text-[#4F46E5] backdrop-blur">
            Referências • Base das respostas
          </span>
          <h2 id="mentores-title" className="mt-6 text-3xl font-semibold leading-tight tracking-tight text-[#111827] sm:text-4xl">
            Grandes mentes, orientações humanas.
          </h2>
          <p className="mt-4 text-base text-[#6B7280] sm:text-lg">
            Filosofia, psicologia e ciência convergem para respostas calmas, aplicáveis e feitas sob medida para você.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-10 lg:grid-cols-3 xl:grid-cols-5 2xl:grid-cols-6">
          {MENTORS.map((mentor, index) => (
            <MentorCard
              key={mentor.name}
              mentor={mentor}
              index={index}
              isVisible={visibleCards[index]}
              setRef={(element) => {
                cardRefs.current[index] = element;
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MentoresStrip;
