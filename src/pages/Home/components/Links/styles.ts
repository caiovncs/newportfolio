import styled from 'styled-components'

export const LinkContainer = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.colors['base-black']};
  box-shadow: inset 0 -50px ${({ theme }) => theme.colors['base-white']};
  padding: 0 1.25rem;

  @media (max-width: 767px) {
    box-shadow: inset 0 -30px ${({ theme }) => theme.colors['base-white']};
  }

  > div {
    background-color: ${({ theme }) => theme.colors['base-black-light']};
    gap: 5rem;
    width: 65rem;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 28px;
    border-radius: 5px;

    @media (max-width: 1100px) {
      width: 100%;
    }

    @media (max-width: 1024px) {
      gap: 2.5rem;
    }

    @media (max-width: 767px) {
      gap: 1.25rem;
    }
  }

  button {
    @media (max-width: 767px) {
      font-size: ${({ theme }) => theme.textSizes['regular-s']};
      width: 185px;
      display: flex;
      justify-content: space-between;
    }
  }

  button svg {
    transition: 0.2s ease-in;
  }
  button:hover svg {
    transform: rotate(-45deg);
  }
`
