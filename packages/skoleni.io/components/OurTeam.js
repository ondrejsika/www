import React from "react";
import styled from "styled-components";
import { Row } from "react-bootstrap";

const Img = styled.img`
  border-radius: 50%;
  width: 150px;
  text-align: center;
`;
const H4 = styled.h4`
  font-size: 1em;
  text-transform: capitalize;
  text-align: center;
  padding: 0.7em 0;
`;
const ImgWrapper = styled.div`
  padding-left: 1em;
  padding-top: 2em;
`;

const Wrapper = styled.div`
  width: 30%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
`;

const OurTeam = props => (
  <>
    <Wrapper>
      <Row>
        {props.lecturers.map((lector, i) => (
          <ImgWrapper key={i}>
            <Img src={lector[0]} fluid />
            <H4>{lector[1]}</H4>
          </ImgWrapper>
        ))}
      </Row>
    </Wrapper>
  </>
);
export default OurTeam;
