import React from "react";

import Container from "../components/Container";

type StoreBadge = {
  href: string;
  prefix: string;
  label: string;
  icon: React.ReactNode;
};

const storeBadges: StoreBadge[] = [
  {
    href: "#",
    prefix: "Download on the",
    label: "App Store",
    icon: (
      <svg
        className="h-8 w-8"
        viewBox="0 0 40 40"
        fill="currentColor"
        role="img"
        aria-hidden
      >
        <path d="M26.91 21.4c-.05-2.94 2.45-4.37 2.56-4.43-1.4-2.05-3.57-2.33-4.33-2.36-1.84-.19-3.58 1.1-4.51 1.1-.94 0-2.38-1.07-3.92-1.04-2 0-3.84 1.17-4.87 2.97-2.09 3.62-.53 8.96 1.48 11.89 1.01 1.46 2.2 3.1 3.77 3.04 1.5-.06 2.05-.98 3.85-.98 1.8 0 2.3.98 3.9.95 1.61-.03 2.62-1.48 3.61-2.95 1.15-1.68 1.62-3.33 1.64-3.42-.04-.02-3.14-1.2-3.18-4.77z" />
        <path d="M23.59 12.34c.81-1 1.36-2.4 1.21-3.77-1.17.05-2.66.8-3.52 1.78-.77.87-1.44 2.27-1.26 3.61 1.32.1 2.68-.67 3.57-1.62z" />
      </svg>
    ),
  },
  {
    href: "#",
    prefix: "Get it on",
    label: "Google Play",
    icon: (
      <svg
        className="h-8 w-8"
        viewBox="0 0 40 40"
        fill="none"
        role="img"
        aria-hidden
      >
        <path d="M6.5 6.33c-.17.3-.27.65-.27 1.06v24.76c0 .41.1.77.27 1.06l13.63-13.43L6.5 6.33z" fill="#34A853" />
        <path d="M23.96 23.77 19.16 19l-12.7 12.6c.19.33.45.6.78.79l16.72-8.62z" fill="#FBBC04" />
        <path d="M30.58 20.05a2.37 2.37 0 0 0 0-4.1L25.5 13.4l-6.35 5.6 4.81 4.77 6.62-3.72z" fill="#EA4335" />
        <path d="M7.23 6.03a2.04 2.04 0 0 0-.73.3l16.7 8.6 5.06-4.54-21.03-4.36z" fill="#4285F4" />
      </svg>
    ),
  },
  {
    href: "#",
    prefix: "Download on the",
    label: "Mac App Store",
    icon: (
      <svg
        className="h-8 w-8"
        viewBox="0 0 40 40"
        fill="none"
        role="img"
        aria-hidden
      >
        <circle cx="20" cy="20" r="18" fill="currentColor" />
        <path
          d="M16.53 23.27 12.2 30.2c-.12.2-.2.4-.2.63 0 .35.15.67.39.9.23.24.55.4.9.4.37 0 .69-.18.9-.44l4.73-7.24-2.38-1.18z"
          fill="#fff"
        />
        <path
          d="M27.6 11c-.22-.22-.53-.35-.87-.35-.36 0-.69.16-.9.41l-4.7 7.22 2.38 1.18 4.33-6.93c.12-.2.2-.4.2-.63 0-.35-.16-.66-.44-.9z"
          fill="#fff"
        />
        <path d="M15.77 14.48c-.4-.2-.75-.3-1.1-.3-.66 0-1.17.34-1.48.89L9.16 21.5c-.15.25-.23.52-.23.8 0 .32.1.61.27.88.19.27.45.48.78.63l5.8-9.33z" fill="#fff" />
        <path d="M30.83 18.68c-.19-.27-.45-.48-.77-.63l-5.8 9.33c.4.2.75.3 1.1.3.66 0 1.17-.34 1.48-.89l3.03-5.46c.15-.25.23-.52.23-.8 0-.32-.1-.61-.27-.88z" fill="#fff" />
      </svg>
    ),
  },
  {
    href: "#",
    prefix: "Download from the",
    label: "Microsoft Store",
    icon: (
      <svg
        className="h-8 w-8"
        viewBox="0 0 40 40"
        fill="none"
        role="img"
        aria-hidden
      >
        <rect x="6" y="6" width="12.8" height="12.8" fill="#F35325" />
        <rect x="21.2" y="6" width="12.8" height="12.8" fill="#81BC06" />
        <rect x="6" y="21.2" width="12.8" height="12.8" fill="#05A6F0" />
        <rect x="21.2" y="21.2" width="12.8" height="12.8" fill="#FFBA08" />
      </svg>
    ),
  },
  {
    href: "#",
    prefix: "Log in to the",
    label: "Web App",
    icon: (
      <svg
        className="h-8 w-8"
        viewBox="0 0 40 40"
        fill="none"
        role="img"
        aria-hidden
      >
        <circle cx="20" cy="20" r="18" stroke="currentColor" strokeWidth="2" />
        <path d="M8 20h24" stroke="currentColor" strokeWidth="2" />
        <path d="M20 8c3.87 4.88 3.87 18.12 0 23.99" stroke="currentColor" strokeWidth="2" />
        <path d="M20 8c-3.87 4.88-3.87 18.12 0 23.99" stroke="currentColor" strokeWidth="2" />
      </svg>
    ),
  },
];

const StoreBadgeLink: React.FC<StoreBadge> = ({ href, prefix, label, icon }) => (
  <a
    href={href}
    className="group inline-flex items-center gap-3 rounded-2xl bg-ink-base px-5 py-4 text-white shadow-[0_20px_36px_rgba(17,24,39,0.24)] transition-transform transition-shadow duration-200 ease-subtle hover:-translate-y-0.5 hover:shadow-[0_26px_44px_rgba(17,24,39,0.22)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue/80 focus-visible:ring-offset-2 focus-visible:ring-offset-ink-base"
  >
    <span className="text-white/90">{icon}</span>
    <span className="flex flex-col text-left">
      <span className="text-xs font-medium uppercase tracking-[0.26em] text-white/70">{prefix}</span>
      <span className="text-lg font-semibold tracking-tight text-white">{label}</span>
    </span>
  </a>
);

const MultiPlatformSection: React.FC = () => {
  return (
    <section id="multiplataforma" className="border-y border-surface-muted/60 bg-white" aria-labelledby="multiplataforma-heading">
      <Container className="grid gap-10 py-20 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.85fr)] lg:items-center lg:gap-16">
        <div className="space-y-4">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-ink-soft">acesso multiplataforma</p>
          <h2 id="multiplataforma-heading" className="text-3xl font-semibold tracking-tight text-ink-base sm:text-4xl">
            Seu espaço de lucidez, em qualquer lugar.
          </h2>
          <p className="text-base text-ink-soft">
            A Eco te acompanha no celular, tablet ou computador. Um espelho emocional que aprende com você e evolui a cada diálogo.
          </p>
        </div>

        <div className="space-y-8 rounded-3xl border border-surface-muted/60 bg-surface-subtle/70 p-8 shadow-soft">
          <div className="flex flex-wrap items-center gap-4">
            {storeBadges.map((store) => (
              <StoreBadgeLink key={store.label} {...store} />
            ))}
          </div>
          <div className="space-y-4 text-center">
            <p className="text-sm font-medium text-ink-soft">
              Gratuito para usar. Melhor com <a href="#" className="underline decoration-brand-blue underline-offset-4 transition-colors hover:text-ink-base">Premium</a>.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-xs uppercase tracking-[0.36em] text-ink-soft">
              <span className="flex items-center gap-2">
                <span aria-hidden className="text-base"></span>
                App of the Year
              </span>
              <span className="flex items-center gap-2">
                <span aria-hidden className="text-base"></span>
                Apple Editors' Choice
              </span>
              <span className="flex items-center gap-2">
                <span aria-hidden className="text-base"></span>
                Apple Design Award
              </span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default MultiPlatformSection;
