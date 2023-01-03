import Sidebar from "./Sidebar";
import styled from "styled-components";

const App = styled.div``;

const Page = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
`;

const Tag = styled.span`
  font-family: "La Belle Aurore", cursive;
  font-size: 1.125rem;
  color: var(--light-yellow);
  opacity: 0.6;
  position: absolute;
  bottom: ${(props) => (props.position === "top" ? "auto" : "0")};
  left: 120px;
`;

const HTMLTag = styled(Tag)`
  position: static;
  margin-left: -20px;
`;

const Layout = () => {
  return (
    <App>
      <Sidebar />
      <Page>
        <Tag position="top">
          <br />
          &lt;body&gt;
          <HTMLTag position="top">&lt;html&gt;</HTMLTag>
        </Tag>

        <Tag>
          &lt;/body&gt;
          <br />
          <HTMLTag>&lt;/html&gt;</HTMLTag>
        </Tag>
      </Page>
    </App>
  );
};

export default Layout;
