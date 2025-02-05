'use client'
import 'react-vertical-timeline-component/style.min.css'
import { motion } from 'framer-motion'
import { VerticalTimeline } from 'react-vertical-timeline-component'
import { textVariant } from '@/lib/motion'
import { useTheme } from '@/context/ThemeProvider'
import ExperienceCard from '@/modules/home/components/ExperienceCard'
import type { IconType } from 'react-icons'
import { SiDjango, SiGraphql, SiNextdotjs, SiTypescript } from 'react-icons/si'
import { FaNodeJs, FaReact } from 'react-icons/fa'

export interface Experience {
  title: string;
  company_name: string;
  icon: IconType;
  date: string;
  points: string[];
}

const experiences: Experience[] = [
  {
    title: 'React.js Developer',
    company_name: 'Starbucks',
    icon: SiDjango,
    date: 'March 2020 - April 2021',
    points: [
      'Developing and maintaining web applications using React.js and other related technologies.',
      'Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.',
      'Implementing responsive design and ensuring cross-browser compatibility.',
      'Participating in code reviews and providing constructive feedback to other developers.',
    ],
  },
  {
    title: 'React Native Developer',
    company_name: 'Tesla',
    icon: FaNodeJs,
    date: 'Jan 2021 - Feb 2022',
    points: [
      'Developing and maintaining web applications using React.js and other related technologies.',
      'Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.',
      'Implementing responsive design and ensuring cross-browser compatibility.',
      'Participating in code reviews and providing constructive feedback to other developers.',
    ],
  },
  {
    title: 'Web Developer',
    company_name: 'Shopify',
    icon: SiGraphql,
    date: 'Jan 2022 - Jan 2023',
    points: [
      'Developing and maintaining web applications using React.js and other related technologies.',
      'Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.',
      'Implementing responsive design and ensuring cross-browser compatibility.',
      'Participating in code reviews and providing constructive feedback to other developers.',
    ],
  },
  {
    title: 'Full stack Developer',
    company_name: 'Meta',
    icon: SiTypescript,
    date: 'Jan 2023 - Present',
    points: [
      'Developing and maintaining web applications using React.js and other related technologies.',
      'Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.',
      'Implementing responsive design and ensuring cross-browser compatibility.',
      'Participating in code reviews and providing constructive feedback to other developers.',
    ],
  },
  {
    title: 'Full stack Developer',
    company_name: 'Meta',
    icon: FaReact,
    date: 'Jan 2023 - Present',
    points: [
      'Developing and maintaining web applications using React.js and other related technologies.',
      'Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.',
      'Implementing responsive design and ensuring cross-browser compatibility.',
      'Participating in code reviews and providing constructive feedback to other developers.',
    ],
  },
  {
    title: 'Full stack Developer',
    company_name: 'Meta',
    icon: SiNextdotjs,
    date: 'Jan 2023 - Present',
    points: [
      'Developing and maintaining web applications using React.js and other related technologies.',
      'Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.',
      'Implementing responsive design and ensuring cross-browser compatibility.',
      'Participating in code reviews and providing constructive feedback to other developers.',
    ],
  },
]

const MyExperience = () => {
  const { isDarkMode } = useTheme() // 🔥 Usa el hook de Dark Mode

  return (
      <section id="experience">
        <div className="bg-light-gradient dark:bg-dark-gradient">
          <div className="py-16 container">
            <motion.h2
                variants={textVariant(0.2)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.3 }}
                className="mb-12 text-3xl md:text-4xl font-bold text-center text-gray-800 dark:text-white">
              Work Experience
            </motion.h2>

            <div className="mt-20 flex flex-col">
              <VerticalTimeline
                  animate={true}
                  lineColor={isDarkMode ? '#e8d9ff' : '#8B5CF6'} // 🔥 Cambia color de la línea en Dark Mode
              >
                {experiences.map((experience, index) => (
                    <ExperienceCard
                        key={`experience-${index}`}
                        experience={experience}
                    />
                ))}
              </VerticalTimeline>
            </div>
          </div>
        </div>
      </section>
  )
}

export default MyExperience