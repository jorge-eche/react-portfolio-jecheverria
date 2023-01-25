import { useState } from "react";

import Sidebar from "./components/Sidebar";
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

const Page = styled.div`
  display: flex;

  @media screen and (max-width: 600px) {
    flex-direction: column;
    height: 100vh;
  }
`;

function App() {
  const [isActive, setIsActive] = useState({
    home: true,
    about: false,
    portfolio: false,
    contact: false,
  });

  const [mobileShowNavMenu, setMobileShowNavMenu] = useState(false);

  return (
    <>
      <GlobalStyle />
      <Page>
        <Sidebar
          isActive={isActive}
          setIsActive={setIsActive}
          mobileShowNavMenu={mobileShowNavMenu}
          setMobileShowNavMenu={setMobileShowNavMenu}
        />
        <Layout isActive={isActive} setIsActive={setIsActive} />
      </Page>
    </>
  );
}

export default App;
