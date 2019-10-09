import App, { Container } from "next/app";
import site from "@app/ondrej-sika.cz/config";

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
      <Container>
        <Layout {...pageProps}>
          <Component lang={site.lang} {...pageProps} />
        </Layout>
      </Container>
    );
  }
}

export default MyApp;
