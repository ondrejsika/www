import React from "react";
import Header from "../components/Header";
import styled from "styled-components";
import Container from "react-bootstrap/Container";
import CourseBar from "../components/CourseBar";

const P = styled.p`
  padding: 0.5em 0;
  font-size: 1.3em;
`;

const Margin = styled.div`
  margin: 6em;
`;

const Index = () => (
  <>
    <Header
      header="SKOLENI.IO"
      underline="Jsme platforma, kde freelanceri mohou prezentovat sve kurzy a
      skoleni, prevazne v IT."
    />
    <Container>
      <P>
        Platforma nabizi alternativu ke skolicim firmam, kde nevite kdo presne
        bude dane tema skolit a nevite jakou kvalitu ocekavat.
        <br /> Je to misto kde naleznete kurzy co dani profesionalove nabizi s
        referencemi od proskolenych lidi a firem. Nejsme skolici firma nebo
        agentura, kurzy si kazdy lektor resi po svem, od registrace (my pouze
        posleme email s poptavkou) az po platbu.
      </P>
    </Container>

    <CourseBar />
    <Container>
      <h3>Spoluprace</h3>
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
    </Container>
    <Margin />
  </>
);
export default Index;
