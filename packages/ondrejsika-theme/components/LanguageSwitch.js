import React from "react";
import styled from "styled-components";
import Container from "react-bootstrap/Container";

const Wrapper = styled.div`
  background: #121480;
  text-align: right;
  padding-top: 0.5em;
`;

const White = styled.a`
  color: white !important;
`;

const LanguageSwitch = () => (
  <Wrapper>
    <Container>
      <White>🇬🇧/ 🇩🇪 / 🇨🇿</White>
    </Container>
  </Wrapper>
);

export default LanguageSwitch;
