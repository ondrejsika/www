import React from "react";
import App from "next/app";
import site from "@app/trainera.de/config";

// Imported CSS
import "@app/ondrej-sika.cz/css";

// const LanguageSwitch = <ThemeLanguageSwitch site={site} />;

class MyApp extends App {
  constructor(...args) {
    super(...args);
    this.site = site;
  }
  render() {
    const { Component, pageProps } = this.props;
    pageProps.site = this.site;
    return <Component lang={site.lang} {...pageProps} />;
  }
}

export default MyApp;
