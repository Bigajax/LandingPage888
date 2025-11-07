import React from "react";

type IconBadgeProps = {
  children: React.ReactNode;
  tone?: "brand" | "neutral";
  className?: string;
};

const IconBadge: React.FC<IconBadgeProps> = ({ children, tone = "brand", className = "" }) => {
  const toneClasses =
    tone === "brand"
      ? "bg-brand-blue/15 text-brand-blue"
      : "bg-[rgba(167,132,108,0.12)] text-ink-soft";

  return (
    <span
      className={`inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-white/40 backdrop-blur ${toneClasses} ${className}`.trim()}
      aria-hidden="true"
    >
      {children}
    </span>
  );
};

export default IconBadge;
