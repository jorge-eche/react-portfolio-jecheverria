import styled from "styled-components";

export const ContactPage = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
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

  @media screen and (max-width: 1500px) {
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
      top: -35px;
      left: 4px;
    }
    &:after {
      top: 45px;
      left: -5px;
    }
  }

  @media screen and (max-width: 380px) {
    font-size: 3rem;
    &:before {
      top: -10px;
      left: -15px;
    }
    &:after {
      top: 30px;
      left: 10px;
    }
  }
`;

export const Container = styled.div`
  height: 100%;
  display: flex;
  justify-content: space-around;
  padding: 40px;
  gap: 30px;

  @media screen and (max-width: 1500px) {
    padding: 0 40px 0;
  }

  @media screen and (max-width: 600px) {
    flex-direction: column;
    padding: 0 10px;
    justify-content: flex-start;
  }

  @media screen and (max-width: 600px) {
    gap: 10px;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  input[type="submit"] {
    width: 100px;
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
    align-self: flex-end;
    &:hover {
      cursor: pointer;
      color: var(--dark-blue);
      background-color: var(--light-yellow);
    }
  }

  @media screen and (max-width: 600px) {
    order: 2;
    margin-top: 30px;
    input[type="submit"] {
      align-self: center;
      margin-top: 20px;
    }
  }
  @media screen and (max-width: 380px) {
    margin-top: 0;
    input[type="submit"] {
      margin-top: 5px;
    }
  }
`;

export const FieldHalf = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-bottom: 10px;
  @media screen and (max-width: 600px) {
    margin-bottom: 5px;
  }
`;

export const FieldUpper = styled.div`
  width: ${(props) => (props.variant === "email" ? "50%" : "calc(50% - 10px)")};
  input[type="text"],
  input[type="email"] {
    background-color: var(--dark-cerulean);
    height: 50px;
    font-size: 1rem;
    color: var(--white);
    padding: 0 20px;
    border: 0;
    width: 100%;
  }
  @media screen and (max-width: 600px) {
    input[type="text"] {
    }
  }
`;

export const Field = styled.div`
  margin-bottom: 10px;
  input[type="text"] {
    background-color: var(--dark-cerulean);
    height: 50px;
    font-size: 1rem;
    color: var(--white);
    padding: 0 20px;
    border: 0;
  }
  input[name="subject"] {
    width: 100%;
  }
  textarea {
    font-family: arial;
    width: 100%;
    height: 150px;
    border: 0;
    background-color: var(--dark-cerulean);
    font-size: 1rem;
    color: var(--white);
    padding: 20px;
    resize: none;
  }
  @media screen and (max-width: 380px) {
    margin-bottom: 5px;
  }
  @media screen and (max-width: 600px) {
    margin-bottom: 5px;
  }
`;

export const ParagraphContainer = styled.div`
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 600px) {
    order: 1;
  }
`;

export const Paragraph = styled.p`
  text-align: justify;
  text-justify: inter-word;
  letter-spacing: 1px;
  font-size: 1.2rem;
  font-family: sans-serif;
  line-height: 2rem;
  margin-bottom: 10px;
  @media screen and (max-width: 600px) {
    font-size: 1rem;
    line-height: 1rem;
  }
`;

export const Thanks = styled.p`
  font-size: 1.5rem;
  font-weight: 700;
  margin-top: auto;
  color: var(--light-yellow);
  text-align: center;

  @media screen and (max-width: 600px) {
    margin-top: 20px;
  }
  @media screen and (max-width: 380px) {
    font-size: 1.4rem;
    margin-top: 0;
  }
`;
