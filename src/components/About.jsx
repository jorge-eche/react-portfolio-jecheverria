import styled from "styled-components";
import JorgePic from "../img/myphoto.jpg";

const AboutPage = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 600px) {
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

  @media screen and (min-width: 601px) and (max-width: 1500px) {
    font-size: 4rem;
  }

  @media screen and (max-width: 600px) {
    flex-basis: 15%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 4rem;
    margin-bottom: 0;
    &:before {
      top: -20px;
      left: 0;
    }
    &:after {
      top: 45px;
      left: 10px;
    }
  }

  @media screen and (max-width: 380px) {
    font-size: 3rem;
    &:after {
      top: 30px;
      left: 10px;
    }
  }
`;

const ContainerFlex = styled.div`
  height: 100%;
  padding: 0 40px 0;
  margin-top: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media screen and (max-width: 600px) {
    display: block;
    padding: 0 16px 0;
  }
`;

const ContainerP = styled.div`
  flex-basis: 65%;

  @media screen and (min-width: 601px) and (max-width: 1500px) {
    flex-basis: 70%;
  }
  @media screen and (max-width: 600px) {
    flex-basis: initial;
    margin-bottom: 20px;
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
  @media screen and (min-width: 601px) and (max-width: 1500px) {
    font-size: 1rem;
    line-height: 1.5rem;
  }
  @media screen and (max-width: 600px) {
    font-size: 1.1rem;
    line-height: 1.3rem;
    margin-bottom: 10px;
  }
  @media screen and (max-width: 380px) {
    font-size: 0.8rem;
    line-height: 1.2rem;
    margin-bottom: 5px;
  }
`;

const ContainerPhoto = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Photo = styled.img`
  width: 400px;
  border-radius: 50%;
  @media screen and (min-width: 601px) and (max-width: 1500px) {
    width: 300px;
  }
  @media screen and (max-width: 600px) {
    width: 130px;
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
            fanatic and above all web development obsessed !!!
          </Paragraph>
        </ContainerP>
        <ContainerPhoto>
          {" "}
          <Photo src={JorgePic} alt="My Picture" />
        </ContainerPhoto>
        {/* <ResumeContainer href="">
            {" "}
            <Resume>My Resume</Resume>
          </ResumeContainer> */}
      </ContainerFlex>
    </AboutPage>
  );
};

export default About;
