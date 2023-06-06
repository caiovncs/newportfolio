import { HeaderProjectsContainer } from './styles'
import logo from '../../../../assets/logo.svg'
import { Button } from '../../../../components/Button'
import { ArrowUpLeft } from '@phosphor-icons/react'
import { NavLink } from 'react-router-dom'

export function HeaderProjects() {
  return (
    <HeaderProjectsContainer>
      <div className="container">
        <img src={logo} alt="logo caio vinicius" />
        <NavLink to="/">
          <Button small>
            <ArrowUpLeft size={16} />
            Voltar
          </Button>
        </NavLink>
      </div>
    </HeaderProjectsContainer>
  )
}
