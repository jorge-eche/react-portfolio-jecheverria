import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import {
  ContactPage,
  Title,
  Container,
  Form,
  FieldHalf,
  FieldUpper,
  Field,
  Paragraph,
  ParagraphContainer,
  Thanks,
} from "./ContactStyledCom";

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
    <ContactPage>
      <Title>Contact me</Title>

      <Container>
        {" "}
        <Form ref={form} onSubmit={sendEmail}>
          <FieldHalf>
            <FieldUpper>
              <label htmlFor="name">
                <input
                  id="name"
                  type="text"
                  name="name"
                  placeholder="Name"
                  required
                />
              </label>
            </FieldUpper>

            <FieldUpper variant="email">
              <label htmlFor="email">
                <input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                />
              </label>
            </FieldUpper>
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
    </ContactPage>
  );
};

export default Contact;
