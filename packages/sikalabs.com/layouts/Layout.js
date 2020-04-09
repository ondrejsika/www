import React from "react";
import Head from "next/head";
import Gauges from "@app/common/components/Gauges";

const Layout = props => (
  <>
    <Head>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="icon" type="image/png" href="/icon.png" />
      <link
        href="https://fonts.googleapis.com/css?family=IBM+Plex+Mono|IBM+Plex+Sans&display=swap"
        rel="stylesheet"
      />
    </Head>
    {props.children}
    <style jsx global>{`
      * {
        font-family: "IBM Plex Sans";
        background: #131480;
        color: white;
      }
      body {
        margin: 2em 2.5em;
      }
      h1,
      h2 {
        font-family: "IBM Plex Mono", monospace;
      }
      h1 {
        font-size: 2em;
        font-weight: normal;
      }
      h2 {
        font-size: 5em;
        font-weight: bold;
      }
      @media only screen and (max-width: 600px) {
        h1 {
          font-size: 1.3em;
        }
        h2 {
          font-size: 2em;
          font-weight: bold;
        }
      }
    `}</style>
    <Gauges gauges_site_id={props.site.gauges_site_id} />
  </>
);

export default Layout;
