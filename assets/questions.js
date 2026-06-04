// Banco de perguntas e metadados dos quizzes
window.QUIZ_DATA = {
  ansiedade: {
    title: "Quiz de Ansiedade",
    icon: "🌿",
    intro: "Cinco perguntas rápidas para você refletir sobre como tem se sentido em relação à ansiedade nas últimas semanas.",
    questions: [
      "Com que frequência você sente preocupação excessiva difícil de controlar?",
      "Você sente seu corpo em alerta, como se estivesse pronto para reagir a algo?",
      "Você tem dificuldade para desacelerar a mente ou relaxar?",
      "Sintomas físicos como aperto no peito ou coração acelerado aparecem com frequência?",
      "Você evita situações sociais ou profissionais por medo de se sentir mal?"
    ]
  },
  depressao: {
    title: "Quiz de Depressão",
    icon: "🌧️",
    intro: "Cinco perguntas para refletir sobre seu humor, energia e interesse pelas coisas nas últimas semanas.",
    questions: [
      "Você tem sentido tristeza persistente ou desânimo na maior parte dos dias?",
      "Percebe perda de interesse ou prazer em atividades que antes eram agradáveis?",
      "Tem se sentido cansado(a) ou sem energia mesmo após períodos de descanso?",
      "Tem dificuldade de concentração, foco ou para tomar decisões simples?",
      "Você tem se sentido inútil, com culpa excessiva ou sensação de ser um peso para os outros?"
    ]
  },
  luto: {
    title: "Quiz de Luto",
    icon: "🕊️",
    intro: "Cinco perguntas para refletir sobre como você tem vivido o processo de uma perda significativa.",
    questions: [
      "Com que frequência você sente uma tristeza intensa relacionada à perda?",
      "Você sente dificuldade em aceitar a realidade da perda ocorrida?",
      "Sente culpa persistente por coisas que fez ou deixou de fazer em relação à pessoa?",
      "Sente que sua rotina parou ou perdeu o sentido desde o acontecimento?",
      "A intensidade da dor emocional tem aumentado com o passar do tempo?"
    ]
  },
  estresse: {
    title: "Quiz de Estresse e Esgotamento Emocional",
    icon: "🔥",
    intro: "Cinco perguntas para você refletir sobre seu nível de estresse e como ele tem afetado sua vida nas últimas semanas.",
    questions: [
      "Com que frequência você se sente sobrecarregado(a) pelas demandas do dia a dia?",
      "Você sente dificuldade em 'desligar' do trabalho ou das preocupações mesmo quando está descansando?",
      "Tem sentido irritabilidade ou impaciência com situações ou pessoas com maior frequência?",
      "Percebe sinais físicos de tensão, como dores de cabeça, tensão muscular ou problemas para dormir?",
      "Você sente que não tem energia emocional suficiente para lidar com as situações do cotidiano?"
    ]
  },
  burnout: {
    title: "Quiz de Burnout",
    icon: "🪫",
    intro: "Cinco perguntas para refletir sobre sinais de esgotamento relacionados ao trabalho ou às suas responsabilidades.",
    questions: [
      "Você sente que seu trabalho (ou responsabilidades) te deixa emocionalmente esgotado(a)?",
      "Tem se sentido distante, indiferente ou cínico(a) em relação às tarefas que antes te motivavam?",
      "Percebe que sua produtividade e qualidade de entrega diminuíram mesmo com esforço?",
      "Sente que não importa o quanto você faça, nunca é suficiente?",
      "Você tem pensado com frequência em desistir do trabalho ou das suas responsabilidades?"
    ]
  },
  autoestima: {
    title: "Quiz de Autoestima",
    icon: "🌱",
    intro: "Cinco perguntas para você refletir sobre como tem se sentido em relação ao seu próprio valor e imagem pessoal.",
    questions: [
      "Com que frequência você se sente insatisfeito(a) com quem você é?",
      "Você tende a se comparar negativamente com outras pessoas?",
      "Sente dificuldade em receber elogios ou reconhecimento sem minimizá-los?",
      "Você acredita que merece coisas boas na sua vida — como amor, sucesso e cuidado?",
      "Tem dificuldade em estabelecer limites por medo de desagradar ou não ser aceito(a)?"
    ]
  },
  autoconfianca: {
    title: "Quiz de Autoconfiança",
    icon: "🦋",
    intro: "Cinco perguntas para refletir sobre como você tem se sentido em relação à sua capacidade de agir e se posicionar no mundo.",
    questions: [
      "Você hesita em tomar decisões com medo de errar ou de ser julgado(a)?",
      "Evita expressar sua opinião em grupos ou situações sociais?",
      "Sente que outras pessoas são mais capazes do que você, mesmo sem evidências reais?",
      "Você desiste de oportunidades com medo de não conseguir aprovação dos outros?",
      "Com que frequência você se arrepende por não ter agido ou se posicionado em determinadas situações?"
    ]
  },
  autocritica: {
    title: "Quiz de Autocrítica Excessiva",
    icon: "🪞",
    intro: "Cinco perguntas para você refletir sobre como tem lidado com seus próprios erros e limitações.",
    questions: [
      "Quando comete um erro, você fica ruminando sobre ele por muito tempo?",
      "Você se fala de forma mais dura do que falaria com um amigo(a) na mesma situação?",
      "Tem dificuldade em reconhecer suas conquistas sem focar no que poderia ter sido melhor?",
      "Sente vergonha intensa diante de falhas, mesmo as pequenas?",
      "A autocrítica interfere na sua capacidade de agir ou tomar iniciativa?"
    ]
  },
  procrastinacao: {
    title: "Quiz de Procrastinação Crônica",
    icon: "⏳",
    intro: "Cinco perguntas para refletir sobre como o adiamento de tarefas tem impactado sua vida e bem-estar.",
    questions: [
      "Com que frequência você adia tarefas importantes, mesmo sabendo que isso traz consequências?",
      "Você percebe que a procrastinação está ligada ao medo de falhar ou de não ser bom(boa) o suficiente?",
      "Sente culpa ou ansiedade pelo acúmulo de tarefas não realizadas?",
      "Tem dificuldade em começar uma tarefa mesmo quando você quer realizá-la?",
      "A procrastinação afeta sua vida profissional, seus relacionamentos ou sua saúde?"
    ]
  },
  perfeccionismo: {
    title: "Quiz de Perfeccionismo",
    icon: "🎯",
    intro: "Cinco perguntas para você refletir sobre como padrões elevados têm influenciado sua qualidade de vida e bem-estar.",
    questions: [
      "Você sente que o que entrega nunca está 'bom o suficiente', mesmo recebendo elogios?",
      "Tem dificuldade em delegar tarefas por acreditar que só você fará corretamente?",
      "O medo de errar te impede de começar ou concluir projetos?",
      "Você gasta tempo excessivo revisando ou reajustando trabalhos que já estão prontos?",
      "Quando não atinge seus próprios padrões, sente uma autocrítica intensa ou sensação de fracasso?"
    ]
  },
  regulacao: {
    title: "Quiz de Regulação Emocional",
    icon: "🌊",
    intro: "Cinco perguntas para refletir sobre como você tem lidado com suas emoções e reações no dia a dia.",
    questions: [
      "Você sente que suas emoções são intensas e difíceis de controlar em certas situações?",
      "Tem dificuldade em se acalmar depois de uma situação estressante ou conflituosa?",
      "Reage de formas que depois lamenta — como explosões de raiva, choro intenso ou isolamento?",
      "Você evita situações ou pessoas porque sabe que pode perder o controle emocional?",
      "Sente que suas emoções interferem nas suas decisões ou relacionamentos de forma significativa?"
    ]
  },
  impostor: {
    title: "Quiz da Síndrome do Impostor",
    icon: "🎭",
    intro: "Cinco perguntas para você refletir sobre como tem se sentido em relação às suas conquistas e à sua sensação de pertencimento.",
    questions: [
      "Você acredita que suas conquistas profissionais ou acadêmicas se devem à sorte, e não ao seu esforço?",
      "Tem medo de ser 'desmascarado(a)' e as pessoas descobrirem que você não é tão competente quanto parece?",
      "Sente desconforto ao receber reconhecimento, achando que não merece?",
      "Você se compara frequentemente com colegas e sente que não está no mesmo nível?",
      "O medo de expor suas ideias ou opiniões te paralisa por receio de julgamento?"
    ]
  }
};

window.QUIZ_SCALE = [
  { label: "Nunca",         value: 0 },
  { label: "Raramente",     value: 1 },
  { label: "Às vezes",      value: 2 },
  { label: "Frequentemente",value: 3 },
  { label: "Quase sempre",  value: 4 }
];

