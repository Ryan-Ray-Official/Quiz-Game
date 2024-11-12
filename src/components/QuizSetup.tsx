"use client"

import { Button } from "@/components/ui/button"
import { useQuiz } from "@/context/QuizContext"
import { QuizCategory, QuizDifficulty } from "@/types/quiz"
import { useNavigate } from "react-router-dom"
import { getQuizQuestions } from "@/controllers/quizController"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useState } from "react"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { AlertCircle } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export default function QuizSetup() {
  const { state, dispatch } = useQuiz()
  const navigate = useNavigate()
  const [error, setError] = useState<string | null>(null)

  const handleCategorySelect = (category: QuizCategory) => {
    dispatch({ type: 'SET_CATEGORY', payload: category })
    setError(null)
  }

  const handleDifficultySelect = (difficulty: QuizDifficulty) => {
    dispatch({ type: 'SET_DIFFICULTY', payload: difficulty })
    setError(null)
  }

  const startQuiz = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()

    try {
      if (!state.selectedCategory || !state.selectedDifficulty) {
        setError("Please select both category and difficulty")
        return
      }

      const questions = getQuizQuestions(
        state.selectedCategory,
        state.selectedDifficulty
      )

      dispatch({ type: 'RESET_QUIZ' })
      dispatch({ type: 'SET_QUESTIONS', payload: questions })

      navigate('/quiz')
    } catch (error) {
      console.error('Quiz setup error:', error)
      setError(error instanceof Error ? error.message : 'Failed to start quiz')
    }
  }

  return (
    <motion.div
      className="min-h-screen bg-gray-900 text-gray-100 flex items-center justify-center p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="w-full max-w-3xl">
        <Card className="w-full bg-gray-800 border-gray-700">
          <CardHeader>
            <CardTitle className="text-3xl font-bold text-center text-primary">
              Quiz Setup
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <AnimatePresence mode="wait">
              {error && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <Alert variant="destructive" className="bg-red-900/50 border-red-600">
                    <AlertCircle className="h-4 w-4" />
                    <AlertDescription>{error}</AlertDescription>
                  </Alert>
                </motion.div>
              )}
            </AnimatePresence>

            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-gray-300">Select Category</h2>
              <div className="grid grid-cols-2 gap-4">
                {Object.values(QuizCategory).map((category) => (
                  <Button
                    key={category}
                    variant="outline"
                    className={`
                      h-16 text-lg font-medium capitalize w-full
                      ${state.selectedCategory === category
                        ? "bg-primary hover:bg-primary hover:text-gray-900 text-gray-900"
                        : "bg-gray-700/50 hover:bg-gray-600/50 text-gray-300"}
                      transition-colors duration-200
                      touch-none
                    `}
                    onClick={() => handleCategorySelect(category)}
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-gray-300">Select Difficulty</h2>
              <div className="grid grid-cols-3 gap-4">
                {Object.values(QuizDifficulty).map((difficulty) => (
                  <Button
                    key={difficulty}
                    variant="outline"
                    className={`
                      h-16 text-lg font-medium capitalize w-full
                      ${state.selectedDifficulty === difficulty
                        ? "bg-primary hover:bg-primary hover:text-gray-900 text-gray-900"
                        : "bg-gray-700/50 hover:bg-gray-600/50 text-gray-300"}
                      transition-colors duration-200
                      touch-none
                    `}
                    onClick={() => handleDifficultySelect(difficulty)}
                  >
                    {difficulty}
                  </Button>
                ))}
              </div>
            </div>

            <Button
              className={`
                w-full h-16 text-lg font-semibold
                bg-primary hover:bg-primary/90 text-primary-foreground
                transition-colors duration-200
                touch-none
                disabled:opacity-50 disabled:cursor-not-allowed
              `}
              disabled={!state.selectedCategory || !state.selectedDifficulty}
              onClick={startQuiz}
            >
              Start Quiz
            </Button>
          </CardContent>
        </Card>
      </div>
    </motion.div>
  )
}
