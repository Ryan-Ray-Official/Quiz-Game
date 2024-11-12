"use client"

import { useEffect, useState } from 'react'
import { useQuiz } from '@/context/QuizContext'
import { Button } from '@/components/ui/button'
import { useNavigate } from 'react-router-dom'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'
import { Loader2 } from 'lucide-react'
import { motion } from 'framer-motion'

const MotionButton = motion(Button)

export default function Quiz() {
  const { state, dispatch } = useQuiz()
  const navigate = useNavigate()
  const [isAnswered, setIsAnswered] = useState(false)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    if (!state.questions || state.questions.length === 0) {
      navigate('/')
      return
    }
    setIsLoading(false)
    dispatch({ type: 'UPDATE_TIMER', payload: 30 })
  }, [])

  useEffect(() => {
    if (isLoading || isAnswered) return

    const timer = setInterval(() => {
      if (state.timeRemaining > 0) {
        dispatch({ type: 'UPDATE_TIMER', payload: state.timeRemaining - 1 })
      } else {
        handleTimeout()
      }
    }, 1000)

    return () => clearInterval(timer)
  }, [state.timeRemaining, isAnswered, isLoading])

  const handleTimeout = () => {
    if (!isAnswered) {
      setIsAnswered(true)
      setTimeout(handleNextQuestion, 2000)
    }
  }

  const handleAnswer = (selectedIndex: number) => {
    if (isAnswered) return

    setSelectedAnswer(selectedIndex)
    setIsAnswered(true)

    const currentQuestion = state.questions[state.currentQuestion]
    if (selectedIndex === currentQuestion.correctAnswer) {
      dispatch({ type: 'UPDATE_SCORE', payload: 1 })
    }

    setTimeout(handleNextQuestion, 2000)
  }

  const handleNextQuestion = () => {
    if (state.currentQuestion + 1 >= state.questions.length) {
      dispatch({ type: 'COMPLETE_QUIZ' })
      navigate('/results')
      return
    }

    setIsAnswered(false)
    setSelectedAnswer(null)
    dispatch({ type: 'NEXT_QUESTION' })
    dispatch({ type: 'UPDATE_TIMER', payload: 30 })
  }

  if (isLoading || !state.questions[state.currentQuestion]) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-900">
        <Loader2 className="h-12 w-12 animate-spin text-primary" />
      </div>
    )
  }

  const currentQuestion = state.questions[state.currentQuestion]
  const progress = ((state.currentQuestion + 1) / state.questions.length) * 100

  return (
    <motion.div
      className="min-h-screen bg-gray-900 text-gray-100 flex items-center justify-center p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="w-full max-w-3xl">
        <Card className="w-full bg-gray-800 border-gray-700 rounded-xl shadow-xl">
          <CardHeader>
            <div className="flex justify-between items-center">
              <CardTitle className="text-xl text-primary">
                Question {state.currentQuestion + 1}/{state.questions.length}
              </CardTitle>
              <div className="text-lg font-medium text-gray-300">
                Score: {state.score}
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            <Progress value={progress} className="h-2 bg-gray-700" />

            <div className="flex justify-center">
              <div className={`text-4xl font-bold ${
                state.timeRemaining <= 5 ? 'text-red-500' : 'text-primary'
              }`}>
                {state.timeRemaining}s
              </div>
            </div>

            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-gray-200">
                {currentQuestion.question}
              </h2>
              <div className="grid grid-cols-1 gap-4">
                {currentQuestion.options.map((option, index) => (
                  <MotionButton
                    key={index}
                    variant={
                      isAnswered
                        ? index === currentQuestion.correctAnswer
                          ? 'default'
                          : index === selectedAnswer
                          ? 'destructive'
                          : 'outline'
                        : 'outline'
                    }
                    className={`
                      w-full text-left justify-start h-auto py-4 px-6 text-lg
                      rounded-xl shadow-sm backdrop-blur-sm
                      ${
                        isAnswered
                          ? index === currentQuestion.correctAnswer
                            ? 'bg-green-600 hover:bg-green-600 text-white border-green-500'
                            : index === selectedAnswer
                            ? 'bg-red-600 hover:bg-red-600 text-white border-red-500'
                            : 'bg-gray-800 text-gray-400 border-gray-700'
                          : 'bg-gray-800 hover:bg-gray-700 text-gray-100 hover:text-white border-gray-700'
                      }
                      transition-colors duration-200
                      ${!isAnswered && 'hover:border-gray-600'}
                      active:scale-[0.98]
                      disabled:pointer-events-none
                      disabled:opacity-50
                    `}
                    onClick={() => handleAnswer(index)}
                    disabled={isAnswered}
                    whileHover={!isAnswered ? { scale: 1.02 } : {}}
                    whileTap={!isAnswered ? { scale: 0.98 } : {}}
                  >
                    {option}
                  </MotionButton>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </motion.div>
  )
}
