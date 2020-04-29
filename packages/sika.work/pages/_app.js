import React from "react";
import NextApp from "next/app";
import site from "../config";

import Layout from "../layouts/Layout";

class App extends NextApp {
  render() {
    const { Component, pageProps } = this.props;
    pageProps.site = site;
    return (
      <Layout {...pageProps}>
        <Component {...pageProps} />
      </Layout>
    );
  }
}

export default App;
