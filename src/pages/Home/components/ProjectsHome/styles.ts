import styled from 'styled-components'

export const ProjectsHomeContainer = styled.section`
  /* display: flex;
  flex-direction: column; */
  background: ${({ theme }) => theme.colors['base-black-light']};
  width: 100%;
  padding-top: 7rem;
  padding-bottom: 8rem;

  > div {
    position: relative;
    > h1 {
      margin-bottom: 2.5rem;

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
