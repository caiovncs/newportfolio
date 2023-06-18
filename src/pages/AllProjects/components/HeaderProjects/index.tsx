import { HeaderProjectsContainer } from './styles'
import logo from '../../../../assets/logo.svg'
import { Button } from '../../../../components/Button'
import { ArrowUpLeft } from '@phosphor-icons/react'
import { NavLink } from 'react-router-dom'
import { motion } from 'framer-motion'

export function HeaderProjects() {
  return (
    <HeaderProjectsContainer>
      <motion.div
        className="container"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <img src={logo} alt="logo caio vinicius" />
        <NavLink to="/">
          <Button small>
            <ArrowUpLeft size={16} />
            Voltar
          </Button>
        </NavLink>
      </motion.div>
    </HeaderProjectsContainer>
  )
}
