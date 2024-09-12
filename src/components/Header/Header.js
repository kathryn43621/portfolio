"use client";
import Link from "next/link";
import React, { useState } from "react";
import { Container, Img, LogoWrapper, SocialWrapper } from "./HeaderStyles";
import NavMenu from "../NavMenu/NavMenu";
import SocialIcons from "../SocialIcons/SocialIcons";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <Container>
      <LogoWrapper>
        <Link href="/">
          <Img src="/images/logo.svg" alt="logo" />
        </Link>
      </LogoWrapper>
      <NavMenu isOpen={isMenuOpen} toggleMenu={toggleMenu} />
      <SocialWrapper>
        <SocialIcons />
      </SocialWrapper>
    </Container>
  );
};

export default Header;
