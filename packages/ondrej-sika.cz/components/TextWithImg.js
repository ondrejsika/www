import React from "react";

import facebookhex from "@app/data/pictures/social-networks/fb-hex.svg";
import instagramhex from "@app/data/pictures/social-networks/instagram-hex.svg";
import linkedinhex from "@app/data/pictures/social-networks/linkedin-hex.svg";
import twitterhex from "@app/data/pictures/social-networks/twitter-hex.svg";
import githubhex from "@app/data/pictures/social-networks/github-hex.svg";
import mailhex from "@app/data/pictures/social-networks/mail-hex.svg";
import ond from "@app/data/pictures/lecturers/ondrejsika/ondrejsika4x_steave_vertical.jpg";

const TextWithImg = props => (
  <div>
    <h2 className="pt-4 pb-2" id="about-me">
      {props.TextWithImgHeader}
    </h2>
    <div className="row">
      <div className="col-lg-7 col-md-12">
        <p>{props.children}</p>
      </div>
      <div className="col-lg-4 col-md-6 col-sm-9 col-9">
        <img src={ond} className="img-fluid img-size-90" />
      </div>
      <div className="col-1">
        <a href="https://www.linkedin.com/in/ondrejsika/">
          <img src={linkedinhex} />
        </a>
        <a href="https://twitter.com/ondrejsika">
          <img src={twitterhex} />
        </a>
        <a href="https://www.instagram.com/ondrejsika/">
          <img src={instagramhex} />
        </a>
        <a href="https://www.facebook.com/sikaondrej">
          <img src={facebookhex} />
        </a>
        <a href="https://github.com/ondrejsika">
          <img src={githubhex} />
        </a>
        <a href="mailto:ondrej@sika.io">
          <img src={mailhex} />
        </a>
      </div>
    </div>
  </div>
);

export default TextWithImg;
