import styled, { keyframes } from "styled-components";

//image animation
const scaleUpCenter = keyframes`
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(1.2);
  }
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  overflow: hidden;
  transition: all 0.4s ease-in-out;

  &:hover {
    transform: scale(1.15);
    transform-origin: center;
  }
`;

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  place-items: top;
  padding: 3rem 0;
  column-gap: 3rem;
  row-gap: 3rem;

  @media ${(props) => props.theme.breakpoints.sm} {
    display: flex;
    flex-direction: column;
    padding: 2rem 0;
    padding-bottom: 0;
  }
`;

export const BlogCard = styled.div`
  border-radius: 10px;
  box-shadow: 3px 3px 20px rgba(80, 78, 78, 0.5);
  text-align: center;
  width: 100%;
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 100%;
  }
`;

export const ImageContainer = styled.div`
  width: 100%;
  overflow: hidden;
`;

export const TitleContent = styled.div`
  text-align: center;
  z-index: 20;
  width: 100%;
  margin-top: 2rem;
`;

export const HeaderThree = styled.h3`
  font-weight: 500;
  letter-spacing: 2px;
  background-image: linear-gradient(
    to right,
    rgb(255, 162, 142),
    rgb(235, 111, 247),
    rgb(122, 165, 253)
  );

  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  padding: 0.5rem 0;
  font-size: ${(props) => (props.title ? "3rem" : "2rem")};
`;

export const Hr = styled.hr`
  width: 50px;
  height: 3px;
  margin: 10px auto 20px auto;
  border: 0;
  background: #5de0e6;
`;

export const Intro = styled.div`
  width: 170px;
  margin: 0 auto;
  color: #dce3e7;
  font-family: "Droid Serif", serif;
  font-size: 13px;
  font-style: italic;
  line-height: 18px;
`;

export const CardInfo = styled.p`
  width: 100%;
  padding: 0 24px;
  color: #e4e6e7;
  font-size: 1.8rem;
  line-height: 24px;
  text-align: justify;
  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 16px 24px;
  }
`;

export const KeyFeatures = styled.ul`
  text-align: left;
  padding: 0 16px;
  margin: 2.5rem;
  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 0 16px;
  }
`;

export const Feature = styled.li`
  list-style-type: disc;
  color: #e9c3f1;
  font-size: 1.8rem;
  padding: 1rem 0;
`;

export const UtilityList = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
  justify-content: space-around;
  margin: 2.5rem 0;
`;

export const ExternalLinks = styled.a`
  width: 20%;
  color: white;
  font-size: 1.6rem;
  padding: 1rem;
  background: linear-gradient(270deg, #13adc7 0%, #945dd6 100%);
  border-radius: 25px;
  opacity: 0.8;
  transition: opacity 0.5s ease-in-out;
  &:hover {
    opacity: 1;
  }
`;

export const TagList = styled.ul`
  display: flex;
  justify-content: center;
  padding: 1rem 2rem 0 2rem;
  flex-wrap: wrap;
  gap: 12px;
`;
export const Tag = styled.li`
  color: white;
  font-size: 1.5rem;
  border: 1px solid #5de0e6;
  border-radius: 25px;
  padding: 1rem;
`;
