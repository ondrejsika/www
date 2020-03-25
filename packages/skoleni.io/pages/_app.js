import React from "react";
import App from "next/app";
import Head from "next/head";
import site from "../config";
import "bootstrap-css-only/css/bootstrap.min.css";
import { createGlobalStyle } from "styled-components";

import Navbar from "../components/Navbar";
import Container from "react-bootstrap/Container";
import Footer from "../components/Footer";

const GlobalStyle = createGlobalStyle`
  a, p  {
    font-family: 'IBM Plex Sans', sans-serif;
  }
`;

const Layout = props => <div>{props.children}</div>;

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
        <Container>
          <Navbar />
        </Container>
        <Layout {...pageProps}>
          <Component {...pageProps} />
        </Layout>
        <Footer />
      </>
    );
  }
}
export default MyApp;
