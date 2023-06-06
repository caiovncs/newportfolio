import logo from '../../../../assets/logo.svg'
import { HeaderMainContainer, MenuMobile, NavContainer } from './styles'
import { RegularText } from '../../../../components/Typography'
import { useState } from 'react'

export function HeaderMain() {
  const [activeMenuMobile, setActiveMenuMobile] = useState(false)

  function handleActiveMenuMobile() {
    setActiveMenuMobile(!activeMenuMobile)
  }

  return (
    <HeaderMainContainer activeMenuMobile={activeMenuMobile}>
      <div className="container">
        <img src={logo} alt="logo" />

        <span className="hamburguer" onClick={handleActiveMenuMobile}></span>
        {activeMenuMobile && (
          <MenuMobile>
            <RegularText
              as="a"
              href="#"
              color="white"
              size="l"
              onClick={handleActiveMenuMobile}
            >
              Início
            </RegularText>
            <RegularText
              as="a"
              href="#sobre"
              color="white"
              size="l"
              onClick={handleActiveMenuMobile}
            >
              Sobre
            </RegularText>
            <RegularText
              as="a"
              href="#conhecimentos"
              color="white"
              size="l"
              onClick={handleActiveMenuMobile}
            >
              Conhecimentos
            </RegularText>
            <RegularText
              as="a"
              href="#projetos"
              color="white"
              size="l"
              onClick={handleActiveMenuMobile}
            >
              Projetos
            </RegularText>
            <RegularText
              as="a"
              href="#contatos"
              color="white"
              size="l"
              onClick={handleActiveMenuMobile}
            >
              Contatos
            </RegularText>
          </MenuMobile>
        )}

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
