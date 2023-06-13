import { ArrowRight } from '@phosphor-icons/react'
import { Button } from '../../../../components/Button'
import { Projects } from '../../../../components/Projects'
import { TitleText } from '../../../../components/Typography'
import { ProjectsHomeContainer } from './styles'
import { NavLink } from 'react-router-dom'

export function ProjectsHome() {
  return (
    <ProjectsHomeContainer id="Projetos">
      <div className="container">
        <TitleText size="l">ProjetosDeEstudo</TitleText>
        <Projects home />
        <NavLink to="/AllProjects">
          <Button small secondary>
            Todos os projetos <ArrowRight size={16} />
          </Button>
        </NavLink>
      </div>
    </ProjectsHomeContainer>
  )
}
