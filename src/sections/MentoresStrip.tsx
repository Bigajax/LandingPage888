// BEFORE (resumo)
// AFTER (novo)
import React from "react";
import marco from "@/assets/mentores/marco-aurelio.png";
import seneca from "@/assets/mentores/seneca.png";
import daniel from "@/assets/mentores/daniel-kahneman.png";
import nassim from "@/assets/mentores/nassim-taleb.png";
import brene from "@/assets/mentores/brene-brown.png";
import joe from "@/assets/mentores/joe-dispenza.png";

type MentorCardProps = {
  area: string;
  nome: string;
  tagline: string;
  descricao: string;
  imgSrc: string;
  imgAlt: string;
};

const MENTORES: MentorCardProps[] = [
  {
    area: "Filosofia",
    nome: "Marco Aurélio",
    tagline: "Estoicismo",
    descricao:
      "Princípios estoicos para lidar com emoções e foco no que depende de você.",
    imgSrc: marco,
    imgAlt: "Ilustração de Marco Aurélio",
  },
  {
    area: "Filosofia",
    nome: "Sêneca",
    tagline: "Estoicismo",
    descricao:
      "Perspectiva prática sobre adversidades e serenidade no cotidiano.",
    imgSrc: seneca,
    imgAlt: "Ilustração de Sêneca",
  },
  {
    area: "Psicologia",
    nome: "Daniel Kahneman",
    tagline: "Psicologia comportamental",
    descricao:
      "Reconhecer vieses e padrões mentais para escolhas mais conscientes.",
    imgSrc: daniel,
    imgAlt: "Ilustração de Daniel Kahneman",
  },
  {
    area: "Psicologia",
    nome: "Brené Brown",
    tagline: "Vulnerabilidade & coragem",
    descricao:
      "Convites à autenticidade, autocompaixão e coragem emocional.",
    imgSrc: brene,
    imgAlt: "Ilustração de Brené Brown",
  },
  {
    area: "Ciência",
    nome: "Nassim Taleb",
    tagline: "Antifragilidade",
    descricao:
      "Transformar incerteza em crescimento: micro-ações que fortalecem no tempo.",
    imgSrc: nassim,
    imgAlt: "Ilustração de Nassim Taleb",
  },
  {
    area: "Ciência",
    nome: "Dr. Joe Dispenza",
    tagline: "Neurociência aplicada",
    descricao:
      "Hábitos e atenção como alavancas para reconfigurar estados emocionais.",
    imgSrc: joe,
    imgAlt: "Ilustração de Dr. Joe Dispenza",
  },
];

const MentorCard: React.FC<MentorCardProps> = ({
  area,
  nome,
  tagline,
  descricao,
  imgSrc,
  imgAlt,
}) => (
  <article
    className="group glass glass-hover focus:outline-none focus-visible:ring-2 focus-visible:ring-[#A78BFA]"
    tabIndex={0}
  >
    <div className="flex flex-col h-full p-6 gap-6">
      <div className="relative overflow-hidden rounded-3xl">
        <div className="aspect-[3/4] w-full overflow-hidden rounded-3xl">
          <img
            src={imgSrc}
            alt={imgAlt}
            loading="lazy"
            decoding="async"
            width={300}
            height={400}
            className="h-full w-full object-cover"
          />
        </div>
      </div>
      <div className="flex flex-col gap-3 text-white">
        <span className="self-start text-[11px] px-2.5 py-1 rounded-full bg-white/60 text-slate-900 font-semibold uppercase tracking-wide">
          {area}
        </span>
        <div className="space-y-1">
          <h3 className="text-lg font-semibold tracking-tight leading-tight">{nome}</h3>
          <p className="text-sm text-white/80">{tagline}</p>
        </div>
        <p className="text-sm text-white/75 leading-relaxed line-clamp-3">{descricao}</p>
      </div>
    </div>
  </article>
);

const MentoresStrip: React.FC = () => {
  return (
    <section id="mentores" aria-labelledby="mentores-title" className="liquid-bg py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <header className="text-center py-16 md:py-24">
          <h2
            id="mentores-title"
            className="text-3xl md:text-5xl font-semibold text-white tracking-tight leading-tight"
          >
            Mentes que guiam a Eco
          </h2>
          <p className="mt-4 text-base md:text-lg text-white/80 tracking-tight leading-tight max-w-2xl mx-auto">
            Uma curadoria de referências em filosofia, psicologia e ciência para inspirar respostas mais humanas.
          </p>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 2xl:grid-cols-6 gap-8 md:gap-10">
          {MENTORES.map((mentor) => (
            <MentorCard key={mentor.nome} {...mentor} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MentoresStrip;
