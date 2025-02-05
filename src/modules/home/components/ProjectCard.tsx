import type React from 'react'

interface BlogCardProps {
  title: string
  description: string
  image: string
}

const ProjectCard: React.FC<BlogCardProps> = ({ title, description, image }) => {
  return (
      <div className="relative h-[400px] overflow-hidden rounded-2xl group">
        {/* Background Image with Zoom Effect */}
        {/* title Badge */}
        <span
            className="absolute top-2 left-2 z-10 inline-block bg-gradient-to-r from-violet-300 to-violet-800 text-white text-sm font-medium px-4 py-1 rounded-full mb-4">
          {title}
        </span>
        <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-in-out group-hover:scale-110"
            style={{ backgroundImage: `url(${image})` }}
        >
          <div className="absolute inset-0 bg-violet-950 bg-opacity-20"></div>
        </div>

        {/* Content Card */}
        <div className="absolute bottom-6 left-6 right-6 ">
          <div
              className="bg-white dark:bg-violet-950 rounded-2xl p-6 transition-all duration-500 ease-in-out
                         group-hover:bg-gradient-to-r group-hover:from-violet-300 group-hover:to-violet-800">
            {/* description */}
            <h3 className="text-xl font-bold group-hover:text-white">{description}</h3>
          </div>
        </div>
      </div>
  )
}

export default ProjectCard