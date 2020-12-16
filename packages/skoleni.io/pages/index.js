import React from "react";
import styled from "styled-components";
import Container from "react-bootstrap/Container";
import CourseBar from "../components/CourseBar";
import H3 from "@app/skoleni.io/components/H3";
import Head from "next/head";

const P = styled.p`
  padding: 0.5em 0 3em 0;
`;

const Index = () => (
  <>
    <Head>
      <title>skoleni.io</title>
    </Head>
    <Container>
      <CourseBar />
      <H3>Spolupráce</H3>
      <P>
        Chcete inzerovat svá školení na našem webu? Napište email a určitě se
        domluvíme. Věřím ve svobodu a férovost a chci, ať si každý své kurzy
        promuje, jak uzná za vhodné. Školení.io nemusí být jediné místo, kde
        budete nabízet a prodávat své kurzy. Je to ale dobré místo, kde kurzy
        agregovat a nabídnout se tak firmám hledající nezávislé profesionály.
      </P>
    </Container>
  </>
);
export default Index;
