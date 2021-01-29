import { createGlobalStyle, css } from 'styled-components/macro';

const GlobalStyle = createGlobalStyle`${css`
  *,
  *::before,
  *::after {
    margin: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  html {
    font-size: 62.5%; // 1rem === 10px
  }

  body {
    height: 100%;
    background-color: ${({ theme }) => theme.backgroundBar};
    font-size: 1.6rem; // 16px
    font-family: 'Montserrat', sans-serif;
  }
`}`;

export default GlobalStyle;
