import { HeaderProjects } from './components/HeaderProjects'
import { ProjectsAll } from './components/ProjectsAll'

export function AllProjects() {
  window.scrollTo(0, 0)
  return (
    <>
      <HeaderProjects />
      <ProjectsAll />
    </>
  )
}
