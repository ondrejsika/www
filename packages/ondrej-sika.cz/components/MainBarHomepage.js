import React from "react";
import color from "../config/colors";
import styled from "styled-components";

const TopBar = styled.div`
  background-color: ${color.BLUE};
`;

const MainBarText = styled.h3`
  color: ${color.WHITE};
  padding: 0;
`;
const MainBarHeader = styled.h1`
  font-weight: bolder;
  color: ${color.WHITE};
  padding: 0.5em 0;
`;
const Container = styled.div`
  padding: 1.5em 0.8em;
`;

const MainBarHomepage = props => (
  <div>
    <TopBar>
      <Container className="container">
        <MainBarHeader>{props.MainBarHeader}</MainBarHeader>
        <MainBarText>{props.MainBarText}</MainBarText>
      </Container>
    </TopBar>
  </div>
);

export default MainBarHomepage;
