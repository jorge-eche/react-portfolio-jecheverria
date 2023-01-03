import Layout from "./components/Layout";
import "./App.css";
import { createGlobalStyle } from "styled-components";

function App() {
  const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    var
  }
  
  html {
    font-size: 16px;
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
    color: var(--dark-gray);
    background-color: var(--dark-blue);
  }
`;
  return (
    <>
      <GlobalStyle />
      <Layout />
    </>
  );
}

export default App;
