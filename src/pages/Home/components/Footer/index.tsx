import { RegularText } from '../../../../components/Typography'
import { FooterContainer } from './styles'
import logo from '../../../../assets/logo.svg'
import { motion } from 'framer-motion'

export function Footer() {
  return (
    <FooterContainer>
      <motion.div
        className="container"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <img src={logo} alt="logo caio vinicius" />
        <RegularText color="gray" size="s">
          Criado e desenvolvido por Caio Vinícius ©
        </RegularText>
      </motion.div>
    </FooterContainer>
  )
}
