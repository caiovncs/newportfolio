import styled from 'styled-components'

export const ProjectsHomeContainer = styled.section`
  background: ${({ theme }) => theme.colors['base-black-light']};
  width: 100%;
  padding-top: 7rem;
  padding-bottom: 8rem;

  @media (max-width: 767px) {
    padding-top: 3.75rem;
    padding-bottom: 6.75rem;
  }

  > div {
    position: relative;
    display: flex;
    flex-direction: column;

    @media (max-width: 767px) {
      align-items: center;
    }
    > h1 {
      margin-bottom: 2.5rem;

      @media (max-width: 767px) {
        margin-bottom: 1.5rem;
        font-size: ${({ theme }) => theme.textSizes['title-mobile']};
      }

      &::after {
        content: ' />';
        color: ${({ theme }) => theme.colors['brand-purple']};
      }

      &::before {
        content: '<';
        color: ${({ theme }) => theme.colors['brand-purple']};
      }
    }
    > a {
      button {
        position: absolute;
        right: 1.25rem;
        bottom: -4.5rem;
      }
    }
  }
`
