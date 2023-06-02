import styled from 'styled-components'

export const LinkContainer = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.colors['base-black']};
  box-shadow: inset 0 -50px ${({ theme }) => theme.colors['base-white']};
  /* box-shadow: inset 0 -50px #ead1ff; */

  padding: 0px 20px;

  > div {
    background-color: ${({ theme }) => theme.colors['brand-green']};
    gap: 80px;
    width: 1040px;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 28px;
    border-radius: 5px;
  }
`
