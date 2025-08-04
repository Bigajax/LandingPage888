import React, { useState } from 'react';
import {
  User,
  Moon,
  HeartPulse,
  RefreshCcw,
  Compass,
  ChevronDown,
} from 'lucide-react';

type Persona = {
  icon: JSX.Element;
  title: string;
  description: string;
};

const personas: Persona[] = [
  {
    icon: <User size={22} strokeWidth={1.3} />,
    title: 'Quem busca autoconhecimento profundo',
    description:
      'Pessoas que desejam compreender melhor suas emoções, pensamentos e comportamentos por meio da escuta interna e da escrita reflexiva.',
  },
  {
    icon: <Moon size={22} strokeWidth={1.3} />,
    title: 'Quem sente que está no automático',
    description:
      'Para quem deseja sair do piloto automático e se reconectar com a própria presença, cultivando consciência no cotidiano.',
  },
  {
    icon: <HeartPulse size={22} strokeWidth={1.3} />,
    title: 'Quem passa por transições de vida',
    description:
      'Momentos de mudança exigem clareza emocional. A Eco acolhe quem está enfrentando decisões, perdas, recomeços ou fases de transição.',
  },
  {
    icon: <RefreshCcw size={22} strokeWidth={1.3} />,
    title: 'Quem vive intensamente suas emoções',
    description:
      'Para quem sente demais e precisa de um espaço seguro para organizar, transformar e acolher o que vive sem julgamento.',
  },
  {
    icon: <Compass size={22} strokeWidth={1.3} />,
    title: 'Quem deseja transformar padrões emocionais',
    description:
      'Ideal para quem já percebe ciclos repetitivos e quer compreender a raiz das emoções para agir com mais liberdade e consciência.',
  },
];

const TargetAudienceSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleIndex = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="para-quem" className="py-24 px-6 sm:px-8 bg-[#0A0A0D]">
      <div className="max-w-5xl mx-auto text-center mb-16 px-2">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-6 leading-tight tracking-tight">
          Para quem é a <span className="text-[#6B6BFF] font-extrabold">Eco</span>?
        </h2>
        <p className="text-base sm:text-lg lg:text-xl text-white/60 font-light max-w-2xl mx-auto leading-relaxed">
          Um espaço que acolhe sua jornada interior com escuta, clareza e presença.
          Feito para quem sente, busca e transforma.
        </p>
      </div>

      <div className="max-w-3xl mx-auto space-y-5">
        {personas.map((persona, index) => (
          <div
            key={index}
            className="rounded-2xl overflow-hidden border border-white/10 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl transition-all group hover:shadow-[0_8px_24px_-6px_rgba(255,255,255,0.08)]"
          >
            <button
              onClick={() => toggleIndex(index)}
              className="w-full px-5 py-5 flex flex-col sm:flex-row items-start sm:items-center justify-between text-left gap-4 sm:gap-0 hover:bg-white/5 active:bg-white/10 rounded-2xl transition-all duration-300 ease-in-out"
            >
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 flex items-center justify-center rounded-xl border border-white/10 bg-white/10 backdrop-blur-md shadow-[inset_0_0_6px_rgba(255,255,255,0.15)] group-hover:scale-105 transition-transform duration-200 ease-in-out">
                  <div className="text-white">{persona.icon}</div>
                </div>
                <span className="text-white text-base sm:text-lg font-semibold leading-snug tracking-tight">
                  {persona.title}
                </span>
              </div>
              <ChevronDown
                size={20}
                strokeWidth={1.4}
                className={`text-white/50 transition-transform duration-300 ease-in-out ml-auto sm:ml-4 ${
                  activeIndex === index ? 'rotate-180' : ''
                }`}
              />
            </button>

            <div
              className={`overflow-hidden transition-all duration-500 ease-in-out px-5 sm:px-6 ${
                activeIndex === index ? 'max-h-[500px] opacity-100 py-4' : 'max-h-0 opacity-0 py-0'
              }`}
            >
              <div className="border-t border-white/10 pt-4 text-white/70 text-sm sm:text-base leading-relaxed">
                {persona.description}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TargetAudienceSection;
