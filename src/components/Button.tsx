import React from "react";

export type ButtonVariant = "primary" | "secondary" | "ghost";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
  fullWidth?: boolean;
};

const baseStyles =
  "inline-flex items-center justify-center gap-2 rounded-full border font-medium text-sm sm:text-base transition-all duration-150 ease-subtle focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgba(0,122,255,0.45)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg)]";

const variants: Record<ButtonVariant, string> = {
  primary: "border-transparent bg-eco-brand text-white hover:bg-[#006BDB]",
  secondary: "border-[var(--line)] bg-white text-eco-text hover:border-[rgba(0,0,0,0.1)]",
  ghost: "border-transparent bg-transparent text-eco-subtle hover:text-eco-text",
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
