import { createGlobalStyle } from "styled-components";
import { colors } from "../src/Constants/colors";
const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background: ${colors.primary};
    font-family: Open-Sans, Helvetica, Sans-Serif;
    overflow: hidden;
  }

  *{
    margin: 0;
    padding: 0;
  }
`;

export default GlobalStyle;
