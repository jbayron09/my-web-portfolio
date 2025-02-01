import clsx from 'clsx'

interface Item {
  year: number;
  title: string;
  description: string;
}

const items: Item[] = [
  {
    year: 2024,
    title: 'Desarrollador Freelance',
    description: 'Como desarrollador freelance, he trabajado en la creación de sitios web y aplicaciones personalizadas para pequeñas empresas. Mi experiencia incluye el uso de tecnologías como React, Next.js para frontend, y Django para backend, siempre priorizando soluciones adaptadas a las necesidades de mis clientes.',
  },
  {
    year: 2021,
    title: 'Inicio en Desarrollo Web',
    description: 'En este año descubrí mi pasión por el desarrollo web. Aprendí a programar y realicé mis primeros proyectos personales utilizando tecnologías como HTML, CSS y JavaScript, sentando las bases para mi carrera en tecnología.',
  },
  {
    year: 2018,
    title: 'Inicios Académicos',
    description: 'Durante mi formación en Ingeniería Mecatrónica, desarrollé habilidades en programación utilizando lenguajes como C y Python. Además, exploré la creación de scripts para Arduino, lo que despertó mi interés por la resolución de problemas a través del código.',
  },
]


const AboutMe = () => {
  return (
      <section className="bg-banner bg-cover bg-center bg-fixed" id="about-me">
        <div
            className={clsx([
              'backdrop-blur-sm',
              'bg-gradient-to-b from-neutral-50 via-neutral-50/70 to-neutral-50',
              'dark:from-neutral-900 dark:via-neutral-900/60 dark:to-neutral-900',
            ])}
        >
          <div className="py-16 container">
            <h2 className="mb-12 text-3xl md:text-4xl font-bold text-center text-gray-800 dark:text-white">
              Acerca de mí
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
              {/* Sección de Texto */}
              <div className="md:col-span-5 text-gray-700 dark:text-gray-100">
                <p className="mb-6 leading-relaxed">
                  Soy <span className="text-purple-500 font-bold">Julian Trujillo</span>, un desarrollador web
                  apasionado por diseñar y construir soluciones tecnológicas modernas y efectivas. Mi trayectoria
                  profesional está marcada por un aprendizaje constante y un compromiso con la excelencia tanto en
                  desarrollo frontend como backend.
                </p>
                <p className="mb-6 leading-relaxed">
                  Me motiva explorar nuevas herramientas y enfrentar desafíos que fortalezcan mis habilidades. A
                  continuación, te comparto un vistazo a mi carrera profesional:
                </p>
              </div>

              {/* Sección de Línea de Tiempo */}
              <div className="md:col-span-7">
                <div className="relative">
                  <div className="absolute h-full w-1 bg-gray-300 dark:bg-neutral-600 left-4 md:left-8"></div>
                  <ul className="space-y-8">
                    {items.map((item) => (
                        <li key={item.year} className="relative pl-10 md:pl-16">
                          <span
                              className="absolute left-0 md:left-4 w-8 h-8 bg-purple-500 rounded-full text-xs flex items-center justify-center text-white font-bold"
                          >
                            {item.year}
                          </span>
                          <div className="ml-4">
                            <h3 className="text-lg font-bold text-gray-800 dark:text-white">{item.title}</h3>
                            <p className="text-neutral-600 dark:text-neutral-300">{item.description}</p>
                          </div>
                        </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default AboutMe