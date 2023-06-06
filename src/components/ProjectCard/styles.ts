import styled from 'styled-components'

export const ProjectCardContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 2.5rem;
  padding-bottom: 2.5rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors['base-black']};
  margin-bottom: 2.5rem;

  @media (max-width: 767px) {
    flex-direction: column;
    gap: 1.5rem;
  }

  &:last-child {
    padding-bottom: 0;
    border-bottom: none;
    margin-bottom: 0;
  }

  img {
    width: 360px;
    height: 210px;

    @media (max-width: 767px) {
      width: 100%;
      height: 100%;
      max-width: 360px;
      max-height: 210px;
    }
  }

  button {
    max-width: max-content;
  }
`

export const TechsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 1rem;
  margin-top: 1.75rem;

  @media (max-width: 767px) {
    justify-content: center;
  }
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

  @media (max-width: 767px) {
    align-items: center;
  }

  h1 {
    margin-bottom: 0.5rem;
  }

  p {
    @media (max-width: 767px) {
      text-align: center;
    }
  }
`
