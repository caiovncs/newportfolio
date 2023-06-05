import { RegularText, TitleText } from '../../../../components/Typography'
import {
  ContactContainer,
  FormFooterContainer,
  InfosContactContainer,
} from './styles'
import linkedin from '../../../../assets/Icons/linkedin.svg'
import whatsapp from '../../../../assets/Icons/whatsapp.svg'
import email from '../../../../assets/Icons/email.svg'
import { Button } from '../../../../components/Button'
import { PaperPlaneRight } from '@phosphor-icons/react'
import { useForm } from 'react-hook-form'

export function Contact() {
  const { register, reset, handleSubmit } = useForm()

  function handleSendForm() {
    reset()
  }
  return (
    <ContactContainer id="contatos">
      <div className="container">
        <InfosContactContainer>
          <TitleText size="l">Contatos</TitleText>
          <RegularText color="gray">
            Obrigado por visitar meu portfólio, aguardo ansiosamente por sua
            mensagem!
          </RegularText>
          <div>
            <img src={email} alt="icone de email" />
            <RegularText color="nav-color">
              devcaiovinicius@gmail.com
            </RegularText>
          </div>
          <div>
            <a
              href="https://www.linkedin.com/in/caioviniciusdev"
              target="_blank"
              rel="noreferrer"
            >
              <img src={linkedin} alt="logo do linkedin" />
            </a>
            <a
              href="https://www.linkedin.com/in/caioviniciusdev"
              target="_blank"
              rel="noreferrer"
            >
              <img src={whatsapp} alt="logo do whatsapp" />
            </a>
          </div>
        </InfosContactContainer>

        <span></span>

        <FormFooterContainer onSubmit={handleSubmit(handleSendForm)}>
          <input
            placeholder="Nome"
            type="text"
            {...register('nome', { required: 'Insira seu nome' })}
          />

          <input
            placeholder="Email"
            type="email"
            {...register('email', { required: 'Insira seu email' })}
          />
          <textarea
            placeholder="Mensagem"
            {...register('mensagem', { required: 'Insira a mensagem' })}
          />
          <Button submit>
            Enviar mensagem <PaperPlaneRight size={16} />
          </Button>
        </FormFooterContainer>
      </div>
    </ContactContainer>
  )
}
