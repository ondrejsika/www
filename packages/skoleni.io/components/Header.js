import React from "react";
import styled from "styled-components";
import Container from "react-bootstrap/Container";

const H1 = styled.h1`
  color: white;
  font-weight: bold;
  font-family: "IBM Plex Mono", monospace;
  font-size: 3.5em;
`;

const Lecturer = styled.h5`
  color: white;
`;

const Background = styled.div`
  background-color: #202020;
  margin: 1em 0;
`;

const Wrapper = styled.div`
  padding: 1em 0;
`;

const Header = props => (
  <>
    <Background>
      <Container>
        <Wrapper>
          <H1>{props.header}</H1>
          {props.lecturer && (
            <Lecturer>
              lektor:{" "}
              <a href={`/lektor/${props.lecturerId}`}>{props.lecturer}</a>
            </Lecturer>
          )}
        </Wrapper>
      </Container>
    </Background>
  </>
);

export default Header;
