import React from "react";
import Container from "react-bootstrap/Container";

const Layout = (props) => (
  <Container className="pt-5 pb-5">{props.children}</Container>
);
export default Layout;
