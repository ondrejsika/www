import '../styles/globals.css'
import styled, {ThemeProvider} from 'styled-components'
import GlobalStyle from '../themes/GlobalStyles.js';

const theme = {
  blue: '#131480',
  grey: '#C8BFB0',
  secondaryFont: 'IBM Plex Mono, IBM Plex Sans'
}

function MyApp({ Component, pageProps }) {
  return (
  <ThemeProvider theme={theme}>
  <GlobalStyle />
  <Component {...pageProps} />
  </ThemeProvider>
  )
}

export default MyApp
