import React from "react";
import styled from "styled-components";
import { Row, Col, Container } from "react-bootstrap";
import Newsletter from "@app/skoleni.io/components/Newsletter";
import H3 from "@app/skoleni.io/components/H3";
import Link from "next/link";

const A = styled.a`
  color: white !important;
`;

const Content = styled.div`
  padding: 3em 0;
  color: white;
`;

const Bg = styled.div`
  background-color: black;
  padding-top: 1.5em;
`;

const Footer = props => (
  <Bg>
    <Container>
      <Row>
        <Col md={6}>
          <Content>
            <H3>skoleni.io</H3>
            <Link href="skoleni@skoleni.io">
              <A href="skoleni@skoleni.io">skoleni@skoleni.io</A>
            </Link>
            <br />
            <Link href="spoluprace@skoleni.io">
              <A href="spoluprace@skoleni.io">spoluprace@skoleni.io</A>
            </Link>
            <br />
            <Link href="dotazy@skoleni.io">
              <A href="dotazy@skoleni.io">dotazy@skoleni.io</A>
            </Link>
          </Content>
        </Col>
        <Col md={6}>
          <Newsletter
            site={props.site}
            header="Zajímají Vás novinky?"
            text="Odebírejte můj newsletter a budete v obraze!"
            btnText="Přihlásit se k odběru článků a novinek"
          />
        </Col>
      </Row>
    </Container>
  </Bg>
);

export default Footer;
