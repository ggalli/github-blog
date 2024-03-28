import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    :focus {
      outline: 0;
      box-shadow: 0 0 0 2px ${({ theme }) => theme.secondary};;
    }
  }


  body {
    background-color: ${({ theme }) => theme['primary-800']};
    color: ${({ theme }) => theme['primary-200']};
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button, a {
    font: 400 1rem Nunito, sans-serif;
  }

  h2 {
    line-height: 130%;
    font-size: 24px;
  }

  h3 {
    line-height: 160%;
    font-size: 20px;
  }

  h4 {
    line-height: 160%;
    font-size: 18px;
  }
`
