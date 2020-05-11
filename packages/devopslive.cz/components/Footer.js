import React from "react";
import { Container } from "react-bootstrap";
import styled from "styled-components";
import devops from "@app/data/pictures/devops/devops_blue.svg";
import { Col, Row } from "react-bootstrap";
import H3 from "./H3";
import MyLink from "./MyLink";
const Wrapper = styled.div`
  margin: 1em;
`;

const Brand = styled.div`
  display: inline-block;
  margin: 1rem 1rem 1rem 0;
  font-size: 1.25rem;
  line-height: inherit;
  white-space: nowrap;
`;

const Img = styled.img`
  height: 20px;
  padding-left: 2px;
  padding-bottom: 3px;
`;

const Devops = styled.h1`
  color: #131480 !important;
  display: inherit;
  vertical-align: middle;
  padding-left: 0.2em;
  font-weight: bold;
  font-size: 1.5em;
`;

const A = styled(MyLink)`
  /* color: #c8bfb0 !important; */
  color: red !important;

  font-weight: bold;
`;

const Footer = () => (
  <Container>
    <Wrapper>
      <Row>
        <Col md={4}>
          <Brand>
            <Img src={devops} className=""></Img>
            <Devops>DEVOPSLIVE</Devops>
          </Brand>
          <br />
          <p>K odberu novinkam ohledne Devops se prihlaste zde</p>
          <button>Prihlaste se zde</button>
        </Col>
        <Col md={4}>
          <H3>Ondrej Sika</H3>
          <A href="mailto:ondrej@sika.io">ondrej@sika.io</A>
          <br />
          <A href="tel:+420773452376">+420 773 452 376</A>
          <table className="contact-table table-borderless">
            <tbody>
              <tr>
                <td>IČ:</td>
                <td>88114163</td>
              </tr>
              <tr>
                <td>DIČ:</td>
                <td>CZ9302252102</td>
              </tr>
              <tr>
                <td>Účet:&nbsp;&nbsp;&nbsp;</td>
                <td>2301432033/2010</td>
              </tr>
            </tbody>
          </table>
        </Col>
        <Col md={4}>
          <H3>Nejoblibenejsi kurzy</H3>
          <ul>
            <li>
              <A href="https://ondrej-sika.cz/skoleni/docker">Docker</A>
            </li>
            <li>
              <A href="https://ondrej-sika.cz/skoleni/kubernetes">Kubernetes</A>
            </li>
            <li>
              <A href="https://ondrej-sika.cz/skoleni/gitlab-ci">Gitlab CI</A>
            </li>
            <li>
              <A href="https://ondrej-sika.cz/skoleni/terraform">Terraform</A>
            </li>
            <li>
              <A href="https://ondrej-sika.cz/skoleni/prometheus">Prometheus</A>
            </li>
          </ul>
        </Col>
      </Row>
    </Wrapper>
  </Container>
);

export default Footer;
