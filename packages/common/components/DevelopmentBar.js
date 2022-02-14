import React from "react";

export default () => {
  if (process.env.NODE_ENV == "development") {
    return (
      <div
        style={{
          backgroundColor: "red",
          height: "0.2em"
        }}
      ></div>
    );
  } else {
    return <></>;
  }
};
