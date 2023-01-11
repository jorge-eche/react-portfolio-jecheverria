import { useState, useEffect } from "react";
import styled from "styled-components";
import AOS from "aos";
import "aos/dist/aos.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleArrowLeft,
  faCircleArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import PortfolioData from "../data/portfolio.json";
import SliderImg from "../img/crypto-screenshot.png";

const Title = styled.h1`
  font-size: 5rem;
  font-family: "Coolvetica", Helvetica;
  font-weight: 400;
  margin-left: -40px;
  color: var(--light-yellow);
  margin-bottom: 40px;

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

const Slider = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ArrowIcon = styled(FontAwesomeIcon)`
  font-size: 20px;
  height: 51px;
  &:hover {
    cursor: pointer;
  }
`;

const ProjectContainer = styled.div``;

const ProjectImage = styled.img`
  width: 400px;
  margin-bottom: 15px;
`;

const ProjectTitle = styled.h1`
  color: var(--light-yellow);
  margin-bottom: 15px;
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
`;

const Button = styled.button`
  width: 180px;
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

const Portfolio = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);

  const [current, setCurrent] = useState(0);

  return (
    <>
      {" "}
      <Title>My Portfolio</Title>
      <div>
        <Slider>
          {" "}
          <ArrowIcon icon={faCircleArrowLeft} />
          <ProjectContainer data-aos="flip-right" data-aos-duration="2000">
            <ProjectImage src={SliderImg} alt="Project image" />
            <ProjectTitle>Crowdfunding Product Page</ProjectTitle>
            <Description>
              React app that emulates a crowdfunding website and allows visitors
              to make pledges
            </Description>
            <Techs>Developed with HTML, CSS, Javascript and React</Techs>
            <ButtonContainer>
              <Button>See Live</Button> <Button>Source Code</Button>
            </ButtonContainer>
          </ProjectContainer>
          <ArrowIcon icon={faCircleArrowRight} />
        </Slider>
      </div>
    </>
  );
};

export default Portfolio;
