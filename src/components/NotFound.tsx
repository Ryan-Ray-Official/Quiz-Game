"use client"

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { useNavigate } from 'react-router-dom'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export default function NotFound() {
  const navigate = useNavigate()

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  }

  const numberVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 15
      }
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
            <motion.div
              className="flex flex-col items-center space-y-4"
              variants={itemVariants}
            >
              <motion.div
                className="flex items-center justify-center space-x-4"
                variants={numberVariants}
              >
                <motion.span
                  className="text-8xl font-bold text-primary"
                  initial={{ x: -100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  4
                </motion.span>
                <motion.span
                  className="text-8xl font-bold text-primary"
                  initial={{ y: 100, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  0
                </motion.span>
                <motion.span
                  className="text-8xl font-bold text-primary"
                  initial={{ x: 100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  4
                </motion.span>
              </motion.div>
              <CardTitle className="text-2xl font-bold text-center text-gray-200">
                Page Not Found
              </CardTitle>
            </motion.div>
          </CardHeader>
          <CardContent className="space-y-6">
            <motion.p
              className="text-center text-gray-400"
              variants={itemVariants}
            >
              Oops! The page you're looking for doesn't exist.
            </motion.p>

            <motion.div
              className="flex justify-center"
              variants={itemVariants}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  onClick={() => navigate('/')}
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg font-semibold shadow-lg"
                >
                  Go Home
                </Button>
              </motion.div>
            </motion.div>
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  )
}
