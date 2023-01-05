import styled from "styled-components";

const Title1 = styled.h1`
  position: relative;
  text-indent: 0px;
  font-size: 3.3rem;
  line-height: 5rem;
  font-family: "Coolvetica", Helvetica;
  font-weight: 400;
  margin-left: -40px;

  &:before {
    content: "<h1>";
    font-family: "La Belle Aurore", cursive;
    font-size: 1.125rem;
    color: var(--light-yellow);
    opacity: 0.6;
    position: relative;
    top: -50px;
    left: -30px;
  }

  &:after {
    content: "</h1>";
    font-family: "La Belle Aurore", cursive;
    font-size: 1.125rem;
    color: var(--light-yellow);
    opacity: 0.6;
    position: relative;
    top: 20px;
    left: 30px;
  }

  span {
    font-size: 1.2em;
    color: var(--light-yellow);
  }
`;

const Button = styled.button`
  opacity: 0.9;
  color: var(--light-yellow);
  background-color: var(--dark-blue);
  padding: 10px 18px;
  text-transform: uppercase;
  font-family: sans-serif;
  border: 1px solid var(--light-yellow);
  &:hover {
    cursor: pointer;
    color: var(--dark-blue);
    background-color: var(--light-yellow);
  }
  /* border: 5px solid var(--light-yellow); */
`;

const Home = () => {
  return (
    <>
      <Title1>
        Hello!
        <br /> My name is <span>Jorge Echeverria</span> <br />
        I'm a Frontend Developer
      </Title1>
      <Button>Contact Me</Button>
    </>
  );
};

export default Home;
