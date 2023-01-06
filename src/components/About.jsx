import styled from "styled-components";

const Title1 = styled.h1`
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
`;

const About = () => {
  return <Title1>About Me</Title1>;
};

export default About;
