import Head from "next/head";
import React from "react";
import Gauges from "@app/common/components/Gauges";
import GoogleAnalytics from "@app/common/components/GoogleAnalytics";
import DevelopmentBar from "@app/common/components/DevelopmentBar";
import Navbar from "@app/ondrej-sika.cz/components/Navbar";
import Footer from "@app/sika-kraml.de/components/Footer";
import BootstrapJS from "@app/common/components/BootstrapJS";
import Newsletter from "@app/sika-kraml.de/components/Newsletter";
import linkedin from "@app/data/pictures/social-networks/linkedin.svg";
import twitter from "@app/data/pictures/social-networks/twitter.svg";
import facebook from "@app/data/pictures/social-networks/facebook.svg";
import github from "@app/data/pictures/social-networks/github.svg";
import instagram from "@app/data/pictures/social-networks/instagram.svg";
import xing from "@app/data/pictures/social-networks/xing.svg";

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
      NavName="SIKA KRAML"
      NavUnderheader=""
      links={[
        ["HOME", "/"],
        [
          "SCHULUNG",
          [
            ["GIT", "/schulung/git"],
            ["GITLAB CI", "/schulung/gitlab-ci"],
            ["DOCKER", "/schulung/docker"],
            ["KUBERNETES", "/schulung/kubernetes"],
            ["ANSIBLE", "/schulung/ansible"]
          ]
        ],
        ["TERMINE", "/dates"],
        ["KONTAKT", "/kontakt"]
      ]}
    />
    <div className="content">{props.children}</div>
    <Newsletter NewsletterBtn="Subscribe" />
    <Footer
      linkedinImg={linkedin}
      facebookImg={facebook}
      instagramImg={instagram}
      githubImg={github}
      twitterImg={twitter}
      xingImg={xing}
      lecture_links={[
        ["Docker", "/schulung/docker"],
        ["Git", "/schulung/git"],
        ["Kubernetes", "/schulung/kubernetes"],
        ["Gitlab-CI", "/schulung/gitlab-ci"],
        ["Ansible", "/schulung/ansible"]
      ]}
      job_links={[]}
    />
    <BootstrapJS />
    <Gauges gauges_site_id={props.site.gauges_site_id} />
    <GoogleAnalytics
      google_analytics_site_id={props.site.google_analytics_site_id}
    />
  </div>
);
