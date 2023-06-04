import styled from 'styled-components'

export const ProjectCardContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 2.5rem;
  padding-bottom: 2.5rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors['base-black']};
  margin-bottom: 2.5rem;

  &:last-child {
    padding-bottom: 0;
    border-bottom: none;
    margin-bottom: 0;
  }

  img {
    width: 360px;
    height: 210px;
  }

  button {
    max-width: max-content;
  }
`

export const TechsContainer = styled.div`
  display: flex;
  gap: 1rem;

  span {
    font-size: 0.75rem;
    border: 1px solid ${({ theme }) => theme.colors['brand-green']};
    color: ${({ theme }) => theme.colors['brand-green']};
    padding: 0.25rem 1rem;
    user-select: none;
  }
`

export const ProjectCardTexts = styled.div`
  display: flex;
  flex-direction: column;

  h1 {
    margin-bottom: 0.5rem;
  }

  p {
    margin-bottom: 1.25rem;
  }

  span {
    margin-bottom: 1.75rem;
  }
`
