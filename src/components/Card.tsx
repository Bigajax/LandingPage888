import React from "react";

type CardProps = React.HTMLAttributes<HTMLDivElement> & {
  as?: React.ElementType;
};

const Card: React.FC<CardProps> = ({ as, className = "", children, ...props }) => {
  const Component = (as as React.ElementType) ?? "div";

  return (
    <Component className={`glass-panel rounded-[28px] p-6 sm:p-8 transition duration-200 ease-subtle ${className}`.trim()} {...props}>
      {children}
    </Component>
  );
};

export default Card;
