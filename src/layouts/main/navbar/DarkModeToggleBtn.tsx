'use client'
import { useEffect, useState } from 'react'
import clsx from 'clsx'
import { MdDarkMode, MdLightMode } from 'react-icons/md'


const DarkModeToggleBtn = () => {
  const [isDarkMode, setIsDarkMode] = useState(false)

  useEffect(() => {
    const theme = localStorage.getItem('theme') || 'light'
    setIsDarkMode(theme === 'dark')
    if (theme === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [])

  const toggleDarkMode = () => {
    setIsDarkMode((prev) => {
      const newTheme = !prev ? 'dark' : 'light'
      localStorage.setItem('theme', newTheme)
      if (newTheme === 'dark') {
        document.documentElement.classList.add('dark')
      } else {
        document.documentElement.classList.remove('dark')
      }
      return !prev
    })
  }

  return (
      <div className="fixed right-0 top-[100px] z-50 md:top-[300px]">
        <button
            className={clsx(
                'group relative h-10 w-10 overflow-hidden rounded-l-full pl-3 transition-all hover:w-24',
                'text-lg font-semibold text-white bg-gradient-to-r from-violet-300 to-violet-800 transition-all duration-300 before:absolute before:inset-0 before:bg-gradient-to-r before:from-violet-800 before:to-violet-300 before:opacity-0 before:transition-all before:duration-200 before:z-0 hover:before:opacity-100'
            )}
            onClick={toggleDarkMode}
        >
          <div className="absolute inset-y-0 left-3 flex items-center">
            <MdLightMode className="h-6 w-6 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <MdDarkMode className="absolute h-6 w-6 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          </div>
          <span className="absolute left-[45px] top-1/2 -translate-y-1/2 opacity-0 transition-opacity group-hover:opacity-100">
            {isDarkMode ? 'Dark' : 'Light'}
          </span>
        </button>
      </div>
  )
}

export default DarkModeToggleBtn