import React, { createContext, useContext, useReducer } from 'react';
import { QuizState, Question, QuizCategory, QuizDifficulty } from '@/types/quiz';

type QuizAction =
  | { type: 'SET_CATEGORY'; payload: QuizCategory }
  | { type: 'SET_DIFFICULTY'; payload: QuizDifficulty }
  | { type: 'SET_QUESTIONS'; payload: Question[] }
  | { type: 'NEXT_QUESTION' }
  | { type: 'UPDATE_SCORE'; payload: number }
  | { type: 'UPDATE_TIMER'; payload: number }
  | { type: 'RESET_QUIZ' }
  | { type: 'COMPLETE_QUIZ' };

const initialState: QuizState = {
  currentQuestion: 0,
  score: 0,
  questions: [],
  selectedCategory: null,
  selectedDifficulty: null,
  timeRemaining: 30,
  isQuizComplete: false,
};

function quizReducer(state: QuizState, action: QuizAction): QuizState {
  switch (action.type) {
    case 'SET_CATEGORY':
      return { ...state, selectedCategory: action.payload };
    case 'SET_DIFFICULTY':
      return { ...state, selectedDifficulty: action.payload };
    case 'SET_QUESTIONS':
      return {
        ...state,
        questions: action.payload,
        currentQuestion: 0,
        score: 0,
        timeRemaining: 30,
        isQuizComplete: false
      };
    case 'NEXT_QUESTION':
      return { ...state, currentQuestion: state.currentQuestion + 1 };
    case 'UPDATE_SCORE':
      return { ...state, score: state.score + action.payload };
    case 'UPDATE_TIMER':
      return { ...state, timeRemaining: action.payload };
    case 'RESET_QUIZ':
      return { ...initialState };
    case 'COMPLETE_QUIZ':
      return { ...state, isQuizComplete: true };
    default:
      return state;
  }
}

const QuizContext = createContext<{
  state: QuizState;
  dispatch: React.Dispatch<QuizAction>;
} | null>(null);

export function QuizProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(quizReducer, initialState);

  return (
    <QuizContext.Provider value={{ state, dispatch }}>
      {children}
    </QuizContext.Provider>
  );
}

export function useQuiz() {
  const context = useContext(QuizContext);
  if (!context) {
    throw new Error('useQuiz must be used within a QuizProvider');
  }
  return context;
}
