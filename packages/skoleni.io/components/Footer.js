import React from "react";
import styled from "styled-components";
import { Row, Col, Container } from "react-bootstrap";
import Newsletter from "@app/skoleni.io/components/Newsletter";
import H3 from "@app/skoleni.io/components/H3";

const A = styled.a`
  color: white !important;
`;

const Content = styled.div`
  color: white;
  padding-bottom: 10px;
`;

const Block = styled.div`
  background-color: rgb(19, 20, 128);
  padding-top: 1.5em;
`;

const H3l = styled(H3)`
  text-transform: none;
`;

const Triangle = styled.div`
  width: 100%;
  height: 100px;
  background: #131480;
  clip-path: polygon(0 100%, 100% 0, 100% 100%);
  margin-bottom: -1px;
`;

const Footer = props => (
  <>
    <Triangle />
    <Block>
      <Container className="pb-5">
        <Row>
          <Col md={4}>
            <Content>
              <H3>skoleni.io</H3>
              <A href="mailto:skoleni@skoleni.io">skoleni@skoleni.io</A>
              <br />
              <A href="mailto:spoluprace@skoleni.io">spoluprace@skoleni.io</A>
            </Content>
          </Col>
          <Col md={4}>
            <Content>
              <H3l>Ondřej Šika</H3l>
              <A href="mailto:ondrej@sika.io">ondrej@sika.io</A>
              <br />
              <A href="https://ondej-sika.cz">ondej-sika.cz</A>
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
    </Block>
  </>
);

export default Footer;
