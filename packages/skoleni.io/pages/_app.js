import React from "react";
import App from "next/app";
import Head from "next/head";
import site from "../config";
import "bootstrap-css-only/css/bootstrap.min.css";
import { createGlobalStyle } from "styled-components";
import Footer from "../components/Footer";
import Navbar from "@app/skoleni.io/components/Navbar";

const GlobalStyle = createGlobalStyle`
  a, p  {
    font-family: 'IBM Plex Sans', sans-serif;
  }
  a {
    color: #131480;
  }
  a:hover {
    text-decoration: none;
    color: #C8BFB0;
  }
`;

const Layout = (props) => <div>{props.children}</div>;

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    pageProps.site = site;
    return (
      <>
        <Head>
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <link rel="icon" type="image/png" href="/icon.png" />
          <link
            href="https://fonts.googleapis.com/css?family=IBM+Plex+Mono|IBM+Plex+Sans&display=swap"
            rel="stylesheet"
          />
        </Head>
        <GlobalStyle />
        <Navbar />
        <Layout {...pageProps}>
          <Component {...pageProps} />
        </Layout>
        <Footer />
      </>
    );
  }
}
export default MyApp;
