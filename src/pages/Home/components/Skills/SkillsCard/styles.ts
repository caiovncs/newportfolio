import styled from 'styled-components'

export const SkillCardContainer = styled.div`
  display: grid;
  grid-template-columns: auto 70px;
  background-color: ${({ theme }) => theme.colors['base-black-light']};
  padding: 16px 24px;
  /* place-items: center; */
  gap: 0px 24px;
  position: relative;
  transition: 0.3s ease-out;
  width: 242px;
  height: 102px;

  p {
    grid-column: 1;
  }

  img {
    grid-column: 2;
  }
`

export const SkillsCardsStyle = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 40px;
  flex-wrap: wrap;
`
