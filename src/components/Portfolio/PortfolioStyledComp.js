import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const PortfolioPage = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  @media screen and (max-width: 600px) {
    gap: 30px;
  }
`;

export const Title = styled.h1`
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
      top: -40px;
      left: 10px;
    }
    &:after {
      top: 45px;
      left: -5px;
    }
  }

  @media screen and (max-width: 380px) {
    font-size: 3rem;
    &:before {
      top: -15px;
      left: -15px;
    }
    &:after {
      top: 30px;
      left: 10px;
    }
  }
`;

export const Slider = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 1500px;

  @media screen and (min-width: 601px) and (max-width: 1500px) {
    width: initial;
  }

  @media screen and (max-width: 600px) {
    flex-direction: column;
    width: auto;
    gap: 20px;
  }

  @media screen and (max-width: 380px) {
    gap: 10px;
  }
`;

export const ContainerArrowsMobile = styled.div`
  @media screen and (max-width: 600px) {
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    margin-top: 30px;
  }
  @media screen and (max-width: 380px) {
    margin-top: 10px;
  }
`;

export const ArrowIcon = styled(FontAwesomeIcon)`
  font-size: 20px;
  height: 51px;
  display: ${(props) =>
    props.variant === "left-desktop"
      ? ""
      : props.variant === "left-mobile"
      ? "none"
      : ""};
  &:hover {
    cursor: pointer;
  }
  @media screen and (max-width: 600px) {
    display: ${(props) =>
      props.variant === "left-desktop"
        ? "none"
        : props.variant === "left-mobile"
        ? "initial"
        : ""};
  }
`;

export const ProjectContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 900px;
  height: 400px;
  @media screen and (min-width: 601px) and (max-width: 1500px) {
    height: auto;
  }
  @media screen and (max-width: 600px) {
    width: auto;
    height: auto;
  }
`;

export const ProjectImage = styled.img`
  width: 400px;
  height: 200px;
  margin-bottom: 30px;
  box-shadow: 1em 1em 2em #000;
  border-radius: 10px;

  @media screen and (min-width: 601px) and (max-width: 1500px) {
    width: 375px;
    height: 170px;
    margin-bottom: 20px;
  }
  @media screen and (max-width: 600px) {
    width: 350px;
    height: 175px;
  }
`;

export const ProjectTitle = styled.h1`
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

  @media screen and (min-width: 601px) and (max-width: 1500px) {
    font-size: 1.3rem;
  }
  @media screen and (max-width: 600px) {
    font-size: 1.5rem;
  }
  @media screen and (max-width: 380px) {
    font-size: 1.3rem;
  }
`;

export const Description = styled.h2`
  font-size: 1.4rem;
  font-weight: 400;
  margin-bottom: 15px;
  @media screen and (min-width: 601px) and (max-width: 1500px) {
    font-size: 1rem;
    margin-bottom: 5px;
  }
  @media screen and (max-width: 600px) {
    font-size: 1.1rem;
    text-align: center;
    padding: 0 10px;
  }
  @media screen and (max-width: 380px) {
    font-size: 0.8rem;
  }
`;

export const Techs = styled.h3`
  opacity: 0.8;
  @media screen and (min-width: 601px) and (max-width: 1500px) {
    font-size: 0.7rem;
  }
  @media screen and (max-width: 600px) {
    padding: 0 10px;
    font-size: 0.9rem;
    text-align: center;
  }
  @media screen and (max-width: 380px) {
    font-size: 0.7rem;
  }
`;

export const ButtonContainer = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: space-around;
  text-align: center;
  @media screen and (min-width: 601px) and (max-width: 1500px) {
    margin-top: 10px;
  }
`;

export const Link = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  margin-top: 20px;
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

  @media screen and (min-width: 601px) and (max-width: 1500px) {
    margin: 0;
    font-size: 0.8rem;
  }
  @media screen and (max-width: 380px) {
    margin: 0;
    font-size: 0.8rem;
  }
`;
