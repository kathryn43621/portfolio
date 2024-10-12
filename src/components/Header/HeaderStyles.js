import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 2rem;
  padding: 16px 24px;
  margin: 0 auto;
  max-width: 1040px;

  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 16px 16px 0;
  }

  @media ${(props) => props.theme.breakpoints.md} {
    padding: 24px 16px 0;
  }

  & > * {
    flex-shrink: 0;
  }
`;

export const LogoWrapper = styled.div`
  width: 100px;
`;

export const SocialWrapper = styled.div`
  display: flex;
  @media ${(props) => props.theme.breakpoints.sm} {
    display: none;
  }
`;
