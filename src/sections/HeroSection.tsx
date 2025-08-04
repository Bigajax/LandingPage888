import React from 'react'; 
import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import Orb from '../components/Orb';
import Button from '../components/Button';
import { useScrollReveal } from '../hooks/useScrollReveal';

const HeroSection: React.FC = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section
      className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden py-16 sm:py-24"
      ref={ref}
    >
      {/* Orb de fundo */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[90vw] h-[90vw] max-w-[400px] max-h-[400px] rounded-full z-0 pointer-events-none">
        <Orb
          hoverIntensity={0.8}
          rotateOnHover={true}
          hue={270}
          forceHoverState={false}
        />
      </div>

      {/* Conteúdo central */}
      <div
        className={`relative z-10 text-center px-4 sm:px-6 transition-all duration-1000 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}
      >
        <span className="inline-flex items-center gap-2 bg-zinc-900 text-white text-xs sm:text-sm px-3 sm:px-4 py-1 rounded-full mb-5 border border-white/10 shadow-[0_0_12px_rgba(180,130,255,0.4)]">
          🪞 Seu Espelho Emocional
        </span>

        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-snug sm:leading-tight">
          Encontre clareza emocional<br className="sm:hidden" /> com a Eco
        </h1>

        <p className="text-sm sm:text-lg text-gray-300 max-w-md sm:max-w-xl mx-auto mb-10 font-light">
          Um espaço seguro para registrar memórias, descobrir padrões e crescer com clareza.
        </p>

        <div className="flex flex-col items-center gap-4">
          <p className="text-xs sm:text-sm text-indigo-200 mb-2">
            Beta com vagas limitadas
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-3 w-full px-2">
            <Link to="/reflexao" className="w-full sm:w-auto">
              <Button className="w-full sm:w-auto text-sm px-4 py-2 rounded-full font-medium border border-white/20 backdrop-blur-md bg-white/10 text-white shadow-md transition duration-150 hover:bg-[#5F4BFF] hover:border-[#5F4BFF] hover:scale-105">
                Obter acesso
              </Button>
            </Link>

            <ScrollLink
              to="conheca-eco"
              smooth={true}
              duration={600}
              offset={-80}
              className="w-full sm:w-auto"
            >
              <Button className="w-full sm:w-auto text-sm px-4 py-2 rounded-full font-medium border border-white/10 bg-zinc-800 text-white transition duration-150 hover:bg-[#5F4BFF] hover:border-[#5F4BFF] hover:scale-105">
                Saiba mais
              </Button>
            </ScrollLink>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
