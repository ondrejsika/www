import React from "react";
import App from "next/app";
import site from "../config";

// Imported CSS
import "bootstrap-css-only/css/bootstrap.min.css";
import "../css/index.sass";

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    pageProps.site = site;
    return <Component {...pageProps} />;
  }
}

export default MyApp;
