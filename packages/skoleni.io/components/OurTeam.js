import React from "react";
import styled from "styled-components";
import { Container } from "react-bootstrap";
import H1 from "@app/skoleni.io/components/H1";
import Link from "@app/skoleni.io/components/MyLink";

const Wrapper = styled.div`
  margin-bottom: 10em;
`;
const OurTeam = props => (
  <Wrapper>
    <Container>
      {props.lecturers.map((lecturer, i) => (
        <div key={i}>
          <H1>
            <Link href={`/lektor/${lecturer[1]}`}>{lecturer[0]}</Link>
          </H1>
        </div>
      ))}
    </Container>
  </Wrapper>
);
export default OurTeam;
