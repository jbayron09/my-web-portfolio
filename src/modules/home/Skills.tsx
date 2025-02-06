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

// Configuración de animaciones
const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3, ease: 'easeOut' } },
}

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
                  <motion.div
                      key={index}
                      variants={cardVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: false, amount: 0.3 }}
                      whileHover={{ scale: 1.05 }}
                      className="relative flex flex-col items-center justify-center bg-white shadow-lg rounded-2xl p-6 overflow-hidden
                          dark:bg-neutral-900 transition-all duration-300 ease-in-out group border border-gray-200 dark:border-gray-800"
                  >
                    {/* 🔥 Borde animado con Framer Motion */}
                    <motion.div
                        className="absolute inset-0 rounded-2xl border-2 border-transparent"
                        initial={{ width: "0%", height: "0%" }}
                        whileHover={{ width: "100%", height: "100%", borderColor: "#8B5CF6" }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                    />

                    {/* 🔥 Icono con animación en eje Y al hacer hover en la card */}
                    <motion.div
                        className="group-hover:rotate-y-180 transition-transform duration-500"
                        style={{ transformStyle: "preserve-3d" }}
                    >
                      <Icon className="text-5xl text-purple-500 mb-2" />
                    </motion.div>

                    {/* Nombre de la Skill */}
                    <p className="text-neutral-800 dark:text-neutral-200 font-semibold text-lg">{skill.name}</p>
                  </motion.div>
              )
            })}
          </div>
        </div>
      </section>
  )
}

export default Skills
