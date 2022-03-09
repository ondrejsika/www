import React from "react";
import BaseUkraine from "save-ukraine";

const Ukraine = () => {
  return (
    <div
      ref={(element) => {
        if (element) {
          BaseUkraine.save({
            element: element,
            moreInfoUrl: `https://ukrajina.ondrejsika.com`
          });
        }
      }}
    />
  );
};

export default Ukraine;
