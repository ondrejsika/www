import React from "react";

export default (props) => {
  return props.links.map((link, i) => {
    let name = link[0];
    let url = link[1];
    return (
      <p key={i}>
        <a
          className="btn btn-outline-primary btn-block text-left"
          target="_blank"
          rel="noopener noreferrer"
          href={url}
        >
          {name}
        </a>
      </p>
    );
  });
};
