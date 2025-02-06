import ProjectCard from '@/modules/home/components/ProjectCard'

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
    title: 'Auto-parts E-Commerce',
    description: 'Ecommerce for Auto parts shop',
    tags: ['Node.js', 'React.js', 'TypeScript', 'TailwindCSS', 'Django'],
    image: '/images/projects/marketplace.png',
    link: 'https://marketplace.tallerpremium.net',
    repositoryLink: 'https://github.com/JatsukinG',
  },
  {
    id: 2,
    title: 'No violence forum - Landing',
    description: 'Landing page to university annual event',
    tags: ['Next.js', 'Sass'],
    image: '/images/projects/no-violence-forum.jpg',
    link: 'https://no-violence-forum.vercel.app/',
    repositoryLink: 'https://github.com/JatsukinG',
  },
  {
    id: 3,
    title: 'Auto-parts E-Commerce',
    description: 'Ecommerce for Auto parts shop',
    tags: ['React.js', 'TypeScript', 'TailwindCSS', 'Django'],
    image: '/images/projects/ecommerce.jpg',
    link: 'https://marketplace.tallerpremium.net',
    repositoryLink: 'https://github.com/JatsukinG',
  },
  {
    id: 4,
    title: 'No violence forum - Landing',
    description: 'Landing page to university annual event',
    tags: ['Next.js', 'Sass'],
    image: '/images/projects/no-violence-forum.jpg',
    link: 'https://no-violence-forum.vercel.app/',
    repositoryLink: 'https://github.com/JatsukinG',
  },
  {
    id: 5,
    title: 'Auto-parts E-Commerce',
    description: 'Ecommerce for Auto parts shop',
    tags: ['React.js', 'Typescript', 'TailwindCSS', 'Django'],
    image: '/images/projects/ecommerce.jpg',
    link: 'https://marketplace.tallerpremium.net',
    repositoryLink: 'https://github.com/JatsukinG',
  },
]

const Projects = () => {
  return (
      <section id="projects">
        <div className="py-16 container">
          <h2 className="mb-12 text-3xl md:text-4xl font-bold text-center text-neutral-800 dark:text-white">
            Projects
          </h2>
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