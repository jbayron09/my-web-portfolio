'use client'
import { motion } from 'framer-motion'
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

// Configuración de animación del contenedor
const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

const Skills = () => {
  return (
      <section id="skills" className="py-16">
        <div className="container">
          <h2 className="mb-12 text-3xl md:text-4xl font-bold text-center text-neutral-800 dark:text-white">
            Skills
          </h2>

          {/* 🔥 Contenedor de tarjetas con animación de entrada en scroll */}
          <motion.div
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-6 gap-6"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}>
            {skills.map((skill, index) => {
              const Icon = skill.icon
              return (
                  <div
                      key={index}
                      className="relative flex flex-col items-center justify-center bg-white shadow-lg rounded-2xl p-6 overflow-hidden
                          dark:bg-violet-950 transition-all duration-300 ease-in-out group border border-gray-200 dark:border-gray-800
                          hover:shadow-xl hover:scale-105"
                  >
                    {/* 🔥 Borde con Tailwind */}
                    <div
                        className="absolute inset-0 border-2 border-transparent rounded-2xl group-hover:border-purple-500 transition-all duration-500"/>

                    {/* 🔥 Icono con rotación en Y */}
                    <div
                        className="text-5xl text-purple-500 mb-2 transition-transform duration-500 transform group-hover:rotate-y-180">
                      <Icon/>
                    </div>

                    {/* Nombre de la Skill */}
                    <p className="text-neutral-800 dark:text-neutral-200 font-semibold text-lg">{skill.name}</p>
                  </div>
              )
            })}
          </motion.div>
        </div>
      </section>
  )
}

export default Skills