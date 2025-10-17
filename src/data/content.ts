export type CourseModality = "Presencial" | "Online";

export interface Session {
  date: string;
  weekday: string;
  time: string;
  focus: string;
}

export interface MiniCourse {
  id: string;
  modality: CourseModality;
  axis: "Python" | "Front-end";
  title: string;
  tagline: string;
  location: string;
  address?: string;
  capacity: string;
  summary: string;
  stack: string[];
  sessions: Session[];
  link: string;
}

export const miniCourses: MiniCourse[] = [
  {
    id: "online-frontend-basico",
    modality: "Online",
    axis: "Front-end",
    title: "Front-end Online (Módulo Básico)",
    tagline: "Aulas noturnas ao vivo com foco em HTML e CSS essenciais",
    location: "Microsoft Teams · link compartilhado no grupo oficial do WhatsApp",
    capacity: "Até 40 vagas online",
    summary:
      "Quatro encontros em ritmo leve para quem está começando e quer entender como a web funciona, estruturar páginas e publicar um mini portfólio.",
    stack: ["HTML5", "CSS3", "VS Code", "GitHub Pages"],
    sessions: [
      {
        date: "29/10",
        weekday: "Quarta",
        time: "19h00 – 20h30",
        focus: "Introdução ao desenvolvimento web e criação do primeiro HTML"
      },
      {
        date: "05/11",
        weekday: "Quarta",
        time: "19h00 – 20h30",
        focus: "Fundamentos de HTML: estrutura, links, imagens e tabelas"
      },
      {
        date: "12/11",
        weekday: "Quarta",
        time: "19h00 – 20h30",
        focus: "Introdução ao CSS com classes, cores, fontes e espaçamento"
      },
      {
        date: "19/11",
        weekday: "Quarta",
        time: "19h00 – 20h30",
        focus: "Projeto final: montagem de um mini portfólio com HTML e CSS"
      }
    ],
    link: "https://forms.office.com/r/9z9qy9dbqi"
  },
  {
    id: "presencial-frontend-basico",
    modality: "Presencial",
    axis: "Front-end",
    title: "Front-end Presencial (Módulo Básico)",
    tagline: "Tardes imersivas para construir páginas do zero com suporte próximo",
    location: "Laboratório de Transformação Digital · Fortaleza/CE",
    capacity: "25 vagas presenciais",
    summary:
      "Encontros presenciais direcionados a iniciantes, combinando teoria rápida, exercícios guiados e um projeto institucional completo.",
    stack: ["HTML5", "CSS3", "VS Code", "Figma"],
    sessions: [
      {
        date: "27/10",
        weekday: "Segunda",
        time: "14h00 – 15h30",
        focus: "Introdução ao desenvolvimento web e boas práticas de projeto"
      },
      {
        date: "03/11",
        weekday: "Segunda",
        time: "14h00 – 15h30",
        focus: "HTML na prática: formulários, links, imagens e exercícios em dupla"
      },
      {
        date: "10/11",
        weekday: "Segunda",
        time: "14h00 – 15h30",
        focus: "CSS e layout: responsividade e organização visual"
      },
      {
        date: "17/11",
        weekday: "Segunda",
        time: "14h00 – 15h30",
        focus: "Projeto final: página institucional com identidade visual"
      }
    ],
    link: "https://forms.office.com/r/9z9qy9dbqi"
  },
  {
    id: "online-python-basico",
    modality: "Online",
    axis: "Python",
    title: "Python Online (Módulo Básico)",
    tagline: "Tardes de sábado com lógica, sintaxe e prática guiada",
    location: "Google Meet · link compartilhado no grupo oficial do WhatsApp",
    capacity: "Até 40 vagas online",
    summary:
      "Ideal para quem quer iniciar em programação: conceitos fundamentais, exercícios interativos e um mini sistema de cadastro como projeto final.",
    stack: ["Python 3.12", "Google Colab", "VS Code"],
    sessions: [
      {
        date: "01/11",
        weekday: "Sábado",
        time: "14h00 – 15h30",
        focus: "Introdução ao Python, instalação e primeiros comandos"
      },
      {
        date: "08/11",
        weekday: "Sábado",
        time: "14h00 – 15h30",
        focus: "Estruturas de controle: condicionais e laços"
      },
      {
        date: "15/11",
        weekday: "Sábado",
        time: "14h00 – 15h30",
        focus: "Listas, dicionários e funções para organizar dados"
      },
      {
        date: "22/11",
        weekday: "Sábado",
        time: "14h00 – 15h30",
        focus: "Projeto final: mini sistema de cadastro com feedback coletivo"
      }
    ],
    link: "https://forms.office.com/r/9z9qy9dbqi"
  },
  {
    id: "presencial-python-basico",
    modality: "Presencial",
    axis: "Python",
    title: "Python Presencial (Módulo Básico)",
    tagline: "Aulas práticas em laboratório com desafios de lógica",
    location: "Laboratório de Transformação Digital · Fortaleza/CE",
    capacity: "25 vagas presenciais",
    summary:
      "Percurso presencial pensado para quem prefere acompanhamento próximo, com exercícios em cada encontro e um projeto final de calculadora interativa.",
    stack: ["Python 3.12", "VS Code", "Prática guiada"],
    sessions: [
      {
        date: "28/10",
        weekday: "Terça",
        time: "16h00 – 17h30",
        focus: "Ambiente e primeiros passos com Python e lógica de programação"
      },
      {
        date: "04/11",
        weekday: "Terça",
        time: "16h00 – 17h30",
        focus: "Operadores e estruturas de decisão na prática"
      },
      {
        date: "11/11",
        weekday: "Terça",
        time: "16h00 – 17h30",
        focus: "Laços de repetição e construção de programas interativos"
      },
      {
        date: "18/11",
        weekday: "Terça",
        time: "16h00 – 17h30",
        focus: "Projeto final: calculadora interativa com funções"
      }
    ],
    link: "https://forms.office.com/r/9z9qy9dbqi"
  }
];

export const highlights = [
  {
    title: "Módulo básico entre 27/10 e 22/11",
    description: "Cronograma compacto com quatro encontros por curso para evoluir passo a passo e concluir um projeto final."
  },
  {
    title: "Formatos presencial e online",
    description: "Escolha entre tardes presenciais no Laboratório ou aulas remotas noturnas e de fim de semana."
  },
  {
    title: "Certificação Laboratório de Transformação Digital",
    description: "Receba certificado oficial ao concluir os quatro encontros e entregar o projeto proposto."
  }
];

export const faqs = [
  {
    question: "As aulas online ficam gravadas?",
    answer: "Não. Cada encontro é ao vivo e exclusivo para quem estiver presente no horário combinado."
  },
  {
    question: "Posso me inscrever em mais de um mini-curso?",
    answer:
      "Claro! O cronograma foi pensado para que você aproveite uma trilha presencial e outra online sem choque de horários."
  },
  {
    question: "Como funciona a confirmação da vaga?",
    answer:
      "Após preencher o formulário, você é direcionado para o grupo oficial no WhatsApp, onde compartilhamos instruções de acesso e materiais."
  },
  {
    question: "Preciso levar notebook para as aulas presenciais?",
    answer:
      "Recomendamos trazer seu notebook para acompanhar os exercícios. Teremos pontos de apoio, mas as vagas são limitadas."
  }
];
