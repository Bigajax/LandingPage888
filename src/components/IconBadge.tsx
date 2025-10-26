import React from "react";

type IconBadgeProps = {
  children: React.ReactNode;
  tone?: "brand" | "neutral";
  className?: string;
};

const IconBadge: React.FC<IconBadgeProps> = ({ children, tone = "brand", className = "" }) => {
  const toneClasses =
    tone === "brand"
      ? "border-[rgba(0,0,0,0.08)] bg-white text-eco-brand"
      : "border-[var(--line)] bg-white text-eco-subtle";

  return (
    <span
      className={`inline-flex h-12 w-12 items-center justify-center rounded-[14px] border ${toneClasses} ${className}`.trim()}
      aria-hidden="true"
    >
      {children}
    </span>
  );
};

export default IconBadge;
