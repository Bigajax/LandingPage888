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
        Conheça a <span className="text-[#5B4BFF] font-extrabold">Eco</span>
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-y-16 gap-x-16 max-w-[90rem] mx-auto items-center">
        {/* Texto esquerdo */}
        <div className="text-gray-900 text-2xl sm:text-3xl font-semibold leading-snug text-center lg:text-left px-2">
          <p className="mb-2">Você muda.</p>
          <p className="text-[#5B4BFF] mb-2">A Eco muda com você.</p>
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

        {/* Texto direito (cópia nova) */}
        <div className="text-gray-700 space-y-4 text-base sm:text-lg lg:text-xl leading-relaxed px-2 text-center lg:text-left">
          <p>
            A <strong className="text-[#5B4BFF]">Eco</strong> é um espaço de <strong>escuta guiada</strong>. 
            Você escreve ou fala; ela ajuda a <strong>nomear emoções</strong>, <strong>dar contorno</strong> ao que sente 
            e <strong>organizar</strong> o momento.
          </p>
          <p>
            Cada registro vira uma <strong className="text-[#5B4BFF]">memória emocional</strong> com 
            <span className="font-medium"> emoção</span>, <span className="font-medium">intensidade</span>, 
            <span className="font-medium"> tema</span> e <span className="font-medium"> padrões</span>.
          </p>
          <p>
            Com o tempo, isso se transforma em um <strong className="text-[#5B4BFF]">perfil emocional vivo</strong> — 
            um retrato do que mais aparece, quando pesa mais e o que vem mudando.
          </p>
          <p>
            E você vê tudo em um <strong className="text-[#5B4BFF]">relatório visual</strong> claro: 
            <span className="font-medium"> tendências</span>, <span className="font-medium"> ciclos</span>, 
            <span className="font-medium"> picos emocionais</span> e 
            <span className="font-medium"> marcos de evolução</span>.
          </p>
        </div>
      </div>
    </section>
  );
};

export default IntroducingEco;
