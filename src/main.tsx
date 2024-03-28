import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from 'styled-components'
import { AppRouter } from './router.tsx'
import { theme, GlobalStyle } from './styles'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />

      <AppRouter />
    </ThemeProvider>
  </React.StrictMode>,
)
