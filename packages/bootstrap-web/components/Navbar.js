import React from "react";
import Link from "next/link";

const Navbar = props => (
  <div>
    <div className="container-fluid">
      <div className="container pt-2 pb-2">
        <nav className="navbar navbar-expand-lg navbar-light">
          <a className="navbar-brand" href="/">
            <strong>{props.NavName}</strong>
            <div className="text-gray-s fs-8 d-none d-sm-block">
              {props.NavUnderheader}
            </div>
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
                        <a className="nav-link">{link[0]}</a>
                      </Link>
                    </li>
                  );
                } else {
                  return (
                    <li key={i} className="nav-item dropdown">
                      <a
                        className="nav-link dropdown-toggle"
                        href="#"
                        id="navbarDropdown"
                        role="button"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        {link[0]}
                      </a>
                      <div
                        className="dropdown-menu"
                        aria-labelledby="navbarDropdown"
                      >
                        {link[1].map((sub_link, i) => {
                          return (
                            <Link href={sub_link[1]}>
                              <a key={i} className="dropdown-item">
                                {sub_link[0]}
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
        </nav>
      </div>
    </div>
  </div>
);

export default Navbar;
