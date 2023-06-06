import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
    font-family: 'Rubik', sans-serif;
    scroll-behavior: smooth;
  }

  a {
    text-decoration: none;
  }

  .container {
    max-width: 1200px;
    margin-left: auto;
    margin-right: auto;
    padding-left: 1.25rem;
    padding-right: 1.25rem;
  }


body::-webkit-scrollbar {
  width: 10px;
}

body::-webkit-scrollbar-thumb {
  background-color: ${({ theme }) => theme.colors['brand-purple']};
}

body::-webkit-scrollbar-track {
  background-color: ${({ theme }) => theme.colors['base-black']};
}

::selection {
  background-color: ${({ theme }) => theme.colors['brand-purple']};
}
`
