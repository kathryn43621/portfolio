"use client";
import React from 'react';
import { DiFirebase, DiReact } from 'react-icons/di';
import { IoColorPaletteSharp } from "react-icons/io5"
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider divider />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
    I have hands-on experience with a variety of web development technologies, spanning both Back-end and Front-end, as well as Design.
    </SectionText>
    <List>
      <ListItem>
        <picture>
          <DiReact size="5rem" />
        </picture>
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            React.js <br />
            Next.js <br /> 
            Vite <br />
            Tailwind <br />
            Bootstrap <br />
            ...
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiFirebase size="5rem" />
        </picture>
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Node.js <br />
            Express <br />
            MongoDB <br />
            SQL <br />
            MVC <br />
            ...
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture className="pb-8">
          <IoColorPaletteSharp size="4rem"/>
        </picture>
        <ListContainer>
          <ListTitle>UI/UX</ListTitle>
          <ListParagraph>
            Prototyping <br />
            User research <br />
            Figma <br />
            Photoshop <br />
            Adobe XD <br />
            ...
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
    <SectionDivider colorAlt />
  </Section>
);

export default Technologies;