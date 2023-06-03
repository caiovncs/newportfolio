import { ReactNode } from 'react'
import { ButtonContainer } from './styles'

interface ButtonProps {
  submit?: boolean
  secondary?: boolean
  small?: boolean
  url?: string
  downloadPdf?: boolean
  children: ReactNode
}
export function Button({ children, url, downloadPdf, ...props }: ButtonProps) {
  function handleOpenLinkAndDownload() {
    if (url) {
      window.open(url, '_blank')
    } else if (downloadPdf) {
      const link = document.createElement('a')
      link.href = '/src/assets/caiovinicius-cv.pdf'
      link.setAttribute('download', 'caiovinicius-cv.pdf')
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
    }
  }
  return (
    <ButtonContainer {...props} onClick={handleOpenLinkAndDownload}>
      {children}
    </ButtonContainer>
  )
}
