import React from "react";
import default_colors from "@app/ondrejsika-theme/config/colors";
import styled from "styled-components";
import { Container as BootstrapContainer } from "react-bootstrap";

const Container = styled(BootstrapContainer)``;

const MainBar = props => {
  const Background = styled.div`
    background-color: ${(props.site &&
      props.site.colors &&
      props.site.colors.PRIMARY) ||
      default_colors.BLUE};
  `;
  return (
    <Background>
      <Container>
        <div className="pt-3 pb-3">
          <h1 className="text-white pt-3 pb-3">{props.header}</h1>
          <p className="text-white" style={{ fontSize: "18px" }}>
            {props.text}
          </p>
        </div>
      </Container>
    </Background>
  );
};

export default MainBar;
