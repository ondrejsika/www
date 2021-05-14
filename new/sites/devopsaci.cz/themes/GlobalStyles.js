import { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`
  html {
      font-size: 62.5%;
  }
  * {
    margin:0;
    padding: 0;
    }
    body {
        font-family: raleway, sans-serif;
    }
    h1{
        color: ${props => props.theme.white};
        font-size: 4.5rem;
        color: ${props => props.theme.red};
        @media (max-width: 600px) {
            font-size: 4rem;
        }
    }
    h2{
        color: ${props => props.theme.background};
        font-size: 3rem;
        text-align: center;
        margin-bottom: 3rem;
        @media (max-width: 600px) {
            font-size: 2.8rem;
        }
        @media (max-width: 520px) {
            margin-bottom: 2rem;
        }
    }
    h3 {
        color: ${props => props.theme.red};
    
        font-size: 2rem;
    }
`;
 
export default GlobalStyle;