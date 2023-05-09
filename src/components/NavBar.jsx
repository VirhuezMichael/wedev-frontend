import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-scroll";
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  width: 100%;
  background-color: #ba1e4a;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  text-align: center;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const NavList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  list-style: none;
  margin: 0;
  padding: 0;
  @media (max-width: 740px) {
    flex-direction: column;
    align-items: flex-start;
    position: absolute;
    top: 100%;
    left: 0;
    background-color: #fff;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    height: ${({ isOpen }) => (isOpen ? "auto" : "0")};
    overflow: hidden;
    transition: height 0.3s ease;
    width: 100%;
  }
`;

const NavItem = styled.li`
  margin: 0 1rem;
  @media (max-width: 740px) {
    margin: 1rem;
  }
`;

const NavLink = styled(Link)`
  display: block;
  padding: 0.5rem;
  color: #ece3da;
  text-decoration: none;
  transition: all 0.3s ease;

  &:hover,
  &.active {
    color: #fffafc;
    border-bottom: 2px solid #fffafc;
  }
`;

const NavBrand = styled.img`
  height: 60px;
  @media (max-width: 740px) {
    margin: 1rem;
  }
`;

const NavIcon = styled.button`
  display: none;
  @media (max-width: 740px) {
    display: block;
    position: absolute;
    top: 0.5rem;
    right: 0.5rem;
    background-color: transparent;
    border: none;
    cursor: pointer;
    font-size: 2rem;
    outline: none;
  }
`;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavIconClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Nav className="scrollspy">
      <NavBrand src="brand.png" alt="Brand Logo" />
      <NavIcon onClick={handleNavIconClick}>
        {isOpen ? <CloseIcon/> : <MenuIcon/>}
      </NavIcon>
      <NavList isOpen={isOpen}>
        <NavItem>
          <NavLink
            to="about"
            smooth={true}
            duration={500}
            spy={true}
            offset={-80}
          >
            Quiénes somos
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            to="services"
            smooth={true}
            duration={500}
            spy={true}
            offset={-80}
          >
            Nuestros servicios
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            to="contact"
            smooth={true}
            duration={500}
            spy={true}
            offset={-80}
          >
            Contacto
          </NavLink>
        </NavItem>
      </NavList>
    </Nav>
  );
};

export default Navbar;
