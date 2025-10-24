import React from "react";

type IconBadgeProps = {
  children: React.ReactNode;
  tone?: "brand" | "neutral";
  className?: string;
};

const IconBadge: React.FC<IconBadgeProps> = ({ children, tone = "brand", className = "" }) => {
  const toneClasses =
    tone === "brand"
      ? "bg-brand-blue/10 text-brand-blue"
      : "bg-surface-muted/30 text-ink-soft";

  return (
    <span
      className={`inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-white/60 backdrop-blur-sm ${toneClasses} ${className}`.trim()}
      aria-hidden="true"
    >
      {children}
    </span>
  );
};

export default IconBadge;
