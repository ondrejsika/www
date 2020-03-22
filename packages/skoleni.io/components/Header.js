import React from "react";
import styled from "styled-components";
import Container from "react-bootstrap/Container";

const H1 = styled.h1`
  color: white;
  font-weight: bold;
  padding: 1em 0;
  font-family: "IBM Plex Mono", monospace;
  font-size: 3.5em;
`;
const Background = styled.div`
  background-color: #202020;
`;
const Header = props => (
  <>
    <Background>
      <Container>
        <H1>{props.header}</H1>
      </Container>
    </Background>
  </>
);

export default Header;
