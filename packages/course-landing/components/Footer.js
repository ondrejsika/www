import React from "react";
import Link from "next/link";

let style = {
  fontSize: "0.8em",
  margin: "0"
};

const Footer = props => (
  <div>
    <div className="container-fluid bg">
      <div className="container">
        <div className="text-center p-no-bottom pt-3 pb-3 text-white">
          {props.children}
          <p style={style}>
            Website by{" "}
            <Link href="https://zuzjes.com">
              <a className="text-white">
                <strong>Zuzana Jeschke</strong>
              </a>
            </Link>
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default Footer;
