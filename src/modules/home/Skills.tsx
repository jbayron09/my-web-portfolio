'use client'
import { FaCss3Alt, FaGitAlt, FaHtml5, FaJs, FaPython, FaReact } from 'react-icons/fa'
import { SiAstro, SiDjango, SiGraphql, SiNextdotjs, SiTailwindcss, SiTypescript } from 'react-icons/si'

// Lista de Skills con Iconos
const skills = [
  { name: 'HTML', icon: FaHtml5 },
  { name: 'CSS', icon: FaCss3Alt },
  { name: 'JavaScript', icon: FaJs },
  { name: 'TypeScript', icon: SiTypescript },
  { name: 'React', icon: FaReact },
  { name: 'Next.js', icon: SiNextdotjs },
  { name: 'Git', icon: FaGitAlt },
  { name: 'TailwindCSS', icon: SiTailwindcss },
  { name: 'GraphQL', icon: SiGraphql },
  { name: 'Python', icon: FaPython },
  { name: 'Django', icon: SiDjango },
  { name: 'Astro', icon: SiAstro },
]

const Skills = () => {
  return (
      <section id="skills" className="py-16">
        <div className="container">
          <h2 className="mb-12 text-3xl md:text-4xl font-bold text-center text-neutral-800 dark:text-white">
            Skills
          </h2>

          {/* Contenedor de tarjetas */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-6 gap-6">
            {skills.map((skill, index) => {
              const Icon = skill.icon
              return (
                  <div
                      key={index}
                      className="relative flex flex-col items-center justify-center bg-white shadow-lg rounded-2xl p-6 overflow-hidden
                          dark:bg-neutral-900 transition-all duration-300 ease-in-out group border border-gray-200 dark:border-gray-800
                          hover:shadow-xl hover:scale-105"
                  >
                    {/* 🔥 Borde animado con Tailwind */}
                    <div className="absolute inset-0 border-2 border-transparent rounded-2xl group-hover:border-purple-500 transition-all duration-500" />

                    {/* 🔥 Icono con animación en el eje Y */}
                    <div className="text-5xl text-purple-500 mb-2 transition-transform duration-500 rotate-x-180">
                      <Icon />
                    </div>

                    {/* Nombre de la Skill */}
                    <p className="text-neutral-800 dark:text-neutral-200 font-semibold text-lg">{skill.name}</p>
                  </div>
              )
            })}
          </div>
        </div>
      </section>
  )
}

export default Skills
