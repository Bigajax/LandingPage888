import EyeBubbleBase, {
  EyeBubbleToken,
  MotionConfig,
} from "./EyeBubbleBase";

const ecoBubbleToken: EyeBubbleToken = {
  id: "eco-bubble-one-eye",
  background:
    "radial-gradient(circle at 20% 20%, rgba(224, 255, 222, 0.85), rgba(16, 185, 129, 0.85) 42%, rgba(5, 150, 105, 0.95) 100%)",
  border: { color: "rgba(255, 255, 255, 0.45)", width: 1 },
  glowColor: "rgba(16, 185, 129, 0.35)",
  textColor: "#022c22",
  accentColor: "#22d3ee",
  irisGradient:
    "radial-gradient(circle at 50% 45%, rgba(34, 211, 238, 0.8), rgba(6, 182, 212, 0.85) 35%, rgba(22, 101, 216, 0.95) 75%)",
  pupilColor: "rgba(2, 6, 23, 0.95)",
  reflectionColor: "rgba(255, 255, 255, 0.75)",
  highlightColor: "rgba(255, 255, 255, 0.35)",
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
    <EyeBubbleBase token={ecoBubbleToken} motionConfig={ecoMotion} className={className}>
      <div className="relative flex w-full flex-1 flex-col items-center justify-center gap-6">
        <div className="relative flex items-center justify-center">
          <div
            className="relative h-32 w-32 rounded-full shadow-[0_22px_40px_rgba(13,148,136,0.4)]"
            style={{ background: ecoBubbleToken.irisGradient }}
          >
            <div
              className="absolute inset-8 rounded-full"
              style={{ background: ecoBubbleToken.pupilColor }}
            />
            <div
              className="absolute left-3 top-6 h-10 w-10 rounded-full blur-[1px]"
              style={{ background: ecoBubbleToken.reflectionColor, opacity: 0.7 }}
            />
            <div className="absolute right-4 bottom-6 h-6 w-6 rounded-full bg-white/40 blur-sm" />
          </div>
          <div
            className="pointer-events-none absolute inset-x-4 top-1 h-6 rounded-full blur-lg"
            style={{ background: ecoBubbleToken.highlightColor }}
          />
          <div className="pointer-events-none absolute inset-x-10 bottom-0 h-4 rounded-full bg-emerald-900/20 blur-lg" />
        </div>
        <div className="space-y-2 text-emerald-950">
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-emerald-700/60">
            Eco Vision
          </p>
          <h3 className="text-xl font-semibold leading-tight">
            Monitoramento inteligente de sustentabilidade
          </h3>
          <p className="text-sm text-emerald-800/70">
            Acompanhe indicadores ambientais em tempo real com uma interface inspirada na biomimética.
          </p>
        </div>
        <div className="flex items-center gap-3 text-xs font-medium text-emerald-950/80">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/60 shadow-inner">
            92%
          </span>
          <span className="rounded-full bg-emerald-900/10 px-4 py-2">
            Índice médio de neutralidade de carbono
          </span>
        </div>
      </div>
    </EyeBubbleBase>
  );
};

export default EcoBubbleOneEye;
