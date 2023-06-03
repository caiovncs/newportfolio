import { Button } from '../Button'
import { RegularText, TitleText } from '../Typography'
import { ProjectCardContainer, ProjectCardTexts } from './styles'

export function ProjectCard({name, description, img}) {
  return (
    <ProjectCardContainer>
      <img src={`src/assets/ProjectsImages/${img}`} alt="" />

      <ProjectCardTexts>
        <TitleText>{name}</TitleText>
        <RegularText color="gray">{description}</RegularText>
        <Button small>Link no github</Button>
      </ProjectCardTexts>
    </ProjectCardContainer>
  )
}
