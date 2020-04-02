import React from "react";
import styled from "styled-components";
import { Container } from "react-bootstrap";
import H1 from "@app/skoleni.io/components/H1";

const Margin = styled.div`
  margin-bottom: 25em;
`;

const P = styled.p`
  margin: 1em 0;
`;

const Kontakty = () => (
  <>
    <Container>
      <H1>Kontakty</H1>
      <P>
        Chcete inzerovat sva skoleni na nasem webu? Napiste email a urcite se
        domluvime. Cena za inzerci je 20% z ceny kurzu za kazdeho kdo se na kurz
        registruje prez tento web. Pokud k vam klient, ktereho jste ziskali prez
        skoleni.io, prijde i na dalsi skoleni, budu rad kdyz zaplatite 5% z ceny
        kurzu. Verim ve svobodu a ferovost, chci at si kazdy sve kurzy promuje
        jak uzna za vhodne, skoleni.io nemusi byt jedine misto kde bude nabizet
        a prodavat kurzy. Je to ale dobre misto kde kurzy agregovat a nechat
        firmy prochazet nezavysle profesionaly.
      </P>
      <P>
        Mate zajem o kurz? Napiste nam email na:
        <br />
        <a href="mailto:skoleni@skoleni.io">skoleni@skoleni.io</a>
        <br />
        <br />
        Chcete s nami spolupracovat? Urcite se domluvime. Dejte vedet na:
        <br />
        <a href="mailto:spoluprace@skoleni.io">spoluprace@skoleni.io</a>
        <br />
        <br />
        Mate nejakou otazku? Nebojte se zeptat na:
        <br />
        <a href="mailto:dotazy@skoleni.io">dotazy@skoleni.io</a>
        <br />
      </P>
      <Margin />
    </Container>
  </>
);

export default Kontakty;
