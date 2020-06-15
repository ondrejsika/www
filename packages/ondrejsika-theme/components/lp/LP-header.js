import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";
import Button from "@app/ondrejsika-theme/components/lp/LP-button";
import Text from "@app/ondrejsika-theme/components/lp/LP-text";
import Background from "@app/ondrejsika-theme/components/lp/LP-background";
import IconBtn from "@app/ondrejsika-theme/components/lp/LP-btnIcon";

const MainTitle = styled.h1`
  font-family: "IBM Plex Mono", monospace;
  font-weight: bold;
  letter-spacing: 0px;
  opacity: 1;
  color: white;

  font-size: 2.5rem;
  @media (max-width: 1200px) {
    font-size: 2rem;
  }
`;

const Img = styled.img`
  max-width: 100%;
  height: auto;
`;

const Header = props => (
  <>
    <Background blue paddingBottom="0">
      <Container>
        <Row>
          <Col lg={7}>
            <MainTitle className="pt-md-5">{props.header}</MainTitle>
            <Text white>{props.headerAbout}</Text>
            <Button inverse href={props.btn}>
              {props.findOutMore}
              <IconBtn padding_left src={props.btnIcon} />
            </Button>
          </Col>
          <Col lg={5}>
            <Img src={props.image} />
          </Col>
        </Row>
      </Container>
    </Background>
  </>
);

export default Header;
