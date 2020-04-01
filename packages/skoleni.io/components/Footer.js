import React from "react";
import styled from "styled-components";
import { Row, Col, Container } from "react-bootstrap";
import Newsletter from "@app/skoleni.io/components/Newsletter";
import H3 from "@app/skoleni.io/components/H3";

const A = styled.a`
  color: white;
`;
const Wrapper = styled.div`
  border-top: 1px solid black;
  margin-top: 2em;
`;

const Content = styled.div`
  padding: 3em 0;
  color: white;
`;

const Bg = styled.div`
  background-color: black;
`;

const Footer = props => (
  <>
    <Bg>
      <Container>
        <Wrapper>
          <Row>
            <Col md={6}>
              <Content>
                <H3>skoleni.io</H3>
                <A href="skoleni@skoleni.io">skoleni@skoleni.io</A>
                <br />
                <A href="spoluprace@skoleni.io">spoluprace@skoleni.io</A>
                <br />
                <A href="dotazy@skoleni.io">dotazy@skoleni.io</A>
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
        </Wrapper>
      </Container>
    </Bg>
  </>
);

export default Footer;
