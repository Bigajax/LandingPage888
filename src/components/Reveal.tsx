import type {
  ComponentPropsWithoutRef,
  CSSProperties,
  ElementType,
  ReactNode,
} from "react";

type RevealProps<T extends ElementType> = {
  as?: T;
  children: ReactNode;
  className?: string;
  index?: number;
  delayIncrement?: number;
  delayOffset?: number;
  duration?: number;
  ease?: string;
  style?: CSSProperties;
} & Omit<ComponentPropsWithoutRef<T>, "as" | "className" | "style">;

const DEFAULT_EASE = "cubic-bezier(0.16, 1, 0.3, 1)";

const Reveal = <T extends ElementType = "div">({
  as,
  children,
  className = "",
  index = 0,
  delayIncrement = 90,
  delayOffset = 0,
  duration = 820,
  ease = DEFAULT_EASE,
  style,
  ...rest
}: RevealProps<T>) => {
  const Component = (as ?? "div") as ElementType;
  const computedDelay = Math.max(0, delayOffset + index * delayIncrement);

  return (
    <Component
      className={`reveal transition-all duration-700 ease-out will-change-[opacity,transform] ${className}`.trim()}
      style={{
        transitionDelay: `${computedDelay}ms`,
        transitionDuration: `${duration}ms`,
        transitionTimingFunction: ease,
        ...style,
      }}
      {...rest}
    >
      {children}
    </Component>
  );
};

export default Reveal;
