import React from "react";

const TextFrameWithImage = props => (
  <div className="card p-3 mb-4">
    <h3>{props.header}</h3>
    <div className="d-flex row">
      <div className="col-lg-12 pb-4">
        <div className="row">
          <div className="col-lg-10 col-md-12 pr-5">
            <p className="align-middle">{props.children}</p>
          </div>
          <div className="col-2 d-none d-lg-block">
            <img src={props.imgUrl} className="img-fluid rounded-circle" />
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default TextFrameWithImage;
