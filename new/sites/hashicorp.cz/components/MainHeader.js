import React from "react";
import styled from "styled-components";
import { Container as BootstrapContainer } from "react-bootstrap";

const Container = styled(BootstrapContainer)`
  padding: 1.5em 0.8em;
`;
const MainHeader = props => {
  const Background = styled.div`
    background-color: #141480;
    /* background: ${props =>
      `url(${props.background}) no-repeat top center`}; */
  `;
  const H1 = styled.h1`
    color: white;
    padding: 3em 0 3em 0;
  `;
  return (
    <Background>
      <Container>
        <H1>{props.title}</H1>
      </Container>
    </Background>
  );
};

export default MainHeader;
