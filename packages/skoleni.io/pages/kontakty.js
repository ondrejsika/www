import React from "react";
import styled from "styled-components";
import { Container } from "react-bootstrap";
import H1 from "@app/skoleni.io/components/H1";

const Margin = styled.div`
  margin-bottom: 10em;
`;

const P = styled.p`
  margin: 1em 0;
`;

const Kontakty = () => (
  <>
    <Container>
      <H1>Kontakty</H1>
      <P>
        Máte zájem o kurz? Napište nám email na:
        <br />
        <a href="mailto:skoleni@skoleni.io">skoleni@skoleni.io</a>
        <br />
        <br />
        Chcete s námi spolupracovat? Určitě se domluvíme. Dejte vědět na
        <br />
        <a href="mailto:spoluprace@skoleni.io">spoluprace@skoleni.io</a>
      </P>
      <Margin />
    </Container>
  </>
);

export default Kontakty;
