// Configuração global - edite apenas este arquivo para replicar para outra profissional
window.PSICO_CONFIG = {
  PSICO_NAME: "Adalia Lacerda Psicologa",
  PSICO_WHATSAPP: "5583999282550", // Apenas dígitos, com DDI
  ANALYTICS_ID: "", // Ex: "G-XXXXXXXX" — deixe vazio para desativar
  GTM_ID: "GTM-KL34S3PV", // deixe vazio para desativar

  // Controle de quais temas aparecem na página inicial.
  // Para desativar um tema, basta apagar ou comentar a linha abaixo (adicionando // antes da chave {).
  THEMES: [
    {
      id: "ansiedade",
      title: "Ansiedade",
      icon: "🌿",
      description: "Preocupação excessiva, tensão constante, dificuldade para relaxar.",
      path: "/quiz/ansiedade/"
    },
    {
      id: "depressao",
      title: "Depressão",
      icon: "🌧️",
      description: "Tristeza persistente, perda de prazer, falta de energia ou foco.",
      path: "/quiz/depressao/"
    },
    {
      id: "luto",
      title: "Luto",
      icon: "🕊️",
      description: "Dor pela perda, dificuldade em seguir a rotina, culpa ou negação.",
      path: "/quiz/luto/"
    },
    {
      id: "estresse",
      title: "Estresse e Esgotamento",
      icon: "🔥",
      description: "Sobrecarga, dificuldade de desligar, irritabilidade e cansaço emocional.",
      path: "/quiz/estresse/"
    },
    {
      id: "burnout",
      title: "Burnout",
      icon: "🪫",
      description: "Esgotamento profissional, distanciamento e queda de produtividade.",
      path: "/quiz/burnout/"
    },
    {
      id: "autoestima",
      title: "Autoestima",
      icon: "🌱",
      description: "Insatisfação consigo mesmo, comparações negativas e dificuldade de se valorizar.",
      path: "/quiz/autoestima/"
    },
    {
      id: "autoconfianca",
      title: "Autoconfiança",
      icon: "🦋",
      description: "Hesitação, medo de julgamento e dificuldade de se posicionar.",
      path: "/quiz/autoconfianca/"
    },
    {
      id: "autocritica",
      title: "Autocrítica Excessiva",
      icon: "🪞",
      description: "Ruminação sobre erros, fala interna dura e dificuldade de reconhecer conquistas.",
      path: "/quiz/autocritica/"
    },
    {
      id: "procrastinacao",
      title: "Procrastinação Crônica",
      icon: "⏳",
      description: "Adiamento de tarefas, culpa acumulada e dificuldade de começar.",
      path: "/quiz/procrastinacao/"
    },
    {
      id: "perfeccionismo",
      title: "Perfeccionismo",
      icon: "🎯",
      description: "Padrões elevados que geram paralisia, autocrítica e dificuldade de delegar.",
      path: "/quiz/perfeccionismo/"
    },
    {
      id: "regulacao",
      title: "Regulação Emocional",
      icon: "🌊",
      description: "Emoções intensas, dificuldade de se acalmar e reações que você lamenta.",
      path: "/quiz/regulacao/"
    },
    /*{
      id: "impostor",
      title: "Síndrome do Impostor",
      icon: "🎭",
      description: "Medo de ser desmascarado, atribuir conquistas à sorte e não se sentir suficiente.",
      path: "/quiz/impostor/"
    }*/
  ]
};
