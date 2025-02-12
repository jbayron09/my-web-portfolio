'use client'
import { useState, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import clsx from 'clsx'
import { IoMdClose, IoMdMenu } from 'react-icons/io'
import { useTheme } from '@/context/ThemeProvider'

interface Section {
  name: string
  href: string
  id: string
}

const sections: Section[] = [
  { name: 'Home', href: '#home', id: 'home' },
  { name: 'Experience', href: '#experience', id: 'experience' },
  { name: 'Projects', href: '#projects', id: 'projects' },
  { name: 'Skills', href: '#skills', id: 'skills' },
]

const MainNavbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState<string>('home')
  const { scrollY } = useScroll()
  const { isDarkMode } = useTheme()

  // Efectos de scroll con Framer Motion
  const height = useTransform(scrollY, [0, 50], ['80px', '60px'])
  const padding = useTransform(scrollY, [0, 50], ['20px 0', '10px 0'])
  const backdropBlur = useTransform(scrollY, [0, 50], ['blur(0px)', 'blur(10px)'])
  const background = useTransform(scrollY, [0, 50], ['rgba(255, 255, 255, 0)', 'rgba(255, 255, 255, 0.5)'])
  const darkBackground = useTransform(scrollY, [0, 50], ['rgba(0, 0, 0, 0)', 'rgba(0, 0, 0, 0.5)'])

  const shadow = useTransform(scrollY, [0, 100], ['0px 0px 0px rgba(0,0,0,0)', '0px 4px 10px rgba(0,0,0,0.2)'])
  const darkShadow = useTransform(scrollY, [0, 100], ['0px 0px 0px rgba(255,255,255,0)', '0px 4px 10px rgba(255,255,255,0.3)'])

  useEffect(() => {
    sections.forEach(({ id }) => {
      const sectionElement = document.getElementById(id)
      if (!sectionElement) return

      // Aplica diferentes thresholds para Experience y las demás secciones
      const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: id === 'experience' ? 0.3 : 0.5, // Configuración dinámica
      }

      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const newSection = sections.find(sec => sec.id === entry.target.id)
            if (newSection) {
              setActiveSection(newSection.name)
              window.history.replaceState(null, '', newSection.href)
            }
          }
        })
      }, observerOptions)

      observer.observe(sectionElement) // Observa la sección

      return () => observer.disconnect() // Limpia el observer cuando se desmonta el componente
    })
  }, [])

  return (
      <>
        {isOpen && (
            <div
                className="fixed inset-0 z-40 md:hidden"
                onClick={() => setIsOpen(false)}
            />
        )}
        <motion.nav
            style={{
              height,
              padding,
              backdropFilter: backdropBlur,
              background: isDarkMode ? darkBackground : background,
              boxShadow: isDarkMode ? darkShadow : shadow,
            }}
            className={clsx([
              'fixed top-0 left-0 w-full z-50 transition-all duration-200',
              isOpen && '!bg-white/70 dark:!bg-black/70',
            ])}
        >
          <div className="container flex items-center gap-8 justify-between">
            <h1 className="uppercase text-xl lg:text-2xl font-bold bg-gradient-to-r from-violet-500 to-violet-950 dark:from-violet-600 dark:to-white bg-clip-text text-transparent">
              Portfolio
            </h1>

            <ul
                className={clsx([
                  isOpen ? 'max-md:block' : 'max-md:hidden',
                  'list-none flex flex-col items-center max-md:backdrop-blur-xl',
                  'md:flex-row md:gap-8 z-20',
                  'max-md:absolute max-md:top-full max-md:left-0 max-md:w-full max-md:bg-neutral-50 max-md:dark:bg-neutral-900',
                ])}
            >
              {sections.map(section => (
                  <li key={section.name} className="max-md:w-full flex">
                    <a
                        href={section.href}
                        className={clsx([
                          'w-full font-bold text-sm p-4 text-center duration-300 text-neutral-800 dark:text-neutral-100',
                          'md:p-0 hover:text-violet-700 dark:hover:text-violet-500',
                          activeSection === section.name && 'text-violet-600 dark:text-violet-400 font-extrabold',
                        ])}
                        onClick={() => {
                          setActiveSection(section.name)
                          window.history.replaceState(null, '', section.href)
                          if (isOpen) setIsOpen(false)
                        }}
                    >
                      {section.name}
                    </a>
                  </li>
              ))}
            </ul>

            <div className="max-md:flex items-center gap-2 hidden">
              <button
                  className={clsx([
                    isOpen && 'text-purple-500',
                    'p-2 text-xl rounded-full duration-300 block md:hidden',
                  ])}
                  onClick={() => setIsOpen(!isOpen)}
              >
                {isOpen ? <IoMdClose/> : <IoMdMenu/>}
              </button>
            </div>
          </div>
        </motion.nav>
      </>
  )
}

export default MainNavbar
