import React from "react";
import Link from "next/link";

const Header = (props) => (
  <div>
    <div className="container-fluid header-container">
      <div className="header mt-0">
        <div className={props.wide ? "container" : "container container-width"}>
          <div className="row">
            <div className="col-md-9 ">
              <div className="header-inner">
                <span className="site-header">
                  <Link href="/">
                    <a>
                      <h1 className="mb-0">{props.websiteHeader}</h1>
                    </a>
                  </Link>
                </span>
                <p>
                  by{" "}
                  <Link href={props.byUrl}>
                    <a>
                      <b>{props.byName}</b>
                    </a>
                  </Link>
                </p>
                {props.children}
              </div>
            </div>
            <div className="col-md-3 ">
              <img
                src={props.logoUrl.src}
                className="img-responsive d-none d-lg-block"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Header;
