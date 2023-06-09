import { ArrowRight } from '@phosphor-icons/react'
import { Button } from '../Button'
import { RegularText, TitleText } from '../Typography'
import {
  ProjectCardContainer,
  ProjectCardTexts,
  TechsContainer,
} from './styles'
import { motion } from 'framer-motion'

interface ProjectCardProps {
  id: number
  name: string
  description: string
  img: string
  techs: string[]
  links: string[]
}

export function ProjectCard({
  id,
  name,
  description,
  img,
  techs,
  links,
}: ProjectCardProps) {
  return (
    <ProjectCardContainer
      as={motion.div}
      initial={{ opacity: 0, x: -100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4 }}
    >
      <img src={`/ProjectsImages/${img}`} alt="" />

      <ProjectCardTexts>
        <TitleText>{name}</TitleText>
        <RegularText color="gray">{description}</RegularText>
        <TechsContainer>
          {techs.map((tech: string) => {
            return <span key={`${id}-${tech}`}>{tech}</span>
          })}
        </TechsContainer>
        <TechsContainer>
          <Button small url={links[0]}>
            Ver no github
            <ArrowRight size={14} />
          </Button>
          <Button small url={links[1]}>
            Ver online
            <ArrowRight size={14} />
          </Button>
        </TechsContainer>
      </ProjectCardTexts>
    </ProjectCardContainer>
  )
}
