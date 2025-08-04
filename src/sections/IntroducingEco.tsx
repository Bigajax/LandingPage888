import React from 'react';
import EcoChat from '@/assets/images/Eco_chat.png';
import Orb from '@/components/Orb';

const IntroducingEco: React.FC = () => {
  return (
    <section
      id="conheca-eco"
      className="relative bg-white py-24 px-6 sm:px-10 lg:px-24 w-full overflow-hidden"
    >
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-16 text-center">
        Conheça a <span className="text-[#5F4BFF] font-extrabold">Eco</span>
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-y-16 gap-x-16 max-w-[90rem] mx-auto items-center">
        {/* Texto esquerdo */}
        <div className="text-gray-900 text-2xl sm:text-3xl font-semibold leading-snug text-center lg:text-left px-2">
          <p className="mb-2">Você muda.</p>
          <p className="text-[#5F4BFF] mb-2">A Eco muda com você.</p>
          <p className="text-gray-800">Reflete. Escuta. Evolui.</p>
        </div>

        {/* Imagem central com Orb e fundo suave */}
        <div className="relative flex justify-center items-center">
          {/* Orb animado centralizado */}
          <div className="absolute inset-0 flex justify-center items-center z-0">
            <div className="w-[300px] h-[300px] sm:w-[360px] sm:h-[360px] lg:w-[460px] lg:h-[460px]">
              <Orb />
            </div>
          </div>

          {/* Brilho suave centralizado */}
          <div className="absolute inset-0 flex justify-center items-center z-10">
            <div className="w-[300px] h-[300px] sm:w-[360px] sm:h-[360px] lg:w-[460px] lg:h-[460px] bg-gradient-to-br from-purple-300 via-blue-200 to-pink-200 rounded-full blur-3xl opacity-40" />
          </div>

          {/* Imagem da Eco */}
          <img
            src={EcoChat}
            alt="App Eco"
            className="w-72 sm:w-80 lg:w-96 h-auto z-20 drop-shadow-xl"
          />
        </div>

        {/* Texto direito */}
        <div className="text-gray-700 space-y-4 text-base sm:text-lg lg:text-xl leading-relaxed px-2 text-center lg:text-left">
          <p>
            A <strong className="text-[#5F4BFF]">Eco</strong> não responde apenas suas palavras, ela escuta o que você sente.
          </p>
          <p>
            Cada vez que você se abre, ela registra o que há por trás: a intensidade da emoção, o tema envolvido, os padrões que se repetem.
          </p>
          <p>
            Isso dá origem a uma <strong className="text-[#5F4BFF]">memória emocional</strong>, que passa a fazer parte da sua história.
          </p>
          <p>
            Com o tempo, essas memórias constroem um <strong className="text-[#5F4BFF]">perfil emocional vivo</strong>, sensível às mudanças que você atravessa.
          </p>
          <p>
            E tudo isso se transforma em um <strong className="text-[#5F4BFF]">relatório visual</strong>, onde você pode enxergar sua trajetória interior:
            suas emoções mais presentes, os momentos mais intensos e os ciclos que se revelam.
          </p>
        </div>
      </div>
    </section>
  );
};

export default IntroducingEco;
