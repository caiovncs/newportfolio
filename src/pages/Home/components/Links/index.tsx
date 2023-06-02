import { ArrowRight } from '@phosphor-icons/react'
import { Button } from '../../../../components/Button'
import { LinkContainer } from './styles'

export function Links() {
  return (
    <LinkContainer>
      <div className="container">
        <Button secondary>
          Linkedin
          <ArrowRight size={16} />
        </Button>
        <Button secondary>
          Github <ArrowRight size={16} />
        </Button>
        <Button secondary>
          Behance <ArrowRight size={16} />
        </Button>
      </div>
    </LinkContainer>
  )
}
