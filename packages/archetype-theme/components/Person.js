import React from "react";

const Person = props => (
  <div>
    <img src={props.imgSrc.src} />
    <h2>{props.name}</h2>
    <p>{props.bio}</p>
  </div>
);

export default Person;
