import React from "react";
import styled from "styled-components";
import OurTeam from "@app/skoleni.io/components/OurTeam";
import ond from "@app/data/pictures/ondrejsika.jpg";
import JanPospisil from "@app/data/pictures/lecturers/janpospisil.jpg";
import { Container } from "react-bootstrap";
import Header from "@app/skoleni.io/components/Header";

const Margin = styled.div`
  margin: 22em;
`;

const lektori = () => (
  <>
    <Header header="Nasi lektori" underline="- vybirame z tech nejlepsich" />

    <Container>
      <OurTeam
        lecturers={[
          [ond, "Ondřej Šika"],
          [JanPospisil, "Honza Pospíšil"],
          [ond, "Ondřej Šika"],
          [JanPospisil, "Honza Pospíšil"],
          [ond, "Ondřej Šika"],
          [JanPospisil, "Honza Pospíšil"]
        ]}
      />
      <Margin />
    </Container>
  </>
);
export default lektori;
