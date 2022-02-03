import React from "react";
import Head from "next/head";
import Image from "next/image";
import styled from "styled-components";
import logo from "../data/images/logos/devopsaci_linkedin.jpg";

const CenterOuter = styled.div`
  width: 100%;
  height: 100%;
  display: table;
  text-align: center;
`;

const CenterInner = styled.div`
  display: table-cell;
  vertical-align: middle;
`;

const DummyLoader = ({ src }) => {
  return `${src}`;
};

const Page = () => (
  <>
    <style global jsx>{`
      html,
      body,
      div#__next {
        height: 100%;
        background: #100146;
      }
    `}</style>
    <Head>
      <title>Devopsaci.cz</title>
    </Head>
    <CenterOuter>
      <CenterInner>
        <Image src={logo} loader={DummyLoader} />
      </CenterInner>
    </CenterOuter>
    <div
      style={{
        position: "fixed",
        bottom: "0px",
        right: "2rem",
        backgroundColor: "#100146",
        border: "2px solid white",
        color: "white",
        padding: "0.2rem 0.5rem",
        borderBottom: "0px"
      }}
    >
      by{" "}
      <a
        href="https://sika.io"
        style={{
          color: "white",
          fontWeight: "bold"
        }}
      >
        Ondrej Sika
      </a>
    </div>
  </>
);
export default Page;
