import EyeBubbleBase, {
  EyeBubbleToken,
  MotionConfig,
} from "./EyeBubbleBase";

const ecoBubbleToken: EyeBubbleToken = {
  id: "eco-bubble-one-eye",
  background:
    "radial-gradient(circle at 22% 18%, rgba(232, 244, 255, 0.92), rgba(125, 211, 252, 0.82) 44%, rgba(59, 130, 246, 0.9) 78%, rgba(30, 64, 175, 0.95) 100%)",
  border: { color: "rgba(255, 255, 255, 0.45)", width: 1 },
  glowColor: "rgba(59, 130, 246, 0.3)",
  textColor: "#0f172a",
  accentColor: "#38bdf8",
  irisGradient:
    "radial-gradient(circle at 48% 42%, rgba(191, 219, 254, 0.85), rgba(96, 165, 250, 0.88) 36%, rgba(37, 99, 235, 0.96) 74%, rgba(30, 64, 175, 0.98) 100%)",
  pupilColor: "rgba(2, 6, 23, 0.95)",
  reflectionColor: "rgba(255, 255, 255, 0.75)",
  highlightColor: "rgba(125, 211, 252, 0.65)",
  minHeight: 360,
};

const ecoMotion: MotionConfig = {
  floatAmplitude: 16,
  floatDuration: 9,
  rotateAmplitude: 2.2,
  rotateDuration: 18,
  scaleOnHover: 1.08,
};

export type EcoBubbleOneEyeProps = {
  className?: string;
};

const EcoBubbleOneEye = ({ className }: EcoBubbleOneEyeProps) => {
  return (
    <EyeBubbleBase
      token={ecoBubbleToken}
      motionConfig={ecoMotion}
      className={className}
    />
  );
};

export default EcoBubbleOneEye;
