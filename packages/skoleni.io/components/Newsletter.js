import React from "react";
import styled from "styled-components";
import Button from "@app/ondrejsika-theme/components/Button";

const Wrapper = styled.div`
  padding: 1em 1em;
`;

const Newsletter = props => (
  <Wrapper>
    <h3>{props.header}</h3>
    <p>{props.text}</p>
    <Button
      site={props.site}
      type="primary"
      href="https://sika.link/newsletter"
    >
      {props.btnText}
    </Button>
  </Wrapper>
);

export default Newsletter;
