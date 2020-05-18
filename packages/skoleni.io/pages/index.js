import React from "react";
import styled from "styled-components";
import Container from "react-bootstrap/Container";
import CourseBar from "../components/CourseBar";
import H3 from "@app/skoleni.io/components/H3";

const P = styled.p`
  padding: 0.5em 0 3em 0;
`;

const Index = () => (
  <Container>
    <CourseBar />
    <H3>Spoluprace</H3>
    <P>
      Chcete inzerovat sva skoleni na nasem webu? Napiste email a urcite se
      domluvime. Cena za inzerci je 20% z ceny kurzu za kazdeho, kdo se na kurz
      registruje pres tento web. Pokud k vam klient, ktereho jste ziskali prez
      skoleni.io, prijde i na dalsi skoleni, budu rad, kdyz zaplatite 5% z ceny
      kurzu. Verim ve svobodu a ferovost a chci, at si kazdy sve kurzy promuje,
      jak uzna za vhodne, skoleni.io nemusi byt jedine misto, kde bude nabizet a
      prodavat kurzy. Je to ale dobre misto, kde kurzy agregovat a nechat firmy
      prochazet nezavisle profesionaly.
    </P>
  </Container>
);
export default Index;

{
  /* 
              <H1>DOCKER </H1> <Lecturer>by Ondrej Sika</Lecturer>
            </p>
            <p>
              <H1>GIT </H1> <Lecturer>by Vojtech Mares</Lecturer>
            </p>
            <p>
              <H1>GITLAB CI </H1> <Lecturer>by Vojtech Mares</Lecturer>
            </p>
            <p>
              <H1>PROXMOX </H1> <Lecturer>by Michael Kaplan</Lecturer>
            </p>
            <p>
              <H1>ANSIBLE </H1> <Lecturer>by Ondrej Sika</Lecturer>
            </p>
            <p>
              <H1>ELK </H1> <Lecturer>by Ondrej Sika</Lecturer>
            </p>
            <p>
              <H1>REACT </H1> <Lecturer>by Ondrej Sika</Lecturer>
            </p> */
}
