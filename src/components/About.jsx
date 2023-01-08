import styled from "styled-components";
import JorgePic from "../images/je2.jpg";

const Title1 = styled.h1`
  font-size: 3.3rem;
  line-height: 5rem;
  font-family: "Coolvetica", Helvetica;
  font-weight: 400;
  margin-left: -40px;
  color: var(--light-yellow);

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

const Paragraph = styled.p`
  margin: 40px 100px;
`;

const Resume = styled.button``;

const About = () => {
  return (
    <>
      {" "}
      <Title1>About Me</Title1>
      <div>
        {" "}
        <div>
          {" "}
          <Paragraph>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem,
            blanditiis quam! Tempora officia iure ullam corrupti numquam quas
            mollitia voluptate odio perferendis molestias ipsum cum, dolores
            laudantium. Repellendus, at ut!
          </Paragraph>
          <Paragraph>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem,
            blanditiis quam! Tempora officia iure ullam corrupti numquam quas
            mollitia voluptate odio perferendis molestias ipsum cum, dolores
            laudantium. Repellendus, at ut!
          </Paragraph>
          <Paragraph>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem,
            blanditiis quam! Tempora officia iure ullam corrupti numquam quas
            mollitia voluptate odio perferendis molestias ipsum cum, dolores
            laudantium. Repellendus, at ut!
          </Paragraph>
        </div>
        <img src={JorgePic} alt="Jorge Picture" />
      </div>
      <button>Resume</button>
    </>
  );
};

export default About;
