import React, { useRef } from "react";
import styled from "styled-components";
import emailjs from "@emailjs/browser";

const Title = styled.h1`
  font-size: 5rem;
  font-family: "Coolvetica", Helvetica;
  font-weight: 400;
  margin-left: -40px;
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
`;

const Container = styled.div`
  display: flex;
  margin: 15px 50px 0;
  gap: 30px;
  /* justify-content: space-evenly; */
  /* margin: 0 10px 0; */
`;

const ParagraphContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-content: stretch;
`;

const Paragraph = styled.p`
  text-align: justify;
  text-justify: inter-word;
  letter-spacing: 1px;
  font-size: 1.2rem;
  font-family: sans-serif;
  line-height: 2rem;
  margin-bottom: 10px;
`;

const Thanks = styled.p`
  font-size: 1.5rem;
  font-weight: 700;
  margin-top: auto;
`;

const Form = styled.form`
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
`;

const FieldHalf = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1rem;
`;

const Field = styled.div`
  margin-bottom: 10px;
  input[type="text"],
  input[type="email"] {
    display: block;
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
    width: 100%;
    height: 150px;
    border: 0;
    background-color: var(--dark-cerulean);
    font-size: 1rem;
    color: var(--white);
    padding: 20px;
  }
`;

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_4oha58h",
        "template_jao2xp7",
        form.current,
        "c_AW7MwZbdHhXZPgq"
      )
      .then(
        (result) => {
          alert("Message succesfully sent, thanks!");
          window.location.reload(false);
        },
        (error) => {
          alert("Failed to send the message, please try again");
        }
      );
  };

  return (
    <>
      <Title>Contact me</Title>

      <Container>
        {" "}
        <Form ref={form} onSubmit={sendEmail}>
          <FieldHalf>
            <Field variant="half">
              <label htmlFor="name">
                <input
                  id="name"
                  type="text"
                  name="name"
                  placeholder="Name"
                  required
                />
              </label>
            </Field>

            <Field variant="half">
              <label htmlFor="email">
                <input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                />
              </label>
            </Field>
          </FieldHalf>

          <Field>
            <label htmlFor="subject">
              <input
                id="subject"
                type="text"
                name="subject"
                placeholder="Subject"
                required
              />
            </label>
          </Field>

          <Field>
            <label htmlFor="message">
              <textarea
                id="message"
                name="message"
                placeholder="Message"
                rows="8"
                required
              ></textarea>
            </label>
          </Field>

          <input type="submit" value="Send" />
        </Form>
        <ParagraphContainer>
          <Paragraph>
            If you have a project that you would like to discuss or have any
            questions about my work, please don't hesitate to contact me.
          </Paragraph>

          {/* <Paragraph>
            You can also find me on social media or the contact info left on my
            resume.
          </Paragraph> */}
          <Paragraph>
            I look forward to hearing from you and working together on your next
            project.
          </Paragraph>
          <Paragraph>
            I will make sure to respond to your inquiry as soon as possible.
          </Paragraph>

          <Thanks>Thank you for visiting my portfolio! </Thanks>
        </ParagraphContainer>
      </Container>
    </>
  );
};

export default Contact;
