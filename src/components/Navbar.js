import React, { useState } from "react";
import styled from "styled-components";

const Nav = styled.nav`
  padding: 5vh 48px;
  min-height: 18vh;
  background: ${(props) => (props.open ? "#1c2022" : "transparent")};
  z-index: 100;
  position: absolute;
`;

const Item = styled.li``;

const Link = styled.a`
  color: white;
  text-decoration: none;

  :hover {
    text-decoration: underline;
  }
`;

const NavIcon = styled.button`
  background: none;
  cursor: pointer;
  border: none;
  outline: none;
`;

const Line = styled.span`
  display: block;
  border-radius: 50px;
  width: 25px;
  height: 3px;
  margin: 5px;
  background-color: #fff;
  transition: width 0.4s ease-in-out;

  :nth-child(2) {
    width: ${(props) => (props.open ? "40%" : "70%")};
  }
`;

const Logo = styled.h1`
  position: absolute;
  left: 50%;
  top: 75%;
  transform: translate(-50%, -75%);
  transition: opacity 0.4s ease-in-out;
  opacity: ${(props) => (props.open ? 0 : 1)};
`;

const Overlay = styled.div`
  position: absolute;
  height: ${(props) => (props.open ? "100vh" : 0)};
  width: 100vw;
  background: #1c2022;
  transition: height 0.4s ease-in-out;
`;

const OverlayMenu = styled.ul`
  list-style: none;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  li {
    opacity: ${(props) => (props.open ? 1 : 0)};
    font-size: 36px;
    margin: 48px 0px;
    transition: opacity 0.4s ease-in-out;
  }

  li:nth-child(2) {
    margin: 48px 0px;
  }
`;

const Navbar = () => {
  const [toggle, toggleNav] = useState(false);
  return (
    <>
      <Nav>
        <NavIcon onClick={() => toggleNav(!toggle)}>
          <Line open={toggle} />
          <Line open={toggle} />
          <Line open={toggle} />
        </NavIcon>
      </Nav>
      <Overlay open={toggle}>
        <Logo className="flex items-center justify-center h-screen text-[256px] text-[#191919] font-bebas tracking-widest">
          MENU
        </Logo>
        <OverlayMenu open={toggle} className="font-bebas text-center">
          <Item>
            <Link href={toggle ? "/" : null}>Home</Link>
          </Item>
          <Item>
            <Link href={toggle ? "/about" : null}>About</Link>
          </Item>
          <Item>
            <Link href={toggle ? "/work" : null}>Work</Link>
          </Item>
          <Item>
            <Link href={toggle ? "/contact" : null}>Contact</Link>
          </Item>
        </OverlayMenu>
      </Overlay>
    </>
  );
};

export default Navbar;
