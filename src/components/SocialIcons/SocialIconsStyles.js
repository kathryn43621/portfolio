import styled from "styled-components";

// Icons
export const Icon = styled.a`
  transition: 0.3s ease;
  color: white;
  border-radius: 50px;
  padding: 8px;
  &:hover {
    background-color: #212d45;
    transform: scale(1.2);
    cursor: pointer;
  }
`;

export const SocialContainer = styled.div`
    grid-area: 1 / 5 / 2 / 6;
    display: flex;
    align-items: center;
    padding-right: 1rem;
`;