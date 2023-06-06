import styled from 'styled-components'

export const SkillCardContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  background-color: ${({ theme }) => theme.colors['base-black-light']};
  padding: 1rem 1.5rem;
  place-items: center;
  position: relative;
  transition: 0.3s ease-out;
  gap: 0px 1.5rem;
  width: 242px;
  height: 102px;
  user-select: none;
  &:hover::before {
    height: 100%;
  }

  &::before {
    content: '';
    position: absolute;
    width: 1px;
    height: 60px;
    left: 0px;
    background: ${({ theme }) => theme.colors['brand-purple']};
    transition: 0.3s;
  }

  p {
    grid-column: 1;
    text-align: center;
    width: 100px;
  }

  img {
    grid-column: 2;
    grid-row: 1/3;
  }
`

export const SkillsCardsStyle = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 2.5rem;
  flex-wrap: wrap;

  @media (max-width: 767px) {
    gap: 1.25rem;
  }
`
