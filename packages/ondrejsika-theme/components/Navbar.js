import React from "react";
import default_colors from "@app/ondrejsika-theme/config/colors";
import styled from "styled-components";
import Link from "next/link";
import hamburgerMenu from "@app/data/pictures/hamburger-menu.svg";

const NavLink = styled.a`
  color: ${default_colors.WHITE} !important;
  &:hover {
    color: ${default_colors.BROWN} !important;
  }
`;

const Nav = styled.nav`
  border-bottom: 1px solid ${default_colors.WHITE};
`;

const NavName = styled.strong`
  color: ${default_colors.WHITE};
`;

const NavUnderheader = styled.div`
  color: ${default_colors.WHITE};
`;

const HamburgerMenu = styled.span`
  display: inline-block;
  width: 1.5em;
  height: 1.5em;
  vertical-align: middle;
  content: "";
  background: no-repeat center center;
  background-size: 100% 100%;

  @media (min-width: 992px) {
    display: none;
  }
`;
const Button = styled.button`
  background-color: transparent;
  border: none;
`;
const Navbar = props => {
  const Background = styled.div`
    background-color: ${(props.site &&
      props.site.colors &&
      props.site.colors.PRIMARY) ||
      default_colors.BLUE};
  `;

  return (
    <Background>
      <div className="container-fluid">
        <div className="container pt-2 pb-2">
          <Nav className="navbar navbar-expand-lg navbar-light">
            <a className="navbar-brand" href="/">
              <NavName>{props.NavName}</NavName>
              <NavUnderheader className="fs-8 d-none d-sm-block">
                {props.NavUnderheader}
              </NavUnderheader>
            </a>
            <Button data-toggle="collapse" data-target="#navbarNavDropdownaa">
              <HamburgerMenu>
                <img src={hamburgerMenu.src} />
              </HamburgerMenu>
            </Button>
            <div className="collapse navbar-collapse" id="navbarNavDropdownaa">
              <ul className="navbar-nav ml-auto">
                {props.links.map((link, i) => {
                  if (typeof link[1] == "string") {
                    return (
                      <li className="nav-item" key={i}>
                        <Link href={link[1]}>
                          <NavLink href="#" className="nav-link">
                            {link[0]}
                            <span
                              style={{
                                fontSize: "0.8em",
                                verticalAlign: "top",
                                color: "#C6BEAF"
                              }}
                            >
                              {" "}
                              {link[2]}
                            </span>
                          </NavLink>
                        </Link>
                      </li>
                    );
                  } else {
                    return (
                      <li key={i} className="nav-item dropdown">
                        <NavLink
                          className="nav-link dropdown-toggle"
                          href="#"
                          id="navbarDropdown"
                          role="button"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          {link[0]}
                        </NavLink>
                        <div
                          className="dropdown-menu"
                          aria-labelledby="navbarDropdown"
                        >
                          {link[1].map((sub_link, i) => {
                            return (
                              <Link key={i} href={sub_link[1]}>
                                <a className="dropdown-item">
                                  {sub_link[0]}
                                  {` `}
                                  <span
                                    style={{
                                      fontSize: "0.8em",
                                      verticalAlign: "top",
                                      color: "red"
                                    }}
                                  >
                                    {sub_link[2]}
                                  </span>
                                </a>
                              </Link>
                            );
                          })}
                        </div>
                      </li>
                    );
                  }
                })}
              </ul>
            </div>
          </Nav>
        </div>
      </div>
    </Background>
  );
};

export default Navbar;
