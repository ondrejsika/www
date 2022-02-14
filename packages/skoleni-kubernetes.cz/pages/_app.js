import React from "react";
import App from "next/app";
import site from "../config";

// Imported CSS
import "../css";

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    pageProps.site = site;
    return <Component {...pageProps} />;
  }
}

export default MyApp;
