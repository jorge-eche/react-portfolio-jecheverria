import Sidebar from "./Sidebar";
import Home from "./Home";
import styled from "styled-components";

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

const Section = styled.div`
  width: 100%;
  height: 90%;
  min-height: 566px;
  position: absolute;
  top: 19%;
  left: 8%;
  margin: 0 auto;
  z-index: 1;
  transform-style: preserve-3d;
  animation: fadeIn 1s forwards;
  animation-delay: 1s;
`;

const Layout = () => {
  return (
    <>
      <Sidebar />
      <Page>
        <TopTag>
          &lt;html&gt;
          <br />
          <Tag leftmargin="positive">&lt;body&gt;</Tag>
        </TopTag>

        <Section>
          <Home />
        </Section>

        <BottomTag>
          &lt;/body&gt;
          <br />
          <Tag leftmargin="negative">&lt;/html&gt;</Tag>
        </BottomTag>
      </Page>
    </>
  );
};

export default Layout;
