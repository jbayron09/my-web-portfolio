'use client'
import type { FC } from 'react'
import type { Experience } from '@/modules/home/MyExperience'
import { VerticalTimelineElement } from 'react-vertical-timeline-component'
import { useTheme } from '@/context/ThemeProvider'

interface ExperienceCardProps {
  experience: Experience
}

const ExperienceCard: FC<ExperienceCardProps> = ({ experience }) => {
  const { isDarkMode } = useTheme()
  const Icon = experience.icon

  return (
      <VerticalTimelineElement
          contentStyle={{
            background: isDarkMode ? 'linear-gradient(90deg, #311760, #503193, #7040c1)' : 'linear-gradient(90deg, #e4d4ff, #c2a8ff, #a377e6)',
            boxShadow: isDarkMode
                ? '0px 4px 0px -1px #e8d9ff'
                : '0px 4px 0px -1px #8B5CF6',
          }}
          dateClassName="text-neutral-800 dark:text-white"
          contentArrowStyle={{ borderRight: isDarkMode ? '7px solid  #311760' : '7px solid  #e4d4ff' }}
          date={experience.date}
          iconStyle={{ background: "#E6DEDD" }}
          icon={<Icon className="text-purple-500"/>}>
        <div className="text-neutral-800 dark:text-white">
          <h3 className="text-[24px] font-bold">{experience.title}</h3>
          <p className="text-[16px] font-semibold" style={{ margin: 0 }}>
            {experience.company_name}
          </p>
        </div>

        <ul className="mt-5 list-disc ml-5 space-y-2">
          {experience.points.map((point, index) => (
              <li
                  key={`experience-point-${index}`}
                  className="text-neutral-800 dark:text-white  text-[14px] pl-1 tracking-wider"
              >
                {point}
              </li>
          ))}
        </ul>
      </VerticalTimelineElement>
  )
}

export default ExperienceCard