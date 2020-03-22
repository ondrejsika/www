import React from "react";
import App from "next/app";
import site from "../config";
import "bootstrap-css-only/css/bootstrap.min.css";

const Layout = props => <div>{props.children}</div>;

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    pageProps.site = site;
    return (
      <Layout {...pageProps}>
        <Component />
      </Layout>
    );
  }
}
export default MyApp;
