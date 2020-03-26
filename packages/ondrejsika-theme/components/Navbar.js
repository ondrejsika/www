import React from "react";
import default_colors from "@app/ondrejsika-theme/config/colors";
import styled from "styled-components";
import Link from "next/link";

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
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNavDropdownaa"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdownaa">
              <ul className="navbar-nav ml-auto">
                {props.links.map((link, i) => {
                  if (typeof link[1] == "string") {
                    return (
                      <li className="nav-item" key={i}>
                        <Link href={link[1]}>
                          <NavLink href="#" className="nav-link">
                            {link[0]}
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
                                <a className="dropdown-item">{sub_link[0]}</a>
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
