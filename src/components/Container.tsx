import React from "react";

type ContainerProps<T extends React.ElementType> = {
  as?: T;
  className?: string;
  children: React.ReactNode;
} & Omit<React.ComponentPropsWithoutRef<T>, "as" | "children" | "className">;

const Container = <T extends React.ElementType = "div">({
  as,
  className = "",
  children,
  ...props
}: ContainerProps<T>) => {
  const Component = as ?? "div";

  return (
    <Component className={`mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 ${className}`.trim()} {...props}>
      {children}
    </Component>
  );
};

export default Container;
