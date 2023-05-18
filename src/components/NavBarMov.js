import React, { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { FaBars } from 'react-icons/fa';
import { theme } from '../styles/theme';
import { Link } from 'react-router-dom';


const Nav = styled.nav`
  background-color: #1A1A1A;
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 69px;
  z-index: 2;
`;

const Logo = styled.div`
img {
    height: 51px;
    width: 180px;
  }
  margin-right: auto; 
  margin-left: 7px;
`;

const MenuButton = styled.button`
  background-color: transparent;
  color: white;
  border: none;
  font-size: 24px;
  cursor: pointer;
`;

const Menu = styled.div`
  position: fixed;
  top: 4rem;
  left: 0;
  right: 0;
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
  background-color: rgba(26, 26, 26, 0.6); // 여기가 NavBar 투명도
  padding: 1rem;
  text-align: center;
  height: 100%;
`;

const Subtitle2 = styled.div`
  font-size: ${props => props.theme.Mob_fontSizes.Subtitle2};
  font-weight: ${props => props.theme.fontWeights.Subtitle2};
  color: #FFFFFF;
  font-family: 'NanumSquare Neo';
  margin-bottom: 20px;
  margin-top: 20px;
  white-space: pre-line;
`;


const Hr = styled.hr`
width: 499px;
color: white;
`;

const NavBarMov = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <Nav>
      <ThemeProvider theme={theme}>
        <Logo>
        <Link to="/">
          <img src={require("")} alt="Logo" />
          </Link>
        </Logo>
        <MenuButton onClick={toggleMenu}><FaBars /></MenuButton>
        <Menu  isOpen={isOpen}>
          <Link to="/About" style={{ textDecoration: "none" }}>
            <Subtitle2>About us</Subtitle2>
          </Link>
          <Hr />
          <Link to="/Booking" style={{ textDecoration: "none" }}>
            <Subtitle2>Booking</Subtitle2>
          </Link>
          <Hr />
          <Link to="/MyReservation" style={{ textDecoration: "none" }}>
            <Subtitle2>My Reservation</Subtitle2>
          </Link>
          <Hr />
          <Link to="/Inquiry" style={{ textDecoration: "none" }}>
            <Subtitle2>Inquiry</Subtitle2>
          </Link>
        </Menu>
      </ThemeProvider>
    </Nav>
  );
}

export default NavBarMov;
