import React from "react";
import { Layout as ThemeLayout } from "@app/bootstrap-theme/layouts/Layout";

let Layout = (props) => (
  <ThemeLayout>
    <div className="container">
      <h1>Simple Bootrstap Web</h1>
      {props.children}
      <p>2019 (c) Simple Bootstrap Web</p>
    </div>
  </ThemeLayout>
);

export default Layout;
