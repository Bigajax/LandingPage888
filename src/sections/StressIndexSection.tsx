import React from "react";
import { motion } from "framer-motion";
import StressIndexImage from "@/assets/images/mulher_meditando_transparente.png";

const fadeInUp = {
  hidden: { opacity: 0, y: 18 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.14 + 0.06, duration: 0.45, ease: "easeOut" },
  }),
};

/** Pílula “Apple-like” (glass + hairline + brilho) */
const Pill: React.FC<{ children: React.ReactNode; className?: string }> = ({
  children,
  className = "",
}) => (
  <span
    className={[
      "relative inline-flex items-center gap-2",
      "px-3.5 py-1.5 rounded-full",
      "text-[11px] uppercase tracking-[0.18em] text-white/85",
      "border border-white/12",
      "bg-white/[0.06] supports-[backdrop-filter]:backdrop-blur-xl",
      "shadow-[inset_0_0.5px_0_rgba(255,255,255,0.55),0_8px_24px_rgba(0,0,0,0.22)]",
      className,
    ].join(" ")}
  >
    {/* pontinho */}
    <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--violet-500)] shadow-[0_0_10px_rgba(var(--violet-600-rgb),0.6),0_0_2px_rgba(var(--violet-600-rgb),0.8)_inset]" />
    {children}
    {/* brilho superior */}
    <span
      aria-hidden
      className="
        pointer-events-none absolute inset-0 rounded-full
        [mask-image:linear-gradient(to_bottom,white,transparent_65%)]
        bg-[linear-gradient(180deg,rgba(255,255,255,0.5),rgba(255,255,255,0))]
        opacity-[.18]
      "
    />
  </span>
);

const StressIndexSection: React.FC = () => {
  const frases = [
    "A Eco escuta o que você sente, não só o que você diz.",
    "Tensões se dissolvem, pensamentos se alinham.",
    "Você começa a se ver com mais nitidez.",
  ];

  return (
    <section
      aria-labelledby="claridade-title"
      className="
        relative overflow-hidden
        bg-[#0B0E14] text-white
        py-12 sm:py-14 lg:py-18
        px-5 sm:px-8 lg:px-10
      "
    >
      {/* fundo: halos + vinheta (sutil) */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        {/* halo roxo à esquerda/baixo */}
        <div
          className="
            absolute -left-20 bottom-[-6%]
            w-[45vw] h-[45vw] lg:w-[38vw] lg:h-[38vw]
            rounded-full blur-[110px] opacity-25
            bg-[radial-gradient(50%_50%_at_50%_50%,var(--violet-600)_0%,transparent_65%)]
          "
        />
        {/* halo azulado à direita/cima */}
        <div
          className="
            absolute right-[-12%] -top-16
            w-[52vw] h-[52vw] lg:w-[46vw] lg:h-[46vw]
            rounded-full blur-[120px] opacity-20
            bg-[radial-gradient(50%_50%_at_50%_50%,rgba(var(--indigo-600-rgb),0.55)_0%,transparent_70%)]
          "
        />
        {/* vinheta nas bordas */}
        <div
          className="
            absolute inset-0
            bg-[radial-gradient(130%_110%_at_50%_45%,transparent_58%,rgba(0,0,0,0.42)_100%)]
          "
        />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        {/* texto */}
        <div className="order-2 lg:order-1">
          <Pill>Clareza emocional</Pill>

          <motion.h2
            id="claridade-title"
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.4 }}
            className="
              mt-3
              font-light tracking-[-0.01em]
              leading-[1.15]
              text-[clamp(26px,5.2vw,42px)]
              max-w-[26ch]
            "
          >
            Ver a si mesmo com{" "}
            <span
              className="
                font-semibold bg-clip-text text-transparent
                bg-[linear-gradient(90deg,var(--violet-300)_0%,var(--violet-500)_45%,var(--violet-600)_100%)]
              "
            >
              nitidez
            </span>{" "}
            começa com uma boa escuta.
          </motion.h2>

          <div className="mt-4 sm:mt-5 max-w-[62ch] space-y-2.5">
            {frases.map((frase, i) => (
              <motion.p
                key={i}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.35 }}
                variants={fadeInUp}
                className="text-[15px] sm:text-[16px] leading-relaxed text-white/80"
              >
                {frase}
              </motion.p>
            ))}
          </div>
        </div>

        {/* imagem */}
        <div className="order-1 lg:order-2 relative flex items-center justify-center">
          {/* glow atrás do recorte */}
          <div
            aria-hidden
            className="
              absolute inset-0 -z-[1] mx-auto my-auto
              w-[78%] max-w-[420px] aspect-[4/5]
              rounded-[48%] blur-2xl opacity-30
              bg-[radial-gradient(60%_55%_at_50%_45%,var(--violet-600)_0%,transparent_70%)]
            "
          />
          <motion.img
            src={StressIndexImage}
            alt="Mulher meditando, simbolizando clareza emocional"
            loading="lazy"
            decoding="async"
            initial={{ opacity: 0, scale: 0.985, y: 6 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.35 }}
            className="
              w-[230px] sm:w-[300px] lg:w-[380px]
              h-auto object-contain
              drop-shadow-[0_28px_60px_rgba(0,0,0,0.45)]
            "
          />
        </div>
      </div>
    </section>
  );
};

export default StressIndexSection;
