import { RegularText, TitleText } from '../../../../components/Typography'
import { AboutMeContainer, TextsAbout } from './styles'
import card from '../../../../assets/card.png'
import { Button } from '../../../../components/Button'
import { DownloadSimple } from '@phosphor-icons/react'
import { motion } from 'framer-motion'

export function AboutMe() {
  return (
    <AboutMeContainer id="Sobre">
      <motion.div
        className="container"
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4 }}
      >
        <TextsAbout>
          <TitleText
            size="l"
            color="black"
            as={motion.h1}
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            SobreMim
          </TitleText>
          <RegularText color="black-light" size="l">
            Sou aluno do 2º período de Análise e Desenvolvimento de Sistemas no
            IFPE. Meu objetivo é me tornar um desenvolvedor de software completo
            e oferecer soluções criativas e eficientes para problemas do mundo
            real. Estou em busca da minha primeira oportunidade profissional na
            área e atualmente minhas experiências se resumem a projetos de
            estudo. No momento meu foco é me especializar em React e Typescript.
          </RegularText>
          <Button downloadPdf>
            <DownloadSimple size={18} />
            Baixar CV
          </Button>
        </TextsAbout>
        <img src={card} alt="card com informações pessoais" />
      </motion.div>
    </AboutMeContainer>
  )
}
