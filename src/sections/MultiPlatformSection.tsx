import React from "react";

import Button from "../components/Button";
import Container from "../components/Container";

const platforms = [
  { label: "App Store", href: "#" },
  { label: "Google Play", href: "#" },
  { label: "Acessar via navegador", href: "#" },
];

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

        <div className="space-y-6 rounded-3xl border border-surface-muted/60 bg-surface-subtle/70 p-8 shadow-soft">
          <div className="grid gap-4 sm:grid-cols-3">
            {platforms.map((platform) => (
              <a key={platform.label} href={platform.href} className="flex">
                <Button
                  fullWidth
                  variant="secondary"
                  className="justify-between px-5 py-3 text-sm font-semibold"
                  aria-label={platform.label}
                >
                  {platform.label}
                  <span aria-hidden>↗</span>
                </Button>
              </a>
            ))}
          </div>
          <p className="text-sm text-ink-soft">
            Configure notificações conscientes, personalize seus rituais e continue de onde parou — independente do dispositivo.
          </p>
        </div>
      </Container>
    </section>
  );
};

export default MultiPlatformSection;
