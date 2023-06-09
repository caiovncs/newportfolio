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
import { CircleNotch, PaperPlaneRight } from '@phosphor-icons/react'
import { useForm } from 'react-hook-form'
import { FormEvent, useContext, useEffect, useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import { FocusContext } from '../../../../context/FocusContext'
import { motion } from 'framer-motion'

export function Contact() {
  const { register, reset, handleSubmit, watch, setFocus } = useForm()

  const [hasName, hasEmail, hasMensage] = watch(['nome', 'email', 'mensagem'])
  const isDisabled = !hasName || !hasEmail || !hasMensage

  function handleSendForm() {}

  const form = useRef<HTMLFormElement>(null)
  const [loading, setLoading] = useState(false)

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!form.current) return

    setLoading(true)

    emailjs
      .sendForm(
        'service_66dookf',
        'template_qmwj3i9',
        form.current,
        'bb3scpnsgZZwBRYmF',
      )
      .then(
        () => {
          reset()
          setLoading(false)
        },
        (error) => {
          setLoading(false)
          console.log(error)
        },
      )
  }

  const { focusActive, setFocusActive } = useContext(FocusContext)

  useEffect(() => {
    if (focusActive) {
      setFocus('nome')
    }
  }, [focusActive, setFocus])

  function focusActiveIsFalse() {
    setFocusActive(false)
  }

  return (
    <ContactContainer id="Contatos">
      <div className="container">
        <InfosContactContainer
          as={motion.div}
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
        >
          <TitleText
            size="l"
            as={motion.h1}
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            Contatos
          </TitleText>
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
              href="https://api.whatsapp.com/send?phone=5581985525735&text=sua%20mensagem"
              target="_blank"
              rel="noreferrer"
            >
              <img src={whatsapp} alt="logo do whatsapp" />
            </a>
          </div>
        </InfosContactContainer>
        <span></span>

        <FormFooterContainer
          onSubmit={handleSubmit(handleSendForm) && sendEmail}
          ref={form}
          as={motion.form}
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          <input
            placeholder="Nome"
            type="text"
            {...register('nome', { required: true })}
            onBlur={focusActiveIsFalse}
          />
          <input
            placeholder="Email"
            type="email"
            {...register('email', { required: true })}
          />
          <textarea
            placeholder="Mensagem"
            {...register('mensagem', { required: true })}
          />
          <Button submit disabled={isDisabled || loading}>
            Enviar mensagem
            {loading ? (
              <CircleNotch size={16} className="rotate-icon" />
            ) : (
              <PaperPlaneRight size={16} />
            )}
          </Button>
        </FormFooterContainer>
      </div>
    </ContactContainer>
  )
}
