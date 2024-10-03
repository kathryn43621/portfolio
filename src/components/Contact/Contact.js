"use client";
import React, { useState } from "react";
import {
  Section,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import {
  LeftSection,
  RightSection,
  Img,
  FormContainer,
  Label,
  Input,
  TextArea,
  ButtonWrapper,
} from "./ContactStyles";
import Success from "./Success";


const Contact = (props) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setEmailSent(true);
        console.log("Email sent successfully!");
      } else {
        console.error("Error sending email");
      }
    } catch (error) {
      console.error("Error sending email", error);
    }
  };

  const [emailSent, setEmailSent] = useState(false);

  if (emailSent) {
    return <Success />;
  }

  return (
    <Section row id="contact">
      <LeftSection>
        <SectionTitle center>Let's Connect!</SectionTitle>
        <FormContainer>
          <Label htmlFor="name">Name</Label>
          <Input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            aria-describedby="username"
          />
          <Label htmlFor="email">Email</Label>
          <Input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            aria-describedby="email"
          />
          <TextArea
            id="message"
            name="message"
            cols="30"
            rows="10"
            placeholder="Your message..."
            value={formData.message}
            onChange={handleChange}
            required
            aria-describedby="message"
          ></TextArea>
          <ButtonWrapper>
            <Button role="button" type="submit" onClick={handleSubmit}>
              Submit
            </Button> 
          </ButtonWrapper>
        </FormContainer>
      </LeftSection>
      <RightSection>
        <Img
          src="/images/space.webp"
          layout="responsive"
          width={500}
          height={500}
          alt="image of an earth surrounded by an astronaut, a cat in a spaceship, a keyboard and a cup of coffee."
        />
      </RightSection>
    </Section>
  );
};

export default Contact;
