import { FC, JSX } from 'react'
import { FaAws, FaExternalLinkAlt, FaGithub } from 'react-icons/fa'
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiDjango,
  SiGraphql,
  SiNodedotjs,
  SiSass,
  SiDocker,
} from 'react-icons/si'
import { Project } from '@/modules/home/Projects'

interface ProjectCardProps {
  project: Project
}

// Mapeo de tecnologías a iconos
const tagIcons: Record<string, JSX.Element> = {
  'React.js': <SiReact />,
  'Next.js': <SiNextdotjs />,
  'TypeScript': <SiTypescript />,
  'TailwindCSS': <SiTailwindcss />,
  'Django': <SiDjango />,
  'GraphQL': <SiGraphql />,
  'Node.js': <SiNodedotjs />,
  'Sass': <SiSass />,
  'Docker': <SiDocker />,
  'Aws': <FaAws className='text-base'/>,
}

const ProjectCard: FC<ProjectCardProps> = ({ project }) => {
  const { title, description, image, tags, repositoryLink, link } = project

  return (
      <div className="relative h-[400px] overflow-hidden rounded-2xl group">
        {/* Background Image with Zoom Effect */}
        <span className="absolute top-4 left-4 z-10 inline-block bg-gradient-to-r from-violet-300 to-violet-800 text-white text-xs font-medium px-3 py-1 rounded-full">
          {title}
        </span>
        <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-in-out group-hover:scale-110"
            style={{ backgroundImage: `url(${image})` }}
        ></div>

        {/* Content Card */}
        <div className="absolute bottom-4 left-4 right-4">
          <div
              className="bg-violet-50 dark:bg-violet-950 rounded-2xl p-4 transition-all duration-500 ease-in-out
                     group-hover:bg-gradient-to-r group-hover:from-violet-300 group-hover:to-violet-800"
          >
            {/* description */}
            <h3 className="text-sm leading-tight font-medium group-hover:text-white">{description}</h3>

            {/* Tech Stack - Icons in Bubble Shape */}
            <div className="mt-3 flex items-center">
              {tags.map((tag, index) => (
                  <span
                      key={index}
                      className="relative w-8 h-8 flex items-center justify-center bg-purple-200 dark:bg-purple-700 text-purple-800 dark:text-white rounded-full text-sm shadow-md
                           transform scale-100 transition-all duration-300 group-hover:scale-110"
                      style={{ marginLeft: index === 0 ? '0' : '-6px' }} // Hace el escalonado más sutil
                  >
                    {tagIcons[tag] || null}
                  </span>
              ))}
            </div>

            {/* Buttons - Live Demo & Repository */}
            <div className="mt-3 flex gap-2">
              <a
                  href={link}
                  target="_blank"
                  className="flex items-center gap-1 text-white bg-violet-600 hover:bg-violet-700 px-3 py-1 text-xs rounded-md"
              >
                <FaExternalLinkAlt className="text-sm" /> Live
              </a>
              <a
                  href={repositoryLink}
                  target="_blank"
                  className="flex items-center gap-1 text-white bg-gray-800 hover:bg-gray-900 px-3 py-1 text-xs rounded-md"
              >
                <FaGithub className="text-sm" /> Repo
              </a>
            </div>
          </div>
        </div>
      </div>
  )
}

export default ProjectCard
