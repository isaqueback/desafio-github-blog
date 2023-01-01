import { ThemeProvider } from 'styled-components'
import { Router } from './Router'
import { Header } from './components/Header'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'
import { GithubProvider } from './contexts/GithubContext'
import { Footer } from './components/Footer'

export function App() {
  return (
    <GithubProvider>
      <ThemeProvider theme={defaultTheme}>
        <Header />
        <Router />
        <Footer />
        <GlobalStyle />
      </ThemeProvider>
    </GithubProvider>
  )
}
