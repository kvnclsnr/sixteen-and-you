interface Option {
  answer: string;
  isCorrect: boolean;
}

interface QuizContent {
  prompt: string;
  options: Option[]
}

export const QUIZ_CONTENT: QuizContent[] = [
  {
    prompt: "¿Qué haría si tuviera un día completamente libre?",
    options: [
      { answer: "Dormir", isCorrect: false },
      { answer: "Programar", isCorrect: true },
      { answer: "Salir", isCorrect: false },
    ]
  },
  {
    prompt: "¿Qué escogería si solo pudiera comer eso toda una semana?",
    options: [
      { answer: "Lasaña", isCorrect: true },
      { answer: "Salchipapa", isCorrect: false },
      { answer: "Arroz con queso", isCorrect: false },
    ]
  },
  {
    prompt: "¿Cuál de estas cosas me hace sentir más amado?",
    options: [
      { answer: "Decirme cuánto me amas", isCorrect: false },
      { answer: "Darme un detalle", isCorrect: false },
      { answer: "Querer pasar tiempo conmigo", isCorrect: true },
    ]                                           
  },
  {
    prompt: "¿Quién hizo este quiz?",
    options: [
      { answer: "Un ingeniero", isCorrect: false },
      { answer: "El amor de tu vida", isCorrect: false },
      { answer: "Las dos anteriores", isCorrect: true },
    ]
  },
  {
    prompt: "¿En qué pienso todo el día?",
    options: [
      { answer: "En ti", isCorrect: true },
      { answer: "En ti", isCorrect: true },
      { answer: "En ti", isCorrect: true },
    ]
  },
];