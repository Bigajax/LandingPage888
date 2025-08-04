import TelefoneInput from './TelefoneInput'
import { useState } from 'react'

export default function Formulario() {
  const [email, setEmail] = useState('')
  const [telefone, setTelefone] = useState('')
  const [consentiuEmail, setConsentiuEmail] = useState(false)
  const [consentiuWhatsApp, setConsentiuWhatsApp] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!consentiuEmail && !consentiuWhatsApp) {
      alert('Você precisa concordar com pelo menos um canal de envio (e-mail ou WhatsApp).')
      return
    }

    if (consentiuEmail && email.trim() === '') {
      alert('Preencha o e-mail para receber o link.')
      return
    }

    if (consentiuWhatsApp && telefone.trim() === '') {
      alert('Preencha o telefone para receber o link por WhatsApp.')
      return
    }

    // Envio para Supabase aqui
    const { error } = await supabase.from('leads').insert([
      {
        email: consentiuEmail ? email : null,
        telefone: consentiuWhatsApp ? telefone : null,
        consentiu_email: consentiuEmail,
        consentiu_whatsapp: consentiuWhatsApp,
      }
    ])

    if (error) {
      alert('Erro ao enviar. Tente novamente mais tarde.')
      console.error(error)
    } else {
      alert('Enviado com sucesso!')
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        <input
          type="checkbox"
          checked={consentiuEmail}
          onChange={(e) => setConsentiuEmail(e.target.checked)}
        />
        Concordo em receber por e-mail
      </label>

      {consentiuEmail && (
        <input
          type="email"
          placeholder="Seu e-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      )}

      <label>
        <input
          type="checkbox"
          checked={consentiuWhatsApp}
          onChange={(e) => setConsentiuWhatsApp(e.target.checked)}
        />
        Concordo em receber por WhatsApp
      </label>

      {consentiuWhatsApp && (
        <TelefoneInput
          value={telefone}
          onChange={setTelefone}
          required={false} // controle manual
        />
      )}

      <button type="submit">Obtenha acesso antecipado →</button>
    </form>
  )
}
