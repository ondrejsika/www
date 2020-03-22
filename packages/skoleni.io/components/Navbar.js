import React from "react";
import styled from "styled-components";
import Link from "next/link";

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
  display: block;
`;

const Navbar = () => (
  <>
    <Nav>
      <NavItem>
        <Link href="#">
          <NavLink>Home</NavLink>
        </Link>
      </NavItem>
      <NavItem>
        <Link href="#">
          <NavLink>Skoleni</NavLink>
        </Link>
      </NavItem>
      <NavItem>
        <Link href="#">
          <NavLink>Lektori</NavLink>
        </Link>
      </NavItem>
      <NavItem>
        <Link href="#">
          <NavLink>Kontakty</NavLink>
        </Link>
      </NavItem>
    </Nav>
  </>
);

export default Navbar;
