import MainBanner from '@/modules/home/MainBanner'
import MyExperience from '@/modules/home/MyExperience'
import Projects from '@/modules/home/Projects'
import Skills from '@/modules/home/Skills'
import Footer from '@/modules/home/Footer'

export default function Home() {
  return (
      <main>
        <MainBanner/>
        <MyExperience/>
        <Projects/>
        <Skills/>
        <Footer/>
      </main>
  )
}
