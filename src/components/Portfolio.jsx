import { useState, useEffect } from "react";
import styled from "styled-components";
import AOS from "aos";
import "aos/dist/aos.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleArrowLeft,
  faCircleArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import Projects from "../data/portfolio.json";

const PortfolioPage = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
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
  @media screen and (max-width: 600px) {
    font-size: 2rem;
    span:nth-child(2):after {
      top: 5em;
      left: 4em;
    }
  }
`;

const Slider = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 1500px;
`;

const ArrowIcon = styled(FontAwesomeIcon)`
  font-size: 20px;
  height: 51px;
  &:hover {
    cursor: pointer;
  }
`;

const ProjectContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 900px;
  height: 400px;
`;

const ProjectImage = styled.img`
  width: 400px;
  height: 200px;
  margin-bottom: 30px;
  box-shadow: 1em 1em 2em #000;
  border-radius: 10px;
`;

const ProjectTitle = styled.h1`
  color: var(--light-yellow);
  margin-bottom: 15px;
  &:after {
    content: "";
    display: block;
    width: 200px;
    height: 2px;
    background-color: var(--light-yellow);
    margin: 10px auto 0 auto;
  }
`;

const Description = styled.h2`
  font-weight: 400;
  margin-bottom: 15px;
`;

const Techs = styled.h3`
  opacity: 0.8;
`;

const ButtonContainer = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: space-around;
  text-align: center;
`;

const Link = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  width: 180px;
  opacity: 0.9;
  color: var(--light-yellow);
  background-color: var(--aqua);
  padding: 8px 0;
  text-transform: uppercase;
  font-family: sans-serif;
  letter-spacing: 0.5rem;
  border: 1px solid var(--light-yellow);
  border-radius: ${(props) =>
    props.variant === "right" ? "0 4px 4px 0;" : "4px 0 0 4px"};
  &:hover {
    cursor: pointer;
    color: var(--dark-blue);
    background-color: var(--light-yellow);
  }
`;

const Portfolio = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);

  const [current, setCurrent] = useState(0);
  //State for changing the flip side animation on ProjectImage, depending on ArrowIcon clicked
  const [isRight, setIsRight] = useState(true);

  const slideLeft = () => {
    setIsRight(false);
    if (current - 1 === -1) {
      setCurrent(Projects.length - 1);
    } else {
      setCurrent(current - 1);
    }
  };

  const slideRight = () => {
    setIsRight(true);
    if (current + 1 === Projects.length) {
      setCurrent(0);
    } else {
      setCurrent(current + 1);
    }
  };

  return (
    <PortfolioPage>
      {" "}
      <Title>My Portfolio</Title>
      <Slider>
        {" "}
        <ArrowIcon icon={faCircleArrowLeft} onClick={slideLeft} />
        {Projects.map((project, index) =>
          index === current ? (
            <ProjectContainer
              data-aos={isRight ? "flip-left" : "flip-right"}
              data-aos-duration="2000"
              key={project.id}
            >
              <ProjectImage src={project.image} alt="Project image" />
              <ProjectTitle>{project.title}</ProjectTitle>
              <Description>{project.description}</Description>
              <Techs>{project.techs}</Techs>
              <ButtonContainer>
                <Link href={project.url} target="_blank">
                  See Live
                </Link>{" "}
                <Link href={project.code} target="_blank" variant="right">
                  Source Code
                </Link>
              </ButtonContainer>
            </ProjectContainer>
          ) : null
        )}
        <ArrowIcon icon={faCircleArrowRight} onClick={slideRight} />
      </Slider>
    </PortfolioPage>
  );
};

export default Portfolio;
