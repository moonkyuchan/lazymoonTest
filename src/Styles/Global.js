import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    color: #333333;
    font-size: 13px;
    line-height: 16px;
   font-family: "Tw Cen W01 Medium";
  }
  ul, li {
    list-style: none;
  }
  input {
    background: #ffffff;
    border: 0;
    outline: 0;
  }
  button {
    background: 0;
    padding: 0;
    border: 0;
    outline: 0;
    cursor: pointer;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
  
  svg {
    font-size: 20px;
  }
  @media only screen and (max-width: 768px) {
    body {
      font-size: 12px;
    }
  }
  @media only screen and (max-width: 576px) {
    body {
      font-size: 10px;
    }
  }
`;

export default GlobalStyle;
