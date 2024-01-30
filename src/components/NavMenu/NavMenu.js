import React from 'react';
import { Navbar, MenuIcon, MenuLinks, NavLink } from './NavMenuStyles'


const NavMenu = ( { isOpen, toggleMenu } ) => {  
    return (
        <Navbar>
          <MenuIcon onClick={toggleMenu}>☰</MenuIcon>
          <MenuLinks isOpen={isOpen}>
            <NavLink href="#projects">Projects</NavLink>
            <NavLink href="#tech">Technologies</NavLink>
            <NavLink href="#about">About</NavLink>
          </MenuLinks>
        </Navbar>
    );
  };

  export default NavMenu;
