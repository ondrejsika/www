import React from "react";
import styled from "styled-components";
import { Container } from "react-bootstrap";
import H1 from "@app/skoleni.io/components/H1";

const Wrapper = styled.div`
  margin-bottom: 10em;
`;
const OurTeam = props => (
  <Wrapper>
    <Container>
      {props.lecturers.map((lecturer, i) => (
        <div key={i}>
          <a href={`/lektor/${lecturer[1]}`}>
            <p>
              <H1>{lecturer[0]}</H1>
            </p>
          </a>
        </div>
      ))}
    </Container>
  </Wrapper>
);
export default OurTeam;
