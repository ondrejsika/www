import React from "react";
import styled from "styled-components";
import colors from "../config/colors";
import { Row, Col } from "react-bootstrap";

const Img = styled.img`
  border-radius: 50%;
  width: 100%;
  display: block;
`;
const H4 = styled.h4`
  font-size: 1em;
  text-transform: capitalize;
  text-align: center;
  padding: 0.7em 0;
`;
const ImgWrapper = styled.div`
  ${H4}:hover & {
    background-color: ${colors.LIGHT_GREY};
  }
`;

const OurTeam = (props) => (
  <>
    <Row>
      {props.lecturers.map((lector, i) => (
        <Col md={2} xs={4} key={i}>
          <ImgWrapper>
            <Img src={lector[0].src} fluid />
            <H4>{lector[1]}</H4>
          </ImgWrapper>
        </Col>
      ))}
    </Row>
  </>
);
export default OurTeam;
