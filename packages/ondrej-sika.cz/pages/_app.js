import Head from "next/head";
import React from "react";
import App, { Container } from "next/app";
import Gauges from "@app/common/components/Gauges";
import GoogleAnalytics from "@app/common/components/GoogleAnalytics";

import Navbar from "@app/ondrej-sika.cz/components/Navbar";
import Footer from "@app/ondrej-sika.cz/components/Footer";
import BootstrapJS from "@app/common/components/BootstrapJS";

import site from "@app/ondrej-sika.cz/config";

// Imported CSS
import "@app/ondrej-sika.cz/css";

let DevelopmentBar = () => {
  if (process.env.NODE_ENV == "development") {
    return (
      <div
        style={{
          backgroundColor: "red",
          height: "0.2em"
        }}
      ></div>
    );
  } else {
    return <></>;
  }
};

class MyApp extends App {
  constructor(...args) {
    super(...args);
    this.site = site;
  }
  render() {
    const { Component, pageProps } = this.props;

    return (
      <Container>
        <Head>
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <link
            href="https://fonts.googleapis.com/css?family=Fira+Sans|Merriweather"
            rel="stylesheet"
          />
        </Head>
        <DevelopmentBar />
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
                ["ANSIBLE", "/skoleni/ansible"],
                ["REACT & NEXT.JS", "/skoleni/react"]
              ]
            ],
            ["TERMÍNY", "/verejne-terminy"],
            [
              "NÁVODY & ČLÁNKY",
              [
                ["BLOG", "/blog"],
                ["NÁVODY", "/navody"],
                ["ČLÁNKY", "/clanky"],
                ["REPOZITÁŘE", "/repozitare"]
              ]
            ],
            ["KONTAKT", "/kontakt"]
          ]}
        />
        <div className="content">
          <Component {...pageProps} />
        </div>
        <Footer
          col1_name="Ondřej Šika"
          col1_mail="ondrej@ondrejsika.com"
          col1_phone="+420 773 452 376"
          col4_NewsHeader="Zajímají Vás novinky?"
          col4_NewsText="Odebírejte můj newsletter a budete v obraze!"
          NewsletterBtn="Odebírat"
        ></Footer>
        <BootstrapJS />
        <Gauges gauges_site_id={this.site.gauges_site_id} />
        <GoogleAnalytics
          google_analytics_site_id={this.site.google_analytics_site_id}
        />
      </Container>
    );
  }
}

export default MyApp;
