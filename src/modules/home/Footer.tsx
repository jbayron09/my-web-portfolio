'use client'
import { FaEnvelope, FaPhone } from 'react-icons/fa'
import { socials } from '@/constants/socialNetworks'

const Footer = () => {
  return (
      <footer className="bg-light-gradient dark:bg-dark-gradient py-8 mt-16 border-t border-gray-300 dark:border-gray-700">
        <div className="container mx-auto px-6 md:px-12 flex flex-col items-center text-center">
          {/* Redes sociales */}
          <div className="flex space-x-4 mb-6">
            {socials.map(({ icon: Icon, href }, i) => (
                <a
                    key={i}
                    href={href}
                    target="_blank"
                    className="relative p-3 rounded-full overflow-hidden
                 bg-gray-200 dark:bg-neutral-700 dark:text-white
                 transition-all duration-300 group"
                >
                  <span className="absolute inset-0 z-0 rounded-full scale-0 opacity-0
                       bg-gradient-to-tr from-white to-violet-600
                       dark:from-violet-600 dark:to-black
                       transition-all duration-300 ease-out
                       group-hover:scale-100 group-hover:opacity-100">
                  </span>

                  <span
                      className="relative z-10 text-neutral-800 dark:text-white transition-all duration-300 group-hover:text-white">
                    <Icon className='text-xl'/>
                  </span>
                </a>
            ))}
          </div>

          {/* Información de contacto */}
          <div className="text-neutral-700 dark:text-neutral-300 text-sm mb-4">
            <p className="flex items-center justify-center gap-2">
              <FaEnvelope/> j.bayron.b@gmail.com
            </p>
            <p className="flex items-center justify-center gap-2">
              <FaPhone/> +57 305 301 3836
            </p>
          </div>

          {/* Derechos Reservados */}
          <p className="text-sm text-neutral-600 dark:text-neutral-400">
            © {new Date().getFullYear()} Jorge Bairon Bermudez | All Rights Reserved.
          </p>
        </div>
      </footer>
  )
}

export default Footer
