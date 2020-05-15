import React from "react";
import Document, { Head, Main, NextScript } from "next/document";
import { ServerStyleSheet, createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  p, a, li {
  font-weight: 200 !important;
  }
`;

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    const sheet = new ServerStyleSheet();
    const page = renderPage(App => props =>
      sheet.collectStyles(<App {...props} />)
    );
    const styleTags = sheet.getStyleElement();
    return { ...page, styleTags };
  }

  render() {
    return (
      <html lang="en">
        <Head>{this.props.styleTags}</Head>
        <body>
          <GlobalStyle />
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
