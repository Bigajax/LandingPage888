// src/lib/enviarFormulario.ts
import { supabase } from './supabaseClient'

type DadosFormulario = {
  nome: string
  sobrenome: string
  email: string
  motivacao: string
  emocao: string
  telefone?: string
  consentimento_email: boolean
  consentimento_whatsapp: boolean
}

export async function enviarFormulario(dados: DadosFormulario) {
  const { data, error } = await supabase.from('acesso_antecipado').insert([
    {
      nome: dados.nome,
      sobrenome: dados.sobrenome,
      email: dados.email,
      motivacao: dados.motivacao,
      emocao: dados.emocao,
      telefone: dados.telefone || null,
      consentimento_email: dados.consentimento_email,
      consentimento_whatsapp: dados.consentimento_whatsapp
    }
  ])

  if (error) {
    console.error('Erro ao enviar para Supabase:', error)
    throw error
  }

  return data
}
