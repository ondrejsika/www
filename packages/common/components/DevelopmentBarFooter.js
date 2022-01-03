import React from "react";

export default () => {
  if (process.env.NODE_ENV == "development") {
    return (
      <div
        className="p-1"
        style={{
          border: "0.2em solid red"
        }}
      >
        <center>
          <a href="/api/version.json">/api/version.json</a>
        </center>
      </div>
    );
  } else {
    return <></>;
  }
};
