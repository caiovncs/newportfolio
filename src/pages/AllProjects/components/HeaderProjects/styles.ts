import styled from 'styled-components'

export const HeaderProjectsContainer = styled.header`
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
