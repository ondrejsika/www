import React from "react";
import Head from "next/head";
import Gauges from "@app/common/components/Gauges";
import GoogleAnalytics from "@app/common/components/GoogleAnalytics";
import DevelopmentBar from "@app/common/components/DevelopmentBar";
import Navbar from "@app/ondrej-sika.cz/components/Navbar";
import Footer from "@app/ondrej-sika.cz/components/Footer";
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
        href="https://fonts.googleapis.com/css?family=Fira+Sans|Merriweather"
        rel="stylesheet"
      />
    </Head>
    <DevelopmentBar />
    <CoronaBar local_link={true} />
    <Navbar
      NavName="Ondřej Šika"
      NavUnderheader="Software {Engineer, Konzultant, Lektor}"
      links={[
        ["DOMŮ", "/"],
        [
          "KURZY",
          [
            ["GIT", "/skoleni/git"],
            ["GITLAB CI", "/skoleni/gitlab-ci"],
            ["DOCKER", "/skoleni/docker"],
            ["KUBERNETES", "/skoleni/kubernetes"],
            ["RANCHER", "/skoleni/rancher"],
            ["ANSIBLE", "/skoleni/ansible"],
            ["TERRAFORM", "/skoleni/terraform"],
            ["PROMETHEUS", "/skoleni/prometheus"],
            ["PROXMOX", "/skoleni/proxmox"],
            ["ELK / EFK", "/skoleni/elk"],
            ["REACT & NEXT.JS", "/skoleni/react"],
            ["VIDEOKURZY", "/videokurzy"]
          ]
        ],
        ["TERMÍNY", "/verejne-terminy"],
        [
          "NÁVODY & ČLÁNKY",
          [
            ["BLOG", "/blog"],
            ["NÁVODY (TECHNICKÉ)", "/navody"],
            ["ČLÁNKY (RŮZNÉ)", "/clanky"],
            ["REPOZITÁŘE", "/repozitare"],
            ["RESOURCES", "/resources"]
          ]
        ],
        ["KONTAKT", "/kontakt"]
      ]}
    />
    <div className="content">{props.children}</div>
    <Footer />
    <BootstrapJS />
    <Gauges gauges_site_id={props.site.gauges_site_id} />
    <GoogleAnalytics
      google_analytics_site_id={props.site.google_analytics_site_id}
    />
  </div>
);

export default Layout;
