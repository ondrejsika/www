import React from "react";

const TextWithImg = props => (
  <div>
    <h2 className="pt-4 pb-2" id="about-me">
      {props.TextWithImgHeader}
    </h2>
    <div className="row">
      <div className="col-lg-8 col-md-12">
        <p>{props.children}</p>
      </div>
      <div className="col-lg-4 col-md-6 col-sm-9 col-9">
        <img src={props.image} className="img-fluid img-size-90" />
      </div>
    </div>
  </div>
);

export default TextWithImg;
