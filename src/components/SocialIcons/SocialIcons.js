import React from "react";
import { SocialContainer, Icon } from "./SocialIconsStyles";
import { AiFillGithub, AiFillMail, AiFillLinkedin } from "react-icons/ai";

const SocialIcons = () => {
  return (
    <SocialContainer>
      <Icon
        href="https://github.com/kathryn43621"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Visit my GitHub profile"
      >
        <AiFillGithub size="3rem" />
      </Icon>
      <Icon
        href="https://www.linkedin.com/in/yu-wei-yang/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Visit my LinkedIn profile"
      >
        <AiFillLinkedin size="3rem" />
      </Icon>
      <Icon
        href="mailto:kathryn43621@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Send me an email"
      >
        <AiFillMail size="3rem" />
      </Icon>
    </SocialContainer>
  );
};

export default SocialIcons;
