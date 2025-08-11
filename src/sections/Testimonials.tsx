import React from 'react';

const Testimonials: React.FC = () => {
  const feedbackUrl = "https://feedback777.vercel.app";

  return (
    <section id="feedback" className="w-full py-20 px-5 sm:px-8 bg-[#F8F6FA] text-center">
      <div className="max-w-xl mx-auto flex flex-col items-center justify-center">

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-[#1D3557] mb-6 leading-tight">
          Ajude a <span className="text-[#6C4CFF]">Eco</span> a evoluir
        </h2>

        <p className="text-base sm:text-lg md:text-xl text-gray-700 font-medium mb-6 max-w-md leading-relaxed">
          Compartilhe sua experiência com segurança e honestidade.
        </p>

        {/* Seta animada */}
        <div className="mb-5 opacity-80">
          <svg className="w-6 h-6 text-[#6C4CFF] mx-auto animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M19 9l-7 7-7-7" />
          </svg>
        </div>

        {/* Botão padronizado */}
        <a
          href={feedbackUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="
            inline-block
            px-8 py-3.5 sm:px-10 sm:py-4
            rounded-2xl
            bg-[#6C4CFF]
            text-white font-semibold text-base sm:text-lg
            shadow-md
            transition-all duration-300
            hover:bg-[#5940d8]
            hover:scale-105
          "
        >
          Enviar Feedback
        </a>
      </div>
    </section>
  );
};

export default Testimonials;
