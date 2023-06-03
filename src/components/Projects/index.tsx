import { projects } from '../../data/projects'
import { ProjectCard } from '../ProjectCard'
import { TitleText } from '../Typography'
import { ProjectsContainer } from './styles'
interface phprops {
  ph?: boolean
}
export function Projects({ph}: phprops) {
  return (
    <ProjectsContainer>
      <div className="container">
        <TitleText size="l">ProjetosDeEstudo</TitleText>
        {projects.map((project) => {
          return (
            <ProjectCard
              key={project.id}
              name={project.name}
              description={project.description}
              img={project.img}
            />
          )
        })}
      </div>
    </ProjectsContainer>
  )
}
