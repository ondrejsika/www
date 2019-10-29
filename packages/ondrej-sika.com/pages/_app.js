import site from "@app/ondrej-sika.com/config";
import Layout from "@app/ondrej-sika.com/layouts/Layout";
// Imported CSS
import "@app/ondrej-sika.cz/css";
import App from "next/app";

class MyApp extends App {
  constructor(...args) {
    super(...args);
    this.site = site;
  }
  render() {
    const { Component, pageProps } = this.props;
    pageProps.site = this.site;
    return (
      <Layout {...pageProps}>
        <Component lang={site.lang} {...pageProps} />
      </Layout>
    );
  }
}

export default MyApp;
