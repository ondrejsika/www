import React from "react";
import Link from "next/link";

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
