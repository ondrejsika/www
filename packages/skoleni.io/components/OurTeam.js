import React from "react";
import styled from "styled-components";
import { Row, Container } from "react-bootstrap";

const Img = styled.img`
  width: 190px;
  text-align: center;
`;

const H4 = styled.h4`
  font-size: 1em;
  text-transform: capitalize;
  text-align: center;
  padding: 0.4em 0;
  margin-bottom: 0;
`;
const H5 = styled.h5`
  font-size: 0.8em;
  text-transform: capitalize;
  text-align: center;
  margin-bottom: 1em;
`;

const ImgWrapper = styled.div`
  margin-top: 1em;
`;

const OurTeam = props => (
  <Container>
    <ImgWrapper>
      <Row>
        {props.lecturers.map((lector, i) => (
          <div key={i}>
            <a href={`/lektor/${lector[2]}`}>
              <Img src={lector[0]} fluid />
              <H4>{lector[1]}</H4>
            </a>
            {lector[3] && <H5>( {lector[3]} )</H5>}
          </div>
        ))}
      </Row>
    </ImgWrapper>
  </Container>
);
export default OurTeam;
