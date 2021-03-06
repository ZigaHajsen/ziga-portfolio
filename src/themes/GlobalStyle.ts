import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
  }

  html, body {
    background-color: #212121;
    font-family: 'Roboto', sans-serif;
  }

  h1, h2, h3, h4, h5, h6, p {
    cursor: default;
  }

  #fp-nav ul li a span {
    background: white;
  }

  #fp-nav ul li .active span {
    background: green;
  }
`;

export default GlobalStyle;
