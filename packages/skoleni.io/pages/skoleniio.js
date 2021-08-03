import React from "react";
import styled from "styled-components";
import { Container } from "react-bootstrap";
import H1 from "@app/skoleni.io/components/H1";
import Head from "next/head";

const Margin = styled.div`
  margin-bottom: 240px;
`;

const P = styled.p`
  margin: 1em 0;
`;

const Headline = styled.p`
  font-size: 2.2em;
`;

const Kontakty = () => (
  <>
    <Head>
      <title>O projektu - skoleni.io</title>
    </Head>
    <Container>
      <H1>O projektu</H1>
      <Headline>
        Cíl projektu školeni.io je propojit freelnace IT lektory a firmy,
        <br />
        které poptávají kvalitní lektory z první ruky.
      </Headline>
      <P>
        Portál nabízí školení přímo od freelance lektorů u kteých máte jistotu,
        že školení bude provádět konkrétní lektor...
      </P>
      <Margin />
    </Container>
  </>
);

export default Kontakty;
