import React from "react";
import Link from "next/link";
import styled from "styled-components";

import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const HeaderLayout = styled(Container)`
  padding-right: 0 !important;
  padding-left: 0 !important;
`;
const Background = styled.div`
  color: white;
  background-color: #131480 !important;
  border-color: white;
`;
const Img = styled.img`
  height: 13em;
`;
const SiteHeader = styled.span`
  :hover {
    text-decoration: none;
  }
`;
const InnerContainer = styled(Container)`
  margin-bottom: 20px;
  padding-top: 20px;
  padding-bottom: 20px;
`;

const Header = props => (
  <HeaderLayout fluid>
    <Background>
      <InnerContainer>
        <Row>
          <Col md={9} xs={12}>
            <SiteHeader>
              <Link href="/">
                <a>
                  <h1 className="mb-0">{props.websiteHeader}</h1>
                </a>
              </Link>
            </SiteHeader>
            <p>
              by{" "}
              <Link href={props.byUrl}>
                <a>
                  <b>{props.byName}</b>
                </a>
              </Link>
            </p>
            {props.children}
          </Col>
          <Col md={3} xs={12}>
            <Img
              src={props.logoUrl}
              className="img-responsive d-none d-lg-block"
            />
          </Col>
        </Row>
      </InnerContainer>
    </Background>
  </HeaderLayout>
);

export default Header;
