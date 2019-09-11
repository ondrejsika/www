import Head from "next/head";
import React from "react";
import Gauges from "@app/common/components/Gauges";
import GoogleAnalytics from "@app/common/components/GoogleAnalytics";
import DevelopmentBar from "@app/common/components/DevelopmentBar";
import Navbar from "@app/sika-kaplan.com/components/Navbar";
import Footer from "@app/sika-kaplan.com/components/Footer";
import BootstrapJS from "@app/common/components/BootstrapJS";

// Imported CSS
import "@app/sika-kaplan.com/css";

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
      NavName="Sika Kaplan"
      NavUnderheader="We are your DevOps partner"
      links={[]}
      // links={[
      //   ["DOMŮ", "/"],
      //   [
      //     "KURZY",
      //     [
      //       ["GIT", "/skoleni/git"],
      //       ["GITLAB CI", "/skoleni/gitlab-ci"],
      //       ["DOCKER", "/skoleni/docker"],
      //       ["KUBERNETES", "/skoleni/kubernetes"],
      //       ["ANSIBLE", "/skoleni/ansible"],
      //       ["TERRAFORM", "/skoleni/terraform"],
      //       ["REACT & NEXT.JS", "/skoleni/react"]
      //     ]
      //   ],
      //   ["TERMÍNY", "/verejne-terminy"],
      //   [
      //     "NÁVODY & ČLÁNKY",
      //     [
      //       ["BLOG", "/blog"],
      //       ["NÁVODY", "/navody"],
      //       ["ČLÁNKY", "/clanky"],
      //       ["REPOZITÁŘE", "/repozitare"]
      //     ]
      //   ],
      //   ["KONTAKT", "/kontakt"]
      // ]}
    />
    <div className="content">{props.children}</div>
    {/* <Footer /> */}
    <BootstrapJS />
    <Gauges gauges_site_id={props.site.gauges_site_id} />
    <GoogleAnalytics
      google_analytics_site_id={props.site.google_analytics_site_id}
    />
  </div>
);
