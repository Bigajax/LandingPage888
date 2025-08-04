import React, { useState } from 'react';
import InputMask from 'react-input-mask';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Orb from '../components/Orb';
import { enviarFormulario } from '../lib/enviarFormulario';

const AcessoAntecipadoPage: React.FC = () => {
  const [enviado, setEnviado] = useState(false);
  const [formData, setFormData] = useState({
    nome: '',
    sobrenome: '',
    email: '',
    telefone: '',
    motivacao: '',
    emocao: '',
    consentimento_email: false,
    consentimento_whatsapp: false
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, type, value, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleRadioChange = (campo: string, valor: string) => {
    setFormData((prevData) => ({
      ...prevData,
      [campo]: valor
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const numeroLimpo = formData.telefone.replace(/\D/g, '');
    if (numeroLimpo.length !== 11) {
      alert('Digite um número de telefone válido com DDD (11 dígitos).');
      return;
    }

    if (!formData.consentimento_email && !formData.consentimento_whatsapp) {
      alert('Você precisa marcar pelo menos uma opção: e-mail ou WhatsApp.');
      return;
    }

    const {
      nome,
      sobrenome,
      email,
      motivacao,
      emocao,
      consentimento_email,
      consentimento_whatsapp
    } = formData;

    try {
      await enviarFormulario({
        nome,
        sobrenome,
        email,
        telefone: numeroLimpo,
        motivacao,
        emocao,
        consentimento_email,
        consentimento_whatsapp
      });

      setEnviado(true);
      console.log('Lead salvo com sucesso:', formData);
    } catch (err) {
      console.error('Erro ao enviar:', err);
      alert('Erro ao enviar. Tente novamente mais tarde.');
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-black text-white pt-28 font-sans">
      <Header />

      <main className="relative flex-grow px-6 py-12 flex flex-col-reverse lg:flex-row items-center justify-center">
        <div className="absolute inset-0 -z-10 flex justify-center lg:justify-start items-start lg:items-center pointer-events-none">
          <div className="w-[300px] h-[300px] md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[500px] opacity-40">
            <Orb hoverIntensity={0.8} rotateOnHover={true} hue={270} forceHoverState={false} />
          </div>
        </div>

        <div className="relative z-10 w-full max-w-2xl bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl shadow-2xl p-8">
          <h1 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-4 text-center lg:text-left">
            Convite para o Acesso Antecipado à <span className="text-indigo-400">Eco</span>
          </h1>
          <p className="text-gray-300 mb-8 text-center lg:text-left leading-relaxed">
            Ajude a construir a IA que não responde por responder — mas te devolve a si mesmo.
          </p>

          {enviado ? (
            <div className="bg-green-900 text-green-200 rounded-lg p-6 text-center">
              ✅ Pronto! Recebemos seu pedido. Assim que o acesso antecipado estiver disponível, você será notificado por e-mail.
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8">
              <div>
                <p className="text-sm text-gray-300 mb-3">Informações pessoais</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="nome"
                    placeholder="Nome"
                    required
                    value={formData.nome}
                    onChange={handleChange}
                    className="bg-transparent text-white placeholder-white p-3 rounded-xl w-full border border-white/20 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
                  />
                  <input
                    type="text"
                    name="sobrenome"
                    placeholder="Sobrenome"
                    required
                    value={formData.sobrenome}
                    onChange={handleChange}
                    className="bg-transparent text-white placeholder-white p-3 rounded-xl w-full border border-white/20 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
                  />
                </div>
                <input
                  type="email"
                  name="email"
                  placeholder="Seu e-mail"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-4 bg-transparent text-white placeholder-white p-3 rounded-xl w-full border border-white/20 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
                />
                <InputMask
                  mask="(99) 99999-9999"
                  value={formData.telefone}
                  onChange={(e) => setFormData({ ...formData, telefone: e.target.value })}
                >
                  {(inputProps) => (
                    <input
                      {...inputProps}
                      type="tel"
                      name="telefone"
                      placeholder="Seu telefone"
                      required
                      className="mt-4 bg-transparent text-white placeholder-white p-3 rounded-xl w-full border border-white/20 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
                    />
                  )}
                </InputMask>
              </div>

              <div>
                <p className="text-sm text-gray-300 mb-3">Quando você pensa em conversar com a Eco, qual dessas opções te descreve melhor?</p>
                <div className="space-y-2">
                  {[
                    'Estou vivendo algo emocionalmente difícil',
                    'Quero entender melhor o que estou sentindo',
                    'Tenho curiosidade sobre mim mesmo(a)',
                    'Apenas quero experimentar a Eco'
                  ].map((opcao) => (
                    <label key={opcao} className="flex items-center gap-2 text-white hover:text-indigo-300 cursor-pointer transition text-sm">
                      <input
                        type="radio"
                        name="motivacao"
                        value={opcao}
                        onChange={() => handleRadioChange('motivacao', opcao)}
                        className="accent-indigo-400 w-4 h-4"
                        required
                      />
                      {opcao}
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <p className="text-sm text-gray-300 mb-3">Você sente que tem facilidade em nomear suas emoções?</p>
                <div className="space-y-2">
                  {['Sim', 'Às vezes', 'Não sei bem o que sinto'].map((opcao) => (
                    <label key={opcao} className="flex items-center gap-2 text-white hover:text-indigo-300 cursor-pointer transition text-sm">
                      <input
                        type="radio"
                        name="emocao"
                        value={opcao}
                        onChange={() => handleRadioChange('emocao', opcao)}
                        className="accent-indigo-400 w-4 h-4"
                        required
                      />
                      {opcao}
                    </label>
                  ))}
                </div>
              </div>

              <div className="space-y-3 text-sm text-white mt-6">
                <label className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    name="consentimento_email"
                    checked={formData.consentimento_email}
                    onChange={handleChange}
                    className="accent-indigo-400"
                  />
                  Concordo em receber o link de acesso por e-mail
                </label>
                <label className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    name="consentimento_whatsapp"
                    checked={formData.consentimento_whatsapp}
                    onChange={handleChange}
                    className="accent-indigo-400"
                  />
                  Concordo em receber o link de acesso por WhatsApp
                </label>
              </div>

              <button
                type="submit"
                disabled={!formData.consentimento_email && !formData.consentimento_whatsapp}
                className={`w-full font-medium py-3 rounded-xl transition-all duration-300 shadow-md ${
                  formData.consentimento_email || formData.consentimento_whatsapp
                    ? 'bg-indigo-500 text-white hover:bg-indigo-600 hover:shadow-lg active:scale-[0.98]'
                    : 'bg-gray-700 text-gray-400 cursor-not-allowed'
                }`}
              >
                Obtenha acesso antecipado 
              </button>
            </form>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default AcessoAntecipadoPage;
