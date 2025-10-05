// src/components/EcoBubbleOneEye.tsx
import React from "react";
import { motion, useReducedMotion } from "framer-motion";

type EcoState = "idle" | "listening" | "speaking" | "thinking" | "focus";
type EcoVariant = "icon" | "avatar" | "message" | "voice";

export interface EcoBubbleOneEyeProps {
  state?: EcoState;
  variant?: EcoVariant;
  size?: number; // sobrescreve o tamanho da variant
  className?: string;
  "aria-label"?: string;
}

const STATE_LABELS: Record<EcoState, string> = {
  idle: "ECO em repouso",
  listening: "ECO escutando",
  speaking: "ECO respondendo",
  thinking: "ECO refletindo",
  focus: "ECO em foco",
};

const DEFAULT_SIZES: Record<EcoVariant, number> = {
  icon: 24,
  avatar: 40,
  message: 30,
  voice: 240,
};

// Utilitário simples de tipagem para objetos de animação
type MotionCfg = { animate?: any; transition?: any };

const staticCfg = (v: Record<string, any> = {}): MotionCfg => ({ animate: v });

// -------------------- Animações por estado --------------------
const bubbleMotion = (state: EcoState, reduced: boolean): MotionCfg => {
  if (reduced) return state === "focus" ? staticCfg({ scale: 1.02 }) : staticCfg();

  switch (state) {
    case "listening":
      return { animate: { scale: [1, 1.07, 1] }, transition: { duration: 1.6, repeat: Infinity, ease: "easeInOut" } };
    case "speaking":
      return { animate: { rotate: [-2.2, 2.2, -2.2] }, transition: { duration: 1.4, repeat: Infinity, ease: "easeInOut" } };
    case "thinking":
      return {
        animate: { x: [0, 1.8, -1.8, 0], y: [0, -1.6, 1.6, 0] },
        transition: { duration: 3.6, repeat: Infinity, ease: "easeInOut" },
      };
    case "focus":
      return { animate: { scale: [1, 1.04, 1] }, transition: { duration: 2.2, repeat: Infinity, ease: "easeInOut" } };
    default:
      return staticCfg();
  }
};

const irisMotion = (state: EcoState, reduced: boolean): MotionCfg => {
  if (reduced) return staticCfg({ scaleY: 1, scale: 1 });

  if (state === "idle") {
    // piscada eventual
    return {
      animate: { scaleY: [1, 1, 0.15, 1] },
      transition: { duration: 2.4, times: [0, 0.72, 0.82, 1], repeat: Infinity, repeatDelay: 3.4, ease: "easeInOut" },
    };
  }
  if (state === "listening") {
    return { animate: { scale: [1, 1.02, 1] }, transition: { duration: 1.6, repeat: Infinity, ease: "easeInOut" } };
  }
  return staticCfg({ scaleY: 1, scale: 1 });
};

const pupilMotion = (state: EcoState, reduced: boolean): MotionCfg => {
  if (reduced) return staticCfg({ x: 0, y: 0, scale: 1, opacity: 1 });

  switch (state) {
    case "speaking":
      return { animate: { scale: [1, 1.08, 0.96, 1] }, transition: { duration: 1, repeat: Infinity, ease: "easeInOut" } };
    case "thinking":
      return {
        animate: { x: [0, -1.2, 1.4, -0.8, 0], y: [0, 1.2, -1, 0.8, 0] },
        transition: { duration: 4.2, repeat: Infinity, ease: "easeInOut" },
      };
    case "listening":
      return { animate: { opacity: [0.85, 1, 0.85], scale: [1, 1.05, 1] }, transition: { duration: 1.6, repeat: Infinity, ease: "easeInOut" } };
    default:
      return staticCfg({ x: 0, y: 0, scale: 1, opacity: 1 });
  }
};

// -------------------- Componente --------------------
const EcoBubbleOneEye: React.FC<EcoBubbleOneEyeProps> = ({
  state = "idle",
  variant = "icon",
  size,
  className,
  "aria-label": ariaLabel,
}) => {
  const reduceMotion = useReducedMotion();

  const dimension = size ?? DEFAULT_SIZES[variant];
  const r = dimension / 2;

  // proporções do olho (ajustes sutis por variante)
  const irisR =
    (variant === "voice" ? 0.44 : variant === "avatar" ? 0.42 : variant === "message" ? 0.40 : 0.38) * r * 2;
  const pupilR = irisR * 0.45;

  const haloSize = dimension * (variant === "voice" ? 1.4 : 1.2);
  const glowSize = dimension * (variant === "voice" ? 1.5 : 1.35);
  const showListeningHalo = state === "listening";
  const showFocusGlow = state === "focus";

  const label = ariaLabel ?? STATE_LABELS[state];

  return (
    <div
      className={["relative inline-flex select-none items-center justify-center", className].filter(Boolean).join(" ")}
      style={{ width: dimension, height: dimension }}
      role="img"
      aria-label={label}
    >
      {/* Glow (focus) */}
      {showFocusGlow && (
        <motion.span
          aria-hidden
          className="absolute pointer-events-none rounded-full blur-2xl"
          style={{
            width: glowSize,
            height: glowSize,
            background: "radial-gradient(60% 60% at 50% 50%, rgba(0,122,255,0.42), transparent)",
          }}
          animate={
            reduceMotion ? { opacity: 0.55 } : { opacity: [0.45, 0.75, 0.45], scale: [1, 1.06, 1] }
          }
          transition={{ duration: 2.4, repeat: reduceMotion ? 0 : Infinity, ease: "easeInOut" }}
        />
      )}

      {/* Halo (listening) */}
      {showListeningHalo && (
        <motion.span
          aria-hidden
          className="absolute pointer-events-none rounded-full"
          style={{
            width: haloSize,
            height: haloSize,
            background: "radial-gradient(60% 60% at 50% 50%, rgba(0,122,255,0.30), transparent)",
          }}
          animate={
            reduceMotion ? { opacity: 0.5 } : { opacity: [0.35, 0.75, 0.35], scale: [1, 1.08, 1] }
          }
          transition={{ duration: 1.6, repeat: reduceMotion ? 0 : Infinity, ease: "easeInOut" }}
        />
      )}

      {/* Bolha principal */}
      <motion.div
        aria-hidden
        className="absolute inset-0 rounded-full"
        style={{
          background:
            "linear-gradient(180deg, rgba(255,255,255,0.70), rgba(255,255,255,0.40))",
          border: "1px solid rgba(235,238,249,0.9)",
          boxShadow:
            "0 16px 36px rgba(15,23,42,0.08), inset 0 1px 0 rgba(255,255,255,0.7)",
          backdropFilter: "blur(10px)",
          WebkitBackdropFilter: "blur(10px)",
        }}
        {...bubbleMotion(state, !!reduceMotion)}
      />

      {/* Brilho superior da bolha */}
      <div
        aria-hidden
        className="absolute inset-0 rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(120% 100% at 50% 0%, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0) 70%)",
        }}
      />

      {/* --- Olho em SVG para nitidez perfeita --- */}
      <svg
        viewBox={`0 0 ${dimension} ${dimension}`}
        width={dimension}
        height={dimension}
        className="relative"
        aria-hidden
      >
        {/* esclera */}
        <circle cx={r} cy={r} r={r * 0.62} fill="#FFFFFF" opacity={0.95} />

        {/* camada para animar a íris (piscada leve / scaleY) */}
        <motion.g {...irisMotion(state, !!reduceMotion)} transformOrigin={`${r}px ${r}px`}>
          {/* íris (gradiente iOS blue) */}
          <defs>
            <radialGradient id="irisGrad" cx="30%" cy="30%" r="70%">
              <stop offset="0%" stopColor="#7AA7FF" stopOpacity="0.95" />
              <stop offset="100%" stopColor="#2F6BFF" stopOpacity="0.85" />
            </radialGradient>
          </defs>
          <circle cx={r} cy={r} r={irisR / 2} fill="url(#irisGrad)" />

          {/* brilho da íris */}
          <circle cx={r - r * 0.12} cy={r - r * 0.12} r={r * 0.08} fill="#FFFFFF" opacity={0.7} />

          {/* pupila (animada) */}
          <motion.circle
            cx={r}
            cy={r}
            r={pupilR / 2}
            fill="url(#pupilGrad)"
            {...pupilMotion(state, !!reduceMotion)}
            transformOrigin={`${r}px ${r}px`}
          />

          {/* gradiente radial da pupila */}
          <defs>
            <radialGradient id="pupilGrad" cx="30%" cy="30%" r="120%">
              <stop offset="0%" stopColor="#141B2D" />
              <stop offset="100%" stopColor="#02050C" />
            </radialGradient>
          </defs>
        </motion.g>
      </svg>
    </div>
  );
};

export default EcoBubbleOneEye;
