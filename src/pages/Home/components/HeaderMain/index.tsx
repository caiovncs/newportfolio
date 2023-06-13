import logo from '../../../../assets/logo.svg'
import { HeaderMainContainer, MenuMobile, NavContainer } from './styles'
import { RegularText } from '../../../../components/Typography'
import { useState } from 'react'
import { Link } from 'react-scroll'

export function HeaderMain() {
  const [activeMenuMobile, setActiveMenuMobile] = useState(false)

  function handleActiveMenuMobile() {
    setActiveMenuMobile(!activeMenuMobile)
  }

  function itemCloseMenuMobileOnClick() {
    setActiveMenuMobile(false)
  }

  const navItensNames = [
    'Início',
    'Sobre',
    'Conhecimentos',
    'Projetos',
    'Contatos',
  ]

  return (
    <HeaderMainContainer activeMenuMobile={activeMenuMobile}>
      <div className="container">
        <img src={logo} alt="logo" />

        <span className="hamburguer" onClick={handleActiveMenuMobile}></span>
        {activeMenuMobile && (
          <MenuMobile>
            {navItensNames.map((name: string) => {
              return (
                <RegularText key={name} color="white" size="l">
                  <Link
                    to={name}
                    smooth={true}
                    offset={-40}
                    duration={0}
                    onClick={itemCloseMenuMobileOnClick}
                  >
                    {name}
                  </Link>
                </RegularText>
              )
            })}
          </MenuMobile>
        )}

        <NavContainer>
          {navItensNames.map((name: string) => {
            return (
              <RegularText key={name} color="nav-color">
                <Link to={name} smooth={true} offset={-20} duration={0}>
                  {name}
                </Link>
              </RegularText>
            )
          })}
        </NavContainer>
      </div>
    </HeaderMainContainer>
  )
}
