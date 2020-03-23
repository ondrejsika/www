import React from "react";
import styled from "styled-components";
import { Row, Col, Container } from "react-bootstrap";

const Background = styled.div`
  background-color: #202020;
`;

const A = styled.a`
  color: white;
`;
const Content = styled.div`
  color: white;
`;
const H3 = styled.h3`
  color: white;
  font-weight: bold;
`;
const H5 = styled.h5`
  color: white;
`;
const Wrapper = styled.div`
  padding: 1em;
`;
const Footer = () => (
  <>
    <Background>
      <Container>
        <Wrapper>
          <Row>
            <Col xs={8}>
              <H3>Kontakty</H3>
              <Row>
                <Col>
                  <Content>
                    <H5>Ondřej Šika</H5>
                    <A href="mailto: ondrej@ondrejsika.com">
                      ondrej@ondrejsika.com
                    </A>
                    <br />
                    <A href="https://ondrej-sika.cz">ondrej-sika.cz</A>
                    <br />
                    <A href="tel:+420773452376">+420 773 452 376</A>
                  </Content>
                </Col>
                <Col>
                  <Content>
                    <H5>Honza Pospisil</H5>
                    <A href="mailto: ondrej@ondrejsika.com">
                      ondrej@ondrejsika.com
                    </A>
                    <br />
                    <A href="https://ondrej-sika.cz">ondrej-sika.cz</A>
                    <br />
                    <A href="tel:+420773452376">+420 773 452 376</A>
                  </Content>
                </Col>
              </Row>
            </Col>
            <Col>
              <H3>skoleni.io</H3>
              <A href="skoleni@skoleni.io">skoleni@skoleni.io</A>
              <br />
              <A href="spoluprace@skoleni.io">spoluprace@skoleni.io</A>
              <br />
              <A href="dotazy@skoleni.io">dotazy@skoleni.io</A>
            </Col>
          </Row>
        </Wrapper>
      </Container>
    </Background>
  </>
);

export default Footer;
