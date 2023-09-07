import {
  AboutPage,
  Title,
  ContainerFlex,
  ContainerP,
  Paragraph,
  UlTech,
  ContainerPhoto,
  Photo,
} from "./AboutStyledComp";
import JorgePic from "../../img/Jorge_Echeverria_Photo.jpg";

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
            Hi there! My name is Jorge and I am a curious, proactive and
            detail-oriented self-taught Web Developer looking for a role on an
            established IT company that gives me the opportunity to work with
            the latest technologies on challenging and diverse projects.
          </Paragraph>
          <Paragraph>
            I fell in love with coding and the possibility it gives to unleash
            both creativity and logical abilities; also its amazing capacity to
            solve real human being's problems and needs.
          </Paragraph>
          <Paragraph>
            You are more than welcomed to check some of my work in the next
            section. These are some technologies I've been working with:
          </Paragraph>
          <UlTech>
            <li>⚙️React</li>
            <li>⚙️TypeScript</li>
            <li>⚙️JavaScript (+ES6)</li>
            <li>⚙️HTML5</li>
            <li>⚙️CSS3</li>
            <li>⚙️Node.js</li>
            <li>⚙️Express.js</li>
            <li>⚙️PostgreSQL</li>
          </UlTech>
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
