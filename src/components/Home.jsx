import styled from "styled-components";

const Title1 = styled.h1``;

const Home = () => {
  return (
    <>
      <Title1>
        Hi!
        <br /> My name is <span>Jorge</span> Echeverria{" "}
      </Title1>
      <h2>I'm a Frontend Developer</h2>
      <button>Contact Me</button>
    </>
  );
};

export default Home;
