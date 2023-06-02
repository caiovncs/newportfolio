import styled from 'styled-components'

export const AboutMeContainer = styled.section`
  background-color: ${({ theme }) => theme.colors['base-white']};
  > div {
    width: 1080px;
    display: flex;
    flex-direction: row;
    padding-top: 7.5rem;
    padding-bottom: 7.5rem;
    align-items: center;
    gap: 32px;
    justify-content: space-between;
    position: relative;
  }
`
export const TextsAbout = styled.div`
  display: flex;
  flex-direction: column;

  h1 {
    &::after {
      content: ' />';
    }

    &::before {
      content: '<';
    }
  }

  p {
    margin-left: 2.5rem;
    margin-top: 1.625rem;
  }
  button {
    max-width: max-content;
    margin-left: 2.5rem;
    margin-top: 1.625rem;
  }
`
