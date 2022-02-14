import React from "react";

const Bar = props => (
  <div>
    <div className="container-fluid header-container">
      <div className="header mt-0">
        <div className="container container-width">{props.children}</div>
      </div>
    </div>
  </div>
);

export default Bar;
