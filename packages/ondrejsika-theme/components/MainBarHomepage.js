import React from "react";
import color from "@app/ondrejsika-theme/config/colors";
import styled from "styled-components";
import { Container as BootstrapContainer } from "react-bootstrap";

const Background = styled.div`
  background-color: ${color.BLUE};
`;

const Text = styled.h3`
  color: ${color.WHITE};
  padding: 0;
  font-family: "IBM Plex Sans", sans-serif;
`;
const Header = styled.h1`
  font-weight: bolder;
  color: ${color.WHITE};
  padding: 0.5em 0;
`;
const Container = styled(BootstrapContainer)`
  padding: 1.5em 0.8em;
`;

const MainBarHomepage = props => (
  <Background>
    <Container>
      <Header>{props.header}</Header>
      <Text>{props.text}</Text>
    </Container>
  </Background>
);

export default MainBarHomepage;
