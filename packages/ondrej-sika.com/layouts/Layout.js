import Head from "next/head";
import React from "react";
import Gauges from "@app/common/components/Gauges";
import GoogleAnalytics from "@app/common/components/GoogleAnalytics";
import DevelopmentBar from "@app/common/components/DevelopmentBar";
import Navbar from "@app/ondrej-sika.cz/components/Navbar";
import FooterOndrejSikaCom from "@app/ondrej-sika.com/components/FooterOndrejSikaCom";
import BootstrapJS from "@app/common/components/BootstrapJS";

// Imported CSS
import "@app/ondrej-sika.cz/css";

export default props => (
  <div>
    <Head>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link
        href="https://fonts.googleapis.com/css?family=Fira+Sans|Merriweather"
        rel="stylesheet"
      />
    </Head>
    <DevelopmentBar />
    <Navbar
      NavName="Ondrej Sika"
      NavUnderheader="Software {Engineer, Consultant, Lecturer}"
      links={[
        ["HOME", "/"],
        [
          "TRAINING",
          [
            ["GIT", "/training/git"],
            ["GITLAB CI", "/training/gitlab-ci"],
            ["DOCKER", "/training/docker"],
            ["KUBERNETES", "/training/kubernetes"],
            ["ANSIBLE", "/training/ansible"]
            // ["TERRAFORM", "/training/terraform"],
            // ["REACT & NEXT.JS", "/training/react"]
          ]
        ],
        ["UPCOMING SESSIONS", "/upcoming-sessions"],
        // [
        //   "TUTORIALS & ARTICLES",
        //   [
        //     // ["BLOG", "/blog"],
        //     ["TUTORIALS", "/tutorials"],
        //     ["ARTICLES", "/articles"],
        //     ["REPOSITORIES", "/repozitare"]
        //   ]
        // ],
        ["CONTACT", "/contact"]
      ]}
    />
    <div className="content">{props.children}</div>
    <FooterOndrejSikaCom />
    <BootstrapJS />
    <Gauges gauges_site_id={props.site.gauges_site_id} />
    <GoogleAnalytics
      google_analytics_site_id={props.site.google_analytics_site_id}
    />
  </div>
);
