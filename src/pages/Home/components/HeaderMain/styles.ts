import styled from 'styled-components'

export const HeaderMainContainer = styled.header`
  background-color: ${({ theme }) => theme.colors['base-black']};
  width: 100%;
  padding-top: 1.125rem;
  padding-bottom: 1.125rem;
  position: fixed;
  z-index: 5;

  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`

export const NavContainer = styled.nav`
  display: flex;
  gap: 2.5rem;

  > a {
    letter-spacing: 0.5px;
    padding: 0.5rem 0.25rem;
  }
`
