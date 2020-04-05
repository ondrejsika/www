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
  font-size: 1.4em;
  display: block;
  cursor: pointer;
  color: black;

  @media (max-width: 600px) {
    padding: 0.5em 0.4em 1em 0.4em;
    font-size: 1.25em;
  }

  @media (max-width: 600px) {
    padding: 0.5em 0.25em 1em 0.25em;
    font-size: 1.13em;
  }
`;

const Brand = styled.span``;

const Navbar = () => (
  <>
    <Container>
      <Nav>
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
          <Brand>
            <a href="/">
              <NavLink>Skoleni.io</NavLink>
            </a>
          </Brand>
        </NavItem>
      </Nav>
    </Container>
  </>
);

export default Navbar;
