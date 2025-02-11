import { FaGithub, FaInstagram, FaLinkedin, FaWhatsapp, FaEnvelope, FaPhone } from 'react-icons/fa'

const Footer = () => {
  return (
      <footer className="bg-light-gradient dark:bg-dark-gradient py-8 mt-16 border-t border-gray-300 dark:border-gray-700">
        <div className="container mx-auto px-6 md:px-12 flex flex-col items-center text-center">

          {/* Redes sociales */}
          <div className="flex space-x-4 mb-6">
            <a href="https://github.com/jbayron09" target="_blank"
               className="p-3 rounded-full bg-gray-300 dark:bg-neutral-700 hover:bg-violet-500 dark:hover:bg-violet-400 transition-all">
              <FaGithub className="text-xl text-neutral-800 dark:text-white"/>
            </a>
            <a href="https://www.linkedin.com/in/jorge-bairon-bermudez-leon-6242b81b5" target="_blank"
               className="p-3 rounded-full bg-gray-300 dark:bg-neutral-700 hover:bg-violet-500 dark:hover:bg-violet-400 transition-all">
              <FaLinkedin className="text-xl text-neutral-800 dark:text-white"/>
            </a>
            <a href="https://www.instagram.com/jbayron09/" target="_blank"
               className="p-3 rounded-full bg-gray-300 dark:bg-neutral-700 hover:bg-violet-500 dark:hover:bg-violet-400 transition-all">
              <FaInstagram className="text-xl text-neutral-800 dark:text-white"/>
            </a>
            <a href="https://wa.me/573053013836" target="_blank"
               className="p-3 rounded-full bg-gray-300 dark:bg-neutral-700 hover:bg-violet-500 dark:hover:bg-violet-400 transition-all">
              <FaWhatsapp className="text-xl text-neutral-800 dark:text-white"/>
            </a>
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
