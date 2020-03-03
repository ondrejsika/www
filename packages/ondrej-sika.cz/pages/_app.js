import React from "react";
import App from "next/app";
import site from "@app/ondrej-sika.cz/config";
import head from "next/head";
import Layout from "@app/ondrej-sika.cz/layouts/Layout";

// Imported CSS
import "@app/ondrej-sika.cz/css";

class MyApp extends App {
  constructor(...args) {
    super(...args);
    this.site = site;
  }
  render() {
    const { Component, pageProps } = this.props;
    pageProps.site = this.site;
    return (
      <div>
        <head>
          <link
            href="https://fonts.googleapis.com/css?family=IBM+Plex+Mono:300&display=swap"
            rel="stylesheet"
          />
        </head>
        <Layout {...pageProps}>
          <Component lang={site.lang} {...pageProps} />
        </Layout>
      </div>
    );
  }
}

export default MyApp;
