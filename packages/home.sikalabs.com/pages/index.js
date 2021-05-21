import React from "react";
import Head from "next/head";
import Links from "@app/ccc.oxs.cz/components/Links";

const Page = () => (
  <div>
    <Head>
      <title>home.sikalabs.com</title>
    </Head>
    <h1>SikaLabs Home Page</h1>
    <div className="row">
      <div className="col-md-4">
        <h2>Main Links</h2>
        <Links
          links={[
            ["Gitlab (gitlab.sikahq.com)", "https://gitlab.sikahq.com"],
            ["Pipedrive", "https://sika.pipedrive.com"]
          ]}
        />
      </div>
      <div className="col-md-4"></div>
      <div className="col-md-4"></div>
    </div>
  </div>
);

export default Page;
