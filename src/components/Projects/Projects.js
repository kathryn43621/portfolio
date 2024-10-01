import React from "react";
import {
  BlogCard,
  CardInfo,
  ExternalLink,
  GridContainer,
  HeaderThree,
  Hr,
  ImageContainer,
  Tag,
  TagList,
  TitleContent,
  ExternalLinkContainer,
  Img,
  KeyFeatures,
  Feature,
} from "./ProjectsStyles";
import {
  Section,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { projects } from "../../constants/constants";

const Projects = () => (
  <Section id="projects">
    <SectionDivider divider />
    <SectionTitle>Projects</SectionTitle>
    <GridContainer>
      {projects.map((p, i) => {
        return (
          <BlogCard key={i}>
            <ImageContainer>
              <Img src={p.image} alt="project preview" />
            </ImageContainer>

            <TitleContent>
              <HeaderThree title>{p.title}</HeaderThree>
              <Hr />
            </TitleContent>
            <CardInfo className="card-info">{p.description}</CardInfo>
            <KeyFeatures>
              {p.features.map((f, i) => {
                return <Feature key={i}>{f}</Feature>;
              })}
            </KeyFeatures>
            <div>
              <TagList>
                {p.tags.map((t, i) => {
                  return <Tag key={i}>{t}</Tag>;
                })}
              </TagList>
            </div>
            <ExternalLinkContainer>
              <ExternalLink
                href={p.source}
                target="_blank"
                role="button"
                rel="noopener noreferrer"
              >
                View
              </ExternalLink>
            </ExternalLinkContainer>
          </BlogCard>
        );
      })}
    </GridContainer>
  </Section>
);

export default Projects;
