import { SkillCardContainer } from './styles'
import { RegularText } from '../../../../../components/Typography'
import { motion } from 'framer-motion'

interface SkillCardProps {
  name: string
  image: string
  description: string
}
export function SkillCard({ name, image, description }: SkillCardProps) {
  return (
    <SkillCardContainer
      as={motion.div}
      initial={{ opacity: 0, x: -100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4 }}
    >
      <RegularText size="l" color="white">
        {name}
      </RegularText>
      <RegularText size="s" color="gray">
        {description}
      </RegularText>
      <img src={`/TechsImages/${image}`} alt={image} />
    </SkillCardContainer>
  )
}
