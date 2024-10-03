import styled, { keyframes } from "styled-components";
import Image from "next/image";

export const LeftSection = styled.div`
  width: 100%;
  padding-right: 5rem;
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 80%;
    padding: 0;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    width: 100%;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
  }
`;

export const RightSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  @media ${(props) => props.theme.breakpoints.sm} {
  }
  @media ${(props) => props.theme.breakpoints.md} {
    display: flex;
  }
`;

// Image animation
const floatAnimation = keyframes`
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(0);
  }
`;

export const Img = styled(Image)`
  width: 100%;
  animation: ${floatAnimation} 2s ease-in-out infinite;
`;

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 5rem auto 2rem;
  @media ${(props) => props.theme.breakpoints.md} {
    margin: 0 auto;
    width: 100%;
  }
`;

export const Title = styled.div`
  font-weight: 800;
  font-size: 3rem;
  padding: 2rem 0;
  max-width: 420px;
  background-image: linear-gradient(
    to right,
    rgb(255, 162, 142),
    rgb(235, 111, 247),
    rgb(122, 165, 253)
  );
  background-clip: text;
  color: transparent;
`;

export const Label = styled.label`
  margin-bottom: 1rem;
  font-weight: bold;
`;

export const Input = styled.input`
  padding: 1rem;
  margin-bottom: 1rem;
  border-radius: 5px;
  border: 1px solid #ccc;
`;

export const TextArea = styled.textarea`
  padding: 1rem;
  margin: 1rem 0;
  border-radius: 5px;
  border: 1px solid #ccc;
  resize: vertical;
`;

export const ButtonWrapper = styled.div`
  width: 100%;
  padding: 1rem;
  margin: 0 auto;
`;
