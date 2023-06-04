import { HeaderMain } from './components/HeaderMain'
import { Links } from './components/Links'
import { AboutMe } from './components/AboutMe'
import { Skills } from './components/Skills'
import { Contact } from './components/Contact'
import { HeroSection } from './components/HeroSection'
import { ProjectsHome } from './components/ProjectsHome'
import { Footer } from './components/Footer'

export function Home() {
  return (
    <>
      <HeaderMain />
      <HeroSection />
      <Links />
      <AboutMe />
      <Skills />
      <ProjectsHome />
      <Contact />
      <Footer />
    </>
  )
}
