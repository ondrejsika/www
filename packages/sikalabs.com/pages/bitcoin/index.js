import React from "react";
import Head from "next/head";

const BitcoinOrange = props => (
  <span style={{ color: "#FF9900" }}>{props.children}</span>
);

const Small = props => (
  <span style={{ fontSize: "0.7em" }}>{props.children}</span>
);

const Index = () => (
  <div>
    <Head>
      <title>SikaLabsBitcoin</title>
    </Head>
    <h1>
      SikaLabs
      <br />
      <Small>
        <BitcoinOrange>Bitcoin</BitcoinOrange>
      </Small>
    </h1>
    <h2>
      We&apos;re your <BitcoinOrange>Bitcoin</BitcoinOrange>
      <br /> infrastructure operators
    </h2>
    <h3>Contact</h3>
    <a href="mailto:bitcoin@sikalabs.com" className="button button-bitcoin">
      bitcoin@sikalabs.com
    </a>
  </div>
);

export default Index;
