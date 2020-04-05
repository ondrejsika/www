import React from "react";
import styled from "styled-components";
import H3 from "@app/skoleni.io/components/H3";

const Wrapper = styled.div`
  padding: 3em 0;
  @media (max-width: 400px) {
    padding: 1em 0;
  }
`;

const H3_white = styled(H3)`
  color: white;
`;

const P = styled.p`
  color: white;
`;

const FooterButton = styled.a`
  color: white;
  border: 2px solid white;
  padding: 0.475rem 0.85rem;
  margin: 0.5em 0 1em 0;
  display: inline-block;
  font-weight: bold;
  &:hover {
    color: #1f1f1f;
    background-color: white;
    cursor: pointer;
  }
  @media (max-width: 400px) {
    padding: 0.375rem 0.45rem !important;
  }
`;

const Newsletter = props => (
  <Wrapper>
    <H3_white>{props.header}</H3_white>
    <P>{props.text}</P>
    <FooterButton href="https://sika.link/newsletter">
      {props.btnText}
    </FooterButton>
  </Wrapper>
);

export default Newsletter;
