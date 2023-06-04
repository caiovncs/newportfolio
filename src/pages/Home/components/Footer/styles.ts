import styled from 'styled-components'

export const FooterContainer = styled.footer`
  background-color: ${({ theme }) => theme.colors['base-black']};
  width: 100%;
  padding-top: 1.125rem;
  padding-bottom: 1.125rem;

  > div {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1.5rem;
  }
  img {
    width: 45px;
  }
  p {
    text-transform: uppercase;
  }
`
