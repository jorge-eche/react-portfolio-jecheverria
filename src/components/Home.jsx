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
    font-size: 1.3em;
    color: var(--light-yellow);
  }
`;

const Button = styled.button`
  border: ;
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
