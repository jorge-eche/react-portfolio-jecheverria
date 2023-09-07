import { useState, useEffect } from "react";

import { GlobalStyle, Page } from "./AppStyledComp";
import Sidebar from "./components/Sidebar/Sidebar";
import Layout from "./components/Layout/Layout";
import "./App.css";

import PacmanLoader from "react-spinners/PacmanLoader";

function App() {
  const [isActive, setIsActive] = useState("home");

  const [mobileShowNavMenu, setMobileShowNavMenu] = useState(false);

  const [loading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
  }, [isActive]);

  const routeChangeHandler = (route) => {
    if (isActive !== route) {
      setIsLoading(false);
      setIsActive(route);
      setMobileShowNavMenu(false);
    }
  };

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
