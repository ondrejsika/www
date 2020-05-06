import React from "react";
import { Container } from "react-bootstrap";
import styled from "styled-components";
import devops from "@app/data/pictures/devops/devops_beige.svg";

const Nav = styled.ul`
  margin: 0;
  padding: 0;
  list-style-type: none;
  overflow: hidden;
`;

const NavItem = styled.li`
  float: right;
  padding: 14px 16px;
  text-decoration: none;
  text-transform: uppercase;
  text-align: center;
  font-weight: bold;
  font-size: 1.4em;
  display: block;
  cursor: pointer;
  @media (max-width: 600px) {
    padding: 0.5em 0.4em 1em 0.4em;
    font-size: 1.25em;
  }

  @media (max-width: 600px) {
    padding: 0.5em 0.25em 1em 0.25em;
    font-size: 1.13em;
  }
`;

const Brand = styled.div`
  display: inline-block;
  margin: 1rem 1rem 1rem 0;
  font-size: 1.25rem;
  line-height: inherit;
  white-space: nowrap;
`;

const Img = styled.img`
  height: 30px;
  padding-left: 2px;
`;

const Item = styled.a`
  color: #131480 !important;
`;

const Navbar = () => (
  <Container>
    <Nav>
      <Brand>
        <Img src={devops} className="" />
      </Brand>
      <NavItem>
        <Item href="https://ondrej-sika.cz">Ondrej Sika</Item>
      </NavItem>
      <NavItem>
        <Item href="/">home</Item>
      </NavItem>
    </Nav>
  </Container>
);

export default Navbar;
