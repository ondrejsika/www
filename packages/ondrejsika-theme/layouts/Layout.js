import React from "react";
import Head from "next/head";
import Gauges from "@app/common/components/Gauges";
import GoogleAnalytics from "@app/common/components/GoogleAnalytics";
import DevelopmentBar from "@app/common/components/DevelopmentBar";
import BootstrapJS from "@app/common/components/BootstrapJS";
import CoronaBar from "@app/common/components/CoronaBar";

// Imported CSS
import "@app/ondrej-sika.cz/css";

let Layout = props => (
  <div>
    <Head>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="icon" type="image/png" href="/icon.png" />
      <link
        href="https://fonts.googleapis.com/css?family=IBM+Plex+Mono|IBM+Plex+Sans&display=swap"
        rel="stylesheet"
      />
    </Head>
    <DevelopmentBar />
    <CoronaBar local_link={true} />
    {props.LanguageSwitch}
    {props.Navbar}
    <div className="content">{props.children}</div>
    {props.Footer}
    <BootstrapJS />
    <Gauges gauges_site_id={props.site.gauges_site_id} />
    <GoogleAnalytics
      google_analytics_site_id={props.site.google_analytics_site_id}
    />
  </div>
);

export default Layout;
