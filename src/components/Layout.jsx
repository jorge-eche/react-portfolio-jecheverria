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
  left: 120px;
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
  opacity: 0.6;
`;

const BottomTag = styled(Tag)`
  position: absolute;
  bottom: 0;
  opacity: 0.6;
`;

const Layout = () => {
  return (
    <App>
      <Sidebar />
      <Page>
        <TopTag>
          &lt;html&gt;
          <br />
          <Tag leftmargin="positive">&lt;body&gt;</Tag>
        </TopTag>

        <BottomTag>
          &lt;/body&gt;
          <br />
          <Tag leftmargin="negative">&lt;/html&gt;</Tag>
        </BottomTag>
      </Page>
    </App>
  );
};

export default Layout;
