import { RegularText, TitleText } from '../../../../components/Typography'
import { AboutMeContainer, TextsAbout } from './styles'
import card from '../../../../assets/card.png'
import { Button } from '../../../../components/Button'
import { DownloadSimple } from '@phosphor-icons/react'

export function AboutMe() {
  return (
    <AboutMeContainer id="sobre">
      <div className="container">
        <TextsAbout>
          <TitleText size="l" color="black">
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
            Baixar CV
            <DownloadSimple size={18} />
          </Button>
        </TextsAbout>
        <img src={card} alt="card com informações pessoais" />
      </div>
    </AboutMeContainer>
  )
}
