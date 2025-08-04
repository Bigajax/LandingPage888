import React, { useState } from 'react';
import { Sparkles, Smile, BarChart2 } from 'lucide-react';
import RelatorioMemoriasImg from '@/assets/images/relatorio+memorias.png';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const TABS = [
  {
    id: 'memorias',
    title: 'Memórias emocionais',
    icon: <Sparkles size={20} className="text-[#6C4CFF]" />,
    description: (
      <>
        A Eco registra <strong className="text-[#5F4BFF]">momentos marcantes</strong> com emoção presente,
        <strong className="text-[#5F4BFF]"> tags-chave</strong>, domínio da vida e uma análise sensível.
        Cada memória se torna um <strong className="text-[#5F4BFF]">reflexo</strong> do que te atravessa.
      </>
    ),
  },
  {
    id: 'perfil',
    title: 'Perfil emocional',
    icon: <Smile size={20} className="text-[#6C4CFF]" />,
    description: (
      <>
        A Eco identifica as <strong className="text-[#5F4BFF]">emoções mais recorrentes</strong> da sua jornada
        e organiza isso em um <strong className="text-[#5F4BFF]">retrato emocional</strong> que evolui com você.
      </>
    ),
  },
  {
    id: 'relatorio',
    title: 'Relatório emocional',
    icon: <BarChart2 size={20} className="text-[#6C4CFF]" />,
    description: (
      <>
        Visualize sua jornada em dois painéis: um
        <strong className="text-[#5F4BFF]"> Mapa emocional 2D</strong> com zonas de maior atividade emocional,
        e uma <strong className="text-[#5F4BFF]">Linha do tempo</strong> com os momentos mais intensos.
      </>
    ),
  },
];

const EmotionalReportSection = () => {
  const { ref, isVisible } = useScrollReveal();
  const [activeTab, setActiveTab] = useState('memorias');

  return (
    <section
      ref={ref}
      className="relative w-full bg-gradient-to-br from-[#f7f9fb] to-[#e7f0ff] py-20 px-4 sm:px-6 md:px-10 flex flex-col items-center justify-center overflow-hidden"
    >
      <h2
        className={`text-3xl sm:text-4xl lg:text-5xl font-light text-[#0F111A] text-center mb-6 transition-all duration-1000 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}
      >
        <span className="font-bold text-black">Explore os recursos da </span>
        <span className="font-bold text-[#6C4CFF]">Eco</span>
      </h2>

      <div className="mt-12 max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 items-center z-10">
        {/* Botões e texto */}
        <div className="flex flex-col items-center text-gray-800">
          <div className="flex flex-col space-y-4 mb-10 w-full max-w-xl px-2 sm:px-4">
            {TABS.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`relative flex items-center gap-3 text-base sm:text-lg font-medium px-5 py-3 rounded-xl transition-all duration-300 border backdrop-blur-sm w-full group overflow-hidden
                  ${
                    activeTab === tab.id
                      ? 'bg-white border-[#6C4CFF] text-[#5F4BFF] shadow-md border-l-[4px]'
                      : 'bg-white/60 border-white/30 text-neutral-700 hover:bg-white/80 hover:shadow-sm border-l-[4px] border-transparent'
                  }`}
              >
                <div className="min-w-[34px] min-h-[34px] rounded-md bg-white/60 flex items-center justify-center backdrop-blur-md shadow-inner">
                  {tab.icon}
                </div>
                <span className="z-10 relative transition-all duration-300">{tab.title}</span>
              </button>
            ))}
          </div>

          <div
            className={`transition-all duration-700 ease-out max-w-xl text-center lg:text-left px-4 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            <p className="text-base sm:text-lg font-light leading-relaxed text-neutral-700">
              {TABS.find((tab) => tab.id === activeTab)?.description}
            </p>
          </div>
        </div>

        {/* Imagem */}
        <div
          className={`flex justify-center items-center w-full transition-all duration-1000 ease-out delay-[400ms] ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <img
            src={RelatorioMemoriasImg}
            alt="Relatório emocional e memórias"
            className="w-full max-w-[500px] sm:max-w-[520px] md:max-w-[580px] lg:max-w-[600px] drop-shadow-xl"
          />
        </div>
      </div>
    </section>
  );
};

export default EmotionalReportSection;
