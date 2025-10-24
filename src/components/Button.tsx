import React from "react";

export type ButtonVariant = "primary" | "secondary" | "ghost";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
  fullWidth?: boolean;
};

const baseStyles =
  "inline-flex items-center justify-center gap-2 rounded-full font-medium text-sm sm:text-base transition-[background,transform,box-shadow] duration-200 ease-subtle focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue/80 focus-visible:ring-offset-2 focus-visible:ring-offset-surface-base";

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-brand-blue text-white shadow-[0_12px_32px_rgba(0,122,255,0.22)] motion-safe:hover:-translate-y-0.5 motion-safe:hover:bg-brand-hover motion-safe:hover:shadow-[0_18px_40px_rgba(0,122,255,0.25)] motion-safe:active:translate-y-0 focus-visible:shadow-[0_0_0_3px_rgba(0,122,255,0.35)]",
  secondary:
    "border border-surface-border text-ink-primary bg-white motion-safe:hover:-translate-y-0.5 motion-safe:hover:bg-surface-tint motion-safe:hover:shadow-soft focus-visible:shadow-[0_0_0_3px_rgba(0,122,255,0.22)]",
  ghost:
    "text-ink-secondary hover:text-ink-primary",
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
