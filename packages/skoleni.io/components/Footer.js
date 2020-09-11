import React from "react";
import styled from "styled-components";
import { Row, Col, Container } from "react-bootstrap";
import Newsletter from "@app/skoleni.io/components/Newsletter";
import H3 from "@app/skoleni.io/components/H3";

const A = styled.a`
  color: white !important;
  text-decoration: underline;
`;

const Content = styled.div`
  color: white;
  padding-bottom: 10px;
`;

const Bg = styled.div`
  background-color: black;
  padding-top: 1.5em;
`;

const H3l = styled(H3)`
  text-transform: none;
`;

const Footer = props => (
  <Bg>
    <Container className="pb-5">
      <Row>
        <Col md={4}>
          <Content>
            <H3>skoleni.io</H3>
            <A href="mailto:skoleni@skoleni.io">skoleni@skoleni.io</A> (poptávka
            školení)
            <br />
            <A href="mailto:spoluprace@skoleni.io">
              spoluprace@skoleni.io
            </A>{" "}
            (pro lektory)
          </Content>
        </Col>
        <Col md={4}>
          <Content>
            <H3l>Ondřej Šika</H3l>
            <A href="mailto:ondrej@sika.io">ondrej@sika.io</A>
            <br />
            <A href="https://sika.io">sika.io</A>
          </Content>
        </Col>
        <Col md={4}>
          <Content>
            <Newsletter
              site={props.site}
              header="Novinky"
              text="Odebírejte náš newsletter a budete v obraze!"
              btnText="Přihlásit se k odběru novinek"
            />
          </Content>
        </Col>
      </Row>
    </Container>
  </Bg>
);

export default Footer;
