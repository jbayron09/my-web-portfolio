'use client'
import ProjectCard from '@/modules/home/components/ProjectCard'
import { motion } from 'framer-motion'
import { textVariant } from '@/utils/motion'

export type Project = {
  title: string
  description: string
  image: string
  tags: string[]
  repositoryLink: string
  link: string
}

const projects = [
  {
    id: 1,
    title: 'Auto-parts Marketplace',
    description: 'An advanced Marketplace platform for auto parts, designed for seamless navigation and an intuitive shopping experience.',
    tags: ['React.js', 'TypeScript', 'TailwindCSS', 'GraphQL', 'Django', 'Docker', 'Aws'],
    image: '/images/projects/marketplace.png',
    link: 'https://autorepuestos.premiumsas.co/',
    repositoryLink: 'https://github.com/jbayron09',
  },
  {
    id: 2,
    title: 'No Violence Forum - Landing',
    description: 'A high-converting landing page created to promote a product, attract customers, and boost engagement effectively.',
    tags: ['Next.js', 'TypeScript', 'TailwindCSS'],
    image: '/images/projects/landing-taller-premium.png',
    link: 'https://landing.tallerpremium.net/',
    repositoryLink: 'https://github.com/jbayron09',
  },
  {
    id: 3,
    title: 'No Violence Forum - Landing',
    description: 'A modern and informative landing page designed for an annual university event, providing key details and registrations.',
    tags: ['Next.js', 'Sass'],
    image: '/images/projects/no-violence-forum.png',
    link: 'https://no-violence-forum.vercel.app/',
    repositoryLink: 'https://github.com/jbayron09',
  },
]

const Projects = () => {
  return (
      <section id="projects">
        <div className="py-16 container">
          <motion.h2
              variants={textVariant(0.2)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              className="mb-12 text-3xl md:text-4xl font-bold text-center text-gray-800 dark:text-white">
            Projects
          </motion.h2>
          <div className="m-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-md:max-w-xs">
            {projects.map((project) => (
                <ProjectCard
                    key={project.id}
                    project={project}
                />
            ))}
          </div>
        </div>
      </section>
  )
}

export default Projects