import React from "react";
import styled, { css } from "styled-components";
import { Row, Col, Container } from "react-bootstrap";
import Newsletter from "@app/skoleni.io/components/Newsletter";

const Background = styled.div`
  background-color: #202020;
`;

const A = styled.a`
  color: white;
`;
const Wrapper = styled.div`
  /* padding: 1em 0; */
`;
const Content = styled.div`
  color: white;
`;

const Header = styled.h3`
  color: white;
  font-weight: bold;
  padding-top: 1em;
`;

const ColorfulBackground = styled.div`
  padding: 2em 0;
  ${props =>
    props.type == "secondary" &&
    css`
      background: ${props.site &&
        props.site.colors &&
        props.site.colors.SECONDARY} !important;
    `}
`;

const Footer = props => (
  <>
    <Background>
      <Container>
        <Wrapper>
          <Row>
            <Col xs={8}>
              <Header>Kontakty</Header>
              <Row>
                <Col>
                  <Content>
                    <h4>
                      <A href="/lektor/ondrejsika">Ondřej Šika</A>
                    </h4>
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
                    <h4>skoleni.io</h4>
                    <A href="skoleni@skoleni.io">skoleni@skoleni.io</A>
                    <br />
                    <A href="spoluprace@skoleni.io">spoluprace@skoleni.io</A>
                    <br />
                    <A href="dotazy@skoleni.io">dotazy@skoleni.io</A>
                  </Content>
                </Col>
              </Row>
            </Col>
            <Col>
              <ColorfulBackground site={props.site} type="secondary">
                <Newsletter
                  site={props.site}
                  header="Zajímají Vás novinky?"
                  text="Odebírejte můj newsletter a budete v obraze!"
                  btnText="Přihlásit se k odběru článků a novinek"
                />
              </ColorfulBackground>
            </Col>
          </Row>
        </Wrapper>
      </Container>
    </Background>
  </>
);

export default Footer;
