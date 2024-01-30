import React from "react";
import { Section, SectionSubText } from "../../styles/GlobalComponents";
import { Title } from "./ContactStyles";

const Success = () => {
  return (
    <Section>
      <Title>Email Sent Successfully!</Title>
      <SectionSubText>
        Thank you for contacting me. I will get back to you as soon as possible.
      </SectionSubText>
    </Section>
  );
};

export default Success;
