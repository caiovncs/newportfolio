import { ReactNode } from 'react'
import { ButtonContainer } from './styles'

interface ButtonProps {
  submit?: boolean
  secondary?: boolean
  small?: boolean
  children: ReactNode
}

export function Button({ children, ...props }: ButtonProps) {
  return <ButtonContainer {...props}>{children}</ButtonContainer>
}
