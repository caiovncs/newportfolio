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

  &:disabled {
    pointer-events: none;
    opacity: 70%;
  }

  ${({ secondary }) =>
    !secondary &&
    css`
      transition: 0.2s ease-in;
      :hover {
        background-color: #a47fdb;
      }
    `}

  ${({ secondary }) =>
    secondary &&
    css`
      background-color: transparent;
      border: 1px solid ${({ theme }) => theme.colors['brand-purple']};
      color: ${({ theme }) => theme.colors['brand-purple']};
      padding: 0.75rem 2.5rem 0.75rem 3rem;
      transition: 0.2s ease-in;
      :hover {
        background-color: ${({ theme }) => theme.colors['brand-purple']};
        color: ${({ theme }) => theme.colors['base-black']};
      }
    `}

    ${({ small }) =>
    small &&
    css`
      padding: 0.5rem 1.5rem;
      font-size: ${({ theme }) => theme.textSizes['regular-s']};
    `}
`
