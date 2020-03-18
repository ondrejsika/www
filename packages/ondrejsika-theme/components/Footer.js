import React from "react";

const Footer = props => (
  <div>
    <div className="footer mt-5">
      <div className="container pt-4 pb-4">
        <div className="row">
          <div className="col-md-4 col-sm-7 col-8 ">{props.firstColumn}</div>
          <div className="col-md-4 col-sm-5 col-4">{props.secondColumn}</div>
          <div className="col-md-4 col-sm-12 ">{props.thirdColumn}</div>
        </div>
        <p className="text-center">{props.center}</p>
        <p className="text-center text-white fs-9 pt-4">
          Website by{" "}
          <a
            href="https://zuzjes.com"
            target="_blank"
            rel="noopener noreferrer"
            className="fs-11 text a-underline text-white"
          >
            Zuzana Jeschke
          </a>
        </p>
      </div>
    </div>
  </div>
);

export default Footer;
