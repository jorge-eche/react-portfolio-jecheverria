import styled from "styled-components";

export const AboutPage = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 600px) {
    height: 100%;
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

export const ContainerFlex = styled.div`
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

export const ContainerP = styled.div`
  flex-basis: 65%;

  @media screen and (min-width: 601px) and (max-width: 1500px) {
    flex-basis: 70%;
  }
  @media screen and (max-width: 600px) {
    flex-basis: initial;
    margin-bottom: 20px;
  }
`;

export const Paragraph = styled.p`
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

export const UlTech = styled.ul`
  font-family: sans-serif;
  font-size: 1.2rem;
  li {
    display: inline-block;
    margin-right: 5px;
    color: var(--light-yellow);
  }
  @media screen and (min-width: 601px) and (max-width: 1500px) {
    font-size: 1rem;
  }
  @media screen and (max-width: 600px) {
    font-size: 1.1rem;
  }
  @media screen and (max-width: 380px) {
    font-size: 0.8rem;
  }
`;

export const ContainerPhoto = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Photo = styled.img`
  width: 396px;
  height: 330px;
  border-radius: 50%;
  box-shadow: 10px 10px 12px 0px black;
  @media screen and (min-width: 601px) and (max-width: 1500px) {
    width: 300px;
    height: 250px;
  }
  @media screen and (max-width: 600px) {
    width: 138px;
    height: 115px;
  }
`;
