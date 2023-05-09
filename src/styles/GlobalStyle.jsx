import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
  }

  body {
    background-color: #f7f7f7;
  }

  a {
    text-decoration: none;
    color: #333;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
  }

  a:hover {
    color: #1abc9c;
  }
`;

export default GlobalStyle;
