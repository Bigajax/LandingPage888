import React from "react";

export type ButtonVariant = "primary" | "secondary" | "ghost";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
  fullWidth?: boolean;
};

const baseStyles =
  "inline-flex items-center justify-center gap-2 rounded-full font-medium text-sm sm:text-base transition-[background,transform,box-shadow] duration-200 ease-subtle focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue/70 focus-visible:ring-offset-2 focus-visible:ring-offset-surface-base";

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-[linear-gradient(120deg,#A7846C_0%,#CDB8A8_45%,#6EC8FF_100%)] text-white shadow-[0_22px_45px_-20px_rgba(56,50,42,0.45)] motion-safe:hover:-translate-y-0.5 motion-safe:hover:shadow-[0_28px_55px_-18px_rgba(56,50,42,0.4)] motion-safe:active:translate-y-0 focus-visible:shadow-[0_0_0_3px_rgba(110,200,255,0.35)]", // prettier-ignore
  secondary:
    "border border-[rgba(56,50,42,0.2)] bg-surface-subtle/80 text-ink-base motion-safe:hover:-translate-y-0.5 motion-safe:hover:bg-surface-subtle motion-safe:hover:shadow-soft focus-visible:shadow-[0_0_0_3px_rgba(110,200,255,0.25)]", // prettier-ignore
  ghost:
    "text-ink-soft hover:text-ink-base", // fallback variant if needed
};

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className = "", variant = "primary", fullWidth = false, children, type = "button", ...props }, ref) => {
    const widthCls = fullWidth ? "w-full" : "w-auto";
    const styles = `${baseStyles} ${variants[variant]} ${widthCls} ${className}`.trim();

    return (
      <button ref={ref} type={type} className={styles} {...props}>
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
