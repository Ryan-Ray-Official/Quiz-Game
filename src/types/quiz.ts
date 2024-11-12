export interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  category: QuizCategory;
  difficulty: QuizDifficulty;
}

export enum QuizCategory {
  GENERAL = 'general',
  SCIENCE = 'science',
  HISTORY = 'history',
  GEOGRAPHY = 'geography',
}

export enum QuizDifficulty {
  EASY = 'easy',
  MEDIUM = 'medium',
  HARD = 'hard',
}

export interface QuizState {
  currentQuestion: number;
  score: number;
  questions: Question[];
  selectedCategory: QuizCategory | null;
  selectedDifficulty: QuizDifficulty | null;
  timeRemaining: number;
  isQuizComplete: boolean;
}
