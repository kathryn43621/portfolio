"use client";
import Link from "next/link";
import React, { useState } from "react";
import { Container, Img, LogoWrapper, SocialWrapper } from "./HeaderStyles";
import NavMenu from "../NavMenu/NavMenu";
import SocialIcons from "../SocialIcons/SocialIcons";
import Image from "next/image";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <Container>
      <LogoWrapper>
        <Link href="/">
          <Image src="/images/logo.svg" width={100} height={100} alt="logo" />
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
