import { ArrowRight } from '@phosphor-icons/react'
import { Button } from '../../../../components/Button'
import { LinkContainer } from './styles'
import { motion } from 'framer-motion'

export function Links() {
  return (
    <LinkContainer>
      <motion.div
        className="container"
        initial={{ opacity: 0, y: -100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <Button secondary url="https://www.linkedin.com/in/caioviniciusdev/">
          Linkedin
          <ArrowRight size={16} />
        </Button>
        <Button secondary url="https://www.github.com/caiovncs">
          Github <ArrowRight size={16} />
        </Button>
        <Button secondary url="https://www.behance.net/f60615c7">
          Behance <ArrowRight size={16} />
        </Button>
      </motion.div>
    </LinkContainer>
  )
}
