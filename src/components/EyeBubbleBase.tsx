import { CSSProperties, PropsWithChildren } from "react";
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

type EyeBubbleBaseProps = PropsWithChildren<{
  token: EyeBubbleToken;
  motionConfig?: MotionConfig;
  className?: string;
}>;

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
  children,
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
      <div className="pointer-events-none absolute -top-24 left-16 h-48 w-48 rounded-full bg-white/15 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-28 right-12 h-60 w-60 rounded-full bg-white/10 blur-3xl" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-black/10" />
      <div className="relative z-10 flex w-full flex-1 flex-col items-center justify-center">
        {children}
      </div>
    </motion.div>
  );
}

export default EyeBubbleBase;
