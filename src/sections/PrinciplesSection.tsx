import React from 'react';
import { Shield, Heart, Brain } from 'lucide-react';

const principles = [
  {
    title: 'Espaço Seguro',
    description:
      'Um ambiente protegido para você se expressar com liberdade, sem medo ou julgamento.',
    icon: Shield,
  },
  {
    title: 'Escuta Presente',
    description:
      'Atenção verdadeira e devolutiva cuidadosa para apoiar quem você é, sem pressa ou ruído.',
    icon: Heart,
  },
  {
    title: 'Perspectiva Emocional',
    description:
      'Enxergar além do óbvio, reconhecendo nuances para transformar confusão em clareza.',
    icon: Brain,
  },
];

const PrinciplesSection: React.FC = () => {
  return (
    <section id="principios" className="bg-[#F9FAFB] py-24 px-6">
      <div className="max-w-4xl mx-auto text-center mb-16 px-2">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-[#1D3557] mb-6 leading-tight">
          Nossos <span className="text-[#6C4CFF]">Princípios</span>
        </h2>
        <p className="text-base sm:text-lg md:text-xl text-gray-700 font-medium leading-relaxed max-w-2xl mx-auto">
          Segurança, presença e profundidade para oferecer um espaço confiável onde você possa se ouvir com clareza.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto px-2">
        {principles.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-[0_2px_10px_rgba(0,0,0,0.05)] p-6 sm:p-7 md:p-8 text-center transition hover:shadow-[0_4px_20px_rgba(0,0,0,0.08)]"
          >
            <div className="mb-5 flex justify-center">
              <div className="p-2.5 sm:p-3 bg-[#F0F4F8] rounded-full">
                <item.icon size={28} strokeWidth={1.5} className="text-[#1D3557]" />
              </div>
            </div>
            <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PrinciplesSection;
