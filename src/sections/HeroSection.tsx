import React from "react";
import { Play, Sparkles } from "lucide-react";

import Button from "../components/Button";
import Container from "../components/Container";
import EcoBubbleOneEye from "../components/EcoBubbleOneEye";

const HeroSection: React.FC = () => {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden bg-eco-offWhite"
      aria-labelledby="hero-heading"
    >
      <Container className="relative">
        <div className="grid gap-12 py-24 sm:py-32 lg:grid-cols-2 lg:items-center lg:gap-16">
          {/* Left side - Content */}
          <div className="space-y-8">
            {/* Tagline */}
            <div className="inline-flex items-center gap-2 text-sm text-eco-textSoft">
              <Sparkles size={16} className="text-eco-babyBlue" aria-hidden />
              <span className="font-light">Cuidado emocional, agora minimalista.</span>
            </div>

            {/* Título */}
            <div className="space-y-6">
              <h1
                id="hero-heading"
                className="text-4xl font-normal leading-tight tracking-tight text-eco-text sm:text-5xl lg:text-6xl"
              >
                ECO — um espelho que devolve calma à mente.
              </h1>
              <p className="max-w-xl text-lg font-light leading-relaxed text-eco-textSoft">
                Clareza emocional em minutos.
                <br />
                Uma interface que respira, te ajuda a entender o que sente e organiza memórias com leveza.
              </p>
            </div>

            {/* Microfeatures */}
            <div className="flex flex-wrap items-center gap-2 text-sm text-eco-textSoft">
              <span className="font-normal">Memórias com contexto</span>
              <span className="text-eco-border">·</span>
              <span className="font-normal">Reflexões sob medida</span>
              <span className="text-eco-border">·</span>
              <span className="font-normal">Mapa emocional</span>
            </div>

            {/* Botões */}
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <a href="#comecar" className="inline-flex">
                <Button
                  className="bg-eco-babyBlue px-8 py-3 text-white transition-all duration-300 hover:scale-102 hover:bg-eco-babySoft hover:shadow-eco-soft"
                  aria-label="Experimentar agora"
                >
                  Experimentar agora
                </Button>
              </a>
              <a
                href="#como-funciona"
                className="inline-flex items-center gap-2 text-sm font-normal text-eco-text transition-all duration-300 hover:text-eco-babyBlue"
              >
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-eco-border/60 text-eco-babyBlue transition-all duration-300 hover:border-eco-babyBlue hover:bg-eco-babyBlue/10">
                  <Play className="h-4 w-4" fill="currentColor" strokeWidth={1.5} />
                </span>
                Ver demonstração
              </a>
            </div>
          </div>

          {/* Right side - ECO Bubble */}
          <div className="flex items-center justify-center lg:justify-end">
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute inset-0 -m-12 rounded-full bg-gradient-to-br from-eco-babyBlue/20 via-eco-babySoft/10 to-transparent opacity-60 blur-3xl" aria-hidden />

              {/* Main bubble container */}
              <div className="relative flex h-96 w-96 items-center justify-center rounded-full border border-eco-border/30 bg-white/60 shadow-eco-medium backdrop-blur-sm">
                <EcoBubbleOneEye size={180} />
              </div>

              {/* Floating elements */}
              <div className="absolute -left-4 top-12 rounded-2xl border border-eco-border/40 bg-white/80 px-4 py-2 text-xs text-eco-textSoft shadow-eco-soft backdrop-blur-sm">
                💭 Pensamentos organizados
              </div>
              <div className="absolute -right-4 bottom-16 rounded-2xl border border-eco-border/40 bg-white/80 px-4 py-2 text-xs text-eco-textSoft shadow-eco-soft backdrop-blur-sm">
                🌱 Clareza que fica
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default HeroSection;
