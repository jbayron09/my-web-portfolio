'use client'
import 'react-vertical-timeline-component/style.min.css'
// import { motion } from 'framer-motion'
import { VerticalTimeline } from 'react-vertical-timeline-component'
// import { textVariant } from '@/utils/motion'
import { useTheme } from '@/context/ThemeProvider'
import ExperienceCard from '@/modules/home/components/ExperienceCard'
import type { IconType } from 'react-icons'
import { SiDjango, SiGraphql, SiNestjs } from 'react-icons/si'
import { FaChalkboardTeacher, FaNodeJs, FaReact } from 'react-icons/fa'

export interface Experience {
  title: string;
  company_name: string;
  icon: IconType;
  date: string;
  points: string[];
}

const experiences: Experience[] = [
  {
    title: 'Mentor de estudiantes',
    company_name: 'Cognitus ORG',
    icon: FaChalkboardTeacher,
    date: 'Oct 2024 - Actualidad',
    points: [
      'Apoyo a jóvenes en su aprendizaje de desarrollo de software, ayudándolos a fortalecer sus fundamentos y habilidades prácticas.',
      'Realizo sesiones grupales e individuales compartiendo consejos sobre buenas prácticas y resolución de problemas.',
      'Diseño actividades y proyectos que refuerzan el aprendizaje, ofreciendo retroalimentación constructiva.',
    ],
  },
  {
    title: 'Desarrollador Full Stack',
    company_name: 'Premium Marketplace',
    icon: FaReact,
    date: 'Dic 2023 - Actualidad',
    points: [
      'Diseño y desarrollo de una plataforma de venta de repuestos para vehículos con React.js, TypeScript y Tailwind CSS.',
      'Backend desarrollado con Django y FastAPI, utilizando GraphQL como protocolo eficiente de consultas.',
      'Arquitectura basada en microservicios, dockerizados y desplegados en AWS EC2 con AWS RDS para la gestión de datos.',
      'Aseguramiento de un entorno seguro, eficiente y de alta disponibilidad.',
    ],
  },
  {
    title: 'Programador Full Stack',
    company_name: 'Prospect1, Armenia, Quindío',
    icon: SiNestjs,
    date: 'Abr 2024 - Sep 2024',
    points: [
      'Desarrollo integral de aplicaciones web utilizando React.js.',
      'Implementación de TypeScript para mejorar la robustez del código.',
      'Backend con NestJS y Node.js, desarrollando APIs REST eficientes.',
      'Gestión de datos con MongoDB y MySQL, optimizando la estructura y consultas.',
      'Optimización de rendimiento y mejora de tiempos de respuesta.',
    ],
  },
  {
    title: 'Desarrollador Web',
    company_name: 'Grupo N1, Armenia, Quindío',
    icon: SiDjango,
    date: 'Sep 2023 - Abr 2024',
    points: [
      'Lideré el desarrollo del frontend de una aplicación web contable con React.js y TypeScript.',
      'Implementé Apollo GraphQL para la integración eficiente y extracción de datos contables.',
      'Desarrollo backend con Django, integrando algoritmos de machine learning.',
      'Creación de microservicios con FastAPI para mejorar la concurrencia de tareas.',
    ],
  },
  {
    title: 'Programador Full Stack',
    company_name: 'Fitwave, Armenia, Quindío',
    icon: FaNodeJs,
    date: 'Feb 2023 - Sep 2023',
    points: [
      'Desarrollo de APIs escalables con Node.js, Express y NestJS.',
      'Gestión de bases de datos en MySQL y MongoDB.',
      'Diseño y mantenimiento de dashboards administrativos con React.js.',
    ],
  },
  {
    title: 'Programador Full Stack',
    company_name: 'Rumba Money Centers, Armenia, Quindío',
    icon: SiGraphql,
    date: 'Sep 2022 - Feb 2023',
    points: [
      'Desarrollo y mantenimiento de un CRM y tablero de transacciones con React.js y TypeScript.',
      'Mantenimiento y optimización de una app móvil en React Native.',
      'Colaboración con equipos multifuncionales para mejorar la experiencia del usuario.',
    ],
  },
]

const MyExperience = () => {
  const { isDarkMode } = useTheme() // 🔥 Usa el hook de Dark Mode

  return (
      <section id="experience">
        <div className="py-16 container">
          {/*<motion.h2*/}
          {/*    variants={textVariant(0.2)}*/}
          {/*    initial="hidden"*/}
          {/*    whileInView="show"*/}
          {/*    viewport={{ once: false, amount: 0.3 }}*/}
          {/*    className="mb-12 text-3xl md:text-4xl font-bold text-center text-gray-800 dark:text-white">*/}
          {/*  Work Experience*/}
          {/*</motion.h2>*/}
          <h2 className="mb-12 text-3xl md:text-4xl font-bold text-center text-neutral-800 dark:text-white">
            Work Experience
          </h2>

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
      </section>
  )
}

export default MyExperience