import type { IconType } from 'react-icons'
import { FaGithub, FaInstagram, FaLinkedin, FaWhatsapp } from 'react-icons/fa'

export type Social = {
  icon: IconType,
  href: string,
}

export const socials: Social[] = [
  {
    icon: FaGithub,
    href: 'https://github.com/jbayron09',
  }, {
    icon: FaLinkedin,
    href: 'https://www.linkedin.com/in/jorge-bairon-bermudez-leon-6242b81b5',
  }, {
    icon: FaInstagram,
    href: 'https://www.instagram.com/jbayron09/',
  }, {
    icon: FaWhatsapp,
    href: 'https://wa.me/573053013836',
  },
]