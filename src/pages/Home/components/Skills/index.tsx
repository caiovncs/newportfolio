import { TitleText } from '../../../../components/Typography'
import { SkillsContainer } from './styles'
import { skills } from '../../../../data/skills'
import { SkillCard } from './SkillsCard'
import { SkillsCardsStyle } from './SkillsCard/styles'

export function Skills() {
  return (
    <SkillsContainer id="Conhecimentos">
      <div className="container">
        <TitleText size="l" color="white">
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
      </div>
    </SkillsContainer>
  )
}
