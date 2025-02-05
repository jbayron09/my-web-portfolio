'use client'
import { createContext, useContext, useEffect, useState } from 'react'

interface ThemeContextType {
  isDarkMode: boolean
  toggleDarkMode: () => void
}

// Creamos el contexto
const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

// Hook personalizado para usar el contexto en toda la app
export const useTheme = () => {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useTheme debe usarse dentro de un ThemeProvider')
  }
  return context
}

// Provider para envolver la app y manejar el estado global del Dark Mode
export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [isDarkMode, setIsDarkMode] = useState(true)

  useEffect(() => {
    // Recuperar el tema guardado en localStorage
    const storedTheme = localStorage.getItem('theme') || 'dark'
    setIsDarkMode(storedTheme === 'dark')

    // Aplicar la clase 'dark' al <html>
    document.documentElement.classList.toggle('dark', storedTheme === 'dark')
  }, [])

  const toggleDarkMode = () => {
    setIsDarkMode((prev) => {
      const newTheme = !prev ? 'dark' : 'light'
      localStorage.setItem('theme', newTheme)
      document.documentElement.classList.toggle('dark', newTheme === 'dark')
      return !prev
    })
  }

  return (
      <ThemeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
        {children}
      </ThemeContext.Provider>
  )
}
