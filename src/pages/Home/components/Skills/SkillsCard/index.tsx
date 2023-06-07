import { SkillCardContainer } from './styles'
import { RegularText } from '../../../../../components/Typography'

interface SkillCardProps {
  name: string
  image: string
  description: string
}

export function SkillCard({ name, image, description }: SkillCardProps) {
  return (
    <SkillCardContainer>
      <RegularText size="l" color="white">
        {name}
      </RegularText>
      <RegularText size="s" color="gray">
        {description}
      </RegularText>
      <img src={`/assets/TechsImages/${image}`} alt={image} />
    </SkillCardContainer>
  )
}
