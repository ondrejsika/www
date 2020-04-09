import React from "react";
import Head from "next/head";

const Index = () => (
  <div>
    <Head>
      <title>SikaLabs</title>
    </Head>
    <h1>SikaLabs</h1>
    <h2>
      Training; Consulting;
      <br />
      DevOps; Development;
    </h2>
    <h3>Contact</h3>
    <a href="mailto:hello@sikalabs.com" className="button">
      hello@sikalabs.com
    </a>
  </div>
);

export default Index;
