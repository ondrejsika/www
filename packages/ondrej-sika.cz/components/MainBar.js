import React from "react";
import color from "../config/colors";
import styled from "styled-components";
import { Container as BootstrapContainer } from "react-bootstrap";

const Background = styled.div`
  background-color: ${color.BLUE};
`;

const Container = styled(BootstrapContainer)``;
const MainBar = props => (
  <Background>
    <Container>
      <div className="pt-3 pb-3">
        <h1 className="text-white pt-3 pb-3">{props.MainBarHeader}</h1>
        <p className="text-white" style={{ fontSize: "18px" }}>
          {props.MainBarText}
        </p>
      </div>
    </Container>
  </Background>
);

export default MainBar;
