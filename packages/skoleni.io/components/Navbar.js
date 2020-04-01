import React from "react";
import styled from "styled-components";
import Link from "next/link";
import { Container } from "react-bootstrap";

const Nav = styled.ul`
  margin: 0;
  padding: 0;
  list-style-type: none;
  overflow: hidden;
`;
const NavItem = styled.li`
  float: right;
`;
const NavLink = styled.a`
  padding: 14px 16px;
  text-decoration: none;
  text-transform: uppercase;
  text-align: center;
  font-weight: bold;
  font-size: 0.8em;
  display: block;
  cursor: pointer;
  color: black;
`;

const Navbar = () => (
  <>
    <Nav>
      <Container>
        <NavItem>
          <Link href="/skoleni">
            <NavLink>Skoleni</NavLink>
          </Link>
        </NavItem>
        <NavItem>
          <Link href="/lektori">
            <NavLink>Lektori</NavLink>
          </Link>
        </NavItem>
        <NavItem>
          <Link href="/kontakty">
            <NavLink>Kontakty</NavLink>
          </Link>
        </NavItem>
        <NavItem>
          <Link href="/">
            <NavLink>Home</NavLink>
          </Link>
        </NavItem>
      </Container>
    </Nav>
  </>
);

export default Navbar;
