import { useState } from "react";
import Layout from "./components/Layout";
import "./App.css";
import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  --white: #FFFFFF;
  --dark-blue: #022c43;
  --light-yellow: #ffd700;
  --dark-red: #181818;
  --gun-powder: #4d4d4e;
  --dark-gray: #444;
}

body {
  width: 100%;
  min-height: 100vh;
  font-family: 'Roboto', 'sans-serif';
  color: var(--white);
  background-color: var(--dark-blue);
}
`;

// const Sections = styled.div`
//   width: 100%;
//   height: 90%;
//   min-height: 566px;
//   position: absolute;
//   top: 19%;
//   left: 8%;
//   margin: 0 auto;
//   z-index: 1;
//   transform-style: preserve-3d;
//   animation: fadeIn 1s forwards;
//   animation-delay: 1s;
// `;

function App() {
  const [isHome, setIsHome] = useState(true);
  const [isAbout, setIsAbout] = useState(false);
  const [isPortfolio, setIsPortfolio] = useState(false);
  const [isContact, setIsContact] = useState(false);

  return (
    <>
      <GlobalStyle />
      <Layout />
    </>
  );
}

export default App;
