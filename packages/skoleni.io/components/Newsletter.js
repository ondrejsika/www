import React from "react";
import styled from "styled-components";
import H3 from "@app/skoleni.io/components/H3";

const H3_white = styled(H3)`
  color: white;
  text-transform: uppercase;
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

const Newsletter = (props) => (
  <>
    <H3_white>{props.header}</H3_white>
    <P>{props.text}</P>
    <FooterButton href="https://sika.link/newsletter">
      {props.btnText}
    </FooterButton>
  </>
);

export default Newsletter;
