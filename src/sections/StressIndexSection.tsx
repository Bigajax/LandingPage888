import React from 'react';
import StressIndexImage from '@/assets/images/mulher_meditando_transparente.png';
import { motion } from 'framer-motion';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6 },
  }),
};

const StressIndexSection = () => {
  const frases = [
    'A Eco escuta o que você sente, não só o que você diz.',
    'Tensões se dissolvem, pensamentos se alinham.',
    'Você começa a se ver com mais nitidez.',
  ];

  return (
    <section className="relative bg-black text-white py-24 px-6 lg:px-12 overflow-hidden">
      <div className="absolute inset-0 opacity-20 bg-gradient-to-br from-gray-800 via-gray-900 to-black z-0" />

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col-reverse lg:grid lg:grid-cols-2 gap-12 items-center">
        {/* Texto */}
        <div className="pt-10 lg:pt-0">
          <span className="uppercase text-sm tracking-wider text-gray-400 mb-4 block">
            clareza emocional
          </span>

          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl lg:text-5xl font-light text-white mb-8 leading-tight"
          >
            Ver a si mesmo com <span className="font-semibold text-[#6C4CFF]">nitidez</span> começa com uma boa escuta.
          </motion.h2>

          {frases.map((frase, i) => (
            <motion.p
              key={i}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="text-base sm:text-lg text-gray-300 font-light mb-4 leading-relaxed"
            >
              {frase}
            </motion.p>
          ))}
        </div>

        {/* Imagem */}
        <div className="flex justify-center items-center">
          <img
            src={StressIndexImage}
            alt="Mulher meditando - clareza emocional"
            className="w-72 sm:w-96 lg:w-[450px] h-auto object-contain opacity-90"
          />
        </div>
      </div>
    </section>
  );
};

export default StressIndexSection;
