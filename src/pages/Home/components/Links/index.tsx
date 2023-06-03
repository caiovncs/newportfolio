import { ArrowRight } from '@phosphor-icons/react'
import { Button } from '../../../../components/Button'
import { LinkContainer } from './styles'

export function Links() {
  return (
    <LinkContainer>
      <div className="container">
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
      </div>
    </LinkContainer>
  )
}
