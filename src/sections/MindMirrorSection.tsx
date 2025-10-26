import React from "react";

import Card from "../components/Card";
import Section from "../components/Section";

const benefits = [
  {
    title: "Memórias com contexto",
    description: "Relacione cada registro a lugares, pessoas e nuances que importam para você.",
  },
  {
    title: "Mapa emocional",
    description: "Visualize o ritmo dos sentimentos em uma linha do tempo serena e fácil de navegar.",
  },
  {
    title: "Reflexões sob medida",
    description: "Receba perguntas delicadas que guiam sua atenção para o que precisa ser cuidado.",
  },
  {
    title: "Respire com intenção",
    description: "Pausas curtas com respirações guiadas para integrar aprendizados em minutos.",
  },
  {
    title: "Sintonia com o corpo",
    description: "Notas rápidas sobre sensações físicas ajudam a notar padrões sutis.",
  },
  {
    title: "Exportação transparente",
    description: "Baixe tudo o que registrou com um toque — seus dados sempre são seus.",
  },
];

const MindMirrorSection: React.FC = () => {
  return (
    <Section
      id="beneficios"
      eyebrow="Benefícios"
      title="Tudo o que importa, sem ruído visual"
      description="Cada card replica a delicadeza da tela de login: superfícies brancas, linhas finas e tipografia calma."
    >
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {benefits.map((benefit) => (
          <Card key={benefit.title} className="h-full">
            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-eco-text">{benefit.title}</h3>
              <p className="text-sm text-eco-subtle">{benefit.description}</p>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
};

export default MindMirrorSection;
