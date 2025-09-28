import React, { useState } from 'react';
import InputMask from 'react-input-mask';
import Header from '../components/Header';
import Footer from '../components/Footer';
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
    <div className="flex min-h-screen flex-col bg-[#F3F4F6] pt-28">
      <Header />

      <main className="relative z-0 mx-auto flex w-full max-w-6xl flex-1 flex-col gap-10 px-6 pb-16 pt-12 lg:flex-row lg:items-start lg:gap-12">
        <div className="absolute inset-0 -z-10">
          <div className="pointer-events-none absolute right-[-10%] top-24 h-64 w-64 rounded-full bg-[radial-gradient(circle,rgba(59,130,246,0.16),transparent_68%)] blur-3xl" />
          <div className="pointer-events-none absolute left-[-12%] top-1/3 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(16,185,129,0.12),transparent_70%)] blur-3xl" />
        </div>

        <section className="glass max-w-xl space-y-4 p-8 text-left">
          <span className="inline-flex items-center rounded-full bg-white/70 px-4 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-[#6B7280]">
            Acesso antecipado
          </span>
          <h1 className="text-3xl font-semibold leading-tight text-[#111827] md:text-4xl">
            Convite para viver a experiência delicada da Eco
          </h1>
          <p className="text-base text-[#6B7280]">
            Ajude a desenhar uma companhia emocional que escuta com atenção e devolve clareza. Conte para a Eco quem é você e como deseja ser acompanhado.
          </p>
          <div className="rounded-[16px] border border-[#D1D5DB] bg-white/80 p-5 text-sm text-[#4B5563] shadow-[0_8px_24px_rgba(15,23,42,0.05)]">
            <p>
              <strong className="font-semibold text-[#111827]">Como funciona:</strong> nós analisamos cada pedido com carinho. Selecione os canais pelos quais deseja ser avisado e, assim que o acesso estiver disponível, você será notificado.
            </p>
          </div>
        </section>

        <section className="glass flex-1 p-8">
          {enviado ? (
            <div className="rounded-[16px] border border-[#BBF7D0] bg-[#ECFDF5] px-5 py-6 text-center text-[#166534] shadow-[0_10px_24px_rgba(22,101,52,0.12)]">
              <p className="text-base font-semibold">Tudo certo! 🌱</p>
              <p className="mt-2 text-sm leading-relaxed">
                Recebemos seu pedido de acesso antecipado. Entraremos em contato assim que houver novidades.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8">
              <fieldset className="space-y-4">
                <legend className="text-sm font-semibold uppercase tracking-[0.18em] text-[#6B7280]">
                  Informações pessoais
                </legend>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  <input
                    type="text"
                    name="nome"
                    placeholder="Nome"
                    required
                    value={formData.nome}
                    onChange={handleChange}
                    className="w-full rounded-[14px] border border-[#E5E7EB] bg-white px-4 py-3 text-sm text-[#111827] placeholder:text-[#9CA3AF] shadow-[0_4px_16px_rgba(15,23,42,0.04)] focus:border-[#3B82F6] focus:outline-none focus:ring-2 focus:ring-[#3B82F6]/30"
                  />
                  <input
                    type="text"
                    name="sobrenome"
                    placeholder="Sobrenome"
                    required
                    value={formData.sobrenome}
                    onChange={handleChange}
                    className="w-full rounded-[14px] border border-[#E5E7EB] bg-white px-4 py-3 text-sm text-[#111827] placeholder:text-[#9CA3AF] shadow-[0_4px_16px_rgba(15,23,42,0.04)] focus:border-[#3B82F6] focus:outline-none focus:ring-2 focus:ring-[#3B82F6]/30"
                  />
                </div>
                <input
                  type="email"
                  name="email"
                  placeholder="Seu e-mail"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full rounded-[14px] border border-[#E5E7EB] bg-white px-4 py-3 text-sm text-[#111827] placeholder:text-[#9CA3AF] shadow-[0_4px_16px_rgba(15,23,42,0.04)] focus:border-[#3B82F6] focus:outline-none focus:ring-2 focus:ring-[#3B82F6]/30"
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
                      placeholder="Telefone com DDD"
                      required
                      className="w-full rounded-[14px] border border-[#E5E7EB] bg-white px-4 py-3 text-sm text-[#111827] placeholder:text-[#9CA3AF] shadow-[0_4px_16px_rgba(15,23,42,0.04)] focus:border-[#3B82F6] focus:outline-none focus:ring-2 focus:ring-[#3B82F6]/30"
                    />
                  )}
                </InputMask>
              </fieldset>

              <fieldset className="space-y-3">
                <legend className="text-sm font-semibold uppercase tracking-[0.18em] text-[#6B7280]">
                  Sua relação com a Eco
                </legend>
                <div className="space-y-2">
                  {[
                    "Estou vivendo algo emocionalmente difícil",
                    "Quero entender melhor o que estou sentindo",
                    "Tenho curiosidade sobre mim mesmo(a)",
                    "Apenas quero experimentar a Eco",
                  ].map((opcao) => (
                    <label key={opcao} className="flex items-start gap-3 rounded-[14px] border border-transparent bg-white/60 px-4 py-3 text-sm text-[#4B5563] shadow-[0_4px_16px_rgba(15,23,42,0.04)] transition hover:border-[#D1D5DB]">
                      <input
                        type="radio"
                        name="motivacao"
                        value={opcao}
                        onChange={() => handleRadioChange("motivacao", opcao)}
                        className="mt-1 h-4 w-4 accent-[#3B82F6]"
                        required
                      />
                      <span className="leading-relaxed">{opcao}</span>
                    </label>
                  ))}
                </div>
              </fieldset>

              <fieldset className="space-y-3">
                <legend className="text-sm font-semibold uppercase tracking-[0.18em] text-[#6B7280]">
                  Como você nomeia emoções hoje?
                </legend>
                <div className="space-y-2">
                  {["Sim", "Às vezes", "Não sei bem o que sinto"].map((opcao) => (
                    <label key={opcao} className="flex items-center gap-3 rounded-[14px] border border-transparent bg-white/60 px-4 py-3 text-sm text-[#4B5563] shadow-[0_4px_16px_rgba(15,23,42,0.04)] transition hover:border-[#D1D5DB]">
                      <input
                        type="radio"
                        name="emocao"
                        value={opcao}
                        onChange={() => handleRadioChange("emocao", opcao)}
                        className="h-4 w-4 accent-[#3B82F6]"
                        required
                      />
                      <span>{opcao}</span>
                    </label>
                  ))}
                </div>
              </fieldset>

              <div className="space-y-3 text-sm text-[#4B5563]">
                <p className="font-medium text-[#6B7280]">Como prefere ser avisado?</p>
                <label className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    name="consentimento_email"
                    checked={formData.consentimento_email}
                    onChange={handleChange}
                    className="h-4 w-4 accent-[#3B82F6]"
                  />
                  <span>Concordo em receber o link de acesso por e-mail</span>
                </label>
                <label className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    name="consentimento_whatsapp"
                    checked={formData.consentimento_whatsapp}
                    onChange={handleChange}
                    className="h-4 w-4 accent-[#3B82F6]"
                  />
                  <span>Concordo em receber o link de acesso por WhatsApp</span>
                </label>
              </div>

              <button
                type="submit"
                disabled={!formData.consentimento_email && !formData.consentimento_whatsapp}
                className={`w-full rounded-full px-6 py-3 text-sm font-semibold shadow-[0_16px_32px_rgba(59,130,246,0.22)] transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3B82F6]/40 focus-visible:ring-offset-2 focus-visible:ring-offset-white ${
                  formData.consentimento_email || formData.consentimento_whatsapp
                    ? "bg-[#3B82F6] text-white hover:bg-[#2563EB]"
                    : "cursor-not-allowed bg-[#E5E7EB] text-[#9CA3AF] shadow-none"
                }`}
              >
                Enviar pedido de acesso
              </button>
            </form>
          )}
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AcessoAntecipadoPage;
