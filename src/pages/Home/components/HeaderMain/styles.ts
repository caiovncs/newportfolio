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

  a {
    position: relative;
    letter-spacing: 0.5px;
    padding: 0.5rem 0.25rem;
    transition: transform 0.3s ease-in;
  }

  a::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 1px;
    background: ${({ theme }) => theme.colors['brand-purple']};
    bottom: 0;
    left: 0;
    transform-origin: right;
    transform: scaleX(0);
    transition: transform 0.3s ease-in;
  }
  a:hover {
    color: ${({ theme }) => theme.colors['base-white']};

    &::before {
      transform-origin: left;
      transform: scaleX(1);
    }
  }
`
