"use client"

import { motion } from 'framer-motion'
import { useQuiz } from '@/context/QuizContext'
import { Button } from '@/components/ui/button'
import { useNavigate } from 'react-router-dom'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'
import { useEffect } from 'react'

export default function Results() {
  const { state, dispatch } = useQuiz()
  const navigate = useNavigate()

  const handleTryAgain = () => {
    dispatch({ type: 'RESET_QUIZ' })
    navigate('/')
  }

  useEffect(() => {
    if (!state.questions.length) {
      navigate('/')
      return
    }
  }, [state.questions.length, navigate])

  const percentage = (state.score / state.questions.length) * 100

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.5, when: "beforeChildren", staggerChildren: 0.2 }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-gray-900 text-gray-100 flex items-center justify-center p-4"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="w-full max-w-md"
      >
        <Card className="w-full bg-gray-800 border-gray-700 backdrop-blur-lg bg-opacity-95 shadow-xl">
          <CardHeader>
            <motion.div variants={itemVariants}>
              <CardTitle className="text-3xl font-bold text-center text-gray-100">
                Quiz Results
              </CardTitle>
            </motion.div>
          </CardHeader>
          <CardContent className="space-y-8">
            <motion.div
              className="text-center"
              variants={itemVariants}
            >
              <motion.p
                className="text-7xl font-bold text-gray-100"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 200,
                  damping: 10,
                  delay: 0.3
                }}
              >
                {percentage.toFixed(0)}%
              </motion.p>
              <motion.p
                className="text-xl text-gray-400 mt-4"
                variants={itemVariants}
              >
                You scored {state.score} out of {state.questions.length}
              </motion.p>
            </motion.div>

            <motion.div
              className="relative h-3"
              variants={itemVariants}
            >
              <Progress
                value={percentage}
                className="h-3 bg-gray-700"
              />
            </motion.div>

            <motion.div
              className="flex justify-center"
              variants={itemVariants}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  onClick={handleTryAgain}
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-gray-900 px-8 py-6 text-lg font-semibold shadow-lg"
                >
                  Try Again
                </Button>
              </motion.div>
            </motion.div>
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  )
}
