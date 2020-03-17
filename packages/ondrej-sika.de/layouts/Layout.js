import Head from "next/head";
import React from "react";
import Gauges from "@app/common/components/Gauges";
import GoogleAnalytics from "@app/common/components/GoogleAnalytics";
import DevelopmentBar from "@app/common/components/DevelopmentBar";
import Navbar from "@app/ondrejsika-theme/components/Navbar";
import Footer from "@app/ondrej-sika.uk/components/Footer";
import BootstrapJS from "@app/common/components/BootstrapJS";

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
      NavName="Ondrej Sika 🇩🇪"
      NavUnderheader="Software {Engineer, Consultant, Lecturer}"
      links={[
        ["HOME", "/"],
        [
          "TRAINING",
          "#my-training"
          // [
          //   ["GIT", "/training/git"],
          //   ["GITLAB CI", "/training/gitlab-ci"],
          //   ["DOCKER", "/training/docker"],
          //   ["KUBERNETES", "/training/kubernetes"],
          //   ["ANSIBLE", "/training/ansible"],
          //   ["REACT & NEXT.JS", "/training/react"]
          // ]
        ],
        ["SESSIONS", "#upcomming"],
        // [
        //   "TUTORIALS & ARTICLES",
        //   [
        //     // ["BLOG", "/blog"],
        //     ["TUTORIALS", "/tutorials"],
        //     ["ARTICLES", "/articles"],
        //     ["REPOSITORIES", "/repositories"]
        //   ]
        // ],
        ["CONTACT ME", "#contact"]
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
