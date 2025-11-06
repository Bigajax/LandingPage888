import React from "react";
import { TrendingUp, ArrowRight } from "lucide-react";
import Container from "./Container";

const AnnouncementBar: React.FC = () => {
  return (
    <div className="border-b border-eco-border/30 bg-gradient-to-r from-eco-offWhite to-white/50 py-3">
      <Container>
        <div className="flex items-center justify-center gap-3 text-sm">
          <div className="flex items-center gap-2 text-eco-textSoft">
            <TrendingUp size={16} className="text-eco-babyBlue" aria-hidden />
            <span className="font-normal">
              Apresentando{" "}
              <span className="font-medium text-eco-text">ECO Relatórios 1.0</span>{" "}
              — o novo mapa emocional com linha do tempo e dominantes do mês.
            </span>
          </div>
          <a
            href="#relatorios"
            className="inline-flex items-center gap-1 rounded-full bg-eco-babyBlue/10 px-3 py-1.5 text-xs font-medium text-eco-babyBlue transition-all duration-300 hover:scale-102 hover:bg-eco-babyBlue/20 hover:shadow-eco-soft"
          >
            Ler mais
            <ArrowRight size={12} aria-hidden />
          </a>
        </div>
      </Container>
    </div>
  );
};

export default AnnouncementBar;
