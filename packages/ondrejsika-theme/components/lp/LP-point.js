import React from "react";
import styled, { css } from "styled-components";
import { Col } from "react-bootstrap";
import BaseLandingPage from "@app/ondrejsika-theme/layouts/BaseLandingPage";
import Text from "@app/ondrejsika-theme/components/lp/LP-text";

const Li = styled.li`
  list-style: none;
  padding: 1em 1em 0 2em;
  :after {
    ${props =>
      props.grey &&
      css`
        color: #c8bfb0;
        content: "▲";
      `}
    ${props =>
      props.fullBlue &&
      css`
        color: #141480 !important;
        content: "▲";
      `}
    
    height: 0.5em;
    width: 0.5em;
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

const Datum = styled.p`
  color: #131480;
  font-size: 20px;
`;
const Point = props => (
  <>
    <Col md={10}>
      <Li white={props.white} fullBlue={props.fullBlue}>
        <BaseLandingPage.H3>{props.point}</BaseLandingPage.H3>
      </Li>

      <Pl>
        <Datum>{props.datum}</Datum>
        <Text className="pt-3">{props.text}</Text>
      </Pl>
    </Col>
  </>
);

export default Point;
