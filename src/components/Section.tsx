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
    <section id={id} className={`py-16 sm:py-24 ${className}`.trim()} {...props}>
      <Container>
        {(eyebrow || title || description) && (
          <header className={`${wrapperSpacing} ${textAlign} mb-12 space-y-3`}>
            {eyebrow && (
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-ink-secondary/80">
                {eyebrow}
              </p>
            )}
            {title && (
              <h2 className="text-3xl font-semibold tracking-tight text-ink-primary sm:text-4xl">
                {title}
              </h2>
            )}
            {description && <p className="text-base text-ink-secondary sm:text-lg">{description}</p>}
          </header>
        )}
        {children}
      </Container>
    </section>
  );
};

export default Section;
