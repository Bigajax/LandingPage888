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
    <Component className={`mx-auto w-full max-w-[1200px] px-6 sm:px-8 lg:px-10 ${className}`.trim()} {...props}>
      {children}
    </Component>
  );
};

export default Container;
