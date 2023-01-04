import styled from "styled-components";

const Title1 = styled.h1`
  font-size: 3.3rem;
  line-height: 5rem;
  font-family: "Coolvetica", Helvetica;
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
      {/* <h2>I'm a Frontend Developer</h2> */}
      <button>Contact Me</button>
    </>
  );
};

export default Home;
