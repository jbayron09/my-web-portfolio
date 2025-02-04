'use client'
import { useState } from 'react'
import clsx from 'clsx'
import { IoMdClose, IoMdMenu } from 'react-icons/io'

interface Section {
  name: string
  href: string
}

const sections: Section[] = [
  {
    name: 'Home',
    href: '#home',
  }, {
    name: 'Experience',
    href: '#about-me',
  }, {
    name: 'Projects',
    href: '#projects',
  }, {
    name: 'Skills',
    href: '#skills',
  },
]

const MainNavbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const toggle = () => setIsOpen(!isOpen)

  return (
      <nav className="sticky top-0 left-0 w-full z-50 backdrop-blur-xl">
        <div className="container py-4 flex items-center gap-8 justify-between">
          <span className="uppercase font-extrabold text-violet-500">
            Portfolio
          </span>
          <ul
              className={clsx([
                isOpen ? 'max-md:block' : 'max-md:hidden',
                'list-none flex flex-col items-center max-md:backdrop-blur-xl',
                'md:flex-row md:gap-8',
                'max-md:absolute max-md:top-full max-md:left-0 max-md:w-full max-md:bg-neutral-50/70 max-md:dark:bg-neutral-900',
              ])}
          >
            {
              sections.map(section => (
                  <li key={section.name} className="max-md:w-full flex">
                    <a
                        href={section.href}
                        className={clsx([
                          'w-full font-bold text-sm p-4 text-center duration-300 dark:text-neutral-100',
                          'md:p-0 hover:text-violet-500 dark:hover:text-violet-500 active:text-purple-400',
                        ])}
                        onClick={() => isOpen && toggle()}
                    >
                      {section.name}
                    </a>
                  </li>
              ))
            }
          </ul>
          <div className="max-md:flex items-center gap-2 hidden">
            <button
                className={clsx([
                  isOpen && 'text-purple-500',
                  'p-2 text-xl rounded-full duration-300 block md:hidden',
                ])}
                onClick={() => toggle()}
            >
              {
                isOpen ? <IoMdClose/> : <IoMdMenu/>
              }
            </button>
          </div>
        </div>
      </nav>
  )
}

export default MainNavbar