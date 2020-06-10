import React from "react";
import styled from "styled-components";
import { Col } from "react-bootstrap";
import BaseLandingPage from "@app/ondrejsika-theme/layouts/BaseLandingPage";
import Text from "@app/ondrejsika-theme/components/Lp-text";

const Li = styled.li`
  list-style: none;
  padding: 1em 1em 1em 2em;
  :after {
    content: "♦";
    height: 0.5em;
    width: 0.5em;
    color: #131480;
    position: absolute;
    top: 1.3em;
    left: 0;
  }
  :before {
    display: none;
  }
`;
const Pl = styled.div`
  padding-left: 2.3em;
`;
const Point = props => (
  <>
    <Col md={10}>
      <Li>
        <BaseLandingPage.H3>{props.point}</BaseLandingPage.H3>
      </Li>
      <Pl>
        <Text>{props.text}</Text>
      </Pl>
    </Col>
  </>
);

export default Point;
