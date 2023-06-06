import styled from 'styled-components'

export const AboutMeContainer = styled.section`
  background-color: ${({ theme }) => theme.colors['base-white']};

  > div {
    width: 67.5rem;
    display: flex;
    padding-top: 7.5rem;
    padding-bottom: 7.5rem;
    align-items: center;
    gap: 2rem;
    justify-content: space-between;
    position: relative;

    @media (max-width: 1100px) {
      width: 100%;
    }

    @media (max-width: 767px) {
      flex-direction: column;
      padding-top: 3.75rem;
      padding-bottom: 3.75rem;
      gap: 0;
    }

    img {
      @media (max-width: 767px) {
        width: 80%;
        max-width: 220px;
      }
    }
  }
`

export const TextsAbout = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 767px) {
    align-items: center;
  }

  h1 {
    @media (max-width: 767px) {
      font-size: ${({ theme }) => theme.textSizes['title-mobile']};
    }

    &::after {
      content: ' />';
    }

    &::before {
      content: '<';
    }
  }

  p {
    margin-left: 2.5rem;
    margin-top: 1.625rem;

    @media (max-width: 767px) {
      margin-left: 0;
      margin-top: 1.5rem;
      text-align: center;
      font-size: ${({ theme }) => theme.textSizes['regular-m']};
    }
  }

  button {
    max-width: max-content;
    margin-left: 2.5rem;
    margin-top: 1.625rem;

    @media (max-width: 767px) {
      margin-top: 1.25rem;
      margin-bottom: 2rem;
      margin-left: 0;
    }
  }
`
