import { ArrowRight } from '@phosphor-icons/react'
import { Button } from '../../../../components/Button'
import { Projects } from '../../../../components/Projects'
import { TitleText } from '../../../../components/Typography'
import { ProjectsHomeContainer } from './styles'
import { NavLink } from 'react-router-dom'
import { motion } from 'framer-motion'

export function ProjectsHome() {
  return (
    <ProjectsHomeContainer id="Projetos">
      <motion.div
        className="container"
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4 }}
      >
        <TitleText
          size="l"
          as={motion.h1}
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          ProjetosDeEstudo
        </TitleText>
        <Projects home />
        <NavLink to="/AllProjects">
          <Button small secondary>
            Todos os projetos <ArrowRight size={16} />
          </Button>
        </NavLink>
      </motion.div>
    </ProjectsHomeContainer>
  )
}
