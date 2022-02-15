import React from "react";
import Container from "@themes/zuzjes/components/Container";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    font-size: 1.5em;
  }
`;

const Layout = (props) => (
  <>
    <GlobalStyle />
    <Container>{props.children}</Container>
  </>
);
export default Layout;
