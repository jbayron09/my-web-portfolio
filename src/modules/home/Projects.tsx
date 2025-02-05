import clsx from 'clsx'
import Image from 'next/image'
import { FaGithub } from 'react-icons/fa'
import ProjectCard from '@/modules/home/components/ProjectCard'

const projects = [
  {
    id: 1,
    title: 'Auto-parts E-Commerce',
    description: 'Ecommerce for Auto parts shop',
    tags: ['React.js', 'Typescript', 'TailwindCSS', 'Django'],
    image: '/images/projects/ecommerce.jpg',
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
    tags: ['React.js', 'Typescript', 'TailwindCSS', 'Django'],
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
      <section className="bg-banner bg-cover bg-center bg-fixed" id="projects">
        <div
            className="backdrop-blur-sm bg-gradient-to-r from-[#ffffff] via-[#f7ecff]/70 to-[#e8d9ff]
               dark:from-[#020024] dark:via-[#190b36]/70 dark:to-[#281649]">
          <div className="py-16 container">
            <h2 className="mb-12 text-3xl md:text-4xl font-bold text-center text-neutral-800 dark:text-white">
              Projects
            </h2>
            <div className="m-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-md:max-w-xs">
              <ProjectCard
                  title="BUSINESS"
                  description="The Role Of Technology In Modern..."
                  image="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-I0cFwvofRwICGqchZ097BEcn5lKV9e.png"
              />
              {projects.map((project) => (
                  <div
                      key={project.id}
                      className={clsx(
                          'bg-white dark:bg-neutral-700 shadow-lg rounded-lg overflow-hidden',
                          'group p-4 flex flex-col gap-4',
                      )}
                  >
                    {/* Project Image */}
                    <div className="w-full relative flex rounded-lg overflow-hidden">
                      <Image
                          alt={project.title}
                          src={project.image}
                          sizes="100vw" width={0} height={0}
                          className="w-full aspect-video object-cover"
                      />
                      <div className={clsx([
                        'absolute w-full left-0 bottom-0 h-0 opacity-0 bg-black/80 duration-300 flex',
                        'group-hover:h-full group-hover:opacity-100',
                      ])}
                      >
                        <div className="m-auto">
                          <a
                              target="_blank"
                              href={project.repositoryLink}
                              className={clsx([
                                'p-2 flex items-center gap-2 text-white font-semibold border border-white rounded-full',
                                'hover:text-purple-500 hover:border-purple-500 hover:cursor-pointer',
                              ])}
                          >
                            <span>
                              <FaGithub/>
                            </span>
                            Repository
                          </a>
                        </div>
                      </div>
                    </div>

                    {/* Project Content */}
                    <div className="flex flex-col flex-grow">
                      <h3 className="text-lg font-semibold text-neutral-800 dark:text-white">
                        {project.title}
                      </h3>
                      <p className="text-sm mt-2 text-neutral-600 dark:text-neutral-300 flex-grow">
                        {project.description}
                      </p>
                      <div className="mt-2 flex flex-wrap gap-2">
                        {project.tags.map((tag, index) => (
                            <span
                                key={index}
                                className={clsx(
                                    'bg-purple-100 dark:bg-purple-800 text-purple-700 dark:text-purple-50',
                                    'text-xs font-bold px-3 py-1 rounded-full',
                                )}
                            >
                              {tag}
                            </span>
                        ))}
                      </div>
                    </div>

                    {/* View Project Button */}
                    <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={clsx([
                          'text-sm text-neutral-700 dark:text-white p-4 font-bold',
                          'hover:underline',
                        ])}
                    >
                      More Info &rarr;
                    </a>
                  </div>
              ))}
            </div>
          </div>
        </div>
      </section>
  )
}

export default Projects