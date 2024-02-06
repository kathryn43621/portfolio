import React from 'react';
import { Navbar, MenuIcon, MenuLinks, NavLink } from './NavMenuStyles'


const NavMenu = ( { isOpen, toggleMenu } ) => {  
    return (
        <Navbar>
          <MenuIcon onClick={toggleMenu}>☰</MenuIcon>
          <MenuLinks isOpen={isOpen}>
            <NavLink onClick={toggleMenu} href="#projects">Projects</NavLink>
            <NavLink onClick={toggleMenu} href="#tech">Technologies</NavLink>
            <NavLink onClick={toggleMenu} href="#about">About</NavLink>
          </MenuLinks>
        </Navbar>
    );
  };

  export default NavMenu;
