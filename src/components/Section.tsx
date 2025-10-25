import React from "react";

import Container from "./Container";

type SectionProps = React.HTMLAttributes<HTMLElement> & {
  id?: string;
  eyebrow?: string;
  title?: string;
  description?: string;
  align?: "left" | "center";
  children?: React.ReactNode;
};

const Section: React.FC<SectionProps> = ({
  id,
  className = "",
  children,
  eyebrow,
  title,
  description,
  align = "left",
  ...props
}) => {
  const textAlign = align === "center" ? "text-center" : "text-left";
  const wrapperSpacing = align === "center" ? "mx-auto max-w-2xl" : "max-w-2xl";

  return (
    <section id={id} className={`py-20 sm:py-24 ${className}`.trim()} {...props}>
      <Container>
        {(eyebrow || title || description) && (
          <header className={`${wrapperSpacing} ${textAlign} mb-14 space-y-3`}>
            {eyebrow && (
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-eco-subtle">
                {eyebrow}
              </p>
            )}
            {title && (
              <h2 className="font-display text-3xl font-semibold tracking-[-0.02em] text-eco-text sm:text-4xl">
                {title}
              </h2>
            )}
            {description && <p className="text-base text-eco-subtle sm:text-lg">{description}</p>}
          </header>
        )}
        {children}
      </Container>
    </section>
  );
};

export default Section;
