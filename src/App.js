import { useState } from "react";

import Sidebar from "./components/Sidebar";
import Home from "./components/Home";

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

const Page = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  overflow: hidden;
`;

const Tag = styled.span`
  font-family: "La Belle Aurore", cursive;
  font-size: 1.125rem;
  color: var(--light-yellow);
  margin-left: ${(props) =>
    props.leftmargin === "negative"
      ? "-20px"
      : props.leftmargin === "positive"
      ? "20px"
      : ""};
`;

const TopTag = styled(Tag)`
  position: absolute;
  top: 35px;
  left: 100px;
  opacity: 0;
  animation: fadeInTag 1s 0.5s forwards;

  @keyframes fadeInTag {
    from {
      opacity: 0;
    }
    to {
      opacity: 0.6;
    }
  }
`;

const BottomTag = styled(Tag)`
  position: absolute;
  left: 120px;
  bottom: 0;
  opacity: 0;
  animation: fadeInTag 1s 0.5s forwards;

  @keyframes fadeInTag {
    from {
      opacity: 0;
    }
    to {
      opacity: 0.6;
    }
  }
`;

const Header = styled.header`
  margin-top: 100px;
  margin-left: 60px;
  text-align: center;
  opacity: 0;
  animation: fadeIn 1s ease-in 1s forwards;
  /* animation-delay: 1.3s; */

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

function App() {
  const [isHome, setIsHome] = useState(true);

  return (
    <>
      <GlobalStyle />
      <Sidebar />
      <Page>
        <TopTag>
          &lt;html&gt;
          <br />
          <Tag leftmargin="positive">&lt;body&gt;</Tag>
        </TopTag>

        <Header>{isHome && <Home />}</Header>

        <BottomTag>
          &lt;/body&gt;
          <br />
          <Tag leftmargin="negative">&lt;/html&gt;</Tag>
        </BottomTag>
      </Page>
    </>
  );
}

export default App;
