import { useState, useEffect } from "react";

import Sidebar from "./components/Sidebar";
import Layout from "./components/Layout";
import "./App.css";

import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

import PacmanLoader from "react-spinners/PacmanLoader";

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
  const [isActive, setIsActive] = useState("home");

  const [mobileShowNavMenu, setMobileShowNavMenu] = useState(false);

  const [loading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
  }, [isActive]);

  // const loadingHandler = (boolean) => setIsLoading(boolean);

  const routeChangeHandler = (route) => {
    if (isActive !== route) {
      setIsLoading(false);
      setIsActive(route);
      setMobileShowNavMenu(false);
    }
  };
  //TODO: Lograr que loading state se vuelva false luego de cargar la pagina para poder volver a ponerlo true
  return (
    <>
      <GlobalStyle />
      <Page>
        <Sidebar
          isActive={isActive}
          routeChangeHandler={routeChangeHandler}
          setIsActive={setIsActive}
          mobileShowNavMenu={mobileShowNavMenu}
          setMobileShowNavMenu={setMobileShowNavMenu}
        />
        <Layout
          isActive={isActive}
          routeChangeHandler={routeChangeHandler}
          loading={loading}
        />
        <PacmanLoader
          color="#ffd700"
          loading={loading}
          cssOverride={{
            display: "block",
            margin: "auto",
            position: "absolute",
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            animation: "fadeOut 1s 0.5s forwards",
          }}
          size={50}
          aria-label="Loading Spinner"
          data-testid="loader"
          speedMultiplier="3"
        />
      </Page>
    </>
  );
}

export default App;
