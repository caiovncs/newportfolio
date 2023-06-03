import styled from 'styled-components'

export const ProjectCardContainer = styled.div`
  width: 100%;
  display: flex;
  gap: 32px;

  img {
    width: 360px;
    height: 210px;
  }

  button {
    max-width: max-content;
  }
  padding-bottom: 40px;
  border-bottom: 2px solid ${({ theme }) => theme.colors['base-black']};
  margin-bottom: 40px;
`
export const ProjectCardTexts = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`
