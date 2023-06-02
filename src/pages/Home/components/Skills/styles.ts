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
    gap: 32px;
    /* justify-content: space-between;
    position: relative;  */
  }
`
