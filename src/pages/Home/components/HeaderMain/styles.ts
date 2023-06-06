import styled, { css } from 'styled-components'

interface activeProps {
  activeMenuMobile: boolean
}

export const HeaderMainContainer = styled.header<activeProps>`
  background-color: ${({ theme }) => theme.colors['base-black']};
  width: 100%;
  padding-top: 1.125rem;
  padding-bottom: 1.125rem;
  position: fixed;
  z-index: 5;

  @media (max-width: 1024px) {
    padding-top: 1rem;
    padding-bottom: 1rem;
  }

  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  img {
    @media (max-width: 767px) {
      width: 72px;
    }
  }

  .hamburguer {
    display: none;

    @media (max-width: 1024px) {
      display: block;
      border-top: 2px solid ${({ theme }) => theme.colors['base-white']};
      cursor: pointer;
      width: 40px;
      ${({ activeMenuMobile }) =>
        activeMenuMobile &&
        css`
          border-top: 2px solid transparent;

          &::after {
            transform: rotate(135deg);
            top: -10px;
          }

          &::before {
            transform: rotate(-135deg);
          }
        `}

      &::after,
      &::before {
        content: '';
        display: block;
        width: 40px;
        height: 2px;
        margin-top: 8px;
        background-color: ${({ theme }) => theme.colors['base-white']};
        position: relative;
        transition: 0.3s;
      }
    }
  }

  @keyframes mobileAnimation {
    from {
      opacity: 0;
      transform: translate3d(0px, -30px, 0);
    }
    to {
      opacity: 1;
      transform: translate3d(0, 0, 0);
    }
  }
`

export const NavContainer = styled.nav`
  display: flex;
  gap: 2.5rem;

  @media (max-width: 1024px) {
    display: none;
  }

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

export const MenuMobile = styled.nav`
  @media (max-width: 1024px) {
    position: absolute;
    right: 0;
    top: 68px;
    background-color: ${({ theme }) => theme.colors['base-black-light']};
    border-left: 2px solid ${({ theme }) => theme.colors['brand-purple']};
    padding: 1rem;
    z-index: 10;
    animation: mobileAnimation 0.3s forwards;
  }
  a {
    display: block;
    padding: 0.7rem;
    font-size: ${({ theme }) => theme.textSizes['regular-l']};
    color: ${({ theme }) => theme.colors['base-white']};
  }
`
