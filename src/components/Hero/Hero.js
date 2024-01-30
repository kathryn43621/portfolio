import React from 'react';
import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection, RightSection, Img, Background } from './HeroStyles';
import BackgroundAnimation from '../BackgroundAnimation/BackgroundAnimation';

const Hero = () => {
  const handleClick = () => {
    const section = document.getElementById('contact');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Section row>
      <Background>
        <BackgroundAnimation />
      </Background>
        <LeftSection>
          <SectionTitle main center>
            Hello, <br />
            I'm Yu-Wei
          </SectionTitle>
          <SectionText>
            I'm a full stack software engineer with a passion for improving lives through technology, healthcare, and accessibility.
          </SectionText>
          <Button role="button" onClick={handleClick}>Contact Me</Button>
        </LeftSection>
        <RightSection>
          <Img src='/images/earth.png' alt="image of an astronaut floating in space"/>
        </RightSection>
    </Section>
  );
};

export default Hero;
