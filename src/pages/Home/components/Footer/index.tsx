import { RegularText } from '../../../../components/Typography'
import { FooterContainer } from './styles'
import logo from '../../../../assets/logo.svg'

export function Footer() {
  return (
    <FooterContainer>
      <div className="container">
        <img src={logo} alt="logo caio vinicius" />
        <RegularText color="gray" size="s">
          Criado e desenvolvido por Caio Vinícius ©
        </RegularText>
      </div>
    </FooterContainer>
  )
}
