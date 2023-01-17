import styled from "styled-components";

const HomePage = styled.div`
  text-align: center;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;
const Title = styled.h1`
  font-size: 5rem;
  font-family: "Coolvetica", Helvetica;
  font-weight: 400;

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

  span {
    font-size: 1.2em;
    color: var(--light-yellow);
  }

  span:nth-child(2) {
    &:after {
      content: "</h1>";
      font-family: "La Belle Aurore", cursive;
      font-size: 1.125rem;
      color: var(--light-yellow);
      opacity: 0.6;
      position: relative;
      top: 150px;
      left: -90px;
    }
  }
  span:nth-child(4) {
    font-size: 1em;
  }
`;

const TypedOut = styled.span`
  &:before {
    content: "";
    vertical-align: top;
    overflow: hidden;
    white-space: nowrap;
    display: inline-block;
    width: 0;
    animation: typing 8s steps(18, end) 2.2s infinite;
    @keyframes typing {
      0% {
        content: "Lawyer and...";
        width: 0;
      }
      30% {
        content: "Lawyer and...";
        width: 420px;
      }
      35% {
        content: "Lawyer and...";
        width: 420px;
      }
      40% {
        content: "Lawyer and...";
        width: 0;
      }
      41% {
        content: "Frontend Developer";
      }
      70% {
        content: "Frontend Developer";
        width: 650px;
      }
      95% {
        content: "Frontend Developer";
        width: 650px;
      }
      100% {
        content: "Frontend Developer";
        width: 0px;
      }
    }
  }

  &:after {
    content: "|";
    animation: blink 1.2s infinite;

    @keyframes blink {
      from {
        opacity: 1;
      }
      to {
        opacity: 0;
      }
    }
  }
`;

const ContactButton = styled.button`
  margin-top: 60px;
  opacity: 0.9;
  color: var(--light-yellow);
  background-color: var(--aqua);
  padding: 15px 25px;
  text-transform: uppercase;
  font-family: sans-serif;
  letter-spacing: 0.5rem;
  text-align: center;
  border: 1px solid var(--light-yellow);
  border-radius: 4px;
  &:hover {
    cursor: pointer;
    color: var(--dark-blue);
    background-color: var(--light-yellow);
  }
`;

const Home = ({ setIsActive }) => {
  const handleClick = () => {
    setIsActive({
      home: false,
      about: false,
      porfolio: false,
      contact: true,
    });
  };

  return (
    <HomePage>
      <Title>
        Hello!
        <br /> My name is <span>Jorge Echeverría</span> <br />
        I'm a <TypedOut></TypedOut>
      </Title>
      <ContactButton onClick={handleClick}>Contact Me</ContactButton>
    </HomePage>
  );
};

export default Home;
