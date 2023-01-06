import { useState } from "react";

import Sidebar from "./components/Sidebar";
import Layout from "./components/Layout";

import "./App.css";
import { createGlobalStyle } from "styled-components";

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

function App() {
  const [isHome, setIsHome] = useState(true);

  return (
    <>
      <GlobalStyle />
      <Sidebar isHome={isHome} />
      <Layout isHome={isHome} />
    </>
  );
}

export default App;
