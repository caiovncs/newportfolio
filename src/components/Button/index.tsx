import { ReactNode, useContext } from 'react'
import { ButtonContainer } from './styles'
import { FocusContext } from '../../context/FocusContext'

interface ButtonProps {
  submit?: boolean
  disabled?: boolean
  secondary?: boolean
  small?: boolean
  url?: string
  scrollToForm?: boolean
  downloadPdf?: boolean
  children: ReactNode
}
export function Button({
  children,
  url,
  scrollToForm,
  downloadPdf,
  submit,
  disabled,
  ...props
}: ButtonProps) {
  const { setFocusActive } = useContext(FocusContext)

  function handleClickActions() {
    if (url) {
      window.open(url, '_blank')
    }
    if (downloadPdf) {
      const link = document.createElement('a')
      link.href = '/src/assets/caiovinicius-cv.pdf'
      link.setAttribute('download', 'caiovinicius-cv.pdf')
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
    }
    if (scrollToForm) {
      setFocusActive(true)
    }
  }

  return (
    <ButtonContainer
      {...props}
      onClick={handleClickActions}
      type={submit ? 'submit' : 'button'}
      disabled={disabled}
    >
      {children}
    </ButtonContainer>
  )
}
