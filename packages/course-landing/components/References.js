import React from "react";

const References = props => (
  <>
    <p>{props.reference}</p>
    <div className="row">
      <div className="col-4">
        <img
          src={props.imgRefer}
          className="img-fluid rounded-circle"
          alt=""
          width={props.maxImgSize}
        />
      </div>
      <div className="col-8">
        <p>
          <strong>{props.nameRefer}</strong>
        </p>
        <p className="company">{props.position}</p>
      </div>
    </div>
  </>
);

export default References;
