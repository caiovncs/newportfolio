import { Projects } from '../../../../components/Projects'
import { ProjectsAllContainer } from './styles'

export function ProjectsAll() {
  return (
    <ProjectsAllContainer>
      <div className="container">
        <Projects />
      </div>
    </ProjectsAllContainer>
  )
}
