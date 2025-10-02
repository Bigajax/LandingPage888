import { CSSProperties } from "react";
import { motion, useReducedMotion } from "framer-motion";

type SizeToken =
  | number
  | {
      width: number;
      height: number;
    };

export type MotionConfig = {
  floatAmplitude?: number;
  floatDuration?: number;
  rotateAmplitude?: number;
  rotateDuration?: number;
  scaleOnHover?: number;
};

export type EyeBubbleToken = {
  id: string;
  size?: SizeToken;
  minHeight?: number;
  background: string;
  border?: {
    color: string;
    width: number;
  };
  glowColor?: string;
  textColor?: string;
  accentColor?: string;
  irisGradient: string;
  pupilColor: string;
  reflectionColor?: string;
  highlightColor?: string;
};

type EyeBubbleBaseProps = {
  token: EyeBubbleToken;
  motionConfig?: MotionConfig;
  className?: string;
};

const defaultMotion: Required<MotionConfig> = {
  floatAmplitude: 12,
  floatDuration: 7,
  rotateAmplitude: 1.8,
  rotateDuration: 14,
  scaleOnHover: 1.04,
};

const baseClassName =
  "relative isolate flex w-full max-w-md flex-col items-center justify-center overflow-hidden rounded-[56px] px-10 py-12 text-center";

export function EyeBubbleBase({
  token,
  motionConfig,
  className,
}: EyeBubbleBaseProps) {
  const prefersReducedMotion = useReducedMotion();
  const config = { ...defaultMotion, ...motionConfig };

  const sizeStyle: CSSProperties =
    typeof token.size === "number"
      ? { width: token.size, height: token.size }
      : token.size
        ? { width: token.size.width, height: token.size.height }
        : {};

  const style: CSSProperties = {
    background: token.background,
    color: token.textColor ?? "#0f172a",
    boxShadow: token.glowColor
      ? `0 28px 60px ${token.glowColor}`
      : "0 22px 45px rgba(15, 23, 42, 0.25)",
    border: token.border
      ? `${token.border.width}px solid ${token.border.color}`
      : "1px solid rgba(255, 255, 255, 0.2)",
    minHeight: token.minHeight ?? 320,
    ...sizeStyle,
  };

  const animation = prefersReducedMotion
    ? { y: 0, rotate: 0 }
    : {
        y: [0, -config.floatAmplitude, 0, config.floatAmplitude, 0],
        rotate: [0, config.rotateAmplitude, -config.rotateAmplitude, 0],
        transition: {
          duration: config.floatDuration,
          repeat: Infinity,
          ease: "easeInOut",
        },
      };

  const hover = prefersReducedMotion
    ? {}
    : {
        scale: config.scaleOnHover,
        transition: { duration: 0.4, ease: "easeOut" },
      };

  return (
    <motion.div
      className={[baseClassName, className].filter(Boolean).join(" ")}
      style={style}
      initial={{ opacity: 0, scale: 0.94 }}
      animate={{ opacity: 1, scale: 1, ...animation }}
      whileHover={hover}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="pointer-events-none absolute -top-20 left-12 h-44 w-44 rounded-full bg-white/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 right-10 h-56 w-56 rounded-full bg-white/10 blur-3xl" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/15 via-transparent to-black/15" />
      <div className="relative z-10 flex w-full flex-1 items-center justify-center py-6">
        <div className="relative aspect-square w-[min(260px,72%)] max-w-[320px]">
          <div
            className="absolute inset-0 rounded-full shadow-[0_22px_48px_rgba(15,23,42,0.35)]"
            style={{ background: token.background }}
          >
            <div className="absolute inset-[10%] rounded-full border border-white/30" />
            <div
              className="absolute inset-[16%] rounded-full"
              style={{ background: token.irisGradient }}
            />
            <div
              className="absolute inset-[34%] rounded-full"
              style={{ background: token.pupilColor }}
            />
            <div
              className="absolute left-[24%] top-[26%] h-[28%] w-[28%] rounded-full blur-[1px]"
              style={{
                background: token.reflectionColor,
                opacity: 0.75,
              }}
            />
            <div
              className="absolute right-[22%] bottom-[24%] h-[16%] w-[16%] rounded-full blur-sm"
              style={{ background: token.highlightColor, opacity: 0.6 }}
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default EyeBubbleBase;
