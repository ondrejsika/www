import React from "react";
import Layout from "@app/bootstrap-theme/layouts/Layout";

const Page = (props) => (
  <Layout>
    <div className="container">
      <p>
        <strong>ccc.oxs.cz</strong>
      </p>
      {props.children}
      <p className="mt-5">
        <strong>ccc.oxs.cz</strong> - 2019 (c){" "}
        <a href="https://ondrejsika.com">Ondrej Sika</a>
      </p>
    </div>
  </Layout>
);

export default Page;
