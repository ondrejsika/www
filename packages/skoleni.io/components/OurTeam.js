import React from "react";
import styled from "styled-components";
import { Row, Container } from "react-bootstrap";

const Img = styled.img`
  width: 160px;
  text-align: center;
`;
const H4 = styled.h4`
  font-size: 1em;
  text-transform: capitalize;
  text-align: center;
  padding: 0.7em 0;
`;
const ImgWrapper = styled.div``;

const OurTeam = props => (
  <Container>
    <Row>
      {props.lecturers.map((lector, i) => (
        <ImgWrapper key={i}>
          <a href={`/lektor/${lector[2]}`}>
            <Img src={lector[0]} fluid />
            <H4>{lector[1]}</H4>
          </a>
        </ImgWrapper>
      ))}
    </Row>
  </Container>
);
export default OurTeam;
