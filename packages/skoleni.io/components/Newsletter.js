import React from "react";
import styled from "styled-components";
import Button from "@app/ondrejsika-theme/components/Button";
import H3 from "@app/skoleni.io/components/H3";

const Wrapper = styled.div`
  padding: 3em 0;
`;

const H3_white = styled(H3)`
  color: white;
`;

const P = styled.p`
  color: white;
`;

const Newsletter = props => (
  <Wrapper>
    <H3_white>{props.header}</H3_white>
    <P>{props.text}</P>
    <Button
      site={props.site}
      type="outline"
      href="https://sika.link/newsletter"
    >
      {props.btnText}
    </Button>
  </Wrapper>
);

export default Newsletter;
