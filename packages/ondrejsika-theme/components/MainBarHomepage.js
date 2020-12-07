import React from "react";
import default_colors from "@app/ondrejsika-theme/config/colors";
import styled from "styled-components";
import { Container as BootstrapContainer } from "react-bootstrap";

const TextBase = styled.h3`
  color: ${default_colors.WHITE};
  padding: 0;
  font-family: "IBM Plex Sans", sans-serif;
  font-weight: 200;
`;
const Header = styled.h1`
  font-weight: bolder;
  color: ${default_colors.WHITE};
  padding: 0.5em 0;
`;
const Container = styled(BootstrapContainer)`
  padding: 1.5em 0.8em 3.5em 0.8em;
`;

const MainBarHomepage = props => {
  const Background = styled.div`
    background-color: ${(props.site &&
      props.site.colors &&
      props.site.colors.PRIMARY) ||
      default_colors.BLUE};
  `;
  let Text = TextBase;
  if (props.textSize) {
    Text = styled(TextBase)`
      font-size: ${props.textSize};
    `;
  }
  return (
    <Background>
      <Container>
        <Header>{props.header}</Header>
        <Text>{props.text}</Text>
      </Container>
    </Background>
  );
};

export default MainBarHomepage;
