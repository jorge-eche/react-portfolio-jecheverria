import styled from "styled-components";

const Title1 = styled.h1`
  font-size: 3.3rem;
  line-height: 5rem;
  font-family: "Coolvetica", Helvetica;
  font-weight: 400;

  &:before {
    content: "<h1>";
    font-family: "La Belle Aurore", cursive;
    font-size: 1.125rem;
    color: var(--light-yellow);
    opacity: 0.6;
  }

  &:after {
    content: "</h1>";
    font-family: "La Belle Aurore", cursive;
    font-size: 1.125rem;
    color: var(--light-yellow);
    opacity: 0.6;
  }

  span {
    font-size: 1.3em;
    color: var(--light-yellow);
  }
`;

const Home = () => {
  return (
    <>
      <Title1>
        Hi!
        <br /> My name is <span>Jorge Echeverria</span> <br />
        I'm a Frontend Developer
      </Title1>
      <button>Contact Me</button>
    </>
  );
};

export default Home;
