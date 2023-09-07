import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  --aqua: ##04466a;
  --dark-blue: #022c43;
  --dark-cerulean: #115173;
  --dark-gray: #444;
  --dark-red: #181818;
  --gun-powder: #4d4d4e;
  --light-yellow: #ffd700;
  --opaque-yellow: rgba(255,215,0,0.6);
  --white: #FFFFFF;
  height: 100%;
}

body {
  width: 100%;
  min-height: 100%;
  font-family: 'Roboto', 'sans-serif';
  color: var(--white);
  background-color: var(--dark-blue);
  background-image: linear-gradient(to right,  #022c43, #04466a);
  overflow: hidden;
}
`;

export const Page = styled.div`
  display: flex;

  @media screen and (max-width: 600px) {
    flex-direction: column;
    height: 100vh;
  }
`;
