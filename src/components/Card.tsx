import React from "react";

type CardProps = React.HTMLAttributes<HTMLDivElement> & {
  as?: React.ElementType;
};

const Card: React.FC<CardProps> = ({ as, className = "", children, ...props }) => {
  const Component = (as as React.ElementType) ?? "div";

  return (
    <Component
      className={`rounded-[16px] border border-[var(--line)] bg-white p-6 sm:p-8 transition-all duration-150 ease-subtle hover:border-[rgba(0,0,0,0.1)] focus-within:border-[rgba(0,0,0,0.1)] focus-within:outline focus-within:outline-[rgba(0,122,255,0.25)] focus-within:outline-1 focus-within:outline-offset-2 ${className}`.trim()}
      {...props}
    >
      {children}
    </Component>
  );
};

export default Card;
