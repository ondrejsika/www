import React from "react";
import styled from "styled-components";
import { Col } from "react-bootstrap";
import BaseLandingPage from "@app/ondrejsika-theme/layouts/BaseLandingPage";

const Li = styled.li`
  list-style: none;
  padding: 1em 1em 1em 2em;
  :after {
    content: "♦";
    height: 0.5em;
    width: 0.5em;
    color: #131480;
    position: absolute;
    top: 1.35em;
    left: 0;
  }
  :before {
    display: none;
  }
`;

const Point = props => (
  <>
    <Col md={6}>
      <Li>
        <BaseLandingPage.H3>{props.text}</BaseLandingPage.H3>
      </Li>
    </Col>
  </>
);

export default Point;
