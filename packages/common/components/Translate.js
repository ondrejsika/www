import React from "react";
const Translate = (props) => {
  return <>{props[props.lang] || (props.default && props[props.default])}</>;
};

export default Translate;
