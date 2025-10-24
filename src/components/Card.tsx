import React from "react";

type CardProps = React.HTMLAttributes<HTMLDivElement> & {
  as?: React.ElementType;
};

const Card: React.FC<CardProps> = ({ as, className = "", children, ...props }) => {
  const Component = (as as React.ElementType) ?? "div";

  return (
    <Component
      className={`rounded-2xl border border-surface-muted/60 bg-white/90 p-6 sm:p-8 shadow-soft transition duration-200 ease-subtle ${className}`.trim()}
      {...props}
    >
      {children}
    </Component>
  );
};

export default Card;
