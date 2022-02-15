import React from "react";

const MainBar = (props) => (
  <div>
    <div className="bar-grey">
      <div className="container pt-4 pb-4">
        <h1 className="text-white pt-3 pb-3">{props.header}</h1>
        <h3 className="text-white">{props.text}</h3>
        {props.children}
      </div>
    </div>
  </div>
);

export default MainBar;
