'use client'
import { useState, useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import clsx from 'clsx'
import { IoMdClose, IoMdMenu } from 'react-icons/io'

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
  const [activeSection, setActiveSection] = useState('home')
  const [scrolled, setScrolled] = useState(false)
  const controls = useAnimation()

  const toggle = () => setIsOpen(!isOpen)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true)
        controls.start({ height: '60px', padding: '10px 0', backdropFilter: 'blur(10px)' })
      } else {
        setScrolled(false)
        controls.start({ height: '80px', padding: '20px 0', backdropFilter: 'blur(0px)' })
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [controls])

  useEffect(() => {
    const observerOptions = { root: null, rootMargin: '0px', threshold: 0.3 }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const newSection = sections.find(sec => sec.id === entry.target.id)
          if (newSection && newSection.name !== activeSection) {
            setActiveSection(newSection.name)
            window.history.replaceState(null, '', newSection.href)
          }
        }
      })
    }, observerOptions)

    sections.forEach(({ id }) => {
      const sectionElement = document.getElementById(id)
      if (sectionElement) observer.observe(sectionElement)
    })

    return () => observer.disconnect()
  }, [activeSection])

  return (
      <motion.nav
          initial={{ height: '80px', padding: '20px 0', backdropFilter: 'blur(0px)' }}
          animate={controls}
          transition={{ duration: 0.1 }}
          className={clsx([
            'fixed top-0 left-0 w-full z-50 transition-all duration-200',
            scrolled && 'backdrop-blur-xl bg-white/50 dark:bg-black/50 shadow-md',
            isOpen && 'backdrop-blur-xl bg-white/50 dark:bg-black/50 shadow-md',
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
                        if (isOpen) toggle()
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
                onClick={() => toggle()}
            >
              {isOpen ? <IoMdClose /> : <IoMdMenu />}
            </button>
          </div>
        </div>
      </motion.nav>
  )
}

export default MainNavbar
