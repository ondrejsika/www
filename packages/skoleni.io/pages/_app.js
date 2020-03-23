import React from "react";
import App from "next/app";
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
        <GlobalStyle />
        <Container>
          <Navbar />
        </Container>
        <Layout {...pageProps}>
          <Component />
        </Layout>
        <Footer />
      </>
    );
  }
}
export default MyApp;
