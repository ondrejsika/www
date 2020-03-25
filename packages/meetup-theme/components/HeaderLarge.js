import React from "react";

const HeaderLarge = props => (
  <div className="container headerlarge">
    <div className="text-center">
      {props.logo && <img src={props.logo} width="200" />}
      <h1 className="mt-3 mb-5">{props.heading}</h1>
      <style jsx>{`
        .headerlarge h1 {
          font-size: 3em;
        }
      `}</style>
    </div>
  </div>
);

export default HeaderLarge;
