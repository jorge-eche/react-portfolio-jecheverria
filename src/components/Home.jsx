import styled from "styled-components";

const Title1 = styled.h1`
  position: relative;
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
  span:nth-child(4) {
    font-size: 1em;
  }
`;

const TypedOut = styled.span`
  overflow: hidden;
  border-right: 0.15rem solid var(--light-yellow);
  white-space: nowrap;
  width: 0;
  animation: typing 1s forwards;

  @keyframes typing {
    from {
      width: 0;
    }
    to {
      width: 100%;
    }
  }
`;

const ContactButton = styled.button`
  margin-top: 20px;
  opacity: 0.9;
  color: var(--light-yellow);
  background-color: var(--dark-blue);
  padding: 10px 18px;
  text-transform: uppercase;
  font-family: sans-serif;
  letter-spacing: 0.5rem;
  text-align: center;
  border: 1px solid var(--light-yellow);
  &:hover {
    cursor: pointer;
    color: var(--dark-blue);
    background-color: var(--light-yellow);
  }
`;

const Home = () => {
  return (
    <>
      <Title1>
        Hello!
        <br /> My name is <span>Jorge Echeverria</span> <br />
        I'm a <TypedOut>Frontend Developer</TypedOut>
      </Title1>
      <ContactButton>Contact Me</ContactButton>
    </>
  );
};

export default Home;
