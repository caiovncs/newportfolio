import { TitleText } from '../../../../components/Typography'
import { SkillsContainer } from './styles'
import { skills } from '../../../../data/skills'
import { SkillCard } from './SkillsCard'
import { SkillsCardsStyle } from './SkillsCard/styles'
import { motion } from 'framer-motion'

export function Skills() {
  return (
    <SkillsContainer id="Conhecimentos">
      <motion.div className="container">
        <TitleText
          size="l"
          color="white"
          as={motion.h1}
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          Conhecimentos
        </TitleText>

        <SkillsCardsStyle>
          {skills.map((skill) => {
            return (
              <SkillCard
                key={skill.id}
                name={skill.name}
                description={skill.description}
                image={skill.image}
              />
            )
          })}
        </SkillsCardsStyle>
      </motion.div>
    </SkillsContainer>
  )
}
