import clsx from 'clsx'
import { FaCss3Alt, FaGitAlt, FaHtml5, FaJs, FaPython, FaReact } from 'react-icons/fa'
import { SiAstro, SiDjango, SiGraphql, SiNextdotjs, SiTailwindcss, SiTypescript } from 'react-icons/si'

const skills = [
  { name: 'Html', icon: FaHtml5 },
  { name: 'Css', icon: FaCss3Alt },
  { name: 'Javascript', icon: FaJs },
  { name: 'Typescript', icon: SiTypescript },
  { name: 'React', icon: FaReact },
  { name: 'Next.js', icon: SiNextdotjs },
  { name: 'Git', icon: FaGitAlt },
  { name: 'TailwindCSS', icon: SiTailwindcss },
  { name: 'GraphQl', icon: SiGraphql },
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
          <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-6 gap-4 md:gap-8">
            {
              skills.map((skill, index) => {
                const Icon = skill.icon
                return (
                    <div
                        key={index}
                        className={clsx([
                          'flex flex-col items-center justify-center bg-white shadow-lg rounded-lg p-4',
                          'dark:bg-neutral-700 hover:scale-105 duration-300',
                        ])}
                    >
                      <Icon className="text-4xl text-purple-500 mb-2"/>
                      <p className="text-neutral-800 dark:text-neutral-200 font-semibold">{skill.name}</p>
                    </div>
                )
              })
            }
          </div>
        </div>
      </section>
  )
}

export default Skills