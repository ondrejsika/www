import React from "react";
import Header from "../components/Header";
import styled from "styled-components";
import Container from "react-bootstrap/Container";
import CourseBar from "../components/CourseBar";
import OurTeam from "../components/OurTeam";
import ond from "@app/data/pictures/ondrejsika.jpg";
import JanPospisil from "@app/data/pictures/lecturers/janpospisil.jpg";

const P = styled.p`
  padding: 0.5em 0;
  font-size: 1.3em;
`;

const Background = styled.div`
  margin-top: -0.5em;
  background: linear-gradient(#e4e4e4, white);
`;

const Index = () => (
  <>
    <Header header="SKOLENI.IO" />
    <Background>
      <Container>
        <P>
          Skoleni.io je platforma kde freelanceri mohou prezentovat sve kurzy a
          skoleni, prevazne IT. Platforma nabizi alternativu ke skolicim firmam,
          kde nevite kdo presne bude dane tema skolit a nevite jakou kvalitu
          ocekavat.
          <br /> Je to misto kde naleznete kurzy co dani profesionalove nabizi s
          referencemi od proskolenych lidi a firem. Nejsme skolici firma nebo
          agentura, kurzy si kazdy lektor resi po svem, od registrace (my pouze
          posleme email s poptavkou) az po platbu.
        </P>
      </Container>
    </Background>
    <CourseBar />
    <OurTeam
      lecturers={[
        [ond, "Ondřej Šika"],
        [JanPospisil, "Honza Pospíšil"]
      ]}
    />
  </>
);
export default Index;
