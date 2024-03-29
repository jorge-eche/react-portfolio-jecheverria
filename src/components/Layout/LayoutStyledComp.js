import styled from "styled-components";
export const Page = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  @media screen and (max-width: 600px) {
    height: 100%;
  }
`;

export const Tag = styled.span`
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

export const TopTag = styled(Tag)`
  display: block;
  position: relative;
  left: 30px;
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
  @media screen and (max-width: 600px) {
    display: none;
  }
`;

export const BottomTag = styled(Tag)`
  position: relative;
  left: 50px;
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
  @media screen and (max-width: 600px) {
    display: none;
  }
`;

export const Header = styled.header`
  flex-basis: 90%;
  opacity: 0;
  animation: fadeIn 1s ease-in 0.5s forwards;

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  @media screen and (max-width: 600px) {
    flex-grow: 2;
  }
`;
