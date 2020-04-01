import React from "react";
import styled from "styled-components";
import Container from "react-bootstrap/Container";

const H1 = styled.span`
  font-size: 6em;
  padding: 0.05em 0;
  font-weight: bold;
`;

const Lecturer = styled.span`
  font-size: 2em;
  font-weight: bold;
`;

const H3 = styled.h3``;

const Header = props => (
  <>
    <Container>
      <p>
        <H1>{props.header} </H1>
        {props.underline && <H3>{props.underline}</H3>}
        {props.lecturer && (
          <Lecturer>
            by <a href={`/lektor/${props.lecturerId}`}>{props.lecturer}</a>
          </Lecturer>
        )}
      </p>
    </Container>
  </>
);

export default Header;
