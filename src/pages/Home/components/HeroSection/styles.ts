import styled from 'styled-components'

export const HeroSectionContainer = styled.section`
  width: 100%;
  background-color: ${({ theme }) => theme.colors['base-black']};

  > div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 94vh;
  }

  h1 {
    text-transform: uppercase;
    text-align: center;
    line-height: 100%;
    margin-bottom: 1.25rem;

    @media (max-width: 767px) {
      font-size: ${({ theme }) => theme.textSizes['title-l']};
      word-break: break-all;
    }
  }

  .gradient {
    background-image: linear-gradient(
      to right,
      ${({ theme }) => theme.colors['brand-purple']},
      ${({ theme }) => theme.colors['brand-green']}
    );
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    color: ${({ theme }) => theme.colors['base-black']};
  }

  p {
    margin-bottom: 2rem;
    text-align: center;

    &:first-child {
      margin-bottom: 0.5rem;

      span {
        font-weight: 500;
        color: white;
      }
    }
  }

  p:first-child {
    @media (max-width: 767px) {
      font-size: ${({ theme }) => theme.textSizes['regular-m']};
    }
  }
`
