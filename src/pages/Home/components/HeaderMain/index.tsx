import logo from '../../../../assets/logo.svg'
import { HeaderMainContainer, NavContainer } from './styles'
import { RegularText } from '../../../../components/Typography'

export function HeaderMain() {
  return (
    <HeaderMainContainer>
      <div className="container">
        <img src={logo} alt="logo" />

        <NavContainer>
          <RegularText as="a" href="#" color="nav-color">
            Início
          </RegularText>
          <RegularText as="a" href="#sobre" color="nav-color">
            Sobre
          </RegularText>
          <RegularText as="a" href="#conhecimentos" color="nav-color">
            Conhecimentos
          </RegularText>
          <RegularText as="a" href="#projetos" color="nav-color">
            Projetos
          </RegularText>
          <RegularText as="a" href="#contatos" color="nav-color">
            Contatos
          </RegularText>
        </NavContainer>
      </div>
    </HeaderMainContainer>
  )
}
