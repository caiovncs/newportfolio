import { ArrowRight } from '@phosphor-icons/react'
import { Button } from '../../../../components/Button'
import { RegularText, TitleText } from '../../../../components/Typography'
import { HeroSectionContainer } from './styles'

export function HeroSection() {
  return (
    <HeroSectionContainer>
      <div className="container">
        <RegularText size="l" color="gray">
          Olá, eu sou <span>Caio Vinícius</span>
        </RegularText>
        <TitleText size="xl" className="gradient">
          desenvolvedor <br /> front end.
        </TitleText>
        <RegularText color="gray">
          Sinta-se à vontade para explorar e conhecer mais sobre minhas
          habilidades.
        </RegularText>
        <Button scrollToForm>
          Entrar em contato
          <ArrowRight size={16} />
        </Button>
      </div>
    </HeroSectionContainer>
  )
}
