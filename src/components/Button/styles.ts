import styled, { css } from 'styled-components'

interface ButtonContainerProps {
  submit?: boolean
  secondary?: boolean
  small?: boolean
}

export const ButtonContainer = styled.button<ButtonContainerProps>`
  display: flex;
  gap: 8px;
  align-items: center;
  background-color: ${({ theme }) => theme.colors['brand-purple']};
  color: ${({ theme }) => theme.colors['base-black']};
  padding: 0.75rem 2rem;
  font-size: ${({ theme }) => theme.textSizes['regular-m']};
  cursor: pointer;
  border: none;

  ${({ secondary }) =>
    secondary &&
    css`
      background-color: transparent;
      border: 2px solid ${({ theme }) => theme.colors['base-black']};
      padding: 0.75rem 2.5rem 0.75rem 3rem;
    `}

  ${({ submit }) =>
    submit &&
    css`
      type: submit;
    `}

    ${({ small }) =>
    small &&
    css`
      padding: 1.5rem 0.5rem;
      font-size: ${({ theme }) => theme.textSizes['regular-s']};
    `}
`
