import styled from 'styled-components'

export const ProjectsContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  background: ${({ theme }) => theme.colors['base-black-light']};
  width: 100%;
  align-items: start;
  padding: 7rem 0;

  h1 {
    margin-bottom: 40px;
  }
`
