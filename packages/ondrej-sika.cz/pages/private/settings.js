import React from "react";
import Head from "next/head";

import { useCookie } from "@app/common/components/AustraliaOnFireBar/useCookie";

let Bar = props => (
  <div style={{ backgroundColor: props.color, padding: "15px", width: 100 }}>
    {props.children}
  </div>
);

export default () => {
  const [hideBar, setHideBar] = useCookie("AustraliaFiresBarhideBar");

  return (
    <div className="container">
      <Head>
        <title>Website Settings - Ondřej Šika</title>
      </Head>
      <h1>Website Settings</h1>
      <h2>Australia Fires Bar</h2>
      {hideBar ? (
        <Bar color="lightgray">off</Bar>
      ) : (
        <Bar color="lightgreen">on</Bar>
      )}
      <a href="#" onClick={() => setHideBar(true)}>
        hide
      </a>
      {` `}
      <a href="#" onClick={() => setHideBar("")}>
        show
      </a>
    </div>
  );
};
