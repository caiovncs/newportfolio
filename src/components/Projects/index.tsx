import { projects } from '../../data/projects'
import { ProjectCard } from '../ProjectCard'
import { ProjectsContainer } from './styles'

interface ProjectsProp {
  home?: boolean
}

export function Projects({ home }: ProjectsProp) {
  const projectsHome = projects.slice(3, 6)

  return (
    <ProjectsContainer>
      {home
        ? projectsHome.map((project) => {
            return (
              <ProjectCard
                key={project.id}
                name={project.name}
                description={project.description}
                img={project.img}
                techs={project.techs}
                id={project.id}
                links={project.links}
              />
            )
          })
        : projects.map((project) => {
            return (
              <ProjectCard
                key={project.id}
                name={project.name}
                description={project.description}
                img={project.img}
                techs={project.techs}
                id={project.id}
                links={project.links}
              />
            )
          })}
    </ProjectsContainer>
  )
}
