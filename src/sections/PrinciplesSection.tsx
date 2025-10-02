import React from "react";
import { Shield, Heart, Brain } from "lucide-react";

type Principle = {
  title: string;
  description: string;
  icon: React.ElementType;
};

const principles: Principle[] = [
  {
    title: "Espaço Seguro",
    description:
      "Um ambiente protegido para você se expressar com liberdade, sem medo ou julgamento.",
    icon: Shield,
  },
  {
    title: "Escuta Presente",
    description:
      "Atenção verdadeira e devolutiva cuidadosa para apoiar quem você é, sem pressa ou ruído.",
    icon: Heart,
  },
  {
    title: "Perspectiva Emocional",
    description:
      "Enxergar além do óbvio, reconhecendo nuances para transformar confusão em clareza.",
    icon: Brain,
  },
];

/** Cápsula do ícone — branco com brilho leve e um halo suave */
const IconBadge: React.FC<{ Icon: React.ElementType }> = ({ Icon }) => (
  <span
    aria-hidden
    className="relative grid h-12 w-12 place-items-center rounded-xl border border-[color:rgba(var(--violet-600-rgb),0.2)] shadow-[0_14px_34px_rgba(var(--violet-600-rgb),0.12)] sm:h-13 sm:w-13"
    style={{
      background: "linear-gradient(180deg, rgba(255,255,255,0.96), #FFFFFF)",
      boxShadow:
        "0 14px 34px rgba(var(--violet-600-rgb),0.12), inset 0 1px 0 rgba(255,255,255,0.78)",
    }}
  >
    <span
      className="absolute inset-0 rounded-xl"
      style={{
        background:
          "radial-gradient(62% 62% at 50% 50%, rgba(var(--violet-600-rgb),0.16) 0%, transparent 72%)",
      }}
    />
    <Icon className="relative z-[1] text-[color:var(--violet-600)]" size={20} strokeWidth={1.9} />
  </span>
);

const PrinciplesSection: React.FC = () => {
  return (
    <section
      id="principios"
      className="
        relative overflow-hidden
        bg-[#F7F8FC] py-16 sm:py-20 px-6
      "
    >
      {/* Halos bem sutis no fundo para profundidade */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[70vw] h-[70vw] max-w-[900px] rounded-full blur-[120px] opacity-40 bg-[radial-gradient(circle,#E9E8FF_0%,transparent_65%)]" />
        <div className="absolute -bottom-28 right-[-10%] w-[50vw] h-[50vw] rounded-full blur-[120px] opacity-30 bg-[radial-gradient(circle,#E6F0FF_0%,transparent_70%)]" />
      </div>

      {/* Título + subtítulo */}
      <div className="relative max-w-4xl mx-auto text-center mb-10 sm:mb-12">
        <h2 className="heading-lg font-semibold">
          <span className="text-[#1D1D1F]">Nossos </span>
          <span className="bg-gradient-to-r from-[color:var(--violet-500)] to-[color:var(--violet-600)] bg-clip-text text-transparent">
            Princípios
          </span>
        </h2>
        <p className="mt-3 subheading text-[#6E6E73] max-w-2xl mx-auto">
          Segurança, presença e profundidade para oferecer um espaço confiável
          onde você possa se ouvir com clareza.
        </p>
      </div>

      {/* Cards */}
      <div className="relative max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 sm:gap-6">
        {principles.map(({ title, description, icon: Icon }) => (
          <article
            key={title}
            className="
              group rounded-[22px] bg-white/90
              border border-[color:rgba(var(--violet-600-rgb),0.18)]
              p-6 sm:p-7
              shadow-[0_16px_36px_rgba(var(--violet-600-rgb),0.12)]
              transition-all duration-300
              hover:-translate-y-[1px]
              hover:bg-white
              hover:shadow-[0_24px_48px_rgba(var(--violet-600-rgb),0.18)]
            "
          >
            <div className="flex flex-col items-center text-center">
              <IconBadge Icon={Icon} />
              <h3 className="mt-4 text-[18px] sm:text-[20px] font-semibold text-[#0F1115] tracking-tight">
                {title}
              </h3>
              <p className="mt-2 text-[14px] sm:text-[15px] leading-relaxed text-[#5E616B]">
                {description}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default PrinciplesSection;
