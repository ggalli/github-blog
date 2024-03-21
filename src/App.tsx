import { ThemeProvider } from 'styled-components'
import { theme, GlobalStyle } from './styles'
import { BlogPage } from './pages/Blog'

export function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />

      <BlogPage />
    </ThemeProvider>
  )
}
