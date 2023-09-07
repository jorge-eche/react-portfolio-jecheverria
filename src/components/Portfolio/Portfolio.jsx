import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  PortfolioPage,
  Title,
  Slider,
  ArrowIcon,
  ProjectContainer,
  ProjectImage,
  ProjectTitle,
  Description,
  Techs,
  ButtonContainer,
  Link,
  ContainerArrowsMobile,
} from "./PortfolioStyledComp";
import {
  faCircleArrowLeft,
  faCircleArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import Projects from "../../data/portfolio.json";

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
        <ArrowIcon
          variant="left-desktop"
          icon={faCircleArrowLeft}
          onClick={slideLeft}
        />
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
        <ContainerArrowsMobile>
          <ArrowIcon
            variant="left-mobile"
            icon={faCircleArrowLeft}
            onClick={slideLeft}
          />
          <ArrowIcon icon={faCircleArrowRight} onClick={slideRight} />
        </ContainerArrowsMobile>
      </Slider>
    </PortfolioPage>
  );
};

export default Portfolio;
