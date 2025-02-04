import MainBanner from '@/modules/home/MainBanner'
import MyExperience from '@/modules/home/MyExperience'
import Projects from '@/modules/home/Projects'
import Skills from '@/modules/home/Skills'

export default function Home() {
  return (
      <main>
        <MainBanner/>
        <MyExperience/>
        <Projects/>
        <Skills/>
      </main>
  )
}
