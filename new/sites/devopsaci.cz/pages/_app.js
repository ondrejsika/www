import '../styles/globals.css'
import styled, {ThemeProvider} from 'styled-components'
import GlobalStyles from '../themes/GlobalStyles.js';

const theme = {
  background: '#100146',
  red: '#FF0154',
  white: '#FFFFFD',
  secondaryFont: 'IBM Plex Sans, sans-serif'
}

function MyApp({ Component, pageProps }) {
  return (
  <ThemeProvider theme={theme}>
    <GlobalStyles />
  <Component {...pageProps} />
  </ThemeProvider>
  )}

export default MyApp
