import styled from 'styled-components'

export const SkillsContainer = styled.section`
  width: 100;
  background-color: ${({ theme }) => theme.colors['base-black']};

  > div {
    display: flex;
    flex-direction: column;
    padding-top: 7.5rem;
    padding-bottom: 7.5rem;
    align-items: start;

    @media (max-width: 767px) {
      align-items: center;
      padding-top: 3.75rem;
      padding-bottom: 3.75rem;
    }
  }

  h1 {
    margin-bottom: 2.5rem;
    &::after {
      content: ' />';
      color: ${({ theme }) => theme.colors['brand-green']};
    }

    &::before {
      content: '<';
      color: ${({ theme }) => theme.colors['brand-green']};
    }

    @media (max-width: 767px) {
      margin-bottom: 1.5rem;
      font-size: ${({ theme }) => theme.textSizes['title-mobile']};
    }
  }
`
