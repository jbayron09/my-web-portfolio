'use client'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useTheme } from '@/context/ThemeProvider'

const LoadingScreen = () => {
  const [isLoading, setIsLoading] = useState(true)
  const { isDarkMode } = useTheme()

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1500) // Tiempo de duración del loading

    return () => clearTimeout(timer)
  }, [])

  return (
      <AnimatePresence>
        {isLoading && (
            <motion.div
                className="fixed inset-0 flex items-center justify-center z-[60] bg-[#f7ecff] dark:bg-[#190b36]"
                initial={{ opacity: 1 }}
                exit={{ opacity: 0, y: '-100%' }}
                transition={{ duration: 0.8, ease: 'easeInOut' }}
            >
              {/* Efecto de texto animado "LOADING" */}
              <motion.h1
                  className="text-3xl md:text-5xl font-bold tracking-widest uppercase"
                  initial={{ opacity: 0.2 }}
                  animate={{ opacity: [0.2, 1, 0.2], color: isDarkMode ? ['#6B46C1', '#D6BCFA', '#6B46C1'] : ['#4C51BF', '#A0AEC0', '#4C51BF'] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
              >
                L O A D I N G
              </motion.h1>
            </motion.div>
        )}
      </AnimatePresence>
  )
}

export default LoadingScreen