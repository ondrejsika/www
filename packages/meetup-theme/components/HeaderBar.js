import React from "react";

export default (props) => (
  <div className="container headerbar text-right monospace">
    <h3>
      Project of{" "}
      <a
        href={`https://sika.io/?utm_source=landingpage&utm_medium=meetups&utm_campaign=${props.site_name}&utm_content=header`}
      >
        Ondrej Sika
      </a>{" "}
      and{" "}
      <a
        href={`https://trainera.io/?utm_source=landingpage&utm_medium=meetups&utm_campaign=${props.site_name}&utm_content=header`}
      >
        Trainera
      </a>
    </h3>
    <style jsx>{`
      .headerbar h3 {
        font-size: 12px;
      }
    `}</style>
  </div>
);
