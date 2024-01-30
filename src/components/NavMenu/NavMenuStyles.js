import styled from "styled-components";

export const Navbar = styled.nav`
  padding: 1rem;
  gap: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const MenuIcon = styled.div`
  cursor: pointer;
  display: none;
  padding: 1rem;
  &:hover {
    background-color: #555;
    border-radius: 50px;
}

  @media ${(props) => props.theme.breakpoints.sm} {
    display: block;
  }
`;

export const MenuLinks = styled.div`
  display: flex;

  @media ${(props) => props.theme.breakpoints.sm} {
    flex-direction: column;
    align-items: center;
    width: 100%;
    position: absolute;
    top: 100px;
    left: 0;
    background-color: #333;
    display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
    z-index: 1;
  }
`;

export const NavLink = styled.a`
  font-size: 2rem;
  line-height: 32px;
  color: #fff;
  padding: 1rem;

  &:hover {
    opacity: 1;
    cursor: pointer;
    background-image: linear-gradient(
      to right,
      rgb(255, 162, 142),
      rgb(235, 111, 247),
      rgb(122, 165, 253)
    );
    background-position: 0 100%;
    background-size: 100% 2px;
    background-repeat: no-repeat;
    transition: border-bottom-color 0.8s ease;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    width: 100%;
    text-align: center;
    &:hover {
        background-color: #555;
    }
  }
`;


