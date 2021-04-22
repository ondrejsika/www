import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html {
      font-size: 62.5%;
  }
  * {
    margin:0;
    padding: 0;
    }
  body{
    font-family: IBM Plex Sans, sans-serif;
  }
  h1 {
    font-family: ${props => props.theme.secondaryFont};
    font-weight: bold;
    color: white;
    font-size: 6.5rem;
    @media (max-width: 992px) {
         font-size: 6rem;
     }
     @media (max-width: 768px) {
         font-size: 5.5rem;
     }
    @media (max-width: 600px) {
         font-size: 5rem;
     }
     @media (max-width: 420px) {
         font-size: 4rem;
     }
  }
  h2{
        color: ${props => props.theme.blue};
        font-size: 3rem;
        @media (max-width: 600px) {
            font-size: 2.8rem;
        }
    }
    h3 {
        color: ${props => props.theme.red};
        font-size: 2rem;
    }
    p{
      font-size: 1.6rem;
    }
`
export default GlobalStyle;