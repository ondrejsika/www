import React from "react";
import App from "next/app";
import site from "@app/ondrej-sika.cz/config";
import Layout from "@app/ondrej-sika.cz/layouts/Layout";
import Head from "next/head";

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
      <>
        <Head>
          <link
            href="https://fonts.googleapis.com/css?family=IBM+Plex+Mono|IBM+Plex+Serif&display=swap"
            rel="stylesheet"
          />
        </Head>
        <Layout {...pageProps}>
          <Component lang={site.lang} {...pageProps} />
        </Layout>
      </>
    );
  }
}

export default MyApp;
