import type { IconType } from 'react-icons'
import Image from 'next/image'
import { FaGithub, FaInstagram, FaLinkedin, FaWhatsapp } from 'react-icons/fa'

interface Social {
  icon: IconType
  href: string
}

const socials: Social[] = [
  {
    icon: FaGithub,
    href: '',
  }, {
    icon: FaLinkedin,
    href: 'https://www.linkedin.com/in/jorge-bairon-bermudez-leon-6242b81b5',
  }, {
    icon: FaInstagram,
    href: 'https://www.instagram.com/jbayron09/',
  }, {
    icon: FaWhatsapp,
    href: '',
  },
]

const MainBanner = () => {
  return (
      <header id="home" className="h-screen flex flex-col justify-center">
        <div className="container grid grid-cols-1 md:grid-cols-2 items-center gap-8">
          <div className="text-center md:text-left">
            <h1 className="text-2xl md:text-2xl font-bold bg-gradient-to-r from-violet-500 to-violet-950 dark:from-violet-600 dark:to-white bg-clip-text text-transparent">
              +3 years experience
            </h1>
            <h1 className="text-3xl md:text-5xl font-bold leading-tight text-gray-800 dark:text-white">
              Hi, I&#39;m{' '}
              <span className="text-purple-500">Bairon Bermudez</span>
            </h1>
            {/* Social Buttons */}
            <div className="mt-4 flex justify-center md:justify-start space-x-2">
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

                    <span className="relative z-10 text-neutral-800 dark:text-white transition-all duration-300 group-hover:text-white">
                      <Icon/>
                    </span>
                  </a>
              ))}
            </div>
            <button className="relative mt-4 w-max font-medium text-white capitalize px-8 py-2 rounded-full
                    overflow-hidden bg-gradient-to-r from-violet-300 to-violet-800
                    before:absolute before:inset-0 before:bg-gradient-to-l before:from-violet-300 before:to-violet-800
                    before:transition-all before:duration-300 before:ease-in-out
                    before:scale-x-0 hover:before:scale-x-100">
              <span className="relative z-10">Download CV</span>
            </button>
          </div>

          <div className="relative flex justify-center md:justify-end">
            <div className="absolute aspect-square h-full rounded-full bg-purple-500 blur-3xl opacity-20"/>
            <Image
                alt="Bairon Bermudez"
                src="/images/bairon.png"
                width={400}
                height={400}
                className="relative animate-floating"/>
          </div>
        </div>
      </header>
  )
}

export default MainBanner