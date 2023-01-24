import styled from "styled-components";
import JorgePic from "../img/myphoto.jpg";

const AboutPage = styled.div`
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 768px) {
    height: 100%;
  }
`;
const Title = styled.h1`
  font-size: 5rem;
  font-family: "Coolvetica", Helvetica;
  font-weight: 400;
  text-align: center;
  color: var(--light-yellow);
  margin-bottom: 30px;

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
  @media screen and (max-width: 768px) {
    flex-basis: 15%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2rem;
    margin-top: 1rem;
    margin-bottom: 0;
    &:before {
      top: -20px;
      left: -20px;
    }
  }
`;

const ContainerFlex = styled.div`
  height: 100%;
  margin-top: 15px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    margin-top: 0;
  }
`;

const ContainerP = styled.div`
  flex-basis: 60%;
  @media screen and (max-width: 768px) {
    flex-basis: initial;
    padding: 0 1rem 0;
  }
`;

const Paragraph = styled.p`
  text-align: justify;
  text-justify: inter-word;
  letter-spacing: 1px;
  font-size: 1.2rem;
  font-family: sans-serif;
  line-height: 2rem;
  margin-bottom: 20px;
  @media screen and (max-width: 768px) {
    font-size: 0.9rem;
    line-height: 1.3rem;
    margin-bottom: 0;
  }
`;

const ContainerPhoto = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 40px;
  @media screen and (max-width: 768px) {
    margin-bottom: 16px;
  }
`;

const Photo = styled.img`
  border-radius: 50%;
  @media screen and (max-width: 768px) {
    width: 5rem;
    height: 5rem;
  }
`;

const ResumeContainer = styled.a`
  display: block;
  text-align: center;
`;

const Resume = styled.button`
  margin-top: 20px;
  opacity: 0.9;
  color: var(--light-yellow);
  background-color: var(--aqua);
  padding: 10px 18px;
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
  @media screen and (max-width: 768px) {
    margin-top: 0;
  }
`;

const About = () => {
  return (
    <AboutPage>
      {" "}
      <Title>About me</Title>
      <ContainerFlex>
        {" "}
        <ContainerP>
          {" "}
          <Paragraph>
            Hi there! My name is Jorge and I am an ambitious frontend developer
            looking for a role on an established IT company that gives me the
            opportunity to work with the latest technologies on challenging and
            diverse projects .
          </Paragraph>
          <Paragraph>
            Before transitioning into tech, I spent several years studying law
            and learned the importance of attention to detail and the ability to
            think critically under pressure. On the other hand, maintaining
            physical fitness through weight lifting at the gym not only helps me
            to stay healthy and energized, but it also improves my mental
            clarity and focus. These skills have proven to be invaluable in my
            current career as a developer .
          </Paragraph>
          <Paragraph>
            If I had to define myself in just a few words I would say I am a
            disciplined, curious and hard-working individual, avid reader, gym
            fanatic and above all web development obssesed !!!
          </Paragraph>
        </ContainerP>
        <div>
          {" "}
          <ContainerPhoto>
            {" "}
            <Photo src={JorgePic} alt="My Picture" />
          </ContainerPhoto>
          <ResumeContainer href="">
            {" "}
            <Resume>My Resume</Resume>
          </ResumeContainer>
        </div>
      </ContainerFlex>
    </AboutPage>
  );
};

export default About;
