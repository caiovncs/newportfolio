import { ArrowRight } from '@phosphor-icons/react'
import { Button } from '../../../../components/Button'
import { RegularText, TitleText } from '../../../../components/Typography'
import { HeroSectionContainer } from './styles'
import { TextAnimate } from '../AnimateText'
import { motion } from 'framer-motion'

export function HeroSection() {
  return (
    <HeroSectionContainer id="Início">
      <motion.div
        className="container"
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4 }}
      >
        <RegularText size="l" color="gray">
          Olá, eu sou <span>Caio Vinícius</span>
        </RegularText>
        <TitleText size="xl" className="gradient">
          <TextAnimate text="desenvolvedor<br> front end." />
        </TitleText>
        <RegularText color="gray">
          Sinta-se à vontade para explorar e conhecer mais sobre minhas
          habilidades.
        </RegularText>
        <Button scrollToForm>
          Entrar em contato
          <ArrowRight size={16} />
        </Button>
      </motion.div>
    </HeroSectionContainer>
  )
}
