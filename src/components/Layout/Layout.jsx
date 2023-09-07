import Home from "../Home/Home";
import About from "../About/About";
import Portfolio from "../Portfolio/Portfolio";
import Contact from "../Contact/Contact";
import { Page, TopTag, Tag, Header, BottomTag } from "./LayoutStyledComp";

const Layout = ({ isActive, routeChangeHandler }) => {
  return (
    <Page>
      <TopTag>
        &lt;html&gt;
        <br />
        <Tag leftmargin="positive">&lt;body&gt;</Tag>
      </TopTag>

      {isActive === "home" && (
        <Header>
          {" "}
          <Home routeChangeHandler={routeChangeHandler} />{" "}
        </Header>
      )}

      {isActive === "about" && (
        <Header>
          {" "}
          <About />{" "}
        </Header>
      )}

      {isActive === "portfolio" && (
        <Header>
          {" "}
          <Portfolio />{" "}
        </Header>
      )}

      {isActive === "contact" && (
        <Header>
          {" "}
          <Contact />{" "}
        </Header>
      )}

      <BottomTag>
        &lt;/body&gt;
        <br />
        <Tag leftmargin="negative">&lt;/html&gt;</Tag>
      </BottomTag>
    </Page>
  );
};

export default Layout;
