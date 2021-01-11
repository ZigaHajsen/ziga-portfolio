import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
}

html, body {
    background-color: #212121;
    color: white;
    font-family: 'Roboto', sans-serif;
  }
`;
